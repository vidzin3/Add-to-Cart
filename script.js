const menu = document.getElementById("menu");
let clicked = true;
let clickIn = false;
const div1 = document.getElementById("1")
const div2 = document.getElementById("2");
const div3 = document.getElementById("3");
const sidebar = document.getElementById("wdit")
const menutext = document.getElementById("menubar");
const menupage = document.getElementById("menupage");

menu.addEventListener("click", (e) => {
    let index = e.target;
    let menubar1 = index.parentElement.children[0]
    let menubar2 = index.parentElement.children[1]
    let menubar3 = index.parentElement.children[2];
    if (menu) {
        menu.classList.toggle('items-center')
        div2.classList.toggle('hidden')
        div1.classList.toggle('rotate-45')
        div3.classList.toggle('rotate-[-45deg]')
        // sidebar.classList.replace('lg:w-[20%]','lg:w-[0%]')
        sidebar.classList.toggle("hidden")
        menutext.classList.toggle("top-[17%]")
    } else {
        div2.classList.remove('invisible')
    }
})

const product = document.getElementById("product");
const cartitems = document.querySelector(".cart-items");
const totalprice = document.querySelector(".item-price");

let cart = [];

let item = [
    {
        id: 1,
        img: "https://i5.walmartimages.com/dfw/4ff9c6c9-633b/k2-_724005b9-51bd-4784-8911-45c973ea5b58.v1.png?odnHeight=222&odnWidth=395&odnBg=FFFFFF",
        text: "Classic fall flavors",
        dec: "Get your fix of everything pumpkin spice, cinnamon & apple.",
        price: 3.44,
    },
    {
        id: 2,
        img: "https://i5.walmartimages.com/dfw/4ff9c6c9-8ced/k2-_d21e9bb2-b736-4f67-8521-5fd69e55be45.v1.png?odnHeight=222&odnWidth=395&odnBg=FFFFFF",
        text: "Comfort meals",
        dec: "Ingredients for hearty meals like stew & pot roast.",
        price: 4,
    },
    {
        id: 3,
        img: "https://i5.walmartimages.com/dfw/4ff9c6c9-c104/k2-_4773d67b-07d9-4816-9c85-70c805659987.v1.png?odnHeight=222&odnWidth=395&odnBg=FFFFFF",
        text: "Back in the bakery",
        dec: "Indulge in ready-to-eat pies, cookies & more.",
        price: 7,
    },
    {
        id: 4,
        img: "https://i5.walmartimages.com/dfw/4ff9c6c9-c104/k2-_4773d67b-07d9-4816-9c85-70c805659987.v1.png?odnHeight=222&odnWidth=395&odnBg=FFFFFF",
        text: "Back in the bakery",
        dec: "Indulge in ready-to-eat pies, cookies & more.",
        price: 7,
    },
    {
        id: 5,
        img: "https://i5.walmartimages.com/dfw/4ff9c6c9-fcc0/k2-_2c082f03-c47e-4fe1-a79c-c95ff0ac10cc.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF",
        text: "Sweet & spooky",
        dec: "Make every movie night extra scary with M&M's.",
        price: 2.5,
    },
    {
        id: 6,
        img: "https://i5.walmartimages.com/dfw/4ff9c6c9-7cb6/k2-_c4634b8b-2c38-4bcd-a173-537c5562cf91.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF",
        text: "Weeknight dinners",
        dec: "Get creative with Harry Potter Hershey’s Kisses.",
        price: 3,
    },
    {
        id: 6,
        img: "https://i5.walmartimages.com/dfw/4ff9c6c9-7cb6/k2-_c4634b8b-2c38-4bcd-a173-537c5562cf91.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF",
        text: "Weeknight dinners",
        dec: "Get creative with Harry Potter Hershey’s Kisses.",
        price: 3,
    },
    {
        id: 6,
        img: "https://i5.walmartimages.com/dfw/4ff9c6c9-7cb6/k2-_c4634b8b-2c38-4bcd-a173-537c5562cf91.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF",
        text: "Weeknight dinners",
        dec: "Get creative with Harry Potter Hershey’s Kisses.",
        price: 3,
    },
    {
        id: 6,
        img: "https://i5.walmartimages.com/dfw/4ff9c6c9-7cb6/k2-_c4634b8b-2c38-4bcd-a173-537c5562cf91.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF",
        text: "Weeknight dinners",
        dec: "Get creative with Harry Potter Hershey’s Kisses.",
        price: 3,
    },
]

