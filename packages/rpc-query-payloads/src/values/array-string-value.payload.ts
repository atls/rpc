import { IsString } from 'class-validator'

export class ArrayStringValuePayload {
  @IsString({ each: true })
  value!: Array<string>

  constructor(value: Array<string>) {
    this.value = value
  }
}
