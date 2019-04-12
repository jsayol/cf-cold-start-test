const funcName = process.env.FUNCTION_NAME;

if (!funcName || funcName === 'funcA') {
  exports.funcA = require('./funcA');
}

if (!funcName || funcName === 'funcB') {
  exports.funcB = require('./funcB');
}
