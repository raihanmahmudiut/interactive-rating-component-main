// Get all elements with the class "rating-number"
const ratingNumbers = document.querySelectorAll(".rating-number");
// Reference to the element where you want to display the selected value
const ratingElement = document.getElementById("rating");
// Add a click event listener to each element
let selectedValue;
ratingNumbers.forEach((element) => {
	element.addEventListener("click", () => {
		// Remove the "selected" class from all rating numbers
		ratingNumbers.forEach((rating) => {
			rating.classList.remove("selected");
		});

		// Add the "selected" class to the clicked rating number
		element.classList.add("selected");
		selectedValue = element.textContent;
		ratingElement.textContent =
			"You selected" + " " + selectedValue + " " + "out of 5";
	});
});

document.getElementById("submit").addEventListener("click", () => {
	// Get references to the first and second interface elements
	const ratingComponent = document.getElementById("rating-component");
	const thankComponent = document.getElementById("thank-component");

	if (selectedValue) {
		// Hide the first interface
		ratingComponent.classList.add("hidden");

		// Display the second interface
		thankComponent.classList.remove("hidden");
	} else {
		// Create a pop-up message element
		const popupMessage = document.createElement("h3");
		popupMessage.textContent = "Please add a review first";
		popupMessage.classList.add("popup-message");

		// Append the pop-up message to the document
		document.body.appendChild(popupMessage);

		// Remove the pop-up message after a certain time (e.g., 3 seconds)
		setTimeout(() => {
			popupMessage.remove();
		}, 3000);
	}
});
