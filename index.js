module.exports = function (target, type, listener, useCapture) {
  target.addEventListener(type, function onceHandler (e) {
    target.removeEventListener(type, onceHandler)
    listener.apply(this, arguments)
  }, useCapture)
}
