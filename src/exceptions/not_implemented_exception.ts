/**
 * This file exports the NotImplementedException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { InvalidException } from './invalid_exception.ts';

import type { BaseExceptionInit } from '../types/types.ts';

/** The default message for the {@link NotImplementedException} exception. */
const DEFAULT_MESSAGE = 'This method has not been implemented.';

/** The exception init properties for the {@link NotImplementedException} exception. */
export type NotImplementedExceptionInit = BaseExceptionInit<{
  /** The name of the method that is not implemented. */
  methodName?: string;
}>;

/** Creates a message from the provided {@link NotImplementedExceptionInit} properties. */
function createMsgFromInit(init: NotImplementedExceptionInit): string {
  const { methodName } = init;

  switch (true) {
    case (!!methodName):
      return `The method "${methodName}" has not been implemented.`;
    default:
      return DEFAULT_MESSAGE;
  }
}

/** An exception raised when a method has not been implemented. */
export class NotImplementedException<
  T extends NotImplementedExceptionInit = NotImplementedExceptionInit,
> extends InvalidException<T> {
  /** Creates a new {@link NotImplementedException} exception with the default message and no exception init properties. */
  constructor();

  /** Creates a new {@link NotImplementedException} exception with a message created from the provided {@link NotImplementedExceptionInit} properties. */
  constructor(init: T);

  /** Creates a new {@link NotImplementedException} exception with the provided message, optionally with additional {@link NotImplementedExceptionInit} properties. */
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

  /** The exception code for the {@link NotImplementedException} exception. */
  public code = 0xb;
}
