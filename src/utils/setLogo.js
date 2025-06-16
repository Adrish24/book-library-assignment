//Function to set logo based on category
const setLogo = (category) => {
  switch (category) {
    case "computersInternet":
      return "🌐";
    case "sciencefiction":
      return "🌌";
    case "actionadventure":
      return "🧭";
    case "comics":
      return "🦸‍♂️";
  }
};

export default setLogo;
