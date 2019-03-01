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
      return `
          <div class="container"><div class="card" id="bit-${index}">
            <p>${bit.post}</p>
            <p>${bit.createdAt}</p>
          </div></div>`;
    })
    .join("");
};

getBits();
