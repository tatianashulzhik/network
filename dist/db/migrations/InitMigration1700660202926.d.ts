import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class InitMigration1700660202926 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
