const tr = document.querySelectorAll('tr');
const guide = document.querySelectorAll('ul *');
for (let i = 0; i < tr.length; i++) {
    let dtails = tr[i].querySelectorAll('td');
    for (let j = 0; j < dtails.length; j++) {
        let tmp = dtails[j].outerHTML;
        dtails[j].outerHTML ='<div class="itms">' + "<span>" + guide[j].textContent + "</span>" + tmp + '</div>';
    }

}


const search = document.querySelector('input');
let td = document.querySelectorAll('td');
let Sresults = 0;


//restoring to default view when users shift focus from search box
search.onblur = () => {
    for (let i = 0; i < td.length; i++) {
        td[i].parentElement.classList.remove('hide');
        td[i].parentElement.classList.add('show');
    }
}

// searching and filtering cards when user put any keywods in search bar
search.onkeyup = () => {
    // console.clear();
    // console.log(search.value.toUpperCase());
    // console.log(td[0].innerText.toUpperCase());
    // console.log(search.value.toUpperCase(),td[0].innerText.toUpperCase()));
    for (let i = 0; i < td.length; i++) {
        td[i].parentElement.classList.remove('show');
        td[i].parentElement.classList.add('hide');
        // console.log(td[i].innerText.toUpperCase().indexOf(search.value.toUpperCase()));
        if (td[i].innerText.toUpperCase().indexOf(search.value.toUpperCase()) > -1) {
            Sresults++
            // console.log(td[i].parentElement.innerText);
            td[i].parentElement.classList.remove('hide');
            td[i].parentElement.classList.add('show');
            if (Sresults < 10) {
                Sresults = 0;
                break;
            }
        }
    }
}


