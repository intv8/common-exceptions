/**
 * This file exports the NotSupportedException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { InvalidException } from './invalid_exception.ts';

import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the {@link NotSupportedException} exception. */
export type NotSupportedExceptionInit = BaseExceptionInit;

/** An exception raised when an operation is not supported. */
export class NotSupportedException<
  T extends NotSupportedExceptionInit = NotSupportedExceptionInit,
> extends InvalidException<T> {
  /** Creates a new {@link NotSupportedException} exception with the provided message, optionally with additional {@link NotSupportedExceptionInit} properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the {@link NotSupportedException} exception. */
  public code = 0xc;
}
