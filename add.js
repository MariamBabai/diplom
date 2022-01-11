let cartBLOCK = document.querySelector('.cart');
const ourPromocode = "123456dfgh1";
let userPromocode = document.getElementById('promocode');
const checkout = document.querySelector('.checkout');
let finalPrice = document.querySelector('.final_price');
const ORDER_FORM = document.getElementById('order_form');
const CARD_FORM_OF_PAYMENT = document.getElementById('pay-card');
const CARD_INPUT = document.getElementById('card_input')


if(CARD_FORM_OF_PAYMENT.hasAttribute('checked')){
    CARD_INPUT.classList.remove('display_none');
    CARD_INPUT.classList.add('display_inline_block');
}


let cart = {};

(function () {
    loadItems();
}) ();
async function loadItems(){
    const response = await fetch('items.json');
    const itmes  = await response.json();
    console.log(itmes);

    showWhatCartHasInside();
    renderItemsfromBasket();

    function renderItemsfromBasket() {


        let itemDiv = "";
        for(let key in cart){
            
            itemDiv += `
            <div class ="item_div">
                <p>${itmes[key] ['name']} </p>
                <img src = "${itmes[key].image}" class="silencer_img">
                <div class ="btn_field">
                <button type="button" class= "plus" id="${key}"> + </button>
                    <p> ${cart[key]} </p>
                <button type="button" class= "minus" id="${key}"> - </button>
                </div>
                <p class = "cart_price"> ${itmes[key] ['price']*cart[key]} </p>
                <button type="button" class= "delete" id="${key}"> Видалити товар із корзини </button>
            </div>
            `

        }
        
        cartBLOCK.innerHTML = itemDiv;
        

        const plussBtn = document.querySelectorAll('.plus');
        const arrayPlus = Array.from(plussBtn);
        arrayPlus.forEach(element=>{
            return element.addEventListener('click', addNumber)
        })

        
        const minusBtn = document.querySelectorAll('.minus');
        console.log(minusBtn);
        const arrayMinus = Array.from(minusBtn);
        arrayMinus.forEach(element=>{
            return element.addEventListener('click', decreaseNumber)
        })

        const dleteBtn = document.querySelectorAll('.delete');
        const arrayDelete = Array.from(dleteBtn);
        arrayDelete.forEach(element=>{
            return element.addEventListener('click', deleteItem)
        })


        checkout.addEventListener('click',function returnFoo (){
                ORDER_FORM.classList.toggle('vision');
               return finalPrice.innerText =`Підсумкова сума:  ${showFinalPrice()} грн ` ;
        })

        userPromocode.addEventListener('blur',function(){
            if(userPromocode.value === ourPromocode){
                return finalPrice.innerText =`Підсумкова сума:  ${showFinalPrice() - (showFinalPrice()*10/100)} грн ` 
            }
            else{
                return finalPrice.innerText =`Підсумкова сума:  ${showFinalPrice()} грн `
            }
 
            
        })
        

        function showFinalPrice(){
            const totalprice = document.querySelectorAll('.cart_price');
            let sum = 0;
            for(let i = 0; i < totalprice.length; i++){
    
                sum += Number(totalprice[i].innerText);

            }
            return sum
    
        }

        userPromocode.addEventListener('blur',function(){
    if(userPromocode.value === ourPromocode){
        console.log('true')
    }
    else(
        console.log('false')
    )
})


    }



    function addNumber(element){
        let article = element.target.id;
        ++cart[article];
        localStorage.setItem('cart',JSON.stringify(cart));
        renderItemsfromBasket();
}

    function decreaseNumber(element){
        let article = element.target.id;
        if(cart[article] > 1){
            cart[article]--;
        }else{
            delete cart[article];
        }

        localStorage.setItem('cart',JSON.stringify(cart));
         renderItemsfromBasket();
}

    function deleteItem(element){
        console.log('das')
        let article = element.target.id;
        delete cart[article];
        localStorage.setItem('cart',JSON.stringify(cart));
        renderItemsfromBasket();

}

};


function showWhatCartHasInside(){
    let out = ''
    if(localStorage.getItem('cart') !== undefined){
        cart= JSON.parse(localStorage.getItem('cart')); 

    }
    for(let key in cart){
        out+= `ARTCODE: ${key} <br>`
        out+= `Kilkist': ${cart[key]} <br>`

    }
    cartBLOCK.innerHTML = out
}






