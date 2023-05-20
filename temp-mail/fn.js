let email = document.querySelector('.mail');
let detail = {
    "mail": "hello",
    "tok": "hello",
    "url": "https://api.guerrillamail.com/ajax.php?f=",
    "get": "get_email_address&lang=en",
    "update": "get_email_list&offset=0&sid_token="
};
let mails = {
    "mailsLen": 0,

}

async function fetchMail() {
    let response = await fetch(detail.url + detail.get);

    if (response.status === 200) {
        let data = await response.json();
        detail.mail = data.email_addr;
        detail.tok = data.sid_token;
        email.innerText = detail.mail
    }

    else {
        email.innerText = "Can't Get Any Mails Right Now!"
    }
}

//>>>----------------------------

function refreshDetails() {

    let mailsCont = document.getElementById('allmails');
    mailsCont.innerHTML = '';
    for (let i = 0; i < mails.mailsLen; i++) {

        if (mails.response.list[i].mail_body) {
            mailsCont.innerHTML += `
           <div>
               <span class="sender">Mail Address : <span>${mails.response.list[i].mail_from}</span></span>
               <span class="sender">Subject : <span>${mails.response.list[i].mail_subject}</span></span>
               <p class="sender">${mails.response.list[i].mail_excerpt}</p>
                       
               <p class = short-note>
               ${mails.response.list[i].mail_body}
               </p>
           </div>
           <br/>
           <hr>
           </br>
               `
        }
        else {
            mailsCont.innerHTML += `
            <div>
               <span class="sender">Mail Address : <span>${mails.response.list[i].mail_from}</span></span>
               <span class="sender">Subject : <span>${mails.response.list[i].mail_subject}</span></span>
           </div>
           <br/>
           <hr>
           </br>
               `
        }

    }
}

//>>----------------------------


async function chkmsg() {
    let response = await fetch(detail.url + detail.update + detail.tok);
    
    if (response.status === 200) {
        let mdata = await response.json();
        mails.response = mdata;
        // console.log("mails.mailsLen = ", mdata.length);
        // console.log("mails.response = ", mails.response);
        mails.mailsLen = mails.response.list.length;

        refreshDetails();
    }

    else {
        email.innerText = "Can't Update Mails Right Now!"
    }
}

fetchMail();
setInterval(() => {
    chkmsg();
}, 3500);