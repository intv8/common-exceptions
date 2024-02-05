/**
 * This file exports the RecursionException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { AbortedException } from './aborted_exception.ts';

import type { SoftwareOperation } from '../../deps.ts';
import type { BaseExceptionInit } from '../types/types.ts';

/** The default message for the {@link RecursionException} exception. */
const DEFAULT_MESSAGE = 'An operation exceeded the maximum recursion depth.';

/** The exception init properties for the {@link RecursionException} exception. */
export type RecursionExceptionInit = BaseExceptionInit<{
  /** The type of operation that is navigating too deep. */
  operationType?: SoftwareOperation;

  /** The name of the operation that is navigating too deep. */
  operationName?: string;

  /** The max depth the operation should navigate. */
  recursionDepth?: number;
}>;

/** Creates a message from the provided {@link RecursionExceptionInit} properties. */
function createMsgFromInit(init: RecursionExceptionInit): string {
  const { operationType, operationName, recursionDepth } = init;

  const conj = operationType && 'aeiou'.includes(operationType[0].toLowerCase())
    ? 'An'
    : 'A';

  switch (true) {
    case (!!operationType && !!operationName && !!recursionDepth):
      return `The ${operationType} "${operationName}" exceeded the maximum recursion depth of ${recursionDepth} levels.`;
    case (!!operationName && !!recursionDepth):
      return `The operation "${operationName}" exceeded the maximum recursion depth of ${recursionDepth} levels.`;
    case (!!operationType && !!recursionDepth):
      return `${conj} ${operationType} exceeded the maximum recursion depth of ${recursionDepth} levels.`;
    case (!!operationType && !!operationName):
      return `The ${operationType} "${operationName}" exceeded the maximum recursion depth.`;
    case (!!recursionDepth):
      return `An operation exceeded the maximum recursion depth of ${recursionDepth} levels.`;
    case (!!operationName):
      return `The operation "${operationName}" exceeded the maximum recursion depth.`;
    case (!!operationType):
      return `${conj} ${operationType} exceeded the maximum recursion depth.`;
    default:
      return DEFAULT_MESSAGE;
  }
}

/** An exception raised when an operation exceeds a recursion depth. */
export class RecursionException<
  T extends RecursionExceptionInit = RecursionExceptionInit,
> extends AbortedException<T> {
  /** Creates a new {@link RecursionException} exception with the default message and no exception init properties. */
  constructor();

  /** Creates a new {@link RecursionException} exception with a message created from the provided {@link RecursionExceptionInit} properties. */
  constructor(init: T);

  /** Creates a new {@link RecursionException} exception with the provided message, optionally with additional {@link RecursionExceptionInit} properties. */
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

  /** The exception code for the {@link RecursionException} exception. */
  public code = 0x17;
}
