/**
 * This file contains test cases, mocks, or other data for testing the Exception feature.
 *
 * For use in ../exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

import { Exception } from '../../mod.ts';

export const messageFixtures = [
  ['Something went wrong.', {
    name: 'Exception',
    message: 'Something went wrong.',
    code: 0,
    asString: 'Exception [0x0]: Something went wrong.',
    asValue: 0,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x0?message=Something%20went%20wrong.`,
  }],
] as const;

const cause0 = new Error('Something went wrong.');

export const messageCauseFixtures = [
  ['Something went wrong.', cause0, {
    name: 'Exception',
    message: 'Something went wrong.',
    code: 0,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x0?message=Something%20went%20wrong.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const data = { foo: 'bar', baz: 42, qux: true } as const;

export const messageDataFixtures = [
  ['Something went wrong.', data, {
    name: 'Exception',
    message: 'Something went wrong.',
    code: 0,
    cause: undefined,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x0?message=Something%20went%20wrong.&data=${
        encodeURIComponent(JSON.stringify(data))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Something went wrong.', { ...data, cause: cause0 }, {
    name: 'Exception',
    message: 'Something went wrong.',
    code: 0,
    cause: cause0,
    data,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x0?message=Something%20went%20wrong.&data=${
        encodeURIComponent(JSON.stringify(data))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

const cause1 = new Exception('An error occurred.', {
  cause: cause0,
  foo: 'bar',
});
const cause2 = new Exception('Cannot complete process.', {
  cause: cause1,
  baz: 42,
});

export const nestedFixtures = [
  ['Something went wrong.', { qux: true, cause: cause2 }, {
    name: 'Exception',
    message: 'Something went wrong.',
    code: 0,
    cause: cause2,
    data: { qux: true },
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x0?message=Something%20went%20wrong.&data=${
        encodeURIComponent(JSON.stringify({ qux: true }))
      }&cause=${
        encodeURIComponent(JSON.stringify({
          name: 'Exception',
          message: cause2.message,
          helpUrl:
            `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x0?message=Cannot%20complete%20process.&data=${
              encodeURIComponent(JSON.stringify({ baz: 42 }))
            }&cause=${
              encodeURIComponent(JSON.stringify({
                name: 'Exception',
                message: cause1.message,
                helpUrl:
                  `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x0?message=An%20error%20occurred.&data=${
                    encodeURIComponent(JSON.stringify({ foo: 'bar' }))
                  }&cause=${
                    encodeURIComponent(
                      JSON.stringify({
                        name: 'Error',
                        message: cause0.message,
                      }),
                    )
                  }`,
              }))
            }`,
        }))
      }`,
  }],
] as const;

class ExceptionCustomHelpUrl extends Exception {
  protected getHelpUrlHost(): string {
    return 'https://example.com';
  }

  protected getHelpUrlPath(): string {
    return `/help/${this.code}`;
  }

  public get helpUrl(): string {
    return super.helpUrl;
  }
}

const cause3 = new ExceptionCustomHelpUrl('An error occurred.');

export const customHelpUrlFixtures = [
  [cause3.helpUrl, 'https://example.com/help/0?message=An%20error%20occurred.'],
] as const;
