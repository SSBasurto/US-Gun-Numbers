CREATE TABLE "schlshootings" (
	"id" VARCHAR NOT NULL,
	"State" VARCHAR  NOT NULL,
	"Number_of_School_Shootings" INT  NOT NULL,
	"2022_Pop" INT  NOT NULL,
	CONSTRAINT "pk_schlshootings" PRIMARY KEY (
	"id"
	)
);

CREATE TABLE "Guns_Per_CapData" (
	"State" VARCHAR(50) NOT NULL,
	"Guns_Registered" INT NOT NULL,
	"Population" INT NOT NULL,
	CONSTRAINT "pk_Guns_Per_CapData" PRIMARY KEY (
	"State"
	)
);

CREATE TABLE "Firearm_Mortality_Data" (
	"YEAR" INT NOT NULL,
	"STATE" VARCHAR(50) NOT NULL,
	"RATE" DECIMAL NOT NULL,
	"DEATHS" INT NOT NULL,
	"URL" VARCHAR NOT NULL
);

SELECT * FROM "schlshootings"

SELECT * FROM "Guns_Per_CapData"

SELECT * FROM "Firearm_Mortality_Data"

---import Guns_stats.csv file

CREATE TABLE "guns_stats" (
	"State" VARCHAR  NOT NULL,
	"Registered_Guns" INT  NOT NULL,
	"School_Shootings" INT  NOT NULL,
	"Population" INT  NOT NULL,
	"Gun_Ownership" VARCHAR  NOT NULL
);

SELECT * FROM "guns_stats"
