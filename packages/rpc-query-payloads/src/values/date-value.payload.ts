import { Timestamp } from '@bufbuild/protobuf'
import { IsDate }    from 'class-validator'

export class DateValuePayload {
  @IsDate()
  value!: Date

  constructor(value?: Date | Timestamp) {
    if (value instanceof Timestamp) {
      this.value = value.toDate()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } else if ((value as any).toDate) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any
      this.value = (value as any).toDate()
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.value = value!
    }
  }
}
