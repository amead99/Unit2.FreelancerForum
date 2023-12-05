const names = ["Alex", "Jim", "Aliyah", "Tasneem", "Maya", "Moss", "Rina", "Bethany", "Aidan", "Tyrone"];
const prices = [40, 50, 60, 70, 80, 90];
const occupations = ["designer", "marketer", "instructor", "mathmatician", "historian", "contractor", "librarian", "researcher", "animator", "developer", "writer", "teacher", "programmer"];
// const maxListing = 12;

const freelancers = [
  { name: "Alice", price: 30, occupation: "writer"},
  { name: "Bob", price: 50, occupation: "teacher"},
  { name: "Carol", price: 70, occupation: "programmer"},
];


const addFrlIntervalId = setInterval(addListing, 2000); 

render();

function render() {
    const listing = document.querySelector("#listing");
    const listingElements = freelancers.map((freelancer) => {
        const element = document.createElement("li");
        element.textContent = freelancer.name + ", $" + freelancer.price + ", " + freelancer.occupation;
        return element;
    })
    listing.replaceChildren(...listingElements,);
};

function addListing() {
    const name = names[Math.floor(Math.random() * names.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];

    freelancers.push({name, price, occupation});

    if(freelancers.length < 20){
        render();
    } else {
        clearInterval(addFrlIntervalId);
    };
};

//const averagePrice = document.querySelector("#average_price");
//const priceElement = document.createElement("div");
//let sum = 50;
//sum += freelancers.price;
//priceElement.textContent = "Average Price: " + sum;
//averagePrice.appendChild(priceElement);
