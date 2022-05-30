
let searchButton = document.getElementById("searchInput");
let genreButton = document.getElementById("genre");
let bookShelfButton = document.getElementById("bookShelf");
let uploadInputButton = document.getElementById("uploadInput");
const submit = document.querySelectorAll(".sub");

submit.forEach(btn => {
    btn.addEventListener('click', e => {
        if (btn.classList.contains('searchBtn')) {
            searchButton.classList.toggle("active")
        } else if (btn.classList.contains('genreBtn')) {
            genreButton.classList.toggle("active")
        } else if (btn.classList.contains('bookShelfBtn')) {
            bookShelfButton.classList.toggle('active')
        } else if (btn.classList.contains('uploadBtn')) {
            uploadInputButton.classList.toggle('active')
        }
        console.log(btn.classList)
    })
})

async function handleGetSearch(ev) {
    try {
        const {searchTerm,title, author, date, genre, description, duration, page} = ev.target.value;
        
        const { data } = await axios.get(`/book/search?searchTerm=${searchTerm}`, {title, author, date, genre, description, duration, page });
        console.log({ data });
        const result = data.foundSearch;
        console.log(result);
        renderBooks(result);
    } catch (error) {
        console.error(error);
    }
}

// async function renderTest(domElement) {
//     try {

//         let html = '';
//         html += `<div> ${domElement}</div>`;
//         document.getElementById('searchMe').innerHTML = html;
//         domElement.innerHTML = html;
//     }
//     catch (error) {
//         console.error(error);

//     }

// }


async function handleGetGenre(ev) {
    try {
        const genreCat = ev.target.value;


        // let select = (document.getElementById('genre')) as HTMLSelectElement;
        // for (let i = 0; i < select.options.length; i++) {
        // let value = select.options[select.selectedIndex].text;
        // console.log(select.options[value]);


        console.log(genreCat)
        const { data } = await axios.get(`/book/genres?genreCat=${genreCat}`);
        console.log({ data });
        // renderSounds(ev);
    } catch (error) {
        console.error(error)
    }

}

async function handleUpload(ev) {
    ev.preventDefault();
    let { title, author, date, genre, description, duration, page } = ev.target.elements;
    console.log(title, author, date, genre, description, duration, page)

    title = title.value;
    author = author.value;
    date = date.value;
    genre = genre.value;
    description = description.value;
    duration = duration.value;
    page = page.value;



    console.log(title, author, date, genre, description, duration, page)

    const { data } = await axios.post('/book/upload-book', { title, author, date, genre, description, duration, page })
    const books = { data }
    console.log(books)
    // renderBooks(books)
}

async function handleRegistration(ev) {
    ev.preventDefault();
    let { name, password } = ev.target.elements;
    console.log(name, password)
    name = name.value;
    password = password.value;


    console.log(name, password)

    const { data } = await axios.post('/bookUser/reg-user', { name, password })
    console.log(data)
}

async function handleLogIn(ev) {
    ev.preventDefault();
    let { name, password, role } = ev.target.elements;

    name = name.value;
    password = password.value;
    role = role.value;

    console.log(name, password, role)

    const { data } = await axios.post('/bookUser/sign-user', { name, password, role })
    console.log(data)
    // if (role === "admin") {
    //     window.location.href = "index.html";
    // }
}

async function handleGetUsers() {

    const { data } = await axios.get('/bookUser/get-users')
    console.log(data)
    const { user1 } = data;
    console.log(user1)
    // if(user1){
    //     renderSounds(user1);
    // }
}

async function renderBooks(data) {
    try {
        console.log(data)


        const html = data.map(allBooks => {
            console.log(allBooks);
            return `<div class="books__main--1">
        <h1> ${allBooks.title}</h1> 
        <h2>${allBooks.author}</h2> 
        <h3>${allBooks.date}</h3>
        </div>`
        }).join('');


        document.getElementById('renderUpload').innerHTML = html;


    } catch (error) {
        console.error(error);

    }


}


