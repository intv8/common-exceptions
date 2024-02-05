/**
 * This file contains test cases, mocks, or other data for testing the
 * DiskException feature.
 *
 * For use in ../disk_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['No permissions to file.', {
    name: 'DiskException',
    message: 'No permissions to file.',
    code: 5,
    asString: 'DiskException [0x5]: No permissions to file.',
    asValue: 5,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x5?message=No%20permissions%20to%20file.`,
  }],
] as const;

const cause0 = new Error('No permissions to file.');

export const messageCauseFixtures = [
  ['No permissions to file.', cause0, {
    name: 'DiskException',
    message: 'No permissions to file.',
    code: 5,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x5?message=No%20permissions%20to%20file.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const data = { foo: 'bar', baz: 42, qux: true } as const;

export const messageDataFixtures = [
  ['No permissions to file.', data, {
    name: 'DiskException',
    message: 'No permissions to file.',
    code: 5,
    cause: undefined,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x5?message=No%20permissions%20to%20file.&data=${
        encodeURIComponent(JSON.stringify(data))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['No permissions to file.', { ...data, cause: cause0 }, {
    name: 'DiskException',
    message: 'No permissions to file.',
    code: 5,
    cause: cause0,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x5?message=No%20permissions%20to%20file.&data=${
        encodeURIComponent(JSON.stringify(data))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
