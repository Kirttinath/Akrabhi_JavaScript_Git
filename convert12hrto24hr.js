function convert12to24(time12hr) {
  const [time, period] = time12hr.split(" ");

  let [hours, minutes] = time.split(":");
  hours = parseInt(hours, 10);
  minutes = parseInt(minutes, 10);

  if (period === "PM" && hours !== 12) {
    hours += 12;
  } else if (period === "AM" && hours === 12) {
    hours = 0;
  }

  // Format the result
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
}

// Example usage:
const time24hr = convert12to24("02:13 PM");
console.log(time24hr); // Output: '15:30'
