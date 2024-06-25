const wrapper = document.querySelector('.Sliderwrapper');
const menuitems = document.querySelectorAll('.menuitem');
const products =[

   {

    id: 1,
    title: "Nike",
    price: 3570,
    colors: [
        {
            code: "black",
            img: "./img/air.png",
        },
        {
            code: "darkblue",
            img: "./img/air2.png",
        },
    ],

   },
   {
   id: 2,
   title: "Jordan",
   price: 3570,
   colors: [
       {
           code: "black",
           img: "./img/jordan.png",
       },
       {
           code: "darkblue",
           img: "./img/jordan2.png",
       },
   ],

  },
  {
    id: 3,
    title: "Puma",
    price: 3570,
    colors: [
        {
            code: "black",
            img: "./img/Crater.png",
        },
        {
            code: "darkblue",
            img: "./img/crater2.png",
        },
    ],
 
   },
   {
    id: 4,
    title: "Crocs",
    price: 3570,
    colors: [
        {
            code: "black",
            img: "./img/balzer.png",
        },
        {
            code: "darkblue",
            img: "./img/blazer2.png",
        },
    ],
 
   },
   {
    id: 5,
    title: "Gucci",
    price: 357,
    colors: [
        {
            code: "black",
            img: "./img/hippie.png",
        },
        {
            code: "darkblue",
            img: "./img/hippie2.png",
        },
    ],
 
   },
   
];
let chosenproduct = products[0];
const currentproductimg = document.querySelector(".Productimage");
const currentproducttittle = document.querySelector(".ProductTitle");
const currentproductColor = document.querySelectorAll(".color");
const currentproductsize = document.querySelectorAll(".size");
const currentproductprice = document.querySelectorAll(".ProductPrice");

console.log('Current Product Elements:', {
    currentproductimg,
    currentproducttittle,
    currentproductColor,
    currentproductsize,
    currentproductprice,
  });


    menuitems.forEach((item, index) => {
        item.addEventListener('click', () => {
            //change current slide based on index.
            wrapper.style.transform = `translateX(${-100 * index}vw)`;
            console.log("You clicked! " + index);
            //change choosenproduct.
            chosenproduct = products[index];

            //Change text of current product.
            
            currentproducttittle.textContent = "chosenproduct"
          

        });
    });

