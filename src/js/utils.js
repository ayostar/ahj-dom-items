function bindToDOM(container) {
  if (!(container instanceof HTMLElement)) {
    throw new Error('Ошибка с DOM, не "HTMLElement"');
  }
}

function getRandomInt(min, max) {
  const min0 = Math.ceil(min);
  const max0 = Math.floor(max);
  return Math.floor(Math.random() * (max0 - min0) + min0);
}

module.exports = {
  getRandomInt,
  bindToDOM,
};
