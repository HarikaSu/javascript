document.addEventListener("DOMContentLoaded", function() {
    const unitFrom = document.getElementById("unitFrom");
    const unitTo = document.getElementById("unitTo");

    // Populate unit options based on unit type
    unitFrom.addEventListener("change", function() {
        populateUnitOptions(unitFrom.value);
    });

    // Populate unit options for the "Convert To" select box
    function populateUnitOptions(type) {
        const units = {
            length: ["meter", "kilometer", "mile", "yard", "centimeter"],  // Added centimeter
            currency: ["USD", "EUR", "GBP", "INR"],
            speed: ["m/s", "km/h", "mph"],
            temperature: ["Celsius", "Fahrenheit", "Kelvin"],
            volume: ["liter", "milliliter", "gallon"],
            pressure: ["Pascal", "bar", "atm"],
            weight: ["kg", "gram", "ton", "pound"],
            area: ["sq meter", "sq km", "sq mile", "acre"],
            calories: ["calories", "joules"]
        };

        const selectedUnit = units[type];
        unitTo.innerHTML = "";
        selectedUnit.forEach(unit => {
            const option = document.createElement("option");
            option.value = unit;
            option.textContent = unit;
            unitTo.appendChild(option);
        });
    }

    // Handle form submission
    document.getElementById("unitForm").addEventListener("submit", function(e) {
        e.preventDefault();
        
        const value = document.getElementById("value").value;
        const fromUnit = unitFrom.value;
        const toUnit = unitTo.value;

        // Call conversion function based on selected units
        convertUnits(value, fromUnit, toUnit);
    });

    // Conversion logic
    function convertUnits(value, fromUnit, toUnit) {
        let result = null;
        let explanation = '';

        // Example for length conversion: meter to centimeter
        if (fromUnit === "length" && toUnit === "centimeter") {
            result = value * 100;  // Conversion from meters to centimeters
            explanation = `${value} meters = ${result} centimeters`;
        }
        // Add conversion logic for other units here...

        // Display results on the next page by saving to localStorage and redirecting
        if (result !== null) {
            localStorage.setItem("conversionResult", result);
            localStorage.setItem("conversionExplanation", explanation);
            window.location.href = "result.html";  // Redirect to result page
        }
    }

    // Initial population of unit options
    populateUnitOptions(unitFrom.value);
});
