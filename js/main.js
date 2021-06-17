const APIURL = "https://covid19.mathdro.id/api";
let app = angular.module("Myapp",[]);

app.controller("Mycontroller",function($scope , $http){
    $scope.title = "Stay Home Stay Secure";
    $scope.btn = "दो गज की दूरी, मास्क है जरूरी";
    $scope.imgs = "img/stay-at-home.png";
    // Button Click Event
    $scope.change=function(){
        $scope.title = $scope.btn;
        $scope.imgs = "img/patient.png";
    }

    //Api Called

    $http.get(APIURL).then( function(response){
        //success

        // console.log(response.data);

        $scope.all_data = response.data;



    } , function(error){
        //Error

        console.log(response);

    } );

    //Api Called For Countries

    $scope.country_name = function(){
        let cname = $scope.country;
        if(cname=="")
        {
            return undefined;
        }

        $http.get(`${APIURL}/countries/${cname}`).then( function(response){
            //Success
            $scope.country_data = response.data

        } , function(error){
            //Error

            console.log(error);
        } );
    }

    // $http(`${APIURL}/countries/`)
});