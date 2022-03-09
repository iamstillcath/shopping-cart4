let items = [
    {
        images: "https://s.clipartkey.com/mpngs/s/7-73152_beer-top-glass-clip-art-black-and-white.png",
        name: "Beer",
        price: 3.01,
        add: "Add To Cart"
    },


    {
        images: "https://cdn.w600.comps.canstockphoto.com/tall-glass-full-of-freshly-squeezed-lime-vector-clipart_csp47311105.jpg",
        price: 3.47,
        name: "Juice",
        add: "Add To Cart"
    },

    {
        images: "https://icons-for-free.com/iconfiles/png/512/bottle+drink+energy+icon-1320086086561115628.png",
        price: 2.57,
        name: "Energy Drink",
        add: "Add To Cart"
    },

    {
        images: "https://as1.ftcdn.net/v2/jpg/01/03/66/80/500_F_103668005_LxXRkubqtQ20e8uDYDxa3gOch7rmV5Wh.jpg",
        price: 4.24,
        name: "Milk",
        add: "Add To Cart"
    },

    {
        images: "https://image.shutterstock.com/image-photo/stock-vector-water-bottle-line-icon-450w-670150909.jpg",
        name: "Mineral water",
        price: 2.54,
        add: "Add To Cart"
    },

    {
        images: "https://st2.depositphotos.com/36232374/47231/v/380/depositphotos_472313258-stock-illustration-vector-slush-drink-isolated-icon.jpg?forcejpeg=true",
        name: "Smootie",
        price: 3.80,
        add: "Add To Cart"
    }
]
let showCart = document.getElementById("cart-wrapper")
let Divwrap = document.getElementById("divWrap");
for (let i = 0; i < items.length; i++) {

    let div = document.createElement("div");
    let image = document.createElement('img');
    let names = document.createElement('h2');
    let amount = document.createElement("h5");
    let button = document.createElement("button");

    div.id = "div1"
    image.src = items[i].images;
    image.className = "page-image"
    names.innerHTML = items[i].name;
    names.style.fontSize = "18px"
    names.style.marginLeft="33px"
    amount.textContent = `\$${items[i].price}`;
    button.textContent = "Add To Cart";
   button.style.marginLeft="20px"
    button.id = "button";
    amount.id = "price";
    amount.style.marginLeft="40px"


    div.appendChild(image);
    div.appendChild(names);
    div.appendChild(amount);
    div.appendChild(button);

    Divwrap.appendChild(div)

}



const sumPrice = document.querySelectorAll("#price");
const total = document.getElementById("total");
let sum = 0;
for (let i = 0; i < sumPrice.length; i++) {
    const sums = +sumPrice[i].innerText.slice(1)
    sum = sums

}
// total.innerText = sum.toFixed(2);


let rowIndex



const buttons = document.querySelectorAll("#button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
        if (buttons[i].textContent === "Add To Cart") {
            showCart.style.visibility = "visible"
            e.preventDefault()
            let table = document.getElementById("display").getElementsByTagName("tbody")[0];

            if (table.rows.length === 0) {
                rowIndex = 0
            } else {
                rowIndex = rowIndex + 1
        console.log("thi sis tables row===>",)
            }

            let div = document.createElement("div");
            div.className = "three";

            let newRow = table.insertRow(table.length);
            let imageCell = newRow.insertCell(0);
            let image = document.createElement('img');
            image.className = 'cart-img';
            image.src = items[i].images;
            imageCell.append(image)
            let names = newRow.insertCell(1);
            names.innerHTML = items[i].name;
            let amount = newRow.insertCell(2);
            amount.textContent = `\$${items[i].price}`;
            let button1 = newRow.insertCell(3);

            let minusBtn = document.createElement("i");
            minusBtn.className = "fa fa-minus-square";
            minusBtn.id = "sub";
            minusBtn.style.cursor = "pointer";
            minusBtn.style.color = "blue";
            div.appendChild(minusBtn);

            let count = document.createElement("span")
            count.textContent = 1;
            count.id = "count";
            div.appendChild(count);

            let plusBtn = document.createElement("i")
            plusBtn.className = "fa fa-plus-square";
            plusBtn.id = "add";
            plusBtn.style.cursor = "pointer";
            plusBtn.style.color = "blue"
            div.appendChild(plusBtn);

            let exBtn = document.createElement("i");
            exBtn.className = "fa fa-window-close";
            exBtn.id = "delete";
            exBtn.style.cursor = "pointer";
            exBtn.style.color = "red"

            div.appendChild(exBtn);
            button1.appendChild(div)
            buttons[i].textContent = "in cart";

            const totals = document.getElementById("total");
            const defaultPrice = items[i].price;
            if (rowIndex === 0) {

                totals.innerText = "$" + defaultPrice

            } else {
                const increase = +totals.innerText.slice(1) + +defaultPrice;
                totals.innerText = "$" + increase.toFixed(2)
            }

            plusBtn.addEventListener("click", function () {
                rowIndex = rowIndex + 1
                console.log("thismis rowIndexplus", rowIndex)
                const defaultPrice = items.filter(item => item.name === items[i].name)
                count.innerText = +count.innerText + 1;
                const increasePrice = +amount.innerText.slice(1) + +defaultPrice[0].price;
                amount.innerText = '$' + increasePrice.toFixed(2);

                const newtotal = +totals.innerText.slice(1) + +defaultPrice[0].price;

                totals.innerText = "$" + +newtotal.toFixed(2);
            })


            minusBtn.addEventListener("click", function (e) {
                rowIndex = rowIndex - 1
                console.log("thismis rowIndexminus", rowIndex)
                const defaultPrice = items.filter(item => item.name === items[i].name)
                count.innerText = +count.innerText - 1;
                const decreasePrice = +amount.innerText.slice(1) - +defaultPrice[0].price;
                amount.innerText = '$' + decreasePrice.toFixed(2);

                const newtotal = +totals.innerText.slice(1) - +defaultPrice[0].price;

                totals.innerText = "$" + +newtotal.toFixed(2);


                if (+count.innerText < 1) {
                    newRow.remove();
                    buttons[i].textContent = "Add To Cart";
                }

                if (rowIndex < 0) {
                    e.target.parentElement.parentElement.parentElement.remove()
                    showCart.style.visibility = "hidden";
                }
            })
            exBtn.addEventListener("click", function (e) {
                rowIndex = rowIndex - 1
                console.log("rowindexex==>", rowIndex)
                e.target.parentElement.parentElement.parentElement.remove()
                buttons[i].textContent = "Add To Cart";
                
                const totals = document.getElementById("total");
                const defaultPrice = items.filter(item => item.name === items[i].name)
                const minus = +totals.innerText.slice(1) - +amount.innerText.slice(1)
                totals.innerText = "$" + +minus.toFixed(2);

                if (table.rows.length < 1) {
                    e.target.parentElement.parentElement.parentElement.remove()
                    showCart.style.visibility = "hidden";
                }

            })


            const clear = document.getElementById("clear")
            clear.addEventListener("click", function (e) {
                buttons[i].textContent = "Add To Cart";
                let del = e.target.parentElement.parentElement.getElementsByTagName("tr")
                for (let i = 0; i < del.length; i++) {
                    del[i].innerHTML = "";
                    const totals = document.getElementById("total");
                    totals.innerText = 0.00;
                    showCart.style.visibility = "hidden";

                }
            })



        } else { buttons[i].style.backgrondColor = "rgb(218, 218, 236);" }
    })



}





