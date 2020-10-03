function insert(num) {
    document.forms.textview.value= document.forms.textview.value+num
}
function equal() {
   var abc = document.forms.textview.value;
   if (abc) {
    document.forms.textview.value=eval(abc)
   }
}
function clean() {
    document.forms.textview.value=" "
}
function back() {
    var xyz = document.forms.textview.value
    document.forms.textview.value = xyz.substring(0,xyz.lenght-1); 
}