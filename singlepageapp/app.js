
var app=angular.module("myApp",["ngRoute","ngAnimate"]);
 app.config(function($routeProvider){
	$routeProvider
	    .when("/books",{
			templateUrl: 'partials/booklist.html',
			controller:'bookctrl'
		})
		 .when("/kart",{
			templateUrl:'partials/kart.html',
			controller:'kartctrl'
		})
		 .otherwise({
			redirectTo:"/books"
		});
});
app.factory("kartservice",function(){
	var kart=[];
	return{
		getkart:function(){
			return kart;
			},
	   addtokart:function(book)
	   {
		 kart.push(book);  
	   },
	   buy:function(book)
	   {
		    alert("thanks for buying",book.name);
	   }
	  
	}
});
app.factory("bookservice",function(){
var books=[
   {   img:'kid.jpeg',
	   name:'kidnapped',
	   author:'R.l.steve',
	   price:400,
	   details:'thriller story'
   },
   {   img:'harry.jpeg',
	   name:'harry potter',
	   author:'j.k. rowling',
	   price:1200,
	   details:'fantasy story'
	  },
    {   img:'goose.jpeg',
	   name:'goose bumps',
	   author:'R.l.stine', 
	   price:400,
	   details:'thriller story'
	   },
   {
	   img:'apg.jpeg',
	   name:'WINGS OF FIRE',
	   author:'ABDUL KALAM',
	   price:400,
	   details:'Real life  story'
	  }
   
   ];
return {
	getbooks:function(){
		return books;
	}
}   
	
});
app.controller('kartctrl',function($scope,kartservice)
{
	 $scope.kart=kartservice.getkart();
	 $scope.buy=function(book){
		 kartservice.buy(book);
	 }
	
});
app.controller('HeaderCtrl',function($scope){
	 $scope.appDetails={
        title: 'BOOKWORLD',
        tagline: 'WE HAVE THOUSANDS OF BOOK'
    };
});
app.controller('bookctrl',function($scope,bookservice,kartservice){
	
   $scope.books=bookservice.getbooks();
   $scope.addtokart=function(book){
	kartservice.addtokart(book);   
   }
    
   });   
 