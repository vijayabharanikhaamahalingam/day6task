class Price{
    // getUberPrize gets the distance and return the ride prize
    getUberPrice(distanceInKms){        
        return 50*distanceInKms;
    }
}
const price=new Price()
console.log("the pize for this Uber ride is: "+price.getUberPrice(5));