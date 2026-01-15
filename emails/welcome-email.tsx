
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

interface WelcomeEmailProps {
    firstName: string;
    courseTitle: string;
    courseSlug: string;
    reference: string;
}

export const WelcomeEmail = ({
    firstName,
    courseTitle,
    courseSlug,
    reference,
}: WelcomeEmailProps) => {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://wholesession.com";
    const syllabusLink = `${baseUrl}/syllabus/${courseSlug}.pdf`;
    const communityLink = `${baseUrl}/api/auth/discord/login?reference=${reference}`;

    return (
        <Html>
            <Preview>Welcome to the cohort, {firstName}! 🚀</Preview>
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
                        <Text style={badge}>REGISTRATION CONFIRMED</Text>
                        <Heading style={h1}>It's official. You're in, {firstName}!</Heading>
                        <Text style={heroText}>
                            Welcome to <strong>{courseTitle}</strong> by <strong>Wholesession</strong>. You've joined a community of ambitious
                            learners dedicated to pushing the boundaries of what's possible. We're honored
                            to be part of your growth journey.
                        </Text>

                        <Section style={card}>
                            <Heading style={cardTitle}>Your Onboarding Kit</Heading>
                            <Text style={cardDescription}>
                                Everything you need to hit the ground running before our first session.
                            </Text>

                            <Hr style={hr} />

                            <Section>
                                <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                                    <tr>
                                        <td style={{ verticalAlign: 'top', width: '44px' }}>
                                            <div style={stepNumber}>01</div>
                                        </td>
                                        <td style={{ verticalAlign: 'top' }}>
                                            <Text style={stepTitle}>Master the Curriculum</Text>
                                            <Text style={stepText}>
                                                Download your course design document. It contains the full schedule,
                                                learning objectives, and recommended pre-reads.
                                            </Text>
                                            <Button href={syllabusLink} style={primaryButton}>
                                                Download Course Design
                                            </Button>
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
                                            <Text style={stepTitle}>Meet the Community</Text>
                                            <Text style={stepText}>
                                                Our Discord is where the magic happens. Introduce yourself in the
                                                #introductions channel and meet your fellow cohort members.
                                            </Text>
                                            <Button href={communityLink} style={secondaryButton}>
                                                Join Discord Community →
                                            </Button>
                                        </td>
                                    </tr>
                                </table>
                            </Section>
                        </Section>

                        <Section style={infoSection}>
                            <Heading style={h3}>Important Notice</Heading>
                            <Text style={infoText}>
                                Keep an eye on your inbox. You'll receive a separate calendar invite for
                                our live sessions within the next 48 hours.
                            </Text>
                        </Section>

                        <Text style={signOff}>
                            Let's build something great,<br />
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

const primaryButton = {
    backgroundColor: brandColor,
    borderRadius: "8px",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "600",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    padding: "12px 24px",
};

const secondaryButton = {
    color: brandColor,
    fontSize: "15px",
    fontWeight: "600",
    textDecoration: "underline",
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
