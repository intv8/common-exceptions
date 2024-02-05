/**
 * This file contains test cases, mocks, or other data for testing the
 * TimeoutException feature.
 *
 * For use in ../timeout_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['', {
    name: 'TimeoutException',
    message: 'An operation timed out.',
    code: 25,
    asString: 'TimeoutException [0x19]: An operation timed out.',
    asValue: 25,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x19?message=An%20operation%20timed%20out.`,
  }],
  ['Operational timeout.', {
    name: 'TimeoutException',
    message: 'Operational timeout.',
    code: 25,
    asString: 'TimeoutException [0x19]: Operational timeout.',
    asValue: 25,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x19?message=Operational%20timeout.`,
  }],
] as const;

const init1 = { operationType: 'request' } as const;
const init2 = { operationName: 'example' } as const;
const init3 = { operationTimeout: 10 } as const;
const init4 = { ...init1, ...init2 } as const;
const init5 = { ...init1, ...init3 } as const;
const init6 = { ...init2, ...init3 } as const;
const init7 = { ...init1, ...init2, ...init3 } as const;
export const initFixtures = [
  [{}, {
    name: 'TimeoutException',
    message: 'An operation timed out.',
    code: 25,
    asString: 'TimeoutException [0x19]: An operation timed out.',
    asValue: 25,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x19?message=An%20operation%20timed%20out.`,
  }],
  [init1, {
    name: 'TimeoutException',
    message: 'A request timed out.',
    code: 25,
    asString: 'TimeoutException [0x19]: A request timed out.',
    asValue: 25,
    cause: undefined,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x19?message=A%20request%20timed%20out.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }`,
  }],
  [init2, {
    name: 'TimeoutException',
    message: 'The operation "example" timed out.',
    code: 25,
    asString: 'TimeoutException [0x19]: The operation "example" timed out.',
    asValue: 25,
    cause: undefined,
    data: init2,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x19?message=The%20operation%20%22example%22%20timed%20out.&data=${
        encodeURIComponent(JSON.stringify(init2))
      }`,
  }],
  [init3, {
    name: 'TimeoutException',
    message: 'An operation timed after 10 seconds.',
    code: 25,
    asString: 'TimeoutException [0x19]: An operation timed after 10 seconds.',
    asValue: 25,
    cause: undefined,
    data: init3,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x19?message=An%20operation%20timed%20after%2010%20seconds.&data=${
        encodeURIComponent(JSON.stringify(init3))
      }`,
  }],
  [init4, {
    name: 'TimeoutException',
    message: 'The request "example" timed out.',
    code: 25,
    asString: 'TimeoutException [0x19]: The request "example" timed out.',
    asValue: 25,
    cause: undefined,
    data: init4,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x19?message=The%20request%20%22example%22%20timed%20out.&data=${
        encodeURIComponent(JSON.stringify(init4))
      }`,
  }],
  [init5, {
    name: 'TimeoutException',
    message: 'A request timed after 10 seconds.',
    code: 25,
    asString: 'TimeoutException [0x19]: A request timed after 10 seconds.',
    asValue: 25,
    cause: undefined,
    data: init5,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x19?message=A%20request%20timed%20after%2010%20seconds.&data=${
        encodeURIComponent(JSON.stringify(init5))
      }`,
  }],
  [init6, {
    name: 'TimeoutException',
    message: 'The operation "example" timed after 10 seconds.',
    code: 25,
    asString:
      'TimeoutException [0x19]: The operation "example" timed after 10 seconds.',
    asValue: 25,
    cause: undefined,
    data: init6,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x19?message=The%20operation%20%22example%22%20timed%20after%2010%20seconds.&data=${
        encodeURIComponent(JSON.stringify(init6))
      }`,
  }],
  [init7, {
    name: 'TimeoutException',
    message: 'The request "example" timed after 10 seconds.',
    code: 25,
    asString:
      'TimeoutException [0x19]: The request "example" timed after 10 seconds.',
    asValue: 25,
    cause: undefined,
    data: init7,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x19?message=The%20request%20%22example%22%20timed%20after%2010%20seconds.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }`,
  }],
] as const;

const cause0 = new Error('Operational timeout.');

export const messageCauseFixtures = [
  ['Operational timeout.', cause0, {
    name: 'TimeoutException',
    message: 'Operational timeout.',
    code: 25,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x19?message=Operational%20timeout.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

export const messageDataFixtures = [
  ['Operational timeout.', init7, {
    name: 'TimeoutException',
    message: 'Operational timeout.',
    code: 25,
    cause: undefined,
    data: init7,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x19?message=Operational%20timeout.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Operational timeout.', { ...init7, cause: cause0 }, {
    name: 'TimeoutException',
    message: 'Operational timeout.',
    code: 25,
    cause: cause0,
    data: init7,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x19?message=Operational%20timeout.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
