import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';

import {AppService} from "./app.service";
import {Item} from './models/item';
import {Order} from "./models/order";

@Resolver(() => Item)
export class ItemResolver {
  constructor(private readonly appService: AppService) {
  }

  @Query(() => [Item])
  async items(): Promise<Item[]> {
    return await this.appService.findAllItems();
  }

}
