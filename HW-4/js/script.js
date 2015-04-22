window.onload = function() {

    var base = {
        kostya: [ 'watch', 'ipad', 'iphone'],
        pasha: [ 'watch', 'tablet'],
        dasha: ['iphone']
    };

    var notification = {

        warring: 'This name already exists',
        error: 'User is not in list yet' ,
        empty: 'Gadgest is not in list yet',
        addUser: 'User is not in list yet  <br>' +
                      'Do you want add this user?',
        addGadget: 'Gadgest is not in list yet <br>' +
                        'Do you want add this gadget?',
        yes: 'yes',
        removeUser: 'User is in list yet  <br>' +
            'Do you want remove this user?',
        removeGadget: 'Gadgest is in list yet <br>' +
            'Do you want remove this gadget?'

    };

    function change(addName, addGadget, removeGadget){
        var block = document.getElementById('block'),
            enteredName = document.getElementById('enteredName'),
            name = enteredName.value.toLocaleLowerCase().trim(),
            enteredGadget = document.getElementById('gadget'),
            gadget = enteredGadget.value.toLocaleLowerCase().trim();
        var div = document.createElement('div'),
            section = document.createElement('p'),
            removeSection = document.createElement('p'),
            checkbox = document.createElement('input'),
            label = document.createElement('label'),
            removeLabel = document.createElement('label'),
            removeCheckbox = document.createElement('input');
        var ans = document.getElementById('checkbox'),
            ansRemove = document.getElementById('checkbox');
        block.appendChild(div);

      function addContent(){
            block.appendChild(checkbox);
            block.appendChild(label);
            label.for = 'checkbox';
            checkbox.type = 'checkbox';
            checkbox.name = 'checkbox';
            checkbox.id='checkbox';
        }

        function addContentRemove(){
            block.appendChild(removeCheckbox);
            block.appendChild(removeLabel);
            removeLabel.for = 'checkbox1';
            removeCheckbox.type = 'checkbox1';
            removeCheckbox.name = 'checkbox1';
            removeCheckbox.id='checkbox1';
        }


        if (base[name]){
            var arrayGad = base[name];
            for(var i=0; i<arrayGad.length; i++){
                if(arrayGad[i]== gadget){
                    div.innerHTML=notification.warring;
                    block.appendChild(section);
                    section.innerHTML=notification.removeUser;

                   addContent();
                    label.innerHTML=notification.yes;
                    if(ans.checked){
                        this.val = removeName;
                    }


                    if(ansRemove.checked){
                        this.val = removeGadget;
                    }
                    block.appendChild(removeSection);
                    removeSection.innerHTML=notification.removeGadget;
                }
            }
        }

                else {
                    div.innerHTML=notification.addGadget;
                    label.innerHTML=notification.yes;
                    if(ans.checked){
                        this.val = addGadget;
                    }
                }


        if(!base[name]){

            block.appendChild(label);
            block.appendChild(checkbox);
            div.innerHTML=notification.addUser;
            label.innerHTML=notification.yes;
            label.for = 'checkbox';
            checkbox.type = 'checkbox';
            checkbox.name = 'checkbox';
            checkbox.id='checkbox';
            if(ans.checked){
                this.val = addName;
            }

        }

        switch (this.val){
            case addName: (function(){
                var basearray = gadget.split(',');
                base[name] = basearray;
            })(); break;

            case addGadget: (function(){
                base[name].push(gadget);
            })(); break;

          /*  case removeName:  (function(){

            })(); break;*/

            case removeGadget :  (function(){
                var nameArray = base[name];
                var gadgetArray = gadget.split(',');
                for(var i= 0, l=nameArray.length; i<l; i++){
                    if(gadgetArray.indexOf(nameArray[i])!=-1){
                        nameArray.splice(i,1);
                        console.log(i);
                    }
                }
            })(); break;
        }

    }

   function ShowList() {
        var content = document.getElementById('content');
        for (var i in base) {
            if (!base.hasOwnProperty(i)) continue;
            var str = '';
            for (var j in base) str += (j + ': ' + base[j] + '; '+'<br>');
            content.innerHTML=str;
        }
    }

    ShowList();
    document.getElementById('b1').addEventListener( "click", change);
    document.getElementById('b3').addEventListener( "click", ShowList);


};
