

$(".searchBtn").on("click", function () {
    event.preventDefault()
    var ingredient = $("#searchTerm").val();
    var numResults = $("#numRecipes").val();
    const apiKey = "&apiKey=b159b41ff9234e75bdc4a617a3838577";
    var queryUrl = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + ingredient + "&number=" + numResults + apiKey;
    console.log(queryUrl)
    //https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples&number=2&apiKey=b159b41ff9234e75bdc4a617a3838577
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            event.preventDefault();
            

        });
});

//define variables
//link ajax/api
//search functionality
//button functionality