var dict = {
  "Games":[
      {
          "Name":"Doors",
          "Link":"https://www.roblox.com/games/6516141723",
          "Description":"Doors is a Roblox horror game where you enter a hotel with 100 doors, in every room you can find items \n (for example: coins, flashlight, candle) there are also a bunch of monsters that try to stop you from leaving the hotel, can you leave the hotel before they catch you?",
          "Image":"https://tr.rbxcdn.com/c0498ada296728d8af442614f53ccd16/768/432/Image/Png",
          "ShortDescription":"Doors is a Roblox horror",
          "Rating": 4,
          "Genre":"Horror"
      },
      {
          "Name":"Minecraft",
          "Link":"https://www.minecraft.net/en-us",
          "Description":"Minecraft is a block game with blocks",
          "Image":"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft.jpg",
          "ShortDescription":"Doors is a Roblox horror",
          "Rating": 5,
          "Genre":"Horror"
      },
      {
        "Name":"test",
        "Link":"https://www.minecraft.net/en-us",
        "Description":"Minecraft is a block game with blocks",
        "Image":"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft.jpg",
        "ShortDescription":"Doors is a Roblox horror",
        "Rating": 5,
        "Genre":"Horror"
    }
  ]
          
};
console.log(dict['Games'].length)
console.log(document.getElementById("GameName"));
document.getElementById('GameName').innerHTML = "monke";

for (i = 1; i < dict['Games'].length; i ++){
  let items = document.querySelector('.TemplateSmall').cloneNode(true);
  document.body.appendChild(items)
}