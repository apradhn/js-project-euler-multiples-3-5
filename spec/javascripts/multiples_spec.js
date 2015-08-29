describe("#collectMultiples(limit)", function() {
  it('collects the correct multiples of natural numbers below 10', function() {
    expect(collectMultiples(10)).toEqual([3,5,6,9]);
  });
});