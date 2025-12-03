import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Bell, 
  MessageSquare, 
  ShoppingCart, 
  CreditCard, 
  PlusSquare, 
  MoreHorizontal,
  Menu,
  Settings,
  AlertCircle,
  LogOut,
  X
} from 'lucide-react';
import imgLogoIcon2 from "figma:asset/2b7e679a7a86a6e24f1b9a9001522d9b89b0d82e.png";
import imgLogoAlter2 from "figma:asset/a16b685f7c41d886d366b4fedd8fd5dbf6fed524.png";
import imgAvatarSmall from "figma:asset/ce67d23a925af943f1634792363b9deeb4837a22.png";

interface LeftSidebarProps {
  activeMode?: string;
  isSidebarHovered: boolean;
  setIsSidebarHovered: (value: boolean) => void;
  onNotificationsClick?: () => void;
  onCreateClick?: () => void;
  onHomeClick?: () => void;
  sidebarItems?: Array<{ label: string; icon: any; }>;
}

export default function LeftSidebar({
  activeMode = 'home',
  isSidebarHovered,
  setIsSidebarHovered,
  onNotificationsClick,
  onCreateClick,
  onHomeClick,
  sidebarItems = []
}: LeftSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [reportText, setReportText] = useState('');
  const moreButtonRef = useRef<HTMLButtonElement>(null);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMoreMenuOpen &&
        moreMenuRef.current &&
        !moreMenuRef.current.contains(event.target as Node) &&
        moreButtonRef.current &&
        !moreButtonRef.current.contains(event.target as Node)
      ) {
        setIsMoreMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMoreMenuOpen]);

  const handleMoreClick = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  const handleSettingsClick = () => {
    setIsMoreMenuOpen(false);
    navigate('/profile/penguu', { state: { openSettings: true } });
  };

  const handleReportClick = () => {
    setIsMoreMenuOpen(false);
    setIsReportModalOpen(true);
  };

  const handleLogoutClick = () => {
    setIsMoreMenuOpen(false);
    setIsLogoutModalOpen(true);
  };

  const handleReportSubmit = () => {
    console.log('Report Sent:', reportText);
    alert('Report Sent!');
    setReportText('');
    setIsReportModalOpen(false);
  };

  const handleLogoutConfirm = () => {
    setIsLogoutModalOpen(false);
    navigate('/login');
  };

  return (
    <>
      {/* Left Sidebar */}
      <div 
        className={`fixed left-0 top-0 h-screen bg-white border-r border-[#e2e8f0] transition-all duration-300 ease-in-out flex flex-col ${
          isSidebarHovered && activeMode !== 'notifications' ? 'w-[250px]' : 'w-[90px]'
        }`}
        style={{ zIndex: 100 }}
        onMouseEnter={() => {
          if (activeMode !== 'notifications') {
            setIsSidebarHovered(true);
          }
        }}
        onMouseLeave={() => {
          if (activeMode !== 'notifications') {
            setIsSidebarHovered(false);
          }
        }}
      >
        {/* Logo */}
        <div className="h-[100px] flex items-center border-b border-[#e2e8f0] px-5">
          {isSidebarHovered ? (
            <div className="flex items-center gap-4">
              <img src={imgLogoIcon2} alt="Meraki" className="w-[50px] h-[50px] shrink-0" />
              <img src={imgLogoAlter2} alt="MERAKI" className={`h-[80px] w-auto transition-opacity duration-300 ${activeMode === 'notifications' ? 'opacity-0 invisible' : 'opacity-100'}`} />
            </div>
          ) : (
            <div className="w-full flex justify-center">
              <img src={imgLogoIcon2} alt="Meraki" className="w-[50px] h-[50px]" />
            </div>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 py-8 px-4 space-y-2 relative">
          {sidebarItems.map((item, index) => {
            const isHome = item.label === 'Home';
            const isNotifications = item.label === 'Notifications';
            const isCreate = item.label === 'Create';
            const isMessages = item.label === 'Messages';
            const isActive = (isHome && activeMode === 'home') || (isNotifications && activeMode === 'notifications') || (isCreate && activeMode === 'create');
            
            return (
              <button
                key={index}
                onClick={() => {
                  if (isHome && onHomeClick) onHomeClick();
                  else if (isNotifications && onNotificationsClick) onNotificationsClick();
                  else if (isCreate && onCreateClick) onCreateClick();
                  else if (isMessages) navigate('/messages');
                  else if (item.label === 'My Payments') navigate('/payments');
                  else if (item.label === 'Cart and Orders') navigate('/cart');
                }}
                className={`w-full flex items-center ${isSidebarHovered && activeMode !=='notifications' ? 'gap-4 px-4' : 'justify-center px-0'} py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'text-[#FBB040]' 
                    : 'text-[#60A5FA] hover:text-[#FBB040]'
                }`}
              >
                {isHome ? (
                  <svg className="w-[24px] h-[24px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5L12 3l9 6.5v10a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 19.5v-10z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 22V12h6v10" />
                  </svg>
                ) : (
                  (() => {
                    const Icon = item.icon as any;
                    return <Icon className="w-[24px] h-[24px] shrink-0" strokeWidth={1.5} />;
                  })()
                )}
                {isSidebarHovered && activeMode !== 'notifications' && (
                  <span className={`font-['Work_Sans:${isActive ? 'SemiBold' : 'Medium'}',sans-serif] ${isActive ? 'font-semibold' : 'font-medium'} text-[15px] whitespace-nowrap`}>
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}

          {/* More Button */}
          <button
            ref={moreButtonRef}
            onClick={handleMoreClick}
            className={`w-full flex items-center ${isSidebarHovered && activeMode !=='notifications' ? 'gap-4 px-4' : 'justify-center px-0'} py-3 rounded-lg transition-colors ${
              isMoreMenuOpen 
                ? 'text-[#FBB040]' 
                : 'text-[#60A5FA] hover:text-[#FBB040]'
            }`}
          >
            <Menu className="w-[24px] h-[24px] shrink-0" strokeWidth={isMoreMenuOpen ? 2 : 1.5} />
            {isSidebarHovered && activeMode !== 'notifications' && (
              <span className={`font-['Work_Sans:${isMoreMenuOpen ? 'SemiBold' : 'Medium'}',sans-serif] ${isMoreMenuOpen ? 'font-semibold' : 'font-medium'} text-[15px] whitespace-nowrap`}>
                More
              </span>
            )}
          </button>

          {/* More Menu Popover (positioned relative to More button in nav) */}
          {isMoreMenuOpen && (
            <div
              ref={moreMenuRef}
              className="absolute bottom-0 left-4 mb-2 w-[220px] bg-[#fffbf5] rounded-xl shadow-lg border border-[#e2e8f0] overflow-hidden"
              style={{ zIndex: 101 }}
            >
              <button
                onClick={handleSettingsClick}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#f8f4ed] transition-colors text-left"
              >
                <Settings className="w-[20px] h-[20px] text-[#60A5FA]" strokeWidth={1.5} />
                <span className="font-['Work_Sans:Medium',sans-serif] font-medium text-[15px] text-[#1e293b]">
                  Settings
                </span>
              </button>

              <button
                onClick={handleReportClick}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#f8f4ed] transition-colors text-left"
              >
                <AlertCircle className="w-[20px] h-[20px] text-[#60A5FA]" strokeWidth={1.5} />
                <span className="font-['Work_Sans:Medium',sans-serif] font-medium text-[15px] text-[#1e293b]">
                  Report a Problem
                </span>
              </button>

              <div className="h-px bg-[#e2e8f0] mx-2" />

              <button
                onClick={handleLogoutClick}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#fef2f2] transition-colors text-left"
              >
                <LogOut className="w-[20px] h-[20px] text-[#ef4444]" strokeWidth={1.5} />
                <span className="font-['Work_Sans:Medium',sans-serif] font-medium text-[15px] text-[#ef4444]">
                  Log Out
                </span>
              </button>
            </div>
          )}
        </nav>

        {/* User Profile */}
        <div className="h-[88px] border-t border-[#e2e8f0] flex items-center px-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/profile/penguu')}>
            <div className="w-[44px] h-[44px] rounded-full overflow-hidden flex-shrink-0">
              <img src={imgAvatarSmall} alt="Pengu" className="w-full h-full object-cover hover:opacity-80" />
            </div>
            {isSidebarHovered && activeMode !== 'notifications' && (
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[15px] text-[#1e293b]">Pengu</span>
                  <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#FBB040"/>
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-['Work_Sans:Regular',sans-serif] font-normal text-[13px] text-[#94a3b8]">@penguu</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Report a Problem Modal */}
      {isReportModalOpen && (
        <>
          {/* Backdrop - covers center feed and right sidebar only */}
          <div 
            className="fixed inset-0 bg-black/50"
            style={{ zIndex: 60, left: '90px' }}
            onClick={() => setIsReportModalOpen(false)}
          />
          
          {/* Modal */}
          <div 
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] bg-white rounded-2xl shadow-2xl"
            style={{ zIndex: 61 }}
          >
            <div className="p-6 border-b border-[#e2e8f0] flex items-center justify-between">
              <h2 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[20px] text-[#1e293b]">
                Report a Problem
              </h2>
              <button
                onClick={() => setIsReportModalOpen(false)}
                className="text-[#94a3b8] hover:text-[#64748b] transition-colors"
              >
                <X className="w-[24px] h-[24px]" />
              </button>
            </div>

            <div className="p-6">
              <textarea
                value={reportText}
                onChange={(e) => setReportText(e.target.value)}
                placeholder="Please describe the issue you're experiencing..."
                className="w-full h-[200px] p-4 border border-[#e2e8f0] rounded-lg resize-none font-['Work_Sans:Regular',sans-serif] font-normal text-[15px] text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#60A5FA] focus:ring-2 focus:ring-[#60A5FA]/20"
              />
            </div>

            <div className="p-6 pt-0 flex items-center justify-end gap-3">
              <button
                onClick={() => setIsReportModalOpen(false)}
                className="px-6 py-2.5 rounded-lg border border-[#e2e8f0] font-['Work_Sans:Medium',sans-serif] font-medium text-[15px] text-[#64748b] hover:bg-[#f8fafc] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleReportSubmit}
                className="px-6 py-2.5 rounded-lg bg-[#60A5FA] font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[15px] text-white hover:bg-[#3b82f6] transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}

      {/* Log Out Confirmation Modal */}
      {isLogoutModalOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50"
            style={{ zIndex: 60 }}
            onClick={() => setIsLogoutModalOpen(false)}
          />
          
          {/* Modal */}
          <div 
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white rounded-2xl shadow-2xl"
            style={{ zIndex: 61 }}
          >
            <div className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#fef2f2] flex items-center justify-center">
                <LogOut className="w-8 h-8 text-[#ef4444]" strokeWidth={1.5} />
              </div>
              <h2 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[20px] text-[#1e293b] mb-2">
                Log Out
              </h2>
              <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[15px] text-[#64748b] mb-6">
                Are you sure you want to log out?
              </p>
              
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setIsLogoutModalOpen(false)}
                  className="px-6 py-2.5 rounded-lg border border-[#e2e8f0] font-['Work_Sans:Medium',sans-serif] font-medium text-[15px] text-[#64748b] hover:bg-[#f8fafc] transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogoutConfirm}
                  className="px-6 py-2.5 rounded-lg bg-[#ef4444] font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[15px] text-white hover:bg-[#dc2626] transition-colors"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
