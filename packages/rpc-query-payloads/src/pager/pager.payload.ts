import type { Query } from '@atls/query-types'

import { IsInt }      from 'class-validator'

export class PagerPayload implements Query.Pager {
  constructor(private readonly pager: Query.Pager) {}

  @IsInt()
  get take(): number {
    return this.pager.take
  }

  @IsInt()
  get offset(): number {
    return this.pager.offset
  }
}
