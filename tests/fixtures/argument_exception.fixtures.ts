/**
 * This file contains test cases, mocks, or other data for testing the
 * ArgumentException feature.
 *
 * For use in ../argument_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['', {
    name: 'ArgumentException',
    message: 'An argument has the correct type, but an invalid value.',
    code: 21,
    asString:
      'ArgumentException [0x15]: An argument has the correct type, but an invalid value.',
    asValue: 21,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x15?message=An%20argument%20has%20the%20correct%20type%2C%20but%20an%20invalid%20value.`,
  }],
  ['An argument is invalid.', {
    name: 'ArgumentException',
    message: 'An argument is invalid.',
    code: 21,
    asString: 'ArgumentException [0x15]: An argument is invalid.',
    asValue: 21,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x15?message=An%20argument%20is%20invalid.`,
  }],
] as const;

const init1 = { argumentName: 'example' } as const;
const init2 = { argumentConstraints: ['string', 'lowercase'] };
const init3 = { ...init1, ...init2 } as const;

export const initFixtures = [
  [{}, {
    name: 'ArgumentException',
    message: 'An argument has the correct type, but an invalid value.',
    code: 21,
    asString:
      'ArgumentException [0x15]: An argument has the correct type, but an invalid value.',
    asValue: 21,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x15?message=An%20argument%20has%20the%20correct%20type%2C%20but%20an%20invalid%20value.`,
  }],
  [init1, {
    name: 'ArgumentException',
    message:
      'The argument "example" has the correct type, but an invalid value.',
    code: 21,
    asString:
      'ArgumentException [0x15]: The argument "example" has the correct type, but an invalid value.',
    asValue: 21,
    cause: undefined,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x15?message=The%20argument%20%22example%22%20has%20the%20correct%20type%2C%20but%20an%20invalid%20value.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }`,
  }],
  [init2, {
    name: 'ArgumentException',
    message:
      'An argument has the correct type, but an invalid value. It must meet the following additional constraints: "string", "lowercase".',
    code: 21,
    asString:
      'ArgumentException [0x15]: An argument has the correct type, but an invalid value. It must meet the following additional constraints: "string", "lowercase".',
    asValue: 21,
    cause: undefined,
    data: init2,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x15?message=An%20argument%20has%20the%20correct%20type%2C%20but%20an%20invalid%20value.%20It%20must%20meet%20the%20following%20additional%20constraints%3A%20%22string%22%2C%20%22lowercase%22.&data=${
        encodeURIComponent(JSON.stringify(init2))
      }`,
  }],
  [init3, {
    name: 'ArgumentException',
    message:
      'The argument "example" has the correct type, but an invalid value. It must meet the following additional constraints: "string", "lowercase".',
    code: 21,
    asString:
      'ArgumentException [0x15]: The argument "example" has the correct type, but an invalid value. It must meet the following additional constraints: "string", "lowercase".',
    asValue: 21,
    cause: undefined,
    data: init3,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x15?message=The%20argument%20%22example%22%20has%20the%20correct%20type%2C%20but%20an%20invalid%20value.%20It%20must%20meet%20the%20following%20additional%20constraints%3A%20%22string%22%2C%20%22lowercase%22.&data=${
        encodeURIComponent(JSON.stringify(init3))
      }`,
  }],
] as const;

const cause0 = new Error('An argument is invalid..');

export const messageCauseFixtures = [
  ['An argument is invalid..', cause0, {
    name: 'ArgumentException',
    message: 'An argument is invalid..',
    code: 21,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x15?message=An%20argument%20is%20invalid..&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

export const messageDataFixtures = [
  ['An argument is invalid..', init1, {
    name: 'ArgumentException',
    message: 'An argument is invalid..',
    code: 21,
    cause: undefined,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x15?message=An%20argument%20is%20invalid..&data=${
        encodeURIComponent(JSON.stringify(init1))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['An argument is invalid..', { ...init1, cause: cause0 }, {
    name: 'ArgumentException',
    message: 'An argument is invalid..',
    code: 21,
    cause: cause0,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x15?message=An%20argument%20is%20invalid..&data=${
        encodeURIComponent(JSON.stringify(init1))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
