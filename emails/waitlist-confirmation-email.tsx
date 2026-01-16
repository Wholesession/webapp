
import {
    Html,
    Body,
    Container,
    Text,
    Link,
    Preview,
    Section,
    Heading,
    Img,
    Hr,
    Button,
} from "@react-email/components";
import * as React from "react";

interface WaitlistConfirmationEmailProps {
    firstName: string;
    courseTitle: string;
}

export const WaitlistConfirmationEmail = ({
    firstName,
    courseTitle,
}: WaitlistConfirmationEmailProps) => {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://wholesession.com";

    return (
        <Html>
            <Preview>You're on the list for {courseTitle}! 🚀</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Brand Banner */}
                    <Section style={brandBanner}>
                        <Img
                            src={`${baseUrl}/ws-seo.jpg`}
                            width="140"
                            alt="Wholesession"
                            style={logo}
                        />
                    </Section>

                    <Section style={content}>
                        <Text style={badge}>WAITLIST CONFIRMED</Text>
                        <Heading style={h1}>You're on the list, {firstName}!</Heading>
                        <Text style={heroText}>
                            We've successfully added you to the private waitlist for <strong>{courseTitle}</strong>.
                            You'll be the first to know when we open applications for the next cohort.
                        </Text>

                        <Section style={card}>
                            <Heading style={cardTitle}>What happens next?</Heading>
                            <Text style={cardDescription}>
                                Here's what you can expect from us in the coming weeks.
                            </Text>

                            <Hr style={hr} />

                            <Section>
                                <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                                    <tr>
                                        <td style={{ verticalAlign: 'top', width: '44px' }}>
                                            <div style={stepNumber}>01</div>
                                        </td>
                                        <td style={{ verticalAlign: 'top' }}>
                                            <Text style={stepTitle}>Priority Access</Text>
                                            <Text style={stepText}>
                                                Waitlist members get 24-hour early access to register before we open to the public.
                                                Cohorts are small (30 seats), so this is your best chance to secure a spot.
                                            </Text>
                                        </td>
                                    </tr>
                                </table>
                            </Section>

                            <Section style={{ marginTop: '32px' }}>
                                <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                                    <tr>
                                        <td style={{ verticalAlign: 'top', width: '44px' }}>
                                            <div style={stepNumber}>02</div>
                                        </td>
                                        <td style={{ verticalAlign: 'top' }}>
                                            <Text style={stepTitle}>Exclusive Content</Text>
                                            <Text style={stepText}>
                                                While you wait, we'll send you a few "Deep Dive" articles and resources
                                                related to {courseTitle} to help you start leveling up right now.
                                            </Text>
                                        </td>
                                    </tr>
                                </table>
                            </Section>
                        </Section>

                        <Section style={infoSection}>
                            <Heading style={h3}>Spread the word</Heading>
                            <Text style={infoText}>
                                Know someone who would be a great fit for this cohort? Share Wholesession with them.
                                Building great things is better with a network.
                            </Text>
                        </Section>

                        <Text style={signOff}>
                            Talk soon,<br />
                            <strong>The Wholesession Team</strong>
                        </Text>
                    </Section>

                    <Section style={footer}>
                        <Img
                            src={`${baseUrl}/ws-seo.jpg`}
                            width="90"
                            alt="Wholesession"
                            style={{ margin: "0 auto", filter: "grayscale(100%)", opacity: 0.5 }}
                        />
                        <Text style={footerText}>
                            &copy; {new Date().getFullYear()} Wholesession. All rights reserved.<br />
                            Helping you master modern technology and business.
                        </Text>
                        <div style={socialLinks}>
                            <Link href="https://twitter.com/wholesession" style={socialLink}>Twitter</Link>
                            <span style={dot}>&bull;</span>
                            <Link href="https://linkedin.com/company/wholesession" style={socialLink}>LinkedIn</Link>
                        </div>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

// --- Styles ---

const brandColor = "#4F70FF";

const main = {
    backgroundColor: "#F4F7FF",
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    padding: "20px 0",
};

const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    maxWidth: "600px",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
};

const brandBanner = {
    backgroundColor: "#0A0C1B",
    padding: "32px",
    textAlign: "center" as const,
};

const logo = {
    margin: "0 auto",
};

const content = {
    padding: "40px",
};

const badge = {
    color: brandColor,
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "1.2px",
    textAlign: "center" as const,
    textTransform: "uppercase" as const,
    marginBottom: "12px",
    margin: "0 auto",
    display: "block",
};

const h1 = {
    color: "#1A1C25",
    fontSize: "32px",
    fontWeight: "800",
    textAlign: "center" as const,
    margin: "0 0 24px 0",
    lineHeight: "1.2",
};

const heroText = {
    color: "#4B4E5E",
    fontSize: "17px",
    lineHeight: "26px",
    textAlign: "center" as const,
    marginBottom: "40px",
};

const card = {
    backgroundColor: "#F9FAFF",
    borderRadius: "16px",
    padding: "32px",
    border: "1px solid #E5E9FF",
    marginBottom: "32px",
};

const cardTitle = {
    color: "#1A1C25",
    fontSize: "20px",
    fontWeight: "700",
    margin: "0 0 8px 0",
};

const cardDescription = {
    color: "#717482",
    fontSize: "15px",
    margin: "0",
};

const hr = {
    borderColor: "#E5E9FF",
    margin: "24px 0",
};

const stepNumber = {
    color: brandColor,
    fontSize: "14px",
    fontWeight: "900",
    backgroundColor: "#EEF1FF",
    width: "28px",
    height: "28px",
    borderRadius: "6px",
    textAlign: "center" as const,
    lineHeight: "28px",
    margin: "0 16px 0 0",
    flexShrink: 0,
};

const stepTitle = {
    color: "#1A1C25",
    fontSize: "16px",
    fontWeight: "700",
    margin: "0 0 8px 0",
};

const stepText = {
    color: "#4B4E5E",
    fontSize: "15px",
    lineHeight: "22px",
    margin: "0 0 16px 0",
};

const infoSection = {
    padding: "20px",
    backgroundColor: "#F0F2FF",
    borderRadius: "12px",
    marginBottom: "40px",
    borderLeft: `4px solid ${brandColor}`,
};

const h3 = {
    color: "#1A1C25",
    fontSize: "15px",
    fontWeight: "700",
    margin: "0 0 4px 0",
};

const infoText = {
    color: "#4B4E5E",
    fontSize: "14px",
    lineHeight: "21px",
    margin: 0,
};

const signOff = {
    color: "#1A1C25",
    fontSize: "16px",
    lineHeight: "24px",
    margin: 0,
};

const footer = {
    padding: "40px",
    backgroundColor: "#F9FAFB",
    textAlign: "center" as const,
};

const footerText = {
    color: "#9CA3AF",
    fontSize: "13px",
    lineHeight: "20px",
    marginTop: "20px",
};

const socialLinks = {
    marginTop: "16px",
};

const socialLink = {
    color: "#9CA3AF",
    fontSize: "13px",
    textDecoration: "none",
};

const dot = {
    color: "#D1D5DB",
    margin: "0 8px",
};
