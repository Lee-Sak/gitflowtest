import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './order/order.controller';
import { OrderModule } from './order/order.module';
import { ClaimModule } from './claim/claim.module';
import { ClaimController } from './claim/claim.controller';
import { RefundModule } from './refund/refund.module';

@Module({
  imports: [OrderModule, ClaimModule, RefundModule],
  controllers: [AppController, OrderController, ClaimController],
  providers: [AppService],
})
export class AppModule {}
