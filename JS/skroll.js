// loader
var loade = document.getElementById("loader");

        window.addEventListener("load", function(){
            loader.style.display = "none";
        })
// scroll
$('.btn').on('click', function(event) {
        if(this.hash !== '' ){
            event.preventDefault();
            const hash = this.hash;
            $('html, body'). animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800
            );
        }
    });