import { useState } from 'react';
import { Heart, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ShopItemCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  onViewDetails: () => void;
}

export default function ShopItemCard({ 
  id, 
  title, 
  price, 
  image, 
  rating, 
  reviewCount,
  onViewDetails 
}: ShopItemCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleEyeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onViewDetails();
  };

  // Render stars
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex items-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} width="14" height="14" viewBox="0 0 20 18" fill="none">
            <path
              d="M10 0L12.9389 6.90983L20 7.90983L15 12.7541L16.1803 20L10 16.4098L3.81967 20L5 12.7541L0 7.90983L7.06107 6.90983L10 0Z"
              fill="#FFAD33"
            />
          </svg>
        ))}
        {hasHalfStar && (
          <svg width="14" height="14" viewBox="0 0 20 18" fill="none">
            <path
              d="M10 0L12.9389 6.90983L20 7.90983L15 12.7541L16.1803 20L10 16.4098L3.81967 20L5 12.7541L0 7.90983L7.06107 6.90983L10 0Z"
              fill="rgba(0,0,0,0.15)"
            />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} width="14" height="14" viewBox="0 0 20 18" fill="none">
            <path
              d="M10 0L12.9389 6.90983L20 7.90983L15 12.7541L16.1803 20L10 16.4098L3.81967 20L5 12.7541L0 7.90983L7.06107 6.90983L10 0Z"
              fill="rgba(0,0,0,0.15)"
            />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-6">
      {/* Image Container */}
      <div className="relative w-full h-[280px] bg-gradient-to-b from-[#f3f4f6] to-[#e5e7eb]">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Heart & Eye Icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {/* Heart Icon */}
          <button
            onClick={handleHeartClick}
            className="size-[36px] bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all hover:scale-110"
          >
            <Heart 
              className="size-[18px]" 
              fill={isLiked ? "#ff0000" : "none"}
              stroke={isLiked ? "#ff0000" : "#000000"}
              strokeWidth={1.5}
            />
          </button>

          {/* Eye Icon */}
          <button
            onClick={handleEyeClick}
            className="size-[36px] bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all hover:scale-110"
          >
            <Eye 
              className="size-[18px]" 
              stroke="#000000"
              strokeWidth={1.5}
            />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#0f1419] mb-2 line-clamp-2 min-h-[40px]">
          {title}
        </h3>

        <div className="flex items-center gap-3 mb-2">
          <span className="font-['Poppins:Medium',sans-serif] text-[18px] text-[#428dfe]">
            ₱{price.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {renderStars()}
          <span className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#5b7083]">
            ({reviewCount})
          </span>
        </div>
      </div>
    </div>
  );
}
