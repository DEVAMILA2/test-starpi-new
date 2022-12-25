module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','T1UZYFbCYW40dUL5U3+Pkw=='),
  },
});
