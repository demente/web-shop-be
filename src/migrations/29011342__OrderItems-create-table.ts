import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class OrderItemsTable1643467453000 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
        new Table({
              name: 'order_items',
              columns: [
                {
                  name: 'order_id',
                  type: 'varchar',
                  isNullable: false,
                },
                {
                  name: 'item_id',
                  type: 'varchar',
                  isNullable: false,
                }],
          foreignKeys: [
            {
              columnNames: ['order_id'],
              referencedTableName: 'orders',
              referencedColumnNames: ["id"],
              onDelete: "CASCADE",
              onUpdate: "CASCADE",
            },
            {
              columnNames: ['item_id'],
              referencedTableName: 'items',
              referencedColumnNames: ["id"],
              onDelete: "CASCADE",
              onUpdate: "CASCADE",
            }
          ]
            }
        ),
        false,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE orders`);
  }

}
