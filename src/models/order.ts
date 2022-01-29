import {Field, ID, ObjectType} from "@nestjs/graphql";
import {Item} from "./item";

@ObjectType('order', { description: 'Completed order' })
class Order {
  @Field(() => ID)
  id: string;

  @Field(() => Item)
  items: Item[];

  @Field()
  email: string;
}

export {Order}
