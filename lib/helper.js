

 // FUNCTION TO GENERATE RANDOM COLORS

 const generateRandomColors = (object, KeyName) => {
    // This function will generate a random color for each item in map function 
    return object[KeyName].map(
      () => `hsl(${Math.floor(Math.random() * 360)}, 100%, 75%)`
    );
  };


  export { generateRandomColors }