

const wrapper = document.querySelector(".sliderwrapper");
const borrr = document.querySelectorAll(".borrr")

const products=[
    {
     id : 1,
     title:"AIR FORCE",
     price: 200,
     colors:[
        {
            code:"black",
            img:"img/casual shoe.png",
        },
        {
            code:"black",
            img:"img/casual shoe.png",
        },
    ],
    },
 {
    id : 2,
     title: "JORDEN",
     price: 219,
     colors:[
        {
            code:"black",
            img:"img/file.png",
        },
        {
            code:"black",
            img:"img/file.png",
        },
    ],
    },
  {
    id : 3,
     title:"BLAZER",
     price: 199,
     colors:[
        {
            code:"black",
            img:"img/new red tr.png",
        },
        {
            code:"black",
            img:"img/new red tr.png",
        },
    ],
    },
    {
    id : 4,
     title:"CRATER",
     price: 170,
     colors:[
        {
            code:"black",
            img:"img/red white shoe.png",
           
        },
        {
            code:"black",
            img:"img/red white shoe.png",
        },
    ],
    },
    {
    id : 5,
     title:"HIPPIE",
     price: 180,
     colors:[
        {
            code:"black",
            img:"img/orange shoe.png",
        },
        {
            code:"black",
            img:"img/orange shoe.png",
        },
    ],
    },

];

let choosenProduct = products[0] 

const currentProductImg = document.querySelector(".productimg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

borrr.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //change the current slide
       wrapper.style.transform= `translateX(${-100 * index}vw)`;

       //change the choosen product
       choosenProduct = products[index];

       //change text of current product
       currentProductTitle.textContent = choosenProduct.title;
       currentProductPrice.textContent = "$"+choosenProduct.price;
       currentProductImg.src = choosenProduct.colors[0].img
     
    });

});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
       currentProductSizes.forEach((size)=>{
        size.style.backgroundColor = "white";
        size.style.color = "black";
    
    });
       size.style.backgroundColor = "black";
       size.style.color = "white";
    });
});

const productbutton = document.querySelector(".productbutton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productbutton.addEventListener("click",()=>{
    payment.style.display = "flex"
})

close.addEventListener("click",()=>{
    payment.style.display = "none"
})



