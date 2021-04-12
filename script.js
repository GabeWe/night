var list=[];

function validate(){
  var messEle=document.body.querySelector(".valMess");
  var username=document.body.querySelector(".username").value;
   var password=document.body.querySelector(".password").value;
  
  if(username==="coolStudent123"&&password==="coolStudent123"){
    messEle.innerHTML="Submitted!"

  }else{
    messEle.innerHTML="Incorrect Username or Password"
  }

}

document.body.querySelector(".validate").addEventListener("click", function(){
  validate();
})
document.body.querySelector(".validate").addEventListener("click", function(){
  validate();
})
function renderItems(){
  document.body.querySelector(".display").innerHTML="";
  for(var i=0; i<list.length; i++){
    var ele =document.createElement("div");
    ele.innerHTML=list[i];
    document.body.querySelector(".display").appendChild(ele);
  }
}

function submit(){
  var text=document.body.querySelector(".text").value;
  if(text.length!==0){
    document.body.querySelector(".subMess").innerHTML="";
     list.push(text);
  }else{
    document.body.querySelector(".subMess").innerHTML="Not enough letters"
  }
 
  renderItems();
}

document.body.querySelector(".submit").addEventListener("click", function(){
  submit();
})

renderItems();

var nav =document.body.querySelector(".nav");
var display =document.body.querySelector(".display");

var pages = [
  {
    name:"Home",
    content:"Stuff I wanna see"
  },
  {
    name:"About",
    content:"About me"
  },
  {
    name:"View",
    content:""
  }
]



for(var i=0; i<pages.length; i++){
  createPage(pages[i]);
}

function createPage(pg){
  var button =document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
  })
  button.innerHTML=pg.name;
  nav.appendChild(button);
}

function contentWrite(wd,pg){
  display.innerHTML="";
  if(pg!=="View"){
    display.innerHTML=wd;
  }else{
    contactPage()
  }
  
}
  
function contactPage(){
  var header = document.createElement("h1");
    header.innerHTML="";
    display.appendChild(header);

}
contentWrite(pages[0].content, "Home");