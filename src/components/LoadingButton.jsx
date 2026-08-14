import React from "react";
import { Loader2 } from "lucide-react";

// A button that shows a spinner + disables itself while `loading` is true.
// Use this for any button that triggers an async action (API call), so the
// person always sees that their click registered.
export default function LoadingButton({ loading, children, className = "", disabled, ...props }) {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      className={`flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed ${className}`}
    >
      {loading && <Loader2 size={16} className="animate-spin" />}
      {children}
    </button>
  );
}
