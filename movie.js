class Movie {
    // Instantiating the class
    constructor(title,studio,rating){                                                         
        console.log("Before Init",title," ",studio," ",rating);
        this.title=title;
        this.studio=studio;
        if(rating){
            this.rating=rating;                                             //checking wheather rating is empty or not
        }else{
            this.rating="PG";
        }
        console.log("After Init",this.title," ",this.studio," ",this.rating);
    }
    // get the movies array returns movies array with rating PG
    getPG(movies){
        let result=[]
        if(movies.length>0){
            movies.filter(movie=>movie.rating=="PG").forEach(movie => {
                result.push(movie);
            });
        }
        return result;
    }

}

const obj1=new Movie("Casino Royale","Eon Productions","PG13")
const obj2=new Movie("Doctor Strange ","Marvels ","PG13")
const obj3=new Movie("Ghilli","AVM ","R")
const obj4=new Movie("Run","VFF","")
const obj5=new Movie("Nun","ABC","")
let movies =[obj1,obj2,obj3,obj4,obj5];
console.log(obj5.getPG(movies));