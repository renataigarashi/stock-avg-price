import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserAndStock1711134485998 implements MigrationInterface {
    name = 'CreateUserAndStock1711134485998'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tb_users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a2c23e0679749c22ffa6c2be910" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tb_stock" ("id" SERIAL NOT NULL, "ticket" character varying NOT NULL, "quantity" character varying NOT NULL, "purchasePrice" integer NOT NULL, "purchaseDate" TIMESTAMP NOT NULL, CONSTRAINT "PK_dda820940014f49777aef1ad1ed" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tb_users_stocks" ADD CONSTRAINT "FK_2610ba455a72b8132b12a6e59f1" FOREIGN KEY ("tbStockId") REFERENCES "tb_stock"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "tb_users_stocks" ADD CONSTRAINT "FK_5857da1c0f8cdb1b33279579bf3" FOREIGN KEY ("tbUsersId") REFERENCES "tb_users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_users_stocks" DROP CONSTRAINT "FK_5857da1c0f8cdb1b33279579bf3"`);
        await queryRunner.query(`ALTER TABLE "tb_users_stocks" DROP CONSTRAINT "FK_2610ba455a72b8132b12a6e59f1"`);
        await queryRunner.query(`DROP TABLE "tb_stock"`);
        await queryRunner.query(`DROP TABLE "tb_users"`);
    }

}
