function search(){
var input,filter,ul,li,a,i,txtvalue;
input=document.getElementById("myinput");
filter=input.value.toUppercase ();
ul=document.getElementById("mylist");
li=ul.getElementsByTagName("li");
for(i=0; i<li.length; i++){
    a=li[i];
    textValue=a.textContent;
    if(txtvalue.toUppercase().indexOf(filter)>-1){
        li[i].style.display="block";
        }else{
            li[i].style.display="none";
        }
    }
}

