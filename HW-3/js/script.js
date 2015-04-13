window.onload = function() {

    var base = {
        kostya: [ 'watch', 'ipad', 'iphone'],
        pasha: [ 'watch', 'tablet'],
        dasha: ['iphone']
    };

    var arr = [];
     for(var prop in base ) {
        for(var i = 0; i < base[prop].length; i++) {
                arr.push(base[prop][i]);
        }
    }
    var numberGadgets = arr.length;

    function counterGadgets(lengthEnterGadget, numberAtAddUser){
        var a=lengthEnterGadget, b=numberAtAddUser;

        var counter=numberGadgets;
        return gadgest = {
            counterNumber: function(){
                var number = counter + lengthEnterGadget+numberAtAddUser;

                console.log(a,b);
            },
            printNumber: function(){
                console.log(counter);
                return counter
            }
        }

    }
    var gadget = counterGadgets();

    console.log(arr);

    /**
     * Add method in object base.
     */



    /**
     * Add method in object base.
     */

    function addName() {
        var keybase = document.getElementById('addName1').value.toLowerCase().trim();
        var warning = document.getElementById('notification1');
        warning.style.display='none';
        if (base[keybase]){
            warning.style.display='block';
        }
        else {
            var valuebase = document.getElementById('addGadgest1').value.toLowerCase().trim();
            var basearray = valuebase.split(',');
            base[keybase] = basearray;

            console.log(basearray);
            var numberAtAddUser = basearray.length;
            console.log(numberAtAddUser);
            return numberAtAddUser;

        }
    }
    /**
     *  Add value for key in object base.
     */
    function addGadgest() {
        var name = document.getElementById('addName2').value.toLowerCase().trim();
        var warning = document.getElementById('notification2');
        if(!base[name]){
            warning.style.display='inline-block';
        }
        else {
            var gadgest =  document.getElementById('addGadgest2').value.toLowerCase().trim();

            var lengthEnterGadget=base[name].length();
            base[name].push(gadgest);
            console.log(lengthEnterGadget);
            return lengthEnterGadget;


            base[name].push(gadgest);

        }
    }
    /**
     * Delete value for key in object base.
     */
    function deleteGadgest() {
        var name = document.getElementById('addName3').value.toLowerCase().trim();
        var warning = document.getElementById('notification3');
        var warningDelete = document.getElementById('notification4');
        var gadgest =  document.getElementById('addGadgest3').value.toLowerCase().trim();
        var gadgestArray = gadgest.split(',');
        console.log(gadgestArray);
        var nameArray = base[name];
        console.log(nameArray);

        if(!base[name]){
            warning.style.display='block';
            return false;
        }
        else {

            for(var i= 0, l=nameArray.length; i<l; i++){
                console.log(i);
                if(gadgestArray.indexOf(nameArray[i])!=-1){
                    nameArray.splice(i,1);
                    console.log(i);
                }

            }
            warningDelete.style.display='inline-block';
        }
    }
    /**
     * Show object base.
     */
    function ShowList() {
        var content = document.getElementById('content');
        for (var i in base) {
            if (!base.hasOwnProperty(i)) continue;
            var str = '';
            for (var j in base) str += (j + ': ' + base[j] + '; '+'<br>');
            content.innerHTML=str;
        }
    }

    function increment(){
        var counter =0;
        return function(){
            if(gadgestArray.indexOf(nameArray[i])!=-1){
                nameArray.splice(i,1);
                console.log(i);
            }

        }
    }

    document.getElementById('b1').addEventListener( "click", addName);

    document.getElementById('b1').addEventListener( "click", gadgest.counterNumber);

    document.getElementById('b2').addEventListener( "click", addGadgest);
    document.getElementById('b3').addEventListener( "click", ShowList);
    document.getElementById('b4').addEventListener( "click", deleteGadgest);

};
