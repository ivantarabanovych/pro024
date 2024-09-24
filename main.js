const video = document.getElementById('some-zhizel');

video.addEventListener('dblclick', (event) =>{
    event.preventDefault();
    video.volume = 0.5;
    console.log('Volume 50%'); 
});