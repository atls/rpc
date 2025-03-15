import { Query }                from '@atls/query-types'
import { IsEnum }               from 'class-validator'
import { IsOptional }           from 'class-validator'
import { ValidateNested }       from 'class-validator'

import { IntConditionsPayload } from '../conditions/index.js'

export class IntQueryPayload implements Query.NumberType {
  constructor(private readonly query?: Query.NumberType) {}

  @IsOptional()
  @IsEnum(Query.Operator)
  get operator(): Query.Operator.AND | Query.Operator.OR | 0 | 1 | undefined {
    return this.query?.operator
  }

  @IsOptional()
  @ValidateNested()
  get conditions(): IntConditionsPayload | undefined {
    return new IntConditionsPayload(this.query?.conditions)
  }
}
