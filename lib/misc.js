ref = function(obj, str) {
  str = str.split(".");
  for (var i = 0; i < str.length; i++)
    obj = obj[str[i]];
  return obj;
};
set = function(obj, str, val) {
  str = str.split(".");
  while (str.length > 1)
    obj = obj[str.shift()];
  return obj[str.shift()] = val;
};
makeDate = function(obj, str){
  var ms = ref(obj, str) * 1000;
  var date = (ms > 0) ? new Date(ms) : null;
  set(obj, str, date);
};
