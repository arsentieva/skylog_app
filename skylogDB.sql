CREATE TABLE "jumps" (
  "id" SERIAL PRIMARY KEY,
  "title" varchar,
  "date" timestamp,
  "exit" int,
  "open" int,
  "freefall" int,
  "speed" int,
  "location" string,
  "aircraft" string,
  "wind" int,
  "note" text,
  "signature" text,
  "jumpTypeId" int,
  "equipmentId" int,
  "userId" int,
  "createdAt" timestamp,
  "updatedAt" timestamp
);

CREATE TABLE "jumpTypes" (
  "id" int PRIMARY KEY,
  "type" varchar,
  "createdAt" timestamp,
  "updatedAt" timestamp
);

CREATE TABLE "equipment" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "containerMaker" varchar,
  "containerModel" varchar,
  "containerNumber" varchar,
  "mainMaker" varchar,
  "mainModel" varchar,
  "mainNumber" varchar,
  "reserveMaker" varchar,
  "reserveModel" varchar,
  "reserveNumber" varchar,
  "aadMaker" varchar,
  "aadModel" varchar,
  "aadNumber" varchar,
  "default" boolean,
  "lastRepack" timestamp,
  "createdAt" timestamp,
  "updatedAt" timestamp
);

CREATE TABLE "users" (
  "id" int PRIMARY KEY,
  "firstName" varchar,
  "lastName" varchar,
  "email" varchar,
  "equipmentId" int,
  "hashedPassword" varchar,
  "license" varchar
);

ALTER TABLE "jumps" ADD FOREIGN KEY ("jumpTypeId") REFERENCES "jumpTypes" ("id");

ALTER TABLE "jumps" ADD FOREIGN KEY ("userId") REFERENCES "users" ("id");

ALTER TABLE "jumps" ADD FOREIGN KEY ("equipmentId") REFERENCES "equipment" ("id");

ALTER TABLE "users" ADD FOREIGN KEY ("equipmentId") REFERENCES "equipment" ("id");
