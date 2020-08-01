document.addEventListener('DOMContentLoaded', function () {
    const apiKey = "&apiKey=b159b41ff9234e75bdc4a617a3838577";
    //const apiKey = "&apiKey=23073b038fc94f08905f8a9a9475ad67";
    var queryUrl = "https://api.spoonacular.com/recipes/complexSearch?query=apple,sugar,dessert&addRecipeInformation=true&number=6" + apiKey;
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        .then(function (response) {
            createRecipe(response, true);
            createCards(response);
        })
});

$(".submit").on("click", function () {
    event.preventDefault()
    clearRecipe();
    clearCards();
    var ingredient = $("#ingredient").val() + ",";
    var ingredientTwo = $("#ingredientTwo").val() + ",";
    var ingredientThree = $("#ingredientThree").val();
    const apiKey = "&apiKey=b159b41ff9234e75bdc4a617a3838577";
    //const apiKey = "&apiKey=23073b038fc94f08905f8a9a9475ad67";
    var queryUrl = "https://api.spoonacular.com/recipes/complexSearch?query=" + ingredient + ingredientTwo + ingredientThree + "&addRecipeInformation=true&number=6" + apiKey;
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        .then(function (response) {
    

          
            createRecipe(response, true);
            createCards(response);
        })
});

function clearRecipe() {
    $(".mainImage").attr("src", "");
    $(".mainTitle").empty();
    $(".mainLink").empty();
    $("#stepList").empty();
    $("#ingredientList").empty();
}
function clearCards(){
    $(".slider-item").empty()
    //$(".item__title").empty();
}


function createRecipe(response, isinitial) {
    if (isinitial){
        response = response.results[0]
    }
    var image = $("<img>").addClass("mainImage").attr("src", "https://spoonacular.com/recipeImages/" + response.id + "-312x231.jpg")
    var title = $("<h1>").addClass("mainTitle").text(response.title)
    var sourceUrl = $("<a>").addClass("mainLink").text(response.sourceUrl)
    $(".recipeCard").prepend(image)
    $(".recipeCard").prepend(sourceUrl)
    $(".recipeCard").prepend(title)

    var steps;
    var ingredients;

    if(response.analyzedInstructions) {
        steps = response.analyzedInstructions[0].steps
    } else {
        steps = response.stepList
    }

    if(response.analyzedInstructions && response.analyzedInstructions[0].steps[0].ingredients) {
        ingredients = response.analyzedInstructions[0].steps[0].ingredients
    } else {
        ingredients = response.ingredientsList
    }

    for (let i = 0; i < steps.length; i++) {
        var step1 = $("<li>").text(steps[i].step)
        $("#stepList").append(step1)
    }

    for (let i = 0; i < ingredients.length; i++) {
        var ingredient1 = $("<li>").text(ingredients[i].name)
        $("#ingredientList").append(ingredient1)


    }
}


function createCards(response) {

    
    var cardsArray = []
    console.log(cardsArray)


    for (let i = 0; i < response.results.length; i++) {


        var ingredientsList = []
        response.results[i].analyzedInstructions[0].steps.filter(function (step) {
            ingredientsList = ingredientsList.concat(step.ingredients);
        })

        var stepList = []
        response.results[i].analyzedInstructions[0].steps.filter(function (steps) {
            stepList = stepList.concat(steps);
        })

        var cards = {
            title: response.results[i].title,
            id: response.results[i].id,
            sourceUrl: response.results[i].sourceUrl,
            stepList: stepList,
            ingredientsList: ingredientsList
        };
        cardsArray.push(cards);


    }

    for (var j = 0; j < cardsArray.length; j++) {
        let card = $("<div>");
        var card_object = cardsArray[j];
        card.html(
            `<div class="card">
                <div class="card-image">
                    <figure class="image is-16by9 is-covered">
                        <img class="cardImage" src="https://spoonacular.com/recipeImages/${card_object.id}-312x231.jpg">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="item__title">
                        <h4 class="items">${card_object.title}</h4>
                    </div>
                </div>
            </div>`
        );
        $('#slider').append(card);
    }
    
    bulmaCarousel.attach('#slider', {
        slidesToScroll: 1,
        slidesToShow: 6,
        infinite: false,
        
    });

    $('.card').each(function(index) {
        $(this).on("click", function() {
            clearRecipe()
            console.log(card_object)
            createRecipe(cardsArray[index],false)
           
        })
       
    })
       
    

    }


//$("#slider").on("click", function (event) {
  //
//})
        /*
        var image = $("<img>").addClass("mainImage").attr("src", "https://spoonacular.com/recipeImages/" + response.results[0].id + "-312x231.jpg")
        var title = $("<h1>").addClass("title").text(response.results[0].title)
        var sourceUrl = $("<a>").addClass("mainLink").text(response.results[0].sourceUrl)
        $(".recipeCard").prepend(image)
        $(".recipeCard").prepend(sourceUrl)
        $(".recipeCard").prepend(title)
        var ingredientsList = []
        response.results[0].analyzedInstructions[0].steps.filter(function (step) {
            ingredientsList = ingredientsList.concat(step.ingredients)
    
        })
        for (let i = 0; i < response.results[0].analyzedInstructions[0].steps.length; i++) {
            var step1 = $("<li>").text(response.results[0].analyzedInstructions[0].steps[i].step)
            $("#stepList").append(step1)
        }
    
        for (let i = 0; i < response.results[0].analyzedInstructions[0].steps[0].ingredients.length; i++) {
            var ingredient1 = $("<li>").text(response.results[0].analyzedInstructions[0].steps[0].ingredients[i].name)
            $("#ingredientList").append(ingredient1)
    
    
        }
        */
   

    // loop and build and append






