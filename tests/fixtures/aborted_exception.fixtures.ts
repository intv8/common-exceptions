/**
 * This file contains test cases, mocks, or other data for testing the
 * AbortedException feature.
 *
 * For use in ../aborted_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['Operation has been aborted.', {
    name: 'AbortedException',
    message: 'Operation has been aborted.',
    code: 3,
    asString: 'AbortedException [0x3]: Operation has been aborted.',
    asValue: 3,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x3?message=Operation%20has%20been%20aborted.`,
  }],
] as const;

const cause0 = new Error('Operation has been aborted.');

export const messageCauseFixtures = [
  ['Operation has been aborted.', cause0, {
    name: 'AbortedException',
    message: 'Operation has been aborted.',
    code: 3,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x3?message=Operation%20has%20been%20aborted.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const data = { foo: 'bar', baz: 42, qux: true } as const;

export const messageDataFixtures = [
  ['Operation has been aborted.', data, {
    name: 'AbortedException',
    message: 'Operation has been aborted.',
    code: 3,
    cause: undefined,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x3?message=Operation%20has%20been%20aborted.&data=${
        encodeURIComponent(JSON.stringify(data))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Operation has been aborted.', { ...data, cause: cause0 }, {
    name: 'AbortedException',
    message: 'Operation has been aborted.',
    code: 3,
    cause: cause0,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x3?message=Operation%20has%20been%20aborted.&data=${
        encodeURIComponent(JSON.stringify(data))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
