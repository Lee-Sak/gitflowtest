import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './order/order.controller';
import { OrderModule } from './order/order.module';

@Module({
  imports: [OrderModule],
  controllers: [AppController, OrderController],
  providers: [AppService],
})
export class AppModule {}
