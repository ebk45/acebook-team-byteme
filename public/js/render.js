const bitsList = document.querySelector(".display_bits");

const getBits = function() {
  let fetchURL =
    "https://bytebytebook.herokuapp.com/bits" || "http://localhost:1234/bits";
  return fetch(fetchURL)
    .then(blob => blob.json())
    .then(data => displayBits(data));
};

const displayBits = data => {
  bitsList.innerHTML = data
    .map((bit, index) => {
      date = new Date(bit.createdAt).toUTCString();
      displayDate = date.split(' ').slice(0, 5).join(' ');

      return `
          <div class="container"><div class="card" id="bit-${index}">
            <p>${bit.post}</p>
            <p>${displayDate}</p>
          </div></div>`;
    })
    .join("");
};

getBits();
