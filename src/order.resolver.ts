import {Args, Mutation, Resolver} from '@nestjs/graphql';

import {AppService} from "./app.service";
import {Order} from "./models/order";

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly appService: AppService) {
  }

  @Mutation(() => Order)
  async completeOrder(
      @Args('itemIds', {type: () => [String]}) itemIds: string[],
      @Args('email', {type: () => String}) email: string,
  ): Promise<Order> {
    return await this.appService.completeOrder(itemIds, email);
  }

}
