const displayBits = () => {
  const bits = //bits.all
  bitsList.innerHtml = bits.map((post, index) => {
    return
      `<div id="bits">
        <blockquote class="bit" id="bit-${index}">
          <a>${bit.post}</a></blockquote>
      </div>`;
  })
  .join('');
};
