import type { Query }          from '@atls/query-types'

import { IsOptional }          from 'class-validator'
import { ValidateNested }      from 'class-validator'

import { BooleanValuePayload } from '../values/index.js'
import { IdValuePayload }      from '../values/index.js'
import { IdsValuePayload }     from '../values/index.js'

export class IdConditionsPayload {
  constructor(private readonly conditions: Query.IDType['conditions']) {}

  @IsOptional()
  @ValidateNested()
  get exists(): BooleanValuePayload | undefined {
    return this.conditions?.exists?.value === true || this.conditions?.exists?.value === false
      ? new BooleanValuePayload(this.conditions?.exists?.value)
      : undefined
  }

  @IsOptional()
  @ValidateNested()
  get eq(): IdValuePayload | undefined {
    return this.conditions?.eq?.value ? new IdValuePayload(this.conditions?.eq?.value) : undefined
  }

  @IsOptional()
  @ValidateNested()
  get in(): IdsValuePayload | undefined {
    return this.conditions?.in?.values
      ? new IdsValuePayload(this.conditions?.in?.values)
      : undefined
  }
}
