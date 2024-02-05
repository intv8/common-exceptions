/**
 * This file contains test cases, mocks, or other data for testing the
 * DecoratorException feature.
 *
 * For use in ../decorator_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['', {
    name: 'DecoratorException',
    message: 'A decorator failed to apply.',
    code: 15,
    asString: 'DecoratorException [0xf]: A decorator failed to apply.',
    asValue: 15,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xf?message=A%20decorator%20failed%20to%20apply.`,
  }],
  ['A decorator cannot be applied to this feature.', {
    name: 'DecoratorException',
    message: 'A decorator cannot be applied to this feature.',
    code: 15,
    asString:
      'DecoratorException [0xf]: A decorator cannot be applied to this feature.',
    asValue: 15,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xf?message=A%20decorator%20cannot%20be%20applied%20to%20this%20feature.`,
  }],
] as const;

const init1 = { decoratorType: 'class' } as const;
const init2 = { decoratorName: 'model' } as const;
const init3 = { ...init1, ...init2 } as const;

export const initFixtures = [
  [{}, {
    name: 'DecoratorException',
    message: 'A decorator failed to apply.',
    code: 15,
    asString: 'DecoratorException [0xf]: A decorator failed to apply.',
    asValue: 15,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xf?message=A%20decorator%20failed%20to%20apply.`,
  }],
  [init1, {
    name: 'DecoratorException',
    message: 'A class decorator failed to apply.',
    code: 15,
    asString: 'DecoratorException [0xf]: A class decorator failed to apply.',
    asValue: 15,
    cause: undefined,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xf?message=A%20class%20decorator%20failed%20to%20apply.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }`,
  }],
  [init2, {
    name: 'DecoratorException',
    message: 'The decorator "model" failed to apply.',
    code: 15,
    asString:
      'DecoratorException [0xf]: The decorator "model" failed to apply.',
    asValue: 15,
    cause: undefined,
    data: init2,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xf?message=The%20decorator%20%22model%22%20failed%20to%20apply.&data=${
        encodeURIComponent(JSON.stringify(init2))
      }`,
  }],
  [init3, {
    name: 'DecoratorException',
    message: 'The class decorator "model" failed to apply.',
    code: 15,
    asString:
      'DecoratorException [0xf]: The class decorator "model" failed to apply.',
    asValue: 15,
    cause: undefined,
    data: init3,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xf?message=The%20class%20decorator%20%22model%22%20failed%20to%20apply.&data=${
        encodeURIComponent(JSON.stringify(init3))
      }`,
  }],
] as const;

const cause0 = new Error('Cannot apply this decorator.');

export const messageCauseFixtures = [
  ['Cannot apply this decorator.', cause0, {
    name: 'DecoratorException',
    message: 'Cannot apply this decorator.',
    code: 15,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xf?message=Cannot%20apply%20this%20decorator.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

export const messageDataFixtures = [
  ['Cannot apply this decorator.', init1, {
    name: 'DecoratorException',
    message: 'Cannot apply this decorator.',
    code: 15,
    cause: undefined,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xf?message=Cannot%20apply%20this%20decorator.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Cannot apply this decorator.', { ...init1, cause: cause0 }, {
    name: 'DecoratorException',
    message: 'Cannot apply this decorator.',
    code: 15,
    cause: cause0,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xf?message=Cannot%20apply%20this%20decorator.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
