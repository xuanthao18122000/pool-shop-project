import dotnev from "dotenv";
dotnev.config();

const env = {
  node_env: process.env.NODE_ENV,
  api_key: getString("API_KEY"),
  database: {
    HOST: getString("DB_HOST", "localhost"),
    PORT: getInt("DB_PORT", 5432),
    USER: getString("DB_USER"),
    PASS: getString("DB_PASS"),
    NAME: getString("DB_NAME"),
    LOGGING: getBoolean("DB_LOGGING"),
  },
  server: {
    PORT: getInt("SERVER_PORT", 4000),
    name: getString("LOGGER_APP_NAME"),
    secretKey: getString("SECRET_KEY"),
    testDBType: getString("TEST_DB_TYPE", "sqlite"),
    FAKE_USED_POINT: getBoolean("FAKE_USED_POINT"),
  },
  logger: {
    types: JSON.parse(process.env.LOGGER_NOTIFY_TYPES),
    settings: {
      discord: {
        token: process.env.LOGGER_DISCORD_TOKEN,
        channelId: process.env.LOGGER_DISCORD_ID_CHANNEL,
        serverId: process.env.LOGGER_DISCORD_ID_SERVER,
      },
    },
  },
  salt_rounds: {
    BCRYPT_SALT_ROUNDS: getInt("BCRYPT_SALT_ROUNDS", 10),
  },
  thirdParty: {
    minhLong: {
      loyaltyUrl: getString("URL_MINHLONG1"),
      ecomUrl: getString("URL_MINHLONG2"),
      MLToken: getString("ML_TOKEN"),
      MINHLONG_SUPPLIER_ID: getString("MINHLONG_SUPPLIER_ID"),
      MINHLONG_USER_ID: getString("MINHLONG_USER_ID"),
      MINHLONG_PASSWORD: getString("MINHLONG_PASSWORD"),
    },
    delivery: {
      TOKEN: getString("DELIVERY_TOKEN"),
      BASE_URL: getString("DELIVERY_BASE_URL"),
    },
  },
  seeder: {
    SEEDER_GENERATE_STRING_ID: getInt("SEEDER_GENERATE_STRING_ID"),
  },
  member: {
    AVATAR_DEFAULT: process.env.AVATAR_DEFAULT,
  },
};

function getString(name, defaultValue = "") {
  return process.env[name] || defaultValue;
}
function getInt(name, defaultValue = 0) {
  const value = parseInt(process.env[name]);
  if (isNaN(value)) return defaultValue;
  return value;
}

function getBoolean(name) {
  return process.env[name] === "true";
}

export default env;
