window.onload = function() {

    var base = {
        Kostya: [ 'watch', 'ipad', 'iphone'],
        Pasha: [ 'watch', 'tablet'],
        Dasha: ['iphone']
    };

    function addName() {
        var keybase = document.getElementById('addName1').value;
        var warning = document.getElementById('notification1');
        warning.style.display='none';
        if (base[keybase]){
            warning.style.display='block';
        }
        else {
            var valuebase = document.getElementById('addGadgest1').value;
            var basearray = valuebase.split(',');
            base[keybase] = basearray;
        }
    }
    function addGadgest() {
        var name = document.getElementById('addName2').value;
        var warning = document.getElementById('notification2');
        if(!base[name]){
            warning.style.display='inline-block';
        }
        else {
            var gadgest =  document.getElementById('addGadgest2').value;
            base[name].push(gadgest);
        }
    }
    function deleteGadgest() {
        var name = document.getElementById('addName3').value;
        var warning = document.getElementById('notification3');
        var warningDelete = document.getElementById('notification4');
        var gadgest =  document.getElementById('addGadgest3').value;
        var gadgestArray = gadgest.split(',');
        var nameArray = base[name];

        if(!base[name]){
            warning.style.display='block';
        }
        else {

            for(var i= 0, l=nameArray.length; i<l; i++){
                for(var j= 0, len=gadgestArray.length; j<len; j++){
                    if(nameArray[i]==gadgestArray[j]){
                        nameArray.splice(i,1);
                    }
                    else{
                        warningDelete.style.display='inline-block';

                    }
                }
            }

        }
    }

    function ShowList() {
        var content = document.getElementById('content');
        for (var i in base) {
            if (!base.hasOwnProperty(i)) continue;
            var str = '';
            for (var j in base) str += (j + ': ' + base[j] + '; '+'<br>');
            content.innerHTML=str;
            console.log(base);
        }
    }

    document.getElementById('b1').addEventListener( "click", addName);
    document.getElementById('b2').addEventListener( "click", addGadgest);
    document.getElementById('b3').addEventListener( "click", ShowList);
    document.getElementById('b4').addEventListener( "click", deleteGadgest);

};
