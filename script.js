console.log("Welcome to Spotify");
// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar');
let songs=[
    {songName: "Maan meri jaan", filePath: 'C:\Users\DELL\.vscode\project'},
    {songName: "Maan meri jaan", filePath: 'C:\Users\DELL\.vscode\project'},
    {songName: "Maan meri jaan", filePath: 'C:\Users\DELL\.vscode\project'},
    {songName: "Maan meri jaan", filePath: 'C:\Users\DELL\.vscode\project'},
    {songName: "Maan meri jaan", filePath: 'C:\Users\DELL\.vscode\project'},
    
    
    
]

//audioElement.play();

// Handle play/pause click;
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');

    }
})

// listen to events
document.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update seekbar
})

