/**
 * This file exports the ProcessException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { OSException } from './os_exception.ts';

import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the {@link ProcessException} exception. */
export type ProcessExceptionInit = BaseExceptionInit;

/** An exception raised when a process is in an unexpected state. */
export class ProcessException<
  T extends ProcessExceptionInit = ProcessExceptionInit,
> extends OSException<T> {
  /** Creates a new {@link ProcessException} exception with the provided message, optionally with additional {@link ProcessExceptionInit} properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the {@link ProcessException} exception. */
  public code = 0x6;
}
