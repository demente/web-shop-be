import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType('item', { description: 'Product available in the shop' })
class Item {
  @Field(() => ID)
  id: string;

  @Field()
  description: string;

  @Field()
  title: string;

  @Field()
  picture: string;
}

export {Item}
