function* generatorFunction() {
  yield "Hello";
  yield "Generator";
}

const generatorObject = generatorFunction();

for (const word of generatorObject) {
  console.log(word);
}
