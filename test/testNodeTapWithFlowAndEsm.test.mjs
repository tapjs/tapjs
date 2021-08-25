// @flow

import t from 'tap';
import * as copypasta from './facebook.packages.flow.flowremovetypes.source.js';

t.test('testing tap with flow and esm as specified by docs', t => {
  t.test('copypasta from facebook/packages/source.js test fixture', t => {
    t.ok(copypasta, 'can import copypasta');

    const testDescription: string = 'can use types in tap test';
    t.ok(copypasta, testDescription)
    
    t.end();
  });
});