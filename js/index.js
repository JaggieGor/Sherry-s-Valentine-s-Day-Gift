// const words = [
//     '愛', 'Love', '冼', '美', '茵',
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

const words = "Jaggie love three things in this world . Sun , Moon and You . Sun for morning , Moon for night and Sherry forever .".split(' ');
const dom = {
    love: document.querySelector('.love')
}

dom.love.style.setProperty('--particles', words.length)

words.forEach((word, i) => {
    let span = document.createElement('span')
    span.style.setProperty('--n', i + 1)
    if (word=='Sherry'||word=='Jaggie'){
        span.classList.add(word)
    }
    span.innerText = word
    dom.love.appendChild(span)
})