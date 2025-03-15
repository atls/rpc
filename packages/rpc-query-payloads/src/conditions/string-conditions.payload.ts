import type { Query }          from '@atls/query-types'

import { IsOptional }          from 'class-validator'
import { ValidateNested }      from 'class-validator'

import { StringValuePayload }  from '../values/index.js'
import { StringsValuePayload } from '../values/index.js'

export class StringConditionsPayload {
  constructor(private readonly conditions: Query.StringType['conditions']) {}

  @IsOptional()
  @ValidateNested()
  get contains(): StringValuePayload | undefined {
    return this.conditions?.contains?.value
      ? new StringValuePayload(this.conditions?.contains?.value)
      : undefined
  }

  @IsOptional()
  @ValidateNested()
  get eq(): StringValuePayload | undefined {
    return this.conditions?.eq?.value
      ? new StringValuePayload(this.conditions?.eq?.value)
      : undefined
  }

  @IsOptional()
  @ValidateNested()
  get in(): StringsValuePayload | undefined {
    return this.conditions?.in?.values
      ? new StringsValuePayload(this.conditions?.in?.values)
      : undefined
  }
}
