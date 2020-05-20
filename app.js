const creditCardInput= document.querySelector("#cc");
const termsCheckbox= document.querySelector("#terms");
const veggieSelect= document.querySelector("#veggie");

const formData={};
// creditCardInput.addEventListener('input', e =>{
//     console.log('cc Changed!', e);
//     formData['cc']= e.target.value;
// })

// veggie.addEventListener('input', e =>{
//     console.log('Veggie Changed!', e);
//     formData['veggie']= e.target.value;
// })

// termsCheckbox.addEventListener('input', e =>{
//     console.log('Checkbox Changed!', e);
//     formData['agreeToTerms']= e.target.checked;
// })

for (let input of [creditCardInput, termsCheckbox, veggieSelect]){
    input.addEventListener('input', ({target}) =>{
const {name,type,value,checked} = target;
        //console.log(e.target.name);
        //formData[e.target.name]= e.target.value;
        formData[name]= type ==='checkbox' ? checked :value;
        console.log(formData);
    })
}


console.log("Nandita")