import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ItemTable1643459524000 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
        new Table({
              name: 'items',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  isGenerated: true,
                  isNullable: false,
                  generationStrategy: 'uuid',
                },
                {
                  name: 'title',
                  type: 'varchar',
                  isNullable: false,
                },
                {
                  name: 'description',
                  type: 'varchar',
                  isNullable: true,
                },
                {
                  name: 'picture',
                  type: 'varchar',
                  isNullable: true,
                }]
            }
        ),
        false,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE items`);
  }

}
