const firstArguement = process.argv[2];
if (firstArguement === undefined) {
    console.log("No argument")
} else {
    console.log(firstArguement);
}