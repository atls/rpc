import type { Timestamp }   from '@bufbuild/protobuf'

import { IsOptional }       from 'class-validator'
import { ValidateNested }   from 'class-validator'

import { DateValuePayload } from '../values/index.js'

export class DateRangeConditionsPayload {
  constructor(
    private readonly conditions?: {
      from?: {
        value?: Date | Timestamp | undefined
      }
      to?: {
        value?: Date | Timestamp | undefined
      }
    }
  ) {}

  @IsOptional()
  @ValidateNested()
  get from(): DateValuePayload | undefined {
    return this.conditions?.from?.value
      ? new DateValuePayload(this.conditions?.from?.value)
      : undefined
  }

  @IsOptional()
  @ValidateNested()
  get to(): DateValuePayload | undefined {
    return this.conditions?.to?.value ? new DateValuePayload(this.conditions?.to?.value) : undefined
  }
}
