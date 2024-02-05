/**
 * This file exports the IterationException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { AbortedException } from './aborted_exception.ts';

import type { SoftwareOperation } from '../../deps.ts';
import type { BaseExceptionInit } from '../types/types.ts';

/** The default message for the {@link IterationException} exception. */
const DEFAULT_MESSAGE = 'An operation exceeded the maximum iteration count.';

/** The exception init properties for the {@link IterationException} exception. */
export type IterationExceptionInit = BaseExceptionInit<{
  /** The type of operation that is iterating too often. */
  operationType?: SoftwareOperation;

  /** The name of the operation that is iterating too often. */
  operationName?: string;

  /** The max iteration count the operation exceeded. */
  iterationCount?: number;

  /** Whether the operation encountered consecutive repeating values. */
  repeatingValue?: boolean;
}>;

/** Creates a message from the provided {@link IterationExceptionInit} properties. */
function createMsgFromInit(init: IterationExceptionInit): string {
  const { operationType, operationName, iterationCount, repeatingValue } = init;

  const conj = operationType && 'aeiou'.includes(operationType[0].toLowerCase())
    ? 'An'
    : 'A';
  const s = iterationCount === 1 ? '' : 's';

  switch (true) {
    case (!!operationType && !!operationName && !!iterationCount &&
      !!repeatingValue):
      return `The ${operationType} "${operationName}" exceeded the maximum iteration count of ${iterationCount} for consecutive repeating values.`;
    case (!!operationName && !!iterationCount && !!repeatingValue):
      return `The operation "${operationName}" exceeded the maximum iteration count of ${iterationCount} for consecutive repeating values.`;
    case (!!operationType && !!operationName && !!repeatingValue):
      return `The ${operationType} "${operationName}" exceeded the maximum iteration count for consecutive repeating values.`;
    case (!!operationType && !!iterationCount && !!repeatingValue):
      return `${conj} ${operationType} exceeded the maximum iteration count of ${iterationCount} for consecutive repeating values.`;
    case (!!operationType && !!operationName && !!iterationCount):
      return `The ${operationType} "${operationName}" exceeded the maximum iteration count of ${iterationCount} iteration${s}.`;
    case (!!iterationCount && !!repeatingValue):
      return `An operation exceeded the maximum iteration count of ${iterationCount} for consecutive repeating values.`;
    case (!!operationName && !!repeatingValue):
      return `The operation "${operationName}" exceeded the maximum iteration count for consecutive repeating values.`;
    case (!!operationName && !!iterationCount):
      return `The operation "${operationName}" exceeded the maximum iteration count of ${iterationCount} iteration${s}.`;
    case (!!operationType && !!repeatingValue):
      return `${conj} ${operationType} exceeded the maximum iteration count for consecutive repeating values.`;
    case (!!operationType && !!iterationCount):
      return `${conj} ${operationType} exceeded the maximum iteration count of ${iterationCount} iteration${s}.`;
    case (!!operationType && !!operationName):
      return `The ${operationType} "${operationName}" exceeded the maximum iteration count.`;
    case (!!repeatingValue):
      return `An operation exceeded the maximum iteration count for consecutive repeating values.`;
    case (!!iterationCount):
      return `An operation exceeded the maximum iteration count of ${iterationCount} iteration${s}.`;
    case (!!operationName):
      return `The operation "${operationName}" exceeded the maximum iteration count.`;
    case (!!operationType):
      return `${conj} ${operationType} exceeded the maximum iteration count.`;
    default:
      return DEFAULT_MESSAGE;
  }
}

/** An exception raised when an operation has exceeded a maximum iteration threshold. */
export class IterationException<
  T extends IterationExceptionInit = IterationExceptionInit,
> extends AbortedException<T> {
  /** Creates a new {@link IterationException} exception with the default message and no exception init properties. */
  constructor();

  /** Creates a new {@link IterationException} exception with a message created from the provided {@link IterationExceptionInit} properties. */
  constructor(init: T);

  /** Creates a new {@link IterationException} exception with the provided message, optionally with additional {@link IterationExceptionInit} properties. */
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

  /** The exception code for the {@link IterationException} exception. */
  public code = 0x18;
}
