$(function () {

    // elemek összegyüjtése
    let $button = $('button');
    // console.log= $('button');
    let $checkbox = $('input[type="checkbox"]');
    let $invalidFieldsList = $('div.alert-danger ul');
    let $alert = $('div.alert-danger');
    let $form = $('Form');

    // console.log($checkbox);


    // gombnyomásra megakasztja
    $button.click(function (event) {
        event.preventDefault();
        // console.log(event);

        //nem megfelelő mezők
        let invalidFields = ['Felhasználónév'];
        // console.log(invalidFields);

        // invalidFields.push('Felhasználónév');

        // ÁSZ
        let isChecked = $checkbox.prop('checked');
        if (!isChecked) {
            invalidFields.push('ÁSZF');
        }


        // siekres és sikeretelen
        if (invalidFields.length == 0) {
            console.log('Minden rendben');
        } else {


             //sikeres kitöltés
             $successtext.show();
             $form.hide();   


            //Sikertelen kitöltés
            $alert.show();

    0        //hibák kiirása


            // $invalidFieldsList.append('<li>teszt</li>');
            $.each(invalidFields, function (index, field) {
                console.log(index + ' : ' + field);
                $invalidFieldsList.append('<li>' + field + '</li>');
            });

            console.log(invalidFields);
        }
    }); // button click
});
