interface Environment {
  API_BASE_URL: string;
}

const development: Environment = {
  API_BASE_URL: "http://10.0.2.2:8080",
};

const production: Environment = {
  API_BASE_URL: "https://davi.com/finances",
};

const getEnvironment = (): Environment => {
  const env = process.env.NODE_ENV || "development";

  if (env === "production") {
    return production;
  }

  return development;
};

export const environment = getEnvironment();
