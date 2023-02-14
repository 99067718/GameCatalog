var dict = {
  "Games":[
      {
          "Name":"Doors",
          "Link":"https://www.roblox.com/games/6516141723",
          "Description":"Doors is a Roblox horror game where you enter a hotel with 100 doors, in every room you can find items \n (for example: coins, flashlight, candle) there are also a bunch of monsters that try to stop you from leaving the hotel, can you leave the hotel before they catch you?",
          "Image":"https://tr.rbxcdn.com/c0498ada296728d8af442614f53ccd16/768/432/Image/Png",
          "ShortDescription":"Doors is a Roblox horror",
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
          "ShortDescription":"Minecraft is a game with blocks",
          "Rating": 5,
          "Genre":"Horror",
          "Icon": "https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png"
      },
      {
        "Name":"Rick's Relentless Rhythm",
        "Link":"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "Description":"He will never give you up and never let you down.",
        "Image":"https://i.insider.com/602ee9e3d3ad27001837f2af?width=1200&format=jpeg",
        "ShortDescription":"Never gonna give you...",
        "Rating": 5,
        "Genre":"Giving Up",
        "Icon": "https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif"
    }
  ]
          
};
console.log(dict['Games'].length)
console.log(document.getElementById("GameName"));

var newName = dict['Games'][0].Name;
console.log(newName)

for (i = 0; i < dict['Games'].length; i ++){
  console.log('Created')
  var element = document.createElement("article");
  var gameTitle = document.createElement("h1");
  var gameDescription = document.createElement('p');
  var gameIcon = document.createElement("img");
  var IconAndName = document.createElement("div");
  
  gameDescription.innerText = dict['Games'][i].ShortDescription;
  gameTitle.innerText = dict['Games'][i].Name;
  gameIcon.src = dict['Games'][i].Icon;
  gameIcon.width = 150;
  gameIcon.height = 150;
  gameIcon.classList.add("Icons");
  IconAndName.classList.add("MainItems")
  
  IconAndName.appendChild(gameTitle);
  IconAndName.appendChild(gameIcon);
  element.appendChild(IconAndName);
  element.appendChild(gameDescription);
  element.classList.add("TemplateSmall");

  var mainDiv = document.getElementById("TemplateMain");
  mainDiv.appendChild(element);
}