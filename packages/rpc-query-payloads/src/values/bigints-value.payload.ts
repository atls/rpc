export class BigIntsValuePayload {
  values!: Array<bigint>

  constructor(values: Array<bigint>) {
    this.values = values
  }
}
