/**
 * This file exports the TimeoutException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { AbortedException } from './aborted_exception.ts';

import type { SoftwareOperation } from '../../deps.ts';
import type { BaseExceptionInit } from '../types/types.ts';

/** The default message for the {@link TimeoutException} exception. */
const DEFAULT_MESSAGE = 'An operation timed out.';

/** The exception init properties for the {@link TimeoutException} exception. */
export type TimeoutExceptionInit = BaseExceptionInit<{
  /** The type of operation that timed out. */
  operationType?: SoftwareOperation;

  /** The name of the operation that timed out. */
  operationName?: string;

  /** The number, in seconds, of the exceeded timeout. */
  operationTimeout?: number;
}>;

/** Creates a message from the provided {@link TimeoutExceptionInit} properties. */
function createMsgFromInit(init: TimeoutExceptionInit): string {
  const { operationType, operationName, operationTimeout } = init;

  const conj = operationType && 'aeiou'.includes(operationType[0].toLowerCase())
    ? 'An'
    : 'A';
  const s = operationTimeout === 1 ? '' : 's';

  switch (true) {
    case (!!operationType && !!operationName && !!operationTimeout):
      return `The ${operationType} "${operationName}" timed after ${operationTimeout} second${s}.`;
    case (!!operationName && !!operationTimeout):
      return `The operation "${operationName}" timed after ${operationTimeout} second${s}.`;
    case (!!operationType && !!operationTimeout):
      return `${conj} ${operationType} timed after ${operationTimeout} second${s}.`;
    case (!!operationType && !!operationName):
      return `The ${operationType} "${operationName}" timed out.`;
    case (!!operationTimeout):
      return `An operation timed after ${operationTimeout} second${s}.`;
    case (!!operationName):
      return `The operation "${operationName}" timed out.`;
    case (!!operationType):
      return `${conj} ${operationType} timed out.`;
    default:
      return DEFAULT_MESSAGE;
  }
}

/** An exception raised when an operation exceeds a timeout threshold. */
export class TimeoutException<
  T extends TimeoutExceptionInit = TimeoutExceptionInit,
> extends AbortedException<T> {
  /** Creates a new {@link TimeoutException} exception with the default message and no exception init properties. */
  constructor();

  /** Creates a new {@link TimeoutException} exception with a message created from the provided {@link TimeoutExceptionInit} properties. */
  constructor(init: T);

  /** Creates a new {@link TimeoutException} exception with the provided message, optionally with additional {@link TimeoutExceptionInit} properties. */
  constructor(message: string, init?: T);

  // deno-lint-ignore default-param-last
  constructor(msgOrInit: string | T = DEFAULT_MESSAGE, maybeInit?: T) {
    let message: string = msgOrInit as string;
    let init: T | undefined = maybeInit;

    if (typeof msgOrInit !== 'string') {
      init = msgOrInit;
      message = createMsgFromInit(init);
    }

    super(message ? message : DEFAULT_MESSAGE, init);
  }

  /** The exception code for the TimeoutException exception. */
  public code = 0x19;
}
