/**
 * This file exports the KeyException exception and related features.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { NotFoundException } from './not_found_exception.ts';

import type { BaseExceptionInit } from '../types/types.ts';

/** The default message for the {@link KeyException} exception. */
const DEFAULT_MESSAGE =
  'Unable to locate a property key on an object or record.';

/** The exception init properties for the {@link KeyException} exception. */
export type KeyExceptionInit = BaseExceptionInit<{
  /** The name of the missing property on which access was attempted. */
  key?: string;

  /** The name of the object or record that was accessed. */
  valueName?: string;

  /** The list of the valid keys on the object or record. */
  validKeys?: string[];
}>;

/** Creates a message from the provided {@link KeyExceptionInit} properties. */
function createMsgFromInit(init: KeyExceptionInit): string {
  const { key, valueName, validKeys } = init;

  const csv = validKeys?.join('", "');

  switch (true) {
    case (!!key && !!valueName && !!csv):
      return `Unable to locate the property key "${key}" on the object or record "${valueName}". Valid property keys include: "${csv}".`;
    case (!!valueName && !!csv):
      return `Unable to locate a property key on the object or record "${valueName}". Valid property keys include: "${csv}".`;
    case (!!key && !!csv):
      return `Unable to locate the property key "${key}" on an object or record. Valid property keys include: "${csv}".`;
    case (!!key && !!valueName):
      return `Unable to locate the property key "${key}" on the object or record "${valueName}".`;
    case (!!csv):
      return `Unable to locate a property key on an object or record. Valid property keys include: "${csv}".`;
    case (!!valueName):
      return `Unable to locate a property key on the object or record "${valueName}".`;
    case (!!key):
      return `Unable to locate the property key "${key}" on an object or record.`;
    default:
      return DEFAULT_MESSAGE;
  }
}

/** An exception raised when a dynamically accessed property key does not exist on an object or record. */
export class KeyException<T extends KeyExceptionInit = KeyExceptionInit>
  extends NotFoundException<T> {
  /** Creates a new {@link KeyException} exception with the default message and no exception init properties. */
  constructor();

  /** Creates a new {@link KeyException} exception with a message created from the provided {@link KeyExceptionInit} properties. */
  constructor(init: T);

  /** Creates a new {@link KeyException} exception with the provided message, optionally with additional {@link KeyExceptionInit} properties. */
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

  /** The exception code for the {@link KeyException} exception. */
  public code = 0x13;
}
