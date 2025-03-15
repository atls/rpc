import { Query }                        from '@atls/query-types'
import { IsEnum }                       from 'class-validator'
import { IsOptional }                   from 'class-validator'
import { ValidateNested }               from 'class-validator'

import { ArrayStringConditionsPayload } from '../conditions/index.js'

export class ArrayStringQueryPayload implements Query.ArrayStringType {
  constructor(private readonly query?: Query.ArrayStringType) {}

  @IsOptional()
  @IsEnum(Query.Operator)
  get operator(): Query.Operator.AND | Query.Operator.OR | 0 | 1 | undefined {
    return this.query?.operator
  }

  @IsOptional()
  @ValidateNested()
  get conditions(): ArrayStringConditionsPayload | undefined {
    return new ArrayStringConditionsPayload(this.query?.conditions)
  }
}