let price = 0;

item.forEach((e, i) => {
    let div = `
    <div class="flex flex-col overflow-hidden rounded-xl splide__slide">
        <img src="${e.img}" alt="">
        <div class="p-2">
            <h1 class="text-md font-bold">${e.text}</h1>
            <p class="my-2 text-sm">${e.dec}</p>
            <p>$${e.price}</p>   
            <div class="py-1 mb-0">
                <button class="add-to-cart text-start bg-blue-300 p-3 rounded-full" data-price="${e.price}" data-id="${e.id}">Add to Cart</button>
            </div>
        </div>
    </div>
    
    `;
    product.innerHTML += div;

});

const addToCartBtns = document.querySelectorAll('.add-to-cart');
addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const itemId = parseInt(e.target.getAttribute("data-id"));
        const itemPrice = parseFloat(e.target.getAttribute("data-price"));
        price += itemPrice;
        totalprice.textContent = price.toFixed(2);
        const selectedItem = item.find((e) => e.id === itemId);
        cart.push(selectedItem);
        updateCart();
    });
    
});

function updateCart() {
    cartitems.innerHTML = "";
    let i = 0
    for(i = 0;i < cart.length;i++){
        const cartadd = cart[i];
        let cartItem = document.createElement("li");
        cartItem.classList.add("flex", "justify-between")
        cartItem.innerHTML = `
            <span>${cartadd.text}</span>
            <button class="border-0 border-black btn px-4 rounded deletbtn">
                <i class="fa-solid text-black fa-trash" data-index=${i}></i>
            </button>
        `
        cartitems.appendChild(cartItem);
        
        
    }
    const deleteButtons = cartitems.querySelectorAll(".deletbtn");
        for(i = 0;i < deleteButtons.length;i++){
            let button = deleteButtons[i];
            button.addEventListener("click",deletelist);
        }
    function deletelist(e){
        let index = parseInt(e.target.getAttribute("data-index"));
        let removedItem = cart[index];
        cart.splice(index, 1);
        updateCart();
        price -= removedItem.price;
        totalprice.textContent = price.toFixed(2);
    }
    
}
// deleteButtons.forEach((button)=>{
    //     button.addEventListener("click", (e)=>{
    //         const itemdel = parseInt(e.target.getAttribute("data-index"),10);
    //         console.log(itemdel)
    //         updateCart();
    //     });
    // })
    // const btndel = document.querySelector(".btndel");
    // for(i = 0;i<btndel.length;i++){
    //     let btn = btndel[i];
    //     btn.addEventListener("click", (e)=>{
    //         let index = parseFloat(e.target.getAttribute("data-del"));
    //         console.log(index);
    //         updateCart();
    //     });
    // }
    // cart.forEach((item1,i) => {
    //     const cartItem = document.createElement("li");
    //     cartItem.classList.add("flex");
    //     cartItem.classList.add("justify-between")
    //     cartItem.innerHTML = `
    //         <span>${item1.text}</span>
    //         <button data-delete=${i} class="border-0 border-black btn px-4 rounded " id="btn"><i class="fa-solid text-black fa-trash"></i></button>
    //     `         
    //     // btndelete.addEventListener("click", (e)=>{
    //     //     let index = parseInt(e.target.getAttribute("data-delete"))
    //     //     cart.splice(index, 1);
    //     //     updateCart();
    //     //     // const itemPrice = parseFloat(e.target.getAttribute("data-price"));
    //     //     // price -= itemPrice;  
    //     //     // totalprice.textContent = price;
    //     // })
    //     const btndelete = cartItem.querySelector('#btn')
    //     btndelete.addEventListener("click", (e)=>{
    //         let index = e.target.getAttribute("data-delete");
    //         cart.splice(index,1);
    //         updateCart()
    //     })
    //     cartitems.appendChild(cartItem);
        
    // });
   
    // function deleteitem(e){
    //     let index = e.target.getAttribute("data-delete")
    //     if(index !== 1){
    //         cart.splice(index, 1);
    //         updateCart()
    //     }
        
    // }
    