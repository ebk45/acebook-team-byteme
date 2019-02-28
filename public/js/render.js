const bitsList = document.querySelector(".display_bits");

const getBits = function() {
  return (
    fetch("http://localhost:1234/bits")
      .then(blob => blob.json())
      .then(data => displayBits(data))
  );
};

const displayBits = data => {
  bitsList.innerHTML = data
    .map((bit, index) => {
      return `
          <div class="container"><div class="card" id="bit-${index}">
            <p>${bit.post}</p>
          </div></div>`;
    })
    .join("");
};

getBits();
