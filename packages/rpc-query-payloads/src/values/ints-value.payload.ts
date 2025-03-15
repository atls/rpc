import { IsInt } from 'class-validator'

export class IntsValuePayload {
  @IsInt({ each: true })
  values!: Array<number>

  constructor(values: Array<number>) {
    this.values = values
  }
}
