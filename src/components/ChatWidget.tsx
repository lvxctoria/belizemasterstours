import { useState, useRef, useEffect } from "react";

type Msg = { from: "bot" | "user"; text: string };

const INITIAL: Msg[] = [
  {
    from: "bot",
    text: "Hi! 👋 Ask us anything about tours, dates or pricing — we reply fast.",
  },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(INITIAL);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 99999, behavior: "smooth" });
  }, [messages, open]);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim() || !email.trim() || !name.trim() || sending) return;
    const userMsg = text.trim();
    setMessages((m) => [...m, { from: "user", text: userMsg }]);
    setText("");
    setSending(true);
    try {
      await fetch("https://formsubmit.co/ajax/sealeyselvin59@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New chat message from ${name} — Belize Masters Tours`,
          _template: "table",
          _captcha: "false",
          Name: name,
          Email: email,
          Message: userMsg,
          Source: "Website live chat",
        }),
      });
      setMessages((m) => [
        ...m,
        {
          from: "bot",
          text: "Thanks! Your message is on its way. We'll email you back shortly — usually within a few hours. 🌴",
        },
      ]);
      setSent(true);
    } catch {
      setMessages((m) => [
        ...m,
        {
          from: "bot",
          text: "Hmm, something went wrong. Please WhatsApp us at +501 622-8957 instead.",
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open live chat"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full gradient-sun px-5 py-3 font-bold text-deep shadow-2xl shadow-black/30 transition hover:scale-105"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.4A8 8 0 1121 12z" />
          </svg>
          Chat with us
        </button>
      )}

      {open && (
        <div className="fixed bottom-5 right-5 z-50 flex h-[min(560px,85vh)] w-[min(370px,92vw)] flex-col overflow-hidden rounded-2xl bg-card shadow-2xl ring-1 ring-border">
          <div className="flex items-center justify-between gap-3 gradient-sea px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20 font-display font-black">
                B
              </span>
              <div>
                <div className="text-sm font-bold leading-tight">Belize Masters</div>
                <div className="flex items-center gap-1.5 text-xs text-white/80">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Usually replies in a few hours
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1.5 text-white/80 hover:bg-white/10 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-secondary/40 p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed shadow-sm ${
                    m.from === "user"
                      ? "rounded-br-sm bg-primary text-primary-foreground"
                      : "rounded-bl-sm bg-white text-foreground"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {!sent && (
            <form onSubmit={handleSend} className="space-y-2 border-t border-border bg-card p-3">
              <div className="grid grid-cols-2 gap-2">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </div>
              <div className="flex items-end gap-2">
                <textarea
                  required
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend(e as unknown as React.FormEvent);
                    }
                  }}
                  placeholder="Type your message…"
                  rows={2}
                  className="flex-1 resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full gradient-sun text-deep shadow transition hover:scale-105 disabled:opacity-60"
                  aria-label="Send message"
                >
                  {sending ? (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-deep border-t-transparent" />
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l14-7-7 14-2-5-5-2z" />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </>
  );
}
