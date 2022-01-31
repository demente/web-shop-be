import {Field, ID, ObjectType} from "@nestjs/graphql";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@ObjectType('Item', { description: 'Product available in the shop' })
@Entity({ name: 'items' })
class Item {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column('varchar', { nullable: true })
  @Field({nullable: true})
  description: string;

  @Column('varchar', { nullable: false })
  @Field()
  title: string;

  @Column('varchar', { nullable: true })
  @Field({nullable: true})
  picture: string;
}

export {Item}
