import { IsInt } from 'class-validator'

export class IntValuePayload {
  @IsInt()
  value: number

  constructor(value: number) {
    this.value = value
  }
}
