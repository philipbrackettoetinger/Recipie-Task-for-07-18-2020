

$(".submit").on("click", function () {
    event.preventDefault()
    var ingredient = $("#ingredient").val() +",";
    var ingredientTwo = $("#ingredientTwo").val() + ",";
    var ingredientThree = $("#ingredientThree").val();
    var numResults = $("#numRecipes").val();
    const apiKey = "&apiKey=b159b41ff9234e75bdc4a617a3838577";
    var queryUrl = "https://api.spoonacular.com/recipes/complexSearch?query=" + ingredient + ingredientTwo + ingredientThree +  "&addRecipeInformation=true&number=" + numResults + apiKey;
    console.log(queryUrl)
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            
            //createCards(response);
            createRecipe(response);
        })
});


function createRecipe(response){
    var image = $("<img>").attr("src", "https://spoonacular.com/recipeImages/" + response.results[0].id +"-312x231.jpg")
    console.log(image)
    var title = $("<h4>").text(response.results[0].title)
    var recipeURL = $("<a>").text(response.results[0].sourceURL)
    console.log(recipeURL)
    $(".recipeCard").append(recipeURL)
    $(".recipeCard").append(image)
    $(".recipeCard").prepend(title)

}

//function createCards(){

//}


//define variables
//link ajax/api
//search functionality
//button functionality