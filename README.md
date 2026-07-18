<div align="center">

# 🤖 AgentFlow AI

### Intelligent Workflow Assistant powered by OpenAI & n8n

<p>
An AI-powered chatbot that combines a modern web interface with <b>OpenAI</b> and <b>n8n automation</b> to deliver fast, intelligent, and interactive conversations.
</p>

<p>

🌐 **Live Demo:** https://agentflow-ai-one.vercel.app

</p>

</div>

---

## 📌 Overview

AgentFlow AI is a responsive AI chatbot built using **HTML, CSS, JavaScript, OpenAI, and n8n**.

The application sends user messages to an **n8n Webhook**, where an **AI Agent** powered by an **OpenAI Chat Model** processes the request, maintains conversation context using **Simple Memory**, and returns a response back to the website.

The goal of this project is to demonstrate how workflow automation and AI can be combined to build an intelligent web assistant.

---

# ✨ Features

- 🤖 AI Chat Assistant
- ⚡ OpenAI Chat Model Integration
- 🔗 n8n Workflow Automation
- 🧠 Conversation Memory
- 💬 Modern Chat Interface
- 🎨 Responsive UI
- 🌙 Dark Theme
- 📱 Mobile Friendly
- ⌨️ Enter to Send Message
- 📋 Copy AI Responses
- 🕒 Message Timestamps
- 📚 Knowledge Base Page
- ℹ️ About Page
- 🚀 Deployed on Vercel

---

# 🛠 Tech Stack

| Frontend | Backend / AI |
|-----------|--------------|
| HTML5 | OpenAI |
| CSS3 | n8n Cloud |
| JavaScript | AI Agent |
| Font Awesome | Simple Memory |
| Google Fonts | Webhook API |
| Vercel | Respond to Webhook |

---

# 🏗 Project Structure

```text
AgentFlow-AI
│
├── index.html
├── style.css
├── script.js
├── logo.png
├── README.md
└── assets/
```

---

# 🔄 n8n Workflow

This project uses a simple but powerful AI workflow built inside **n8n**.

```
User
   │
   ▼
Website
   │
   ▼
Webhook (POST)
   │
   ▼
AI Agent
   │
   ├── OpenAI Chat Model
   └── Simple Memory
   │
   ▼
Respond to Webhook
   │
   ▼
Website Response
```

### Workflow Steps

1. User enters a message.
2. JavaScript sends the message to the n8n Webhook.
3. Webhook triggers the AI Agent.
4. AI Agent sends the prompt to the OpenAI Chat Model.
5. Simple Memory stores conversation history.
6. AI generates a response.
7. Respond to Webhook sends the answer back.
8. The website displays the AI response.

---

## 🖼 n8n Workflow Screenshot

> Save your workflow screenshot inside your repository.

Example:

```text
assets/n8n-workflow.png
```

Then display it:

```markdown
![n8n Workflow](assets/n8n-workflow.png)
```

---

# 🚀 Deployment

The project is deployed using **Vercel**.

### Live Website

https://agentflow-ai-one.vercel.app

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/AgentFlow-AI.git
```

Open the project

```bash
cd AgentFlow-AI
```

Run using VS Code Live Server

or simply open

```
index.html
```

---

# 🔑 Configuration

Update the webhook URL inside `script.js`

```javascript
const WEBHOOK_URL = "YOUR_N8N_WEBHOOK_URL";
```

Replace it with your own n8n webhook.

---

# 💡 Future Improvements

- 📎 File Upload Support
- 🖼 Image Understanding
- 📄 PDF Chat
- 🎤 Voice Input
- 🔊 Text-to-Speech
- 🌍 Multi-language Support
- 👤 User Authentication
- 💾 Chat History Database
- ☁️ Cloud Storage
- 📊 Analytics Dashboard

---

# 📷 Screenshots

## Home Page

> Add a screenshot here

```markdown
![Home](assets/home.png)
```

---

## Chat Interface

> Add a screenshot here

```markdown
![Chat](assets/chat.png)
```

---

## Knowledge Base

> Add a screenshot here

```markdown
![Knowledge Base](assets/knowledge.png)
```

---

# 🎯 Use Cases

- AI Assistant
- Student Learning
- Programming Help
- Workflow Automation
- Business Chatbots
- Customer Support
- Productivity Assistant

---

# 📈 Workflow Architecture

```
Browser
     │
     ▼
HTML + CSS + JavaScript
     │
     ▼
Fetch API
     │
     ▼
n8n Webhook
     │
     ▼
AI Agent
     │
     ├── OpenAI Chat Model
     ├── Memory
     └── Prompt
     │
     ▼
Respond to Webhook
     │
     ▼
Browser
```

---

# 👩‍💻 Developed By

**Nayana N. Kulkarni**

Information Science & Engineering

AI • Data Science • Automation

---

# ⭐ If you like this project

Please consider giving it a ⭐ on GitHub.

It motivates me to build more AI-powered open-source projects.

---

<div align="center">

### Made with ❤️ using HTML, CSS, JavaScript, OpenAI & n8n

</div>
