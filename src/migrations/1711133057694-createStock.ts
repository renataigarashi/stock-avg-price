import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateStock1711133057694 implements MigrationInterface {
    name = 'CreateStock1711133057694'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tb_stock" ("id" SERIAL NOT NULL, "ticket" character varying NOT NULL, "quantity" character varying NOT NULL, "purchasePrice" integer NOT NULL, "purchaseDate" TIMESTAMP NOT NULL, CONSTRAINT "PK_dda820940014f49777aef1ad1ed" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tb_stock"`);
    }

}
