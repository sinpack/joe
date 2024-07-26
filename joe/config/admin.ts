// Define the type for env
interface Env {
  (key: string): string | boolean;
  bool(key: string, defaultValue?: boolean): boolean;
}

// Define the configuration function
export default ({ env }: { env: Env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});
