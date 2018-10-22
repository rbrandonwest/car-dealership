// $( document ).ready(function() {
//     console.log( "ready!" );

//     $("button").click(carSearch());
// });



var cars = [
    { make: "BMW", model: "M5", cost: "103,595"},
    { make: "Audi", model: "A6", cost: "49,700"},
    { make: "Volkswagen", model: "Golf GTI", cost: "25,595"},
    { make: "Tesla", model: "Roadster", cost: "200,000"},
    { make: "Toyota", model: "Corolla", cost: "18,550"}
];

window.addEventListener('load', fillTable);

function carSearch() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("filterCars");
    filter = input.value.toUpperCase();
    table = document.getElementById("carTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


function fillTable() {
    for (let i = 0; i < cars.length; i++) {
        switch(cars[i]) {
            case cars[0]:
                document.getElementById('make1').innerHTML = cars[0].make;
                document.getElementById('model1').innerHTML = cars[0].model;
                document.getElementById('cost1').innerHTML = "$" + cars[0].cost;
                break;
            case cars[1]:
                document.getElementById('make2').innerHTML = cars[1].make;
                document.getElementById('model2').innerHTML = cars[1].model;
                document.getElementById('cost2').innerHTML = "$" + cars[1].cost;
                break;
            case cars[2]:
                document.getElementById('make3').innerHTML = cars[2].make;
                document.getElementById('model3').innerHTML = cars[2].model;
                document.getElementById('cost3').innerHTML = "$" + cars[2].cost;
                break;
            case cars[3]:
                document.getElementById('make4').innerHTML = cars[3].make;
                document.getElementById('model4').innerHTML = cars[3].model;
                document.getElementById('cost4').innerHTML = "$" + cars[3].cost;
                break;
            case cars[4]:
                document.getElementById('make5').innerHTML = cars[4].make;
                document.getElementById('model5').innerHTML = cars[4].model;
                document.getElementById('cost5').innerHTML = "$" + cars[4].cost;
                break;
        }
    }
}

function costTax(cost) {
    // console.log(cost);
    var costArr = cost
        .split("")
        .filter(item => item !== ",")
        .join("");
        
    var num = parseInt(costArr);
    console.log(num)
    document.getElementById("appendModal").innerHTML = "$" + (num * 1.08);
}

// document.getElementById("myBtn5").addEventListener("click", costTax(cars[4].cost));
    // console.log("Hello")

// document.getElementById("taxModal").innerHTML = cost * 1.06;


// var modal = document.getElementById("taxModal");
// var btn1 = document.getElementById("myBtn");
// var btn2 = document.getElementById("myBtn2");
// var btn3 = document.getElementById("myBtn3");
// var btn4 = document.getElementById("myBtn4");
// var btn5 = document.getElementById("myBtn5");
// var span = document.getElementsByClassName("close")[0];

// btn1.onclick = function() {
//     modal.style.display = "block";
// }

// btn2.onclick = function() {
//     modal.style.display = "block";
// }

// btn3.onclick = function() {
//     modal.style.display = "block";
// }

// btn4.onclick = function() {
//     modal.style.display = "block";
// }

// btn5.onclick = function() {
//     modal.style.display = "block";
// }

// span.onclick = function() {
//     modal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


// $(".btn-5").on('click'() => {
//     $("div.modal-body").append( "<h3>Test</h3>" );
// });
