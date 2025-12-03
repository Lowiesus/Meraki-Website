import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ShoppingCart, CreditCard, MessageSquare, Bell, PlusSquare } from 'lucide-react';
import imgAvatarSmall from "figma:asset/ce67d23a925af943f1634792363b9deeb4837a22.png";
import imgImage from "figma:asset/01847ee79b7d7ce57bf0f88e1c0b8b0ca1d2a21b.png";
import imgImage1 from "figma:asset/0f9f12bda8e3148d4ddc7ad873daaf33e4715a54.png";
import imgBgTexture31 from "figma:asset/0d00f6be6ac86f96b5d39e2e21a7b72f784d6eac.png";
import svgPaths from "../imports/svg-ehjou241ok";
import NotificationPanel from "../components/NotificationPanel";
import LeftSidebar from "../components/LeftSidebar";

interface Message {
  id: string;
  text: string;
  timestamp: string;
  isSent: boolean;
  images?: string[];
}

interface Conversation {
  userId: string;
  username: string;
  avatar: string;
  status: 'Online' | 'Offline';
  lastMessage: string;
  messages: Message[];
  tab?: 'general' | 'service';
  orderType?: 'commission' | 'product';
}

// Mock conversation data
const mockConversations: Conversation[] = [
  // General Tab Conversations
  {
    userId: 'user1',
    username: 'USERNAME',
    avatar: imgAvatarSmall,
    status: 'Online',
    lastMessage: 'ofc ofc take your time <3 i can wait if it takes longer tho dwdw~',
    tab: 'general',
    messages: [
      { id: '1', text: 'yes of course! would you like the design to be more modern?', timestamp: 'Today 11:56', isSent: true },
      { id: '2', text: 'can it be something like this? brighter colors pls !! ( •̀ ω •́ )✧', timestamp: 'Today 11:55', isSent: false, images: [imgImage, imgImage1] },
      { id: '3', text: 'YIPPEEE i can\'t wait to see it !!!!!!!!!!', timestamp: 'Today 11:53', isSent: false },
      { id: '4', text: 'oki oki will do! i\'ll send more sketches once it\'s done', timestamp: 'Today 11:52', isSent: true },
      { id: '5', text: 'i\'ll try my best to send them by the end of the day, would that be all right?', timestamp: 'Today 11:54', isSent: true },
      { id: '6', text: 'ofc ofc take your time <3 i can wait if it takes longer tho dwdw~', timestamp: 'Today 11:55', isSent: false },
    ],
  },
  {
    userId: 'user2',
    username: 'USERNAME',
    avatar: imgAvatarSmall,
    status: 'Online',
    lastMessage: 'Thanks! Let me know when you\'re free',
    tab: 'general',
    messages: [
      { id: '1', text: 'Hey! Are you available for a commission?', timestamp: 'Today 10:30', isSent: false },
      { id: '2', text: 'Yes! What did you have in mind?', timestamp: 'Today 10:32', isSent: true },
      { id: '3', text: 'I need a character design for my game project', timestamp: 'Today 10:33', isSent: false },
      { id: '4', text: 'Sounds great! I can start this week', timestamp: 'Today 10:35', isSent: true },
      { id: '5', text: 'Thanks! Let me know when you\'re free', timestamp: 'Today 10:36', isSent: false },
    ],
  },
  {
    userId: 'etharial',
    username: 'ETHARIAL',
    avatar: imgAvatarSmall,
    status: 'Online',
    lastMessage: 'Looking forward to working with you!',
    tab: 'general',
    messages: [
      { id: '1', text: 'Hi! I saw your profile and I love your work', timestamp: 'Today 15:20', isSent: false },
      { id: '2', text: 'Thank you! What can I help you with?', timestamp: 'Today 15:22', isSent: true },
      { id: '3', text: 'I\'d like to commission a portrait piece', timestamp: 'Today 15:23', isSent: false },
      { id: '4', text: 'Great! I can start on that this week', timestamp: 'Today 15:25', isSent: true },
      { id: '5', text: 'Looking forward to working with you!', timestamp: 'Today 15:26', isSent: false },
    ],
  },
  // Service Tab Conversations - Commissions
  {
    userId: 'commission-001',
    username: 'ETHARIAL',
    avatar: imgAvatarSmall,
    status: 'Online',
    lastMessage: 'Perfect! Can\'t wait to see the final piece',
    tab: 'service',
    orderType: 'commission',
    messages: [
      { id: '1', text: 'Hi! I wanted to check on the progress of my commission (Order #1532425135231)', timestamp: 'Today 14:30', isSent: true },
      { id: '2', text: 'Hello! I\'m currently working on the sketch phase. I\'ll have some drafts ready by tomorrow', timestamp: 'Today 14:35', isSent: false },
      { id: '3', text: 'That sounds great! Do you need any additional reference images?', timestamp: 'Today 14:37', isSent: true },
      { id: '4', text: 'Actually yes! If you have more character poses, that would be helpful', timestamp: 'Today 14:40', isSent: false },
      { id: '5', text: 'Sure! I\'ll send them over in a bit', timestamp: 'Today 14:42', isSent: true },
      { id: '6', text: 'Perfect! Can\'t wait to see the final piece', timestamp: 'Today 14:45', isSent: true },
    ],
  },
  {
    userId: 'commission-002',
    username: 'MEEKA',
    avatar: imgAvatarSmall,
    status: 'Online',
    lastMessage: 'Thank you! The artwork is amazing',
    tab: 'service',
    orderType: 'commission',
    messages: [
      { id: '1', text: 'Hi! I received the draft and I love it!', timestamp: 'Today 12:15', isSent: true },
      { id: '2', text: 'Glad you like it! Any revisions you\'d like to make?', timestamp: 'Today 12:20', isSent: false },
      { id: '3', text: 'Could you make the background a bit brighter?', timestamp: 'Today 12:22', isSent: true },
      { id: '4', text: 'Of course! I\'ll adjust that and send you the updated version', timestamp: 'Today 12:25', isSent: false },
      { id: '5', text: 'Thank you! The artwork is amazing', timestamp: 'Today 12:30', isSent: true },
    ],
  },
  {
    userId: 'commission-003',
    username: 'ARTIST_NAME',
    avatar: imgAvatarSmall,
    status: 'Offline',
    lastMessage: 'Will do! Thanks for your patience',
    tab: 'service',
    orderType: 'commission',
    messages: [
      { id: '1', text: 'Quick question about the commission details', timestamp: 'Yesterday 16:45', isSent: true },
      { id: '2', text: 'Sure! What would you like to know?', timestamp: 'Yesterday 16:50', isSent: false },
      { id: '3', text: 'Can we adjust the deadline by a few days?', timestamp: 'Yesterday 16:52', isSent: true },
      { id: '4', text: 'Absolutely! I\'ll update the timeline for you', timestamp: 'Yesterday 16:55', isSent: false },
      { id: '5', text: 'Will do! Thanks for your patience', timestamp: 'Yesterday 17:00', isSent: true },
    ],
  },
  // Service Tab Conversations - Products
  {
    userId: 'product-001',
    username: 'SHOPOWNER',
    avatar: imgAvatarSmall,
    status: 'Online',
    lastMessage: 'Your order has been shipped!',
    tab: 'service',
    orderType: 'product',
    messages: [
      { id: '1', text: 'Hi! I wanted to inquire about my product order #1532425135231', timestamp: 'Today 13:20', isSent: true },
      { id: '2', text: 'Hello! Your order is currently being processed', timestamp: 'Today 13:25', isSent: false },
      { id: '3', text: 'When can I expect it to ship?', timestamp: 'Today 13:27', isSent: true },
      { id: '4', text: 'It should ship within 2-3 business days', timestamp: 'Today 13:30', isSent: false },
      { id: '5', text: 'Your order has been shipped!', timestamp: 'Today 15:00', isSent: false },
    ],
  },
  {
    userId: 'product-002',
    username: 'SELLER_NAME',
    avatar: imgAvatarSmall,
    status: 'Online',
    lastMessage: 'Thanks for your order! ✨',
    tab: 'service',
    orderType: 'product',
    messages: [
      { id: '1', text: 'Hi! Can I change the shipping address for my order?', timestamp: 'Today 11:00', isSent: true },
      { id: '2', text: 'Sure! What\'s the new address?', timestamp: 'Today 11:05', isSent: false },
      { id: '3', text: '123 New Street, City, ZIP 12345', timestamp: 'Today 11:07', isSent: true },
      { id: '4', text: 'Updated! Your order will be sent to the new address', timestamp: 'Today 11:10', isSent: false },
      { id: '5', text: 'Thanks for your order! ✨', timestamp: 'Today 11:12', isSent: false },
    ],
  },
  {
    userId: 'product-003',
    username: 'STORE_MANAGER',
    avatar: imgAvatarSmall,
    status: 'Offline',
    lastMessage: 'Package should arrive tomorrow!',
    tab: 'service',
    orderType: 'product',
    messages: [
      { id: '1', text: 'Hi! Checking on the delivery status', timestamp: 'Yesterday 10:30', isSent: true },
      { id: '2', text: 'Your package is out for delivery!', timestamp: 'Yesterday 10:45', isSent: false },
      { id: '3', text: 'Great! What\'s the tracking number?', timestamp: 'Yesterday 10:47', isSent: true },
      { id: '4', text: 'TRK123456789 - you can track it on our website', timestamp: 'Yesterday 10:50', isSent: false },
      { id: '5', text: 'Package should arrive tomorrow!', timestamp: 'Yesterday 11:00', isSent: false },
    ],
  },
];

