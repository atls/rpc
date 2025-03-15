import { IsUUID } from 'class-validator'

export class IdsValuePayload {
  @IsUUID(4, { each: true })
  values!: Array<string>

  constructor(values: Array<string>) {
    this.values = values
  }
}
