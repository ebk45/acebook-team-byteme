const bitsList = document.querySelector('.display_bits');

const displayBits = () => {
  const bits = {
    _id: 5c75610b172b9a84fa0a176d
    post: "i've had a good day"
    __v: 0
  };
  bitsList.innerHtml = bits.map((post, index) => {
    return
      `<div id="bits">
        <blockquote class="bit" id="bit-${index}">
          <a>${bit.post}</a></blockquote>
      </div>`;
  })
  .join('');
};
