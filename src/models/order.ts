import {Field, ID, ObjectType} from "@nestjs/graphql";
import {Item} from "./item";
import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity({ name: 'orders' })
@ObjectType('Order', { description: 'Completed order' })
class Order {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @ManyToMany(() => Item)
  @JoinTable({name: "order_items",
    joinColumn: {
      name: "order_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "item_id",
      referencedColumnName: "id"
    }})
  @Field(() => [Item])
  items: Item[];

  @Column('varchar', { nullable: false })
  @Field({nullable: false})
  email: string;
}

export {Order}
