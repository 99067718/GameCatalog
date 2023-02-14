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
          "Genre":"Horror",
          "Icon": "https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png"
      },
      {
        "Name":"Portal",
        "Link":"https://www.minecraft.net/en-us",
        "Description":"Portal is an ineteresting game made by Valve",
        "Image":"https://cdn.cloudflare.steamstatic.com/steam/apps/400/capsule_616x353.jpg?t=1673562889",
        "ShortDescription":"Portal is one of the best Valve games...",
        "Rating": 5,
        "Genre":"Science",
        "Icon": "https://upload.wikimedia.org/wikipedia/en/9/9f/Portal_standalonebox.jpg"
    },
    {
        "Name":"Portal 2",
        "Link":"https://www.minecraft.net/en-us",
        "Description":"Portal 2 is one of the best games Valve made, it's the sequel to the popular game 'Portal'.",
        "Image":"https://www.nme.com/wp-content/uploads/2020/07/072020-Portal-2-Valve.jpeg",
        "ShortDescription":"Portal 2 is the sequel of Portal...",
        "Rating": 5,
        "Genre":"Horror",
        "Icon": "https://upload.wikimedia.org/wikipedia/en/f/f9/Portal2cover.jpg"
    },
    {
        "Name":"Rick's Relentless Rhythm",
        "Link":"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "Description":"He will never give you up and never let you down.",
        "Image":"https://i.insider.com/602ee9e3d3ad27001837f2af?width=1200&format=jpeg",
        "ShortDescription":"Never gonna give you up, never gonna let you down...",
        "Rating": 5,
        "Genre":"Giving Up",
        "Icon": "https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif"
    }
  ]
          
};

function goToPage(name, description, image, icon, rating, genre){
  var mainView = document.getElementById("MainView");
  var outerBox = document.createElement("div");
  outerBox.innerText = name + description ;
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
    console.log(this);
    alert(this.value);
    goToPage(dict['Games'][this.value].Name, dict['Games'][this.value].Description, dict['Games'][this.value].Icon, dict['Games'][this.value].Rating, dict['Games'][this.value].Genre); };

  DescriptionAndButtonHolder.appendChild(gameDescription);
  DescriptionAndButtonHolder.appendChild(triggerButton);
  IconAndName.appendChild(gameTitle);
  IconAndName.appendChild(gameIcon);
  element.appendChild(IconAndName);
  element.appendChild(DescriptionAndButtonHolder);


  var mainDiv = document.getElementById("TemplateMain");
  mainDiv.appendChild(element);
}