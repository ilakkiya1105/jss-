document.getElementById('createCard').addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const message = document.getElementById('message').value;
    const color = document.getElementById('color').value;

    document.getElementById('cardTitle').innerText = title;
    document.getElementById('cardMessage').innerText = message;
    document.getElementById('card').style.backgroundColor = color;

    const imageInput = document.getElementById('imageUpload');
    const cardImage = document.getElementById('cardImage');
    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            cardImage.src = e.target.result;
            cardImage.style.display = 'block';
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        cardImage.style.display = 'none';
    }
});

document.getElementById('downloadCard').addEventListener('click', function() {
    const card = document.getElementById('card');
    html2canvas(card).then(canvas => {
        const link = document.createElement('a');
        link.download = 'greetings_card.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});
