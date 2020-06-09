/**
 * Created by Administrator on 2020/6/9.
 */
var fs = require('fs');
exports.renderHtml = function(filename){
  var html = fs.readFileSync(filename).toString();
  return html;
};