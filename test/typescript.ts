#!/usr/bin/env ts-node
/**
 * https://github.com/tapjs/node-tap/pull/256#issuecomment-302231008
 * Credit: @kenhowardpdx
 */
import * as fs from 'fs';
// declare var __dirname; // not testing

import * as tap from '../';
import { test } from '../';

const mam = function (x: number) {
  if (x > 100) {
    return 'big'
  } else if (x < 0) {
    return 'negative'
  } else if (x % 2 === 0) {
    return 'even'
  } else if (x % 2 === 1) {
    return 'odd'
  }
  throw new Error('not here')
}

tap.pass('this is fine');
tap.pass('this is fine', { skip: true, todo: 'true' });

tap.equal(mam(1), 'odd');
tap.equal(mam(2), 'even');
tap.equal(mam(200), 'big');
tap.equal(mam(-10), 'negative');

test('some async stuff', function (childTest) {
  fs.readdir(__dirname, function (er, files) {
    if (er) {
      throw er // tap will handle this
    }
    childTest.match(files.join(','), /\btest\.js\b/)
    childTest.end()
  });
});

const t = new tap.Test();

t.equal(mam(1), 'odd');
