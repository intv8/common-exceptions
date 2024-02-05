/**
 * This file contains test cases, mocks, or other data for testing the
 * ExternalException feature.
 *
 * For use in ../external_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['', {
    name: 'ExternalException',
    message: 'An external codebase raised an exception.',
    code: 9,
    asString:
      'ExternalException [0x9]: An external codebase raised an exception.',
    asValue: 9,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x9?message=An%20external%20codebase%20raised%20an%20exception.`,
  }],
  ['tr3rd raised an exception.', {
    name: 'ExternalException',
    message: 'tr3rd raised an exception.',
    code: 9,
    asString: 'ExternalException [0x9]: tr3rd raised an exception.',
    asValue: 9,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x9?message=tr3rd%20raised%20an%20exception.`,
  }],
] as const;

const init1 = { externalType: 'library' } as const;
const init2 = { externalName: 'th3rd' } as const;
const init3 = { externalType: 'library', externalName: 'th3rd' } as const;

export const initFixtures = [
  [{}, {
    name: 'ExternalException',
    message: 'An external codebase raised an exception.',
    code: 9,
    asString:
      'ExternalException [0x9]: An external codebase raised an exception.',
    asValue: 9,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x9?message=An%20external%20codebase%20raised%20an%20exception.`,
  }],
  [init1, {
    name: 'ExternalException',
    message: 'An external library raised an exception.',
    code: 9,
    asString:
      'ExternalException [0x9]: An external library raised an exception.',
    asValue: 9,
    cause: undefined,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x9?message=An%20external%20library%20raised%20an%20exception.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }`,
  }],
  [init2, {
    name: 'ExternalException',
    message: 'The external codebase "th3rd" raised an exception.',
    code: 9,
    asString:
      'ExternalException [0x9]: The external codebase "th3rd" raised an exception.',
    asValue: 9,
    cause: undefined,
    data: init2,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x9?message=The%20external%20codebase%20%22th3rd%22%20raised%20an%20exception.&data=${
        encodeURIComponent(JSON.stringify(init2))
      }`,
  }],
  [init3, {
    name: 'ExternalException',
    message: 'The external library "th3rd" raised an exception.',
    code: 9,
    asString:
      'ExternalException [0x9]: The external library "th3rd" raised an exception.',
    asValue: 9,
    cause: undefined,
    data: init3,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x9?message=The%20external%20library%20%22th3rd%22%20raised%20an%20exception.&data=${
        encodeURIComponent(JSON.stringify(init3))
      }`,
  }],
] as const;

const cause0 = new Error('tr3rd raised an exception.');

export const messageCauseFixtures = [
  ['tr3rd raised an exception.', cause0, {
    name: 'ExternalException',
    message: 'tr3rd raised an exception.',
    code: 9,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x9?message=tr3rd%20raised%20an%20exception.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

export const messageDataFixtures = [
  ['tr3rd raised an exception.', init3, {
    name: 'ExternalException',
    message: 'tr3rd raised an exception.',
    code: 9,
    cause: undefined,
    data: init3,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x9?message=tr3rd%20raised%20an%20exception.&data=${
        encodeURIComponent(JSON.stringify(init3))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['tr3rd raised an exception.', { ...init3, cause: cause0 }, {
    name: 'ExternalException',
    message: 'tr3rd raised an exception.',
    code: 9,
    cause: cause0,
    data: init3,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x9?message=tr3rd%20raised%20an%20exception.&data=${
        encodeURIComponent(JSON.stringify(init3))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
