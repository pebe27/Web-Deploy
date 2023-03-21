// api url
const api_url = "https://api.thingspeak.com/channels/2057478/feeds.json?api_key=9J2WOPIUL3LLETA6&results=1";
// masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("hum").innerHTML = obj.field1;
      document.getElementById("luxVal").innerHTML = obj.field2;
    });
}, 1000);
