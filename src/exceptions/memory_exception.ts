/**
 * This file exports the MemoryException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { OSException } from './os_exception.ts';

import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the {@link MemoryException} exception. */
export type MemoryExceptionInit = BaseExceptionInit;

/** An exception raised when an operation encounters memory issues, but may be recoverable. */
export class MemoryException<
  T extends MemoryExceptionInit = MemoryExceptionInit,
> extends OSException<T> {
  /** Creates a new {@link MemoryException} exception with the provided message, optionally with additional {@link MemoryExceptionInit} properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the {@link MemoryException} exception. */
  public code = 0x4;
}
