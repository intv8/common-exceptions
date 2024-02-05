/**
 * This file exports the ConnectionException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { OSException } from './os_exception.ts';

import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the {@link ConnectionException} exception. */
export type ConnectionExceptionInit = BaseExceptionInit;

/** An exception raised when a connection is in an unexpected state. */
export class ConnectionException<
  T extends ConnectionExceptionInit = ConnectionExceptionInit,
> extends OSException<T> {
  /** Creates a new {@link ConnectionException} exception with the provided message, optionally with additional {@link ConnectionExceptionInit} properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the {@link ConnectionException} exception. */
  public code = 0x7;
}
