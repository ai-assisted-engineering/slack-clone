CREATE TABLE "test"."counters" (
	"id" serial PRIMARY KEY NOT NULL,
	"value" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
