exports.generateCopyright = (author) => {
    return `&copy; ${new Date().getFullYear()} ${author}`;
  };

  // load our custom copyright function
  //const { generateCopyright } = require("./utils/utils");