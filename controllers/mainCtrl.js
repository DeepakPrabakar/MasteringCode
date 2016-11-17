//var app=angular.module('masteringcode',['ngRoute']);
var app=angular.module('masteringcode',['ngRoute']);
/*var $scope, $location;*/
//app.angular.module('scrollSpyPlunk', ['myDirectives', 'ui.bootstrap']);



app.config(function($routeProvider){

console.log("in mainctrljs");
	$routeProvider

	// left nav
	.when('/About',{
    templateUrl: "templates/about.html"
  })
  .when('/Blog',{
    templateUrl: "templates/blog.html"
  })

// sidebar
	.when("/Home",{
    templateUrl:"templates/home.html"
    
  })
  .when("/Instore",{
    templateUrl:"templates/instore.html"
    
  })

	.when('/Progress',{
    templateUrl:"templates/progress.html",
    controller:"progressCtrl"
  })
  .when('/ProgressDynamic',{
    templateUrl:"templates/progressDynamic.html",
    controller:"progressCtrl"
  })

	.when('/WebDev',{
		templateUrl:"templates/webDevTools.html"

	})
	.when('/CodeSeries',{
		templateUrl:"templates/codeSeries.html",
		controller: "codeSeriesCtrl"
	})
	.when('/CodeFixes',{
		templateUrl:"templates/codeFixes.html"

	})
	.when('/CodeBlogs',{
		templateUrl:"templates/codeBlogs.html"
		
	})
	.when('/Build_Deployment',{
		templateUrl:"templates/buildDeployment.html",
		controller:"jsonCtrl"
		
	})
	.when('/Findings',{
    templateUrl:"templates/findings.html",
    controller: "findingsCtrl"
    
  })

  .when('/Optimisation',{
    templateUrl:"templates/optimisation.html"
    
  })
  .when('/TechnologyStacks',{
    templateUrl:"templates/technologyStacks.html"
    
  })

.when('/SampleArticle',{
    templateUrl:"templates/SampleArticle.html"
    
  })
.when('/SampleArticleWithJSON',{
    templateUrl:"templates/SampleArticleWithJSON.html",
    controller: "jsonCtrl"
  })









//right nav
  .when('/HTML-CSS',{
    templateUrl:"templates/htmlCss.html"
  })
  .when('/Git',{
    templateUrl:"templates/git.html"
  })
  .when('/NodeJS',{
    templateUrl:"templates/nodeJS.html"
  })
	.when('/Angular',{
		templateUrl:"templates/angular.html"
	})
	.when('/Javascript',{
		templateUrl:"templates/javascript.html",
			controller: "jsonCtrl"
	})
	.when('/SQL',{
    templateUrl:"templates/sql.html"
  })
  .when('/Oracle',{
    templateUrl:"templates/sql_Oracle.html"
  })
  .when('/SQLServer',{
    templateUrl:"templates/sql_SQLServer.html"
  })
  .when('/MySQL',{
    templateUrl:"templates/sql_MySQL.html"
})
	.when('/HackerRank',{
    templateUrl:"templates/hackerRank.html"
  })
  .when('/HackerRankSql',{
    templateUrl:"templates/hackerRankSql.html"
  })
  .when('/HackerRankAlgorithms',{
    templateUrl:"templates/hackerRankAlgorithms.html"
  })
  .when('/HackerRankJava',{
    templateUrl:"templates/hackerRankJava.html"
  })
  .when('/HackerRankDataStructures',{
    templateUrl:"templates/hackerRankDataStructures.html"
  })
  .when('/HackerRankRegex',{
    templateUrl:"templates/hackerRankRegex.html"
  })
  

	.when('/JAVA',{
		templateUrl:"templates/java.html"
	})
	.when('/PHP',{
		templateUrl:"templates/php.html"
	})
	.when('/Python',{
		templateUrl:"templates/python.html"
	})





	.when('/Reports',{
		templateUrl: "dashboard.html"
	})
	.when('/Images',{
		templateUrl: "imageDisplay.html",
		controller: "imageCtrl"

	})
	
	/*.otherwise({
		//templateUrl:"../templates/home.html"
		redirectTo: "/Home"
	});
*/


	/*.when("/",{
		tmeplate:"<h1>home page</h1>"
	});*/

});


