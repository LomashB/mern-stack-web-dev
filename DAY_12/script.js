console.log("let's write javascript!");

let currentSong = new Audio();
let songs;

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
      songs.push(element.href.split("/songs/")[1].replaceAll("%20", " "));
    }
  }
  return songs;
}

const playMusic = (track, pause = false) => {
  // let audio = new Audio("/DAY_12/assets/songs/"+track)
  currentSong.src = " /DAY_12/assets/songs/" + track;
  if (!pause) {
    currentSong.play();
    play.src = "assets/images/pause.svg";
  }
  document.querySelector(".songInfo").innerHTML = decodeURI(track);
  document.querySelector(".songTime").innerHTML = "00:00 / 00:00";
};

function secondsToMinutesSeconds(totalSeconds) {

  
  // Calculate minutes
  const minutes = Math.floor(totalSeconds / 60);

  // Calculate remaining seconds and round down to the nearest integer
  const seconds = Math.floor(totalSeconds % 60);

  // Ensure seconds are always two digits
  const paddedSeconds = seconds.toString().padStart(2, "0");

  if(isNaN(seconds) || seconds < 0)
    {
      return "00:00"
    }

  // Format as minutes:seconds
  return `${minutes}:${paddedSeconds}`;
}

async function main() {
  // get the list of all songs
  songs = await getSongs();
  console.log(songs);

  playMusic(songs[0], true);

  // show all the songs in the playlists
  let songUL = document
    .querySelector(".songList")
    .getElementsByTagName("ul")[0];
  for (const song of songs) {
    songUL.innerHTML =
      songUL.innerHTML +
      `<li>
                            <img class="invert" src="assets/images/music.svg" alt="music image">
                            <div class="info">
                                <div>${song}</div>
                                <div>Lomash</div>
                            </div>
                            <span>
                                Play now
                            </span>
                            <img class="playIcon" src="assets/images/play.svg" alt="">
                        </li>`;
  }

  // attach an eventlistener to each song

  Array.from(
    document.querySelector(".songList").getElementsByTagName("li")
  ).forEach((e) => {
    e.addEventListener("click", (element) => {
      console.log(e.querySelector(".info").firstElementChild.innerHTML);
      playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
    });
  });

  // attach event listener to next play previous

  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "assets/images/pause.svg";
    } else {
      currentSong.pause();
      play.src = "assets/images/play.svg";
    }
  });

  // listen for time update event

  currentSong.addEventListener("timeupdate", () => {
    console.log(currentSong.currentTime, currentSong.duration);
    document.querySelector(".songTime").innerHTML = `${secondsToMinutesSeconds(
      currentSong.currentTime
    )}/${secondsToMinutesSeconds(currentSong.duration)}`;

    document.querySelector(".circle").style.left =
      (currentSong.currentTime / currentSong.duration) * 100 + "%";
  });

  // add an eventlistener to seekbaar

  document.querySelector(".seekbar").addEventListener("click", (e) => {
    // console.log(e)
    // console.log(e.offsetX , e.offsetY)

    console.log(e.target.getBoundingClientRect().width, e.offsetX);

    let percentageSong =
      (e.offsetX / e.target.getBoundingClientRect().width) * 100;

    document.querySelector(".circle").style.left = percentageSong + "%";

    currentSong.currentTime = (currentSong.duration * percentageSong) / 100;
  });

  // add an event listener on hamburger

  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = 0;
  });

  // add an event listener on close button

  document.querySelector(".closeIcon").addEventListener("click", () => {
    document.querySelector(".left").style.left = -110 + "%";
  });

  // add an eventlistner for previous and next

  prev.addEventListener("click", () => {
    console.log("previous clicked");
    console.log(currentSong);

    let songname = currentSong.src
    .split("/")
    .slice(-1)[0]
    .replaceAll("%20", " ");
  let index = songs.indexOf(songname);
  console.log(songs, index, songname,songs.length);

  if ((index-1) >= 0) {
    playMusic(songs[index - 1]);
  }

  });

  next.addEventListener("click", () => {
    console.log("next clicked");

    let songname = currentSong.src
      .split("/")
      .slice(-1)[0]
      .replaceAll("%20", " ");
    let index = songs.indexOf(songname);
    console.log(songs, index, songname,songs.length);

    if ((index+1) <  songs.length) {
      playMusic(songs[index + 1]);
    }

  });
}

main();
