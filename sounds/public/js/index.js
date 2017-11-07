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
