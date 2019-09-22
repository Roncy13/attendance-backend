import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterUserMiddlename1569142848770 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `middleName` `middleName` varchar(100) NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `middleName` `middleName` varchar(100) NOT NULL", undefined);
    }

}
