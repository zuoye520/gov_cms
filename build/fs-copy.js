/**
 * Created by zhoulijun on 16/3/25.
 */
"use strict"

module.exports.copy = function(source,target){
    var fs = require('fs');
    var path = require('path');
    var sourceFile = path.join(__dirname, source);
    var destPath = path.join(__dirname, target);
    var readStream = fs.createReadStream(sourceFile);
    var writeStream = fs.createWriteStream(destPath);
    readStream.pipe(writeStream);
    console.log("copy " + sourceFile + " to " + destPath + "成功");
}
