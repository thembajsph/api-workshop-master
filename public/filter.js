const filteredCarList = document.querySelector('.filteredCars');
const filterBtn = document.querySelector('.filterBtn');


// get the template text from the dom 
const filteredCarsTemplateText = document.querySelector('.filteredCarsTemplate').innerHTML


//compile the template 
const filteredCarsTemplate = Handlebars.compile(filteredCarsTemplateText);


var carsFilter = carsFilter();

const color = document.querySelector(".colorSelect");
const make = document.querySelector(".makeSelect");


filterBtn.addEventListener('click', function () {


    var selectedColor = color.value;  // color.options[color.selectedIndex].value;
    var selectedMake = make.value;

    console.log(selectedColor);
    console.log(selectedMake);


    var filterUrl = carsFilter.filter(selectedColor, selectedMake);

    axios
        .get(filterUrl)
        .then(function (result) {

            filteredCarList.innerHTML = filteredCarsTemplate({
                filteredCars: result.data
            })

        })

});
