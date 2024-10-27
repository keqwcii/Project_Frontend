
document.addEventListener('DOMContentLoaded', ()=>{
    let imageAdder = document.getElementById('addimage')
    let fileAdder = document.getElementById('addfile')
    imageAdder.addEventListener('click', ()=>{
        let file = fileAdder.files[0] 
        if (file){
           let reader = new FileReader()
           reader.onload = function(event){
              let baseImage =event.target.result
              let imageKey = `image_${Date.now()}`
              localStorage.setItem(imageKey, baseImage)
           }
           reader.readAsDataURL(file)
        }
        else {
        alert('бан')
        }
    })
})

