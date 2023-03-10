var dict = {
  "Games":[
      {
          "Name":"Doors",
          "Link":"https://www.roblox.com/games/6516141723",
          "Description":"Doors is a Roblox horror game where you enter a hotel with 100 doors, in every room you can find items \n (for example: coins, flashlight, candle) there are also a bunch of monsters that try to stop you from leaving the hotel, can you leave the hotel before they catch you?",
          "Image":"https://tr.rbxcdn.com/c0498ada296728d8af442614f53ccd16/768/432/Image/Png",
          "ShortDescription":"Doors is a Roblox horror game...",
          "Rating": 4,
          "Genre":"Horror",
          "Icon": "https://static.wikia.nocookie.net/doors-game/images/a/aa/DOORS_Icon.png/revision/latest?cb=20220919210414",
          "Tag": "Horror, First Person"
      },
      {
          "Name":"Minecraft",
          "Link":"https://www.minecraft.net/en-us",
          "Description":"Minecraft is a block game with blocks",
          "Image":"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft.jpg",
          "ShortDescription":"Minecraft is a game with blocks...",
          "Rating": 5,
          "Genre":"Horror, Sandbox",
          "Icon": "https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png"
      },
      {
        "Name":"Portal",
        "Link":"https://www.minecraft.net/en-us",
        "Description":"Portal is an interesting game made by Valve, its all about solving puzzles with the help of a portal gun.",
        "Image":"https://cdn.cloudflare.steamstatic.com/steam/apps/400/capsule_616x353.jpg?t=1673562889",
        "ShortDescription":"Portal is one of the best Valve games...",
        "Rating": 5,
        "Genre":"Puzzle, Science",
        "Icon": "https://upload.wikimedia.org/wikipedia/en/9/9f/Portal_standalonebox.jpg"
    },
    {
        "Name":"Portal 2",
        "Link":"https://www.minecraft.net/en-us",
        "Description":"Portal 2 is one of the best games Valve made, it's the sequel to the popular game 'Portal'.",
        "Image":"https://www.nme.com/wp-content/uploads/2020/07/072020-Portal-2-Valve.jpeg",
        "ShortDescription":"Portal 2 is the sequel of Portal...",
        "Rating": 5,
        "Genre":"Puzzle, Science",
        "Icon": "https://upload.wikimedia.org/wikipedia/en/f/f9/Portal2cover.jpg"
    },
    {
      "Name":"School",
      "Link":"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "Description":"1 + 1 = 31 or no, It's not",
      "Image":"http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTTQgKWWuFHFN15SletsEiLk9LLYwIwYBPcMsFTUvzA3hLCAPj2OoXUD-mshFnl0UuLF-Isp4ijAQSBWcKTnwc",
      "ShortDescription":"1 + 1 = ???",
      "Rating": 5,
      "Genre":"Horror, Learning, Sandbox, Laptop",
      "Icon": "https://i.pinimg.com/originals/d8/5d/12/d85d1281168e17358b440744545046ce.jpg"
    },
    {
        "Name":"Rick's Relentless Rhythm",
        "Link":"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "Description":"He will never give you up and never let you down.",
        "Image":"https://i.insider.com/602ee9e3d3ad27001837f2af?width=1200&format=jpeg",
        "ShortDescription":"Never gonna give you up, never gonna let you down...",
        "Rating": 5,
        "Genre":"Giving Up, RickRoll",
        "Icon": "https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif"
    }
  ]
          
};

function goToPage(name, description, image, icon, rating, genre){
  var mainView = document.getElementById("MainView");
  // var b = document.getElementById(name, description, image, icon, rating, genre).value,
  
    url = './GamePage.html?name=' + encodeURIComponent(name) + '&description=' + encodeURIComponent(description) + '&image=' + encodeURIComponent(image) + '&icon=' + encodeURIComponent(icon) + '&rating=' + encodeURIComponent(rating) + '&genre=' + encodeURIComponent(genre);

    window.location.href = url;
  mainView.appendChild(outerBox);
}

for (i = 0; i < dict['Games'].length; i ++){
  console.log('Created')
  var element = document.createElement("article");
  var gameTitle = document.createElement("h1");
  var gameDescription = document.createElement('p');
  var gameIcon = document.createElement("img");
  var IconAndName = document.createElement("div");
  var DescriptionAndButtonHolder = document.createElement("div");
  var triggerButton = document.createElement("button");
  
  triggerButton.innerText = "Show more";
  gameDescription.innerText = dict['Games'][i].ShortDescription;
  gameTitle.innerText = dict['Games'][i].Name;
  gameIcon.src = dict['Games'][i].Icon;
  gameIcon.width = 150;
  gameIcon.height = 150;
  gameIcon.classList.add("Icons");
  IconAndName.classList.add("MainItems");
  element.classList.add("TemplateSmall");
  gameDescription.classList.add("Description");
  
  triggerButton.value = i;
  triggerButton.onclick = function () { 
    // console.log(dict['Games'])
    // console.log(triggerButton.value)
    // console.log(dict['Games'][triggerButton.value])
    goToPage(dict['Games'][this.value].Name, dict['Games'][this.value].Description,dict['Games'][this.value].Image, dict['Games'][this.value].Icon, dict['Games'][this.value].Rating, dict['Games'][this.value].Genre); };

  DescriptionAndButtonHolder.appendChild(gameDescription);
  DescriptionAndButtonHolder.appendChild(triggerButton);
  IconAndName.appendChild(gameTitle);
  IconAndName.appendChild(gameIcon);
  element.appendChild(IconAndName);
  element.appendChild(DescriptionAndButtonHolder);


  var mainDiv = document.getElementById("TemplateMain");
  mainDiv.appendChild(element);
}