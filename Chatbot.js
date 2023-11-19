// Chatbot.js

import React, { useState } from 'react';
import OpenAI from 'openai';

const openai = new OpenAI(process.env.OPENAI_KEY);

function Chatbot() {
  const [chatLog, setChatLog] = useState([
    {
      role: 'system',
      content: 'I am an AI assistant created by MindMingle to be helpful, harmless, and honest.',
    },
  ]);

  const [chatInput, setChatInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add user message to chat log
    setChatLog([...chatLog, { role: 'user', content: chatInput }]);

    // Call OpenAI API to get chatbot response
    try {
      const response = await openai.complete({
        prompt: chatInput,
        max_tokens: 50, // Adjust as needed
      });

      // Add chatbot response to chat log
      setChatLog([...chatLog, { role: 'chatbot', content: response.choices[0].text }]);
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      // Handle error as needed
    }

    // Clear the input field
    setChatInput('');
  };

  return (
    <div className="chatbot">
      <div className="chat-log">
        {chatLog.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chatbot;
