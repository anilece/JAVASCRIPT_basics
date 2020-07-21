function destroyer(arr) {
  var arg = [...arguments];
  var data = arg[0];
  var dest = arg.splice(1);
  var res=[];
  data.forEach((e)=>{
    if(!dest.includes(e)){
    res.push(e);
    }
  })
  return(res)
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
=============================================================
function whatIsInAName(collection, source) {
  var arr = [];
  var arg = [...arguments];
  var keys = Object.keys(arg[1]);
  var data = arg[0];
  var find = arg[1];
  for (var d of data){
    let bool= keys.every((k)=>(d[k]===find[k]))
    if (bool){
      arr.push(d);
    }
  }  
  console.log(arr)
  return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
