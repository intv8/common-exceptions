/**
 * This file contains tests for the RecursionException feature.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assert, assertEquals, describe, it } from '../dev_deps.ts';

import {
  AbortedException,
  Exception,
  InterruptException,
  OSException,
  RecursionException,
} from '../mod.ts';

import {
  initFixtures,
  messageCauseFixtures,
  messageDataCauseFixtures,
  messageDataFixtures,
  messageFixtures,
} from './fixtures/recursion_exception.fixtures.ts';

describe('RecursionException', () => {
  describe('inheritance', () => {
    const instance = new RecursionException('');

    it('should extend Error', () => {
      assert(instance instanceof Error);
    });

    it('should extend Exception', () => {
      assert(instance instanceof Exception);
    });

    it('should extend OSException', () => {
      assert(instance instanceof OSException);
    });

    it('should extend InterruptException', () => {
      assert(instance instanceof InterruptException);
    });

    it('should extend AbortedException', () => {
      assert(instance instanceof AbortedException);
    });
  });

  describe('(message)', () => {
    it('should create an RecursionException with the provided message', () => {
      messageFixtures.forEach(([message, expected]) => {
        const ex = new RecursionException(message);

        assert(ex instanceof RecursionException);
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
    it('should create an RecursionException with the provided message and cause', () => {
      messageCauseFixtures.forEach(([message, cause, expected]) => {
        const ex = new RecursionException(message, { cause });

        assert(ex instanceof RecursionException);
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
    it('should create an RecursionException with the provided message and data', () => {
      messageDataFixtures.forEach(([message, data, expected]) => {
        const ex = new RecursionException(message, data);

        assert(ex instanceof RecursionException);
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
    it('should create an RecursionException with the provided message, data, and cause', () => {
      messageDataCauseFixtures.forEach(([message, data, expected]) => {
        const ex = new RecursionException(message, data);

        assert(ex instanceof RecursionException);
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
    it('should create an RecursionException with the provided init', () => {
      initFixtures.forEach(([init, expected]) => {
        const ex = new RecursionException(init);

        assert(ex instanceof RecursionException);
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
