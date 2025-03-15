import { IsBoolean } from 'class-validator'

export class BooleanValuePayload {
  @IsBoolean()
  value!: boolean

  constructor(value: boolean) {
    this.value = value
  }
}
