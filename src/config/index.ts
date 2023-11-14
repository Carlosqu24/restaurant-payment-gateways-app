const PAYPAL = {
    APP_NAME: process.env.REACT_PAYPAL_APP_NAME,
    CLIENT_ID: process.env.REACT_PAYPAL_CLIENT_ID,
    SECRET_KEY: process.env.REACT_PAYPAL_SECRET_KEY,
}

export const CONFIG = {
    ...PAYPAL
}