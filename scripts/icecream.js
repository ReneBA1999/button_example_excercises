function calculateCost() {
    // Retrieve the value of the 'scoops' input field and convert it to an integer
    const scoops = parseInt(document.getElementById('scoops').value);
    // Retrieve all checked toppings using the 'topping' name attribute
    const toppings = document.querySelectorAll('input[name="topping"]:checked');
    // Calculate the base price of the ice cream based on the number of scoops
    let basePrice = 2.25 + (scoops - 1) * 1.25; // Base price calculation
    // Initialize the variable to store the total cost of selected toppings
    let toppingsCost = 0;
 // Iterate over each checked topping
    toppings.forEach(topping => {
        // Check the value of the topping and add its cost to the total toppings cost
        if (topping.value === 'sprinkles') {
            toppingsCost += 0.5;
        } else if (topping.value === 'hot-fudge') {
            toppingsCost += 1.25;
        } else if (topping.value === 'whipped-cream' || topping.value === 'cherry') {
            toppingsCost += 0.25;
        } else if (topping.value === 'nuts' || topping.value === 'nuts') {
            toppingsCost += 0.25;
        }
    });
    // Calculate the tax based on the base price and toppings cost (assuming 10% tax rate)
    let tax = (basePrice + toppingsCost) * 0.1; // Assuming 10% tax
 // Calculate the total amount due by adding the base price, toppings cost, and tax
    let totalDue = basePrice + toppingsCost + tax;
    // Update the 'order-summary' element with the calculated order summary
    document.getElementById('order-summary').innerHTML = `
        <h3>Order Summary</h3>
        <p>Base Price: $${basePrice.toFixed(2)}</p>
        <p>Tax: $${tax.toFixed(2)}</p>
        <p>Total Due: $${totalDue.toFixed(2)}</p>
    `;
}