function carsFilter() {


    function filter(x, make) {
        if (!(make == "") && !(x == "")) {

            const url = 'http://api-tutor.herokuapp.com/v1/cars/make/'+ make +'/color/'+ x;
            console.log(url);
            return url;

        } else if (!(x == "") && (make == "")) {
            return 'http://api-tutor.herokuapp.com/v1/cars/color/?' + x
        }
        else if (!(make == "") && (x == "")) {

            return 'http://api-tutor.herokuapp.com/v1/cars/make/?' + make

        }

    }

    return {
        filter,

    }


}