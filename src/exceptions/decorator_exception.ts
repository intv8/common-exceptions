/**
 * This file exports the DecoratorException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { ValueException } from './value_exception.ts';

import type { DecoratorType } from '../../deps.ts';
import type { BaseExceptionInit } from '../types/types.ts';

/** The default message for the {@link DecoratorException} exception. */
const DEFAULT_MESSAGE = 'A decorator failed to apply.';

/** The exception init properties for the {@link DecoratorException} exception. */
export type DecoratorExceptionInit = BaseExceptionInit<{
  /** The type of decorator that failed to apply. */
  decoratorType?: DecoratorType;

  /** The name of the decorator that failed to apply. */
  decoratorName?: string;
}>;

/** Creates a message from the provided {@link DecoratorExceptionInit} properties. */
function createMsgFromInit(init: DecoratorExceptionInit): string {
  const { decoratorType, decoratorName } = init;
  const conj = decoratorType && 'aeiou'.includes(decoratorType[0].toLowerCase())
    ? 'An'
    : 'A';

  switch (true) {
    case (!!decoratorType && !!decoratorName):
      return `The ${decoratorType} decorator "${decoratorName}" failed to apply.`;
    case (!!decoratorType):
      return `${conj} ${decoratorType} decorator failed to apply.`;
    case (!!decoratorName):
      return `The decorator "${decoratorName}" failed to apply.`;
    default:
      return DEFAULT_MESSAGE;
  }
}

/** An exception raised when a decorator fails to apply. */
export class DecoratorException<
  T extends DecoratorExceptionInit = DecoratorExceptionInit,
> extends ValueException<T> {
  /** Creates a new {@link DecoratorException} exception with the default message and no exception init properties. */
  constructor();

  /** Creates a new {@link DecoratorException} exception with a message created from the provided {@link DecoratorExceptionInit} properties. */
  constructor(init: T);

  /** Creates a new {@link DecoratorException} exception with the provided message, optionally with additional {@link DecoratorExceptionInit} properties. */
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

  /** The exception code for the {@link DecoratorException} exception. */
  public code = 0xf;
}
