/**
 * This file exports the MethodException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { NotFoundException } from './not_found_exception.ts';

import type { BaseExceptionInit } from '../types/types.ts';

/**
 * The default message for the {@link MethodException} exception.
 */
const DEFAULT_MESSAGE = 'Unable to locate a method on an object.';

/**
 * The exception init properties for the {@link MethodException} exception.
 */
export type MethodExceptionInit = BaseExceptionInit<{
  /** The name of the missing method on which calling was attempted. */
  methodName?: string;

  /** The name of the object on which the method call was attempted. */
  valueName?: string;

  /** The list of the available methods that can be called on the object. */
  validMethods?: string[];
}>;

/** Creates a message from the provided {@link MethodExceptionInit} properties. */
function createMsgFromInit(init: MethodExceptionInit): string {
  const { methodName, valueName, validMethods } = init;

  const csv = validMethods?.join('", "');

  switch (true) {
    case (!!methodName && !!valueName && !!csv):
      return `Unable to locate the method "${methodName}" on the object "${valueName}". Valid methods include: "${csv}".`;
    case (!!valueName && !!csv):
      return `Unable to locate a method on the object "${valueName}". Valid methods include: "${csv}".`;
    case (!!methodName && !!csv):
      return `Unable to locate the method "${methodName}" on an object. Valid methods include: "${csv}".`;
    case (!!methodName && !!valueName):
      return `Unable to locate the method "${methodName}" on the object "${valueName}".`;
    case (!!csv):
      return `Unable to locate a method on an object. Valid methods include: "${csv}".`;
    case (!!valueName):
      return `Unable to locate a method on the object "${valueName}".`;
    case (!!methodName):
      return `Unable to locate the method "${methodName}" on an object.`;
    default:
      return DEFAULT_MESSAGE;
  }
}

/** An exception raised when a dynamically called method is not found on an object. */
export class MethodException<
  T extends MethodExceptionInit = MethodExceptionInit,
> extends NotFoundException<T> {
  /** Creates a new {@link MethodException} exception with the default message and no exception init properties. */
  constructor();

  /** Creates a new {@link MethodException} exception with a message created from the provided {@link MethodExceptionInit} properties. */
  constructor(init: T);

  /** Creates a new {@link MethodException} exception with the provided message, optionally with additional {@link MethodExceptionInit} properties. */
  constructor(message: string, init?: T);

  // deno-lint-ignore default-param-last
  constructor(msgOrInit: string | T = DEFAULT_MESSAGE, maybeInit?: T) {
    let message: string = msgOrInit as string;
    let init: T | undefined = maybeInit;

    if (typeof msgOrInit !== 'string') {
      init = msgOrInit;
      message = createMsgFromInit(init);
    }

    super(message ? message : DEFAULT_MESSAGE, init);
  }

  /** The exception code for the {@link MethodException} exception. */
  public code = 0x14;
}
