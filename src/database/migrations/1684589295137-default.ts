import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684589295137 implements MigrationInterface {
    name = 'Default1684589295137'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "modules" ("id" character varying NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7dbefd488bd96c5bf31f0ce0c95" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Lessons" ("id" character varying NOT NULL, "name" character varying NOT NULL, "date" TIMESTAMP WITH TIME ZONE NOT NULL, "moduleID" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_eb7fc69f3d047c6a2b4f51c6327" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Lessons" ADD CONSTRAINT "FK_ad7b62579eae63933a039fc22be" FOREIGN KEY ("moduleID") REFERENCES "modules"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lessons" DROP CONSTRAINT "FK_ad7b62579eae63933a039fc22be"`);
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`DROP TABLE "Lessons"`);
        await queryRunner.query(`DROP TABLE "modules"`);
    }

}
