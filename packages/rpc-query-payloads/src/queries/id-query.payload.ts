import { Query }               from '@atls/query-types'
import { IsEnum }              from 'class-validator'
import { IsOptional }          from 'class-validator'
import { ValidateNested }      from 'class-validator'

import { IdConditionsPayload } from '../conditions/index.js'

export class IdQueryPayload implements Query.IDType {
  constructor(private readonly query?: Query.IDType) {}

  @IsOptional()
  @IsEnum(Query.Operator)
  get operator(): Query.Operator.AND | Query.Operator.OR | 0 | 1 | undefined {
    return this.query?.operator
  }

  @IsOptional()
  @ValidateNested()
  get conditions(): IdConditionsPayload | undefined {
    return new IdConditionsPayload(this.query?.conditions)
  }
}
