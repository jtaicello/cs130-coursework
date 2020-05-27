const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
    const url = "https://www.apitutor.org/spotify/simple/v1/search?type=track&q=" + term;
    document.querySelector("#tracks").innerHTML = "";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        //the data is a list of javascript objects
        if(data.length === 0) {
          console.log("no results!");
          // <section id="track-section">
          //     <h1>Songs</h1>
          //     <section id="tracks">First 5 tracks go here.</section>
          document.querySelector("#tracks").innerHTML = "No tracks found that match your search criteria.";
        } else {
          let counter = 0;
          for(const track of data) {
            console.log(track.name);
            console.log(track.preview_url);
            console.log(track.artist.name);
            console.log(track.album.image_url);
            console.log("---------------------");

            const template = `
              <section class="track-item preview" data-preview-track="${track.preview_url}">
                <img src="${track.album.image_url}">
                <i class="fas play-track fa-play" aria-hidden="true"></i>
                <div class="label">
                  <h3>${track.name}</h3>
                  <p>
                    ${track.artist.name}
                  </p>
                </div>
              </section>
            `;

            document.querySelector("#tracks").innerHTML += template;
            ++counter;

            const trackElements = document.querySelectorAll('.track-item');
            for (const item of trackElements) {
                item.onclick = (ev) => {
                    const preview_url = ev.currentTarget.getAttribute('data-preview-track')
                    audioPlayer.setAudioFile(preview_url);
                    audioPlayer.play();
                    // and update the thumbnail:
                    document.querySelector('footer .track-item').innerHTML = ev.currentTarget.innerHTML;
                };
            }

            if(counter === 5) {
              break;
            }
          }
        }
      });
};

const getAlbums = (term) => {
  const url = "https://www.apitutor.org/spotify/simple/v1/search?type=album&q=" + term;
  document.querySelector("#albums").innerHTML = "";
  fetch(url)
    .then(response => response.json())
    .then(data3 => {
      console.log(data3);
      if(data3.length === 0) {
        console.log("no results!");
        document.querySelector("#albums").innerHTML = "No albums were returned.";
      } else {

      //let counter = 0;
      for(const album of data3) {
        const template = `
          <section class="album-card" id="${album.id}">
            <div>
              <img src="${album.image_url}">
              <h3>${album.name}</h3>
              <div class="footer">
                <a href="${album.spotify_url}" target="_blank">
                    view on spotify
                </a>
              </div>
            </div>
          </section>`;

        document.querySelector("#albums").innerHTML += template;

        // ++counter;
        // if(counter === 1) {
        //   break;
        // }
      }
    }
  });
};

const getArtist = (term) => {
  const url = "https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=" + term;
  document.querySelector("#artist").innerHTML = "";
  fetch(url)
    .then(response => response.json())
    .then(data2 => {
      console.log(data2);
      if(data2.length === 0) {
        console.log("no results!");
        // <section id="track-section">
        //     <h1>Songs</h1>
        //     <section id="tracks">First 5 tracks go here.</section>
        document.querySelector("#artist").innerHTML = "No results found!";
      } else {

      let counter = 0;
      for(const artist of data2) {
        const template = `
        <section class="artist-card" id="${artist.id}">
          <div>
              <img src="${artist.image_url}">
              <h3>${artist.name}</h3>
              <div class="footer">
                  <a href="${artist.spotify_url}" target="_blank">
                      view on spotify
                  </a>
              </div>
          </div>
        </section>`;

        document.querySelector("#artist").innerHTML += template;

        ++counter;
        if(counter === 1) {
          break;
        }
      }
    }
  });
};


document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};

// document.querySelector('#tracks').addEventListener("click", onClick);
//
// function onClick() {
//   //alert("hello world");
//   document.querySelector('#footer-info').innerHTML = "";
//   const template = `
//       <img src="${track.album.image_url}">
//         <i class="fas play-track fa-pause" aria-hidden="true"></i>
//         <div class="label">
//           <h3>"${track.name}"</h3>
//           <p>
//             "${track.artist.name}"
//           </p>
//       </div>`;
//   document.querySelector('#footer-info').innerHTML += template;
//   console.log(document.querySelector('#footer-info').innerHTML);
//   audioPlayer.setAudioFile(preview_url) = "";
//   audioPlayer.play();
//   };
