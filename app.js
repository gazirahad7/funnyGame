const people = document.getElementById("list").childElementCount;

let actressArray = [];

const getRandomNumber = () => Math.floor(Math.random() * actressArray.length);

const number = document.getElementById("number");

for (let i = 1; i <= people; i++) {
  document.getElementById("act_" + i).innerHTML =
    actressArray[getRandomNumber()];
  //console.log(dd)
}

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  switch (number.value) {
    case "1":
      actressArray = ["Good", "Very Good", "bad", "Very bad", "Best", "Dumb"];
      break;
    case "2":
      actressArray = ["Yes", "No", "yes"];
      break;

    case "3":
      actressArray = [
        "21 age",
        "22 age",
        "23 age",
        "24 age",
        "25 age",
        "26 age",
        "27 age",
        "28 age",
        "29 age",
        "30 age",
        "31 age",
        "32 age",
        "33 age",
        "34 age",
        "35 age",
        "40 age",
      ];
      break;

    case "4":
      actressArray = [
        "sunny",
        "Alia Bhatt",
        "Katrina kaiff",
        "shraddha kapoor",
        "deepika",
        "anushka",
        "sunny",
        "Kriti Sanon",
        "Shruti Haasan",
        "Angelina",
      ];
      break;

    case "5":
      actressArray = [
        "Shahrukh Khan",
        "Salman Khan",
        "Aamir khan",
        "Tiger Shoff",
        "Hrithik Roshan",
        "Ranbir khapoor",
        "Emraan Hashmi",
        "Shushant Rajput",
        "Robert Doweny",
        "Chirs Hemsworth",
        "Leonardo Dicaprio",
        "Dwayne Johnson",
        "Chris Evans",
        "Mark Ruffalo",
      ];
      break;
    case "6":
      actressArray = [
        "MESSI",
        "NEYMAR",
        "LEWANDOWSKI",
        "C.Ronaldo",
        "MESSi",
        "C.Ronaldo",
        "Roberto Carlos",
      ];
      break;

    case "7":
      actressArray = ["Chicken diner", "you are lost"];
      break;

    case "8":
      actressArray = ["virgin", "not virgin"];
      break;

    case "9":
      actressArray = [
        "Viral kokli",
        "Kane williamson",
        ,
        "Ben stokes",
        "De Kock",
        "david warner",
        "Sachin  tendulkar",
        "Shakib al hasan",
        "MS dhoni",
        "chris gayle",
        "Mushfiqure rahim",
        "tamim iqbal",
        "Dilshan",
        "Sangakkara",
        "lasith malinga",
        "mahmudul",
        "AB de villiers",
      ];
      break;

    case "10":
      actressArray = ["a", "d",'e','f','h','i','l','m','n','o','p','r','s','t','u','y','z','r','s'];
      break;
  }

  // if (number.value == 1) {
  //   actressArray =["Good", "Very Good", 'bad', "Very bad",'Best', 'Dumb'];
  // } else if (number.value == 2) {
  //   actressArray=["Yes", "No", "yes"];
  // } else if (number.value == 3) {
  //   actressArray=[
  //     "21",
  //     "22",
  //     "23",
  //     "24",
  //     "25",
  //     "26",
  //     "27",
  //     "28",
  //     "29",
  //     "30",
  //     "31",
  //     "32",
  //     "33",
  //     "34",
  //     "35",
  //     "40"
  //   ];
  // } else if (number.value == 4) {
  //   actressArray = ["sunny", "Alia Bhatt", "Katrina kaiff", "shraddha kapoor",'deepika','anushka','sunny','Kriti Sanon','Shruti Haasan', 'Angelina'];

  // } else if(number.value == 5){
  //   actressArray =['Shahrukh Khan', 'Salman Khan', 'Aamir khan','Tiger Shoff', 'Hrithik Roshan','Ranbir khapoor','Emraan Hashmi', 'Shushant Rajput','Robert Doweny','Chirs Hemsworth','Leonardo Dicaprio',"Dwayne Johnson","Chris Evans","Mark Ruffalo"]
  // }
  // else if (number.value == 6) {
  //   actressArray =["MESSI", "NEYMAR","LEWANDOWSKI", "C.Ronaldo", "MESSi", "C.Ronaldo"];
  // } else if (number.value == 7) {
  //   actressArray = ["Chicken diner", "you are lost"];
  // } else if (number.value == 8) {
  //   actressArray = ["virgin", "not virgin"];
  // }

  const newPerson = people + 1;
  const name = document.getElementById("name");
  const error = document.getElementById("error");
  error.innerHTML = "";

  if (number.value  && name.value !== "" && number.value <11 && number.value > 0) {
   

    // const li =
    //   "<li>" +
    //   name.value +
    //   " <span class='show-output' id='act_" +
    //   newPerson +
    //   "'>" +
    //   actressArray[getRandomNumber()] +
    //   "</span><span class='delete-btn'><i class='far fa-trash-alt'></i></span></li> ";

    const li = `<li> ${
      name.value
    } <span id='act_'> </span> <span class='show-output  '>${
      actressArray[getRandomNumber()]
    } </span> <i class="far fa-trash-alt delete  age"></i></li>`;

    const list = document.getElementById("list");

    list.insertAdjacentHTML("beforeend", li);

    name.value = "";
  } else {
    error.innerHTML = "please provided  required data";
  }

  number.value.reset();
});

Array.from(list.children)
list.addEventListener("click", function (e) {
  //console.log(this.contains(e.target))
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }

  this.style.cursor = "pointer";
});

