function fillQuestion(text) {
    document.getElementById('expert-question').value = text;
}

function handleEnter(e) {
    if (e.key === 'Enter') askExpert();
}

async function askExpert() {
    const inputField = document.getElementById('expert-question');
    const question = inputField.value.trim();
    if (!question) return; 

    const chatHistory = document.getElementById('chat-history');
    
    // Show User Message
    chatHistory.innerHTML += `<div class="user-msg">${question}</div>`;
    inputField.value = ''; 
    
    // Show Loading
    const loadingId = 'loading-' + Date.now();
    chatHistory.innerHTML += `<div id="${loadingId}" class="bot-msg">Thinking... 🤔</div>`;
    chatHistory.scrollTop = chatHistory.scrollHeight;

    try {
        const response = await fetch('/ask_expert', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question: question })
        });
        
        const data = await response.json();
        document.getElementById(loadingId).remove();
        
        // Render the answer
        const cleanAnswer = data.answer.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        chatHistory.innerHTML += `<div class="bot-msg"><b>Morpheus:</b><br>${cleanAnswer}</div>`;
        chatHistory.scrollTop = chatHistory.scrollHeight;

    } catch (error) {
        document.getElementById(loadingId).remove();
        chatHistory.innerHTML += `<div class="bot-msg" style="color: red;">⚠️ Connection error. Check terminal.</div>`;
    }
}