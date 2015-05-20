(function(){

    var base = ['argentina','australia','austria','azerbaijan','belgium','brazil',
        'bulgaria','canada','china','costa rica','denmark','estonia','france','germany','greece',
        'india','italy','japan','kazakhstan','kosovo','mexico','new zealand','nigeria','norway',
        'peru','philippines','russia','spain','swaziland','sweden','tanzania','turkey','ukraine',
        'vietnam'];

    var seach = document.querySelector('#seach');
    var list = document.querySelector('#list');
    var autocomplete = document.querySelector('#autocomplete');
    seach.oninput = function() {
        if((seach.value.length)>1){
            autocomplete.style.display= "block";
            var str = seach.value.toLowerCase();
            for (var i= 0;  i<base.length; i++) {
                if (base[i].indexOf(str) > -1) {

                    var newLi = document.createElement('li');
                    newLi.innerHTML = base[i];
                    list.appendChild(newLi);
                }
            }

        }

    };



    document.getElementById('seach').onkeydown = function(e) {
        var option = document.querySelector('#list li');
        if (autocomplete.style.display == "block"){
            switch (e.keyCode){
                case 40: {
                    option.style.color="black";
                    var line = document.querySelector('#list li:first-child');
                    line.style.color="red";
                    seach.value= line.textContent;
                    break;
                }
                case 38:{
                    option.style.color="black";
                    var line = document.querySelector('#list li:last-child');
                    line.style.color="red";
                    seach.value= line.textContent;
                    break;

                }
                case 27:{
                    option.style.color="black";
                    seach.value= "";
                    autocomplete.style.display= "none";
                    break;

                }

            }
        }
    }
})();