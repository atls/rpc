import { IsString } from 'class-validator'

export class StringValuePayload {
  @IsString()
  value: string

  constructor(value: string) {
    this.value = value
  }
}
