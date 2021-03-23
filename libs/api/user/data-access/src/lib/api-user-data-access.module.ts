import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@stack-v4190/api/core/data-access'

import { ApiUserDataAccessService } from './api-user-data-access.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiUserDataAccessService],
  exports: [ApiUserDataAccessService],
})
export class ApiUserDataAccessModule {}