export default function MessagesPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [activeTab, setActiveTab] = useState<'general' | 'service'>('general');
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState('');
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);

  // Handle navigation from Cart/Orders page
  useEffect(() => {
    const tab = searchParams.get('tab') as 'general' | 'service' | null;
    const orderId = searchParams.get('orderId');
    const orderType = searchParams.get('orderType') as 'commission' | 'product' | null;
    const username = searchParams.get('username');

    // If coming from cart, switch to service tab
    if (tab === 'service') {
      setActiveTab('service');
      
      // Try to find matching conversation by order type and username
      if (orderType) {
        const matchingConv = mockConversations.find(
          c => c.tab === 'service' && c.orderType === orderType
        );
        if (matchingConv) {
          setSelectedUserId(matchingConv.userId);
        }
      }
    }

    // Handle entry from user profile
    const userId = searchParams.get('userId');
    if (userId && !tab) {
      setSelectedUserId(userId);
    }
  }, [searchParams]);

  // Filter conversations based on active tab
  const filteredConversations = mockConversations.filter(c => c.tab === activeTab);

  const selectedConversation = selectedUserId
    ? mockConversations.find(c => c.userId === selectedUserId)
    : null;

  const handleNotificationsClick = () => {
    setIsNotificationPanelOpen(!isNotificationPanelOpen);
  };

  const sidebarItems = [
    { icon: 'home', label: 'Home' },
    { icon: ShoppingCart, label: 'Cart and Orders' },
    { icon: CreditCard, label: 'My Payments' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: Bell, label: 'Notifications' },
    { icon: PlusSquare, label: 'Create' },
  ];

  return (
    <div className="w-full h-screen bg-[#D1ECFF] flex overflow-hidden">
      <LeftSidebar
        activeMode={isNotificationPanelOpen ? 'notifications' : 'messages'}
        isSidebarHovered={isSidebarHovered}
        setIsSidebarHovered={setIsSidebarHovered}
        onNotificationsClick={handleNotificationsClick}
        onHomeClick={() => navigate('/home')}
        sidebarItems={sidebarItems}
      />

      {/* Main Content Area */}
      <div 
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isSidebarHovered && !isNotificationPanelOpen ? 'ml-[250px]' : 'ml-[90px]'
        } h-screen flex overflow-hidden`}
      >
        {/* Left Pane - Conversation List */}
        <div className="w-[340px] h-full flex flex-col bg-[#D1ECFF] overflow-hidden relative">
          {/* Background Texture Layer */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Rotated Texture Image */}
            <div className="absolute flex h-[1290px] items-center justify-center left-[-248px] top-[-99px] w-[1618px]">
              <div className="flex-none" style={{ transform: 'rotate(11.442deg)' }}>
                <div className="h-[1024px] relative w-[1444px]">
                  <img 
                    alt="" 
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full opacity-[0.4]" 
                    src={imgBgTexture31} 
                  />
                </div>
              </div>
            </div>
            
            {/* Circular Gradient Overlay */}
            <div className="absolute flex h-[1228px] items-center justify-center left-[-515px] top-[80px] w-[1227px]">
              <div className="flex-none" style={{ transform: 'rotate(180deg) scaleY(-1)' }}>
                <div className="h-[1228px] opacity-50 overflow-hidden relative w-[1227px]">
                  <div className="absolute inset-[15%_14.96%_14.96%_15%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 860 861">
                      <g>
                        <path d="M432.272 769.538C245.351 769.538 93.2766 617.266 93.2766 430.291H186.897C186.897 478.866 201.289 526.35 228.254 566.739C255.219 607.127 293.545 638.607 338.386 657.196C383.227 675.785 432.569 680.648 480.172 671.171C527.775 661.695 571.501 638.304 605.82 603.956C640.14 569.609 663.513 525.847 672.981 478.205C682.45 430.563 677.591 381.181 659.017 336.304C640.443 291.426 608.989 253.069 568.634 226.082C528.278 199.095 480.833 184.691 432.297 184.691V91.1172C619.218 91.1172 771.292 243.389 771.292 430.389C771.292 617.389 619.194 769.538 432.272 769.538Z" fill="#FFF3C7" />
                        <path d="M433.082 676.235C367.848 676.235 305.286 650.3 259.159 604.135C213.032 557.97 187.118 495.357 187.118 430.07C187.118 364.783 213.032 302.17 259.159 256.005C305.286 209.84 367.848 183.905 433.082 183.905V277.601C392.678 277.601 353.928 293.665 325.358 322.258C296.788 350.852 280.738 389.633 280.738 430.07C280.738 470.507 296.788 509.288 325.358 537.881C353.928 566.475 392.678 582.539 433.082 582.539V676.235Z" fill="#C5E7FF" />
                        <path d="M429.72 860.141V766.518C615.046 766.518 765.918 615.621 765.918 430.046C765.918 244.47 615.145 93.5735 429.72 93.5735C244.296 93.5735 93.5222 244.47 93.5222 430.046H0C0 192.919 192.787 0 429.72 0C666.654 0 859.44 192.919 859.44 430.046C859.44 667.172 666.654 860.141 429.72 860.141Z" fill="#95D2FF" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-shrink-0 p-[20px] pb-[16px] relative z-10">
            <div className="bg-[#F6F7F9] flex items-center gap-[10px] px-[16px] py-[16px] rounded-[65px] w-full">
              <svg className="w-[16px] h-[16px] shrink-0" fill="none" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6.74237" cy="6.74237" r="5.99237" stroke="#6C757D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d="M10.9102 11.2214L13.2595 13.5646" stroke="#6C757D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
              <input
                type="text"
                placeholder="Search here..."
                className="font-['Work_Sans:Medium',sans-serif] font-medium bg-transparent border-none outline-none text-[#6c757d] text-[12px] flex-1 placeholder:text-[#6c757d]"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex-shrink-0 relative z-10">
            <div className="bg-[#F6F7F9] h-[49px] relative border-b border-[#A9C6DB]">
              <div className="flex items-center h-full">
                <button
                  onClick={() => setActiveTab('general')}
                  className={`relative px-[28px] py-[14px] transition-colors ${
                    activeTab === 'general'
                      ? 'text-[#2963A3]'
                      : 'text-[#2963A3] opacity-30'
                  }`}
                >
                  <span className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[12px] uppercase leading-[21px]">
                    GENERAL
                  </span>
                  {activeTab === 'general' && (
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#2963A3]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('service')}
                  className={`relative px-[28px] py-[14px] transition-colors ${
                    activeTab === 'service'
                      ? 'text-[#2963A3]'
                      : 'text-[#2963A3] opacity-30'
                  }`}
                >
                  <span className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[12px] uppercase leading-[21px]">
                    SERVICE
                  </span>
                  {activeTab === 'service' && (
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#2963A3]" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Conversation List */}
          <div className="flex-1 overflow-y-auto px-[20px] pt-[18px] pb-[20px] space-y-[10px] scrollbar-hide relative z-10">
            {filteredConversations.map((conversation) => (
              <button
                key={conversation.userId}
                onClick={() => setSelectedUserId(conversation.userId)}
                className={`w-full flex items-center gap-[14px] px-[15px] py-[18px] rounded-[20px] transition-all ${
                  selectedUserId === conversation.userId 
                    ? 'bg-[#428DFE] shadow-[0px_2px_8px_rgba(66,141,254,0.25)]' 
                    : 'bg-[#FEFFF3] shadow-[0px_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0px_2px_6px_rgba(0,0,0,0.12)]'
                }`}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-[39px] h-[39px] rounded-full overflow-hidden bg-[#ef4444]">
                    <img src={conversation.avatar} alt={conversation.username} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex-1 text-left overflow-hidden">
                  <div className="font-['Work_Sans:SemiBold',sans-serif] text-[12px] mb-[2px]" style={{ 
                    color: selectedUserId === conversation.userId ? '#ffffff' : '#1e293b' 
                  }}>
                    {conversation.username}
                  </div>
                  <p className="font-['Work_Sans:Regular',sans-serif] text-[10px] flex items-center gap-[6px]" style={{ 
                    color: selectedUserId === conversation.userId ? 'rgba(255,255,255,0.85)' : '#94a3b8' 
                  }}>
                    <span className={`w-[6px] h-[6px] rounded-full flex-shrink-0 ${
                      conversation.status === 'Online' ? 'bg-[#10b981]' : 'bg-[#94a3b8]'
                    }`} />
                    {conversation.status}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Pane - Chat Window */}
        <div className="flex-1 bg-white flex flex-col overflow-hidden">
          {!selectedConversation ? (
            // Empty State
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <div className="w-24 h-24 rounded-full bg-[#E8F0FE] flex items-center justify-center mb-6">
                <MessageSquare className="w-12 h-12 text-[#A9C7DB]" />
              </div>
              <h2 className="font-['Work_Sans:Bold',sans-serif] text-[24px] text-[#1e293b] mb-2">
                Select a message
              </h2>
              <p className="font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#94a3b8] max-w-[300px]">
                Choose a conversation from the list to start chatting
              </p>
            </div>
          ) : (
            // Active Chat
            <>
              {/* Chat Header */}
              <div className="flex-shrink-0 flex items-center justify-between px-[22.857px] h-[71px] border-b border-[#dbdbdb] bg-white">
                <div className="flex items-center gap-[14px]">
                  <div className="relative">
                    <div className="w-[48px] h-[48px] rounded-full overflow-hidden bg-[#ef4444] border-[1.143px] border-[rgba(0,0,0,0.1)]">
                      <img src={selectedConversation.avatar} alt={selectedConversation.username} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[18.286px] text-[#1e293b] leading-[27.429px] mb-[-2px]">
                      {selectedConversation.username}
                    </h3>
                    <div className="flex items-center gap-[5px]">
                      <div className="w-[18px] h-[18px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <circle cx="9" cy="9" r="4" fill="#94FF7E" />
                        </svg>
                      </div>
                      <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[10px] text-[#8e8e8e] leading-[20.571px]">
                        {selectedConversation.status}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-[18.286px]">
                  <button className="hover:opacity-70 transition-opacity">
                    <svg className="w-[27.429px] h-[27.429px]" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                      <path d={svgPaths.p1e08b3f0} fill="#3971B8" />
                    </svg>
                  </button>
                  <button className="hover:opacity-70 transition-opacity">
                    <svg className="w-[24px] h-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p17573e80} stroke="#3971B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p14516540} opacity="0.4" stroke="#3971B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p19c6f400} opacity="0.4" stroke="#3971B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p2cf26380} stroke="#3971B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </button>
                  <button className="hover:opacity-70 transition-opacity">
                    <svg className="w-[30px] h-[30px]" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
                      <path d={svgPaths.p2c75980} fill="#3971B8" />
                      <path d={svgPaths.p1274f0e0} fill="#3971B8" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto px-[40px] py-[24px] space-y-[20px] scrollbar-hide">
                {selectedConversation.messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isSent ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[55%] ${message.isSent ? 'items-end' : 'items-start'} flex flex-col gap-[8px]`}>
                      {message.images && message.images.length > 0 && (
                        <div className="flex gap-[13.894px] mb-[4px]">
                          {message.images.map((img, idx) => (
                            <div key={idx} className="h-[138.938px] w-[129.676px] rounded-[13.894px] overflow-hidden">
                              <img src={img} alt="" className="w-full h-full object-cover" />
                            </div>
                          ))}
                        </div>
                      )}
                      <div className={`px-[13.894px] py-[9.263px] ${
                        message.isSent
                          ? 'bg-[#5B8FCA] text-white rounded-tl-[11.578px] rounded-bl-[11.578px] rounded-br-[11.578px] shadow-[0px_1.158px_3.473px_0px_rgba(115,20,237,0.1)]'
                          : 'bg-[#000929] text-white rounded-tr-[11.578px] rounded-bl-[11.578px] rounded-br-[11.578px] shadow-[0px_1.158px_3.473px_0px_rgba(237,98,20,0.1)]'
                      }`}>
                        <p className="font-['Comfortaa:Medium',sans-serif] font-medium text-[16.209px] leading-[1.5] tracking-[-0.3242px]">
                          {message.text}
                        </p>
                      </div>
                      <span className="font-['Comfortaa:Regular',sans-serif] font-normal text-[13.894px] text-[#757575] tracking-[-0.1389px] px-[6px]">
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex-shrink-0 px-[40px] py-[32px] bg-white">
                <div className="bg-[#f6f7f9] flex items-center gap-[14px] px-[25px] py-[12px] rounded-[25.143px] border border-[#dbdbdb]">
                  <button className="hover:opacity-70 transition-opacity flex-shrink-0">
                    <div className="w-[27.429px] h-[27.429px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                        <path d={svgPaths.ped1f600} fill="#3971B8" />
                      </svg>
                    </div>
                  </button>
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Message..."
                    className="font-['Roboto:Regular',sans-serif] font-normal bg-transparent border-none outline-none text-[#3971b8] text-[16px] flex-1 placeholder:text-[#3971b8]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  />
                  <button className="hover:opacity-70 transition-opacity flex-shrink-0">
                    <div className="w-[27.429px] h-[27.429px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                        <path clipRule="evenodd" d={svgPaths.p2e894100} fill="#3971B8" fillRule="evenodd" />
                        <path d={svgPaths.p23992c80} stroke="#3971B8" strokeLinejoin="round" strokeWidth="2.28571" />
                        <path d={svgPaths.p10193600} stroke="#3971B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.28571" />
                      </svg>
                    </div>
                  </button>
                  <button className="bg-[#3971b8] hover:bg-[#2e5a96] p-[10px] rounded-[10px] transition-colors flex-shrink-0">
                    <div className="w-[22px] h-[22px] flex items-center justify-center" style={{ transform: 'rotate(13.644deg)' }}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                        <path d={svgPaths.p1d349760} fill="white" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Notification Panel */}
      <NotificationPanel
        isOpen={isNotificationPanelOpen}
        onClose={() => setIsNotificationPanelOpen(false)}
      />
    </div>
  );
}
