// 日期函数
function utilsDate(time) {
  var d = new Date(time);
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var day = d.getDate();

  return year + '-' + month + '-' + day;
}
