import {MigrationInterface, QueryRunner} from "typeorm";

export class schedule1569136492029 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `schedule` (`id` int NOT NULL AUTO_INCREMENT, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `start` datetime NOT NULL, `end` datetime NOT NULL, `assesment` datetime NULL, `updatedById` int NOT NULL, `trainerId` int NOT NULL, `courseId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `schedule` ADD CONSTRAINT `FK_3a00d788b5cd9bee8468c268a23` FOREIGN KEY (`updatedById`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `schedule` ADD CONSTRAINT `FK_349d527a10a121f1626b68d5a88` FOREIGN KEY (`trainerId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `schedule` ADD CONSTRAINT `FK_be84bbdf75cfb618d393a7f1194` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `schedule` DROP FOREIGN KEY `FK_be84bbdf75cfb618d393a7f1194`", undefined);
        await queryRunner.query("ALTER TABLE `schedule` DROP FOREIGN KEY `FK_349d527a10a121f1626b68d5a88`", undefined);
        await queryRunner.query("ALTER TABLE `schedule` DROP FOREIGN KEY `FK_3a00d788b5cd9bee8468c268a23`", undefined);
        await queryRunner.query("DROP TABLE `schedule`", undefined);
    }

}
