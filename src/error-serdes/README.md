# @tapjs/error-serdes

Error serialization/deserialization and `node:test` message
stream production and consumption.

## `serializeError`

Serialize an error object for passing through a `test:...`
message.

## `deserializeError`

Turn a serialized error message into a JavaScript object.

## `TestStreamSerialize`

Create a stream of serialized message objects for consumption by
`node --test`.

## `TestStreamDeserialize`

Parse a stream of serialized message objects.
