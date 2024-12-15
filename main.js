function createFloatingObject(emoji) {
    const obj = document.createElement('div');
    obj.textContent = emoji;
    obj.classList.add('floating-object');
    obj.style.left = Math.random() * window.innerWidth + 'px';
    obj.style.top = Math.random() * window.innerHeight + 'px';
    obj.style.fontSize = (Math.random() * 20 + 10) + 'px';
    document.body.appendChild(obj);
}

const emojis = ['🌸', '🌺', '🌷', '🌹', '💐', '🎀', '💖', '😁', '😎', '😜', '😛', '😻', '🦋', '🎉', '✨', '💎', '🍪', '⭐', '❄️'];
for (let i = 0; i < 40; i++) {
  createFloatingObject(emojis[Math.floor(Math.random() * emojis.length)]);
}

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

yesBtn.addEventListener('click', () => {
    document.querySelector('.container').innerHTML = '<h1>Yay! I knew it.😜😙❤️</h1>';
    
});

noBtn.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    noBtn.style.left = Math.random() * maxX + 'px';
    noBtn.style.top = Math.random() * maxY + 'px';
});