function kiemTraMaSv(id,dssv){
    var viTri = dssv.findIndex(function(item){
        return item.ma == id ;
      })
      if(viTri != -1 ){
        document.getElementById("spanMaSV").innerText="tk da co user"
        return false;
      }
      else{
        document.getElementById("spanMaSV").innerText=""
        return true;
      }
}
function kiemTraDoDai(value , idErr , min, max){
    var length = value.length;
    if(min<=length && length <= max){
        document.getElementById(idErr).innerText=""
        return true;
    }
    else{
        document.getElementById(idErr).innerText=`do dai  phai tu ${min} den ${max}`
        return false;
    }
}
function kiemEmail(email){
  const re =
/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
if(re.test(email)){
  document.getElementById("spanEmailSV").innerText="";
  return true
}
document.getElementById("spanEmailSV").innerText="email ko hop le";
return false;
}