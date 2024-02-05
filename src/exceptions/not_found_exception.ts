/**
 * This file exports the NotFoundException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { ValueException } from './value_exception.ts';

import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the {@link NotFoundException} exception. */
export type NotFoundExceptionInit = BaseExceptionInit;

/** An exception raised when an requested item is not found. */
export class NotFoundException<
  T extends NotFoundExceptionInit = NotFoundExceptionInit,
> extends ValueException<T> {
  /** Creates a new {@link NotFoundException} exception with the provided message, optionally with additional {@link NotFoundExceptionInit} properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the {@link NotFoundException} exception. */
  public code = 0x11;
}
