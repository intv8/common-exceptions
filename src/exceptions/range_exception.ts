/**
 * This file exports the RangeException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { validateBounds } from '../_internals/validate_bounds.ts';
import { ValueException } from './value_exception.ts';

import type { BaseExceptionInit } from '../types/types.ts';

/** The default message for the {@link RangeException} exception. */
const DEFAULT_MESSAGE = 'A numeric value is out of range.';

/** The exception init properties for the {@link RangeException} exception. */
export type RangeExceptionInit = BaseExceptionInit<{
  /** The value that is out of range. */
  value?: number;

  /** The name of the value that is out of range. */
  valueName?: string;

  /** The lower bounds, inclusive, of the range. */
  lowerBound?: number;

  /** The upper bounds, inclusive, of the range. */
  upperBound?: number;
}>;

/** Creates a message from the provided {@link RangeExceptionInit} properties. */
function createMsgFromInit(init: RangeExceptionInit): string {
  const { value, valueName, lowerBound, upperBound } = init;

  switch (true) {
    case (!!valueName && typeof value === 'number' &&
      typeof lowerBound === 'number' && typeof upperBound === 'number'):
      return `The value ${value} of "${valueName}" is out of range. It must be ${lowerBound}, ${upperBound}, or between them.`;
    case (!!valueName && typeof lowerBound === 'number' &&
      typeof upperBound === 'number'):
      return `The value of "${valueName}" is out of range. It must be ${lowerBound}, ${upperBound}, or between them.`;
    case (typeof value === 'number' && typeof lowerBound === 'number' &&
      typeof upperBound === 'number'):
      return `The value ${value} is out of range. It must be ${lowerBound}, ${upperBound}, or between them.`;
    case (!!valueName && typeof value === 'number' &&
      typeof upperBound === 'number'):
      return `The value ${value} of "${valueName}" is out of range. It must be ${upperBound} or less.`;
    case (!!valueName && typeof value === 'number' &&
      typeof lowerBound === 'number'):
      return `The value ${value} of "${valueName}" is out of range. It must be ${lowerBound} or greater.`;
    case (typeof lowerBound === 'number' && typeof upperBound === 'number'):
      return `A numeric value is out of range. It must be ${lowerBound}, ${upperBound}, or between them.`;
    case (!!valueName && typeof upperBound === 'number'):
      return `The value of "${valueName}" is out of range. It must be ${upperBound} or less.`;
    case (!!valueName && typeof lowerBound === 'number'):
      return `The value of "${valueName}" is out of range. It must be ${lowerBound} or greater.`;
    case (typeof value === 'number' && typeof upperBound === 'number'):
      return `The value ${value} is out of range. It must be ${upperBound} or less.`;
    case (typeof value === 'number' && typeof lowerBound === 'number'):
      return `The value ${value} is out of range. It must be ${lowerBound} or greater.`;
    case (!!valueName && typeof value === 'number'):
      return `The value ${value} of "${valueName}" is out of range.`;
    case (typeof upperBound === 'number'):
      return `A numeric value is out of range. It must be ${upperBound} or less.`;
    case (typeof lowerBound === 'number'):
      return `A numeric value is out of range. It must be ${lowerBound} or greater.`;
    case (!!valueName):
      return `The value of "${valueName}" is out of range.`;
    case (typeof value === 'number'):
      return `The value ${value} is out of range.`;
    default:
      return DEFAULT_MESSAGE;
  }
}

/** An exception raised when a number is outside the bounds of a specified range. */
export class RangeException<T extends RangeExceptionInit = RangeExceptionInit>
  extends ValueException<T> {
  /** Creates a new {@link RangeException} exception with the default message and no exception init properties. */
  constructor();

  /** Creates a new {@link RangeException} exception with a message created from the provided {@link RangeExceptionInit} properties. */
  constructor(init: T);

  /** Creates a new {@link RangeException} exception with the provided message, optionally with additional {@link RangeExceptionInit} properties. */
  constructor(message: string, init?: T);

  // deno-lint-ignore default-param-last
  constructor(msgOrInit: string | T = DEFAULT_MESSAGE, maybeInit?: T) {
    let message: string = msgOrInit as string;
    let init: T | undefined = maybeInit;

    if (typeof msgOrInit !== 'string') {
      init = msgOrInit;
      message = createMsgFromInit(init);
    }

    validateBounds(init?.lowerBound || 0, init?.upperBound);

    super(message ? message : DEFAULT_MESSAGE, init);
  }

  /** The exception code for the {@link RangeException} exception. */
  public code = 0x10;
}
