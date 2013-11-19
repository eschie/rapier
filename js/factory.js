app.factory("MainFactory", function ( $http ) {
	var factory = {
		results:[],
		
		getResults: function ( query, sort, time ) {
			var q, l, s, t, url;
			q = query;
			l = 10;
			s = sort;
			t = time;
			url = 	"http://www.reddit.com/search/.json" + 
					"?q=" + q + 
					"&limit=" + l + 
					"&sort=" + s +
					"&t=" + t +
					"&jsonp=JSON_CALLBACK ";

			return $http.jsonp( url ).success(function ( data ) {
				var robj = data.data.children;
				for (var i = 0, l = robj.length; i < l; i++) {
				    item = robj[i];
				    for (var key in item) {
				        if (key !== "data" && item.data) {
				            item.data[key] = item[key];
				        }
				    }
				    robj[i] = item.data || item;
				}
				factory.results = robj;
			});
		}
	};
	return factory;
});