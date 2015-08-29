function collectMultiples(limit) {
  var multiples = [];
  var i = 1
  while(i < limit){
    if (i % 5 == 0 || i % 3 == 0) {
      multiples.push(i);
    };
    i += 1;
  }
  return multiples;
}
