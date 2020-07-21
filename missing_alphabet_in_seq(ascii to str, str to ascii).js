function fearNotLetter(str) {
  console.log(str.charCodeAt(0),String.fromCharCode(98))
  var res='';
  for (var i=1;i<str.length;i++){
    let a =str.charCodeAt(i-1);
    let b =str.charCodeAt(i);
    let a_num = String.fromCharCode(a);
    let b_num = String.fromCharCode(b);
    if (b-a==1){
    } 
    else if(b-a==2){
      res = String.fromCharCode(b-1);
      break;
    }else if(b-a==0){
      res = String.fromCharCode(a+1);
      break;
    }
  }
  if (res==""){
    return;
  }
  return res;
}

fearNotLetter("abce");
