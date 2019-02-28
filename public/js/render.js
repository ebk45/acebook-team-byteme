const bitsList = document.querySelector('.display_bits');

const renderBits = function() {
  fetch("http://localhost:1234/bits")
    .then(response => response.json())
    .then(json => {
      const bits = json;
    });
  return bits;
};

const displayBits = () => {
  const bits = renderBits();
  bitsList.innerHTML = bits.map((bit, index) => {
    return `
          <div class="container"><div class="card" id="bit-${index}">
            <p>${bit.post}</p>
          </div></div>`;
  })
 .join('');
};
displayBits();
