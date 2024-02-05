/**
 * This file contains test cases, mocks, or other data for testing the
 * ConnectionException feature.
 *
 * For use in ../connection_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['A connection disconnected.', {
    name: 'ConnectionException',
    message: 'A connection disconnected.',
    code: 7,
    asString: 'ConnectionException [0x7]: A connection disconnected.',
    asValue: 7,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x7?message=A%20connection%20disconnected.`,
  }],
] as const;

const cause0 = new Error('A connection disconnected.');

export const messageCauseFixtures = [
  ['A connection disconnected.', cause0, {
    name: 'ConnectionException',
    message: 'A connection disconnected.',
    code: 7,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x7?message=A%20connection%20disconnected.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const data = { foo: 'bar', baz: 42, qux: true } as const;

export const messageDataFixtures = [
  ['A connection disconnected.', data, {
    name: 'ConnectionException',
    message: 'A connection disconnected.',
    code: 7,
    cause: undefined,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x7?message=A%20connection%20disconnected.&data=${
        encodeURIComponent(JSON.stringify(data))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['A connection disconnected.', { ...data, cause: cause0 }, {
    name: 'ConnectionException',
    message: 'A connection disconnected.',
    code: 7,
    cause: cause0,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x7?message=A%20connection%20disconnected.&data=${
        encodeURIComponent(JSON.stringify(data))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
