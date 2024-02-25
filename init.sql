
CREATE TABLE IF NOT EXISTS user_fishlist (
  user_id   INT PRIMARY KEY,
  user_name VARCHAR NOT NULL,
  password_hash CHAR(60),
  favorite_dive_sites INT[],
  fish_list_id INT[],
  fish_seen_id INT[]
);

-- Load test user data from CSV file
COPY user_fishlist FROM '/docker-entrypoint-initdb.d/data/user-data.csv' DELIMITER ',' CSV HEADER;


CREATE TABLE IF NOT EXISTS dive_sites (
  id   INT PRIMARY KEY,
  lon DECIMAL NOT NULL,
  lat DECIMAL NOT NULL,
  site_name VARCHAR(255) NOT NULL,
  county_name VARCHAR(255) NOT NULL
);

-- Load data from CSV file
COPY dive_sites FROM '/docker-entrypoint-initdb.d/data/Florida-Dive-Sites.csv' DELIMITER ',' CSV HEADER;


CREATE TABLE IF NOT EXISTS counties (
  id   INT PRIMARY KEY,
  county_name VARCHAR(255) NOT NULL,
  name_ascii VARCHAR(255),
  type VARCHAR(255),
  county_fips INT,
  state_id CHAR(2),
  state_name VARCHAR(100),
  lat DECIMAL NOT NULL,
  lon DECIMAL NOT NULL,
  population INT
);

-- Load data from CSV file
COPY counties FROM '/docker-entrypoint-initdb.d/data/florida-counties.csv' DELIMITER ',' CSV HEADER;


CREATE TABLE IF NOT EXISTS fishes (
    id INT PRIMARY KEY,
    common_name VARCHAR NOT NULL,
    scientific_name VARCHAR,
    image_url VARCHAR,
    county TEXT[] NOT NULL,
    freshwater BOOLEAN,
    saltwater BOOLEAN,
    url VARCHAR,
    description VARCHAR
);

-- Load data from CSV file
COPY fishes FROM '/docker-entrypoint-initdb.d/data/florida_fishes.csv' DELIMITER ',' CSV HEADER;
