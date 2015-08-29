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

function sumMultiples(limit) {
  var sum = 0;
  var num;
  var multiples = collectMultiples(limit)

  for (var i = 0; i < multiples.length; i++) {
    num = multiples[i];
    sum += num;
  };

  return sum;
}