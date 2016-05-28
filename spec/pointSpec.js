import point from '../app/point';

describe('point', function() {
  it('takes x and y coordinates', function() {
    const p = point(2, 6);
    expect(p.x).toBe(2);
  });
});
