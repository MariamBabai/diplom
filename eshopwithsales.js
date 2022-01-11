const iteM_Name = document.querySelector('.item_name');
const PRICE = document.querySelector('.price');
const tovar = document.querySelectorAll('.tovar');
let itemsField = document.getElementById('items');
let itemInTheCartDiv = document.querySelector("#itemInTheCartDiv");

const MIN_VALUE = document.getElementById('min_value');
const MAX_VALUE = document.getElementById('max_value');
const FILTR_BTN = document.getElementById('filter_btn')








let cart = {};


(function () {
    loadItems();
}) ();



async function loadItems(){
    const response = await fetch('items.json');
    const itmes  = await response.json();

    FILTR_BTN.addEventListener('click', function a(){
        filterItems(itmes);
    })

   

    renderItems(itmes);


}



function renderItems (items){
    for(let item in items){
        // console.log(items)
        const itemDiv = `
        <div class ="item_div">
        <img src = "${items[item].image}" class="silencer_img">
            <p class = "silencer_name"> ${items[item] ['name']} </p>
            <p>${items[item] ['description']} </p>
            <p><strike class="price">${items[item] ['price']}</strike> ${items[item] ['price']-700} </p>
            <div class="more_information" >
            <a href="http://127.0.0.1:5501/item.html" target="_self" class="more_information_btn" ><buttton type="button" id="${item}" > ? </button><a>
            </div>
            <buttton type="button" id="${item}" class="add_Item_btn add_btn"> Купити </button>
        </div>
        `
        itemsField.innerHTML += itemDiv;

    }
}




document.addEventListener('click',function add(elem){
    if(elem.target.classList.contains('add_Item_btn')){
        // console.log(elem.target.dataset.id);
        addCart(elem);
        sayItemInTheCart();
    }
});



function addCart(data){
    let article = data.target.id
    console.log(article);

    if(cart[article] !== undefined){
        cart[article]++
    }else{
        cart[article]=1
    }
    localStorage.setItem('cart',JSON.stringify(cart));

}










function filterItems(obj, minValue = MIN_VALUE.value, maxValue = MAX_VALUE.value){
    itemsField.innerHTML =""
    let arr=[];
    arr.push(obj);
   let b = arr.forEach(element =>{
        for(let key in element){
           if(element[key] ['price'] >= parseInt(minValue) && element[key] ['price'] < parseInt(maxValue)){

                const itemDiv = `
                <div class ="item_div">
                <img src = "${element[key].image}" class="silencer_img">
                    <p class="silencer_name"> ${element[key] ['name']} </p>
                    <p> ${element[key] ['description']} </p>
                    <p> <span class="price">${element[key] ['price']}</span> </p>
                    <buttton type="button" id="${key}" class= "add_Item_btn add_btn"> Купить </button>
                </div>
                `
            itemsField.innerHTML += itemDiv;
            }

        }

    })
}








function sayItemInTheCart(){
    itemInTheCartDiv.classList.remove('display_none');
    itemInTheCartDiv.classList.add('itemInTheCartDiv');
    
    setTimeout(function RemovesayItemInTheCart(){

        itemInTheCartDiv.classList.remove('itemInTheCartDiv');
        itemInTheCartDiv.classList.add('display_none');
    },1000)
}
