
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
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
    firstName: string;
    courseTitle: string;
    courseSlug: string;
}

export const WelcomeEmail = ({
    firstName,
    courseTitle,
    courseSlug,
}: WelcomeEmailProps) => {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://wholesession.com";
    const syllabusLink = `${baseUrl}/syllabus/${courseSlug}.pdf`;
    const communityLink = "https://discord.gg/auEhMAMx";

    return (
        <Html>
            <Preview>Welcome to {courseTitle} - Onboarding Details</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Header */}
                    <Section style={{ textAlign: "center", paddingBottom: "20px" }}>
                        <Img
                            src={`${baseUrl}/ws-main.png`} // Ensure you have a logo hosted accessible URL
                            width="150"
                            alt="Wholesession"
                            style={{ margin: "0 auto" }}
                        />
                    </Section>

                    <Heading style={h1}>Welcome aboard, {firstName}! 🚀</Heading>

                    <Text style={text}>
                        We are thrilled to have you join the <strong>{courseTitle}</strong> cohort.
                        You've taken a significant step towards mastering your craft.
                    </Text>

                    <Section style={box}>
                        <Heading style={h2}>Your Next Steps</Heading>
                        <Text style={paragraph}>
                            1. <strong>Download the Syllabus:</strong> Get a head start on the curriculum.
                        </Text>
                        <Link href={syllabusLink} style={button}>
                            Download Syllabus (PDF)
                        </Link>

                        <Hr style={hr} />

                        <Text style={paragraph}>
                            2. <strong>Join the Community:</strong> Connect with your peers and instructors on our Discord server.
                        </Text>
                        <Link href={communityLink} style={link}>
                            Join Discord Community →
                        </Link>
                    </Section>

                    <Text style={text}>
                        We will send you a calendar invite for the first session separately.
                        If you have any questions, simply reach out to us <Link href="mailto:support@wholesession.com">here</Link>
                    </Text>

                    <Text style={footer}>
                        See you in class,<br />
                        The Wholesession Team
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

// Styles
const main = {
    backgroundColor: "#f6f9fc",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "40px 20px",
    borderRadius: "10px",
    maxWidth: "600px",
};

const h1 = {
    color: "#0a0c1b",
    fontSize: "24px",
    fontWeight: "600",
    textAlign: "center" as const,
    margin: "30px 0",
};

const h2 = {
    color: "#0a0c1b",
    fontSize: "18px",
    fontWeight: "600",
    marginTop: "0",
};

const text = {
    color: "#525f7f",
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "20px",
};

const paragraph = {
    color: "#525f7f",
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "10px",
};

const box = {
    padding: "24px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    marginBottom: "24px",
    border: "1px solid #eeeeee"
};

const button = {
    backgroundColor: "#372772",
    borderRadius: "5px",
    color: "#fff",
    display: "inline-block",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    padding: "12px 24px",
    marginTop: "10px",
    marginBottom: "20px"
};

const link = {
    color: "#372772",
    textDecoration: "underline",
    fontSize: "16px",
};

const hr = {
    borderColor: "#e6ebf1",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "14px",
    marginTop: "40px",
    textAlign: "center" as const,
};
