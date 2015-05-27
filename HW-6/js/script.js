(function(){

    var base = ['Armenia','Argentina','Australia','Austria','Azerbaijan','Bangladesh','Belgium','Brazil',
        'Bulgaria','Canada','China','Costa Rica','Czech','Denmark','Estonia','France','Germany','Greece',
        'India','Italy','Japan','Jordan','Kazakhstan','Kosovo','Mexico','New Zealand','Nigeria','Norway',
        'Peru','Philippines','Poland','Portugal','Russia','Spain','Swaziland','Sweden','Tanzania',
        'Turkey','Ukraine','United Kingdom','Vietnam'];

    var search = document.querySelector('#search');
    var list = document.querySelector('#autocomplete li');
    var autocomplete = document.querySelector('#autocomplete');
    var feedback = document.querySelector('.feedback span');
    var arr, str,counter=0,line;



    /**
     * Function autocomplete
     */

    search.oninput = function() {
        if((search.value.length)>1){
            str = search.value.toLowerCase();

            arr = [];
            autocomplete.style.display= "block";
            feedback.innerHTML=str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
            for (var i= 0;  i<base.length; i++) {
                var temp = base[i].toLowerCase();
                var data_id = i;
                if (temp.indexOf(str) > -1) {
                    arr.push(base[i]);
                }
            }
            // autocomplete.innerHTML= "<li>" +arr +"</li>";
            for (var i in arr) {
                if (!arr.hasOwnProperty(i)) continue;
                var str1 = '';
                for (var j in arr) str1 += ('<li>' + arr[j] +'</li>');
                autocomplete.innerHTML=str1;
            }
        }else  clean();


        return arr, str;


    };


    /* пишет ошибку Cannot read property 'addEventListener' of null

     list.addEventListener("click", function(){
     feedback.innerHTML=list.textContent;
     });*/


    /**
     * Function keyboard control
     */
    function after(){
        line = arr[counter];
        search.value= line;
        counter++;
        feedback.innerHTML=line;
    }


    function before(){
        line = arr[counter];
        search.value= line;
        counter--;
        feedback.innerHTML=line;
    }
    search.onkeydown = function(e) {
        if (autocomplete.style.display == "block"){
            switch (e.keyCode){
                case 27:
                case 13:{
                    search.value= "";
                    clean();
                    break;

                }
                case 35:{
                    line = arr[arr.length-1];
                    search.value= line;
                    feedback.innerHTML=line;
                    break;
                }
                case 36:{
                    line = arr[0];
                    search.value= line;
                    feedback.innerHTML=line;
                    break;
                }
                case 40: {
                    if(counter!=arr.length){

                        after();
                    }
                    else{
                        counter=0;
                        after();
                    }
                    return counter;
                    break;
                }
                case 38:{

                    if(counter!=0){
                        before();
                    }
                    else {
                        /* если ставлю counter=arr.length; пробегает по всем но первые эелемент выводит как underfined*/
                        /*counter=arr.length-1; не доходит до первого элемента*/
                        counter=arr.length;
                        before();
                    }
                    return counter;
                    break;
                }


            }
        }
    };

    /**
     * Clean search field
     */

    function  clean(){
        autocomplete.style.display= "none";
        feedback.innerHTML="";
    }


})();