import type { Query }         from '@atls/query-types'

import { IsString }           from 'class-validator'
import { ValidateNested }     from 'class-validator'

import { SearchFieldPayload } from './search-field.payload.js'

export class SearchPayload implements Query.Search {
  constructor(private readonly search: Query.Search) {}

  @ValidateNested()
  get fields(): Array<SearchFieldPayload> {
    return this.search.fields.map((field) => new SearchFieldPayload(field))
  }

  @IsString()
  get value(): string {
    return this.search.value
  }
}
