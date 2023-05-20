import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684589654479 implements MigrationInterface {
    name = 'Default1684589654479'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lessons" DROP CONSTRAINT "FK_ad7b62579eae63933a039fc22be"`);
        await queryRunner.query(`ALTER TABLE "Lessons" ADD CONSTRAINT "FK_ad7b62579eae63933a039fc22be" FOREIGN KEY ("moduleID") REFERENCES "modules"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lessons" DROP CONSTRAINT "FK_ad7b62579eae63933a039fc22be"`);
        await queryRunner.query(`ALTER TABLE "Lessons" ADD CONSTRAINT "FK_ad7b62579eae63933a039fc22be" FOREIGN KEY ("moduleID") REFERENCES "modules"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
    }

}
