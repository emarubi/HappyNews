-- Deploy happynews:25-insertions-datas-activity to pg

BEGIN;

ALTER TABLE "user" ADD COLUMN "content" TEXT;

COMMIT;
