/**
 * This file exports the DiskException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { OSException } from './os_exception.ts';

import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the {@link DiskException} exception. */
export type DiskExceptionInit = BaseExceptionInit;

/** An exception raised when an operation encounters disk issues. */
export class DiskException<T extends DiskExceptionInit = DiskExceptionInit>
  extends OSException<T> {
  /** Creates a new {@link DiskException} exception with the provided message, optionally with additional {@link DiskExceptionInit} properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the {@link DiskException} exception. */
  public code = 0x5;
}
