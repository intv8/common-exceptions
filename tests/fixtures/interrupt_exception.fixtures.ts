/**
 * This file contains test cases, mocks, or other data for testing the
 * InterruptException feature.
 *
 * For use in ../interrupt_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['An operation was interrupted.', {
    name: 'InterruptException',
    message: 'An operation was interrupted.',
    code: 2,
    asString: 'InterruptException [0x2]: An operation was interrupted.',
    asValue: 2,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x2?message=An%20operation%20was%20interrupted.`,
  }],
] as const;

const cause0 = new Error('An operation was interrupted.');

export const messageCauseFixtures = [
  ['An operation was interrupted.', cause0, {
    name: 'InterruptException',
    message: 'An operation was interrupted.',
    code: 2,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x2?message=An%20operation%20was%20interrupted.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const data = { foo: 'bar', baz: 42, qux: true } as const;

export const messageDataFixtures = [
  ['An operation was interrupted.', data, {
    name: 'InterruptException',
    message: 'An operation was interrupted.',
    code: 2,
    cause: undefined,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x2?message=An%20operation%20was%20interrupted.&data=${
        encodeURIComponent(JSON.stringify(data))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['An operation was interrupted.', { ...data, cause: cause0 }, {
    name: 'InterruptException',
    message: 'An operation was interrupted.',
    code: 2,
    cause: cause0,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x2?message=An%20operation%20was%20interrupted.&data=${
        encodeURIComponent(JSON.stringify(data))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
