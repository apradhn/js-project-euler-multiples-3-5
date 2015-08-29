describe("#collectMultiples(limit)", function() {
  it('collects the correct multiples of natural numbers below 10', function() {
    expect(collectMultiples(10)).toEqual([3,5,6,9]);
  });

  it('returns the correct multiples of natural numbers below 100', function() {
    expect(collectMultiples(100)).toEqual([3,5,6,9,10,12,15,18,20,21,24,25,27,30,33,35,36,39,40,42,45,48,50,51,54,55,57,60,63,65,66,69,70,72,75,78,80,81,84,85,87,90,93,95,96,99])
  });
});

describe('#sumMultiples(limit)', function() {
  it('returns the correct sum of the multiples of 10', function() {
    expect(sumMultiples(10)).toEqual(23);
  });

  it('returns the correct sum of the multiples of 1000', function() {
    expect(sumMultiples(100)).toEqual(2318);
  });

  it('returns the correct solution to the Project Euler problem', function () {
    expect(sumMultiples(1000)).toEqual(233168);
  });
});