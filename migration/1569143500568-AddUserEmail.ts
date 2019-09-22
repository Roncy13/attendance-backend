import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserEmail1569143500568 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` ADD `email` varchar(100) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `email`", undefined);
    }

}
