function addItems() {
    
    let selection = document.getElementById("product"); 
    let product = selection.options[selection.selectedIndex].value; 
    let quantity = parseInt(document.getElementById("quantity").value);  
    
    let input = document.getElementById("quantity").value;
    if (input == "") {
        alert("Usuário, preencha a quantidade de produtos que você deseja comprar.");
        return;
    }

    let price;
    if (product == "Fone de ouvido") {
        price = quantity * 100;
    } else if (product == "Celular") {
        price = quantity * 1400;
    } else if (product == "Oculus VR") {
        price = quantity * 5000;
    }
    
    let item = document.createElement("span"); 
    item.innerHTML = `<span class="texto-azul">${quantity}x </span> <span class="texto-preto"> ${product} </span> <span class="texto-azul"> R$${price} </span>`
    item.classList.add("carrinho__produtos__produto"); 
    
    let shoppingList = document.getElementById("shopping-list"); 
    shoppingList.append(item);

    totalValue(price);
    
    document.getElementById("quantity").value = "";
}

function totalValue(price) {
    let finalPrice = parseInt(document.getElementById("total-value").textContent);
    finalPrice = finalPrice + price;
    document.getElementById("total-value").innerHTML = `${finalPrice}`
}

function cleanShoppingList() {
    document.getElementById("shopping-list").innerHTML = "";
    document.getElementById("total-value").innerHTML = "0"
}
