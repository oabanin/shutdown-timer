// Extend the Window interface to include deferredPrompt
declare global {
  interface Window {
    deferredPrompt: BeforeInstallPromptEvent | null;
  }
}

// Define the type for the deferred prompt event
interface BeforeInstallPromptEvent extends Event {
  prompt: () => void;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}
