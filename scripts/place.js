document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const full = document.getElementById("lastModified");
  const year = document.getElementById("currentyear");

  // Display last modified date
  full.innerHTML = `Last Modified <span class="highlight">${document.lastModified}</span>`;

  // Display current year
  year.innerHTML = `<span class="highlight">${new Date().getFullYear()}</span>`;

  // Weather code in Celsius to calculate windchill

  const temperature = 9; // static temperature in °C
  const windSpeed = 5; // static wind speed in k/h

  const windChillElement = document.getElementById("windchill");

  function calculateWindChill(tempC, speedKmh) {
    return (
      13.12 +
      0.6215 * tempC -
      11.37 * Math.pow(speedKmh, 0.16) +
      0.3965 * tempC * Math.pow(speedKmh, 0.16)
    );
  }

  let windChillText = "N/A";

  // Only calculate if conditions are valid
  if (temperature <= 10 && windSpeed > 4.8) {
    const windChillValue = calculateWindChill(temperature, windSpeed);
    windChillText = windChillValue.toFixed(1); // round to 1 decimal
  }

  windChillElement.textContent = windChillText;
});
