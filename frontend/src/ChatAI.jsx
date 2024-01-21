import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import "./ChatAI.css"; // Make sure the path is correct

function ChatAI() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const location = useLocation(); // Access location state

  useEffect(() => {
    if (location.state?.message) {
      const receivedMessage = location.state.message;
      chat(receivedMessage); // Call chat function with the received message
    }
  }, [location.state]);

  const chat = async (receivedMessage) => {
    setIsTyping(true);

    // Use receivedMessage if provided, otherwise use message from state
    const messageToSend = receivedMessage ?? message;
    if (!messageToSend.trim()) return;

    let newChat = { role: "user", content: messageToSend };

    // Only add the user message to chats if it's manually typed
    if (!receivedMessage) {
      setChats((chats) => [...chats, newChat]);
      setMessage(""); // Clear the input field if the message was typed in manually
    }

    try {
      const response = await fetch("http://localhost:8000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chats: [...chats, newChat] }),
      });
      const data = await response.json();
      // Only add the server's response to chats
      setChats((chats) => [...chats, data.output]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <main>
      <h1>Chat AI Demo</h1>

      <section> {/* Light Blue Background */}
        {chats && chats.length
          ? chats.map((chat, index) => (
              <p key={index} className={chat.role === "user" ? "user_msg" : "assist_msg"}>
                <span>
                  <b>{chat.role.toUpperCase()}</b>
                </span>
                <span>:</span>
                <span>{chat.content}</span>
              </p>
            ))
          : ""}
      </section>

      <div className={isTyping ? "" : "hide"}>
        <p>
          <i>{isTyping ? "Typing..." : ""}</i>
        </p>
      </div>

      <form action="" onSubmit={(e) => { e.preventDefault(); chat(); }}>
        <input
          type="text"
          name="message"
          value={message}
          placeholder="Type a message here and hit Enter..."
          onChange={(e) => setMessage(e.target.value)}
          size="100" // Adjust this value as needed
          style={{ width: "100%", maxWidth: "900px" }} // CSS for more control over width
        />
      </form>
    </main>
  );
}

export default ChatAI;
