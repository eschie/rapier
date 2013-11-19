app.config(function ( $routeProvider ) {
	$routeProvider
		.when("",
			{
				controller: "MainController",
				templateUrl: "partials/View.html"
			});
});