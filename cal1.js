let inp = document.querySelector("#input");

document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", function() {
        const value = item.innerText;

        if (value === "Enter") {
            try {
                inp.innerText = eval(inp.innerText.replace('x', '*'));
            } catch (e) {
                inp.innerText = "Error";
            }
        } else if (value === "clear") {
            inp.innerText = '';
        } else if (value === "del") {
            inp.innerText = inp.innerText.slice(0, -1);
        } else if (value !== "Enter" && value !== "clear" && value !== "del") {
            inp.innerText += value;
        }
    });
});