/*app.controller('phpCtrl',function($scope){

//$scope.head="hi from php";

$scope.articles=[];

var data=document.getElementsByTagName('article');

console.log(data);
 console.log("article1[0].h3: clss "+data[0].getElementsByTagName("h3")[0].className);

for(var i=0;i<data.length;i++)
{
  console.log("article1[0].h3: "+data[i].getElementsByTagName("h3")[0].innerHTML);
 
//console.log($scope.data);
//console.log($scope.data.length);
console.log("id"+data[i].id);

var article ={

    id: data[i].id,
    title: data[i].getElementsByTagName("h3")[0].innerHTML
};

$scope.articles.push(article);

}

console.log($scope.articles);


//console.log($scope.data[0].h3);


//document.getElementById("demo").innerHTML = "some datadasds";
});*/

app.controller('progressCtrl',['$scope','$http',function($scope,$http){

/*$scope.msg="head";

//getdata;

$scope.tasks=[
        {
          id:1,
          title:"Complete Javascript",
          checked: true,
        },
      {
          id:2,
          title:"Complete Java",
          checked: false,
        }

];*/

$scope.taskLength=100;
var taskId=document.getElementById("task");

taskId.addEventListener("input",function(){
//console.log(taskId.value.length);
$scope.taskLength=100-taskId.value.length;

});
console.log(taskId);


$scope.completeTask = function(task)
{
  console.log(task.id);
  console.log("in task");
  $http.post("database/updateTask1.php",task)
       .then(function(data, status, headers, config) {
        //success
         console.log("completed ");
         getdata5();
         
    }, function(data, status, headers, config) {
          console.log("errorrrrrr inserted adfter insertdata in add");
          //an error occurred 
    });
//console.log($scope.tasks[index]);


}

var getdata= function(){

  console.log("getdata called");
        $http.get("database/getTasks.php")
            .success(function(data){
        $scope.tasks1 = data;
        console.log("data fetched");
        console.log(data);
      })
       .error(function(data) {
          $scope.tasks1 = "error in fetching data";
         console.log(data);
          
        });

}

$scope.da=new Date();

var count=function(){
  console.log("count called");

  for(var i=0;i<$scope.tasks5.length;i++)
  {
    console.log(i);
  //  if($scope.tasks5[i].CompletedOn==null)$scope.remainingTasks++;
   // else $scope.completedTasks++;
  }
  console.log($scope.remainingTasks);
  console.log($scope.completedTasks);

}


var getdata5= function(){

  console.log("getdata called");
        $http.get("database/getTasks5.php")
            .success(function(data){
        $scope.tasks5 = data;
        console.log("data fetched from ge5");
        console.log($scope.tasks5.length);
        var length=$scope.tasks5.length;
        console.log(length);
        $scope.remainingTasks=0;
        $scope.completedTasks=0;
          for(var i=0;i<$scope.tasks5.length;i++)
    {
   //   console.log(i);
  // console.log($scope.tasks5[i].completedOn);
      if($scope.tasks5[i].completedOn==null)$scope.remainingTasks++;
      else $scope.completedTasks++;
    }
      console.log($scope.remainingTasks);
  console.log($scope.completedTasks);
     //   console.log(data);

       /* console.log("4");
        console.log($scope.tasks5[4].AddedOn);
        console.log($scope.tasks5[4].AddedOn);

        $scope.dat=new Date($scope.tasks5[4].AddedOn);
        console.log("date");
        console.log($scope.dat);


//JavaScript
//$scope.js_date_str = $scope.tasks5[3].AddedOn.substr(0,10)+'T'+$scope.tasks5[3].AddedOn.substr(11,8);

console.log($scope.js_date_str);*/
      })
       .error(function(data) {
          $scope.tasks5 = "error in fetching data";
         console.log(data);
          
        });

}
getdata();
getdata5();
//count();





/*$scope.update=function(data,index){

console.log("updated "+index);
console.log("id: "+data.id);
console.log("id: "+data);
//data.completed=new Date();
//console.log("id: "+data.completed);


//$scope.tasks[index].completed=new Date();


$http.post("database/updateTask.php",data)
       .then(function(data, status, headers, config) {
        //success
         console.log("inserted");
         getdata();
         
    }, function(data, status, headers, config) {
          console.log("errorrrrrr inserted adfter insertdata in add");
          //an error occurred 
    });
//console.log($scope.tasks[index]);
};*/


 
 /*$scope.addTask1=function(data){
    console.log("in add1");
    console.log("name "+data.title);
    console.log("data "+data);
//$scope.tasks1.push($scope.task);

  //  $scope.list1.push($scope.data);

//console.log($scope.successMsg);

  // $scope.successMsg="false";
  // $scope.indexList.push(data);
  // console.log(data);
  // alert("inserted");
  
  $http.post("database/putTask1.php",data)
       .then(function(data, status, headers, config) {
        //success
         console.log("inserted");
         
    }, function(data, status, headers, config) {
          console.log("errorrrrrr inserted adfter insertdata in add");
          //an error occurred 
    });

      $scope.task="";

       //$scope.ret();
//       console.log("ret called");
   

   }*/

$scope.deleteTask=function(task)
{
  console.log("id: ",task.id);

   $http.post("database/deleteTask.php",task)
       .then(function(data, status, headers, config) {
        //success
         console.log("deleted");
      /*   console.log(data);
         console.log(status);
         console.log(headers);
         console.log(config);

     */      getdata5();
         
    }, function(data, status, headers, config) {
          console.log("errorrrrrr inserted adfter insertdata in add");
          //an error occurred 
    });
}


 $scope.addTask=function(task){
    console.log("in add");
    console.log("name "+task.task);
    console.log("data "+task);
//$scope.tasks1.push($scope.task);

  //  $scope.list1.push($scope.data);

//console.log($scope.successMsg);

  // $scope.successMsg="false";
  // $scope.indexList.push(data);
  // console.log(data);
  // alert("inserted");
  
  $http.post("database/putTask1.php",task)
       .then(function(data, status, headers, config) {
        //success
         console.log("inserted");
      /*   console.log(data);
         console.log(status);
         console.log(headers);
         console.log(config);

     */      getdata5();
     $scope.task="";
         
    }, function(data, status, headers, config) {
          console.log("errorrrrrr inserted adfter insertdata in add");
          //an error occurred 
    });

   //   $scope.task="";

       //$scope.ret();
//       console.log("ret called");
   

   }



/*$scope.add=function(name){

var task= {
          id:3,
          title:name,
          checked: false,
        };

console.log("in add "+name);

$scope.tasks.push(task);


};*/
 





}]);

