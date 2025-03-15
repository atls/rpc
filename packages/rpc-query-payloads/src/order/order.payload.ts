import { Query }    from '@atls/query-types'
import { IsString } from 'class-validator'
import { IsEnum }   from 'class-validator'

export class OrderPayload implements Query.Order {
  constructor(private readonly order: Query.Order) {}

  @IsString()
  get field(): string {
    return this.order.field
  }

  @IsEnum(Query.OrderDirection)
  get direction(): Query.OrderDirection.ASC | Query.OrderDirection.DESC | 0 | 1 {
    return this.order.direction
  }
}
