import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class OrderTable1643467443000 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
        new Table({
              name: 'orders',
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
                  name: 'email',
                  type: 'varchar',
                  isNullable: false,
                }]
            }
        ),
        false,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE orders`);
  }

}
