//Function to set background color based on category
const setBgColor = (category) => {
  switch (category) {
    case "computersInternet":
      return "bg-primary";
    case "sciencefiction":
      return "bg-secondary";
    case "actionadventure":
      return "bg-success";
    case "comics":
      return "bg-accent";
  }
};

export default setBgColor;
