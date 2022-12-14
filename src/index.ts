class Statue implements Artwork {
  title: String;
  year: number;
  price: number;
  height: number;

  constructor(title: String, year: number, price: number, height: number) {
    this.title = title;
    this.year = year;
    this.price = price;
    this.height = height;
  }
}

let artList: Artwork[] = [];
let nameRegex = /[aA-zZ,]{1,}/;
let numberRegex = /[1-9]{1,}/;

function sum() {
  let sumPrice = 0;
  for (let a of artList) {
    sumPrice += a.price;
  }
  document.getElementById("sumCount")!.textContent = artList.length + "";
  document.getElementById("sumPrice")!.textContent = "" + sumPrice;
}

document.addEventListener("DOMContentLoaded", () => {
  let inputName = document.getElementById("name") as HTMLInputElement;
  let inputYear = document.getElementById("year") as HTMLInputElement;
  let inputPrice = document.getElementById("price") as HTMLInputElement;
  let inputHeight = document.getElementById("height") as HTMLInputElement;
  document.getElementById("add")?.addEventListener("click", () => {
    let checkName: boolean = true;
    let checkYear:boolean = true;
    let checkPrice:boolean = true;
    let checkHeight:boolean=true;
    if (!nameRegex.test(inputName.value)) {
      document.getElementById("nameErr")!.style.color = "red";
      checkName = false;
      console.log("err");
    } else {
        checkName = true;
      document.getElementById("nameErr")!.style.color = "black";
    }
    if (
      !numberRegex.test(inputYear.value) ||
      parseInt(inputYear.value) > 2022
    ) {
      document.getElementById("yearErr")!.style.color = "red";
      checkYear = false;
      console.log("err");
    } else {
        checkYear = true;
      document.getElementById("yearErr")!.style.color = "black";
    }
    if (parseInt(inputPrice.value) < 1 || !numberRegex.test(inputPrice.value)) {
      document.getElementById("priceErr")!.style.color = "red";
      checkPrice = false;
      console.log("err");
    } else {
        checkPrice = true;
      document.getElementById("priceErr")!.style.color = "black";
    }
    if (
      !numberRegex.test(inputHeight.value) ||
      parseInt(inputHeight.value) < 10
    ) {
      document.getElementById("heightErr")!.style.color = "red";
      checkHeight = false;
      console.log("err");
    } else {
        checkHeight = true;
      document.getElementById("heightErr")!.style.color = "black";
    }

    if (checkName && checkYear && checkPrice && checkHeight) {
      artList.push(
        new Statue(
          inputName.value,
          parseInt(inputYear.value),
          parseInt(inputPrice.value),
          parseInt(inputHeight.value)
        )
      );
      sum();
      inputName.textContent = "";
      inputYear.textContent = "";
      inputPrice.textContent = "";
      inputHeight.textContent = "";
      alert("Szobor hozz??adva");
    }
  });
});
