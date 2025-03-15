import { IsUUID } from 'class-validator'

export class IdValuePayload {
  @IsUUID(4)
  value: string

  constructor(value: string) {
    this.value = value
  }
}
