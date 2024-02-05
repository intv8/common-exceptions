/**
 * This file exports the internal range boundary validation function.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { ValueException } from '../exceptions/value_exception.ts';

/** Validates that the the `upper` bound is greater than the `lower` bound of an index range. */
export function validateBounds(lower: number, upper?: number): void {
  if (upper !== undefined && upper <= lower) {
    throw new ValueException(
      '"init.upperBound" has the correct type, but an invalid value. It has the following constraints: positive integer, greater than "init.lowerBound".',
    );
  }
}
