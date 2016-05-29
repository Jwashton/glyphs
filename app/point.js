const point = function(x, y) {
  function distanceTo(target) {
    const dx = target.x - x;
    const dy = target.y - y;
    const px = Math.pow(dx, 2);
    const py = Math.pow(dy, 2);
    return Math.sqrt(px + py);
  }

  return { x, y, distanceTo };
};

export default point;
