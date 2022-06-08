import { Module } from '@nestjs/common';
import { RefundController } from './refund.controller';
import { RefundService } from './refund.service';

@Module({
  controllers: [RefundController],
  providers: [RefundService]
})
export class RefundModule {}
