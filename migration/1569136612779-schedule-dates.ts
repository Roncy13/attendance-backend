import {MigrationInterface, QueryRunner} from "typeorm";

export class scheduleDates1569136612779 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `schedule_date` (`id` int NOT NULL AUTO_INCREMENT, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `dates` datetime NOT NULL, `updatedById` int NOT NULL, `scheduleId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `schedule_date` ADD CONSTRAINT `FK_f2c5f24bc4e865fa7f3feec6964` FOREIGN KEY (`updatedById`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `schedule_date` ADD CONSTRAINT `FK_2693cb177d7a54989966365144a` FOREIGN KEY (`scheduleId`) REFERENCES `schedule`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `schedule_date` DROP FOREIGN KEY `FK_2693cb177d7a54989966365144a`", undefined);
        await queryRunner.query("ALTER TABLE `schedule_date` DROP FOREIGN KEY `FK_f2c5f24bc4e865fa7f3feec6964`", undefined);
        await queryRunner.query("DROP TABLE `schedule_date`", undefined);
    }

}
