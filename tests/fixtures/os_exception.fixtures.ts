/**
 * This file contains test cases, mocks, or other data for testing the
 * OSException feature.
 *
 * For use in ../os_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['Out of memory.', {
    name: 'OSException',
    message: 'Out of memory.',
    code: 1,
    asString: 'OSException [0x1]: Out of memory.',
    asValue: 1,
    cause: undefined,
    data: undefined,
    helpUrl: `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1?message=Out%20of%20memory.`,
  }],
] as const;

const cause0 = new Error('Out of memory.');

export const messageCauseFixtures = [
  ['Out of memory.', cause0, {
    name: 'OSException',
    message: 'Out of memory.',
    code: 1,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1?message=Out%20of%20memory.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const data = { foo: 'bar', baz: 42, qux: true } as const;

export const messageDataFixtures = [
  ['Out of memory.', data, {
    name: 'OSException',
    message: 'Out of memory.',
    code: 1,
    cause: undefined,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1?message=Out%20of%20memory.&data=${
        encodeURIComponent(JSON.stringify(data))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Out of memory.', { ...data, cause: cause0 }, {
    name: 'OSException',
    message: 'Out of memory.',
    code: 1,
    cause: cause0,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1?message=Out%20of%20memory.&data=${
        encodeURIComponent(JSON.stringify(data))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
