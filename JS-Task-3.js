
let myArray = [];
let counter = 0;

let myFunction = function(x){

	for(counter = 1; counter <= x; counter++){

		if(counter % 2 == 0){
			myArray[counter-1] = "yu";

			if(counter % 3 == 0){
				myArray[counter-1] = myArray[counter-1] + "-gi";

				if(counter % 5 == 0){
					myArray[counter-1] = myArray[counter-1] + "-oh";
				}
			}
		}else if(counter % 3 == 0){
					myArray[counter-1] = "gi";

					if(counter % 5 == 0){
						myArray[counter-1] = myArray[counter-1] + "-oh";
					}
				}else if(counter % 5 == 0){
						myArray[counter-1] = "oh";
					  }else{
						myArray.push(counter);
					  }


	}

	return myArray;
}

	
myFunction(100);

myFunction(50);