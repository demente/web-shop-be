import {Field, ID, ObjectType} from "@nestjs/graphql";
import {Item} from "./item";

@ObjectType('shopping_cart', { description: 'A shopping cart with selected items' })
class ShoppingCart{
  @Field(() => ID)
  id: string;

  @Field(() => Item)
  items: Item[];
}

export {ShoppingCart}
