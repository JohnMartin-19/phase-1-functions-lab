// Code your solution in this file!

function distanceFromHqInBlocks(val){
    devide = val/val;
    console.log(devide);
};
distanceFromHqInBlocks(43);

function distanceFromHqInBlocks(location){
    noOfBlocks = location % 42;
    return noOfBlocks;
    //console.log(noOfBlocks)
}
distanceFromHqInBlocks(50);

function distanceFromHqInFeet(noOfBlocks){
   function distanceFromHqInBlocks(location){
        noOfBlocks = location % 42;
        feet = noOfBlocks*264
        //return noOfBlocks;
       // return feet;
       console.log(noOfBlocks);
       console.log(feet)
        
    };
    distanceFromHqInBlocks(50);
};
distanceFromHqInFeet();

function distanceTravelledInFeet(start, stop){
    distance = (stop-start)*264
    console.log(distance)
}
distanceTravelledInFeet(34,38);

function farePrice(start, stop){
    dist = (stop-start)*264
    console.log(dist)
    if (dist < 400){
        console.log('Free Ride bro!');
    } else if (dist > 400 && dist < 2000){
        price = (dist - 400)*2
        console.log(price +'cents');
    } else if (dist > 2000 && dist < 2500){
        console.log('Flat fare');
    } else {
        console.log('We dont go that far')
    };
};
farePrice(1,16);