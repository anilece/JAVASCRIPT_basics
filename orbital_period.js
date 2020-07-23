function orbitalPeriod(arr) {
  //2 pi sqrt (r3/gm)
  var res=[];
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for (let i=0;i<arr.length;i++)
  {
  var r = earthRadius + arr[i].avgAlt;
  var p = 2*Math.PI;
  var a = Math.pow((Math.pow(r,3)/GM),0.5);
  var re = Math.round(p*a,10);
  res.push({name:arr[i].name,orbitalPeriod:re});
  }
  return res;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
