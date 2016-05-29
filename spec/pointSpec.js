import point from '../app/point';

describe('point', function() {
  it('takes x and y coordinates', function() {
    const p = point(2, 6);
    expect(p.x).toBe(2);
  });

  describe('#distanceTo', function() {
    let p1, p2, p3;

    beforeEach(function() {
      p1 = point(2, 6);
      p2 = point(4, 6);
      p3 = point(5, 2);
    });

    it('finds the distance between two level points', function() {
      expect(p1.distanceTo(p2)).toBe(2);
    });

    it('returns a positive value even when points are switched', function() {
      expect(p2.distanceTo(p1)).toBe(2);
    });

    it('finds the distance between two uneven points', function() {
      expect(p1.distanceTo(p3)).toBe(5);
    });
  });
});
