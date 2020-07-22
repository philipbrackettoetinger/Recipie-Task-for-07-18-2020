

$(".submit").on("click", function () {
    event.preventDefault()
    var ingredient = $("#ingredient").val();
    var ingredientTwo = $("#ingredientTwo").val();
    var ingredientThree = $("#ingredientThree").val();
    var numResults = $("#numRecipes").val();
    const apiKey = "&apiKey=b159b41ff9234e75bdc4a617a3838577";
    var queryUrl = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + ingredient + ",+" + ingredientTwo + ",+" + ingredientThree + "&number=" + numResults + apiKey;
    console.log(queryUrl)
    //https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples&number=2&apiKey=b159b41ff9234e75bdc4a617a3838577
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            console.log(response[0].image)
            console.log()
            event.preventDefault();
            
            createCards(response)
            createRecipe(response)
        });
});

function createCards(){

}
function createRecipe(){

}

//define variables
//link ajax/api
//search functionality
//button functionality