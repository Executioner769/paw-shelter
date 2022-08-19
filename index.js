// Quotes;
const quotes = [
    {
        id: 1,
        quote: "“A dog is the only thing on earth that loves you more than he loves himself.”",
    },
    {
        id: 2,
        quote: "“Dogs are not our whole life, but they make our lives whole.”",
    },
    {
        id: 3,
        quote: "“Dogs are the best friends we have.”",
    },
    {
        id: 4,
        quote: "“Dogs do speak, but only to those who know how to listen.”",
    },
];

// Burger Menu
document.addEventListener("DOMContentLoaded", () => {
    const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
    );

    $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
        });
    });
});

// Quotes Display and Hide
let quoteElement = document.getElementById("quote");
setInterval(() => {
    quoteElement.innerText =
        quotes[Math.floor(Math.random() * quotes.length)].quote;
}, 3000);

// Logic for the Form display

document.getElementById("dog-btn").addEventListener("click", () => {
    document.getElementById("dogForm").style.display = "flex";
    document.getElementById("shelterForm").style.display = "none";
});

document.getElementById("shelter-btn").addEventListener("click", () => {
    document.getElementById("dogForm").style.display = "none";
    document.getElementById("shelterForm").style.display = "flex";
});

// Temp logic for add to cart
