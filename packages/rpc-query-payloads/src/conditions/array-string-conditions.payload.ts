import type { Query }              from '@atls/query-types'

import { IsOptional }              from 'class-validator'
import { ValidateNested }          from 'class-validator'

import { ArrayStringValuePayload } from '../values/index.js'

export class ArrayStringConditionsPayload {
  constructor(private readonly conditions: Query.ArrayStringType['conditions']) {}

  @IsOptional()
  @ValidateNested()
  get contains(): ArrayStringValuePayload | undefined {
    return this.conditions?.contains?.value
      ? new ArrayStringValuePayload(this.conditions?.contains?.value)
      : undefined
  }

  @IsOptional()
  @ValidateNested()
  get eq(): ArrayStringValuePayload | undefined {
    return this.conditions?.eq?.value
      ? new ArrayStringValuePayload(this.conditions?.eq?.value)
      : undefined
  }
}
