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

let artList :Artwork[];
let nameRegex = /[aA-zZ,]{1,}/;


document.addEventListener('DOMContentLoaded', ()=>{
    let inputName = document.getElementById('name') as HTMLInputElement;
    let inputYear = document.getElementById('year') as HTMLInputElement;
    let inputPrice = document.getElementById('price') as HTMLInputElement;
    let inputHeight= document.getElementById('height') as HTMLInputElement;
    document.getElementById('add')?.addEventListener('click',()=>{
        let check:boolean = false;
        if(!nameRegex.test(inputName.value)){
            document.getElementById('nameErr')!.style.color="red";
            check=false;
            console.log('err');
        }else{
            check=true;
        }
        if(parseInt(inputYear.value)>2022){
            document.getElementById('yearErr')!.style.color='red';
            check=false;
            console.log('err');
        }else{
            check=true
        }
        if(parseInt(inputPrice.value)<1){
            document.getElementById('priceErr')!.style.color='red';
            check=false;
            console.log('err');
        }else{
            check=true;
        }
        if(parseInt(inputHeight.value)<10){
            document.getElementById('heightErr')!.style.color='red';
            check=false;
            console.log('err');
        }
        else{
            check=true;
        }

        if(check){
            console.log('success');
                }
    })
})
