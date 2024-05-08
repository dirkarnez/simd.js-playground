var SIMD = require("simd")
var a = SIMD.Float32x4(1.0, 2.0, 3.0, 4.0);
var b = SIMD.Float32x4(5.0, 6.0, 7.0, 8.0);
var c = SIMD.Float32x4.add(a,b);
console.log(c);
