(function (E) {
  if (!E.off) E.off = E.removeListener;
}(require('events').EventEmitter.prototype));
