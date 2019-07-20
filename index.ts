const vm = require("vm");

const sampleCtx = {
  require,
  setTimeout,
  setInterval,
  setImmediate,
  clearTimeout,
  clearInterval,
  clearImmediate,
  process,
  Buffer,
  console
};

vm.createContext(sampleCtx);
vm.runInContext("const hoge = 10;", sampleCtx);
vm.runInContext("console.log(hoge);", sampleCtx);
