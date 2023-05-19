import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684537833108 implements MigrationInterface {
    name = 'Default1684537833108'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "photo" ("id" integer NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "filename" character varying NOT NULL, "views" integer NOT NULL, "isPublished" boolean NOT NULL, CONSTRAINT "PK_723fa50bf70dcfd06fb5a44d4ff" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "photo"`);
    }

}
