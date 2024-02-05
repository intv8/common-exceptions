/**
 * This file exports the AbortedException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { InterruptException } from './interrupt_exception.ts';

import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the {@link AbortedException} exception. */
export type AbortedExceptionInit = BaseExceptionInit;

/** An exception raised when an operation is aborted. */
export class AbortedException<
  T extends AbortedExceptionInit = AbortedExceptionInit,
> extends InterruptException<T> {
  /** Creates a new {@link AbortedException} exception with the provided message, optionally with additional {@link AbortedExceptionInit} properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the {@link AbortedException} exception. */
  public code = 0x3;
}
