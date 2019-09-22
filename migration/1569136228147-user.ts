import {MigrationInterface, QueryRunner} from "typeorm";

export class user1569136228147 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `firstName` varchar(100) NOT NULL, `middleName` varchar(100) NOT NULL, `lastName` varchar(100) NOT NULL, `birthday` datetime NOT NULL, `occupation` varchar(100) NOT NULL, `address` varchar(100) NOT NULL, `userType` int NOT NULL, `password` varchar(100) NOT NULL, `salt` varchar(100) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `user`", undefined);
    }
}
