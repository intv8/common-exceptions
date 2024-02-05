/**
 * This file exports the OSException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { Exception } from './exception.ts';

import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the {@link OSException} exception. */
export type OSExceptionInit = BaseExceptionInit;

/** The base exception for OS related exceptions. */
export class OSException<T extends OSExceptionInit = OSExceptionInit>
  extends Exception<T> {
  /** Creates a new {@link OSException} exception with the provided message, optionally with additional {@link OSExceptionInit} properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the {@link OSException} exception. */
  public code = 0x1;
}
