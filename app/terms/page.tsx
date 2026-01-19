"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Navbar theme="light"/>
            <div className="container mx-auto px-4 py-32 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] mb-8 text-[#0a0c1b]">
                    Terms of Service
                </h1>
                <div className="prose prose-lg prose-headings:text-[#0a0c1b] props-a:text-purple-600 max-w-none text-gray-600">
                    <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                    <p>
                        Please read these terms and conditions carefully before using Our Service.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Acknowledgment</h2>
                    <p>
                        These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                    </p>
                    <p>
                        Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">User Accounts</h2>
                    <p>
                        When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service.
                    </p>
                    <p>
                        You are responsible for safeguarding the password that You use to access the Service and for any activities or actions under Your password, whether Your password is with Our Service or a Third-Party Social Media Service.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Intellectual Property</h2>
                    <p>
                        The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of the Company and its licensors.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Termination</h2>
                    <p>
                        We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
                    </p>
                    <p>
                        Upon termination, Your right to use the Service will cease immediately. If You wish to terminate Your Account, You may simply discontinue using the Service.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
                    <p>
                        Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law</h2>
                    <p>
                        The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
                    <p>
                        If you have any questions about these Terms and Conditions, You can contact us:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>By email: support@wholesession.com</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </main>
    );
}
