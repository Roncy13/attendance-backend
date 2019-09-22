import {MigrationInterface, QueryRunner} from "typeorm";

export class course1569136456536 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `course` (`id` int NOT NULL AUTO_INCREMENT, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(100) NOT NULL, `description` varchar(100) NULL, `updatedById` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `course` ADD CONSTRAINT `FK_03dbeeb602af5a09e4a5ffb84e1` FOREIGN KEY (`updatedById`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `course` DROP FOREIGN KEY `FK_03dbeeb602af5a09e4a5ffb84e1`", undefined);
        await queryRunner.query("DROP TABLE `course`", undefined);
    }

}
