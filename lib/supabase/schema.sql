
-- Create Users Table
create table public.users (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  full_name text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create Orders Table
create table public.orders (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.users(id) not null,
  course_slug text not null,
  amount_paid integer not null, -- Amount paid in this specific transaction
  total_course_amount integer not null, -- The full price of the course
  balance_due integer not null default 0, -- Remaining balance
  payment_plan text check (payment_plan in ('full', 'installment')) default 'full',
  paystack_reference text unique not null,
  status text check (status in ('pending', 'paid', 'failed')) default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create Waitlist Table
create table public.waitlist (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  full_name text not null,
  course_slug text not null,
  course_title text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(email, course_slug)
);

-- Enable Row Level Security (RLS)
alter table public.users enable row level security;
alter table public.orders enable row level security;
alter table public.waitlist enable row level security;

-- Create Policy: Service Role (Backend) can do anything
-- Note: In Supabase, the service_role key bypasses RLS, so explicit policies are mainly for client-side access.
-- Since this is a server-side flow, detailed RLS policies for public access aren't strictly necessary yet, 
-- but good practice to lock it down.

-- SECURE RLS POLICIES
-- Drop insecure policies if they exist from previous runs
drop policy if exists "Enable read access for all users" on public.users;
drop policy if exists "Enable read access for all users" on public.orders;

-- 1. USERS TABLE
-- Allow public to INSERT (so we can register them initially via API upsert if using client-side auth, 
-- but since we are effectively using server-side upsert, we actually don't even need public insert if only the API route does it.)
-- However, for the backend to work with the SERVICE_ROLE_KEY, we don't need strict policies for it (Service Role bypasses RLS).
-- The main goal is to BLOCK anonymous public users from SELECTing.

create policy "No public read access to users"
  on public.users
  for select
  using (false); -- No one (except Service Role) can select

-- 2. ORDERS TABLE
create policy "No public read access to orders"
  on public.orders
  for select
  using (false); -- No one (except Service Role) can select

create policy "No public read access to waitlist"
  on public.waitlist
  for select
  using (false); -- No one (except Service Role) can select

-- NOTE: If you ever implement client-side user login (e.g. Dashboard), you will need to add:
-- create policy "Users can see own orders" on public.orders for select using (auth.uid() = user_id);

