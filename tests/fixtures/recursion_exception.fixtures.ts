/**
 * This file contains test cases, mocks, or other data for testing the
 * RecursionException feature.
 *
 * For use in ../recursion_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['', {
    name: 'RecursionException',
    message: 'An operation exceeded the maximum recursion depth.',
    code: 23,
    asString:
      'RecursionException [0x17]: An operation exceeded the maximum recursion depth.',
    asValue: 23,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x17?message=An%20operation%20exceeded%20the%20maximum%20recursion%20depth.`,
  }],
  ['Recursion max depth exceeded.', {
    name: 'RecursionException',
    message: 'Recursion max depth exceeded.',
    code: 23,
    asString: 'RecursionException [0x17]: Recursion max depth exceeded.',
    asValue: 23,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x17?message=Recursion%20max%20depth%20exceeded.`,
  }],
] as const;

const init1 = { operationType: 'request' } as const;
const init2 = { operationName: 'example' } as const;
const init3 = { recursionDepth: 5 } as const;
const init4 = { ...init1, ...init2 } as const;
const init5 = { ...init1, ...init3 } as const;
const init6 = { ...init2, ...init3 } as const;
const init7 = { ...init1, ...init2, ...init3 } as const;
export const initFixtures = [
  [{}, {
    name: 'RecursionException',
    message: 'An operation exceeded the maximum recursion depth.',
    code: 23,
    asString:
      'RecursionException [0x17]: An operation exceeded the maximum recursion depth.',
    asValue: 23,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x17?message=An%20operation%20exceeded%20the%20maximum%20recursion%20depth.`,
  }],
  [init1, {
    name: 'RecursionException',
    message: 'A request exceeded the maximum recursion depth.',
    code: 23,
    asString:
      'RecursionException [0x17]: A request exceeded the maximum recursion depth.',
    asValue: 23,
    cause: undefined,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x17?message=A%20request%20exceeded%20the%20maximum%20recursion%20depth.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }`,
  }],
  [init2, {
    name: 'RecursionException',
    message: 'The operation "example" exceeded the maximum recursion depth.',
    code: 23,
    asString:
      'RecursionException [0x17]: The operation "example" exceeded the maximum recursion depth.',
    asValue: 23,
    cause: undefined,
    data: init2,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x17?message=The%20operation%20%22example%22%20exceeded%20the%20maximum%20recursion%20depth.&data=${
        encodeURIComponent(JSON.stringify(init2))
      }`,
  }],
  [init3, {
    name: 'RecursionException',
    message: 'An operation exceeded the maximum recursion depth of 5 levels.',
    code: 23,
    asString:
      'RecursionException [0x17]: An operation exceeded the maximum recursion depth of 5 levels.',
    asValue: 23,
    cause: undefined,
    data: init3,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x17?message=An%20operation%20exceeded%20the%20maximum%20recursion%20depth%20of%205%20levels.&data=${
        encodeURIComponent(JSON.stringify(init3))
      }`,
  }],
  [init4, {
    name: 'RecursionException',
    message: 'The request "example" exceeded the maximum recursion depth.',
    code: 23,
    asString:
      'RecursionException [0x17]: The request "example" exceeded the maximum recursion depth.',
    asValue: 23,
    cause: undefined,
    data: init4,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x17?message=The%20request%20%22example%22%20exceeded%20the%20maximum%20recursion%20depth.&data=${
        encodeURIComponent(JSON.stringify(init4))
      }`,
  }],
  [init5, {
    name: 'RecursionException',
    message: 'A request exceeded the maximum recursion depth of 5 levels.',
    code: 23,
    asString:
      'RecursionException [0x17]: A request exceeded the maximum recursion depth of 5 levels.',
    asValue: 23,
    cause: undefined,
    data: init5,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x17?message=A%20request%20exceeded%20the%20maximum%20recursion%20depth%20of%205%20levels.&data=${
        encodeURIComponent(JSON.stringify(init5))
      }`,
  }],
  [init6, {
    name: 'RecursionException',
    message:
      'The operation "example" exceeded the maximum recursion depth of 5 levels.',
    code: 23,
    asString:
      'RecursionException [0x17]: The operation "example" exceeded the maximum recursion depth of 5 levels.',
    asValue: 23,
    cause: undefined,
    data: init6,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x17?message=The%20operation%20%22example%22%20exceeded%20the%20maximum%20recursion%20depth%20of%205%20levels.&data=${
        encodeURIComponent(JSON.stringify(init6))
      }`,
  }],
  [init7, {
    name: 'RecursionException',
    message:
      'The request "example" exceeded the maximum recursion depth of 5 levels.',
    code: 23,
    asString:
      'RecursionException [0x17]: The request "example" exceeded the maximum recursion depth of 5 levels.',
    asValue: 23,
    cause: undefined,
    data: init7,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x17?message=The%20request%20%22example%22%20exceeded%20the%20maximum%20recursion%20depth%20of%205%20levels.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }`,
  }],
] as const;

const cause0 = new Error('Recursion max depth exceeded.');

export const messageCauseFixtures = [
  ['Recursion max depth exceeded.', cause0, {
    name: 'RecursionException',
    message: 'Recursion max depth exceeded.',
    code: 23,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x17?message=Recursion%20max%20depth%20exceeded.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

export const messageDataFixtures = [
  ['Recursion max depth exceeded.', init7, {
    name: 'RecursionException',
    message: 'Recursion max depth exceeded.',
    code: 23,
    cause: undefined,
    data: init7,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x17?message=Recursion%20max%20depth%20exceeded.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Recursion max depth exceeded.', { ...init7, cause: cause0 }, {
    name: 'RecursionException',
    message: 'Recursion max depth exceeded.',
    code: 23,
    cause: cause0,
    data: init7,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x17?message=Recursion%20max%20depth%20exceeded.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
