const bitsList = document.querySelector(".display_bits");

console.log("render.js executes");

const getBits = function() {
  console.log("getBits executes");
  // console.log("bits response = " + bitsResponse);
  return (
    fetch("http://localhost:1234/bits")
      // .then(response => response.json())
      // // .then(json => {
      // //   json;
      // //   // console.log("json = " + json);
      // //   // const bits = json;
      // //
      // //   // this.bitsResponse = json;
      // //   // console.log("1 > " + this.bitsResponse);
      // //   // console.log("RB >>> " + bits);
      // // })
      .then(blob => blob.json())
      .then(data => displayBits(data))
    // .then(function(json) {
    //   const bitsString = JSON.stringify(json);
    //   // return JSON.stringify(json);
    //   console.log("bitsString >>> " + bitsString);
    //   return bitsString
    // })
  );
  // console.log("2 > " + this.bitsResponse);
};

const displayBits = data => {
  console.log("displayBits executes");
  // const bits = getBits();
  // console.log("bits >>> " + JSON.parse(bits));
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
