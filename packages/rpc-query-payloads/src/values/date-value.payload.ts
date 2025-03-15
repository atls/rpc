import { Timestamp } from '@bufbuild/protobuf'
import { IsDate }    from 'class-validator'

export class DateValuePayload {
  @IsDate()
  value!: Date

  constructor(value?: Date | Timestamp) {
    if (value instanceof Timestamp) {
      this.value = value.toDate()
    } else if ((value as any).toDate) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      this.value = (value as any).toDate()
    } else {
      this.value = value!
    }
  }
}
