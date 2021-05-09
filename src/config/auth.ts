export default {
    jwt: {
        secret: process.env.APP_SECRET || 'default',
        privateKey: process.env.APP_PRIVATE_KEY || 'dedfault',
        publicKey: process.env.APP_PUBLIC_KEY || 'dedfault',
        expiresIn: '1d',
    }
}