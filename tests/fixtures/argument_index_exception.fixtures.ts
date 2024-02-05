/**
 * This file contains test cases, mocks, or other data for testing the
 * ArgumentIndexException feature.
 *
 * For use in ../index_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['', {
    name: 'ArgumentIndexException',
    message: 'An index is outside the bounds of the arguments array.',
    code: 22,
    asString:
      'ArgumentIndexException [0x16]: An index is outside the bounds of the arguments array.',
    asValue: 22,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x16?message=An%20index%20is%20outside%20the%20bounds%20of%20the%20arguments%20array.`,
  }],
  ['Index must be between 0 and 15.', {
    name: 'ArgumentIndexException',
    message: 'Index must be between 0 and 15.',
    code: 22,
    asString: 'ArgumentIndexException [0x16]: Index must be between 0 and 15.',
    asValue: 22,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x16?message=Index%20must%20be%20between%200%20and%2015.`,
  }],
] as const;

const init1 = { index: 5 } as const;
const init2 = { upperBound: 4 } as const;
const init3 = { ...init1, ...init2 } as const;
export const initFixtures = [
  [{}, {
    name: 'ArgumentIndexException',
    message: 'An index is outside the bounds of the arguments array.',
    code: 22,
    asString:
      'ArgumentIndexException [0x16]: An index is outside the bounds of the arguments array.',
    asValue: 22,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x16?message=An%20index%20is%20outside%20the%20bounds%20of%20the%20arguments%20array.`,
  }],
  [init1, {
    name: 'ArgumentIndexException',
    message: 'The index 5 is outside the bounds of the arguments array.',
    code: 22,
    asString:
      'ArgumentIndexException [0x16]: The index 5 is outside the bounds of the arguments array.',
    asValue: 22,
    cause: undefined,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x16?message=The%20index%205%20is%20outside%20the%20bounds%20of%20the%20arguments%20array.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }`,
  }],
  [init2, {
    name: 'ArgumentIndexException',
    message:
      'An index is outside the bounds of the arguments array. It must be 0, 4, or between them.',
    code: 22,
    asString:
      'ArgumentIndexException [0x16]: An index is outside the bounds of the arguments array. It must be 0, 4, or between them.',
    asValue: 22,
    cause: undefined,
    data: init2,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x16?message=An%20index%20is%20outside%20the%20bounds%20of%20the%20arguments%20array.%20It%20must%20be%200%2C%204%2C%20or%20between%20them.&data=${
        encodeURIComponent(JSON.stringify(init2))
      }`,
  }],
  [init3, {
    name: 'ArgumentIndexException',
    message:
      'The index 5 is outside the bounds of the arguments array. It must be 0, 4, or between them.',
    code: 22,
    asString:
      'ArgumentIndexException [0x16]: The index 5 is outside the bounds of the arguments array. It must be 0, 4, or between them.',
    asValue: 22,
    cause: undefined,
    data: init3,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x16?message=The%20index%205%20is%20outside%20the%20bounds%20of%20the%20arguments%20array.%20It%20must%20be%200%2C%204%2C%20or%20between%20them.&data=${
        encodeURIComponent(JSON.stringify(init3))
      }`,
  }],
] as const;

const cause0 = new Error('Index must be between 5 and 10.');

export const messageCauseFixtures = [
  ['Index must be between 5 and 10.', cause0, {
    name: 'ArgumentIndexException',
    message: 'Index must be between 5 and 10.',
    code: 22,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x16?message=Index%20must%20be%20between%205%20and%2010.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

export const messageDataFixtures = [
  ['Index must be between 5 and 10.', init3, {
    name: 'ArgumentIndexException',
    message: 'Index must be between 5 and 10.',
    code: 22,
    cause: undefined,
    data: init3,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x16?message=Index%20must%20be%20between%205%20and%2010.&data=${
        encodeURIComponent(JSON.stringify(init3))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Index must be between 5 and 10.', { ...init3, cause: cause0 }, {
    name: 'ArgumentIndexException',
    message: 'Index must be between 5 and 10.',
    code: 22,
    cause: cause0,
    data: init3,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x16?message=Index%20must%20be%20between%205%20and%2010.&data=${
        encodeURIComponent(JSON.stringify(init3))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
