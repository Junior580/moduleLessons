import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684591957564 implements MigrationInterface {
    name = 'Default1684591957564'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "modules" ADD "userID" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Lessons" ADD "userID" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "modules" ADD CONSTRAINT "FK_23d731f187eaa27dd632f0055c3" FOREIGN KEY ("userID") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "Lessons" ADD CONSTRAINT "FK_e75e9d98cf0fbcb36f85c38ed0b" FOREIGN KEY ("userID") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lessons" DROP CONSTRAINT "FK_e75e9d98cf0fbcb36f85c38ed0b"`);
        await queryRunner.query(`ALTER TABLE "modules" DROP CONSTRAINT "FK_23d731f187eaa27dd632f0055c3"`);
        await queryRunner.query(`ALTER TABLE "Lessons" DROP COLUMN "userID"`);
        await queryRunner.query(`ALTER TABLE "modules" DROP COLUMN "userID"`);
    }

}
