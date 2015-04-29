(function(){

    function FindOnPage() {
        var error = document.querySelector('#error');
        var obj = document.querySelector('#text-to-find');
        var content = document.querySelector('#content');
        var textToFind;
        var value = content.innerHTML;

        if (obj) {
            textToFind = obj.value.trim();
        }

        if (textToFind == "") {
            error.innerText = 'Nothing has been found, check your input'
        }

        content.innerHTML = content.innerHTML.replace(eval("/" + textToFind + "/gi"), "<span name=" + textToFind + " style='background:#f4e600; font-size:15px'>" + textToFind + "</span>");
        if(value == content.innerHTML) {
            error.innerText = 'Introduced the phrase is not found';
            content.innerHTML = value;
        }


    }
    document.getElementById('search').addEventListener( "click", FindOnPage);


})();
