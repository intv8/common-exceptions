/**
 * This file contains tests for the ArgumentIndexException feature.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import {
  assert,
  assertEquals,
  assertThrows,
  describe,
  it,
} from '../dev_deps.ts';

import {
  ArgumentIndexException,
  Exception,
  InvalidException,
  ValueException,
} from '../mod.ts';

import {
  initFixtures,
  messageCauseFixtures,
  messageDataCauseFixtures,
  messageDataFixtures,
  messageFixtures,
} from './fixtures/argument_index_exception.fixtures.ts';

describe('ArgumentIndexException', () => {
  describe('inheritance', () => {
    const instance = new ArgumentIndexException('');

    it('should extend Error', () => {
      assert(instance instanceof Error);
    });

    it('should extend Exception', () => {
      assert(instance instanceof Exception);
    });

    it('should extend InvalidException', () => {
      assert(instance instanceof InvalidException);
    });

    it('should extend ValueException', () => {
      assert(instance instanceof ValueException);
    });

    it('should extend ArgumentIndexException', () => {
      assert(instance instanceof ArgumentIndexException);
    });
  });

  describe('(init) bad upperBound', () => {
    it('should throw a ValueException if upperBound is less than or equal to 0', () => {
      const upperBound = -1;

      assertThrows(
        () => {
          new ArgumentIndexException({ upperBound });
        },
        ValueException,
      );
    });
  });

  describe('(message)', () => {
    it('should create an ArgumentIndexException with the provided message', () => {
      messageFixtures.forEach(([message, expected]) => {
        const ex = new ArgumentIndexException(message);

        assert(ex instanceof ArgumentIndexException);
        assertEquals(ex.name, expected.name);
        assertEquals(`${ex}`, expected.asString);
        assertEquals(+ex, expected.asValue);
        assertEquals(ex.message, expected.message);
        assertEquals(ex.code, expected.code);
        assertEquals(ex.cause, expected.cause);
        assertEquals(ex.data, expected.data);
        assertEquals(ex.helpUrl, expected.helpUrl);
      });
    });
  });

  describe('(message, {cause})', () => {
    it('should create an ArgumentIndexException with the provided message and cause', () => {
      messageCauseFixtures.forEach(([message, cause, expected]) => {
        const ex = new ArgumentIndexException(message, { cause });

        assert(ex instanceof ArgumentIndexException);
        assertEquals(ex.name, expected.name);
        assertEquals(ex.message, expected.message);
        assertEquals(ex.code, expected.code);
        assertEquals(ex.cause, expected.cause);
        assertEquals(ex.data, expected.data);
        assertEquals(ex.helpUrl, expected.helpUrl);
      });
    });
  });

  describe('(message, data)', () => {
    it('should create an ArgumentIndexException with the provided message and data', () => {
      messageDataFixtures.forEach(([message, data, expected]) => {
        const ex = new ArgumentIndexException(message, data);

        assert(ex instanceof ArgumentIndexException);
        assertEquals(ex.name, expected.name);
        assertEquals(ex.message, expected.message);
        assertEquals(ex.code, expected.code);
        assertEquals(ex.cause, expected.cause);
        assertEquals(ex.data, expected.data);
        assertEquals(ex.helpUrl, expected.helpUrl);
      });
    });
  });

  describe('(message, {cause, ...data})', () => {
    it('should create an ArgumentIndexException with the provided message, data, and cause', () => {
      messageDataCauseFixtures.forEach(([message, data, expected]) => {
        const ex = new ArgumentIndexException(message, data);

        assert(ex instanceof ArgumentIndexException);
        assertEquals(ex.name, expected.name);
        assertEquals(ex.message, expected.message);
        assertEquals(ex.code, expected.code);
        assertEquals(ex.cause, expected.cause);
        assertEquals(ex.data, expected.data);
        assertEquals(ex.helpUrl, expected.helpUrl);
      });
    });
  });

  describe('(init)', () => {
    it('should create an ArgumentIndexException with the provided init', () => {
      initFixtures.forEach(([init, expected]) => {
        const ex = new ArgumentIndexException(init);

        assert(ex instanceof ArgumentIndexException);
        assertEquals(ex.name, expected.name);
        assertEquals(`${ex}`, expected.asString);
        assertEquals(+ex, expected.asValue);
        assertEquals(ex.message, expected.message);
        assertEquals(ex.code, expected.code);
        assertEquals(ex.cause, expected.cause);
        assertEquals(ex.data, expected.data);
        assertEquals(ex.helpUrl, expected.helpUrl);
      });
    });
  });
});
