/**
 * This file contains tests for the RangeException feature.
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
} from './fixtures/range_exception.fixtures.ts';

describe('RangeException', () => {
  describe('inheritance', () => {
    const instance = new RangeException('');

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
  });

  describe('(init) bad lowerBound/upperBound', () => {
    it('should throw a ValueException if lowerBound is greater than upperBound', () => {
      const lowerBound = 10;
      const upperBound = 1;

      assertThrows(
        () => {
          new RangeException({ lowerBound, upperBound });
        },
        ValueException,
      );
    });
  });

  describe('(message)', () => {
    it('should create an RangeException with the provided message', () => {
      messageFixtures.forEach(([message, expected]) => {
        const ex = new RangeException(message);

        assert(ex instanceof RangeException);
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
    it('should create an RangeException with the provided message and cause', () => {
      messageCauseFixtures.forEach(([message, cause, expected]) => {
        const ex = new RangeException(message, { cause });

        assert(ex instanceof RangeException);
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
    it('should create an RangeException with the provided message and data', () => {
      messageDataFixtures.forEach(([message, data, expected]) => {
        const ex = new RangeException(message, data);

        assert(ex instanceof RangeException);
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
    it('should create an RangeException with the provided message, data, and cause', () => {
      messageDataCauseFixtures.forEach(([message, data, expected]) => {
        const ex = new RangeException(message, data);

        assert(ex instanceof RangeException);
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
    it('should create an RangeException with the provided init', () => {
      initFixtures.forEach(([init, expected]) => {
        const ex = new RangeException(init);

        assert(ex instanceof RangeException);
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
