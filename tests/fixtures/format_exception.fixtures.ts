/**
 * This file contains test cases, mocks, or other data for testing the
 * FormatException feature.
 *
 * For use in ../format_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['The format is invalid.', {
    name: 'FormatException',
    message: 'The format is invalid.',
    code: 13,
    asString: 'FormatException [0xd]: The format is invalid.',
    asValue: 13,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xd?message=The%20format%20is%20invalid.`,
  }],
] as const;

const cause0 = new Error('The format is invalid.');

export const messageCauseFixtures = [
  ['The format is invalid.', cause0, {
    name: 'FormatException',
    message: 'The format is invalid.',
    code: 13,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xd?message=The%20format%20is%20invalid.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const data = { foo: 'bar', baz: 42, qux: true } as const;

export const messageDataFixtures = [
  ['The format is invalid.', data, {
    name: 'FormatException',
    message: 'The format is invalid.',
    code: 13,
    cause: undefined,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xd?message=The%20format%20is%20invalid.&data=${
        encodeURIComponent(JSON.stringify(data))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['The format is invalid.', { ...data, cause: cause0 }, {
    name: 'FormatException',
    message: 'The format is invalid.',
    code: 13,
    cause: cause0,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xd?message=The%20format%20is%20invalid.&data=${
        encodeURIComponent(JSON.stringify(data))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
