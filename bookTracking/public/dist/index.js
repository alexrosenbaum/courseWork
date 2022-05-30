var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var searchButton = document.getElementById("searchInput");
var genreButton = document.getElementById("genre");
var bookShelfButton = document.getElementById("bookShelf");
var uploadInputButton = document.getElementById("uploadInput");
var submit = document.querySelectorAll(".sub");
submit.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        if (btn.classList.contains('searchBtn')) {
            searchButton.classList.toggle("active");
        }
        else if (btn.classList.contains('genreBtn')) {
            genreButton.classList.toggle("active");
        }
        else if (btn.classList.contains('bookShelfBtn')) {
            bookShelfButton.classList.toggle('active');
        }
        else if (btn.classList.contains('uploadBtn')) {
            uploadInputButton.classList.toggle('active');
        }
        console.log(e);
    });
});
function handleGetSearch(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var searchTerm, data, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    searchTerm = ev.target.value;
                    return [4 /*yield*/, axios.get("/book/search?searchTerm=" + searchTerm)];
                case 1:
                    data = (_a.sent()).data;
                    console.log({ data: data });
                    result = data.foundSearch;
                    console.log(result);
                    // localStorage.setItem('searchTerm', `${searchTerm}`);
                    // const data = localStorage.getItem('searchTerm');
                    // console.log(data);
                    //render top page
                    // let html = `<div id="searchMe"> <p> ${searchTerm}</p></div>`;
                    // document.getElementById('searchMe').innerHTML = html;
                    renderBooks(result);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
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
function handleGetGenre(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var genreCat, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    genreCat = ev.target.value;
                    // let select = (document.getElementById('genre')) as HTMLSelectElement;
                    // for (let i = 0; i < select.options.length; i++) {
                    // let value = select.options[select.selectedIndex].text;
                    // console.log(select.options[value]);
                    console.log(genreCat);
                    return [4 /*yield*/, axios.get("/book/genres?genreCat=" + genreCat)];
                case 1:
                    data = (_a.sent()).data;
                    console.log({ data: data });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleUpload(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, title, author, date, genre, description, duration, page, data, books;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _a = ev.target.elements, title = _a.title, author = _a.author, date = _a.date, genre = _a.genre, description = _a.description, duration = _a.duration, page = _a.page;
                    console.log(title, author, date, genre, description, duration, page);
                    title = title.value;
                    author = author.value;
                    date = date.value;
                    genre = genre.value;
                    description = description.value;
                    duration = duration.value;
                    page = page.value;
                    console.log(title, author, date, genre, description, duration, page);
                    return [4 /*yield*/, axios.post('/book/upload-book', { title: title, author: author, date: date, genre: genre, description: description, duration: duration, page: page })];
                case 1:
                    data = (_b.sent()).data;
                    books = { data: data };
                    console.log(books);
                    return [2 /*return*/];
            }
        });
    });
}
function handleRegistration(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, password, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _a = ev.target.elements, name = _a.name, password = _a.password;
                    console.log(name, password);
                    name = name.value;
                    password = password.value;
                    console.log(name, password);
                    return [4 /*yield*/, axios.post('/bookUser/reg-user', { name: name, password: password })];
                case 1:
                    data = (_b.sent()).data;
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
function handleLogIn(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, password, role, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _a = ev.target.elements, name = _a.name, password = _a.password, role = _a.role;
                    name = name.value;
                    password = password.value;
                    role = role.value;
                    console.log(name, password, role);
                    return [4 /*yield*/, axios.post('/bookUser/sign-user', { name: name, password: password, role: role })];
                case 1:
                    data = (_b.sent()).data;
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var data, user1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/bookUser/get-users')];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    user1 = data.user1;
                    console.log(user1);
                    return [2 /*return*/];
            }
        });
    });
}
function renderBooks(data) {
    return __awaiter(this, void 0, void 0, function () {
        var html;
        return __generator(this, function (_a) {
            try {
                console.log(data);
                html = data.map(function (allBooks) {
                    console.log(allBooks);
                    return "<div class=\"books__main--1\">\n        <p> " + allBooks.title + "</p> </div>";
                }).join('');
                document.getElementById('renderUpload').innerHTML = html;
            }
            catch (error) {
                console.error(error);
            }
            return [2 /*return*/];
        });
    });
}
