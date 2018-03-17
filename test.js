class Food {
  constructor(name) {
    this.name = name;
  }

  // consume() {
  //   console.log(this.name)
  // }
}

const consume = function () {
  // console.log(this) // the global this.
  console.log("Eating " + this.name);
};

const cheese = new Food('cheese');
const apple = new Food('apple');

// consume(cheese)
// cheese.consume()

consume.call(cheese);
consume.call(cheese);
consume.call(cheese);

const threeConsumeCheese = () => {
  consume.call(cheese);
  consume.call(cheese);
  consume.call(cheese);
};



threeConsumeCheese();

const makeThreeConsume = (food) => {
  return () => {
    consume.call(food);
    consume.call(food);
    consume.call(food);
  };
};

const threeConsumeApple = makeThreeConsume(apple);
threeConsumeApple();
// const boundConsume = consume.bind(cheese);
// boundConsume()
