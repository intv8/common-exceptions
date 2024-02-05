/**
 * This file contains test cases, mocks, or other data for testing the
 * NotFoundException feature.
 *
 * For use in ../not_found_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['Cannot find a resource.', {
    name: 'NotFoundException',
    message: 'Cannot find a resource.',
    code: 17,
    asString: 'NotFoundException [0x11]: Cannot find a resource.',
    asValue: 17,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x11?message=Cannot%20find%20a%20resource.`,
  }],
] as const;

const cause0 = new Error('Cannot find a resource.');

export const messageCauseFixtures = [
  ['Cannot find a resource.', cause0, {
    name: 'NotFoundException',
    message: 'Cannot find a resource.',
    code: 17,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x11?message=Cannot%20find%20a%20resource.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const data = { foo: 'bar', baz: 172, qux: true } as const;

export const messageDataFixtures = [
  ['Cannot find a resource.', data, {
    name: 'NotFoundException',
    message: 'Cannot find a resource.',
    code: 17,
    cause: undefined,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x11?message=Cannot%20find%20a%20resource.&data=${
        encodeURIComponent(JSON.stringify(data))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Cannot find a resource.', { ...data, cause: cause0 }, {
    name: 'NotFoundException',
    message: 'Cannot find a resource.',
    code: 17,
    cause: cause0,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x11?message=Cannot%20find%20a%20resource.&data=${
        encodeURIComponent(JSON.stringify(data))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
