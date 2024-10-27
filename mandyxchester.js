document.addEventListener('DOMContentLoaded', ()=>{
    let imagesContainer = document.getElementById('mandycandy')
    function displayImages(){
        let images = Object.keys(localStorage)
        images.forEach(key=>{
           let img = document.createElement('img')
           img.src = localStorage.getItem(key)
           imagesContainer.appendChild(img)
        }
           )
    }
    displayImages()
})