/*app.controller('codeSeriesCtrl',function($scope,$http){

var get = $http.get('json/CodeSeries/codeSeries.json')
				.success(function(data){
					$scope.links=data;
					console.log("CodeSeries data:"+data);
				})
				.error(function(data){
						console.log(data);
				});
});*/


// app.controller('jsonCtrl',function($scope,$http){
//$scope.jsonData="aaaaaaaa";


/*$http.get('json/tabContent.json')
	.success(function(data){
        $scope.tabContent=data;
       // console.log($scope.tabContent);
        console.log("data fetched");
        console.log(data);
      })
       .error(function(data) {
       //   $scope.tabContent = "error in fetching data";
        // console.log($scope.tabContent);
          console.log(data);
        });


$http.get('json/code.json')
	.success(function(data){
        $scope.code=data;
       // console.log($scope.tabContent);
        console.log("data fetched");
        console.log(data);
      })
       .error(function(data) {
       //   $scope.tabContent = "error in fetching data";
        // console.log($scope.tabContent);
          console.log(data);
        });



});*/

/*app.controller('homeCtrl',function($scope){

	$scope.msg="hi from homeCtrl";

	console.log("home");
});


app.controller('mainCtrl',function($scope){

	$scope.head="hi from mainCtrl";

	console.log("hiii");
});

app.controller('imageCtrl',function($scope,$http){

$scope.head="hi in imagectlr";

	var sampledata=$http.get('sample1.json')
					.success(function(data){
						$scope.sample=data;
							console.log($scope.sample);
						console.log("retrieved");
					})
					.error(function(){
							console.log("not retrieved");
					});

					console.log(sampledata);




});*/


