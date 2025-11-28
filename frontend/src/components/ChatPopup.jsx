import { Minus, X } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import ChatContainer from "./ChatContainer";
import NoChatSelected from "./NoChatSelected";
import Sidebar from "./Sidebar";

const ChatPopup = ({ open, onClose }) => {
  const { selectedUser } = useChatStore();
  if (!open) return null;

  return (
    <div className="fixed right-6 bottom-6 z-50 w-[92vw] max-w-[920px] md:max-w-[720px] lg:max-w-[640px] h-[80vh] bg-base-100 rounded-xl shadow-2xl border border-base-300 overflow-hidden flex flex-col">
      <header className="flex items-center justify-between px-4 py-2 border-b border-base-200 bg-gradient-to-r from-white/30 to-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-sky-300" />
          <div>
            <div className="text-sm font-medium">Messages</div>
            <div className="text-xs text-zinc-500">{selectedUser ? selectedUser.fullName : "Select a contact"}</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="btn btn-ghost btn-sm p-1"><Minus className="w-4 h-4" /></button>
          <button onClick={onClose} className="btn btn-ghost btn-sm p-1"><X className="w-4 h-4" /></button>
        </div>
      </header>

      <div className="flex-1 min-h-0 overflow-hidden flex">
        <Sidebar />

        <div className="flex-1">
          {selectedUser ? <ChatContainer /> : <NoChatSelected />}
        </div>
      </div>
    </div>
  );
};

export default ChatPopup;
