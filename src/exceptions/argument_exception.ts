/**
 * This file exports the ArgumentException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { ValueException } from './value_exception.ts';

import type { BaseExceptionInit } from '../types/types.ts';

/** The default message for the {@link ArgumentException} exception. */
const DEFAULT_MESSAGE =
  'An argument has the correct type, but an invalid value.';

/** The exception init properties for the {@link ArgumentException} exception. */
export type ArgumentExceptionInit = BaseExceptionInit<{
  /** The name of the argument. */
  argumentName?: string;

  /** The list of additional non-typeable constraints for the argument. */
  argumentConstraints?: string[];
}>;

/** Creates a message from the provided {@link ArgumentExceptionInit} properties. */
function createMsgFromInit(init: ArgumentExceptionInit): string {
  const { argumentName, argumentConstraints } = init;

  const csv = argumentConstraints?.join('", "');

  switch (true) {
    case (!!argumentName && !!csv):
      return `The argument "${argumentName}" has the correct type, but an invalid value. It must meet the following additional constraints: "${csv}".`;
    case (!!argumentName):
      return `The argument "${argumentName}" has the correct type, but an invalid value.`;
    case (!!csv):
      return `An argument has the correct type, but an invalid value. It must meet the following additional constraints: "${csv}".`;
    default:
      return DEFAULT_MESSAGE;
  }
}

/** An exception raised when an argument has the correct type and is invalid. */
export class ArgumentException<
  T extends ArgumentExceptionInit = ArgumentExceptionInit,
> extends ValueException<T> {
  /** Creates a new {@link ArgumentException} exception with the default message and no exception init properties. */
  constructor();

  /** Creates a new {@link ArgumentException} exception with a message created from the provided {@link ArgumentExceptionInit} properties. */
  constructor(init: T);

  /** Creates a new {@link ArgumentException} exception with the provided message, optionally with additional {@link ArgumentExceptionInit} properties. */
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

  /** The exception code for the {@link ArgumentException} exception. */
  public code = 0x15;
}
