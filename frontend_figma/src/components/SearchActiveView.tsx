import svgPaths from "../imports/svg-joxnm76qfc";

// Sample product images for variety
const productImages = [
  'https://images.unsplash.com/photo-1704078541927-7a0da547f730?w=500',
  'https://images.unsplash.com/photo-1741894785509-d87c84bdc275?w=500',
  'https://images.unsplash.com/photo-1736175549681-c24c552da1e2?w=500',
  'https://images.unsplash.com/photo-1624901344246-8759f305fef3?w=500',
  'https://images.unsplash.com/photo-1760784016748-79421d6f8e74?w=500',
  'https://images.unsplash.com/photo-1658806300183-342fe517d68f?w=500',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500',
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500',
];

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
  rating: number;
  reviews: number;
  showAddToCart?: boolean;
  onViewDetails: (id: string) => void;
}

function ProductCard({ id, image, title, price, rating, reviews, showAddToCart, onViewDetails }: ProductCardProps) {
  const handleEyeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onViewDetails(id);
  };

  return (
    <div className="content-stretch flex flex-col gap-[8.629px] items-start relative shrink-0">
      {/* Product Image */}
      <div className="bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] h-[134.829px] overflow-clip relative rounded-[7.221px] shrink-0 w-[145.615px]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {showAddToCart && (
          <div className="absolute bg-black bottom-[-0.17px] h-[22.112px] left-0 right-0 rounded-bl-[2.157px] rounded-br-[2.157px] flex items-center justify-center cursor-pointer hover:bg-[#1a1a1a] transition-colors">
            <p className="font-['Poppins:Medium',sans-serif] leading-[12.944px] not-italic text-[8.629px] text-nowrap text-white whitespace-pre">Add To Cart</p>
          </div>
        )}
        <div className="absolute content-stretch flex flex-col gap-[4.315px] items-start right-[6.09px] top-[6.47px]">
          {/* Heart Icon */}
          <div className="relative shrink-0 size-[18.337px] cursor-pointer hover:scale-110 transition-transform">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
              <g>
                <circle cx="9.16838" cy="9.16838" fill="white" r="9.16838" />
                <g>
                  <path d={svgPaths.p1ff11eb0} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
                </g>
              </g>
            </svg>
          </div>
          {/* Eye Icon */}
          <div 
            onClick={handleEyeClick}
            className="relative shrink-0 size-[18.337px] cursor-pointer hover:scale-110 transition-transform"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
              <circle cx="9.16838" cy="9.16838" fill="white" r="9.16838" />
            </svg>
            <div className="absolute inset-[14.71%] overflow-clip">
              <div className="absolute inset-[20.83%_9.95%]">
                <div className="absolute inset-[-5.36%_-3.9%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
                    <g>
                      <path d={svgPaths.p276ce500} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
                      <path d={svgPaths.p36491280} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="content-stretch flex flex-col gap-[4.315px] items-start relative shrink-0">
        <p className="font-['Poppins:Medium',sans-serif] leading-[12.944px] not-italic relative shrink-0 text-[8.629px] text-black text-nowrap whitespace-pre">{title}</p>
        <div className="content-stretch flex gap-[4.315px] items-center relative shrink-0">
          <div className="content-stretch flex gap-[6.472px] items-start relative shrink-0">
            <p className="font-['Poppins:Medium',sans-serif] leading-[12.944px] relative shrink-0 text-[#428dfe] text-[8.629px] text-nowrap whitespace-pre">
              ₱{price}
            </p>
          </div>
          <div className="content-stretch flex gap-[4.315px] items-start relative shrink-0">
            {/* Star Rating */}
            <div className="h-[10.786px] relative shrink-0 w-[53.932px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 11">
                <g>
                  {[...Array(5)].map((_, i) => (
                    <path 
                      key={i}
                      d={i === 0 ? svgPaths.pfe3c2b0 : i === 1 ? svgPaths.p11d0c380 : i === 2 ? svgPaths.p2b8c8200 : i === 3 ? svgPaths.p30528600 : svgPaths.p38bfb700}
                      fill={i < rating ? "#FFAD33" : "black"}
                      opacity={i < rating ? "1" : "0.25"}
                    />
                  ))}
                </g>
              </svg>
            </div>
            <p className="font-['Poppins:SemiBold',sans-serif] h-[10.786px] leading-[11.326px] not-italic opacity-50 relative shrink-0 text-[7.55px] text-black">({reviews})</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SearchActiveViewProps {
  onViewDetails: (productId: string) => void;
}

