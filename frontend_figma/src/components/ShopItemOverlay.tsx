import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import svgPaths from "../imports/svg-n2ujkbpsdi";

interface ShopItem {
  id: string;
  title: string;
  price: number;
  rating: number;
  reviewCount: number;
  description: string;
  images: string[];
  seller: {
    username: string;
    avatar: string;
  };
  relatedItems: {
    id: string;
    title: string;
    price: number;
    image: string;
    rating: number;
    reviewCount: number;
  }[];
}

interface ShopItemOverlayProps {
  item: ShopItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ShopItemOverlay({ item, isOpen, onClose }: ShopItemOverlayProps) {
  const [quantity, setQuantity] = useState(2);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  if (!isOpen || !item) return null;

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  // Render stars based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="h-[11.274px] flex items-center gap-[1px] w-[56.368px]">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className="w-[10.5px] h-[11.274px]" fill="none" preserveAspectRatio="none" viewBox="0 0 11 12">
            <path d={svgPaths.p1bfb7a10} fill="#FFAD33" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg className="w-[10.5px] h-[11.274px]" fill="none" preserveAspectRatio="none" viewBox="0 0 11 12">
            <path d={svgPaths.p37bb9b00} fill="#FFAD33" />
            <path d={svgPaths.p2e520280} fill="white" opacity="0.25" />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} className="w-[10.5px] h-[11.274px]" fill="none" preserveAspectRatio="none" viewBox="0 0 11 12">
            <path d={svgPaths.p1bfb7a10} fill="white" opacity="0.25" />
          </svg>
        ))}
      </div>
    );
  };

  // Render stars for related items (smaller)
  const renderRelatedStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="h-[11.949px] flex items-center gap-[1px] w-[59.744px]">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className="w-[11.15px] h-[11.949px]" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
            <path d={svgPaths.p52e2d00} fill="#FFAD33" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg className="w-[11.15px] h-[11.949px]" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
            <path d={svgPaths.p37bb9b00} fill="#FFAD33" />
            <path d={svgPaths.p2e520280} fill="white" opacity="0.25" />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} className="w-[11.15px] h-[11.949px]" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
            <path d={svgPaths.p52e2d00} fill="white" opacity="0.25" />
          </svg>
        ))}
      </div>
    );
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-[rgba(5,16,28,0.9)] z-40 flex items-start justify-center overflow-y-auto py-8"
      onClick={handleBackdropClick}
    >
      <div className="relative w-[699px] min-h-[710.949px]">
        {/* Breadcrumb Navigation */}
        <div className="absolute left-0 top-[14px] flex items-center gap-[16.389px]">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              // Handle username click - navigate to seller profile
              console.log('Navigate to seller profile:', item.seller.username);
            }}
            className="font-['Poppins:Regular',sans-serif] leading-[19.5px] not-italic opacity-50 text-[13px] text-white whitespace-pre hover:opacity-70 transition-opacity cursor-pointer"
          >
            {item.seller.username.toUpperCase()}
          </button>
          <div className="flex h-[16.048px] items-center justify-center w-[8.195px]">
            <div className="rotate-[117.051deg]">
              <svg className="w-[18.019px] h-[1.365px]" fill="none" preserveAspectRatio="none" viewBox="0 0 19 2">
                <line opacity="0.5" stroke="white" strokeWidth="1.36578" x2="18.0192" y1="0.682892" y2="0.682892" />
              </svg>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Handle shop click - navigate to shop page
              console.log('Navigate to shop page');
            }}
            className="font-['Poppins:Regular',sans-serif] leading-[19.5px] not-italic opacity-50 text-[13px] text-white whitespace-pre hover:opacity-70 transition-opacity cursor-pointer"
          >
            SHOP
          </button>
          <div className="flex h-[16.048px] items-center justify-center w-[8.195px]">
            <div className="rotate-[117.051deg]">
              <svg className="w-[18.019px] h-[1.365px]" fill="none" preserveAspectRatio="none" viewBox="0 0 19 2">
                <line opacity="0.5" stroke="white" strokeWidth="1.36578" x2="18.0192" y1="0.682892" y2="0.682892" />
              </svg>
            </div>
          </div>
          <p className="font-['Poppins:Regular',sans-serif] leading-[19.5px] not-italic text-[13px] text-white whitespace-pre">
            {item.title.toUpperCase()}
          </p>
        </div>

        {/* Main Content Container */}
        <div className="absolute left-0 top-[68.7px] w-full">
          {/* Product Display Section */}
          <div className="relative h-[358.462px]">
            {/* Main Image */}
            <div className="absolute bg-white h-[358.462px] left-[119.49px] overflow-hidden rounded-[8px] top-0 w-[298.718px]">
              <ImageWithFallback
                src={item.images[selectedImageIndex]}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="absolute flex flex-col gap-[10px] items-start left-0 top-0 w-[101.564px]">
              {item.images.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`bg-white rounded-[8px] w-full overflow-hidden transition-all ${
                    index === 1 ? 'h-[90.69px]' : 'h-[82.446px]'
                  } ${
                    selectedImageIndex === index ? 'ring-2 ring-[#428dfe]' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${item.title} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Product Info Card */}
            <div className="absolute bg-[rgba(8,35,66,0.65)] h-[358px] left-[436px] rounded-[15px] top-0 w-[284px] backdrop-blur-sm">
              <div className="absolute flex flex-col gap-[13.209px] items-start left-[16px] top-[16px] w-[225.474px]">
                {/* Product Title */}
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[13.528px] not-italic text-[13.528px] text-white tracking-[0.4059px]">
                  {item.title.toUpperCase()}
                </p>

                {/* Rating and Availability */}
                <div className="flex gap-[9.019px] items-start">
                  {/* Rating */}
                  <div className="flex gap-[4.509px] items-start">
                    {renderStars(item.rating)}
                    <p className="font-['Poppins:Regular',sans-serif] leading-[11.837px] not-italic opacity-50 text-[7.892px] text-white whitespace-pre">
                      ({item.reviewCount} Reviews)
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="flex h-[9.019px] items-center justify-center w-0">
                    <div className="rotate-[90deg]">
                      <svg className="w-[9.019px] h-[0.564px]" fill="none" preserveAspectRatio="none" viewBox="0 0 10 1">
                        <line opacity="0.5" stroke="#FADCDC" strokeWidth="0.563684" x2="9.01894" y1="0.281842" y2="0.281842" />
                      </svg>
                    </div>
                  </div>

                  {/* Availability */}
                  <p className="font-['Poppins:Regular',sans-serif] leading-[11.837px] not-italic opacity-60 text-[#00ff66] text-[7.892px] whitespace-pre">
                    AVAILABLE
                  </p>
                </div>

                {/* Price */}
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[13.528px] not-italic text-[13.528px] text-white tracking-[0.4059px]">
                  ₱{item.price.toLocaleString()}
                </p>

                {/* Description */}
                <div className="h-[49.041px] relative w-full overflow-hidden">
                  <p className="font-['Poppins:Regular',sans-serif] leading-[11.837px] not-italic text-[7.892px] text-white w-[210.254px] line-clamp-4">
                    {item.description}
                  </p>
                  <div className="absolute h-0 left-0 top-[49.04px] w-[225.474px]">
                    <svg className="block w-full h-[0.564px]" fill="none" preserveAspectRatio="none" viewBox="0 0 226 1">
                      <line opacity="0.5" stroke="white" strokeWidth="0.563684" x2="225.474" y1="0.281842" y2="0.281842" />
                    </svg>
                  </div>
                </div>

                {/* Quantity and Actions */}
                <div className="flex gap-[9.435px] items-center w-full">
                  {/* Quantity Selector */}
                  <div className="flex h-[24.802px] items-start">
                    {/* Minus Button */}
                    <button
                      onClick={decrementQuantity}
                      className="h-[24.802px] w-[22.547px] border-[0.564px] border-[rgba(0,0,0,0.5)] rounded-bl-[2.255px] rounded-tl-[2.255px] flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] transition-colors"
                    >
                      <svg className="w-[13.528px] h-[13.528px]" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                        <path d="M11.2737 6.76421H2.25474" stroke="#FADCDC" strokeLinecap="round" strokeWidth="0.845526" />
                      </svg>
                    </button>

                    {/* Quantity Display */}
                    <div className="h-[24.802px] w-[45.095px] border-t-[0.564px] border-b-[0.564px] border-[rgba(0,0,0,0.5)] flex items-center justify-center">
                      <p className="font-['Poppins:Medium',sans-serif] leading-[15.783px] not-italic text-[11.274px] text-white">
                        {quantity}
                      </p>
                    </div>

                    {/* Plus Button */}
                    <button
                      onClick={incrementQuantity}
                      className="bg-[#428dfe] h-[24.802px] w-[23.111px] border-[0.564px] border-[rgba(0,0,0,0.5)] rounded-br-[2.255px] rounded-tr-[2.255px] flex items-center justify-center hover:bg-[#3574cc] transition-colors"
                    >
                      <svg className="w-[13.528px] h-[13.528px]" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                        <path d={svgPaths.ped5e780} stroke="white" strokeLinecap="round" strokeWidth="0.845526" />
                      </svg>
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="bg-[#104274] flex gap-[5.637px] items-center justify-center px-[27.057px] py-[5.637px] rounded-[2.255px] hover:bg-[#0d3660] transition-colors">
                    <p className="font-['Poppins:Medium',sans-serif] leading-[13.528px] not-italic text-[9.019px] text-neutral-50 whitespace-pre">
                      Add to Cart
                    </p>
                  </button>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className="relative rounded-[2.255px] w-[22.547px] h-[22.547px] border-[0.564px] border-[rgba(0,0,0,0.5)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] transition-colors"
                  >
                    <svg className="w-[18.038px] h-[18.038px]" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                      <path 
                        d={svgPaths.p2c223800} 
                        stroke={isLiked ? "#ff0000" : "white"}
                        fill={isLiked ? "#ff0000" : "none"}
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="0.845526" 
                      />
                    </svg>
                  </button>
                </div>

                {/* Delivery Info */}
                <div className="relative rounded-[2.255px] w-full border-[0.564px] border-[rgba(0,0,0,0.5)]">
                  <div className="flex flex-col gap-[8.492px] items-start px-0 py-[12.266px]">
                    {/* Digital Delivery */}
                    <div className="flex gap-[9.019px] items-center px-[9.019px]">
                      <svg className="w-[22.547px] h-[22.547px] shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
                        <path d={svgPaths.p2178ff80} stroke="#FADCDC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
                        <path d={svgPaths.p226f1f80} stroke="#FADCDC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
                        <path d={svgPaths.p8010100} stroke="#FADCDC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
                        <path d={svgPaths.p16471970} stroke="#FADCDC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
                        <path d="M2.81842 6.66172H6.57631" stroke="#FADCDC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
                        <path d="M1.02488 8.71148H4.78277" stroke="#FADCDC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
                        <path d="M2.81842 10.7612H6.57631" stroke="#FADCDC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
                      </svg>
                      <div className="flex flex-col font-['Poppins:Medium',sans-serif] gap-[4.509px] items-start not-italic text-white whitespace-pre">
                        <p className="leading-[13.528px] text-[9.019px]">Digital Delivery</p>
                        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[10.146px] text-[6.764px] underline">
                          This product is delivered online through soft copy.
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-0 w-[225.474px] px-[9.019px]">
                      <svg className="block w-full h-[0.564px]" fill="none" preserveAspectRatio="none" viewBox="0 0 226 1">
                        <line opacity="0.5" stroke="white" strokeWidth="0.563684" x2="225.474" y1="0.281842" y2="0.281842" />
                      </svg>
                    </div>

                    {/* Free Delivery UNAVAILABLE */}
                    <div className="flex gap-[9.019px] items-center px-[9.019px]">
                      <svg className="w-[22.547px] h-[22.547px] shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
                        <path d={svgPaths.p2178ff80} stroke="#DCEFFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
                        <path d={svgPaths.p226f1f80} stroke="#DCEFFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
                        <path d={svgPaths.p8010100} stroke="#DCEFFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
                        <path d={svgPaths.p16471970} stroke="#DCEFFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
                        <path d="M2.81842 6.66172H6.57631" stroke="#DCEFFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
                        <path d="M1.02488 8.71148H4.78277" stroke="#DCEFFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
                        <path d="M2.81842 10.7612H6.57631" stroke="#DCEFFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
                      </svg>
                      <div className="flex flex-col font-['Poppins:Medium',sans-serif] gap-[4.509px] items-start not-italic text-[#797979] whitespace-pre">
                        <p className="leading-[13.528px] text-[9.019px]">Free Delivery [UNAVAILABLE]</p>
                        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[10.146px] text-[6.764px] underline">
                          Enter your postal code for Delivery Availability
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-0 w-[225.474px] px-[9.019px]">
                      <svg className="block w-full h-[0.564px]" fill="none" preserveAspectRatio="none" viewBox="0 0 226 1">
                        <line opacity="0.5" stroke="white" strokeWidth="0.563684" x2="225.474" y1="0.281842" y2="0.281842" />
                      </svg>
                    </div>

                    {/* Return Delivery */}
                    <div className="flex gap-[9.019px] items-center px-[9.019px]">
                      <svg className="w-[22.547px] h-[22.547px] shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
                        <path d={svgPaths.p706e600} stroke="#FADCDC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
                        <path d={svgPaths.p3969ec00} stroke="#FADCDC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
                      </svg>
                      <div className="flex flex-col font-['Poppins:Medium',sans-serif] gap-[4.509px] items-start not-italic text-white whitespace-pre">
                        <p className="leading-[13.528px] text-[9.019px]">Return Delivery</p>
                        <p className="leading-[10.146px] text-[6.764px]">
                          <span>Free 30 Days Delivery Returns. </span>
                          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">
                            Details
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Items Section */}
          <div className="absolute left-0 top-[376px] flex flex-col gap-[35.846px] items-start">
            {/* Section Header */}
            <div className="flex gap-[9.559px] items-center">
              <div className="bg-[#428dfe] h-[26.76px] w-[13.38px] rounded-[2.39px]" />
              <p className="font-['Poppins:SemiBold',sans-serif] leading-[13.4px] not-italic text-[#428dfe] text-[10.7px] whitespace-pre">
                RELATED ITEMS TO {item.title.toUpperCase()} FROM {item.seller.username.toUpperCase()}
              </p>
            </div>

            {/* Related Items Grid */}
            <div className="flex gap-[17.923px] items-start">
              {item.relatedItems.map((relatedItem) => (
                <div key={relatedItem.id} className="flex flex-col gap-[9.559px] items-start shrink-0">
                  {/* Product Image */}
                  <div className="bg-white h-[167.28px] overflow-hidden rounded-[8px] w-[180.66px] cursor-pointer hover:opacity-90 transition-opacity">
                    <ImageWithFallback
                      src={relatedItem.image}
                      alt={relatedItem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-col gap-[4.779px] items-start">
                    <p className="font-['Poppins:Medium',sans-serif] leading-[16.06px] not-italic text-[10.7px] text-white whitespace-pre">
                      {relatedItem.title}
                    </p>
                    <div className="flex gap-[7.169px] items-start">
                      <p className="font-['Poppins:Medium',sans-serif] leading-[16.06px] not-italic text-[#428dfe] text-[10.7px] whitespace-pre">
                        ₱{relatedItem.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex gap-[4.779px] items-start">
                      {renderRelatedStars(relatedItem.rating)}
                      <p className="font-['Poppins:SemiBold',sans-serif] h-[11.949px] leading-[14.05px] not-italic opacity-50 text-[9.37px] text-white w-[19.118px]">
                        ({relatedItem.reviewCount})
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}