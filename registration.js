let LOGIN = document.getElementById('user-name');
let PASSWORD = document.getElementById('password');
let PASSWORD_ONE_MORE_TIME = document.getElementById('password_one_more_time');
let EMAIL = document.getElementById('user-email');
let REG_BTN = document.getElementById('accept_registration');
let ENTRY_BTN = document.getElementById('accept_entry');
let greeting = document.querySelector('#greeting');
let greeting_entry = document.querySelector('#greeting_entry')
let registration = document.getElementById('registration');
const REGISTRATION_OR_ENTRY = document.querySelector('#field_entry_or_registration');
const accept_entrt = document.getElementById('accept_entry');


const notice = document.querySelector('.top__notification')


let form_reg = document.querySelector('#form_registration');
let form_entry = document.querySelector('#form_entry');

const EXIt = document.querySelectorAll('.exit');




registration.addEventListener('click', function (){
    REGISTRATION_OR_ENTRY.classList.toggle('disply_block_position_absolute');
})

EXIt.forEach(element=>{
    element.addEventListener('click', function(){
        form_reg.classList.add('display_none');
        form_reg.classList.remove('registration_form');

        form_entry.classList.add('display_none');
        form_entry.classList.remove('registration_form');
    })
})


// =========================================creating customer=============================================================================

class Customer{
    constructor(login, password, email, promo){
        this.login = login,
        this.password = password,
        this.email = email

    }
}





document.addEventListener('click',function registerOrEntryAcc(element){
    if(element.target.classList.contains('registration_chose')){
        form_reg.classList.remove('display_none');
        form_reg.classList.add('registration_form');

    }
    if(element.target.classList.contains('entry_chose')){
        form_entry.classList.remove('display_none');
        form_entry.classList.add('entry_form');
    }
})


REG_BTN.addEventListener('click',function registerAcc(){
    let createdCostumer = new Customer(LOGIN.value, PASSWORD.value, EMAIL.value);
    // console.log(createdCostumer);
    form_reg.classList.add('display_none');

    greeting.classList.add('greeting_div');
    form_reg.classList.remove('display_none');

    setTimeout(finishRegistration,1000)

})

ENTRY_BTN.addEventListener('click',function registerAcc(){
    form_entry.classList.add('display_none');
    greeting_entry.classList.add('greeting_entry_div');
    form_entry.classList.remove('display_none');
    setTimeout(finishEntry,1000)

})
// !! Оговорочка!! Поскольку у нас нету сервера, а все данные о юзерах долджны храниться на серверах мы используем создание объекта !!
function finishRegistration(){
    greeting.classList.remove('greeting_div');
    form_reg.classList.add('display_none');
    notice.classList.remove('top__notification');
    notice.classList.add('display_none');
    REGISTRATION_OR_ENTRY.classList.remove('disply_block_position_absolute');
    REGISTRATION_OR_ENTRY.classList.add('display_none');

}

function finishEntry(){
    greeting_entry.classList.remove('greeting_entry_div');
    form_entry.classList.add('display_none');
    notice.classList.remove('top__notification');
    notice.classList.add('display_none');
    REGISTRATION_OR_ENTRY.classList.remove('disply_block_position_absolute');
    REGISTRATION_OR_ENTRY.classList.add('display_none');
}


// =========================================creating customer=============================================================================


EMAIL.addEventListener('blur' ,function (){
    validateEmail(EMAIL.value);
    
});

PASSWORD.addEventListener('blur' ,function (){
    validatePassword(PASSWORD.value);
});

PASSWORD_ONE_MORE_TIME.addEventListener('blur' ,function (){
    comparePassword(PASSWORD_ONE_MORE_TIME.value);
});

LOGIN.addEventListener('blur' ,function (){
    validateLogin(LOGIN.value);
});



function validateEmail(email) {
    console.log(email)
        let re = /\S+@\S+\.\S+/;
        let b = re.test(email);
        if(b){
            EMAIL.classList.add('accepted');
            EMAIL.classList.remove('non-accepted');

        }else if(email === "" ){
            EMAIL.classList.remove('non-accepted');
            EMAIL.classList.remove('accepted');

        } else{
            EMAIL.classList.add('non-accepted')
            EMAIL.classList.remove('accepted')
        }
    }

    function validatePassword(login){

            let re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
            let b = re.test(login);
            if(b){
                PASSWORD.classList.add('accepted');
                PASSWORD.classList.remove('non-accepted');
    
            }else if(login === "" ){
                PASSWORD.classList.remove('non-accepted');
                PASSWORD.classList.remove('accepted');
    
            } else{
                PASSWORD.classList.add('non-accepted')
                PASSWORD.classList.remove('accepted')
            }
        }

        function comparePassword(passwordToCompare){
            if(passwordToCompare === PASSWORD.value){
                PASSWORD_ONE_MORE_TIME.classList.add('accepted');
                PASSWORD_ONE_MORE_TIME.classList.remove('non-accepted');
            } else {
                PASSWORD_ONE_MORE_TIME.classList.add('non-accepted')
                PASSWORD_ONE_MORE_TIME.classList.remove('accepted')
            }

        }

    
    
    function validateLogin(login) {
        let re = /^[a-zA-Z\-]+$/;;
        let b = re.test(login);
        if(b){
            LOGIN.classList.add('accepted');
            LOGIN.classList.remove('non-accepted');

        }else if(login === "" ){
            LOGIN.classList.remove('non-accepted');
            LOGIN.classList.remove('accepted');

        } else{
            LOGIN.classList.add('non-accepted')
            LOGIN.classList.remove('accepted')
        }
    }


    

