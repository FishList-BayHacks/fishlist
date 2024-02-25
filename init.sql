
CREATE TABLE IF NOT EXISTS user_list (
  user_id   INT PRIMARY KEY,
  fish_list_names VARCHAR(50),
  seen_status     BOOLEAN NOT NULL
);


CREATE TABLE IF NOT EXISTS dive_sites (
  id   INT PRIMARY KEY,
  lon DECIMAL NOT NULL,
  lat DECIMAL NOT NULL,
  site_name VARCHAR(255) NOT NULL,
  county_name VARCHAR(255) NOT NULL
);


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