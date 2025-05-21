function getFroyoOrder() {
  const input = prompt("Enter your froyo flavors, separated by commas:");

  // Null check + empty input check
  if (input === null || input.trim() === "") {
    alert("No flavors entered. Please refresh and try again.");
    return []; // Return an empty array to avoid breaking the app
  }

  return input.split(",").map((flavor) => flavor.trim().toLowerCase());
}

function countFlavors(flavorArray) {
  const flavorCount = {};

  for (const flavor of flavorArray) {
    if (flavorCount[flavor]) {
      flavorCount[flavor]++;
    } else {
      flavorCount[flavor] = 1;
    }
  }

  return flavorCount;
}

function displayFlavorCounts(flavorCount) {
  console.log("Froyo Order Summary:");
  for (const flavor in flavorCount) {
    console.log(`${flavor}: ${flavorCount[flavor]}`);
  }
}

const flavors = getFroyoOrder();
const flavorSummary = countFlavors(flavors);
displayFlavorCounts(flavorSummary);
