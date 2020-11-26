// get the place to put the list items
const brandList = document.querySelector('.brands');

// get the template text from the dom 
const carsTemplateText = document.querySelector(".carsTemplate").innerHTML;

//compile the template 
const carsTemplate = handlebars.compile(carsTemplateText)

// get the data in the browser
axios

    .get("http:api-tutor.herokuapp.com/v1/makes")
    .then(function (result) {
        //display the list of cars the screen using a template

        brandList.innerHTML = carsTemplate({
            cars: result.data

        })

       

        })
        



    });

