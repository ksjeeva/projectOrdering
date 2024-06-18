let currentIndex = 0;
const images = document.querySelectorAll(".slider-image");

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}
function showItems() {
  let addBtn = document.getElementById("add-btn");
  let item = document.getElementById("items");
  if (item.classList.contains("show")) {
    item.classList.remove("show");
  } else {
    item.classList.add("show");
  }
  if (addBtn.classList.contains("rotate")) {
    addBtn.classList.remove("rotate");
  } else {
    addBtn.classList.add("rotate");
  }
}

setInterval(nextImage, 3000);
let cartItems = []; // Array to store cart items

function addItemToCart(itemName, itemPrice, quantity, newPrice) {
  // Check if the item already exists in the cart
  const existingItem = cartItems.find((item) => item.name === itemName);

  if (existingItem) {
    // If the item exists, update its quantity and total price
    existingItem.quantity += quantity;
    existingItem.totalPrice += newPrice;
  } else {
    // If the item does not exist, add it to the cart
    cartItems.push({
      name: itemName,
      price: itemPrice,
      quantity: quantity,
      totalPrice: newPrice,
    });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

let cart = document.getElementById("cart");
document.querySelectorAll(".add").forEach((button) => {
  button.addEventListener("click", () => {
    const row = button.parentNode.parentNode;
    const itemName = row.querySelector("td:nth-child(2)").textContent;
    const itemPrice = parseInt(
      row.querySelector("td:nth-child(3)").textContent
    );
    const quantity = 1; // Assuming you always add 1 item at a time
    const newPrice = itemPrice * quantity;

    addItemToCart(itemName, itemPrice, quantity, newPrice);

    console.log(cartItems);
    if (quantity >= 1) {
      cart.classList.add("show-cart");
    } else {
      cart.classList.remove("show-cart");
    }
  });
});
function toggleItems(itemType) {
    const coffeeItemsTable = document.getElementById("coffeeItems");
    const iceCreamItemsTable = document.getElementById("iceCreamItems");
    const ChartItemsTable = document.getElementById("ChartItems");
    const juiceTable = document.getElementById("Juice");
  
    if (itemType === "coffee") {
      coffeeItemsTable.style.display =
        coffeeItemsTable.style.display === "none" ? "table" : "none";
      iceCreamItemsTable.style.display = "none";
      ChartItemsTable.style.display = "none";
      juiceTable.style.display = "none";
    } else if (itemType === "iceCream") {
      coffeeItemsTable.style.display = "none";
      iceCreamItemsTable.style.display =
        iceCreamItemsTable.style.display === "none" ? "table" : "none";
      ChartItemsTable.style.display = "none";
      juiceTable.style.display = "none";
    } else if (itemType === "ChartItems") {
      coffeeItemsTable.style.display = "none";
      iceCreamItemsTable.style.display = "none";
      ChartItemsTable.style.display =
        ChartItemsTable.style.display === "none" ? "table" : "none";
      juiceTable.style.display = "none";
    } else if (itemType === "Juice") {
      coffeeItemsTable.style.display = "none";
      iceCreamItemsTable.style.display = "none";
      ChartItemsTable.style.display = "none";
      juiceTable.style.display =
        juiceTable.style.display === "none" ? "table" : "none";
    }
  }
  