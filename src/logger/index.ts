import { devLogger as development, noLogger as test, prodLogger as production } from './instances';

const env = process.env.NODE_ENV || 'development';

export const logger = { production, test, development }[env] || development;
