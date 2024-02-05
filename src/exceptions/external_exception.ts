/**
 * This file exports the ExternalException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { Exception } from './exception.ts';

import type { Codebase } from '../../deps.ts';
import type { BaseExceptionInit } from '../types/types.ts';

/** The default message for the {@link ExternalException} exception. */
const DEFAULT_MESSAGE = 'An external codebase raised an exception.';

/** The exception init properties for the {@link ExternalException} exception. */
export type ExternalExceptionInit = BaseExceptionInit<{
  /** The type of Codebase that raised an error. */
  externalType?: Codebase;

  /** The name of the external codebase that raised the error. */
  externalName?: string;
}>;

/** Creates a message from the provided {@link ExternalExceptionInit} properties. */
function createMsgFromInit(init: ExternalExceptionInit): string {
  const { externalType, externalName } = init;

  switch (true) {
    case (!!externalType && !!externalName):
      return `The external ${externalType} "${externalName}" raised an exception.`;
    case (!!externalName):
      return `The external codebase "${externalName}" raised an exception.`;
    case (!!externalType):
      return `An external ${externalType} raised an exception.`;
    default:
      return DEFAULT_MESSAGE;
  }
}

/** An exception raised when external (3rd party) code raised an error. */
export class ExternalException<
  T extends ExternalExceptionInit = ExternalExceptionInit,
> extends Exception<T> {
  /** Creates a new {@link ExternalException} exception with the default message and no exception init properties. */
  constructor();

  /** Creates a new {@link ExternalException} exception with a message created from the provided {@link ExternalExceptionInit} properties. */
  constructor(init: T);

  /** Creates a new {@link ExternalException} exception with the provided message, optionally with additional {@link ExternalExceptionInit} properties. */
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

  /** The exception code for the {@link ExternalException} exception. */
  public code = 0x9;
}
