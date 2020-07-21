

$(".searchBtn").on("click", function () {
    event.preventDefault()
    var ingredient = $("#searchTerm").val();
    var numResults = $("#numRecipes").val();
    const apiKey = "&apiKey=b159b41ff9234e75bdc4a617a3838577";
    var queryUrl = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + ingredient + "&number=" + numResults + apiKey;
    //https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples&number=2&apiKey=b159b41ff9234e75bdc4a617a3838577
    console.log(queryUrl);
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        .then(function (response) {
            event.preventDefault
            console.log(response);

        });
});

//define variables
//link ajax/api
//search functionality
//button functionality