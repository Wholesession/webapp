
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

/**
 * Enhanced Conversion Tracking for Marketing (Meta Pixel + Mixpanel)
 */

export const trackLead = (props: { email: string; name: string; course: string; slug: string }) => {
    trackEvent("Waitlist Joined", props);

    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
            content_name: props.course,
            content_category: 'Course Waitlist',
            value: 0,
            currency: 'NGN'
        });
    }
};

export const trackPurchaseInit = (props: { course: string; amount: number; plan: string }) => {
    trackEvent("Checkout Initiated", props);

    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'InitiateCheckout', {
            content_name: props.course,
            value: props.amount,
            currency: 'NGN'
        });
    }
};

export const trackPurchaseSuccess = (props: { course: string; amount: number; reference: string }) => {
    trackEvent("Course Purchased", props);

    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Purchase', {
            content_name: props.course,
            value: props.amount,
            currency: 'NGN',
            content_type: 'product'
        });
    }
};
