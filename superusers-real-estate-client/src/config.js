const PRODUCTION = false;

const domain = PRODUCTION ? '157.245.39.204' : 'localhost:8080';
export const apiUrl = !PRODUCTION ? `http://${domain}` : `http://${domain}`;
