export const line = function(p1, p2) {
  const newLine = { p1, p2 };

  const methods = {
    length() {
      return p1.distanceTo(p2);
    },

    slope() {
      return (p2.y - p1.y) / (p2.x - p1.x);
    },

    perpendicularSlope() {
      return Math.abs(-1 / this.slope());
    }
  }

  return Object.assign(newLine, methods);
};

export const findIntercept = function(m, p) {

};
