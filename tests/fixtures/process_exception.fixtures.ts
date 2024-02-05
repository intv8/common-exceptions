/**
 * This file contains test cases, mocks, or other data for testing the
 * ProcessException feature.
 *
 * For use in ../process_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['Process failed to start.', {
    name: 'ProcessException',
    message: 'Process failed to start.',
    code: 6,
    asString: 'ProcessException [0x6]: Process failed to start.',
    asValue: 6,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x6?message=Process%20failed%20to%20start.`,
  }],
] as const;

const cause0 = new Error('Process failed to start.');

export const messageCauseFixtures = [
  ['Process failed to start.', cause0, {
    name: 'ProcessException',
    message: 'Process failed to start.',
    code: 6,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x6?message=Process%20failed%20to%20start.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const data = { foo: 'bar', baz: 62, qux: true } as const;

export const messageDataFixtures = [
  ['Process failed to start.', data, {
    name: 'ProcessException',
    message: 'Process failed to start.',
    code: 6,
    cause: undefined,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x6?message=Process%20failed%20to%20start.&data=${
        encodeURIComponent(JSON.stringify(data))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Process failed to start.', { ...data, cause: cause0 }, {
    name: 'ProcessException',
    message: 'Process failed to start.',
    code: 6,
    cause: cause0,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x6?message=Process%20failed%20to%20start.&data=${
        encodeURIComponent(JSON.stringify(data))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
