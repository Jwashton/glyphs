const line = function(p1, p2) {
  function length() {
    return p1.distanceTo(p2);
  }

  function slope() {
    return 0;
  }

  return {p1, p2, length, slope};
};

export default line;
