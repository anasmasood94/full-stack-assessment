module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "4b34e5f28e5d99cd5985b3724822987d"),
  },
});
