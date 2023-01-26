fetch("https://striveschool-api.herokuapp.com/books")
  .then(function (response) {
    return response.json();
  })
  .then(function (books) {
    let placeholder = document.querySelector(".row");
    let out = "";
    for (let book of books) {
      out += ` <div class="col">
        <div class="card ">
          <img src="${book.img} " class="card-img-top" alt="$book.img">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">price:${book.price} asin:${book.asin} category:${book.category}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    `;
    }
    placeholder.innerHTML = out;
  });
