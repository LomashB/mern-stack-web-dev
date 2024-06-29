console.log("let's write javascript!");

async function getSongs() {
  let url = "http://192.168.150.237:3000/DAY_12/assets/songs";

  let a = await fetch(url);
  let response = await a.text();

  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");

  let songs = [];

  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/songs/")[1].replaceAll("%20"," "));
    }
  }
  return songs;
}

async function main() {
  // get the list of all songs
  let songs = await getSongs();
  console.log(songs);

  let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
  for (const song of songs) {
    songUL.innerHTML = songUL.innerHTML + `<li> ${song} </li>`;
  }


  var audio = new Audio(songs[0]);
  audio.play();

  audio.addEventListener("loadeddata", () => {
    let duration = audio.duration;
    console.log(audio.duration, audio.currentSrc, audio.currentTime);
  });
}

main();
