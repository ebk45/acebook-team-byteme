describe("Bit", function(){

  var bit;

  beforeEach(function() {
    bit = new Bit;
  });

  it("Should create a new bit", function(){
    let newBit = bit.createBit()
    let bitContent = newBit.obj
    expect(bitContent).toEqual( { bit: { type: [Function: String], required: true, max: 200 },
     time: { type: [Function: Timestamp], required: true } })
  });
})
