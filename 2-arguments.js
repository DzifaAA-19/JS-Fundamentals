const args = process.argv;
const argCount = args.length -2

if (argCount === 0) {
    console.log("No argument");
} else if (argCount === 1) {
    console.log("1 argument");
} else{
   console.log(argCount + "arguments");
}
