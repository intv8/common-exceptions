/**
 * This file contains test cases, mocks, or other data for testing the
 * KeyException feature.
 *
 * For use in ../key_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['', {
    name: 'KeyException',
    message: 'Unable to locate a property key on an object or record.',
    code: 19,
    asString:
      'KeyException [0x13]: Unable to locate a property key on an object or record.',
    asValue: 19,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x13?message=Unable%20to%20locate%20a%20property%20key%20on%20an%20object%20or%20record.`,
  }],
  ['Cannot find key on record.', {
    name: 'KeyException',
    message: 'Cannot find key on record.',
    code: 19,
    asString: 'KeyException [0x13]: Cannot find key on record.',
    asValue: 19,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x13?message=Cannot%20find%20key%20on%20record.`,
  }],
] as const;

const init1 = { key: 'quux' } as const;
const init2 = { valueName: 'example' } as const;
const init3 = { validKeys: ['foo', 'bar', 'baz'] };
const init4 = { ...init1, ...init2 } as const;
const init5 = { ...init1, ...init3 } as const;
const init6 = { ...init2, ...init3 } as const;
const init7 = { ...init1, ...init2, ...init3 } as const;
export const initFixtures = [
  [{}, {
    name: 'KeyException',
    message: 'Unable to locate a property key on an object or record.',
    code: 19,
    asString:
      'KeyException [0x13]: Unable to locate a property key on an object or record.',
    asValue: 19,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x13?message=Unable%20to%20locate%20a%20property%20key%20on%20an%20object%20or%20record.`,
  }],
  [init1, {
    name: 'KeyException',
    message: 'Unable to locate the property key "quux" on an object or record.',
    code: 19,
    asString:
      'KeyException [0x13]: Unable to locate the property key "quux" on an object or record.',
    asValue: 19,
    cause: undefined,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x13?message=Unable%20to%20locate%20the%20property%20key%20%22quux%22%20on%20an%20object%20or%20record.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }`,
  }],
  [init2, {
    name: 'KeyException',
    message:
      'Unable to locate a property key on the object or record "example".',
    code: 19,
    asString:
      'KeyException [0x13]: Unable to locate a property key on the object or record "example".',
    asValue: 19,
    cause: undefined,
    data: init2,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x13?message=Unable%20to%20locate%20a%20property%20key%20on%20the%20object%20or%20record%20%22example%22.&data=${
        encodeURIComponent(JSON.stringify(init2))
      }`,
  }],
  [init3, {
    name: 'KeyException',
    message:
      'Unable to locate a property key on an object or record. Valid property keys include: "foo", "bar", "baz".',
    code: 19,
    asString:
      'KeyException [0x13]: Unable to locate a property key on an object or record. Valid property keys include: "foo", "bar", "baz".',
    asValue: 19,
    cause: undefined,
    data: init3,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x13?message=Unable%20to%20locate%20a%20property%20key%20on%20an%20object%20or%20record.%20Valid%20property%20keys%20include%3A%20%22foo%22%2C%20%22bar%22%2C%20%22baz%22.&data=${
        encodeURIComponent(JSON.stringify(init3))
      }`,
  }],
  [init4, {
    name: 'KeyException',
    message:
      'Unable to locate the property key "quux" on the object or record "example".',
    code: 19,
    asString:
      'KeyException [0x13]: Unable to locate the property key "quux" on the object or record "example".',
    asValue: 19,
    cause: undefined,
    data: init4,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x13?message=Unable%20to%20locate%20the%20property%20key%20%22quux%22%20on%20the%20object%20or%20record%20%22example%22.&data=${
        encodeURIComponent(JSON.stringify(init4))
      }`,
  }],
  [init5, {
    name: 'KeyException',
    message:
      'Unable to locate the property key "quux" on an object or record. Valid property keys include: "foo", "bar", "baz".',
    code: 19,
    asString:
      'KeyException [0x13]: Unable to locate the property key "quux" on an object or record. Valid property keys include: "foo", "bar", "baz".',
    asValue: 19,
    cause: undefined,
    data: init5,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x13?message=Unable%20to%20locate%20the%20property%20key%20%22quux%22%20on%20an%20object%20or%20record.%20Valid%20property%20keys%20include%3A%20%22foo%22%2C%20%22bar%22%2C%20%22baz%22.&data=${
        encodeURIComponent(JSON.stringify(init5))
      }`,
  }],
  [init6, {
    name: 'KeyException',
    message:
      'Unable to locate a property key on the object or record "example". Valid property keys include: "foo", "bar", "baz".',
    code: 19,
    asString:
      'KeyException [0x13]: Unable to locate a property key on the object or record "example". Valid property keys include: "foo", "bar", "baz".',
    asValue: 19,
    cause: undefined,
    data: init6,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x13?message=Unable%20to%20locate%20a%20property%20key%20on%20the%20object%20or%20record%20%22example%22.%20Valid%20property%20keys%20include%3A%20%22foo%22%2C%20%22bar%22%2C%20%22baz%22.&data=${
        encodeURIComponent(JSON.stringify(init6))
      }`,
  }],
  [init7, {
    name: 'KeyException',
    message:
      'Unable to locate the property key "quux" on the object or record "example". Valid property keys include: "foo", "bar", "baz".',
    code: 19,
    asString:
      'KeyException [0x13]: Unable to locate the property key "quux" on the object or record "example". Valid property keys include: "foo", "bar", "baz".',
    asValue: 19,
    cause: undefined,
    data: init7,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x13?message=Unable%20to%20locate%20the%20property%20key%20%22quux%22%20on%20the%20object%20or%20record%20%22example%22.%20Valid%20property%20keys%20include%3A%20%22foo%22%2C%20%22bar%22%2C%20%22baz%22.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }`,
  }],
] as const;

const cause0 = new Error('Property "test" not found.');

export const messageCauseFixtures = [
  ['Property "test" not found.', cause0, {
    name: 'KeyException',
    message: 'Property "test" not found.',
    code: 19,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x13?message=Property%20%22test%22%20not%20found.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

export const messageDataFixtures = [
  ['Property "test" not found.', init7, {
    name: 'KeyException',
    message: 'Property "test" not found.',
    code: 19,
    cause: undefined,
    data: init7,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x13?message=Property%20%22test%22%20not%20found.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Property "test" not found.', { ...init7, cause: cause0 }, {
    name: 'KeyException',
    message: 'Property "test" not found.',
    code: 19,
    cause: cause0,
    data: init7,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x13?message=Property%20%22test%22%20not%20found.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
