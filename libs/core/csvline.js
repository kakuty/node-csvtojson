var getEol=require("./getEol");
var getDelimiter=require("./getDelimiter");
var toLines=require("./fileline");
var rowSplit=require("./rowSplit");
/**
 * Convert lines to csv columns
 * @param  {[type]} lines [file lines]
 * @param  {[type]} param [Converter param]
 * @return {[type]}  {lines:[[col1,col2,col3...]],partial:String}
 */
module.exports=function(lines,param){
  var csvLines=[];
  var left="";
  while (lines.length){
    var line=left+lines.shift();
    var row=rowSplit(line,param);
    if (row.closed){
      csvLines.push(row.cols);
      left="";
    }else{
      left=line+getEol(line,param);
    }
  }
  return {lines:csvLines,partial:left};
}
