const PAYPAL = {
    APP_NAME: import.meta.env.VITE_PAYPAL_APP_NAME,
    CLIENT_ID: import.meta.env.VITE_PAYPAL_CLIENT_ID,
    SECRET_KEY: import.meta.env.VITE_PAYPAL_SECRET_KEY,
}

export const CONFIG = {
    ...PAYPAL
}