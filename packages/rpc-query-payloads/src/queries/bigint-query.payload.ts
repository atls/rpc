import { Query }                   from '@atls/query-types'
import { IsEnum }                  from 'class-validator'
import { IsOptional }              from 'class-validator'
import { ValidateNested }          from 'class-validator'

import { BigIntConditionsPayload } from '../conditions/index.js'

export class BigIntQueryPayload implements Query.BigIntType {
  constructor(private readonly query?: Query.BigIntType) {}

  @IsOptional()
  @IsEnum(Query.Operator)
  get operator(): Query.Operator.AND | Query.Operator.OR | 0 | 1 | undefined {
    return this.query?.operator
  }

  @IsOptional()
  @ValidateNested()
  get conditions(): BigIntConditionsPayload | undefined {
    return new BigIntConditionsPayload(this.query?.conditions)
  }
}
