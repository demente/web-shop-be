import {Module} from '@nestjs/common';
import {AppService} from './app.service';
import {GraphQLModule} from "@nestjs/graphql";
import { ItemResolver} from "./item.resolver";
import {Item} from "./models/item";
import {Order} from "./models/order";
import {TypeOrmModule} from "@nestjs/typeorm";
import { ConfigService, ConfigModule } from '@nestjs/config';
import {OrderResolver} from "./order.resolver";

@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: 'app.gql',
    debug: true,
    context: ({req}) => ({...req}),
  }),
    TypeOrmModule.forFeature([Item, Order])
  , TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (
          configService: ConfigService,
      ) => ({
            type: 'sqlite',
            database: './data/web-shop.sq3',
            synchronize: false,
            extra: { max: 1 },
            entities: [
              Item,
              Order
            ],
          }
      ),
    }),
  ],

  providers: [AppService, ItemResolver, OrderResolver],
})

export class AppModule {
}
