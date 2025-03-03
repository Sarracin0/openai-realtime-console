import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import logo from "/assets/openai-logomark.svg";

export default function Index() {
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [message, setMessage] = useState("");

  function startSession() {
    console.log("Session Started");
    setIsSessionActive(true);
  }

  function stopSession() {
    console.log("Session Stopped");
    setIsSessionActive(false);
  }

  function sendMessage() {
    console.log("Message Sent:", message);
    setMessage("");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-lg">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <img src={logo} alt="OpenAI Logo" className="h-10" />
            <h1 className="text-xl font-semibold">Realtime Console</h1>
          </div>

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
                <Button onClick={sendMessage}>✉️ Invia</Button>
              </div>
              <Button className="w-full bg-red-500 hover:bg-red-600" onClick={stopSession}>
                ❌ Termina Sessione
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
