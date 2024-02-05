/**
 * This file exports the InvalidException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { Exception } from './exception.ts';

import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the {@link InvalidException} exception. */
export type InvalidExceptionInit = BaseExceptionInit;

/** An exception raised during invalid operations. */
export class InvalidException<
  T extends InvalidExceptionInit = InvalidExceptionInit,
> extends Exception<T> {
  /** Creates a new {@link InvalidException} exception with the provided message, optionally with additional {@link InvalidExceptionInit} properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the {@link InvalidException} exception. */
  public code = 0xa;
}
