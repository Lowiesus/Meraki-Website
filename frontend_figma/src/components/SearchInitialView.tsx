import { useEffect, useRef } from 'react';
import svgPaths from "../imports/svg-nk4qrssvgg";

// Sample commission card images
const productImages = [
  'https://images.unsplash.com/photo-1704078541927-7a0da547f730?w=500',
  'https://images.unsplash.com/photo-1741894785509-d87c84bdc275?w=500',
  'https://images.unsplash.com/photo-1736175549681-c24c552da1e2?w=500',
  'https://images.unsplash.com/photo-1624901344246-8759f305fef3?w=500',
  'https://images.unsplash.com/photo-1760784016748-79421d6f8e74?w=500',
  'https://images.unsplash.com/photo-1658806300183-342fe517d68f?w=500',
];

// Illustration Icon - Brush/Pen
function IllustrationIcon() {
  return (
    <div className="relative shrink-0 size-[30.202px]">
      <svg className="block size-full" fill="none" viewBox="0 0 31 31">
        <path d="M8 23l15-15M8 23l3-8 12-12 3 3-12 12-8 3z" stroke="#428DFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 10l3 3" stroke="#428DFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// 3D Modelling Icon - Cube
function ModellingIcon() {
  return (
    <div className="relative shrink-0 size-[30.202px]">
      <svg className="block size-full" fill="none" viewBox="0 0 31 31">
        <path d="M15.5 5l-8 4.5v11l8 4.5 8-4.5v-11l-8-4.5z" stroke="#428DFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5 5v9M15.5 14l-8-4.5M15.5 14l8-4.5M7.5 20.5l8-4.5M23.5 20.5l-8-4.5" stroke="#428DFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// Web Design Icon - Monitor
function WebDesignIcon() {
  return (
    <div className="relative shrink-0 size-[30.202px]">
      <svg className="block size-full" fill="none" viewBox="0 0 31 31">
        <rect x="4" y="6" width="23" height="15" rx="1.5" stroke="#428DFE" strokeWidth="1.5" />
        <path d="M10 25h11M15.5 21v4" stroke="#428DFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// UI and UX Icon - Layout Grid
function UIUXIcon() {
  return (
    <div className="relative shrink-0 size-[30.202px]">
      <svg className="block size-full" fill="none" viewBox="0 0 31 31">
        <rect x="5" y="5" width="9" height="9" rx="1" stroke="#428DFE" strokeWidth="1.5" />
        <rect x="17" y="5" width="9" height="9" rx="1" stroke="#428DFE" strokeWidth="1.5" />
        <rect x="5" y="17" width="9" height="9" rx="1" stroke="#428DFE" strokeWidth="1.5" />
        <rect x="17" y="17" width="9" height="9" rx="1" stroke="#428DFE" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

// Products Icon - Shopping Bag
function ProductsIcon() {
  return (
    <div className="relative shrink-0 size-[30.202px]">
      <svg className="block size-full" fill="none" viewBox="0 0 31 31">
        <path d="M6 10h19l-1.5 13H7.5L6 10z" stroke="#428DFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 13V9a4.5 4.5 0 019 0v4" stroke="#428DFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// Trading Cards Icon - Card Deck
function TradingCardsIcon() {
  return (
    <div className="relative shrink-0 size-[30.202px]">
      <svg className="block size-full" fill="none" viewBox="0 0 31 31">
        <rect x="8" y="7" width="15" height="17" rx="1.5" stroke="#428DFE" strokeWidth="1.5" />
        <rect x="6" y="9" width="15" height="17" rx="1.5" stroke="#428DFE" strokeWidth="1.5" fill="white" />
        <circle cx="13.5" cy="14.5" r="2.5" stroke="#428DFE" strokeWidth="1.2" />
        <path d="M8 20h11M8 22h7" stroke="#428DFE" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// Animation Icon - Play/Motion
function AnimationIcon() {
  return (
    <div className="relative shrink-0 size-[30.202px]">
      <svg className="block size-full" fill="none" viewBox="0 0 31 31">
        <circle cx="15.5" cy="15.5" r="10" stroke="#428DFE" strokeWidth="1.5" />
        <path d="M13 10l8 5.5-8 5.5V10z" fill="#428DFE" />
      </svg>
    </div>
  );
}

// Logo Design Icon
function LogoDesignIcon() {
  return (
    <div className="relative shrink-0 size-[30.202px]">
      <svg className="block size-full" fill="none" viewBox="0 0 31 31">
        <circle cx="15.5" cy="15.5" r="9" stroke="#428DFE" strokeWidth="1.5" />
        <path d="M12 10h3v11h-3zM18 14h3v7h-3z" fill="#428DFE" />
      </svg>
    </div>
  );
}

// Photography Icon
function PhotographyIcon() {
  return (
    <div className="relative shrink-0 size-[30.202px]">
      <svg className="block size-full" fill="none" viewBox="0 0 31 31">
        <rect x="5" y="9" width="21" height="15" rx="2" stroke="#428DFE" strokeWidth="1.5" />
        <circle cx="15.5" cy="16.5" r="4" stroke="#428DFE" strokeWidth="1.5" />
        <path d="M10 9l2-3h7l2 3" stroke="#428DFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// Video Editing Icon
function VideoEditingIcon() {
  return (
    <div className="relative shrink-0 size-[30.202px]">
      <svg className="block size-full" fill="none" viewBox="0 0 31 31">
        <rect x="4" y="8" width="23" height="15" rx="1.5" stroke="#428DFE" strokeWidth="1.5" />
        <path d="M13 12.5l6 3.5-6 3.5v-7z" fill="#428DFE" />
        <circle cx="21" cy="12" r="1.5" fill="#428DFE" />
      </svg>
    </div>
  );
}

// Music/Audio Icon
function MusicIcon() {
  return (
    <div className="relative shrink-0 size-[30.202px]">
      <svg className="block size-full" fill="none" viewBox="0 0 31 31">
        <path d="M10 20v-9l12-3v9" stroke="#428DFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="20" r="3" stroke="#428DFE" strokeWidth="1.5" />
        <circle cx="22" cy="17" r="3" stroke="#428DFE" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

interface CommissionCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
  rating: number;
  reviews: number;
  onViewDetails: (id: string) => void;
}

function CommissionCard({ id, image, title, price, rating, reviews, onViewDetails }: CommissionCardProps) {
  const handleEyeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onViewDetails(id);
  };

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      {/* Card Image */}
      <div className="bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] h-[250px] overflow-clip relative rounded-[4px] shrink-0 w-[270px]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute content-stretch flex flex-col gap-[8px] items-start right-[12px] top-[12px]">
          {/* Heart Icon */}
          <div className="relative shrink-0 size-[34px] cursor-pointer hover:scale-110 transition-transform">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
              <g id="Fill Heart">
                <circle cx="17" cy="17" fill="white" id="Ellipse 12" r="17" />
                <g id="heart small">
                  <path d={svgPaths.p37919a00} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </g>
              </g>
            </svg>
          </div>
          {/* Eye Icon */}
          <div 
            onClick={handleEyeClick}
            className="relative shrink-0 size-[34px] cursor-pointer hover:scale-110 transition-transform"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
              <circle cx="17" cy="17" fill="white" id="Ellipse 13" r="17" />
            </svg>
            <div className="absolute inset-[14.71%] overflow-clip">
              <div className="absolute inset-[20.83%_9.95%]">
                <div className="absolute inset-[-5.36%_-3.9%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
                    <g>
                      <path d={svgPaths.p26f6b400} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p55999c0} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Details */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
        <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">{title}</p>
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
          <p className="font-['Poppins:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#428dfe] text-[16px] text-nowrap whitespace-pre">
            ₱{price}
          </p>
        </div>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
          {/* Star Rating */}
          <div className="h-[20px] relative shrink-0 w-[100px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 20">
              <g>
                {[...Array(5)].map((_, i) => (
                  <path 
                    key={i}
                    d={i === 0 ? svgPaths.p2a639d30 : i === 1 ? svgPaths.pbb48200 : i === 2 ? svgPaths.p170d0200 : i === 3 ? svgPaths.p379b8d00 : svgPaths.p23538a00}
                    fill={i < rating ? "#FFAD33" : "black"}
                    opacity={i < rating ? "1" : "0.25"}
                  />
                ))}
              </g>
            </svg>
          </div>
          <p className="font-['Poppins:SemiBold',sans-serif] h-[20px] leading-[21px] not-italic opacity-50 relative shrink-0 text-[14px] text-black w-[32px]">({reviews})</p>
        </div>
      </div>
    </div>
  );
}

interface SearchInitialViewProps {
  onViewDetails: (productId: string) => void;
}

export default function SearchInitialView({ onViewDetails }: SearchInitialViewProps) {
  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const picksScrollRef = useRef<HTMLDivElement>(null);

  const commissionData = [
    { id: 'pick-1', image: productImages[0], title: 'Digital Portrait Art', price: '1,500', rating: 5, reviews: 88 },
    { id: 'pick-2', image: productImages[1], title: '3D Character Design', price: '2,200', rating: 4, reviews: 75 },
    { id: 'pick-3', image: productImages[2], title: 'Illustration Commission', price: '1,800', rating: 5, reviews: 92 },
    { id: 'pick-4', image: productImages[3], title: 'Custom Artwork', price: '1,200', rating: 4, reviews: 64 },
    { id: 'pick-5', image: productImages[4], title: 'Graphic Design Service', price: '1,600', rating: 5, reviews: 103 },
    { id: 'pick-6', image: productImages[5], title: 'Abstract Digital Art', price: '2,000', rating: 4, reviews: 58 },
    { id: 'pick-7', image: productImages[0], title: 'Digital Portrait Art', price: '1,500', rating: 5, reviews: 88 },
    { id: 'pick-8', image: productImages[1], title: '3D Character Design', price: '2,200', rating: 4, reviews: 75 },
    { id: 'pick-9', image: productImages[2], title: 'Illustration Commission', price: '1,800', rating: 5, reviews: 92 },
    { id: 'pick-10', image: productImages[3], title: 'Custom Artwork', price: '1,200', rating: 4, reviews: 64 },
  ];

  // Auto-scroll effect for Top Picks
  useEffect(() => {
    const scrollContainer = picksScrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;
    
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
          const currentScroll = scrollContainer.scrollLeft;
          
          if (currentScroll >= maxScroll) {
            // Loop back to start
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            // Scroll by one card width + gap (270px + 24px)
            scrollContainer.scrollBy({ left: 294, behavior: 'smooth' });
          }
        }
      }, 3000); // Auto-scroll every 3 seconds
    };

    startAutoScroll();

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, []);

  // Category scroll handlers
  const scrollCategories = (direction: 'left' | 'right') => {
    if (categoryScrollRef.current) {
      const scrollAmount = 300;
      const newScroll = direction === 'left' 
        ? categoryScrollRef.current.scrollLeft - scrollAmount
        : categoryScrollRef.current.scrollLeft + scrollAmount;
      
      categoryScrollRef.current.scrollTo({ left: newScroll, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      {/* Browse By Category Section */}
      <div className="content-stretch flex flex-col gap-[32.359px] items-start relative shrink-0 w-full mb-8">
        <div className="content-stretch flex gap-[372.668px] items-end relative shrink-0 w-full justify-between">
          <div className="content-stretch flex flex-col gap-[10.786px] items-start relative shrink-0">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25.887px] not-italic relative shrink-0 text-[#104274] text-[19.415px] text-nowrap tracking-[0.7766px] whitespace-pre">Browse By Category</p>
          </div>
          <div className="content-stretch flex gap-[4.315px] items-start relative shrink-0">
            {/* Left Arrow */}
            <div 
              onClick={() => scrollCategories('left')}
              className="relative shrink-0 size-[24.809px] cursor-pointer hover:opacity-70 transition-opacity"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                <g>
                  <circle cx="12.4043" cy="12.4043" fill="#F5F5F5" r="12.4043" />
                  <g>
                    <path d={svgPaths.p3d590500} stroke="#428DFE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.07863" />
                  </g>
                </g>
              </svg>
            </div>
            {/* Right Arrow */}
            <div 
              onClick={() => scrollCategories('right')}
              className="relative shrink-0 size-[24.809px] cursor-pointer hover:opacity-70 transition-opacity"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                <g>
                  <circle cx="12.4043" cy="12.4043" fill="#F5F5F5" r="12.4043" />
                  <g>
                    <path d={svgPaths.p2f664900} stroke="#428DFE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div 
          ref={categoryScrollRef}
          className="content-stretch flex gap-[16.179px] items-start relative shrink-0 overflow-x-hidden pb-2"
          style={{ 
            maxWidth: 'calc((91.68px * 6) + (16.179px * 5))', // Show exactly 6 categories
            width: '100%'
          }}
        >
          {[
            { name: 'Illustration', icon: <IllustrationIcon /> },
            { name: '3D Modelling', icon: <ModellingIcon /> },
            { name: 'Web Design', icon: <WebDesignIcon /> },
            { name: 'UI and UX', icon: <UIUXIcon /> },
            { name: 'Products', icon: <ProductsIcon /> },
            { name: 'Trading Cards', icon: <TradingCardsIcon /> },
            { name: 'Animation', icon: <AnimationIcon /> },
            { name: 'Logo Design', icon: <LogoDesignIcon /> },
            { name: 'Photography', icon: <PhotographyIcon /> },
            { name: 'Video Editing', icon: <VideoEditingIcon /> },
            { name: 'Music/Audio', icon: <MusicIcon /> }
          ].map((category, idx) => (
            <div key={idx} className="relative rounded-[8px] shrink-0 w-[91.68px] h-[76px] cursor-pointer hover:bg-[#f0f9ff] transition-colors">
              <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[8px] py-[13px] relative rounded-[inherit] w-full h-full">
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
                  {category.icon}
                  <p className="font-['Poppins:Regular',sans-serif] leading-[12.944px] not-italic relative shrink-0 text-[#8ebbff] text-[8.629px] text-center w-full">{category.name}</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#428dfe] border-[0.539px] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
          ))}
        </div>
      </div>

      {/* This Month's Top Picks Section */}
      <div className="mb-8">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 mb-6">
          <div className="h-[40px] relative shrink-0 w-[20px]">
            <div className="absolute bg-[#428dfe] inset-0 rounded-[4px]" />
          </div>
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#428dfe] text-[16px] text-nowrap whitespace-pre">This Month's</p>
        </div>

        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 mb-8">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] not-italic relative shrink-0 text-[#104274] text-[36px] text-nowrap tracking-[1.44px] whitespace-pre">Top Picks for You</p>
        </div>

        {/* Commission Cards Horizontal Auto-Scroll */}
        <div 
          ref={picksScrollRef}
          className="flex gap-[24px] overflow-x-auto pb-4 scrollbar-hide"
        >
          {commissionData.map((commission, idx) => (
            <CommissionCard key={idx} {...commission} onViewDetails={onViewDetails} />
          ))}
        </div>
      </div>

      {/* Best Selling Products Section */}
      <div className="mt-12">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 mb-6">
          <div className="h-[40px] relative shrink-0 w-[20px]">
            <div className="absolute bg-[#428dfe] inset-0 rounded-[4px]" />
          </div>
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#428dfe] text-[16px] text-nowrap whitespace-pre">This Month</p>
        </div>

        <div className="flex items-end justify-between mb-8">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] not-italic relative shrink-0 text-[#104274] text-[36px] text-nowrap tracking-[1.44px] whitespace-pre">Best Selling Products</p>
          <button className="bg-[#428dfe] hover:bg-[#3b7de0] transition-colors text-white px-6 py-2 rounded-md font-['Poppins:Medium',sans-serif] text-[14px]">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}