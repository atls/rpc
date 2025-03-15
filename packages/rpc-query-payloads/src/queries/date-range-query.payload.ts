import type { Timestamp }             from '@bufbuild/protobuf'

import { Query }                      from '@atls/query-types'
import { IsEnum }                     from 'class-validator'
import { IsOptional }                 from 'class-validator'
import { ValidateNested }             from 'class-validator'

import { DateRangeConditionsPayload } from '../conditions/index.js'

export class DateRangeQueryPayload implements Query.DateRangeType {
  constructor(
    private readonly query?: {
      operator: Query.Operator.AND | Query.Operator.OR | 0 | 1 | undefined
      conditions?: {
        from?: {
          value?: Date | Timestamp | undefined
        }
        to?: {
          value?: Date | Timestamp | undefined
        }
      }
    }
  ) {}

  @IsOptional()
  @IsEnum(Query.Operator)
  get operator(): Query.Operator.AND | Query.Operator.OR | 0 | 1 | undefined {
    return this.query?.operator
  }

  @IsOptional()
  @ValidateNested()
  get conditions(): DateRangeConditionsPayload | undefined {
    return new DateRangeConditionsPayload(this.query?.conditions)
  }
}
