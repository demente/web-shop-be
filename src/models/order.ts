import {Field, ID, ObjectType} from "@nestjs/graphql";
import {Item} from "./item";
import {Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity({ name: 'orders' })
@ObjectType('order', { description: 'Completed order' })
class Order {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @ManyToMany(() => Item)
  @JoinTable({name: "order_items"})
  @Field(() => Item)
  items: Item[];

  @Field()
  email: string;
}

export {Order}
