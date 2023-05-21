import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684680613765 implements MigrationInterface {
    name = 'Default1684680613765'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "modules" DROP CONSTRAINT "FK_23d731f187eaa27dd632f0055c3"`);
        await queryRunner.query(`ALTER TABLE "Lessons" DROP CONSTRAINT "FK_e75e9d98cf0fbcb36f85c38ed0b"`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "modules" ADD CONSTRAINT "FK_23d731f187eaa27dd632f0055c3" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "Lessons" ADD CONSTRAINT "FK_e75e9d98cf0fbcb36f85c38ed0b" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lessons" DROP CONSTRAINT "FK_e75e9d98cf0fbcb36f85c38ed0b"`);
        await queryRunner.query(`ALTER TABLE "modules" DROP CONSTRAINT "FK_23d731f187eaa27dd632f0055c3"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`ALTER TABLE "Lessons" ADD CONSTRAINT "FK_e75e9d98cf0fbcb36f85c38ed0b" FOREIGN KEY ("userID") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "modules" ADD CONSTRAINT "FK_23d731f187eaa27dd632f0055c3" FOREIGN KEY ("userID") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
    }

}
