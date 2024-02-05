/**
 * This file contains test cases, mocks, or other data for testing the
 * ValueException feature.
 *
 * For use in ../value_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['Value is invalid.', {
    name: 'ValueException',
    message: 'Value is invalid.',
    code: 14,
    asString: 'ValueException [0xe]: Value is invalid.',
    asValue: 14,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xe?message=Value%20is%20invalid.`,
  }],
] as const;

const cause0 = new Error('Value is invalid.');

export const messageCauseFixtures = [
  ['Value is invalid.', cause0, {
    name: 'ValueException',
    message: 'Value is invalid.',
    code: 14,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xe?message=Value%20is%20invalid.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const data = { foo: 'bar', baz: 42, qux: true } as const;

export const messageDataFixtures = [
  ['Value is invalid.', data, {
    name: 'ValueException',
    message: 'Value is invalid.',
    code: 14,
    cause: undefined,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xe?message=Value%20is%20invalid.&data=${
        encodeURIComponent(JSON.stringify(data))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Value is invalid.', { ...data, cause: cause0 }, {
    name: 'ValueException',
    message: 'Value is invalid.',
    code: 14,
    cause: cause0,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xe?message=Value%20is%20invalid.&data=${
        encodeURIComponent(JSON.stringify(data))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
