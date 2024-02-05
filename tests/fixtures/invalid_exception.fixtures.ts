/**
 * This file contains test cases, mocks, or other data for testing the
 * InvalidException feature.
 *
 * For use in ../invalid_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['A value is invalid.', {
    name: 'InvalidException',
    message: 'A value is invalid.',
    code: 10,
    asString: 'InvalidException [0xa]: A value is invalid.',
    asValue: 10,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xa?message=A%20value%20is%20invalid.`,
  }],
] as const;

const cause0 = new Error('A value is invalid.');

export const messageCauseFixtures = [
  ['A value is invalid.', cause0, {
    name: 'InvalidException',
    message: 'A value is invalid.',
    code: 10,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xa?message=A%20value%20is%20invalid.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const data = { foo: 'bar', baz: 42, qux: true } as const;

export const messageDataFixtures = [
  ['A value is invalid.', data, {
    name: 'InvalidException',
    message: 'A value is invalid.',
    code: 10,
    cause: undefined,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xa?message=A%20value%20is%20invalid.&data=${
        encodeURIComponent(JSON.stringify(data))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['A value is invalid.', { ...data, cause: cause0 }, {
    name: 'InvalidException',
    message: 'A value is invalid.',
    code: 10,
    cause: cause0,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xa?message=A%20value%20is%20invalid.&data=${
        encodeURIComponent(JSON.stringify(data))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
