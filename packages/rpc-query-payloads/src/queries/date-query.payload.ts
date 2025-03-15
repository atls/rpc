import type { Timestamp }        from '@bufbuild/protobuf'

import { Query }                 from '@atls/query-types'
import { IsEnum }                from 'class-validator'
import { IsOptional }            from 'class-validator'
import { ValidateNested }        from 'class-validator'

import { DateConditionsPayload } from '../conditions/index.js'

export class DateQueryPayload implements Query.DateType {
  constructor(
    private readonly query?: {
      operator: Query.Operator.AND | Query.Operator.OR | 0 | 1 | undefined
      conditions?: {
        exists?: {
          value: boolean
        }
        eq?: {
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
  get conditions(): DateConditionsPayload | undefined {
    return new DateConditionsPayload(this.query?.conditions)
  }
}
