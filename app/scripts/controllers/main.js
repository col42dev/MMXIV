'use strict';

/**
 * @ngdoc function
 * @name mmxvApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mmxvApp
 */
angular.module('mmxvApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.romanNumeral = '';
    $scope.decimalNumeral = '';


	$scope.onChange = function () {
	    console.log('Roman numeral to decimal conversions:-');

		var romanToDec = [];
		romanToDec['I'] = 1;
		romanToDec['V'] = 5;
		romanToDec['X'] = 10;
		romanToDec['L'] = 50;
		romanToDec['C'] = 100;
		romanToDec['D'] = 500;
		romanToDec['M'] = 1000;



		var decimalValue = 0;

		var romanCharArray = $scope.romanNumeral.split('');
		romanCharArray.forEach( function (romanChar, index) {		
	 
			// has this char already been summed?
			if ( index > 0) {
				if ( romanToDec[ romanCharArray[index]] > romanToDec[ romanCharArray[index - 1]]) {
					return;
				}
			}

			// add char
			if (( index < romanCharArray.length - 1)  && ( romanToDec[ romanCharArray[index]] < romanToDec[ romanCharArray[index + 1]])) {
				decimalValue += ( romanToDec[ romanCharArray[index + 1]] - romanToDec[ romanCharArray[index]]); // subtractive
			} else {
				decimalValue += romanToDec[romanChar];
			}
		});
		console.log('Roman: ' + $scope.romanNumeral + ' Dec:' + decimalValue);
		$scope.decimalNumeral = decimalValue;

	};

	
  });
