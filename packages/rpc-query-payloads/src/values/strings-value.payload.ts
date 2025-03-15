import { IsString } from 'class-validator'

export class StringsValuePayload {
  @IsString({ each: true })
  values!: Array<string>

  constructor(values: Array<string>) {
    this.values = values
  }
}
