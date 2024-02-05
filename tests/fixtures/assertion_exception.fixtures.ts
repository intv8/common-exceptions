/**
 * This file contains test cases, mocks, or other data for testing the
 * AssertionException feature.
 *
 * For use in ../assertion_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['Values are not equal.', {
    name: 'AssertionException',
    message: 'Values are not equal.',
    code: 8,
    asString: 'AssertionException [0x8]: Values are not equal.',
    asValue: 8,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x8?message=Values%20are%20not%20equal.`,
  }],
] as const;

const cause0 = new Error('Values are not equal.');

export const messageCauseFixtures = [
  ['Values are not equal.', cause0, {
    name: 'AssertionException',
    message: 'Values are not equal.',
    code: 8,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x8?message=Values%20are%20not%20equal.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const data = { foo: 'bar', baz: 42, qux: true } as const;

export const messageDataFixtures = [
  ['Values are not equal.', data, {
    name: 'AssertionException',
    message: 'Values are not equal.',
    code: 8,
    cause: undefined,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x8?message=Values%20are%20not%20equal.&data=${
        encodeURIComponent(JSON.stringify(data))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Values are not equal.', { ...data, cause: cause0 }, {
    name: 'AssertionException',
    message: 'Values are not equal.',
    code: 8,
    cause: cause0,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x8?message=Values%20are%20not%20equal.&data=${
        encodeURIComponent(JSON.stringify(data))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
