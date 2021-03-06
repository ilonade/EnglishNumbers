describe("English numbers", function() {
  it("is zero when 0", function() {
    expect(numberInEnglish(0)).toEqual("zero")
  })

  it("is one when 1", function() {
    expect(numberInEnglish(1)).toEqual("one")
  })

  it("is nine when 9", function() {
    expect(numberInEnglish(9)).toEqual("nine")
  })

  it("is minus three when -3", function() {
    expect(numberInEnglish(-3)).toEqual("minus three")
  })

  it("is minus seven when -7", function() {
    expect(numberInEnglish(-7)).toEqual("minus seven")
  })

  it("is ten when 10", function() {
    expect(numberInEnglish(10)).toEqual("ten")
  })

  it("is seventeen when 17", function() {
    expect(numberInEnglish(17)).toEqual("seventeen")
  })

  it("is minus seventeen when -17", function() {
    expect(numberInEnglish(-17)).toEqual("minus seventeen")
  })

  it("is twenty when 20", function() {
    expect(numberInEnglish(20)).toEqual("twenty")
  })

  it("is thirty when 30", function() {
    expect(numberInEnglish(30)).toEqual("thirty")
  })

  it("is minus eighty when -80", function() {
    expect(numberInEnglish(-80)).toEqual("minus eighty")
  })

  it("is twenty-one when 21", function() {
    expect(numberInEnglish(21)).toEqual("twenty-one")
  })

  it("is minus forty-two when -42", function() {
    expect(numberInEnglish(-42)).toEqual("minus forty-two")
  })

  it("is one hundred when 100", function() {
    expect(numberInEnglish(100)).toEqual("one hundred")
  })

  it("is one hundred one when 101", function() {
    expect(numberInEnglish(101)).toEqual("one hundred one")
  })

  it("is one hundred twenty-seven when 127", function() {
    expect(numberInEnglish(127)).toEqual("one hundred twenty-seven")
  })

  it("is two hundred forty-two when 242", function() {
    expect(numberInEnglish(242)).toEqual("two hundred forty-two")
  })

  it("is one thousand when 1000", function() {
    expect(numberInEnglish(1000)).toEqual("one thousand")
  })

  it("is one thousand six hundred forty-three when 1643", function() {
    expect(numberInEnglish(1643)).toEqual("one thousand six hundred forty-three")
  })

  it("is two hundred fifty-seven thousand nine hundred thirty-eight when 257938", function() {
    expect(numberInEnglish(257938)).toEqual("two hundred fifty-seven thousand nine hundred thirty-eight")
  })

  it("is nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine when 999999999", function() {
    expect(numberInEnglish(999999999)).toEqual("nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine")
  })
})
