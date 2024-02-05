/**
 * This file contains test cases, mocks, or other data for testing the
 * NotImplementedException feature.
 *
 * For use in ../not_implemented_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['', {
    name: 'NotImplementedException',
    message: 'This method has not been implemented.',
    code: 11,
    asString:
      'NotImplementedException [0xb]: This method has not been implemented.',
    asValue: 11,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xb?message=This%20method%20has%20not%20been%20implemented.`,
  }],
  ['func41 is not implemented.', {
    name: 'NotImplementedException',
    message: 'func41 is not implemented.',
    code: 11,
    asString: 'NotImplementedException [0xb]: func41 is not implemented.',
    asValue: 11,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xb?message=func41%20is%20not%20implemented.`,
  }],
] as const;

const init1 = { methodName: 'func41' } as const;

export const initFixtures = [
  [{}, {
    name: 'NotImplementedException',
    message: 'This method has not been implemented.',
    code: 11,
    asString:
      'NotImplementedException [0xb]: This method has not been implemented.',
    asValue: 11,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xb?message=This%20method%20has%20not%20been%20implemented.`,
  }],
  [init1, {
    name: 'NotImplementedException',
    message: 'The method "func41" has not been implemented.',
    code: 11,
    asString:
      'NotImplementedException [0xb]: The method "func41" has not been implemented.',
    asValue: 11,
    cause: undefined,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xb?message=The%20method%20%22func41%22%20has%20not%20been%20implemented.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }`,
  }],
] as const;

const cause0 = new Error('func41 is not implemented.');

export const messageCauseFixtures = [
  ['func41 is not implemented.', cause0, {
    name: 'NotImplementedException',
    message: 'func41 is not implemented.',
    code: 11,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xb?message=func41%20is%20not%20implemented.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

export const messageDataFixtures = [
  ['func41 is not implemented.', init1, {
    name: 'NotImplementedException',
    message: 'func41 is not implemented.',
    code: 11,
    cause: undefined,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xb?message=func41%20is%20not%20implemented.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['func41 is not implemented.', { ...init1, cause: cause0 }, {
    name: 'NotImplementedException',
    message: 'func41 is not implemented.',
    code: 11,
    cause: cause0,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xb?message=func41%20is%20not%20implemented.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
