
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import ChatPopup from "../components/ChatPopup";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar onOpenMessages={() => setChatOpen(true)} />
      
      <div className="pt-6 lg:pt-6" />

      <div className="container mx-auto px-4 ml-20 lg:ml-72">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Center feed achuchbells*/}
          <main className="py-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-base-100 rounded-xl shadow-md overflow-hidden">
                <div className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sky-400" />
                  <div>
                    <div className="font-semibold">USERNAME</div>
                    <div className="text-xs text-zinc-400">5h</div>
                  </div>
                </div>

                <div className="relative h-[600px] bg-gradient-to-b from-sky-100 to-sky-700">
                  <button className="absolute left-6 top-1/2 -translate-y-1/2 btn btn-ghost btn-circle">‹</button>
                  <button className="absolute right-6 top-1/2 -translate-y-1/2 btn btn-ghost btn-circle">›</button>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-white/80" />
                    <span className="w-2 h-2 rounded-full bg-white/50" />
                    <span className="w-2 h-2 rounded-full bg-white/50" />
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Right recommendations */}
          <aside className="hidden lg:block py-6">
            <div className="sticky top-24 space-y-4">
              <div className="bg-gradient-to-br from-yellow-50 via-sky-50 to-sky-100 rounded-xl p-6 shadow-sm">
                <h3 className="text-sm font-semibold mb-3">Recommendations for you</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center justify-between"><span>What's Trending Today</span><button className="btn btn-xs btn-outline">Explore</button></li>
                  <li className="flex items-center justify-between"><span>What Happening Recently</span><button className="btn btn-xs btn-outline">Explore</button></li>
                  <li className="flex items-center justify-between"><span>Trending Profiles</span><button className="btn btn-xs btn-outline">Explore</button></li>
                  <li className="flex items-center justify-between"><span>You might like...</span><button className="btn btn-xs btn-outline">Explore</button></li>
                </ul>
              </div>

              <div className="bg-base-100 rounded-xl p-6 text-center">
                <div className="text-xs text-zinc-500">Terms of Service · Privacy Policy · Cookie Policy</div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Floating message button */}
      <button
        onClick={() => setChatOpen(true)}
        className="fixed right-6 bottom-6 z-40 btn btn-primary btn-circle btn-lg shadow-lg"
        aria-label="Open messages"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <ChatPopup open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
};

export default HomePage;