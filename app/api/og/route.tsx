import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Wholesession';

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#0a0c1b',
                    backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a2e 0%, #0a0c1b 100%)',
                    color: 'white',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '40px',
                    }}
                >
                    <div
                        style={{
                            fontSize: 60,
                            fontWeight: 'bold',
                            background: 'linear-gradient(to right, #4F70FF, #3876d3ff)',
                            backgroundClip: 'text',
                            color: 'transparent',
                            marginBottom: 20,
                        }}
                    >
                        Wholesession
                    </div>
                    <div style={{ fontSize: 40, fontWeight: 'bold', maxWidth: '80%' }}>
                        {title}
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}
