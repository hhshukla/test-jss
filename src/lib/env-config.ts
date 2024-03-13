// export environment variable
// with error/fallback handling

const GoogleApiKey: string = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || 'google-api-key';

// eslint-disable-next-line import/no-anonymous-default-export
export default { GoogleApiKey };
