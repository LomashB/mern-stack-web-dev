let currentSong = new Audio();
let songs;

let currFolder;

async function getSongs(folder) {
  currFolder = folder;
  let url = `http://192.168.150.237:3000/DAY_12/assets/songs/${folder}`;

  let a = await fetch(url);
  let response = await a.text();

  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");

  let songs = [];

  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split(`/${folder}/`)[1].replaceAll("%20", " "));
    }
  }

  // play the first songs
  playMusic(songs[0], true);

  // show all the songs in the playlists
  let songUL = document
    .querySelector(".songList")
    .getElementsByTagName("ul")[0];

  songUL.innerHTML = "";

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

  return songs;
}

const playMusic = (track, pause = false) => {
  // let audio = new Audio("/DAY_12/assets/songs/"+track)
  currentSong.src = `/DAY_12/assets/songs/${currFolder}/` + track;
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

  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }

  // Format as minutes:seconds
  return `${minutes}:${paddedSeconds}`;
}

async function displayAlbums() {
  let url = `http://192.168.150.237:3000/DAY_12/assets/songs`;
  let a = await fetch(url);
  let cardContainer = document.querySelector(".cardContainer");
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let anchors = div.getElementsByTagName("a");
  let array = Array.from(anchors);
  for (let index = 0; index < array.length; index++) {
    const e = array[index];

    if (e.href.includes("/songs") && !e.href.includes(".htacess")) {
      let folderName = e.href.split("/").slice(-2)[0];
      let a = await fetch(
        `http://192.168.150.237:3000/DAY_12/assets/songs/${folderName}/info.json`
      );
      let response = await a.json();

      cardContainer.innerHTML =
        cardContainer.innerHTML +
        ` <div data-folder="${folderName}" class="card">

                        <img src="assets/songs/${folderName}/cover.jpeg" alt="">
                        <div   class="play">
                            <img src="assets/images/play-filled.svg" alt="">
                        </div>
                        <h2>${response.title}</h2>
                        <p>${response.description}</p>
                    </div>`;
    }
  }

  // load the playlist when the card is clicked
  Array.from(document.getElementsByClassName("card")).forEach((e) => {
    e.addEventListener("click", async (item) => {
      songs = await getSongs(item.currentTarget.dataset.folder);
      // playMusic(songs[0])
    });
  });
}

async function main() {
  // display all the albums on the page
  displayAlbums();

  // get the list of all songs
  await getSongs("hiphop");

  // listen for time update event

  currentSong.addEventListener("timeupdate", () => {
    document.querySelector(".songTime").innerHTML = `${secondsToMinutesSeconds(
      currentSong.currentTime
    )}/${secondsToMinutesSeconds(currentSong.duration)}`;

    document.querySelector(".circle").style.left =
      (currentSong.currentTime / currentSong.duration) * 100 + "%";
  });

  // add an eventlistener to seekbaar

  document.querySelector(".seekbar").addEventListener("click", (e) => {
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
    let songname = currentSong.src
      .split("/")
      .slice(-1)[0]
      .replaceAll("%20", " ");
    let index = songs.indexOf(songname);

    if (index - 1 >= 0) {
      playMusic(songs[index - 1]);
    }
  });

  next.addEventListener("click", () => {
    let songname = currentSong.src
      .split("/")
      .slice(-1)[0]
      .replaceAll("%20", " ");
    let index = songs.indexOf(songname);

    if (index + 1 < songs.length) {
      playMusic(songs[index + 1]);
    }
  });

  // add an event to volume

  document.getElementById("volume").addEventListener("change", (e) => {
    console.log("setting volume to ", e.target.value, "/ 100");
    currentSong.volume = parseInt(e.target.value) / 100;

    if(currentSong.volume > 0){
      document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("mute.svg","volume.svg");
    }
  });

  // add event listner to mute the track

  document.querySelector(".volume>img").addEventListener("click", (e) => {
    if (e.target.src.includes("volume.svg")) {
      e.target.src = e.target.src.replace("volume.svg", "mute.svg");
      currentSong.volume = 0;
      document
        .querySelector(".range")
        .getElementsByTagName("input")[0].value = 0;
    } else {
      e.target.src = e.target.src.replace("mute.svg", "volume.svg");
      currentSong.volume = 0.1;
      document
        .querySelector(".range")
        .getElementsByTagName("input")[0].value = 25;
    }
  });
}

main();
