import {MigrationInterface, QueryRunner} from "typeorm";

export class table1641148587656 implements MigrationInterface {
    name = 'table1641148587656'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`todo\` CHANGE \`userId\` \`comment\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`todo\` DROP COLUMN \`comment\``);
        await queryRunner.query(`ALTER TABLE \`todo\` ADD \`comment\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`todo\` DROP COLUMN \`comment\``);
        await queryRunner.query(`ALTER TABLE \`todo\` ADD \`comment\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`todo\` CHANGE \`comment\` \`userId\` int NOT NULL`);
    }

}
