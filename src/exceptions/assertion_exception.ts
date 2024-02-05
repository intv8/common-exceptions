/**
 * This file exports the AssertionException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { Exception } from './exception.ts';

import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the {@link AssertionException} exception. */
export type AssertionExceptionInit = BaseExceptionInit;

/** An exception raised when an assertion is incorrect. */
export class AssertionException<
  T extends AssertionExceptionInit = AssertionExceptionInit,
> extends Exception<T> {
  /** Creates a new {@link AssertionException} exception with the provided message, optionally with additional {@link AssertionExceptionInit} properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the {@link AssertionException} exception. */
  public code = 0x8;
}
