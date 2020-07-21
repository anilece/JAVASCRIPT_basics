function translatePigLatin(str) {
  let res=[];
  var bool= vowel(str[0]);
  function vowel(a){
    return(['a','e','i','o','u'].includes(a));
    }
  for (var a=0;a<str.length;a++){
    if (!vowel(str[a])){
      res.push(str[a]);
    }
    else{
      var r =str.slice(a);
      res.unshift(r);
      break
    }
  }
  res =res.join('');
  if (bool){
    return(res+"way");
  }else{
  return(res+"ay") 
  }
}

console.log(translatePigLatin("algi"));
