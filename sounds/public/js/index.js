console.log('Hello world');


function change(){
tiny.classList.remove('signUp')
tiny.classList.add('signUpVisible')
console.log(tiny.classList)

}

change()
console.log(tiny.classList)

console.log("hi")
$(document).ready(function () {
    //Disable cut copy paste
    $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    });

    //Disable mouse right click
    $("body").on("contextmenu",function(e){
        return false;
    });
});

function loadJS(){
  console.log("please")
  if (toggleHide2.classList.contains('width2')){
  toggleHide2.classList.remove('width2')
  toggleHide2.classList.add('width')
}
if (toggleHide3.classList.contains('width2')){
toggleHide3.classList.remove('width2')
toggleHide3.classList.add('width')
}
if (toggleHide.classList.contains('width')){
toggleHide.classList.remove('width')
toggleHide.classList.add('width2')
}

}

function loadJSMap(){
  console.log("please")
  if (toggleHide.classList.contains('width2')){
  toggleHide.classList.remove('width2')
  toggleHide.classList.add('width')
}
if (toggleHide3.classList.contains('width2')){
toggleHide3.classList.remove('width2')
toggleHide3.classList.add('width')
}
if (toggleHide2.classList.contains('width')){
toggleHide2.classList.remove('width')
toggleHide2.classList.add('width2')
}

}

function loadJSMusic(){
  if (toggleHide.classList.contains('width2')){
  toggleHide.classList.remove('width2')
  toggleHide.classList.add('width')
}
if (toggleHide2.classList.contains('width2')){
toggleHide2.classList.remove('width2')
toggleHide2.classList.add('width')
}
if (toggleHide3.classList.contains('width')){
toggleHide3.classList.remove('width')
toggleHide3.classList.add('width2')
}

}
