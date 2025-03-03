import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function SessionControls({ startSession, stopSession, sendTextMessage, isSessionActive }) {
  const [message, setMessage] = useState("");

  function handleSendMessage() {
    if (message.trim()) {
      sendTextMessage(message);
      setMessage("");
    }
  }

  return (
    <div className="flex flex-col space-y-4 p-4">
      {!isSessionActive ? (
        <Button className="w-full" onClick={startSession}>
          🎙️ Avvia Sessione
        </Button>
      ) : (
        <>
          <div className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Scrivi un messaggio..."
            />
            <Button onClick={handleSendMessage}>✉️ Invia</Button>
          </div>
          <Button className="w-full bg-red-500 hover:bg-red-600" onClick={stopSession}>
            ❌ Termina Sessione
          </Button>
        </>
      )}
    </div>
  );
}
