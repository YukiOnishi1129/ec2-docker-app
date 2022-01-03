import {MigrationInterface, QueryRunner} from "typeorm";

export class table1641150124368 implements MigrationInterface {
    name = 'table1641150124368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`todo\` DROP COLUMN \`comment\``);
        await queryRunner.query(`ALTER TABLE \`todo\` ADD \`comment\` text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`todo\` DROP COLUMN \`comment\``);
        await queryRunner.query(`ALTER TABLE \`todo\` ADD \`comment\` varchar(255) NOT NULL`);
    }

}
