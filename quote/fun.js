const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const btns = document.querySelectorAll('li');
// 0 Speak 
// 1 Copy 
// 2 Tweet 
// 3 New Quote

for (let i = 0; i < btns.length; i++) {
    console.log(i, btns[i].innerText);
}

btns[0].onclick = () => {
    // alert('speak clicked');
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(quote.innerText));
}

btns[1].onclick = () => {
    // alert('Copy Clicked');
    btns[1].innerText = "Copying..";
    btns[1].classList.toggle('fade');
    navigator.clipboard.writeText(quote.innerText).then(function () {
        //   console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        alert('error', 'Async: Could not copy text :', quote.innerText);
    });
    setTimeout(() => {
        btns[1].innerText = "Copied !";
        btns[1].classList.toggle('fade');
    }, 300);
}

btns[2].onclick = () => {
    // alert('whatsapp clicked');
    window.open(
            "whatsapp://send?text=" + quote.innerText,
            '_blank' 
        );
}
btns[3].onclick = () => {
    btns[3].innerText = "updating..";
    btns[3].classList.toggle('fade');
    getQuo();
    setTimeout(() => {
        btns[3].innerText = "New Quote";
        btns[3].classList.toggle('fade');
    }, 500);

}

getQuo = () => {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            quote.innerText = data.content;
            author.innerText = data.author;
        });
}
getQuo();
