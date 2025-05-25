const firstAguement = process.argv[2];
const convertedArgument = parseInt(firstAguement);

if (convertedArgument) {
  console.log(`My number: ${convertedArgument}`);
} else {
  console.log(`Not a number`);
}
