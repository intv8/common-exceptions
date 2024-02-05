/**
 * This file exports type aliases used by the the intv8 common-exceptions package
 * and its peer and dependant packages.
 *
 * For type aliases, see ./interfaces.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import type { AnonymousObject } from '../../deps.ts';
import type { Exception } from '../exceptions/exception.ts';

/** The common initilization options for all exceptions. */
export type CommonExceptionInit = AnonymousObject & {
  /** The internal cause of an exception. */
  cause?: Error | Exception;
};

/** Utility type to create an `ExceptionInit` for an exception, optionally merged with properties from `T`. */
export type BaseExceptionInit<T extends AnonymousObject = AnonymousObject> =
  & CommonExceptionInit
  & T;
