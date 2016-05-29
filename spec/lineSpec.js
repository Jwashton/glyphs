import line from '../app/line';
import point from '../app/point';

describe('line', function() {
  let p1, p2, p3, p4, p5, horizontalLine, slantedLine, verticalLine, hypotenuse;

  beforeEach(function() {
    p1 = point(2, 2);
    p2 = point(5, 2);
    p3 = point(5, 6);
    p4 = point(4, 6);
    p5 = point(2, 5);

    horizontalLine = line(p1, p2);
    hypotenuse     = line(p1, p3);
    slantedLine    = line(p1, p4);
    verticalLine   = line(p1, p5);
  });
  
  it('takes two points', function() {
    expect(horizontalLine.p1).toBe(p1);
  });

  describe('#length', function() {
    it('provides the distance between p1 and p2', function() {
      expect(horizontalLine.length()).toBe(3);
    });
  });

  describe('#slope', function() {
    it('is 0 for a horizontal line', function() {
      expect(horizontalLine.slope()).toBe(0);
    });

    it('is defined for a slanted line', function() {
      expect(slantedLine.slope()).toBe(2);
    });

    it('is infinite for a vertical line', function() {
      expect(verticalLine.slope()).toBe(Infinity);
    });
  });
});
