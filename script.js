console.log("Welcome to Spotify");
// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.MP3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar');
let songs=[
    {songName: "Maan meri jaan", filePath:"C:\Users\DELL\Downloads"},
    
    {songName: "Maan meri jaan", filePath:"C:\Users\DELL\Downloads"},
    
    {songName: "Maan meri jaan", filePath:"C:\Users\DELL\Downloads"},
    
    {songName: "Maan meri jaan", filePath:"C:\Users\DELL\Downloads"},
    
    {songName: "Maan meri jaan", filePath:"C:\Users\DELL\Downloads"},
]

//audioElement.play();



// Listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update seekbar
})