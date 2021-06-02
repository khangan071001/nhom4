<<<<<<< HEAD
let previous = document.querySelector('#pre');
let playy = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let arstist = document.querySelector('#artist');
let icon = document.querySelector('#volume_icon');

let timer;
let autoplay = 0;
let index_no = 0;
let playing_song = false;

//create a audio element

let track = document.createElement('audio');

//All songs list

let all_song = [
    {
        name: "Titanium",
        path: "music/Titanium.mp3",
        img: "image/6.jpg",
        singer: "Jfla"
    },
    {
        name: "Darkside",
        path: "music/Darkside.mp3",
        img: "image/1.jpg",
        singer: "Alan Walker"
    },
    {
        name: "ngaytho",
        path: "music/ngaytho.mp3",
        img: "image/5.jpg",
        singer: "Phong Max"
    },
    {
        name: "Waiting For Love",
        path: "music/WaitingForLove.mp3",
        img: "image/2.jpg",
        singer: "Jfla"
    },
    {
        name: "Wake Me Up",
        path: "music/WakeMeUp.mp3",
        img: "image/4.jpg",
        singer: "Jfla"
    },
    {
        name: "Don't Let Me Down",
        path: "music/Don'tLetMeDown.mp3",
        img: "image/7.jpg",
        singer: "Jfla"
    }
];
//All function

//-------------------------Load the track -------------------------
function load_track(index_no){
    clearInterval(timer)
    track.src = all_song[index_no].path;
    title.innerHTML = all_song[index_no].name;
    track_image.src = all_song[index_no].img;
    arstist.innerHTML = all_song[index_no].singer;
    timer = setInterval(range_slider,1000);
}
load_track(index_no);

// checking the song is playing or not
function justplay(){
    if(playing_song == false){
        playsong();
    }else{
        pausesong();
    }
}

playy.onclick = () => {
    justplay();
}
//play song

function playsong(){
    track.play();
    playing_song = true;
    playy.innerHTML = '<i class="fa fa-pause"></i>';
}

/// pause

function pausesong(){
    track.pause();
    playing_song = false;
    playy.innerHTML = '<i class="fa fa-play"></i>';
}
//next song

function next_ssong(){
    if(index_no < all_song.length - 1){
        index_no ++;
        load_track(index_no);
        playsong();
        update();
    }
    else{
        index_no = 0;
        load_track(index_no);
        playsong();
        update();
    }
}
next.onclick = () =>{
    next_ssong();
}

// previous song

function previous_song(){
    if(index_no >0){
        index_no --;
        load_track(index_no);
        playsong();
        update();
    }
    else{
        index_no = all_song.length;
        load_track(index_no);
        playsong();
        update();
    }
}
previous.onclick = () =>{
    previous_song();
}

function volume_change(){
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value / 100;
}
var slider_position = 0;
function change_duration(){
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}
function range_slider(){
    let position = 0;
    if(!isNaN(track.duration)){
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }

    if(track.ended){
        playy.innerHTML = '<i class="fa fa-play"></i>';
        if(auto_play == 1){
            index_no += 1;
            load_track(index_no);
            playsong();

        }
    }
}

//auto play function

function autoplay_switch(){
    if(autoplay == 1){
        autoplay = 0;
        auto_play.style.background = 'rgba(255,255,255,0.2)'
    }
    else{
        autoplay = 1;
        auto_play.style.background = '#FF8A65'
    }
}

// mute sound


function mute_sound(){
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
    icon.innerHTML = '<i class="fa fa-volume-off"></i>'


=======
let previous = document.querySelector('#pre');
let playy = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let arstist = document.querySelector('#artist');
let icon = document.querySelector('#volume_icon');

let timer;
let autoplay = 0;
let index_no = 0;
let playing_song = false;

//create a audio element

let track = document.createElement('audio');

//All songs list

let all_song = [
    {
        name: "Titanium",
        path: "music/Titanium.mp3",
        img: "image/6.jpg",
        singer: "Jfla"
    },
    {
        name: "Darkside",
        path: "music/Darkside.mp3",
        img: "image/1.jpg",
        singer: "Alan Walker"
    },
    {
        name: "ngaytho",
        path: "music/ngaytho.mp3",
        img: "image/5.jpg",
        singer: "Phong Max"
    },
    {
        name: "Waiting For Love",
        path: "music/WaitingForLove.mp3",
        img: "image/2.jpg",
        singer: "Jfla"
    },
    {
        name: "Wake Me Up",
        path: "music/WakeMeUp.mp3",
        img: "image/4.jpg",
        singer: "Jfla"
    },
    {
        name: "Don't Let Me Down",
        path: "music/Don'tLetMeDown.mp3",
        img: "image/7.jpg",
        singer: "Jfla"
    }
];
//All function

//-------------------------Load the track -------------------------
function load_track(index_no){
    clearInterval(timer)
    track.src = all_song[index_no].path;
    title.innerHTML = all_song[index_no].name;
    track_image.src = all_song[index_no].img;
    arstist.innerHTML = all_song[index_no].singer;
    timer = setInterval(range_slider,1000);
}
load_track(index_no);

// checking the song is playing or not
function justplay(){
    if(playing_song == false){
        playsong();
    }else{
        pausesong();
    }
}

playy.onclick = () => {
    justplay();
}
//play song

function playsong(){
    track.play();
    playing_song = true;
    playy.innerHTML = '<i class="fa fa-pause"></i>';
}

/// pause

function pausesong(){
    track.pause();
    playing_song = false;
    playy.innerHTML = '<i class="fa fa-play"></i>';
}
//next song

function next_ssong(){
    if(index_no < all_song.length - 1){
        index_no ++;
        load_track(index_no);
        playsong();
        update();
    }
    else{
        index_no = 0;
        load_track(index_no);
        playsong();
        update();
    }
}
next.onclick = () =>{
    next_ssong();
}

// previous song

function previous_song(){
    if(index_no >0){
        index_no --;
        load_track(index_no);
        playsong();
        update();
    }
    else{
        index_no = all_song.length;
        load_track(index_no);
        playsong();
        update();
    }
}
previous.onclick = () =>{
    previous_song();
}

function volume_change(){
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value / 100;
}
var slider_position = 0;
function change_duration(){
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}
function range_slider(){
    let position = 0;
    if(!isNaN(track.duration)){
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }

    if(track.ended){
        playy.innerHTML = '<i class="fa fa-play"></i>';
        if(auto_play == 1){
            index_no += 1;
            load_track(index_no);
            playsong();

        }
    }
}

//auto play function

function autoplay_switch(){
    if(autoplay == 1){
        autoplay = 0;
        auto_play.style.background = 'rgba(255,255,255,0.2)'
    }
    else{
        autoplay = 1;
        auto_play.style.background = '#FF8A65'
    }
}

// mute sound


function mute_sound(){
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
    icon.innerHTML = '<i class="fa fa-volume-off"></i>'


>>>>>>> 246a21023a00917bd46b9552575d474b03b2c0b4
}