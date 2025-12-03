import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, CreditCard, MessageSquare, Bell, PlusSquare, MapPin, Calendar, Eye, Heart, Trash2, Plus, Upload, ArrowLeft, TrendingUp, Users, Package, Clock } from 'lucide-react';
import imgProfilePicture from "figma:asset/1c4161bf20bdb41ac0700c17ed74cd91f3a6a17c.png";
import imgAvatarSmall from "figma:asset/ce67d23a925af943f1634792363b9deeb4837a22.png";
import imgFrame from "figma:asset/43f2f605db1237de841075d44257840170104211.png";
import imgCart from "figma:asset/3804975201d933a8a80d186f5faf1c1caca3d0f7.png";
import imgLogoIcon2 from "figma:asset/2b7e679a7a86a6e24f1b9a9001522d9b89b0d82e.png";
import RightPanel from "../imports/RightPanel-19-149";
import PostViewOverlay from "../components/PostViewOverlay";
import ShopItemOverlay from "../components/ShopItemOverlay";
import NotificationPanel from "../components/NotificationPanel";
import LeftSidebar from "../components/LeftSidebar";

type TabType = 'posts' | 'media' | 'shop' | 'status' | 'tagged';
type ViewType = 'profile' | 'settings' | 'analytics';

// Mock user data
const mockUsers: Record<string, any> = {
  'etharial': {
    username: 'ETHARIAL',
    handle: '@etharial',
    bio: 'artist + web dev !',
    location: 'PH',
    joinedDate: 'September 2011',
    following: 569,
    followers: 72,
    isSeller: true,
    avatar: imgProfilePicture,
    banner: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  'regularuser': {
    username: 'RegularUser',
    handle: '@regularuser',
    bio: 'Just a regular person enjoying Meraki!',
    location: 'US',
    joinedDate: 'March 2020',
    following: 123,
    followers: 456,
    isSeller: false,
    avatar: imgAvatarSmall,
    banner: 'linear-gradient(135deg, #60A5FA 0%, #1e3a8a 100%)',
  },
  // Current logged-in user simulation
  'penguu': {
    username: 'Pengu',
    handle: '@penguu',
    bio: 'The official Meraki mascot! 🐧',
    location: 'Antarctica',
    joinedDate: 'January 2020',
    following: 789,
    followers: 10234,
    isSeller: true,
    avatar: imgAvatarSmall,
    banner: 'linear-gradient(135deg, #FBB040 0%, #f59e0b 100%)',
  },
};

export default function UserProfilePage() {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('posts');
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [isPostOverlayOpen, setIsPostOverlayOpen] = useState(false);
  const [selectedShopItem, setSelectedShopItem] = useState<any>(null);
  const [isShopOverlayOpen, setIsShopOverlayOpen] = useState(false);
  const [activeView, setActiveView] = useState<ViewType>('profile');
  const [isEditMode, setIsEditMode] = useState(false);
  const [showCreateItemModal, setShowCreateItemModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);

  // SIMULATION: Owner detection
  const currentLoggedInUser = 'penguu'; // The logged-in user
  const profileUsername = username?.toLowerCase() || 'etharial';
  const isOwner = currentLoggedInUser === profileUsername;

  const user = mockUsers[profileUsername] || mockUsers['etharial'];

  // Check if we should open settings view or enter edit mode automatically
  useEffect(() => {
    if (location.state?.openSettings && isOwner) {
      setActiveView('settings');
    } else if (location.state?.editMode && isOwner) {
      setIsEditMode(true);
    }
  }, [location.state, isOwner]);

  if (!user) {
    return <div>User not found</div>;
  }

  const tabs: { key: TabType; label: string }[] = [
    { key: 'posts', label: 'POSTS' },
    { key: 'media', label: 'MEDIA' },
    { key: 'shop', label: 'SHOP' },
    ...(user.isSeller ? [{ key: 'status' as TabType, label: 'STATUS' }] : []),
    { key: 'tagged', label: 'TAGGED' },
  ];

  // Mock data
  const postsImages = [
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400',
    'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400',
    'https://images.unsplash.com/photo-1618005198734-f1eb8ff83f4d?w=400',
    'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400',
  ];

  const mediaImages = [
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600',
    'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=600',
    'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=600',
    'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=600',
  ];

  const taggedImages = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
  ];

  const [shopItems, setShopItems] = useState([
    { id: 'shop-1', image: imgCart, title: 'PRODUCT/SERVICE 1', price: 850, rating: 3, reviewCount: 35, views: 245, likes: 89 },
    { id: 'shop-2', image: imgCart, title: 'PRODUCT/SERVICE 2', price: 1200, rating: 4, reviewCount: 95, views: 512, likes: 156 },
    { id: 'shop-3', image: imgCart, title: 'PRODUCT/SERVICE 3', price: 1500, rating: 5, reviewCount: 325, views: 1023, likes: 402 },
    { id: 'shop-4', image: imgCart, title: 'PRODUCT/SERVICE 4', price: 950, rating: 4, reviewCount: 145, views: 678, likes: 234 },
  ]);

  const statusOrders = [
    { id: 1, slot: '01', type: 'Portrait Commission', status: 'In Progress', client: 'User8234', progress: 75 },
    { id: 2, slot: '02', type: 'Character Design', status: 'In Progress', client: 'User1923', progress: 40 },
    { id: 3, slot: '03', type: 'Illustration', status: 'Pending', client: 'User5647', progress: 0 },
    { id: 4, slot: '04', type: 'Portrait Commission', status: 'Pending', client: 'User9012', progress: 0 },
    { id: 5, slot: '05', type: 'Character Design', status: 'Completed', client: 'User3456', progress: 100 },
    { id: 6, slot: '06', type: 'Illustration', status: 'Completed', client: 'User7890', progress: 100 },
    { id: 7, slot: '07', type: 'Open Slot', status: 'Open', client: null, progress: 0 },
    { id: 8, slot: '08', type: 'Open Slot', status: 'Open', client: null, progress: 0 },
  ];

  const handleDeleteItem = (itemId: string) => {
    setItemToDelete(itemId);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      setShopItems(prev => prev.filter(item => item.id !== itemToDelete));
    }
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  const handleOpenPost = (index: number) => {
    setSelectedPost({
      id: String(index),
      username: user.username,
      avatar: user.avatar,
      timestamp: '2h',
      images: [postsImages[index % postsImages.length]],
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      likes: 1000,
      likedBy: 'Username',
      comments: [],
    });
    setIsPostOverlayOpen(true);
  };

  const handleOpenShopItem = (itemId: string) => {
    const item = shopItems.find(i => i.id === itemId);
    if (!item) return;

    setSelectedShopItem({
      ...item,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      images: [item.image, item.image, item.image],
      seller: { username: user.username, avatar: user.avatar },
      relatedItems: shopItems.filter(si => si.id !== itemId).slice(0, 4),
    });
    setIsShopOverlayOpen(true);
  };

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

  // Hide right sidebar when in settings/analytics view
  const showRightSidebar = activeView === 'profile';

  const renderTabContent = () => {
    switch (activeTab) {
      case 'posts':
        return (
          <div className="grid grid-cols-3 gap-1">
            {postsImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => handleOpenPost(idx)}
                className="aspect-square bg-[#f1f5f9] cursor-pointer hover:opacity-80 transition-opacity overflow-hidden"
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        );

      case 'media':
        return (
          <div className="grid grid-cols-3 gap-1">
            {mediaImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => handleOpenPost(idx)}
                className="aspect-[3/4] bg-[#f1f5f9] cursor-pointer hover:opacity-80 transition-opacity overflow-hidden"
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        );

      case 'shop':
        return (
          <div>
            {/* Owner Controls */}
            {isOwner && (
              <div className="px-4 pt-4 pb-2 flex gap-3 justify-end border-b border-[#e2e8f0]">
                <button
                  onClick={() => setActiveView('analytics')}
                  className="bg-[#60A5FA] hover:bg-[#3b82f6] text-white px-4 py-2 rounded-lg font-['Work_Sans:SemiBold',sans-serif] text-[13px] transition-colors flex items-center gap-2"
                >
                  <TrendingUp className="w-4 h-4" />
                  View Analytics
                </button>
                <button
                  onClick={() => setIsEditMode(!isEditMode)}
                  className={`${
                    isEditMode ? 'bg-[#FBB040]' : 'bg-white border-2 border-[#60A5FA]'
                  } hover:bg-[#FBB040] ${
                    isEditMode ? 'text-white' : 'text-[#60A5FA]'
                  } hover:text-white px-4 py-2 rounded-lg font-['Work_Sans:SemiBold',sans-serif] text-[13px] transition-colors`}
                >
                  {isEditMode ? 'Done Editing' : 'Edit Shop'}
                </button>
              </div>
            )}

            <div className="grid grid-cols-4 gap-4 p-4">
              {/* Add Item Card (Owner Only) */}
              {isOwner && isEditMode && (
                <button
                  onClick={() => setShowCreateItemModal(true)}
                  className="bg-white border-2 border-dashed border-[#cbd5e1] rounded-lg overflow-hidden hover:border-[#60A5FA] transition-all group"
                >
                  <div className="aspect-square flex flex-col items-center justify-center gap-3">
                    <Plus className="w-12 h-12 text-[#cbd5e1] group-hover:text-[#60A5FA]" />
                    <span className="font-['Work_Sans:SemiBold',sans-serif] text-[14px] text-[#94a3b8] group-hover:text-[#60A5FA]">
                      Add Item
                    </span>
                  </div>
                </button>
              )}

              {shopItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative"
                >
                  {/* Delete Icon (Owner Edit Mode) */}
                  {isOwner && isEditMode && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteItem(item.id);
                      }}
                      className="absolute top-2 left-2 z-10 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}

                  <div
                    className="cursor-pointer"
                    onClick={() => !isEditMode && handleOpenShopItem(item.id)}
                  >
                    <div className="relative aspect-square bg-[#f1f5f9]">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      
                      <div className="absolute top-2 right-2 flex flex-col gap-2">
                        <div className="bg-white/90 rounded-full p-1.5 flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5 text-[#64748b]" />
                          <span className="text-[10px] font-['Work_Sans:Medium',sans-serif] text-[#64748b] pr-1">
                            {item.views}
                          </span>
                        </div>
                        <div className="bg-white/90 rounded-full p-1.5 flex items-center gap-1">
                          <Heart className="w-3.5 h-3.5 text-[#64748b]" />
                          <span className="text-[10px] font-['Work_Sans:Medium',sans-serif] text-[#64748b] pr-1">
                            {item.likes}
                          </span>
                        </div>
                      </div>

                      {!isEditMode && (
                        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                          <button className="bg-[#1e293b] text-white px-4 py-2 rounded-md font-['Work_Sans:Medium',sans-serif] text-[12px]">
                            Add To Cart
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="p-3">
                      <h3 className="font-['Work_Sans:Medium',sans-serif] font-medium text-[12px] text-[#1e293b] mb-1 truncate">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < item.rating ? 'text-[#FBB040]' : 'text-[#e2e8f0]'}>★</span>
                        ))}
                        <span className="text-[10px] font-['Work_Sans:Regular',sans-serif] text-[#94a3b8] ml-1">
                          ({item.reviewCount})
                        </span>
                      </div>
                      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2963a3]">
                        ₱{item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'status':
        return (
          <div className="p-8">
            <div className="mb-6">
              <h2 className="font-['Work_Sans:Bold',sans-serif] text-[28px] text-[#1e293b] mb-2">
                Commission Queue
              </h2>
              <p className="font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#64748b]">
                Current commission status and queue management
              </p>
            </div>

            <div className="bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="grid grid-cols-[100px_1fr_200px_140px] gap-4 px-6 py-4 bg-[#f8fafc] border-b border-[#e2e8f0]">
                <div className="font-['Work_Sans:SemiBold',sans-serif] text-[12px] text-[#64748b] uppercase tracking-wider">Slot</div>
                <div className="font-['Work_Sans:SemiBold',sans-serif] text-[12px] text-[#64748b] uppercase tracking-wider">Commission Type</div>
                <div className="font-['Work_Sans:SemiBold',sans-serif] text-[12px] text-[#64748b] uppercase tracking-wider">Client</div>
                <div className="font-['Work_Sans:SemiBold',sans-serif] text-[12px] text-[#64748b] uppercase tracking-wider">Status</div>
              </div>

              <div>
                {statusOrders.map((order) => {
                  const getStatusBadge = (status: string) => {
                    switch (status) {
                      case 'In Progress': return 'bg-[#60A5FA] text-white';
                      case 'Pending': return 'bg-[#e2e8f0] text-[#64748b]';
                      case 'Completed': return 'bg-[#10b981] text-white';
                      case 'Open': return 'border-2 border-dashed border-[#cbd5e1] text-[#94a3b8] bg-transparent';
                      default: return 'bg-[#e2e8f0] text-[#64748b]';
                    }
                  };

                  const isOpen = order.status === 'Open';

                  return (
                    <div
                      key={order.id}
                      className={`grid grid-cols-[100px_1fr_200px_140px] gap-4 px-6 py-5 border-b border-[#f1f5f9] last:border-b-0 hover:bg-[#f8fafc] transition-colors ${
                        isOpen ? 'opacity-60' : ''
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="font-['Work_Sans:Bold',sans-serif] text-[16px] text-[#1e293b]">
                          #{order.slot}
                        </span>
                      </div>

                      <div className="flex flex-col justify-center">
                        <span className={`font-['Work_Sans:Medium',sans-serif] text-[14px] ${
                          isOpen ? 'text-[#94a3b8]' : 'text-[#1e293b]'
                        }`}>
                          {order.type}
                        </span>
                        
                        {order.status === 'In Progress' && order.progress > 0 && (
                          <div className="mt-2">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-[6px] bg-[#e2e8f0] rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-[#60A5FA] rounded-full transition-all duration-300"
                                  style={{ width: `${order.progress}%` }}
                                />
                              </div>
                              <span className="font-['Work_Sans:Medium',sans-serif] text-[11px] text-[#64748b]">
                                {order.progress}%
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center">
                        <span className={`font-['Work_Sans:Regular',sans-serif] text-[14px] ${
                          isOpen ? 'text-[#cbd5e1]' : 'text-[#64748b]'
                        }`}>
                          {order.client ? `${order.client.substring(0, 7)}...` : '—'}
                        </span>
                      </div>

                      <div className="flex items-center">
                        <span className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full font-['Work_Sans:SemiBold',sans-serif] text-[12px] ${getStatusBadge(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-[16px] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#DBEAFE] flex items-center justify-center">
                    <span className="font-['Work_Sans:Bold',sans-serif] text-[18px] text-[#60A5FA]">
                      {statusOrders.filter(o => o.status === 'In Progress').length}
                    </span>
                  </div>
                  <div>
                    <p className="font-['Work_Sans:SemiBold',sans-serif] text-[14px] text-[#64748b]">In Progress</p>
                    <p className="font-['Work_Sans:Regular',sans-serif] text-[12px] text-[#94a3b8]">Active commissions</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[16px] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#FEF3C7] flex items-center justify-center">
                    <span className="font-['Work_Sans:Bold',sans-serif] text-[18px] text-[#F59E0B]">
                      {statusOrders.filter(o => o.status === 'Pending').length}
                    </span>
                  </div>
                  <div>
                    <p className="font-['Work_Sans:SemiBold',sans-serif] text-[14px] text-[#64748b]">Pending</p>
                    <p className="font-['Work_Sans:Regular',sans-serif] text-[12px] text-[#94a3b8]">Awaiting start</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[16px] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#D1FAE5] flex items-center justify-center">
                    <span className="font-['Work_Sans:Bold',sans-serif] text-[18px] text-[#10b981]">
                      {statusOrders.filter(o => o.status === 'Completed').length}
                    </span>
                  </div>
                  <div>
                    <p className="font-['Work_Sans:SemiBold',sans-serif] text-[14px] text-[#64748b]">Completed</p>
                    <p className="font-['Work_Sans:Regular',sans-serif] text-[12px] text-[#94a3b8]">Finished orders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'tagged':
        return (
          <div className="grid grid-cols-3 gap-1">
            {taggedImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => handleOpenPost(idx)}
                className="aspect-square bg-[#f1f5f9] cursor-pointer hover:opacity-80 transition-opacity overflow-hidden"
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  const renderSettingsView = () => (
    <div className="max-w-[900px] mx-auto p-8 bg-white">
      {/* Back Button */}
      <button
        onClick={() => setActiveView('profile')}
        className="flex items-center gap-2 text-[#60A5FA] hover:text-[#3b82f6] mb-6 font-['Work_Sans:SemiBold',sans-serif] text-[14px]"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Profile
      </button>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <img src={imgLogoIcon2} alt="Meraki" className="w-12 h-12" />
          <h1 className="font-['Work_Sans:Bold',sans-serif] text-[28px] text-[#1e293b]">
            ACCOUNT SETTINGS
          </h1>
        </div>
        <p className="font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#64748b] mb-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget dui luctus, dignissim est quis, posuere ex.
        </p>
        <button className="font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#0095f6]">
          Learn more
        </button>
      </div>

      {/* Left Menu & Right Form */}
      <div className="grid grid-cols-[240px_1fr] gap-8">
        {/* Left Menu */}
        <div className="border-r border-[#e2e8f0] pr-6">
          <button className="w-full text-left px-4 py-3 font-['Work_Sans:SemiBold',sans-serif] text-[14px] text-[#1e293b] border-l-2 border-[#1e293b] bg-[#f8fafc]">
            Edit profile
          </button>
          <button className="w-full text-left px-4 py-3 font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#64748b] hover:bg-[#f8fafc]">
            Change password
          </button>
          <button className="w-full text-left px-4 py-3 font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#64748b] hover:bg-[#f8fafc]">
            Apps and websites
          </button>
          <button className="w-full text-left px-4 py-3 font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#64748b] hover:bg-[#f8fafc]">
            Email notifications
          </button>
          <button className="w-full text-left px-4 py-3 font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#64748b] hover:bg-[#f8fafc]">
            Push notifications
          </button>
          <button className="w-full text-left px-4 py-3 font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#64748b] hover:bg-[#f8fafc]">
            Manage contacts
          </button>
          <button className="w-full text-left px-4 py-3 font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#64748b] hover:bg-[#f8fafc]">
            Privacy and security
          </button>
          <button className="w-full text-left px-4 py-3 font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#64748b] hover:bg-[#f8fafc]">
            Ads
          </button>
          <button className="w-full text-left px-4 py-3 font-['Work_Sans:Regular',sans-serif] text-[#64748b] hover:bg-[#f8fafc]">
            Supervision
          </button>
          <button className="w-full text-left px-4 py-3 font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#64748b] hover:bg-[#f8fafc]">
            Login activity
          </button>
          <button className="w-full text-left px-4 py-3 font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#64748b] hover:bg-[#f8fafc]">
            Help
          </button>

          <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
            <div className="flex items-center gap-3 mb-2">
              <img src={imgLogoIcon2} alt="Meraki" className="w-10 h-10" />
              <h3 className="font-['Work_Sans:SemiBold',sans-serif] text-[16px] text-[#0095f6]">
                Accounts Center
              </h3>
            </div>
            <p className="font-['Work_Sans:Regular',sans-serif] text-[12px] text-[#8e8e8e]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget dui luctus.
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="space-y-6">
          <div>
            <label className="block font-['Work_Sans:SemiBold',sans-serif] text-[14px] text-[#1e293b] mb-2">
              Name
            </label>
            <input
              type="text"
              defaultValue={user.username}
              className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg font-['Work_Sans:Regular',sans-serif] text-[14px] focus:outline-none focus:border-[#60A5FA]"
            />
            <p className="font-['Work_Sans:Regular',sans-serif] text-[12px] text-[#8e8e8e] mt-2">
              Help people discover your account by using the name you're known by: either your full name, nickname, or business name.
            </p>
            <p className="font-['Work_Sans:Regular',sans-serif] text-[12px] text-[#8e8e8e]">
              You can only change your name twice within 14 days.
            </p>
          </div>

          <div>
            <label className="block font-['Work_Sans:SemiBold',sans-serif] text-[14px] text-[#1e293b] mb-2">
              Username
            </label>
            <input
              type="text"
              defaultValue={user.handle}
              className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg font-['Work_Sans:Regular',sans-serif] text-[14px] focus:outline-none focus:border-[#60A5FA]"
            />
            <p className="font-['Work_Sans:Regular',sans-serif] text-[12px] text-[#8e8e8e] mt-2">
              In most cases, you'll be able to change your username back to @{user.handle.substring(1)} for another 14 days. <span className="text-[#0095f6]">Learn more</span>
            </p>
          </div>

          <div>
            <label className="block font-['Work_Sans:SemiBold',sans-serif] text-[14px] text-[#1e293b] mb-2">
              Bio
            </label>
            <textarea
              defaultValue={user.bio}
              rows={3}
              maxLength={150}
              className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg font-['Work_Sans:Regular',sans-serif] text-[14px] focus:outline-none focus:border-[#60A5FA] resize-none"
            />
            <p className="font-['Work_Sans:Regular',sans-serif] text-[12px] text-[#8e8e8e] mt-1">
              {user.bio.length} / 150
            </p>
            <p className="font-['Work_Sans:SemiBold',sans-serif] text-[13px] text-[#1e293b] mt-3 mb-1">
              Personal information
            </p>
            <p className="font-['Work_Sans:Regular',sans-serif] text-[12px] text-[#8e8e8e]">
              Provide your personal information, even if the account is used for a business, a pet or something else. This won't be a part of your public profile.
            </p>
          </div>

          <div>
            <label className="block font-['Work_Sans:SemiBold',sans-serif] text-[14px] text-[#1e293b] mb-2">
              Email
            </label>
            <input
              type="email"
              defaultValue="Email"
              className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg font-['Work_Sans:Regular',sans-serif] text-[14px] focus:outline-none focus:border-[#60A5FA]"
            />
          </div>

          <div>
            <label className="block font-['Work_Sans:SemiBold',sans-serif] text-[14px] text-[#1e293b] mb-2">
              Phone number
            </label>
            <input
              type="tel"
              defaultValue="+91 971"
              className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg font-['Work_Sans:Regular',sans-serif] text-[14px] focus:outline-none focus:border-[#60A5FA]"
            />
          </div>

          <div>
            <label className="block font-['Work_Sans:SemiBold',sans-serif] text-[14px] text-[#1e293b] mb-2">
              Gender
            </label>
            <select className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg font-['Work_Sans:Regular',sans-serif] text-[14px] focus:outline-none focus:border-[#60A5FA]">
              <option>Prefer not to say</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="flex items-start gap-3">
              <input type="checkbox" defaultChecked className="mt-1" />
              <div>
                <p className="font-['Work_Sans:SemiBold',sans-serif] text-[14px] text-[#1e293b]">
                  Show account suggestions on profiles
                </p>
                <p className="font-['Work_Sans:Regular',sans-serif] text-[12px] text-[#8e8e8e]">
                  Choose whether people can see similar account suggestions on your profile, and whether your account can be suggested on other profiles. <span className="text-[#0095f6]">?</span>
                </p>
              </div>
            </label>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="bg-[#60A5FA] hover:bg-[#3b82f6] text-white px-6 py-3 rounded-lg font-['Work_Sans:SemiBold',sans-serif] text-[14px] transition-colors">
              Submit
            </button>
            <button className="text-[#0095f6] hover:text-[#0077cc] font-['Work_Sans:SemiBold',sans-serif] text-[14px]">
              Temporarily deactivate my account
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAnalyticsView = () => (
    <div className="max-w-[1200px] mx-auto p-8 bg-[#f8fafc]">
      {/* Back Button */}
      <button
        onClick={() => setActiveView('profile')}
        className="flex items-center gap-2 text-[#60A5FA] hover:text-[#3b82f6] mb-6 font-['Work_Sans:SemiBold',sans-serif] text-[14px]"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Shop
      </button>

      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <ArrowLeft className="w-6 h-6 text-[#2963a3]" />
        <h1 className="font-['Work_Sans:Bold',sans-serif] text-[32px] text-[#2963a3] uppercase">
          {user.username} SHOP ANALYTICS
        </h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-[16px] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#64748b] mb-1">Total User</p>
              <p className="font-['Work_Sans:Bold',sans-serif] text-[32px] text-[#1e293b]">40,689</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#DBEAFE] flex items-center justify-center">
              <Users className="w-6 h-6 text-[#60A5FA]" />
            </div>
          </div>
          <p className="font-['Work_Sans:Medium',sans-serif] text-[12px] text-[#10b981] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            8.5% Up from yesterday
          </p>
        </div>

        <div className="bg-white rounded-[16px] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#64748b] mb-1">Total Order</p>
              <p className="font-['Work_Sans:Bold',sans-serif] text-[32px] text-[#1e293b]">10293</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#FEF3C7] flex items-center justify-center">
              <Package className="w-6 h-6 text-[#F59E0B]" />
            </div>
          </div>
          <p className="font-['Work_Sans:Medium',sans-serif] text-[12px] text-[#10b981] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            1.3% Up from past week
          </p>
        </div>

        <div className="bg-white rounded-[16px] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#64748b] mb-1">Total Sales</p>
              <p className="font-['Work_Sans:Bold',sans-serif] text-[32px] text-[#1e293b]">$89,000</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#D1FAE5] flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#10b981]" />
            </div>
          </div>
          <p className="font-['Work_Sans:Medium',sans-serif] text-[12px] text-[#ef4444] flex items-center gap-1">
            ↓ 4.3% Down from yesterday
          </p>
        </div>

        <div className="bg-white rounded-[16px] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#64748b] mb-1">Total Pending</p>
              <p className="font-['Work_Sans:Bold',sans-serif] text-[32px] text-[#1e293b]">2040</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#FFE4E6] flex items-center justify-center">
              <Clock className="w-6 h-6 text-[#F43F5E]" />
            </div>
          </div>
          <p className="font-['Work_Sans:Medium',sans-serif] text-[12px] text-[#10b981] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            1.8% Up from yesterday
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="col-span-2 bg-white rounded-[16px] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-['Work_Sans:Bold',sans-serif] text-[20px] text-[#1e293b]">Revenue</h2>
            <select className="px-3 py-1 border border-[#e2e8f0] rounded-lg font-['Work_Sans:Regular',sans-serif] text-[12px]">
              <option>October</option>
            </select>
          </div>
          <div className="h-[300px] flex items-center justify-center text-[#94a3b8]">
            <p className="font-['Work_Sans:Regular',sans-serif]">[Revenue Chart Placeholder]</p>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#60A5FA]" />
              <span className="font-['Work_Sans:Medium',sans-serif] text-[12px] text-[#64748b]">Sales</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#7DD3C0]" />
              <span className="font-['Work_Sans:Medium',sans-serif] text-[12px] text-[#64748b]">Profit</span>
            </div>
          </div>
        </div>

        {/* Customers Chart */}
        <div className="bg-white rounded-[16px] p-6 shadow-sm">
          <h2 className="font-['Work_Sans:Bold',sans-serif] text-[20px] text-[#1e293b] mb-6">Customers</h2>
          <div className="h-[200px] flex items-center justify-center">
            <p className="font-['Work_Sans:Regular',sans-serif] text-[#94a3b8]">[Donut Chart]</p>
          </div>
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#64748b]">New Customers</span>
              <span className="font-['Work_Sans:Bold',sans-serif] text-[18px] text-[#1e293b]">34,249</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#64748b]">Repeated</span>
              <span className="font-['Work_Sans:Bold',sans-serif] text-[18px] text-[#1e293b]">1420</span>
            </div>
          </div>
        </div>

        {/* Featured Product */}
        <div className="bg-white rounded-[16px] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-['Work_Sans:Bold',sans-serif] text-[20px] text-[#1e293b]">Featured Product</h2>
            <div className="flex gap-2">
              <button className="p-1 hover:bg-[#f8fafc] rounded">‹</button>
              <button className="p-1 hover:bg-[#f8fafc] rounded">›</button>
            </div>
          </div>
          <div className="text-center">
            <div className="w-full h-[200px] bg-[#f8fafc] rounded-lg mb-4 flex items-center justify-center">
              <Package className="w-16 h-16 text-[#cbd5e1]" />
            </div>
            <h3 className="font-['Work_Sans:Bold',sans-serif] text-[16px] text-[#1e293b] mb-2">
              Beats Headphone 2019
            </h3>
            <p className="font-['Work_Sans:SemiBold',sans-serif] text-[20px] text-[#2963a3]">
              $89.00
            </p>
          </div>
        </div>

        {/* Sales Analytics Chart */}
        <div className="col-span-2 bg-white rounded-[16px] p-6 shadow-sm">
          <h2 className="font-['Work_Sans:Bold',sans-serif] text-[20px] text-[#1e293b] mb-6">Sales Analytics</h2>
          <div className="h-[250px] flex items-center justify-center text-[#94a3b8]">
            <p className="font-['Work_Sans:Regular',sans-serif]">[Line Chart Placeholder]</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full min-h-screen bg-[#f8fafc] flex">
      <LeftSidebar
        activeMode={isNotificationPanelOpen ? 'notifications' : 'profile'}
        isSidebarHovered={isSidebarHovered}
        setIsSidebarHovered={setIsSidebarHovered}
        onNotificationsClick={handleNotificationsClick}
        onHomeClick={() => navigate('/home')}
        sidebarItems={sidebarItems}
      />

      {/* Center Column */}
      <div 
        className={`flex-1 transition-all duration-300 ease-in-out z-10 ${
          isSidebarHovered && !isNotificationPanelOpen ? 'ml-[250px]' : 'ml-[72px]'
        } ${showRightSidebar ? 'mr-[340px]' : 'mr-0'} relative`}
      >
        {activeView === 'profile' ? (
          <div className="max-w-[700px] mx-auto">
            <div className="w-full h-[200px]" style={{ background: user.banner }} />

            <div className="bg-white px-6 pb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-[140px] h-[140px] rounded-full border-4 border-white -mt-[70px] overflow-hidden bg-white">
                  <img src={user.avatar} alt={user.username} className="w-full h-full object-cover" />
                </div>

                <div className="flex gap-3 mt-4">
                  {isOwner ? (
                    <button
                      onClick={() => setActiveView('settings')}
                      className="bg-[#60A5FA] hover:bg-[#3b82f6] text-white px-6 py-2 rounded-lg font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[14px] transition-colors"
                    >
                      EDIT PROFILE
                    </button>
                  ) : (
                    <>
                      <button className="bg-[#60A5FA] hover:bg-[#3b82f6] text-white px-6 py-2 rounded-lg font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[14px] transition-colors">
                        FOLLOW
                      </button>
                      <button
                        onClick={() => navigate(`/messages?userId=${profileUsername}`)}
                        className="bg-white hover:bg-[#f8fafc] text-[#60A5FA] border-2 border-[#60A5FA] px-6 py-2 rounded-lg font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[14px] transition-colors"
                      >
                        MESSAGE
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="mb-2">
                <h1 className="font-['Work_Sans:Bold',sans-serif] font-bold text-[24px] text-[#0f1419]">
                  {user.username}
                </h1>
                <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-[#5b7083]">
                  {user.handle}
                </p>
              </div>

              <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[16px] text-[#0f1419] mb-3">
                {user.bio}
              </p>

              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-2 text-[#5b7083]">
                  <MapPin className="w-4 h-4" />
                  <span className="font-['Work_Sans:Medium',sans-serif] font-medium text-[16px]">
                    {user.location}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#5b7083]">
                  <Calendar className="w-4 h-4" />
                  <span className="font-['Work_Sans:Medium',sans-serif] font-medium text-[16px]">
                    Joined {user.joinedDate}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="font-['Work_Sans:Bold',sans-serif] font-bold text-[16px] text-[#0f1419]">
                    {user.following}
                  </span>
                  <span className="font-['Comfortaa:Medium',sans-serif] font-medium text-[16px] text-[#5b7083]">
                    Following
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-['Work_Sans:Bold',sans-serif] font-bold text-[16px] text-[#0f1419]">
                    {user.followers}
                  </span>
                  <span className="font-['Comfortaa:Medium',sans-serif] font-medium text-[16px] text-[#5b7083]">
                    Followers
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white border-t border-[#e2e8f0] flex items-center justify-center">
              {tabs.map((tab) => {
                const isShopDisabled = tab.key === 'shop' && !user.isSeller;
                
                return (
                  <button
                    key={tab.key}
                    onClick={() => !isShopDisabled && setActiveTab(tab.key)}
                    disabled={isShopDisabled}
                    className={`flex-1 py-4 text-center font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[14px] transition-all border-b-2 ${
                      activeTab === tab.key
                        ? 'border-[#60A5FA] text-[#60A5FA]'
                        : isShopDisabled
                        ? 'border-transparent text-[#cbd5e1] opacity-50 cursor-not-allowed'
                        : 'border-transparent text-[#94a3b8] hover:text-[#60A5FA]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="bg-white min-h-[400px]">
              {renderTabContent()}
            </div>
          </div>
        ) : activeView === 'settings' ? (
          renderSettingsView()
        ) : (
          renderAnalyticsView()
        )}
      </div>

      {/* Right Sidebar - Conditionally shown */}
      {showRightSidebar && (
        <div className="fixed right-0 top-0 h-screen w-[371px] overflow-hidden">
          <RightPanel />
        </div>
      )}

      {/* Post View Overlay */}
      <PostViewOverlay
        post={selectedPost}
        isOpen={isPostOverlayOpen}
        onClose={() => setIsPostOverlayOpen(false)}
      />

      {/* Shop Item Overlay */}
      <ShopItemOverlay
        item={selectedShopItem}
        isOpen={isShopOverlayOpen}
        onClose={() => setIsShopOverlayOpen(false)}
      />

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[16px] p-6 max-w-[400px] w-full mx-4">
            <h3 className="font-['Work_Sans:Bold',sans-serif] text-[20px] text-[#1e293b] mb-3">
              Delete Item?
            </h3>
            <p className="font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#64748b] mb-6">
              This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-6 py-2 rounded-lg font-['Work_Sans:SemiBold',sans-serif] text-[14px] text-[#64748b] hover:bg-[#f8fafc] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-['Work_Sans:SemiBold',sans-serif] text-[14px] transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Item Modal */}
      {showCreateItemModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[16px] p-6 max-w-[600px] w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-['Work_Sans:Bold',sans-serif] text-[20px] text-[#1e293b]">
                Edit Shop
              </h3>
              <button
                onClick={() => setShowCreateItemModal(false)}
                className="text-[#94a3b8] hover:text-[#64748b]"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Left: Image Upload */}
              <div>
                <div className="aspect-square bg-red-500 rounded-lg flex items-center justify-center relative">
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#FBB040] flex items-center justify-center cursor-pointer">
                    <Upload className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="space-y-4">
                <h3 className="font-['Work_Sans:Bold',sans-serif] text-[18px] text-[#1e293b] mb-4">
                  Product Details
                </h3>

                <div>
                  <label className="block font-['Work_Sans:SemiBold',sans-serif] text-[13px] text-[#1e293b] mb-2">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg font-['Work_Sans:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#60A5FA]"
                  />
                </div>

                <div>
                  <label className="block font-['Work_Sans:SemiBold',sans-serif] text-[13px] text-[#1e293b] mb-2">
                    Type
                  </label>
                  <select className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg font-['Work_Sans:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#60A5FA]">
                    <option>Select type...</option>
                    <option>Commission</option>
                    <option>Product</option>
                  </select>
                </div>

                <div>
                  <label className="block font-['Work_Sans:SemiBold',sans-serif] text-[13px] text-[#1e293b] mb-2">
                    Price
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      className="flex-1 px-3 py-2 border border-[#e2e8f0] rounded-lg font-['Work_Sans:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#60A5FA]"
                    />
                    <button className="bg-[#60A5FA] hover:bg-[#3b82f6] text-white px-4 py-2 rounded-lg font-['Work_Sans:SemiBold',sans-serif] text-[12px]">
                      Add Tags +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block font-['Work_Sans:SemiBold',sans-serif] text-[13px] text-[#1e293b] mb-2">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg font-['Work_Sans:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#60A5FA] resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-end mt-6">
              <button
                onClick={() => setShowCreateItemModal(false)}
                className="px-6 py-2 rounded-lg font-['Work_Sans:SemiBold',sans-serif] text-[14px] text-[#64748b] hover:bg-[#f8fafc] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Simulate adding item
                  setShowCreateItemModal(false);
                }}
                className="bg-[#60A5FA] hover:bg-[#3b82f6] text-white px-6 py-2 rounded-lg font-['Work_Sans:SemiBold',sans-serif] text-[14px] transition-colors"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notification Panel */}
      <NotificationPanel
        isOpen={isNotificationPanelOpen}
        onClose={() => setIsNotificationPanelOpen(false)}
      />
    </div>
  );
}
