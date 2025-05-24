// console.log(process.argv);
const arrLenght = process.argv.length;

if (arrLenght < 3) {
    console.log("No argument")
} else if (arrLenght === 3) {
    console.log("Argument found")
} else {
    console.log("Arguments Found")
}