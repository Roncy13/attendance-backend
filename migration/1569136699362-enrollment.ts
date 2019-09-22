import {MigrationInterface, QueryRunner} from "typeorm";

export class enrollment1569136699362 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `enrollment` (`id` int NOT NULL AUTO_INCREMENT, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedById` int NOT NULL, `studentId` int NOT NULL, `scheduleId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `enrollment` ADD CONSTRAINT `FK_0f28f0f8d9ebed0508f3b0d3f0d` FOREIGN KEY (`updatedById`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `enrollment` ADD CONSTRAINT `FK_5ce702e71b98cc1bb37b81e83d8` FOREIGN KEY (`studentId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `enrollment` ADD CONSTRAINT `FK_a65adfe6ec4dd2e87838bb05b41` FOREIGN KEY (`scheduleId`) REFERENCES `schedule`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `enrollment` DROP FOREIGN KEY `FK_a65adfe6ec4dd2e87838bb05b41`", undefined);
        await queryRunner.query("ALTER TABLE `enrollment` DROP FOREIGN KEY `FK_5ce702e71b98cc1bb37b81e83d8`", undefined);
        await queryRunner.query("ALTER TABLE `enrollment` DROP FOREIGN KEY `FK_0f28f0f8d9ebed0508f3b0d3f0d`", undefined);
        await queryRunner.query("DROP TABLE `enrollment`", undefined);
    }

}
