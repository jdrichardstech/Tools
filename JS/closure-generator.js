function generator(input) {
  var index = 0;
  return {
    next: function() {
      if (index < input.length) {
        index += 1;
        return input[index - 1];
      }
      return '';
    }
  };
}

const mygenerator = generator('catastrophe');
mygenerator.next();
