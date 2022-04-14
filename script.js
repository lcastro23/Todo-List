
		form = document.querySelector("form");
		textbox = document.getElementById("newItem");
		todoList = document.getElementById("listItems");

		form.addEventListener("submit", process_press);

		function process_press()
		{
			event.preventDefault();

			newLiText = document.createTextNode(textbox.value);
			newLi = document.createElement("li");
			newLi.appendChild(newLiText);
			todoList.appendChild(newLi);
		}
	