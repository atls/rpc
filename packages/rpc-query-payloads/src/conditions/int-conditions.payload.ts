import type { Query }       from '@atls/query-types'

import { IsOptional }       from 'class-validator'
import { ValidateNested }   from 'class-validator'

import { IntValuePayload }  from '../values/index.js'
import { IntsValuePayload } from '../values/index.js'

export class IntConditionsPayload {
  constructor(private readonly conditions: Query.NumberType['conditions']) {}

  @IsOptional()
  @ValidateNested()
  get eq(): IntValuePayload | undefined {
    return this.conditions?.eq?.value && this.conditions?.eq?.value >= 0
      ? new IntValuePayload(this.conditions?.eq?.value)
      : undefined
  }

  @IsOptional()
  @ValidateNested()
  get in(): IntsValuePayload | undefined {
    return this.conditions?.in?.values
      ? new IntsValuePayload(this.conditions?.in?.values)
      : undefined
  }
}
