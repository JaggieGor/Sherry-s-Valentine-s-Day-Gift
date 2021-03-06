// const words = [
//     '愛', 'Love',
//     'Amor', 'Любовь', 'الحب', 'प्यार', 'Cinta',
//     'Αγάπη', '사랑', 'Liefde', 'Dashuri', 'Каханне',
//     'Ljubav', 'Láska', 'Armastus', 'Mahal', 'אהבה', 
//     'Szerelem', 'Grá', 'Mīlestība', 'Meilė', 'Любов', 
//     'Љубовта', 'Cinta', 'عشق', 'Dragoste', 'Láska', 
//     'Renmen', 'ፍቅር', 'munaña', 'Sevgi', 'Љубав', 
//     'karout', 'amà', 'amôr', 'kærleiki', 'mborayhu', 
//     'Upendo', 'sòòyayyàà', 'ljubav', 'Սեր', 'сүю', 
//     'сүйүү', 'tia', 'aroha', 'KHAIR', 'प्रेम', 
//     'kjærlighet', 'munay', 'jecel', 'Kärlek', 'soymek', 
//     'Mahal', 'ярату', 'محبت', 'sopp', 'uthando', 
//     'ความรัก', 'Aşk', 'Tình yêu', 'ליבע'];

const words = "Jaggie loves three things in this world . Sun , Moon and You . Sun for morning , Moon for night and Sherry forever .".split(' ');
const dom = {
    love: document.querySelector('.love')
}

dom.love.style.setProperty('--particles', words.length)

words.forEach((word, i) => {
    let div = document.createElement('div')
    div.style.setProperty('--n', i + 1)
    if (word=='Sherry'||word=='Jaggie'){
        div.id=word
    }
    div.innerText = word
    dom.love.appendChild(div)
})

let img =document.createElement('img')
img.src="images/"+"Sherry"+".png"
img.classList.add("round_icon")
document.getElementById("Sherry").appendChild(img)

let img2 =document.createElement('img')
img2.src="images/"+"Jaggie"+".png"
img2.classList.add("round_icon")
document.getElementById("Jaggie").appendChild(img2)

dom.love.addEventListener("click", function(e) {
    e.preventDefault;

    // -> removing the class
    dom.love.childNodes.forEach((child ,i)=>{
        if(child.classList.contains("paused_animation")){
            child.classList.remove("paused_animation")
            child.classList.add("running_animation")
        }else {
            child.classList.remove("running_animation")
            child.classList.add("paused_animation")
        }

    })
  }, false);
