import { config, passport  } from '@imtbl/sdk';

const passportInstance = new passport.Passport({
    baseConfig: new config.ImmutableConfiguration({
        environment: config.Environment.SANDBOX,
    }),
    clientId: 'S6zlYWF3tBgGppBmFlvlnsLyJb0x0ugZ',
    redirectUri: 'https://simple-notes.vercel.app/notes',
    logoutRedirectUri: 'https://simple-notes.vercel.app',
    audience: 'platform_api',
    scope: 'openid offline_access email transact'
});

export default passportInstance;
