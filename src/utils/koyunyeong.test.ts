import { describe, expect, it } from 'vitest';

import { koyunyeong } from './koyunyeong';

describe('koyunyeong', () => {
  it('koyunyeong은 pig를 return해야 한다', () => {
    const result = koyunyeong();

    expect(result).toBe('pig');
  });
});
