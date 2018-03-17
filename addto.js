const addTo = function(passed) {

  function magic(other) {
    return passed + other;
  }

  return magic;
};

const addThree = addTo(3);

// function addThree(3) {
//
//
// }
