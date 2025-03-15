import type { Query }          from '@atls/query-types'

import { IsOptional }          from 'class-validator'
import { ValidateNested }      from 'class-validator'

import { BigIntValuePayload }  from '../values/index.js'
import { BigIntsValuePayload } from '../values/index.js'

export class BigIntConditionsPayload {
  constructor(private readonly conditions: Query.BigIntType['conditions']) {}

  @IsOptional()
  @ValidateNested()
  get eq(): BigIntValuePayload | undefined {
    return this.conditions?.eq?.value && this.conditions?.eq?.value >= 0
      ? new BigIntValuePayload(this.conditions?.eq?.value)
      : undefined
  }

  @IsOptional()
  @ValidateNested()
  get in(): BigIntsValuePayload | undefined {
    return this.conditions?.in?.values
      ? new BigIntsValuePayload(this.conditions?.in?.values)
      : undefined
  }
}