//var app = 
//angular.module('scrollSpyPlunk')
/*app.controller('scrollSpyCtrl', function ($scope, $anchorScroll)
{

});*/


/*app.directive('showTab', function () {
    return {
        link: function (scope, element, attrs) {
            element.click(function (e) {
                e.preventDefault();
                jQuery(element).tab('show');
                
            });
        }
    };
});*/


///////

/*

app.service('anchorSmoothScroll', function(){
    
    this.scrollTo = function(eID) {

        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
        
        var startY = currentYPosition();
        var stopY = elmYPosition(eID)-90;

        console.log("start: "+startY);
        console.log("stop "+stopY);

        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        
        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        
        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };
    
});

app.controller('ScrollCtrl', function($scope, $location, anchorSmoothScroll) {
    
    $scope.gotoElement = function (eID){

   //   console.log(eID);
      // set the location.hash to the id of
      // the element you wish to scroll to.
   //   $location.hash('bottom');
 
      // call $anchorScroll()
      anchorSmoothScroll.scrollTo(eID);
      
    };
  });*/
               
/*
               app.directive('scrollSpy', function ($window) {
  return {
    restrict: 'A',
    controller: function ($scope) {
      $scope.spies = [];
      this.addSpy = function (spyObj) {
        $scope.spies.push(spyObj);
      };
    },
    link: function (scope, elem, attrs) {
      var spyElems;
      spyElems = [];

      scope.$watch('spies', function (spies) {
        var spy, _i, _len, _results;
        _results = [];

        for (_i = 0, _len = spies.length; _i < _len; _i++) {
          spy = spies[_i];

          if (spyElems[spy.id] == null) {
            _results.push(spyElems[spy.id] = elem.find('#' + spy.id));
          }
        }
        return _results;
      });

      $($window).scroll(function () {
        var highlightSpy, pos, spy, _i, _len, _ref;
        highlightSpy = null;
        _ref = scope.spies;

        // cycle through `spy` elements to find which to highlight
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          spy = _ref[_i];
          spy.out();

          // catch case where a `spy` does not have an associated `id` anchor
          if (spyElems[spy.id].offset() === undefined) {
            continue;
          }

          if ((pos = spyElems[spy.id].offset().top) - $window.scrollY <= 0) {
            // the window has been scrolled past the top of a spy element
            spy.pos = pos;

            if (highlightSpy == null) {
              highlightSpy = spy;
            }
            if (highlightSpy.pos < spy.pos) {
              highlightSpy = spy;
            }
          }
        }

        // select the last `spy` if the scrollbar is at the bottom of the page
        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
          spy.pos = pos;
          highlightSpy = spy;
        }        

        return highlightSpy != null ? highlightSpy["in"]() : void 0;
      });
    }
  };
});*/

/*app.directive('spy', function ($location, $anchorScroll) {
  return {
    restrict: "A",
    require: "^scrollSpy",
    link: function(scope, elem, attrs, affix) {
      elem.click(function () {
        $location.hash(attrs.spy);
        $anchorScroll();
      });

      affix.addSpy({
        id: attrs.spy,
        in: function() {
          elem.addClass('active');
        },
        out: function() {
          elem.removeClass('active');
        }
      });
    }
  };
});*/


app.directive('ngSyntax', [function() {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {
            element.ready(function() {
                SyntaxHighlighter.highlight(element[0]);
            });
        }
    }
}]);