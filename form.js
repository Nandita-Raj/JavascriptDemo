const creditCardInput= document.querySelector("#cc");
const termsCheckbox= document.querySelector("#terms");
const veggieSelect= document.querySelector("#veggie");

const form= document.querySelector("#signup_form");

form.addEventListener('submit', function(e){
    e.preventDefault();
    //alert("Submitted the Form");

    console.log('cc', cre ditCardInput.value );
    
    console.log('terms',termsCheckbox.checked);//value);
    
    console.log('veggie', veggieSelect.value);

    //console.log(e);
    
});