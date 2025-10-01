// src/components/ChatbaseWidget.tsx
import { useEffect } from "react";

// Keep this from your Chatbase snippet
const BOOTSTRAP_ID = "i4bmp0R_Aw3WczRhZyh1X";

// Optional: read your bot ID from env (set VITE_CHATBASE_ID in .env)
const CHATBASE_ID = import.meta.env.VITE_CHATBASE_ID as string | undefined;

// Local type augments so you don't need a separate global.d.ts
declare global {
  interface Window {
    chatbase?: any;
    chatbaseConfig?: { chatbotId: string };
    __CHATBASE_LOADED__?: boolean;
  }
}

export default function ChatbaseWidget() {
  useEffect(() => {
    // Prevent duplicate injections (hot reloads, multiple mounts)
    if (window.__CHATBASE_LOADED__) return;
    window.__CHATBASE_LOADED__ = true;

    // If you have a bot ID, set it BEFORE loading the script
    if (CHATBASE_ID) {
      window.chatbaseConfig = { chatbotId: CHATBASE_ID };
    }

    // Also guard by script element id (belt & suspenders)
    if (!document.getElementById(BOOTSTRAP_ID)) {
      const inline = document.createElement("script");
      inline.type = "text/javascript";
      inline.text = `
        (function(){
          if (!window.chatbase || window.chatbase("getState") !== "initialized") {
            window.chatbase = (...args) => {
              if (!window.chatbase.q) { window.chatbase.q = [] }
              window.chatbase.q.push(args);
            };
            window.chatbase = new Proxy(window.chatbase, {
              get(target, prop) {
                if (prop === "q") { return target.q }
                return (...a) => target(prop, ...a);
              }
            });
          }
          const onLoad = function () {
            const script = document.createElement("script");
            script.src = "https://www.chatbase.co/embed.min.js";
            script.id = "${BOOTSTRAP_ID}";
            script.setAttribute("domain", "www.chatbase.co");
            document.body.appendChild(script);
          };
          if (document.readyState === "complete") { onLoad() }
          else { window.addEventListener("load", onLoad) }
        })();
      `;
      document.body.appendChild(inline);
    }

    // Allow closing the chat with the Escape key
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && window.chatbase) {
        try { window.chatbase("close"); } catch {}
      }
    };
    window.addEventListener("keydown", onKey);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return null;
}
