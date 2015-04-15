window.onload = function() {

    var base = {
        kostya: [ 'watch', 'ipad', 'iphone'],
        pasha: [ 'watch', 'tablet'],
        dasha: ['iphone']
    };

    var notification = {

        warring: 'This name already exists',
        error: 'User is not in list yet' ,
        empty: 'Gadgest is not in list yet'
    };

    var arr = [];
     for(var prop in base ) {
        for(var i = 0; i < base[prop].length; i++) {
                arr.push(base[prop][i]);
        }
    }
    var numberGadgets = arr.length;

    function counterGadgets(numberAtAddUser, lengthEnterGadget){
        var counter=numberGadgets;
        var number;
        return gadgest = {
            counterNumber: function(){
                number = counter +numberAtAddUser + lengthEnterGadget;
                return number;
            },
            printNumber: function(){
                console.log(number);
                return counter;
            }
        }

    }
    var gadget = counterGadgets();

    /**
     * Add method in object base.
     */


    function addName() {
        var numberAtAddUser;
        var block1= document.getElementById('block1');
        var keybase = document.getElementById('addName1').value.toLowerCase().trim();
        if (base[keybase]){
            var div = document.createElement('div');
            block1.appendChild(div);
            div.innerHTML=notification.warring;
        }
        else {
            var valuebase = document.getElementById('addGadgest1').value.toLowerCase().trim();
            var basearray = valuebase.split(',');
            base[keybase] = basearray;
            numberAtAddUser = basearray.length;
            return numberAtAddUser;
        }
        gadget.counterNumber(numberAtAddUser);
    }
    /**
     *  Add value for key in object base.
     */
    function addGadgest() {
        var name = document.getElementById('addName2').value.toLowerCase().trim();
        var block2= document.getElementById('block2');
        if(!base[name]){
            var div = document.createElement('div');
            block2.appendChild(div);
            div.innerHTML=notification.error;
        }
        else {
            var gadgest =  document.getElementById('addGadgest2').value.toLowerCase().trim();

            var lengthEnterGadget=base[name].length;
            base[name].push(gadgest);
            base[name].push(gadgest);
            return lengthEnterGadget;          
        }

        gadgest.counterNumber(lengthEnterGadget);
    }
    /**
     * Delete value for key in object base.
     */
    function deleteGadgest() {
        var name = document.getElementById('addName3').value.toLowerCase().trim();
        var block3= document.getElementById('block3');
        var gadgest =  document.getElementById('addGadgest3').value.toLowerCase().trim();
        var gadgestArray = gadgest.split(',');
        var nameArray = base[name];

        if(!base[name]){
            var div = document.createElement('div');
            block3.appendChild(div);
            div.innerHTML=notification.error;
            return false;
        }
        else {

            for(var i= 0, l=nameArray.length; i<l; i++){
                if(gadgestArray.indexOf(nameArray[i])!=-1){
                    nameArray.splice(i,1);
                }

            }
            var div = document.createElement('div');
            block3.appendChild(div);
            div.innerHTML=notification.empty;
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


    document.getElementById('b1').addEventListener( "click", addName);
    document.getElementById('b2').addEventListener( "click", addGadgest);
    document.getElementById('b3').addEventListener( "click", ShowList);
    document.getElementById('b4').addEventListener( "click", deleteGadgest);

};
