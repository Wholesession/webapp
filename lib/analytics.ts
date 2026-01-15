
import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

// Initialize mixpanel
if (typeof window !== 'undefined' && MIXPANEL_TOKEN) {
    mixpanel.init(MIXPANEL_TOKEN, {
        debug: process.env.NODE_ENV === 'development',
        track_pageview: true,
        persistence: 'localStorage',
    });
}

export const trackEvent = (eventName: string, props?: Record<string, any>) => {
    if (typeof window !== 'undefined' && MIXPANEL_TOKEN) {
        mixpanel.track(eventName, {
            ...props,
            source: 'webapp',
            timestamp: new Date().toISOString(),
        });
    }
};

export const identifyUser = (userId: string, email: string, name: string) => {
    if (typeof window !== 'undefined' && MIXPANEL_TOKEN) {
        mixpanel.identify(userId);
        mixpanel.people.set({
            $email: email,
            $name: name,
            $last_login: new Date().toISOString(),
        });
    }
};
