import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ItemTable1643617992000 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("INSERT INTO items(id, title, description, picture) VALUES ('1', 'Banana', 'Bananas from Ecuador', 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg')");
    await queryRunner.query("INSERT INTO items(id, title, description, picture) VALUES ('2', 'Orange', 'Oranges from Spain', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ambersweet_oranges.jpg/1200px-Ambersweet_oranges.jpg')");
    await queryRunner.query("INSERT INTO items(id, title, description, picture) VALUES ('3', 'Strawberry', 'Local German strawberries. Sweet and tasty.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/1200px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg')");
    await queryRunner.query("INSERT INTO items(id, title, description, picture) VALUES ('4', 'Pineapple', 'Ready-to-eat pineapple', 'https://upload.wikimedia.org/wikipedia/commons/7/74/%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg')");
    await queryRunner.query("INSERT INTO items(id, title, description, picture) VALUES ('5', 'Apple', 'Granny Smith apples', 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Granny_smith_and_cross_section.jpg')");
    await queryRunner.query("INSERT INTO items(id, title, description, picture) VALUES ('6', 'Kiwi', 'Just kiwis', 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg')");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DELETE
                       FROM items`);
  }

}
