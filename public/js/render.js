const bitsList = document.querySelector(".display_bits");

const getBits = function() {
  let fetchURL = "http://localhost:1234/bits";
  // insert way of selecting dev or production
  return fetch(fetchURL)
    .then(blob => blob.json())
    .then(data => displayBits(data));
};

const displayBits = data => {
  bitsList.innerHTML = data
    .map((bit, index) => {
      date = new Date(bit.createdAt).toUTCString();
      displayDate = date
        .split(" ")
        .slice(0, 5)
        .join(" ");

      return `
          <div class="card" id="bit-${index}">
            <p id="bit_post">${bit.post}</p>
            <p id="timestamp">${displayDate}</p>
          </div>`;
    })
    .join("");
};

getBits();
