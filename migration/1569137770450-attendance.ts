import {MigrationInterface, QueryRunner} from "typeorm";

export class attendance1569137770450 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `attendance` (`id` int NOT NULL AUTO_INCREMENT, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedById` int NOT NULL, `scheduleId` int NOT NULL, `enrollmentId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `attendance` ADD CONSTRAINT `FK_588f23b8fa19aae255816f076f2` FOREIGN KEY (`updatedById`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `attendance` ADD CONSTRAINT `FK_3e9494ce43bd943773a943aca89` FOREIGN KEY (`scheduleId`) REFERENCES `schedule_date`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `attendance` ADD CONSTRAINT `FK_5b9acff41f0a4f289f97d970a6e` FOREIGN KEY (`enrollmentId`) REFERENCES `enrollment`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `attendance` DROP FOREIGN KEY `FK_5b9acff41f0a4f289f97d970a6e`", undefined);
        await queryRunner.query("ALTER TABLE `attendance` DROP FOREIGN KEY `FK_3e9494ce43bd943773a943aca89`", undefined);
        await queryRunner.query("ALTER TABLE `attendance` DROP FOREIGN KEY `FK_588f23b8fa19aae255816f076f2`", undefined);
        await queryRunner.query("DROP TABLE `attendance`", undefined);
    }

}
