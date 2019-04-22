"use strict";

var cov_1523mz691 = function () {
  var path = "/home/pooya/tmp/babel-plugin-istanbul-bug/input.js";
  var hash = "683c5600ce5dbb5f39867cf1a0a72bc3da701c6d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/pooya/tmp/babel-plugin-istanbul-bug/input.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 16
        },
        end: {
          line: 4,
          column: 22
        }
      },
      "1": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 5,
          column: 40
        }
      },
      "2": {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 8,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "test",
        decl: {
          start: {
            line: 3,
            column: 9
          },
          end: {
            line: 3,
            column: 13
          }
        },
        loc: {
          start: {
            line: 3,
            column: 16
          },
          end: {
            line: 6,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "683c5600ce5dbb5f39867cf1a0a72bc3da701c6d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function test() {
  cov_1523mz691.f[0]++;

  const _path = (cov_1523mz691.s[0]++, 'test');

  cov_1523mz691.s[1]++;
  return _path.default.relative(__dirname, _path);
}

cov_1523mz691.s[2]++;
console.log(test());
