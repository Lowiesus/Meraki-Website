import {
  MessageCircle,
  ShoppingCart,
  CreditCard,
  Bell,
  PlusSquare,
  MoreHorizontal,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import rightPanel from "/Right_Panel.png";
import ChatPopup from "../components/ChatPopup";
import Feed from "../components/Feed";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-[#f8fafc] flex">
      <Navbar onOpenMessages={() => setChatOpen(true)} />

      {/* Center Feed */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out z-10 ml-20 lg:ml-72 mr-0 lg:mr-[340px] relative`}
      >
        <div className="max-w-[640px] mx-auto py-8 px-6">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="bg-white flex items-center gap-3 px-4 py-3 rounded-lg border border-[#e2e8f0] shadow-sm">
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#94a3b8"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                placeholder="Search here..."
                className="font-['Work_Sans',sans-serif] font-normal bg-transparent border-none outline-none text-[#1e293b] text-[14px] flex-1 placeholder:text-[#94a3b8]"
              />
              {(isSearchFocused || searchQuery) && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setIsSearchFocused(false);
                  }}
                  className="text-[#94a3b8] hover:text-[#64748b] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                    <path
                      d="M12 4L4 12M4 4l8 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Feed Content */}
          <div className="space-y-8">
            <Feed />
          </div>
        </div>
      </div>

      {/* Right Widget Column */}
      <div className="hidden lg:block fixed right-0 top-0 h-screen w-[371px] overflow-hidden">
        <div
          className="h-full border-l border-[#e2e8f0] overflow-y-auto"
          style={{
            backgroundImage: `url(${rightPanel})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="p-6 space-y-6">
            {/* Recommendations Section */}
            <div className="bg-gradient-to-br from-yellow-50 via-sky-50 to-sky-100 rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-semibold mb-4 text-[#1e293b]">
                Recommendations for you
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center justify-between">
                  <span className="text-[#64748b]">What's Trending Today</span>
                  <button className="px-3 py-1 text-xs font-medium text-[#2963a3] border border-[#2963a3] rounded-md hover:bg-[#2963a3] hover:text-white transition-colors">
                    Explore
                  </button>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-[#64748b]">
                    What Happening Recently
                  </span>
                  <button className="px-3 py-1 text-xs font-medium text-[#2963a3] border border-[#2963a3] rounded-md hover:bg-[#2963a3] hover:text-white transition-colors">
                    Explore
                  </button>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-[#64748b]">Trending Profiles</span>
                  <button className="px-3 py-1 text-xs font-medium text-[#2963a3] border border-[#2963a3] rounded-md hover:bg-[#2963a3] hover:text-white transition-colors">
                    Explore
                  </button>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-[#64748b]">You might like...</span>
                  <button className="px-3 py-1 text-xs font-medium text-[#2963a3] border border-[#2963a3] rounded-md hover:bg-[#2963a3] hover:text-white transition-colors">
                    Explore
                  </button>
                </li>
              </ul>
            </div>

            {/* Footer Links */}
            <div className="bg-white rounded-xl p-6 text-center border border-[#e2e8f0]">
              <div className="text-xs text-[#94a3b8] space-x-2">
                <span className="hover:underline cursor-pointer">
                  Terms of Service
                </span>
                <span>·</span>
                <span className="hover:underline cursor-pointer">
                  Privacy Policy
                </span>
                <span>·</span>
                <span className="hover:underline cursor-pointer">
                  Cookie Policy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating message button */}
      <button
        onClick={() => setChatOpen(true)}
        className="fixed right-6 bottom-6 z-40 w-14 h-14 bg-[#2963a3] hover:bg-[#1e4a7a] text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
        aria-label="Open messages"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <ChatPopup open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
};

export default HomePage;