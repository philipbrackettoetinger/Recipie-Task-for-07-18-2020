document.addEventListener('DOMContentLoaded', function () {
    const apiKey = "&apiKey=b159b41ff9234e75bdc4a617a3838577";
    var queryUrl = "https://api.spoonacular.com/recipes/complexSearch?query=apple,sugar,dessert&addRecipeInformation=true&number=5" + apiKey;
    bulmaCarousel.attach('#slider', {
        slidesToScroll: 1,
        slidesToShow: 3,
        infinite: true,
    });
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        .then(function (response) {
            console.log(response)
            createRecipe(response);
            createCards(response);
        })
});

$(".submit").on("click", function () {
    event.preventDefault()

    var ingredient = $("#ingredient").val() + ",";
    var ingredientTwo = $("#ingredientTwo").val() + ",";
    var ingredientThree = $("#ingredientThree").val();
    var numResults = $("#numRecipes").val();
    const apiKey = "&apiKey=b159b41ff9234e75bdc4a617a3838577";
    var queryUrl = "https://api.spoonacular.com/recipes/complexSearch?query=" + ingredient + ingredientTwo + ingredientThree + "&addRecipeInformation=true&number=" + numResults + apiKey;
    console.log(queryUrl)
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            
            //clearForm(response);
            createCards(response);
            createRecipe(response);
           
        })
});


function createRecipe(response) {
    var image = $("<img>").attr("src", "https://spoonacular.com/recipeImages/" + response.results[0].id + "-312x231.jpg")
    var title = $("<h1>").addClass("title").text(response.results[0].title)
    var sourceURL = $("<a>").text(response.results[0].sourceUrl)
    var step1 = $("<li>").text(response.results[0].analyzedInstructions[0].steps[0].step)
    console.log(response.results[0].analyzedInstructions[0].steps[0].step)
    console.log(step1)
    var step2 = $("<li>").text(response.results[0].analyzedInstructions[0].steps[1].step)
    var step3 = $("<li>").text(response.results[0].analyzedInstructions[0].steps[2].step)
    var step4 = $("<li>").text(response.results[0].analyzedInstructions[0].steps[3].step)

    $("#recipeList").append(step1)
    $("#recipeList").append(step2)
    $("#recipeList").append(step3)
    $("#recipeList").append(step4)

    $(".recipeCard").append(image)
    $(".recipeCard").prepend(sourceURL)
    $(".recipeCard").prepend(title)
    

}

function createCards(response) {
    var cardOne = $("<img>").attr("src", "https://spoonacular.com/recipeImages/" + response.results[1].id + "-312x231.jpg")
    var cardTwo = $("<img>").attr("src", "https://spoonacular.com/recipeImages/" + response.results[2].id + "-312x231.jpg")
    var cardThree = $("<img>").attr("src", "https://spoonacular.com/recipeImages/" + response.results[3].id + "-312x231.jpg")
    var cardFour = $("<img>").attr("src", "https://spoonacular.com/recipeImages/" + response.results[4].id + "-312x231.jpg")
    console.log(cardOne)
    $("#cardOne").append(cardOne)
    $("#cardTwo").append(cardTwo)
    $("#cardThree").append(cardThree)
    $("#cardFour").append(cardFour)
}


//define variables
//link ajax/api
//search functionality
//button functionality