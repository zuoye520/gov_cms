/**
 * Created by zhoulijun on 16/8/15.
 */
"use strict";
const fs = require("fs");
const fsCopy = require("./fs-copy.js");
console.log('------------'+ process.env.NODE_ENV)
process.env.NODE_ENV === 'production'
  ? fsCopy.copy("./resource/constants.prod.js","../src/utils/constants.js")
  : fsCopy.copy("./resource/constants.dev.js","../src/utils/constants.js")


