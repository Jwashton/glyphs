import line from '../app/line';
import point from '../app/point';

describe('line', function() {
  it('takes two points', function() {
    const p1 = point(2, 2);
    const p2 = point(5, 2);

    const l = line(p1, p2);

    expect(l.p1).toBe(p1);
  });

  describe('length', function() {
    it('provides the distance between p1 and p2', function() {
      const p1 = point(2, 2);
      const p2 = point(5, 2);

      const l = line(p1, p2);
      expect(l.length()).toBe(3);
    });
  });

  describe('slope', function() {
    it('provides the slope of a horizontal line', function() {
      const p1 = point(2, 2);
      const p2 = point(5, 2);

      const l = line(p1, p2);
      expect(l.slope()).toBe(0);
    });
  });
});
