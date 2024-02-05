/**
 * This file contains test cases, mocks, or other data for testing the
 * MemoryException feature.
 *
 * For use in ../memory_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['Memory exhausted.', {
    name: 'MemoryException',
    message: 'Memory exhausted.',
    code: 4,
    asString: 'MemoryException [0x4]: Memory exhausted.',
    asValue: 4,
    cause: undefined,
    data: undefined,
    helpUrl: `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x4?message=Memory%20exhausted.`,
  }],
] as const;

const cause0 = new Error('Memory exhausted.');

export const messageCauseFixtures = [
  ['Memory exhausted.', cause0, {
    name: 'MemoryException',
    message: 'Memory exhausted.',
    code: 4,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x4?message=Memory%20exhausted.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const data = { foo: 'bar', baz: 42, qux: true } as const;

export const messageDataFixtures = [
  ['Memory exhausted.', data, {
    name: 'MemoryException',
    message: 'Memory exhausted.',
    code: 4,
    cause: undefined,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x4?message=Memory%20exhausted.&data=${
        encodeURIComponent(JSON.stringify(data))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Memory exhausted.', { ...data, cause: cause0 }, {
    name: 'MemoryException',
    message: 'Memory exhausted.',
    code: 4,
    cause: cause0,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x4?message=Memory%20exhausted.&data=${
        encodeURIComponent(JSON.stringify(data))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
