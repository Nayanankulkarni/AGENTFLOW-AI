// ==========================================
// AgentFlow AI v2
// ==========================================

// n8n Webhook
const WEBHOOK_URL = "https://nayanank.app.n8n.cloud/webhook/nayana-ai";

// ==========================================
// DOM Elements
// ==========================================

const messages = document.getElementById("messages");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const newChatBtn = document.getElementById("newChat");

const hero = document.getElementById("heroSection");

const chatMenu = document.getElementById("chatMenu");
const knowledgeMenu = document.getElementById("knowledgeBase");
const aboutMenu = document.getElementById("aboutAI");

const knowledgePage = document.getElementById("knowledgePage");
const aboutPage = document.getElementById("aboutPage");

const chatInput = document.querySelector(".chat-input");

// ==========================================
// Navigation
// ==========================================

function activateMenu(button) {

    document.querySelectorAll(".menu-item").forEach(item => {
        item.classList.remove("active");
    });

    button.classList.add("active");

}

function showChat() {

    hero.style.display = "block";
    messages.style.display = "flex";
    chatInput.style.display = "flex";

    knowledgePage.classList.remove("active");
    knowledgePage.classList.add("hidden");

    aboutPage.classList.remove("active");
    aboutPage.classList.add("hidden");

    activateMenu(chatMenu);

}

function showKnowledge() {

    hero.style.display = "none";
    messages.style.display = "none";
    chatInput.style.display = "none";

    aboutPage.classList.remove("active");
    aboutPage.classList.add("hidden");

    knowledgePage.classList.remove("hidden");
    knowledgePage.classList.add("active");

    activateMenu(knowledgeMenu);

}

function showAbout() {

    hero.style.display = "none";
    messages.style.display = "none";
    chatInput.style.display = "none";

    knowledgePage.classList.remove("active");
    knowledgePage.classList.add("hidden");

    aboutPage.classList.remove("hidden");
    aboutPage.classList.add("active");

    activateMenu(aboutMenu);

}

chatMenu.addEventListener("click", showChat);
knowledgeMenu.addEventListener("click", showKnowledge);
aboutMenu.addEventListener("click", showAbout);

// ==========================================
// Reset Chat
// ==========================================

function resetChat() {

    hero.style.display = "block";

    messages.innerHTML = `

        <div class="bot-message">

            <div class="bubble">

                <h3>👋 Hello!</h3>

                <p>I'm AgentFlow AI.</p>

                <br>

                <p>I can help you with:</p>

                <ul>

                    <li>💬 AI Chat</li>
                    <li>💻 Coding</li>
                    <li>📚 Learning</li>
                    <li>⚡ Automation</li>
                    <li>🧠 Problem Solving</li>

                </ul>

            </div>

        </div>

    `;

    input.value = "";

    showChat();

}

newChatBtn.addEventListener("click", resetChat);
// ==========================================
// Typing Indicator
// ==========================================

function showTyping() {

    const typing = document.createElement("div");

    typing.className = "bot-message";

    typing.id = "typingIndicator";

    typing.innerHTML = `
        <div class="bubble">
            <div class="typing-bubble">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;

    messages.appendChild(typing);

    messages.scrollTop = messages.scrollHeight;

}

function removeTyping() {

    const typing = document.getElementById("typingIndicator");

    if (typing) {

        typing.remove();

    }

}

// ==========================================
// Send Message
// ==========================================

async function sendMessage() {

    const userMessage = input.value.trim();

    if (!userMessage) return;

    hero.style.display = "none";

    createMessage(userMessage, "user");

    input.value = "";

    showTyping();

    try {

        const response = await fetch(WEBHOOK_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: userMessage
            })

        });

        removeTyping();

        if (!response.ok) {

            throw new Error(`HTTP Error ${response.status}`);

        }

        const data = await response.json();

        let reply = "";

        if (typeof data === "string") {

            reply = data;

        } else if (data.reply) {

            reply = data.reply;

        } else if (data.response) {

            reply = data.response;

        } else if (data.output) {

            reply = data.output;

        } else if (data.message) {

            reply = data.message;

        } else if (Array.isArray(data) && data.length > 0) {

            reply = data[0].response || JSON.stringify(data[0]);

        } else {

            reply = "Sorry, I couldn't understand the server response.";

        }

        createMessage(reply, "bot");

    }

    catch (error) {

        removeTyping();

        console.error(error);

        createMessage(
            "❌ Unable to connect to AgentFlow AI. Please try again.",
            "bot"
        );

    }

}

// ==========================================
// Events
// ==========================================

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", (event) => {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        sendMessage();

    }

});
// ==========================================
// Format AI Response
// ==========================================

function formatMessage(text) {

    if (!text) return "";

    // Escape HTML
    text = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    // Code blocks
    text = text.replace(/```([\s\S]*?)```/g, function(match, code) {
        return `<pre><code>${code}</code></pre>`;
    });

    // Inline code
    text = text.replace(/`([^`]+)`/g, "<code>$1</code>");

    // Bold
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // Italic
    text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");

    // New lines
    text = text.replace(/\n/g, "<br>");

    return text;

}

// ==========================================
// Create Message
// ==========================================

function createMessage(text, type) {

    const wrapper = document.createElement("div");

    wrapper.className =
        type === "user"
        ? "user-message"
        : "bot-message";

    const bubble = document.createElement("div");

    bubble.className = "bubble";

    if (type === "bot") {

        bubble.innerHTML = formatMessage(text);

    } else {

        bubble.textContent = text;

    }

    // Timestamp

    const timestamp = document.createElement("div");

    timestamp.className = "message-time";

    timestamp.textContent = new Date().toLocaleTimeString([], {

        hour: "2-digit",

        minute: "2-digit"

    });

    bubble.appendChild(timestamp);

    // Copy Button

    if (type === "bot") {

        const copyBtn = document.createElement("button");

        copyBtn.className = "copy-btn";

        copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';

        copyBtn.addEventListener("click", async () => {

            try {

                await navigator.clipboard.writeText(text);

                copyBtn.innerHTML =
                    '<i class="fa-solid fa-check"></i> Copied';

                setTimeout(() => {

                    copyBtn.innerHTML =
                        '<i class="fa-regular fa-copy"></i> Copy';

                }, 2000);

            } catch {

                alert("Copy failed");

            }

        });

        bubble.appendChild(copyBtn);

    }

    wrapper.appendChild(bubble);

    messages.appendChild(wrapper);

    messages.scrollTo({

        top: messages.scrollHeight,

        behavior: "smooth"

    });

}

// ==========================================
// Utility Events
// ==========================================

// Auto focus

window.addEventListener("load", () => {

    input.focus();

});

// ESC clears input

input.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        input.value = "";

    }

});

// Remove leading spaces after paste

input.addEventListener("paste", () => {

    setTimeout(() => {

        input.value = input.value.trimStart();

    }, 0);

});

// ==========================================
// Initialize
// ==========================================

showChat();

console.log("%cAgentFlow AI v2 Loaded 🚀",
"color:#8b5cf6;font-size:16px;font-weight:bold;");