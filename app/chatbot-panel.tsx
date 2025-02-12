"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { sendMessage, Message } from './services/chat-service'

interface ChatbotPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function ChatbotPanel({ isOpen, onClose }: ChatbotPanelProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!inputText.trim()) return

    const userMessage: Message = {
      role: 'user',
      content: inputText
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsLoading(true)

    try {
      const response = await sendMessage([...messages, userMessage])
      
      if (response) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: response.content
        }])
      }
    } catch (error) {
      console.error('Failed to get response:', error)
      // Add error handling UI here
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-background shadow-lg p-6 overflow-hidden flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Mental Health Chat</h2>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close chat">
            <X className="h-5 w-5" />
          </Button>
        </div>
        <Card className="flex-grow flex flex-col">
          <CardContent className="flex-grow overflow-hidden">
            <ScrollArea className="h-full w-full pr-4">
              {messages.map((message, index) => (
                <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
                  <span
                    className={`inline-block p-2 rounded-lg ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                  >
                    {message.content}
                  </span>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <form
              onSubmit={handleSendMessage}
              className="flex w-full space-x-2"
            >
              <Input placeholder="Type your message here..." value={inputText} onChange={(e) => setInputText(e.target.value)} />
              <Button type="submit" disabled={isLoading}>Send</Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

