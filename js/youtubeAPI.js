const apiKey = 'AIzaSyAgzZxgrw1dX8dZFGfXHE6QSoPdqQyH-Pc';
const channelId = 'UC6a_j7xgv6YOg88jx0pIvJg';
let apiChannelData;
let ChannelLink;
const ytCard = document.querySelector("#yt");

const ytChannelAPI = `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&key=${apiKey}&part=snippet`;

fetch(ytChannelAPI)
  .then(response => response.json())
  .then(data => {
    apiChannelData = data; // Menyimpan data yang diubah menjadi JSON ke dalam variabel
    YoutubeDataFiller(); // Menampilkan data yang disimpan dalam variabel
  })
  .catch(error => {
    console.error('Error:', error);
  });


function YoutubeDataFiller() {
    ytCard.querySelector("img").setAttribute("src",apiChannelData.items[0].snippet.thumbnails.high.url);
    ytCard.querySelector(".text h1").textContent = apiChannelData.items[0].snippet.title;
    ytCard.querySelector(".text p").textContent = apiChannelData.items[0].snippet.description;
    ChannelLink = "https://www.youtube.com/"+apiChannelData.items[0].snippet.customUrl;
}

document.querySelector("#GoToYT").addEventListener("click",function(){
    window.open(ChannelLink, '_blank');

}
)