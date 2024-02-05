/**
 * This file contains test cases, mocks, or other data for testing the
 * NotSupportedException feature.
 *
 * For use in ../not_supported_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['Operation is not supported.', {
    name: 'NotSupportedException',
    message: 'Operation is not supported.',
    code: 12,
    asString: 'NotSupportedException [0xc]: Operation is not supported.',
    asValue: 12,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xc?message=Operation%20is%20not%20supported.`,
  }],
] as const;

const cause0 = new Error('Operation is not supported.');

export const messageCauseFixtures = [
  ['Operation is not supported.', cause0, {
    name: 'NotSupportedException',
    message: 'Operation is not supported.',
    code: 12,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xc?message=Operation%20is%20not%20supported.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const data = { foo: 'bar', baz: 122, qux: true } as const;

export const messageDataFixtures = [
  ['Operation is not supported.', data, {
    name: 'NotSupportedException',
    message: 'Operation is not supported.',
    code: 12,
    cause: undefined,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xc?message=Operation%20is%20not%20supported.&data=${
        encodeURIComponent(JSON.stringify(data))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Operation is not supported.', { ...data, cause: cause0 }, {
    name: 'NotSupportedException',
    message: 'Operation is not supported.',
    code: 12,
    cause: cause0,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xc?message=Operation%20is%20not%20supported.&data=${
        encodeURIComponent(JSON.stringify(data))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
