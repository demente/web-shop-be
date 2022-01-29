import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';

import {AppService} from "./app.service";
import {Item} from './models/item';
import {ShoppingCart} from "./models/shopping-cart";
import {Order} from "./models/order";

@Resolver(() => Item)
export class AppResolver {
  constructor(private readonly appService: AppService) {
  }

  @Query(() => [Item])
  async items(): Promise<Item[]> {
    return await this.appService.findAllItems();
  }

  @Mutation(() => ShoppingCart)
  async addItemToShoppingCart(
      @Args('itemId') itemId: string,
  ): Promise<ShoppingCart> {
    return this.appService.addItemToShoppingCart();
  }

  @Mutation(() => Order)
  async completeOrder(
      @Args('shoppingCartId') shoppingCartId: string,
      @Args('email') email: string,
  ): Promise<Order> {
    return;
  }

}
