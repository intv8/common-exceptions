/**
 * This file contains tests for the IndexException feature.
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
  Exception,
  IndexException,
  InvalidException,
  RangeException,
  ValueException,
} from '../mod.ts';

import {
  initFixtures,
  messageCauseFixtures,
  messageDataCauseFixtures,
  messageDataFixtures,
  messageFixtures,
} from './fixtures/index_exception.fixtures.ts';

describe('IndexException', () => {
  describe('inheritance', () => {
    const instance = new IndexException('');

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

    it('should extend RangeException', () => {
      assert(instance instanceof RangeException);
    });
  });

  describe('(init) bad upperBound', () => {
    it('should throw a ValueException if upperBound is less than or equal to 0', () => {
      const upperBound = -1;

      assertThrows(
        () => {
          new IndexException({ upperBound });
        },
        ValueException,
      );
    });
  });

  describe('(message)', () => {
    it('should create an IndexException with the provided message', () => {
      messageFixtures.forEach(([message, expected]) => {
        const ex = new IndexException(message);

        assert(ex instanceof IndexException);
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
    it('should create an IndexException with the provided message and cause', () => {
      messageCauseFixtures.forEach(([message, cause, expected]) => {
        const ex = new IndexException(message, { cause });

        assert(ex instanceof IndexException);
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
    it('should create an IndexException with the provided message and data', () => {
      messageDataFixtures.forEach(([message, data, expected]) => {
        const ex = new IndexException(message, data);

        assert(ex instanceof IndexException);
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
    it('should create an IndexException with the provided message, data, and cause', () => {
      messageDataCauseFixtures.forEach(([message, data, expected]) => {
        const ex = new IndexException(message, data);

        assert(ex instanceof IndexException);
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
    it('should create an IndexException with the provided init', () => {
      initFixtures.forEach(([init, expected]) => {
        const ex = new IndexException(init);

        assert(ex instanceof IndexException);
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
