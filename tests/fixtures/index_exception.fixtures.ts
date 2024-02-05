/**
 * This file contains test cases, mocks, or other data for testing the
 * IndexException feature.
 *
 * For use in ../index_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['', {
    name: 'IndexException',
    message: 'An index is outside the bounds of an array.',
    code: 18,
    asString:
      'IndexException [0x12]: An index is outside the bounds of an array.',
    asValue: 18,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x12?message=An%20index%20is%20outside%20the%20bounds%20of%20an%20array.`,
  }],
  ['Index must be between 0 and 15.', {
    name: 'IndexException',
    message: 'Index must be between 0 and 15.',
    code: 18,
    asString: 'IndexException [0x12]: Index must be between 0 and 15.',
    asValue: 18,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x12?message=Index%20must%20be%20between%200%20and%2015.`,
  }],
] as const;

const init1 = { index: 5 } as const;
const init2 = { valueName: 'example' } as const;
const init3 = { upperBound: 4 } as const;
const init4 = { ...init1, ...init2 } as const;
const init5 = { ...init1, ...init3 } as const;
const init6 = { ...init2, ...init3 } as const;
const init7 = { ...init1, ...init2, ...init3 } as const;
export const initFixtures = [
  [{}, {
    name: 'IndexException',
    message: 'An index is outside the bounds of an array.',
    code: 18,
    asString:
      'IndexException [0x12]: An index is outside the bounds of an array.',
    asValue: 18,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x12?message=An%20index%20is%20outside%20the%20bounds%20of%20an%20array.`,
  }],
  [init1, {
    name: 'IndexException',
    message: 'The index 5 is outside the bounds of an array.',
    code: 18,
    asString:
      'IndexException [0x12]: The index 5 is outside the bounds of an array.',
    asValue: 18,
    cause: undefined,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x12?message=The%20index%205%20is%20outside%20the%20bounds%20of%20an%20array.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }`,
  }],
  [init2, {
    name: 'IndexException',
    message: 'An index is outside of the bounds of the array "example".',
    code: 18,
    asString:
      'IndexException [0x12]: An index is outside of the bounds of the array "example".',
    asValue: 18,
    cause: undefined,
    data: init2,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x12?message=An%20index%20is%20outside%20of%20the%20bounds%20of%20the%20array%20%22example%22.&data=${
        encodeURIComponent(JSON.stringify(init2))
      }`,
  }],
  [init3, {
    name: 'IndexException',
    message:
      'An index is outside the bounds of an array. It must be 0, 4, or between them.',
    code: 18,
    asString:
      'IndexException [0x12]: An index is outside the bounds of an array. It must be 0, 4, or between them.',
    asValue: 18,
    cause: undefined,
    data: init3,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x12?message=An%20index%20is%20outside%20the%20bounds%20of%20an%20array.%20It%20must%20be%200%2C%204%2C%20or%20between%20them.&data=${
        encodeURIComponent(JSON.stringify(init3))
      }`,
  }],
  [init4, {
    name: 'IndexException',
    message: 'The index 5 is outside the bounds of the array "example".',
    code: 18,
    asString:
      'IndexException [0x12]: The index 5 is outside the bounds of the array "example".',
    asValue: 18,
    cause: undefined,
    data: init4,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x12?message=The%20index%205%20is%20outside%20the%20bounds%20of%20the%20array%20%22example%22.&data=${
        encodeURIComponent(JSON.stringify(init4))
      }`,
  }],
  [init5, {
    name: 'IndexException',
    message:
      'The index 5 is outside the bounds of an array. It must be 0, 4, or between them.',
    code: 18,
    asString:
      'IndexException [0x12]: The index 5 is outside the bounds of an array. It must be 0, 4, or between them.',
    asValue: 18,
    cause: undefined,
    data: init5,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x12?message=The%20index%205%20is%20outside%20the%20bounds%20of%20an%20array.%20It%20must%20be%200%2C%204%2C%20or%20between%20them.&data=${
        encodeURIComponent(JSON.stringify(init5))
      }`,
  }],
  [init6, {
    name: 'IndexException',
    message:
      'An index is outside the bounds of the array "example". It must be 0, 4, or between them.',
    code: 18,
    asString:
      'IndexException [0x12]: An index is outside the bounds of the array "example". It must be 0, 4, or between them.',
    asValue: 18,
    cause: undefined,
    data: init6,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x12?message=An%20index%20is%20outside%20the%20bounds%20of%20the%20array%20%22example%22.%20It%20must%20be%200%2C%204%2C%20or%20between%20them.&data=${
        encodeURIComponent(JSON.stringify(init6))
      }`,
  }],
  [init7, {
    name: 'IndexException',
    message:
      'The index 5 is outside the bounds of the array "example". It must be 0, 4, or between them.',
    code: 18,
    asString:
      'IndexException [0x12]: The index 5 is outside the bounds of the array "example". It must be 0, 4, or between them.',
    asValue: 18,
    cause: undefined,
    data: init7,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x12?message=The%20index%205%20is%20outside%20the%20bounds%20of%20the%20array%20%22example%22.%20It%20must%20be%200%2C%204%2C%20or%20between%20them.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }`,
  }],
] as const;

const cause0 = new Error('Index must be between 5 and 10.');

export const messageCauseFixtures = [
  ['Index must be between 5 and 10.', cause0, {
    name: 'IndexException',
    message: 'Index must be between 5 and 10.',
    code: 18,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x12?message=Index%20must%20be%20between%205%20and%2010.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

export const messageDataFixtures = [
  ['Index must be between 5 and 10.', init7, {
    name: 'IndexException',
    message: 'Index must be between 5 and 10.',
    code: 18,
    cause: undefined,
    data: init7,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x12?message=Index%20must%20be%20between%205%20and%2010.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Index must be between 5 and 10.', { ...init7, cause: cause0 }, {
    name: 'IndexException',
    message: 'Index must be between 5 and 10.',
    code: 18,
    cause: cause0,
    data: init7,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x12?message=Index%20must%20be%20between%205%20and%2010.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
