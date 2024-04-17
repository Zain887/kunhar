import {writable, readable, derived, get} from 'svelte/store';
// eslint-disable-next-line valid-jsdoc
/**
 */
export function gotolocation(pageUrl) {
    location.href = pageUrl;
}

/**
* Google analytics function
* @param {string} eventName EventName which shown on analytics page
* @param {string} eventCategory Category it belongs to like 'payment'
* @param {string} eventLabel Lable of event like 'presale'
*/
export function handleGoogleTag(eventName, eventCategory, eventLabel) {
    gtag('event', eventName, {
        event_category: eventCategory,
        event_label: eventLabel,
    });
};


/* Creating role user is getting early access for */
/**
 * @param {string} urlPathname
 * @return {string} role
 */
export function gettingUserRole(urlPathname) {
    if (urlPathname === '/') {
        urlPathname = 'home';
    } else {
        urlPathname = urlPathname.substring(1);
    }
    return urlPathname;
};
export const title = writable('');
/**
 *
 * @param {string} name
 * @param {string} _default
 * @return {string}
 */
export function persistent(name, _default) {
    const getItem = (name) => localStorage[name] && JSON.parse(localStorage[name]);
    const setItem = (name, val) => [null, undefined, false].includes(val) ?
        localStorage.removeItem(name) :
        localStorage.setItem(name, JSON.stringify(val));

    if (_default != undefined && getItem(name) == undefined) {
        setItem(name, _default);
    }
    const {set, subscribe, update} = writable(getItem(name));
    subscribe((val) => {
        setItem(name, val);
        return getItem(name);
    });
    return {
        subscribe,
        update,
        set,
        get: () => getItem(name),
        merge: (val) => set({...getItem(name), ...val}),
        reset: () => set(_default),
    };
}
/**
 *
 * @param {string} ssrUrl
 * @return {string}
 */
export function createUrlStore(ssrUrl) {
    // Ideally a bundler constant so that it's tree-shakable
    if (typeof window === 'undefined') {
        const {subscribe} = writable(ssrUrl);
        return {subscribe};
    }

    const href = writable(window.location.href.replace(/\/$/, ''));

    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    const updateHref = () => href.set(window.location.href.replace(/\/$/, ''));

    history.pushState = function() {
        // eslint-disable-next-line prefer-rest-params
        originalPushState.apply(this, arguments);
        updateHref();
    };

    history.replaceState = function() {
        // eslint-disable-next-line prefer-rest-params
        originalReplaceState.apply(this, arguments);
        updateHref();
    };

    window.addEventListener('popstate', updateHref);
    window.addEventListener('hashchange', updateHref);

    return derived(href, ($href) => new URL($href));
}

export const goto = (loc) => {
    history.pushState(loc, null, loc);
};
