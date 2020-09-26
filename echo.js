const args = process.argv.slice(2);

// if all arguments are not undefined
if ( args.every(arg => {process.env[arg] !== undefined}) ) { // loop through them
  args.forEach(arg => {
    console.log(process.env[arg]);
  });
} else { // show error
  console.error("One of the arguments is not defined.");
};

