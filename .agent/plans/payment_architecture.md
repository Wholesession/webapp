# Paystack Payment Architecture Plan

This document outlines the secure, production-grade architecture for processing payments for Wholesession courses using Paystack.

## 1. High-Level Workflow

We will implement a **Server-Initiated Transaction Flow**. This is more secure than client-side initialization as it allows us to track the transaction state in our database before the user even pays.

1.  **User** clicks "Enroll" on a course.
2.  **Frontend** collects user details (Name, Email).
3.  **Frontend** calls internal API `POST /api/payment/initialize`.
4.  **Backend**:
    *   Creates a `Pending` order record in the database (Supabase).
    *   Calls Paystack API to initialize transaction.
    *   Returns the **authorization URL** to the frontend.
5.  **Frontend** redirects user to Paystack's secure payment page.
6.  **User** completes payment.
7.  **Paystack** redirects user to `wholesession.com/checkout/success`.
8.  **Async Webhook**: Paystack sends a `charge.success` event to `POST /api/webhooks/paystack`.
    *   **Backend** validates the signature (security check).
    *   **Backend** updates User + Order status to `Paid`.
    *   **Backend** triggers a "Welcome" email via Resend.

---

## 2. Database Schema (Supabase)

We need to store transaction data to ensure access control and auditing.

### Table: `users` (or `students`)
| Column | Type | Notes |
| :--- | :--- | :--- |
| `id` | uuid | Primary Key |
| `email` | text | Unique, Indexed |
| `full_name` | text | |
| `created_at` | timestamp | |

### Table: `orders`
| Column | Type | Notes |
| :--- | :--- | :--- |
| `id` | uuid | Primary Key |
| `user_id` | uuid | FK to `users` |
| `course_slug` | text | e.g., "backend-engineering" |
| `amount` | integer | In kobo (e.g., 35000000) |
| `paystack_reference` | text | Unique transaction ref |
| `status` | enum | `pending`, `paid`, `failed` |
| `created_at` | timestamp | |

---

## 3. API Route Definitions

### 1. Initialize Payment
*   **Endpoint:** `POST /api/payment/initialize`
*   **Body:** `{ email, name, courseSlug }`
*   **Logic:**
    1.  Upsert user in DB.
    2.  Check if user is already enrolled (opt).
    3.  Generate unique reference.
    4.  Insert `pending` order into DB.
    5.  Call Paystack `transaction/initialize`.
    6.  Return checkout URL.

### 2. Webhook Handler (Crucial)
*   **Endpoint:** `POST /api/webhooks/paystack`
*   **Logic:**
    1.  **Verify Signature:** Check `x-paystack-signature` header against your Secret Key using HMAC SHA512. **(Critical Security Step)**.
    2.  **Parse Event:** Check for `charge.success`.
    3.  **Idempotency:** Check if order is already marked `paid` to avoid double-processing.
    4.  **Update DB:** Set order status to `paid`.
    5.  **Send Email:** Trigger welcome email.
    6.  Return `200 OK` to Paystack.

---

## 4. Security & Best Practices

1.  **Secret Management**: Paystack Secret Key is stored ONLY in server-side environment variables (`PAYSTACK_SECRET_KEY`). Never expose this to the client.
2.  **Webhook Verification**: We will not rely on the client-side redirect to confirm payment. Users can close the tab before redirecting. The Webhook is the single source of truth.
3.  **Atomic Transactions**: DB updates should be atomic where possible to prevent edge cases.

## 5. Technology Stack choices

*   **DB**: Supabase (PostgreSQL) - Easy setup, type-safe.
*   **Email**: Resend - Best-in-class developer experience for transactional emails.
*   **Payments**: Paystack Node SDK (or raw Axios calls).

---

## TODO Checklist

- [ ] Set up Supabase project & Table schemas.
- [ ] Configure Environment Variables (`NEXT_PUBLIC_PAYSTACK_KEY`, `PAYSTACK_SECRET`, `SUPABASE_URL`, `SUPABASE_KEY`).
- [ ] Create Database Helper functions (`createOrder`, `updateOrderStatus`).
- [ ] Implement `initialize` API route.
- [ ] Implement `webhook` API route.
- [ ] Integrate into `CheckoutForm` component.
