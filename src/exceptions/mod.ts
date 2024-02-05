/**
 * This file exports exceptions used by the the intv8 common-exceptions package
 * and its peer and dependant packages.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

export { Exception, type ExceptionInit } from './exception.ts';
export { OSException, type OSExceptionInit } from './os_exception.ts';
export {
  InterruptException,
  type InterruptExceptionInit,
} from './interrupt_exception.ts';
export {
  AbortedException,
  type AbortedExceptionInit,
} from './aborted_exception.ts';
export {
  MemoryException,
  type MemoryExceptionInit,
} from './memory_exception.ts';
export { DiskException, type DiskExceptionInit } from './disk_exception.ts';
export {
  ProcessException,
  type ProcessExceptionInit,
} from './process_exception.ts';
export {
  ConnectionException,
  type ConnectionExceptionInit,
} from './connection_exception.ts';
export {
  AssertionException,
  type AssertionExceptionInit,
} from './assertion_exception.ts';
export {
  InvalidException,
  type InvalidExceptionInit,
} from './invalid_exception.ts';
export {
  NotSupportedException,
  type NotSupportedExceptionInit,
} from './not_supported_exception.ts';
export {
  FormatException,
  type FormatExceptionInit,
} from './format_exception.ts';
export { ValueException, type ValueExceptionInit } from './value_exception.ts';
export {
  NotFoundException,
  type NotFoundExceptionInit,
} from './not_found_exception.ts';
export {
  ExternalException,
  type ExternalExceptionInit,
} from './external_exception.ts';
export {
  NotImplementedException,
  type NotImplementedExceptionInit,
} from './not_implemented_exception.ts';
export {
  DecoratorException,
  type DecoratorExceptionInit,
} from './decorator_exception.ts';
export { RangeException, type RangeExceptionInit } from './range_exception.ts';
export { IndexException, type IndexExceptionInit } from './index_exception.ts';
export { KeyException, type KeyExceptionInit } from './key_exception.ts';
export {
  MethodException,
  type MethodExceptionInit,
} from './method_exception.ts';
export {
  ArgumentException,
  type ArgumentExceptionInit,
} from './argument_exception.ts';
export {
  ArgumentIndexException,
  type ArgumentIndexExceptionInit,
} from './argument_index_exception.ts';
export {
  RecursionException,
  type RecursionExceptionInit,
} from './recursion_exception.ts';
export {
  IterationException,
  type IterationExceptionInit,
} from './iteration_exception.ts';
export {
  TimeoutException,
  type TimeoutExceptionInit,
} from './timeout_exception.ts';
