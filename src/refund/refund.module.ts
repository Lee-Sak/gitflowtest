import { Module } from '@nestjs/common';
import { RefundController } from './refund.controller';
import { RefundService } from './refund.service';
// 모듈테스트
@Module({
  controllers: [RefundController],
  providers: [RefundService],
})
export class RefundModule {}
