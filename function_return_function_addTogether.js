function addTogether() {
  if (arguments.length==2){
    if (Number.isInteger(arguments[0])&&Number.isInteger(arguments[1])){
      return(arguments[0]+arguments[1]);
    }
    else{
      return;
    }
  }else{
    var c= arguments[0];
      if (Number.isInteger(c)){
        return function(e){
          if (Number.isInteger(e)){
            return(e+c);
          }
          else{
            return;
          }
        }
      }
  }
}

console.log((addTogether(23))(23));
