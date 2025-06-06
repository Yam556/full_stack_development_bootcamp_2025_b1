function handleFormSubmit(){
    console.log("Form submitted");
    const temp = document.getElementById("temp").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    if (isNaN(parseFloat(temp))|| temp === "") {
        return alert("Please enter a valid value.");
    }
    if (from === "" || to === "") {
        return alert("From and To units are required.");
    }
    const result = convertTemperature(from, to, parseFloat(temp));
    document.getElementById("result").innerText = `${temp} ${from} is ${result.toFixed(2)} ${to}`;
    // Display the result in the result element
  console.log(`${temp} ${from} is ${result} ${to}`);
    return result.toFixed(2); // Return the result rounded to 2 decimal places
}


function convertTemperature(from, to, temp) {
    let result = temp;
    if(from === "fahrenheit" && to === "celsius") {
        // Convert Fahrenheit to Celsius
        result = (temp - 32) * 5/9;
    }
    else if(from === "fahrenheit" && to === "kelvin") {
        // Convert Fahrenheit to Kelvin
        result = (temp - 32) * 5/9 + 273.15;
    }
    else if(from === "celsius" && to === "fahrenheit") {
        // Convert Celsius to Fahrenheit
        result =  (temp * 9/5) + 32;
    }
    else if(from === "celsius" && to === "kelvin") {
        // Convert Celsius to Kelvin
        result =  parseFloat(temp) + 273.15;
    }
    else if(from === "kelvin" && to === "fahrenheit") {
        // Convert Kelvin to Fahrenheit
        result =  (temp - 273.15) * 9/5 + 32;
    }
    else if(from === "kelvin" && to === "celsius") {
        // Convert Kelvin to Celsius
        result =  temp - 273.15;
    }
return result;
}
