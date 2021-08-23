let inputEl = document.querySelector(".input");
let btn = document.querySelector(".btn");
let showEl = document.querySelector(".show");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let n = inputEl.value;
    fetch(`https://goquotes-api.herokuapp.com/api/v1/random?count=${n}`).then(res => res.json()).then(data => show(data));
});

function show(data) {
    let x = "";
    let quotes = data.quotes;
    quotes.forEach(quote => {
        let {
            text,
            author
        } = quote;
        x += `<div class="quote">
                <h1>"${text}"</h1>
                <p> ~ ${author}</p>
            </div>`;
    });

    showEl.innerHTML = x;
}