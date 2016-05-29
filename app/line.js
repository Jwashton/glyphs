const line = function(p1, p2) {
  const newLine = { p1, p2 };

  const methods = {
    length() {
      return p1.distanceTo(p2);
    },

    slope() {
      return (p2.y - p1.y) / (p2.x - p1.x);
    }
  }

  return Object.assign(newLine, methods);
};

export default line;
