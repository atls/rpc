import type { Timestamp }      from '@bufbuild/protobuf'

import { IsOptional }          from 'class-validator'
import { ValidateNested }      from 'class-validator'

import { BooleanValuePayload } from '../values/index.js'
import { DateValuePayload }    from '../values/index.js'

export class DateConditionsPayload {
  constructor(
    private readonly conditions?: {
      exists?: {
        value: boolean
      }
      eq?: {
        value?: Date | Timestamp | undefined
      }
      lt?: {
        value?: Date | Timestamp | undefined
      }
      gt?: {
        value?: Date | Timestamp | undefined
      }
    }
  ) {}

  @IsOptional()
  @ValidateNested()
  get exists(): BooleanValuePayload | undefined {
    return this.conditions?.exists?.value === true || this.conditions?.exists?.value === false
      ? new BooleanValuePayload(this.conditions?.exists?.value)
      : undefined
  }

  @IsOptional()
  @ValidateNested()
  get eq(): DateValuePayload | undefined {
    return this.conditions?.eq?.value ? new DateValuePayload(this.conditions?.eq?.value) : undefined
  }

  @IsOptional()
  @ValidateNested()
  get lt(): DateValuePayload | undefined {
    return this.conditions?.lt?.value ? new DateValuePayload(this.conditions?.lt?.value) : undefined
  }

  @IsOptional()
  @ValidateNested()
  get gt(): DateValuePayload | undefined {
    return this.conditions?.gt?.value ? new DateValuePayload(this.conditions?.gt?.value) : undefined
  }
}
