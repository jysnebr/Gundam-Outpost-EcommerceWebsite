const items = [
    {
        id: 1,
        title: "Gundam 00 Raiser + GN Sword",
        price: 24,
        des: "This is a posable, Real-Grade injection-plastic kit of an item from the Gundam universe. The OO Raiser gets a new Real Grade release! It's armed to the teeth with the GN blade, GN shield, GN twin lance, the GN sword II and III, a rifle, and of course the Raiser itself.",
        sizes: [
            {
                code: "SD",
                img: "Images/sd1.png",
                price: 14
            },
            {
                code: "Medium",
                img: "Images/slider1.png",
                price: 24
            },
            {
                code: "Large",
                img: "Images/slider1.png",
                price: 74
            },
        ],
    },
    {
        id: 2,
        title: "Gundam Dynames",
        price: 20,
        des: "In an early concept stages, Dynames was initially codenamed 'Knight Gundam'. It was the leader of the team and a powerful general purpose machine that uses a spear rifle instead of a sniper unit. It was also equipped with the Seven Sword system.",
        sizes: [
            {
                code: "SD",
                img: "Images/sd2.png",
                price: 10
            },
            {
                code: "Medium",
                img: "Images/slider2.png",
                price: 20
            },
            {
                code: "Large",
                img: "Images/slider2.png",
                price: 60
            },
        ],
    },
    {
        id: 2,
        title: "Gundam Virtue",
        price: 28,
        des: "The Gundam Virtue's most iconic feature, the transition into the Gundam Nadleeh, can be recreated. The kit is full of various gimmicks, and its proportions have been re-considered under MG series standards. A wide range of armaments such as the GN Bazooka and Gundam Nadleeh Beam Rifle are included.",
        sizes: [
            {
                code: "SD",
                img: "Images/sd3.png",
                price: 18
            },
            {
                code: "Medium",
                img: "Images/slider3.png",
                price: 28
            },
            {
                code: "Large",
                img: "Images/slider3.png",
                price: 68
            },
        ],
    },
    {
        id: 3,
        title: "Endless Waltz Gundam Wing",
        price: 50,
        des: "The angelic form of Wing Zero as portrayed in the OVA 'Gundam Wing Endless Waltz'. Recreated in stunning proportion by famed mechanical designer Hajime Katoki, Wing Zero comes with its Twin Buster Rifle, which can combine for its iconic shooting pose. Also includes 2 beam sabers, deployable shoulder machine cannons, and a special display stand.",
        sizes: [
            {
                code: "SD",
                img: "Images/sd4.png",
                price: 24
            },
            {
                code: "Medium",
                img: "Images/slider4.png",
                price: 50
            },
            {
                code: "Large",
                img: "Images/slider4.png",
                price: 110
            },
        ],
    },
    {
        id: 4,
        title: "Gundam Unicorn",
        price: 48,
        des: "The Unicorn Gundam is equipped with four beam saber, two on the forearms and two in the backpack. In Unicorn mode, the MS only has access to the two forearm-mounted beam sabers. In Destroy Mode, the other two beam sabers flip out from the backpack, allowing access to all four sabers.",
        sizes: [
            {
                code: "SD",
                img: "Images/sd5.png",
                price: 20
            },
            {
                code: "Medium",
                img: "Images/slider5.png",
                price: 48
            },
            {
                code: "Large",
                img: "Images/slider5.png",
                price: 120
            },
        ],
    },
];

const contentWrapper = document.querySelector(".content-wrapper");
const headerItems = document.querySelectorAll(".header-bottom-items");

let itemChosen = items[0];
const itemImg = document.querySelector(".item-image");
const itemTitle = document.querySelector(".item-title");
const itemPrice = document.querySelector(".item-price");
const itemSize = document.querySelectorAll(".item-sizes");
const itemDes = document.querySelector(".item-des");

const itemBuy = document.querySelector(".item-buy");
const paymenyBox = document.querySelector(".payment-box");
const paymentBg = document.querySelector(".bg-dim");
const closeBtn = document.querySelector(".payment-close-btn");
const dimBG = document.querySelector(".bg-dim");
const disScroll = document.getElementsByTagName("body")[0];


headerItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        contentWrapper.style.transform = `translateX(${-100 * index}vw)`;
        itemChosen = items[index];
        itemImg.src = itemChosen.sizes[1].img;
        itemTitle.textContent = itemChosen.title;
        itemPrice.textContent = "$" + itemChosen.price;
        itemDes.textContent = itemChosen.des;
        itemSize.forEach((size) => {
            size.style.background = "white";
            size.style.color = "black";
        });
    });
});

itemSize.forEach((size, index) => {
    size.addEventListener("click", () => {
        itemImg.src = itemChosen.sizes[index].img;
        itemPrice.textContent = "$" + itemChosen.sizes[index].price;
        itemSize.forEach((size) => {
            size.style.background = "white";
            size.style.color = "black";
        });
        size.style.background = "black";
        size.style.color = "white";
    });
});


itemBuy.addEventListener("click",() => {
    dimBG.style.display = "flex";
    paymenyBox.style.display = "flex";
    disScroll.style.overflowY = "hidden";
});
closeBtn.addEventListener("click", () => {
    paymenyBox.style.display = "none";
    dimBG.style.display = "none";
    disScroll.style.overflowY = "visible";
});