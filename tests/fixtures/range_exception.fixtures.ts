/**
 * This file contains test cases, mocks, or other data for testing the
 * RangeException feature.
 *
 * For use in ../range_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['', {
    name: 'RangeException',
    message: 'A numeric value is out of range.',
    code: 16,
    asString: 'RangeException [0x10]: A numeric value is out of range.',
    asValue: 16,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=A%20numeric%20value%20is%20out%20of%20range.`,
  }],
  ['Value must be between 0 and 15.', {
    name: 'RangeException',
    message: 'Value must be between 0 and 15.',
    code: 16,
    asString: 'RangeException [0x10]: Value must be between 0 and 15.',
    asValue: 16,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=Value%20must%20be%20between%200%20and%2015.`,
  }],
] as const;

const init1 = { value: 5 } as const;
const init2 = { valueName: 'example' } as const;
const init3 = { lowerBound: 0 } as const;
const init4 = { upperBound: 4 } as const;
const init5 = { ...init1, ...init2 } as const;
const init6 = { ...init1, ...init3 } as const;
const init7 = { ...init1, ...init4 } as const;
const init8 = { ...init2, ...init3 } as const;
const init9 = { ...init2, ...init4 } as const;
const init10 = { ...init3, ...init4 } as const;
const init11 = { ...init1, ...init2, ...init3 } as const;
const init12 = { ...init1, ...init2, ...init4 } as const;
const init13 = { ...init1, ...init3, ...init4 } as const;
const init14 = { ...init2, ...init3, ...init4 } as const;
const init15 = { ...init1, ...init2, ...init3, ...init4 } as const;

export const initFixtures = [
  [{}, {
    name: 'RangeException',
    message: 'A numeric value is out of range.',
    code: 16,
    asString: 'RangeException [0x10]: A numeric value is out of range.',
    asValue: 16,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=A%20numeric%20value%20is%20out%20of%20range.`,
  }],
  [init1, {
    name: 'RangeException',
    message: 'The value 5 is out of range.',
    code: 16,
    asString: 'RangeException [0x10]: The value 5 is out of range.',
    asValue: 16,
    cause: undefined,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=The%20value%205%20is%20out%20of%20range.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }`,
  }],
  [init2, {
    name: 'RangeException',
    message: 'The value of "example" is out of range.',
    code: 16,
    asString: 'RangeException [0x10]: The value of "example" is out of range.',
    asValue: 16,
    cause: undefined,
    data: init2,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=The%20value%20of%20%22example%22%20is%20out%20of%20range.&data=${
        encodeURIComponent(JSON.stringify(init2))
      }`,
  }],
  [init3, {
    name: 'RangeException',
    message: 'A numeric value is out of range. It must be 0 or greater.',
    code: 16,
    asString:
      'RangeException [0x10]: A numeric value is out of range. It must be 0 or greater.',
    asValue: 16,
    cause: undefined,
    data: init3,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=A%20numeric%20value%20is%20out%20of%20range.%20It%20must%20be%200%20or%20greater.&data=${
        encodeURIComponent(JSON.stringify(init3))
      }`,
  }],
  [init4, {
    name: 'RangeException',
    message: 'A numeric value is out of range. It must be 4 or less.',
    code: 16,
    asString:
      'RangeException [0x10]: A numeric value is out of range. It must be 4 or less.',
    asValue: 16,
    cause: undefined,
    data: init4,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=A%20numeric%20value%20is%20out%20of%20range.%20It%20must%20be%204%20or%20less.&data=${
        encodeURIComponent(JSON.stringify(init4))
      }`,
  }],
  [init5, {
    name: 'RangeException',
    message: 'The value 5 of "example" is out of range.',
    code: 16,
    asString:
      'RangeException [0x10]: The value 5 of "example" is out of range.',
    asValue: 16,
    cause: undefined,
    data: init5,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=The%20value%205%20of%20%22example%22%20is%20out%20of%20range.&data=${
        encodeURIComponent(JSON.stringify(init5))
      }`,
  }],
  [init6, {
    name: 'RangeException',
    message: 'The value 5 is out of range. It must be 0 or greater.',
    code: 16,
    asString:
      'RangeException [0x10]: The value 5 is out of range. It must be 0 or greater.',
    asValue: 16,
    cause: undefined,
    data: init6,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=The%20value%205%20is%20out%20of%20range.%20It%20must%20be%200%20or%20greater.&data=${
        encodeURIComponent(JSON.stringify(init6))
      }`,
  }],
  [init7, {
    name: 'RangeException',
    message: 'The value 5 is out of range. It must be 4 or less.',
    code: 16,
    asString:
      'RangeException [0x10]: The value 5 is out of range. It must be 4 or less.',
    asValue: 16,
    cause: undefined,
    data: init7,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=The%20value%205%20is%20out%20of%20range.%20It%20must%20be%204%20or%20less.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }`,
  }],
  [init8, {
    name: 'RangeException',
    message: 'The value of "example" is out of range. It must be 0 or greater.',
    code: 16,
    asString:
      'RangeException [0x10]: The value of "example" is out of range. It must be 0 or greater.',
    asValue: 16,
    cause: undefined,
    data: init8,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=The%20value%20of%20%22example%22%20is%20out%20of%20range.%20It%20must%20be%200%20or%20greater.&data=${
        encodeURIComponent(JSON.stringify(init8))
      }`,
  }],
  [init9, {
    name: 'RangeException',
    message: 'The value of "example" is out of range. It must be 4 or less.',
    code: 16,
    asString:
      'RangeException [0x10]: The value of "example" is out of range. It must be 4 or less.',
    asValue: 16,
    cause: undefined,
    data: init9,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=The%20value%20of%20%22example%22%20is%20out%20of%20range.%20It%20must%20be%204%20or%20less.&data=${
        encodeURIComponent(JSON.stringify(init9))
      }`,
  }],
  [init10, {
    name: 'RangeException',
    message:
      'A numeric value is out of range. It must be 0, 4, or between them.',
    code: 16,
    asString:
      'RangeException [0x10]: A numeric value is out of range. It must be 0, 4, or between them.',
    asValue: 16,
    cause: undefined,
    data: init10,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=A%20numeric%20value%20is%20out%20of%20range.%20It%20must%20be%200%2C%204%2C%20or%20between%20them.&data=${
        encodeURIComponent(JSON.stringify(init10))
      }`,
  }],
  [init11, {
    name: 'RangeException',
    message:
      'The value 5 of "example" is out of range. It must be 0 or greater.',
    code: 16,
    asString:
      'RangeException [0x10]: The value 5 of "example" is out of range. It must be 0 or greater.',
    asValue: 16,
    cause: undefined,
    data: init11,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=The%20value%205%20of%20%22example%22%20is%20out%20of%20range.%20It%20must%20be%200%20or%20greater.&data=${
        encodeURIComponent(JSON.stringify(init11))
      }`,
  }],
  [init12, {
    name: 'RangeException',
    message: 'The value 5 of "example" is out of range. It must be 4 or less.',
    code: 16,
    asString:
      'RangeException [0x10]: The value 5 of "example" is out of range. It must be 4 or less.',
    asValue: 16,
    cause: undefined,
    data: init12,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=The%20value%205%20of%20%22example%22%20is%20out%20of%20range.%20It%20must%20be%204%20or%20less.&data=${
        encodeURIComponent(JSON.stringify(init12))
      }`,
  }],
  [init13, {
    name: 'RangeException',
    message: 'The value 5 is out of range. It must be 0, 4, or between them.',
    code: 16,
    asString:
      'RangeException [0x10]: The value 5 is out of range. It must be 0, 4, or between them.',
    asValue: 16,
    cause: undefined,
    data: init13,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=The%20value%205%20is%20out%20of%20range.%20It%20must%20be%200%2C%204%2C%20or%20between%20them.&data=${
        encodeURIComponent(JSON.stringify(init13))
      }`,
  }],
  [init14, {
    name: 'RangeException',
    message:
      'The value of "example" is out of range. It must be 0, 4, or between them.',
    code: 16,
    asString:
      'RangeException [0x10]: The value of "example" is out of range. It must be 0, 4, or between them.',
    asValue: 16,
    cause: undefined,
    data: init14,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=The%20value%20of%20%22example%22%20is%20out%20of%20range.%20It%20must%20be%200%2C%204%2C%20or%20between%20them.&data=${
        encodeURIComponent(JSON.stringify(init14))
      }`,
  }],
  [init15, {
    name: 'RangeException',
    message:
      'The value 5 of "example" is out of range. It must be 0, 4, or between them.',
    code: 16,
    asString:
      'RangeException [0x10]: The value 5 of "example" is out of range. It must be 0, 4, or between them.',
    asValue: 16,
    cause: undefined,
    data: init15,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=The%20value%205%20of%20%22example%22%20is%20out%20of%20range.%20It%20must%20be%200%2C%204%2C%20or%20between%20them.&data=${
        encodeURIComponent(JSON.stringify(init15))
      }`,
  }],
] as const;

const cause0 = new Error('Value must be between 5 and 10.');

export const messageCauseFixtures = [
  ['Value must be between 5 and 10.', cause0, {
    name: 'RangeException',
    message: 'Value must be between 5 and 10.',
    code: 16,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=Value%20must%20be%20between%205%20and%2010.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

export const messageDataFixtures = [
  ['Value must be between 5 and 10.', init15, {
    name: 'RangeException',
    message: 'Value must be between 5 and 10.',
    code: 16,
    cause: undefined,
    data: init15,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=Value%20must%20be%20between%205%20and%2010.&data=${
        encodeURIComponent(JSON.stringify(init15))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Value must be between 5 and 10.', { ...init15, cause: cause0 }, {
    name: 'RangeException',
    message: 'Value must be between 5 and 10.',
    code: 16,
    cause: cause0,
    data: init15,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=Value%20must%20be%20between%205%20and%2010.&data=${
        encodeURIComponent(JSON.stringify(init15))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
