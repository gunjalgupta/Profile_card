const ProfileCard = (() => {
    const profile = document.querySelector('.profile-img');
    const name = document.querySelector('.name');
    const location = document.querySelector('.location');
    const description = document.querySelector('.description');
    const mobileNo = document.querySelector('.mobileNo');
    const age = document.querySelector('.age');
    const email = document.querySelector('.email');

    return {
        setData: (data) => {
            console.log(data);
            console.log(data.dob.age);
            let fullname = `${data.name.first} ${data.name.last}`;
            let origin = `${data.location.city}, ${data.nat}`;
            let agee= `${data.dob.age}`;
            console.log(age);
            profile.src = data.picture.large;
            name.textContent = fullname;
            description.textContent = `User Interface Designer and 
            Front end developer`;
            mobileNo.textContent = data.phone;
           
            email.textContent = data.email;
            age.textContent = agee;
            location.textContent = origin;
        }
    }
})();

fetch('https://randomuser.me/api/?results=1')
.then((resp) => resp.json())
.then((data) => {
    ProfileCard.setData(data.results[0]);
});