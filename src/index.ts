class Statue implements Artwork{
    title: String;
    year: number;
    price: number;
    height:number;

    constructor(title:String, year:number, price:number, height:number){
        this.title=title;
        this.year=year;
        this.price=price;
        this.height=height;
    }
}