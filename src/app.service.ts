import { Injectable } from '@nestjs/common';
import {Item} from "./models/item";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Order} from "./models/order";

@Injectable()
export class AppService {

  constructor(
      @InjectRepository(Item)
      private readonly itemRepository: Repository<Item>,
      @InjectRepository(Order)
      private readonly orderRepository: Repository<Order>
  ) { }

 async findAllItems(): Promise<Item[]> {
    return this.itemRepository.find({});
  }


  async completeOrder(itemIds: string[], email: string): Promise<Order> {
    const items = await this.itemRepository.findByIds(itemIds);
    const order = this.orderRepository.create()
    order.email = email;
    order.items = items;
    return this.orderRepository.save(order);
  }
}
