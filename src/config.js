const config = {
    dev: process.env.NODE_ENV !== 'production',
    production: process.env.NODE_ENV === 'production',
    dialogFlowAccessToken: process.env.DIALOGFLOW_TOKEN || '5ede9a14ce884c3894f9c52a1cf19011'
}

export default config;