export default function SearchActiveView({ onViewDetails }: SearchActiveViewProps) {
  const products = [
    { id: 'search-1', image: productImages[0], title: 'PRODUCT/SERVICE 1', price: '850', rating: 3, reviews: 35, showAddToCart: false },
    { id: 'search-2', image: productImages[1], title: 'PRODUCT/SERVICE 2', price: '1,200', rating: 4, reviews: 95, showAddToCart: true },
    { id: 'search-3', image: productImages[2], title: 'PRODUCT/SERVICE 3', price: '1,500', rating: 5, reviews: 325, showAddToCart: false },
    { id: 'search-4', image: productImages[3], title: 'PRODUCT/SERVICE 4', price: '950', rating: 4, reviews: 145, showAddToCart: false },
    { id: 'search-5', image: productImages[4], title: 'PRODUCT/SERVICE 1', price: '750', rating: 3, reviews: 35, showAddToCart: false },
    { id: 'search-6', image: productImages[5], title: 'PRODUCT/SERVICE 1', price: '1,100', rating: 4, reviews: 90, showAddToCart: false },
    { id: 'search-7', image: productImages[6], title: 'PRODUCT/SERVICE 3', price: '1,400', rating: 5, reviews: 203, showAddToCart: false },
    { id: 'search-8', image: productImages[7], title: 'PRODUCT/SERVICE 4', price: '890', rating: 4, reviews: 142, showAddToCart: false },
    { id: 'search-9', image: productImages[0], title: 'PRODUCT/SERVICE 1', price: '720', rating: 3, reviews: 28, showAddToCart: false },
    { id: 'search-10', image: productImages[1], title: 'PRODUCT/SERVICE 1', price: '1,050', rating: 4, reviews: 87, showAddToCart: false },
    { id: 'search-11', image: productImages[2], title: 'PRODUCT/SERVICE 3', price: '1,350', rating: 5, reviews: 298, showAddToCart: false },
    { id: 'search-12', image: productImages[3], title: 'PRODUCT/SERVICE 4', price: '920', rating: 4, reviews: 138, showAddToCart: false },
    { id: 'search-13', image: productImages[4], title: 'PRODUCT/SERVICE 1', price: '680', rating: 3, reviews: 22, showAddToCart: false },
    { id: 'search-14', image: productImages[5], title: 'PRODUCT/SERVICE 1', price: '1,180', rating: 4, reviews: 102, showAddToCart: false },
    { id: 'search-15', image: productImages[6], title: 'PRODUCT/SERVICE 3', price: '1,480', rating: 5, reviews: 315, showAddToCart: false },
    { id: 'search-16', image: productImages[7], title: 'PRODUCT/SERVICE 4', price: '980', rating: 4, reviews: 156, showAddToCart: false },
  ];

  return (
    <div className="w-full">
      {/* Title */}
      <div className="content-stretch flex flex-col gap-[32.359px] items-start relative shrink-0 w-full mb-8">
        <div className="content-stretch flex flex-col gap-[10.786px] items-start relative shrink-0">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25.887px] not-italic relative shrink-0 text-[#104274] text-[19.415px] text-nowrap tracking-[0.7766px] whitespace-pre">MERAKI MARKETPLACE</p>
        </div>
      </div>

      {/* Products Grid - 4 columns */}
      <div className="grid grid-cols-4 gap-x-[16.179px] gap-y-[20px]">
        {products.map((product, idx) => (
          <ProductCard key={idx} {...product} onViewDetails={onViewDetails} />
        ))}
      </div>
    </div>
  );
}