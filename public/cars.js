
// get the place to put the list items
const brandsMakes = document.querySelector('.brands');
const colorList = document.querySelector('.colors')
const allCars = document.querySelector('.cars');




// get the template text from the dom 
const brandsTemplateText = document.querySelector(".brandsTemplate").innerHTML;
const carsTemplateText = document.querySelector(".carsTemplate").innerHTML;
const colorTemplateText = document.querySelector(".colorTemplate").innerHTML;


//compile the template 
const brandsTemplate = Handlebars.compile(brandsTemplateText)
const carsTemplate = Handlebars.compile(carsTemplateText)
const colorTemplate = Handlebars.compile(colorTemplateText)


// get the data in the browser
axios
    .get("http://api-tutor.herokuapp.com/v1/makes")
    .then(function (result) {

        //display the list of cars the screen using a template
        brandsMakes.innerHTML = brandsTemplate({
            makes: result.data

        })

    });

axios
    .get("http://api-tutor.herokuapp.com/v1/colors")
    .then(function (result) {

        //display the list of color of the cars the screen using a template
        colorList.innerHTML = colorTemplate({
            colorings: result.data
        });

    });

axios
    .get("http://api-tutor.herokuapp.com/v1/cars")
    .then(function (result) {

        //display the list of color of the cars the screen using a template
        allCars.innerHTML = carsTemplate({
            groupCars: result.data

        });
    });










