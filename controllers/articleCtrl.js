
app.controller('articleCtrl',function($scope){

//$scope.head="hi from php";

$scope.articles=[];

var data=document.getElementsByTagName('article');

var all = document.querySelectorAll("article");

var cls=angular.element(document.querySelector('h3.title'));

//var id=angular.element(document.getElementById('some'));

//cls.innerHTML="hi how are you";
console.log("classss");
console.log(cls.innerHTML);


console.log("data "+data);
console.log(data);
console.log(data.length);
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);


console.log(data[3]);



console.log("all "+all);
console.log(all);
console.log(all.length);




 //console.log("article1[0].h3: clss "+data[0].getElementsByTagName("h3")[0].className);

for(var i=0;i<data.length;i++)
{
  console.log("article1[0].h3: "+data[i].getElementsByTagName("h3")[0].innerHTML);
 
//console.log($scope.data);
console.log("data length: "+data.length);
console.log("id: "+data[i].id);

var article ={

    id: data[i].id,
    title: data[i].getElementsByTagName("h3")[0].innerHTML
};

$scope.articles.push(article);

}

console.log($scope.articles);


//console.log($scope.data[0].h3);


//document.getElementById("demo").innerHTML = "some datadasds";
});