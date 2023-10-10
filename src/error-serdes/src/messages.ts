// These will all be undefined if the t.options.at is null, or not a file
export type Location = {
  file?: string
  line?: number
  column?: number
}

export interface StringData extends Location {
  message: string
}

export interface NestedLocation extends Location {
  nesting: number
}

export type DiagnosticData = StringData & NestedLocation

export interface NamedNestedLocation extends NestedLocation {
  name: string
}

export interface PlanData extends NestedLocation {
  count: number
}

export interface ResultsDataDetails {
  duration_ms: number
  type?: 'suite'
  error?: Buffer | (Error & { cause?: any })
}
export type PassDataDetails = ResultsDataDetails & {
  error?: undefined
}

export interface FailDataDetails extends ResultsDataDetails {
  error: Error & { cause?: any }
}
export interface FailDataDetailsSerialized
  extends ResultsDataDetails {
  error: Buffer
}

export interface TestData extends NamedNestedLocation {
  details: PassDataDetails | FailDataDetails
  testNumber: number
  todo?: string | boolean
  skip?: string | boolean
}
export type PassData = TestData & { details: PassDataDetails }
export type FailData = TestData & {
  details: FailDataDetails
}

export type MessageDequeue = {
  type: 'test:dequeue'
  data: NamedNestedLocation
}

export type MessageDiagnostic = {
  type: 'test:diagnostic'
  data: DiagnosticData
}

export type MessageEnqueue = {
  type: 'test:enqueue'
  data: NamedNestedLocation
}

export type MessageFail = {
  type: 'test:fail'
  data: FailData
}

export type MessagePass = {
  type: 'test:pass'
  data: PassData
}

export type MessagePlan = {
  type: 'test:plan'
  data: PlanData
}

export type MessageStart = {
  type: 'test:start'
  data: NamedNestedLocation
}

export type MessageStderr = {
  type: 'test:stderr'
  data: StringData
}

export type MessageStdout = {
  type: 'test:stdout'
  data: StringData
}

export type Message =
  | MessageDiagnostic
  | MessageEnqueue
  | MessageDequeue
  | MessageStart
  | MessageFail
  | MessagePass
  | MessagePlan
  | MessageStderr
  | MessageStdout

const hasDetails = (m: Message): m is MessagePass | MessageFail =>
  !!(m as MessagePass | MessageFail).data.details
export const isMessageFail = (m: Message): m is MessageFail => {
  return (
    m.type === 'test:fail' &&
    hasDetails(m) &&
    'error' in m.data.details
  )
}
