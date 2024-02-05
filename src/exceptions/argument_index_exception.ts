/**
 * This file exports the ArgumentIndexException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { validateBounds } from '../_internals/validate_bounds.ts';
import { ArgumentException } from './argument_exception.ts';

import type { BaseExceptionInit } from '../types/types.ts';

/** The default message for the {@link ArgumentIndexException} exception. */
const DEFAULT_MESSAGE =
  'An index is outside the bounds of the arguments array.';

/** The exception init properties for the {@link ArgumentIndexException} exception. */
export type ArgumentIndexExceptionInit = BaseExceptionInit<{
  /** The index that is outside the arguments array index range. */
  index?: number;

  /** The upper bounds, inclusive, of the arguments array index range. Usually length - 1. */
  upperBound?: number;
}>;

/** Creates a message from the provided {@link ArgumentIndexExceptionInit} properties. */
function createMsgFromInit(init: ArgumentIndexExceptionInit): string {
  const { index, upperBound } = init;

  switch (true) {
    case (typeof index === 'number' && typeof upperBound === 'number'):
      return `The index ${index} is outside the bounds of the arguments array. It must be 0, ${upperBound}, or between them.`;
    case (typeof upperBound === 'number'):
      return `An index is outside the bounds of the arguments array. It must be 0, ${upperBound}, or between them.`;
    case (typeof index === 'number'):
      return `The index ${index} is outside the bounds of the arguments array.`;
    default:
      return DEFAULT_MESSAGE;
  }
}

/** An exception raised when an index is outside the bounds of an arguments array. */
export class ArgumentIndexException<
  T extends ArgumentIndexExceptionInit = ArgumentIndexExceptionInit,
> extends ArgumentException<T> {
  /** Creates a new {@link ArgumentIndexException} exception with the default message and no exception init properties. */
  constructor();

  /** Creates a new {@link ArgumentIndexException} exception with a message created from the provided {@link ArgumentIndexExceptionInit} properties. */
  constructor(init: T);

  /** Creates a new {@link ArgumentIndexException} exception with the provided message, optionally with additional {@link ArgumentIndexExceptionInit} properties. */
  constructor(message: string, init?: T);

  // deno-lint-ignore default-param-last
  constructor(msgOrInit: string | T = DEFAULT_MESSAGE, maybeInit?: T) {
    let message: string = msgOrInit as string;
    let init: T | undefined = maybeInit;

    if (typeof msgOrInit !== 'string') {
      init = msgOrInit;
      message = createMsgFromInit(init);
    }

    validateBounds(0, init?.upperBound); //  probably not needed

    super(message ? message : DEFAULT_MESSAGE, init);
  }

  /** The exception code for the {@link ArgumentIndexException} exception. */
  public code = 0x16;
}
