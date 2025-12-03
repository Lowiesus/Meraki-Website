import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import svgPaths from "../imports/svg-fpkgjapnd5";
import imgFrame from "figma:asset/43f2f605db1237de841075d44257840170104211.png";
import imgAvatarSmall from "figma:asset/ce67d23a925af943f1634792363b9deeb4837a22.png";
import RightPanel from "../imports/RightPanel-19-149";
import { ShoppingCart, CreditCard, MessageSquare, Bell, PlusSquare, MoreHorizontal } from 'lucide-react';
import SearchInitialView from "../components/SearchInitialView";
import SearchActiveView from "../components/SearchActiveView";
import PostViewOverlay from "../components/PostViewOverlay";
import ShopItemCard from "../components/ShopItemCard";
import ShopItemOverlay from "../components/ShopItemOverlay";
import NotificationPanel from "../components/NotificationPanel";
import CreatePostModal from "../components/CreatePostModal";
import DiscardChangesModal from "../components/DiscardChangesModal";
import LeftSidebar from "../components/LeftSidebar";

interface PostCardProps {
  index: number;
  onOpenPost: () => void;
}

function PostCard({ index, onOpenPost }: PostCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isChatPressed, setIsChatPressed] = useState(false);
  const navigate = useNavigate();

  // Alternate between two user types for demonstration
  const username = index % 2 === 0 ? 'etharial' : 'regularuser';
  const displayName = index % 2 === 0 ? 'USERNAME' : 'RegularUser';

  const images = [
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500',
    'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500',
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full flex flex-col mb-8">
      {/* Post Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          {/* Avatar */}
          <div 
            className="size-[40px] rounded-full bg-[#2963a3] border border-[rgba(0,0,0,0.1)] cursor-pointer hover:opacity-80" 
            onClick={() => navigate(`/profile/${username}`)} 
          />
          
          {/* Username and Time */}
          <div className="flex items-center gap-1">
            <span 
              className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#2963a3] text-[14px] cursor-pointer hover:underline" 
              onClick={() => navigate(`/profile/${username}`)}
            >
              {displayName}
            </span>
            <img src={imgFrame} alt="" className="size-[12px]" />
            <span className="font-['Work_Sans:Regular',sans-serif] font-normal text-[#bacbdb] text-[14px]">• 5h</span>
          </div>
        </div>
        
        {/* Options Menu */}
        <button className="text-[#2963a3] hover:text-[#1e4a7a] transition-colors" onClick={() => {}}>
          <MoreHorizontal className="size-[20px]" />
        </button>
      </div>

      {/* Image Carousel */}
      <div 
        className="relative w-full rounded-xl overflow-hidden mb-3 cursor-pointer"
        onClick={onOpenPost}
      >
        <div className="relative w-full h-[400px] bg-gradient-to-b from-[#7dd3fc] to-[#0369a1]">
          <img 
            src={images[currentImageIndex]} 
            alt="Post content" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Previous Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 size-[36px] bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#64748b" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Next Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 size-[36px] bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#64748b" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`rounded-full size-[6px] transition-all ${
                  idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="font-['Work_Sans:Light',sans-serif] font-light text-[#64748b] text-[13px] leading-relaxed mb-3 px-1">
        Proin eu sapien et lacus tristique ultrices euismod quis lorem. Sed euismod id sapien non efficitur. Praesent malesuada justo odio, at porttitor neque lobortis at.
      </p>

      {/* Like and Comment Buttons */}
      <div className="flex items-center gap-6 mb-3 px-1">
        {/* Like Button */}
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
        >
          <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
            <path d={svgPaths.p2190fe00} fill={isLiked ? "#FFD700" : "#2963a3"} />
          </svg>
          <span className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#2963a3] text-[14px]">
            {isLiked ? '741,369' : '741,368'}
          </span>
        </button>

        {/* Comment Button */}
        <button 
          onMouseDown={() => setIsChatPressed(true)}
          onMouseUp={() => setIsChatPressed(false)}
          onMouseLeave={() => setIsChatPressed(false)}
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
        >
          <svg className={`size-[20px] transition-transform ${isChatPressed ? 'scale-90' : 'scale-100'}`} fill="none" viewBox="0 0 24 24">
            <path d={svgPaths.p3ad4d700} stroke="#94a3b8" strokeLinejoin="round" strokeWidth="2" />
          </svg>
          <span className="font-['Work_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[14px]">
            13,384
          </span>
        </button>
      </div>

      {/* Add Comment */}
      <div className="flex items-center gap-2 px-1">
        <input 
          type="text"
          placeholder="Add a comment..."
          className="flex-1 font-['Work_Sans:Regular',sans-serif] font-normal text-[#2963a3] text-[14px] border-none outline-none bg-transparent placeholder:text-[#94a3b8] py-2"
        />
        <button className="text-[#94a3b8] hover:text-[#64748b] transition-colors">
          <svg className="size-[16px]" fill="none" viewBox="0 0 13 13">
            <path d={svgPaths.p2186f900} fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function HomeFeedPage() {
  const navigate = useNavigate();
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [selectedShopItem, setSelectedShopItem] = useState<any>(null);
  const [isShopOverlayOpen, setIsShopOverlayOpen] = useState(false);
  const [activeMode, setActiveMode] = useState<'home' | 'notifications' | 'create'>('home');
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const [isDiscardChangesModalOpen, setIsDiscardChangesModalOpen] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<'home' | 'notifications' | null>(null);

  // Mock post data for the overlay
  const createMockPostData = (index: number) => {
    // Alternate between portrait and landscape images
    const imagesByIndex = [
      // Portrait images
      [
        'https://images.unsplash.com/photo-1700605295478-2478ac29d2ec?w=600&h=800',
        'https://images.unsplash.com/photo-1697059172415-f1e08f9151bb?w=600&h=800',
      ],
      // Landscape images
      [
        'https://images.unsplash.com/photo-1728995025396-b5141e209455?w=800&h=600',
        'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&h=600',
      ],
      // Portrait images
      [
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=800',
        'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=800',
      ],
    ];

    const images = imagesByIndex[index % imagesByIndex.length];

    return {
      id: String(index),
      username: 'Username',
      avatar: imgAvatarSmall,
      timestamp: '2073',
      images,
      caption: 'O ano é 2073. Tatuadores e tatuados mudam a cor e aumentam o brilho de suas tatuagens através de dispositivos futuristas.',
      likes: 1000,
      likedBy: 'Username',
      comments: [
        {
          id: '1',
          username: 'Username',
          avatar: imgAvatarSmall,
          text: 'lorem ipsum',
          timestamp: '1 like',
          likes: 1,
        },
        {
          id: '2',
          username: 'Username',
          avatar: imgAvatarSmall,
          text: 'Ainda bem que não é 2077, ou essas tattoos iam ficar todas bugadas.',
          timestamp: '1d',
          likes: 1,
        },
        {
          id: '3',
          username: 'Username',
          avatar: imgAvatarSmall,
          text: 'None of my prompts look a thing like this',
          timestamp: '1 like',
          likes: 1,
        },
      ],
    };
  };

  const handleOpenPost = (index: number) => {
    setSelectedPost(createMockPostData(index));
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
    setTimeout(() => setSelectedPost(null), 300); // Wait for animation to finish
  };

  // Shop items data
  const shopItems = [
    {
      id: '1',
      title: 'Locale Cafe - Coffee & Waffles',
      price: 350,
      image: 'https://images.unsplash.com/photo-1660203861072-318f2c468d94?w=600',
      rating: 3.5,
      reviewCount: 35,
    },
    {
      id: '2',
      title: 'AK-910 Wired Keyboard',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1705546519170-36092116c2fa?w=600',
      rating: 4.0,
      reviewCount: 72,
    },
    {
      id: '3',
      title: 'IPS LCD Gaming Monitor',
      price: 8799,
      image: 'https://images.unsplash.com/photo-1629148769165-069e8a9e8a30?w=600',
      rating: 4.5,
      reviewCount: 99,
    },
    {
      id: '4',
      title: 'RGB Liquid CPU Cooler',
      price: 4299,
      image: 'https://images.unsplash.com/photo-1651864756868-72d32939b4f2?w=600',
      rating: 4.0,
      reviewCount: 65,
    },
  ];

  // Search products data - mapped to match shopItems structure
  const searchProducts = [
    { id: 'search-1', title: 'PRODUCT/SERVICE 1', price: 850, image: 'https://images.unsplash.com/photo-1704078541927-7a0da547f730?w=500', rating: 3, reviewCount: 35 },
    { id: 'search-2', title: 'PRODUCT/SERVICE 2', price: 1200, image: 'https://images.unsplash.com/photo-1741894785509-d87c84bdc275?w=500', rating: 4, reviewCount: 95 },
    { id: 'search-3', title: 'PRODUCT/SERVICE 3', price: 1500, image: 'https://images.unsplash.com/photo-1736175549681-c24c552da1e2?w=500', rating: 5, reviewCount: 325 },
    { id: 'search-4', title: 'PRODUCT/SERVICE 4', price: 950, image: 'https://images.unsplash.com/photo-1624901344246-8759f305fef3?w=500', rating: 4, reviewCount: 145 },
    { id: 'search-5', title: 'PRODUCT/SERVICE 1', price: 750, image: 'https://images.unsplash.com/photo-1760784016748-79421d6f8e74?w=500', rating: 3, reviewCount: 35 },
    { id: 'search-6', title: 'PRODUCT/SERVICE 1', price: 1100, image: 'https://images.unsplash.com/photo-1658806300183-342fe517d68f?w=500', rating: 4, reviewCount: 90 },
    { id: 'search-7', title: 'PRODUCT/SERVICE 3', price: 1400, image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500', rating: 5, reviewCount: 203 },
    { id: 'search-8', title: 'PRODUCT/SERVICE 4', price: 890, image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500', rating: 4, reviewCount: 142 },
  ];

  // Top picks data - mapped to match shopItems structure
  const topPicksProducts = [
    { id: 'pick-1', title: 'Digital Portrait Art', price: 1500, image: 'https://images.unsplash.com/photo-1704078541927-7a0da547f730?w=500', rating: 5, reviewCount: 88 },
    { id: 'pick-2', title: '3D Character Design', price: 2200, image: 'https://images.unsplash.com/photo-1741894785509-d87c84bdc275?w=500', rating: 4, reviewCount: 75 },
    { id: 'pick-3', title: 'Illustration Commission', price: 1800, image: 'https://images.unsplash.com/photo-1736175549681-c24c552da1e2?w=500', rating: 5, reviewCount: 92 },
    { id: 'pick-4', title: 'Custom Artwork', price: 1200, image: 'https://images.unsplash.com/photo-1624901344246-8759f305fef3?w=500', rating: 4, reviewCount: 64 },
    { id: 'pick-5', title: 'Graphic Design Service', price: 1600, image: 'https://images.unsplash.com/photo-1760784016748-79421d6f8e74?w=500', rating: 5, reviewCount: 103 },
    { id: 'pick-6', title: 'Abstract Digital Art', price: 2000, image: 'https://images.unsplash.com/photo-1658806300183-342fe517d68f?w=500', rating: 4, reviewCount: 58 },
    { id: 'pick-7', title: 'Digital Portrait Art', price: 1500, image: 'https://images.unsplash.com/photo-1704078541927-7a0da547f730?w=500', rating: 5, reviewCount: 88 },
    { id: 'pick-8', title: '3D Character Design', price: 2200, image: 'https://images.unsplash.com/photo-1741894785509-d87c84bdc275?w=500', rating: 4, reviewCount: 75 },
  ];

  const createMockShopItemData = (itemId: string) => {
    // Check if it's a top picks product
    const topPickProduct = topPicksProducts.find(p => p.id === itemId);
    if (topPickProduct) {
      return {
        ...topPickProduct,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        images: [
          topPickProduct.image,
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600',
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600',
          'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600',
        ],
        seller: {
          username: 'Username',
          avatar: imgAvatarSmall,
        },
        relatedItems: topPicksProducts.filter(p => p.id !== itemId).slice(0, 4),
      };
    }

    // Check if it's a search product
    const searchProduct = searchProducts.find(p => p.id === itemId);
    if (searchProduct) {
      return {
        ...searchProduct,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        images: [
          searchProduct.image,
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600',
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600',
          'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600',
        ],
        seller: {
          username: 'Username',
          avatar: imgAvatarSmall,
        },
        relatedItems: searchProducts.filter(p => p.id !== itemId).slice(0, 4),
      };
    }

    // Otherwise it's a regular shop item
    const item = shopItems.find(i => i.id === itemId);
    if (!item) return null;

    return {
      ...item,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      images: [
        item.image,
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600',
      ],
      seller: {
        username: 'Username',
        avatar: imgAvatarSmall,
      },
      relatedItems: shopItems.filter(si => si.id !== itemId).slice(0, 4),
    };
  };

  const handleOpenShopItem = (itemId: string) => {
    const itemData = createMockShopItemData(itemId);
    setSelectedShopItem(itemData);
    setIsShopOverlayOpen(true);
  };

  const handleCloseShopOverlay = () => {
    setIsShopOverlayOpen(false);
    setTimeout(() => setSelectedShopItem(null), 300);
  };

  // Handle mode switching
  const handleHomeClick = () => {
    setActiveMode('home');
    setIsNotificationPanelOpen(false);
  };

  const handleNotificationsClick = () => {
    if (activeMode === 'notifications') {
      // Toggle off
      setActiveMode('home');
      setIsNotificationPanelOpen(false);
    } else {
      // Switch to notifications mode
      setActiveMode('notifications');
      setIsNotificationPanelOpen(true);
    }
  };

  const handleCreateClick = () => {
    if (activeMode === 'create') {
      // Toggle off
      setActiveMode('home');
      setIsCreatePostModalOpen(false);
    } else {
      // Switch to create mode
      setActiveMode('create');
      setIsCreatePostModalOpen(true);
    }
  };

  const sidebarItems = [
    { icon: 'home', label: 'Home', active: true },
    { icon: ShoppingCart, label: 'Cart and Orders', active: false },
    { icon: CreditCard, label: 'My Payments', active: false },
    { icon: MessageSquare, label: 'Messages', active: false },
    { icon: Bell, label: 'Notifications', active: false },
    { icon: PlusSquare, label: 'Create', active: false },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#f8fafc] flex">
      <LeftSidebar
        activeMode={activeMode}
        isSidebarHovered={isSidebarHovered}
        setIsSidebarHovered={setIsSidebarHovered}
        onNotificationsClick={handleNotificationsClick}
        onCreateClick={handleCreateClick}
        onHomeClick={handleHomeClick}
        sidebarItems={sidebarItems}
      />

      {/* Center Feed */}
      <div 
        className={`flex-1 transition-all duration-300 ease-in-out z-10 ${
          isSidebarHovered ? 'ml-[250px]' : 'ml-[72px]'
        } mr-[340px] relative`}
      >
        <div className="max-w-[640px] mx-auto py-8 px-6">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="bg-white flex items-center gap-3 px-4 py-3 rounded-lg border border-[#e2e8f0]">
              <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="#94a3b8" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="Search here..."
                className="font-['Work_Sans:Regular',sans-serif] font-normal bg-transparent border-none outline-none text-[#1e293b] text-[14px] flex-1 placeholder:text-[#94a3b8]"
              />
              {(isSearchFocused || searchQuery) && (
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setIsSearchFocused(false);
                  }}
                  className="text-[#94a3b8] hover:text-[#64748b] transition-colors"
                >
                  <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                    <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Content Area - Dynamic based on search state */}
          <div onMouseDown={(e) => {
            // Prevent input blur when clicking inside search views
            if (isSearchFocused) {
              e.preventDefault();
            }
          }}>
            {isSearchFocused && searchQuery === '' ? (
              // Search Initial State - Show recommendations
              <SearchInitialView onViewDetails={handleOpenShopItem} />
            ) : isSearchFocused && searchQuery.length > 0 ? (
              // Search Active State - Show search results
              <SearchActiveView onViewDetails={handleOpenShopItem} />
            ) : (
              // Default State - Show feed posts and shop items
              <div>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                  <div key={`feed-item-${index}`}>
                    <PostCard index={index} onOpenPost={() => handleOpenPost(index)} />
                    {/* Insert shop items after posts 1, 4, and 7 */}
                    {index === 1 && shopItems[0] && (
                      <ShopItemCard
                        key={`shop-${shopItems[0].id}`}
                        {...shopItems[0]}
                        onViewDetails={() => handleOpenShopItem(shopItems[0].id)}
                      />
                    )}
                    {index === 4 && shopItems[1] && (
                      <ShopItemCard
                        key={`shop-${shopItems[1].id}`}
                        {...shopItems[1]}
                        onViewDetails={() => handleOpenShopItem(shopItems[1].id)}
                      />
                    )}
                    {index === 7 && (
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {shopItems[2] && (
                          <ShopItemCard
                            key={`shop-${shopItems[2].id}`}
                            {...shopItems[2]}
                            onViewDetails={() => handleOpenShopItem(shopItems[2].id)}
                          />
                        )}
                        {shopItems[3] && (
                          <ShopItemCard
                            key={`shop-${shopItems[3].id}`}
                            {...shopItems[3]}
                            onViewDetails={() => handleOpenShopItem(shopItems[3].id)}
                          />
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Shop Item Overlay - Scoped to Center Feed */}
        <ShopItemOverlay
          item={selectedShopItem}
          isOpen={isShopOverlayOpen}
          onClose={handleCloseShopOverlay}
        />
      </div>

      {/* Right Widget Column */}
      <div className="fixed right-0 top-0 h-screen w-[371px] overflow-hidden">
        <RightPanel />
      </div>

      {/* Post View Overlay */}
      <PostViewOverlay
        post={selectedPost}
        isOpen={isOverlayOpen}
        onClose={handleCloseOverlay}
      />

      {/* Notification Panel */}
      <NotificationPanel
        isOpen={isNotificationPanelOpen}
        onClose={() => setIsNotificationPanelOpen(false)}
      />

      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={isCreatePostModalOpen}
        onClose={() => {
          setIsCreatePostModalOpen(false);
          setActiveMode('home');
        }}
        onAttemptClose={() => setIsDiscardChangesModalOpen(true)}
      />

      {/* Discard Changes Modal */}
      <DiscardChangesModal
        isOpen={isDiscardChangesModalOpen}
        onCancel={() => setIsDiscardChangesModalOpen(false)}
        onDiscard={() => {
          setIsDiscardChangesModalOpen(false);
          setIsCreatePostModalOpen(false);
          setActiveMode('home');
        }}
      />
    </div>
  );
}