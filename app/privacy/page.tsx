"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Navbar theme="light" />
            <div className="container mx-auto px-4 py-32 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] mb-8 text-[#0a0c1b]">
                    Privacy Policy
                </h1>
                <div className="prose prose-lg prose-headings:text-[#0a0c1b] props-a:text-purple-600 max-w-none text-gray-600">
                    <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                    <p>
                        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Interpretation and Definitions</h2>
                    <h3 className="text-xl font-semibold mt-4 mb-2">Interpretation</h3>
                    <p>
                        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2">Definitions</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                        <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Wholesession.</li>
                        <li><strong>Service</strong> refers to the Website.</li>
                        <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Collecting and Using Your Personal Data</h2>
                    <h3 className="text-xl font-semibold mt-4 mb-2">Types of Data Collected</h3>

                    <h4 className="text-lg font-medium mt-3 mb-1">Personal Data</h4>
                    <p>
                        While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Email address</li>
                        <li>First name and last name</li>
                        <li>Phone number</li>
                        <li>Usage Data</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Retention of Your Personal Data</h2>
                    <p>
                        The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Security of Your Personal Data</h2>
                    <p>
                        The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, You can contact us:
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
