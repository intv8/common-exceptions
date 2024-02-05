/**
 * This file exports the InterruptException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { OSException } from './os_exception.ts';

import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the {@link InterruptException} exception. */
export type InterruptExceptionInit = BaseExceptionInit;

/** An exception raised when an operation is interrupted. */
export class InterruptException<
  T extends InterruptExceptionInit = InterruptExceptionInit,
> extends OSException<T> {
  /** Creates a new {@link InterruptException} exception with the provided message, optionally with additional {@link InterruptExceptionInit} properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the {@link InterruptException} exception. */
  public code = 0x2;
}
