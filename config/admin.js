module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('T1UZYFbCYW40dUL5U3+Pkw=='),
  },
});
