export const SERVER_ENV = process.env.SERVER_ENV || 'local';

// export const SERVER =
//   process.env.NODE_ENV === 'development'
//     ? 'http://10.10.23.61:7000'
//     : 'http://10.10.23.61:7000';

export const SERVER = process.env.API_URL || 'http://168.231.120.213:49015';

// Extract hostname from SERVER
export const SERVER_HOSTNAME = new URL(SERVER).hostname; // localhost || organica-client.vercel.app

export const APP_NAME = 'Organica Client';

export const API_BASE_URL = process.env.API_URL || `${SERVER}/api`;

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;
