let screen = document.getElementById('display');

function getrandom(){
fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(dta = (dta) => {
        dta = dta.results[0];
        // console.log(dta);
        screen.innerHTML = `
        <div class="cardContainer">
    <div class="card">
        <img src="${dta.picture.large}">
    </div>
    <div class="details">
        <ul>
            <span>Name</span>
            <set>
                <cap>Full Name : </cap>
                <data>${dta.name.title} ${dta.name.first} ${dta.name.last}</data>
            </set>
            <set>
                <cap>First Name :</cap>
                <data></data>${dta.name.first}<span>
            </set>
            <set>
                <cap>Last Name :</cap>
                <data></data>${dta.name.last}<span>
            </set>
        </ul>
        
        <ul>
            <span>Date Of Birth</span>
            <set>
                <cap>DOB :</cap>
                <data>${dta.dob.date}</data>
            </set>
            <set>
                <cap>Age :</cap>
                <data></data>${dta.dob.age}<span>
            </set>
        </ul>
        <ul>
            <span>location</span>
            <set>
                <cap>Country :</cap>
                <data></data>${dta.location.country}<span>
            </set>
            <set>
                <cap>State :</cap>
                <data></data>${dta.location.state}<span>
            </set>
            <set>
                <cap>City :</cap>
                <data></data>${dta.location.city}<span>
            </set>
            <set>
                <cap>Pin Code :</cap>
                <data></data>${dta.location.postcode}<span>
            </set>
        </ul>
        <ul>
            <span>Email</span>
            <span>${dta.email}</span>
        </ul>
        <ul>
            <span>Phone Number</span>
            <span>${dta.phone}</span>
        </ul>
    </div>
</div>
    `
    window.location.href='#display'
    })
    .catch(err => console.log("can't get data because :  ", err));
}
getrandom();