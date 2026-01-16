import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const title = searchParams.get('title') || 'Level up to senior roles';
        const subtitle = searchParams.get('subtitle') || 'Cohort-based learning taught by experts.';
        const category = searchParams.get('category') || 'Tech Education';

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        backgroundColor: '#0a0c1b',
                        backgroundImage: 'radial-gradient(circle at 75% 50%, #1a1a2e 0%, #0a0c1b 100%)',
                        padding: '80px',
                        position: 'relative',
                    }}
                >
                    {/* Decorative element */}
                    <div style={{
                        position: 'absolute',
                        top: 40,
                        right: 80,
                        padding: '10px 20px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '20px',
                        color: '#4F70FF',
                        fontSize: 24,
                        fontWeight: 'bold',
                        border: '1px solid rgba(79, 112, 255, 0.3)',
                    }}>
                        {category}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div
                            style={{
                                fontSize: 40,
                                fontWeight: 'bold',
                                color: '#4F70FF',
                                marginBottom: 20,
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Wholesession
                        </div>
                        <div
                            style={{
                                fontSize: 72,
                                fontWeight: 'bold',
                                color: 'white',
                                lineHeight: 1.1,
                                marginBottom: 30,
                                maxWidth: '900px',
                                letterSpacing: '-0.04em',
                            }}
                        >
                            {title}
                        </div>
                        <div
                            style={{
                                fontSize: 32,
                                color: '#94a3b8',
                                maxWidth: '800px',
                                lineHeight: 1.4,
                            }}
                        >
                            {subtitle}
                        </div>
                    </div>

                    {/* Footer bar */}
                    <div style={{
                        position: 'absolute',
                        bottom: 40,
                        left: 80,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 15
                    }}>
                        <div style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#4F70FF' }}></div>
                        <div style={{ fontSize: 24, color: '#64748b' }}>
                            wholesession.com
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            },
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
