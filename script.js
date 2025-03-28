document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chatBox");
    const userInput = document.getElementById("userInput");

    function sendMessage() {
        let message = userInput.value.trim();
        if (message === "") return;

        // Add User Message
        addMessage(message, "user");

        // Simulate AI Response (Replace with actual API call)
        setTimeout(() => {
            let response = getBotResponse(message);
            addMessage(response, "bot");
        }, 1000);

        userInput.value = "";
    }

    function addMessage(text, sender) {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        messageDiv.innerText = text;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotResponse(userMessage) {
        // Simple keyword-based response (Replace with AI integration)
        userMessage = userMessage.toLowerCase();

        if (userMessage.includes("invest")) {
            return "Investing is a great way to grow wealth! Would you like to know about stocks or mutual funds?";
        } else if (userMessage.includes("stocks")) {
            return "Stocks represent ownership in a company. Investing in stocks can provide high returns but comes with risks.";
        } else if (userMessage.includes("mutual funds")) {
            return "Mutual funds pool money from many investors to invest in stocks, bonds, or other assets. They are managed by professionals.";
        } else {
            return "I'm here to help with your investment questions. Ask me about stocks, mutual funds, or general investing!";
        }
    }

    // Enter key event listener
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
