app.controller("MainController", function ( $scope, MainFactory ) {
	var changed = false;
	$scope.results = [];
	$scope.inputValue = "Search...";
	$scope.time = {
		"type": "select",
		"name": "time",
		"val": "all",
		"values": ["all", "hour","day","week","month","year"]
	};
	$scope.sort = {
		"type": "select",
		"name": "sort",
		"val": "relevance",
		"values": ["relevance", "new","hot","top","comments"]
	};
	var dump = function(){
		$scope.results = MainFactory.results;
	}
	var typeDelay = (function() {
		var timer = 0;
		return function(cb, ms){
			clearTimeout(timer);
			timer = setTimeout(cb, 500);
		};
	})();
	$scope.fetch = function () {
		if (changed === true) {
			var query = $scope.inputValue,
			sort = $scope.sort.val,
			time = $scope.time.val;

			typeDelay( function() {
				MainFactory.getResults(query,sort,time).success(dump)
			});
		}
	}
	$scope.reset = function (){
		$scope.inputValue = "";
		changed = true;
	}
});