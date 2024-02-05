/**
 * This file contains test cases, mocks, or other data for testing the
 * MethodException feature.
 *
 * For use in ../method_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['', {
    name: 'MethodException',
    message: 'Unable to locate a method on an object.',
    code: 20,
    asString: 'MethodException [0x14]: Unable to locate a method on an object.',
    asValue: 20,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x14?message=Unable%20to%20locate%20a%20method%20on%20an%20object.`,
  }],
  ['Cannot find method on object.', {
    name: 'MethodException',
    message: 'Cannot find method on object.',
    code: 20,
    asString: 'MethodException [0x14]: Cannot find method on object.',
    asValue: 20,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x14?message=Cannot%20find%20method%20on%20object.`,
  }],
] as const;

const init1 = { methodName: 'quux' } as const;
const init2 = { valueName: 'example' } as const;
const init3 = { validMethods: ['foo', 'bar', 'baz'] };
const init4 = { ...init1, ...init2 } as const;
const init5 = { ...init1, ...init3 } as const;
const init6 = { ...init2, ...init3 } as const;
const init7 = { ...init1, ...init2, ...init3 } as const;
export const initFixtures = [
  [{}, {
    name: 'MethodException',
    message: 'Unable to locate a method on an object.',
    code: 20,
    asString: 'MethodException [0x14]: Unable to locate a method on an object.',
    asValue: 20,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x14?message=Unable%20to%20locate%20a%20method%20on%20an%20object.`,
  }],
  [init1, {
    name: 'MethodException',
    message: 'Unable to locate the method "quux" on an object.',
    code: 20,
    asString:
      'MethodException [0x14]: Unable to locate the method "quux" on an object.',
    asValue: 20,
    cause: undefined,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x14?message=Unable%20to%20locate%20the%20method%20%22quux%22%20on%20an%20object.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }`,
  }],
  [init2, {
    name: 'MethodException',
    message: 'Unable to locate a method on the object "example".',
    code: 20,
    asString:
      'MethodException [0x14]: Unable to locate a method on the object "example".',
    asValue: 20,
    cause: undefined,
    data: init2,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x14?message=Unable%20to%20locate%20a%20method%20on%20the%20object%20%22example%22.&data=${
        encodeURIComponent(JSON.stringify(init2))
      }`,
  }],
  [init3, {
    name: 'MethodException',
    message:
      'Unable to locate a method on an object. Valid methods include: "foo", "bar", "baz".',
    code: 20,
    asString:
      'MethodException [0x14]: Unable to locate a method on an object. Valid methods include: "foo", "bar", "baz".',
    asValue: 20,
    cause: undefined,
    data: init3,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x14?message=Unable%20to%20locate%20a%20method%20on%20an%20object.%20Valid%20methods%20include%3A%20%22foo%22%2C%20%22bar%22%2C%20%22baz%22.&data=${
        encodeURIComponent(JSON.stringify(init3))
      }`,
  }],
  [init4, {
    name: 'MethodException',
    message: 'Unable to locate the method "quux" on the object "example".',
    code: 20,
    asString:
      'MethodException [0x14]: Unable to locate the method "quux" on the object "example".',
    asValue: 20,
    cause: undefined,
    data: init4,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x14?message=Unable%20to%20locate%20the%20method%20%22quux%22%20on%20the%20object%20%22example%22.&data=${
        encodeURIComponent(JSON.stringify(init4))
      }`,
  }],
  [init5, {
    name: 'MethodException',
    message:
      'Unable to locate the method "quux" on an object. Valid methods include: "foo", "bar", "baz".',
    code: 20,
    asString:
      'MethodException [0x14]: Unable to locate the method "quux" on an object. Valid methods include: "foo", "bar", "baz".',
    asValue: 20,
    cause: undefined,
    data: init5,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x14?message=Unable%20to%20locate%20the%20method%20%22quux%22%20on%20an%20object.%20Valid%20methods%20include%3A%20%22foo%22%2C%20%22bar%22%2C%20%22baz%22.&data=${
        encodeURIComponent(JSON.stringify(init5))
      }`,
  }],
  [init6, {
    name: 'MethodException',
    message:
      'Unable to locate a method on the object "example". Valid methods include: "foo", "bar", "baz".',
    code: 20,
    asString:
      'MethodException [0x14]: Unable to locate a method on the object "example". Valid methods include: "foo", "bar", "baz".',
    asValue: 20,
    cause: undefined,
    data: init6,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x14?message=Unable%20to%20locate%20a%20method%20on%20the%20object%20%22example%22.%20Valid%20methods%20include%3A%20%22foo%22%2C%20%22bar%22%2C%20%22baz%22.&data=${
        encodeURIComponent(JSON.stringify(init6))
      }`,
  }],
  [init7, {
    name: 'MethodException',
    message:
      'Unable to locate the method "quux" on the object "example". Valid methods include: "foo", "bar", "baz".',
    code: 20,
    asString:
      'MethodException [0x14]: Unable to locate the method "quux" on the object "example". Valid methods include: "foo", "bar", "baz".',
    asValue: 20,
    cause: undefined,
    data: init7,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x14?message=Unable%20to%20locate%20the%20method%20%22quux%22%20on%20the%20object%20%22example%22.%20Valid%20methods%20include%3A%20%22foo%22%2C%20%22bar%22%2C%20%22baz%22.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }`,
  }],
] as const;

const cause0 = new Error('Method "test" not found.');

export const messageCauseFixtures = [
  ['Method "test" not found.', cause0, {
    name: 'MethodException',
    message: 'Method "test" not found.',
    code: 20,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x14?message=Method%20%22test%22%20not%20found.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

export const messageDataFixtures = [
  ['Method "test" not found.', init7, {
    name: 'MethodException',
    message: 'Method "test" not found.',
    code: 20,
    cause: undefined,
    data: init7,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x14?message=Method%20%22test%22%20not%20found.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Method "test" not found.', { ...init7, cause: cause0 }, {
    name: 'MethodException',
    message: 'Method "test" not found.',
    code: 20,
    cause: cause0,
    data: init7,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x14?message=Method%20%22test%22%20not%20found.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
