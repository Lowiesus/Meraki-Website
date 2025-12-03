import { useState, useEffect } from 'react';
import { X, Heart, MessageCircle, MoreHorizontal } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Comment {
  id: string;
  username: string;
  avatar: string;
  text: string;
  timestamp: string;
  likes: number;
}

interface Post {
  id: string;
  username: string;
  avatar: string;
  timestamp: string;
  images: string[];
  caption: string;
  likes: number;
  likedBy: string;
  comments: Comment[];
}

interface PostViewOverlayProps {
  post: Post | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PostViewOverlay({ post, isOpen, onClose }: PostViewOverlayProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isPortrait, setIsPortrait] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [newComment, setNewComment] = useState('');

  // Reset state when overlay opens
  useEffect(() => {
    if (isOpen && post) {
      setCurrentImageIndex(0);
      setImageLoaded(false);
      setNewComment('');
      
      // Detect image aspect ratio
      const img = new Image();
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        setIsPortrait(aspectRatio < 1);
        setImageLoaded(true);
      };
      img.src = post.images[0];
    }
  }, [isOpen, post]);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen || !post) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % post.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + post.images.length) % post.images.length);
  };

  const handlePostComment = () => {
    if (newComment.trim()) {
      // Handle comment posting here
      console.log('Posting comment:', newComment);
      setNewComment('');
    }
  };

  // Calculate modal dimensions based on orientation
  const modalWidth = isPortrait ? '820px' : '1000px';
  const imageWidth = isPortrait ? '411px' : '560px';
  const imageHeight = isPortrait ? '591px' : '472px';

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-[rgba(5,16,28,0.65)] z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      {/* Main Content Container */}
      <div 
        className="relative flex bg-white rounded-lg overflow-hidden shadow-2xl transition-all duration-300 ease-in-out"
        style={{ 
          width: modalWidth,
          height: imageHeight
        }}
      >
        <div className="flex h-full">
          {/* Left Side - Image */}
          <div 
            className="bg-[#0a1015] flex items-center justify-center relative"
            style={{ width: imageWidth }}
          >
            <div 
              className="relative bg-[#efefef]"
              style={{ 
                width: imageWidth,
                height: imageHeight
              }}
            >
              <ImageWithFallback
                src={post.images[currentImageIndex]}
                alt="Post content"
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows (if multiple images) */}
              {post.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-[10px] top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full size-[36px] flex items-center justify-center shadow-lg transition-all z-10"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#64748b" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-[10px] top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full size-[36px] flex items-center justify-center shadow-lg transition-all z-10"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#64748b" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Image Indicators */}
              {post.images.length > 1 && (
                <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                  {post.images.map((_, idx) => (
                    <button
                      key={idx}
                      className={`rounded-[3px] size-[6px] transition-all ${
                        idx === currentImageIndex ? 'bg-white' : 'bg-white/40'
                      }`}
                      onClick={() => setCurrentImageIndex(idx)}
                    />
                  ))}
                </div>
              )}

              {/* User Avatar (Bottom Left on Image) */}
              <div className="absolute bottom-[10px] left-[10px] size-[30px] rounded-full bg-neutral-100 overflow-hidden border-2 border-white">
                <ImageWithFallback
                  src={post.avatar}
                  alt={post.username}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Comments */}
          <div className="flex-1 flex flex-col bg-white">
            {/* Header */}
            <div className="flex items-center justify-between px-[16px] py-[12px] border-b border-[#e5e7eb]">
              <div className="flex items-center gap-[12px]">
                <div className="size-[32px] rounded-full bg-neutral-100 overflow-hidden">
                  <ImageWithFallback
                    src={post.avatar}
                    alt={post.username}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-[8px]">
                  <span 
                    className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[13px] text-[#104274] cursor-pointer hover:underline"
                    onClick={() => console.log('Navigate to profile:', post.username)}
                  >
                    {post.username}
                  </span>
                  <span className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[13px] text-[#104274]">
                    and
                  </span>
                  <span 
                    className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[13px] text-[#104274] cursor-pointer hover:underline"
                    onClick={() => console.log('Navigate to profile:', post.username)}
                  >
                    {post.username}
                  </span>
                </div>
                <span className="font-['Roboto:Regular',sans-serif] font-normal text-[12px] text-[#104274]">
                  {post.timestamp}
                </span>
              </div>
              <button className="hover:opacity-70 transition-opacity">
                <MoreHorizontal className="size-[18px] text-[#104274]" />
              </button>
            </div>

            {/* Caption */}
            <div className="px-[16px] py-[12px] border-b border-[#e5e7eb]">
              <div className="flex items-start gap-[12px]">
                <div className="size-[32px] rounded-full bg-[#f00000] overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={post.avatar}
                    alt={post.username}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-[6px] mb-[4px]">
                    <span 
                      className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[13px] text-[#104274] cursor-pointer hover:underline"
                      onClick={() => console.log('Navigate to profile:', post.username)}
                    >
                      {post.username}
                    </span>
                  </div>
                  <p className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#104274] leading-[18px]">
                    {post.caption}
                  </p>
                  <div className="mt-[8px] flex items-center gap-[12px]">
                    <span className="font-['Roboto:Regular',sans-serif] font-normal text-[12px] text-[#b5c3d3]">
                      3d
                    </span>
                    <button className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[12px] text-[#b5c3d3] hover:text-[#104274] transition-colors">
                      See translation
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments List */}
            <div 
              className="flex-1 overflow-y-auto px-[16px] py-[12px] space-y-[16px] [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {post.comments.map((comment) => (
                <div key={comment.id} className="flex items-start gap-[12px]">
                  <div className="size-[32px] rounded-full bg-neutral-100 overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={comment.avatar}
                      alt={comment.username}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-[6px] mb-[4px]">
                      <span 
                        className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[13px] text-[#104274] cursor-pointer hover:underline"
                        onClick={() => console.log('Navigate to profile:', comment.username)}
                      >
                        {comment.username}
                      </span>
                    </div>
                    <p className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#104274] leading-[18px]">
                      {comment.text}
                    </p>
                    <div className="mt-[8px] flex items-center gap-[12px]">
                      <span className="font-['Roboto:Regular',sans-serif] font-normal text-[12px] text-[#b5c3d3]">
                        {comment.timestamp}
                      </span>
                      <button className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[11px] text-[#b5c3d3] hover:text-[#104274] transition-colors">
                        {comment.likes} like{comment.likes !== 1 ? 's' : ''}
                      </button>
                      <button className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[12px] text-[#b5c3d3] hover:text-[#104274] transition-colors">
                        Reply
                      </button>
                      <button className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[12px] text-[#b5c3d3] hover:text-[#104274] transition-colors">
                        See translation
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Like and Comment Buttons */}
            <div className="px-[16px] py-[12px] border-t border-[#e5e7eb]">
              <div className="flex items-center gap-[16px] mb-[8px]">
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className="hover:opacity-70 transition-opacity"
                >
                  <Heart 
                    className="size-[24px]" 
                    fill={isLiked ? "#f00000" : "none"}
                    stroke={isLiked ? "#f00000" : "#104274"}
                    strokeWidth={1.5}
                  />
                </button>
                <button className="hover:opacity-70 transition-opacity">
                  <MessageCircle 
                    className="size-[24px]" 
                    fill="none"
                    stroke="#104274"
                    strokeWidth={1.5}
                  />
                </button>
              </div>

              {/* Liked By */}
              <div className="mb-[12px]">
                <p className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#104274]">
                  <span className="inline">Liked by </span>
                  <span 
                    className="font-['Roboto:SemiBold',sans-serif] font-semibold cursor-pointer hover:underline"
                    onClick={() => console.log('Navigate to profile:', post.likedBy)}
                  >
                    {post.likedBy}
                  </span>
                  <span className="inline"> and </span>
                  <span className="font-['Roboto:SemiBold',sans-serif] font-semibold">
                    {post.likes.toLocaleString()} others
                  </span>
                </p>
              </div>

              {/* Add Comment */}
              <div className="flex items-center gap-[12px]">
                <button className="hover:opacity-70 transition-opacity">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="#104274" strokeWidth="1.5" />
                    <path d="M12 8v8m-4-4h8" stroke="#104274" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handlePostComment();
                    }
                  }}
                  placeholder="Add a comment…"
                  className="flex-1 font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#104274] bg-transparent border-none outline-none placeholder:text-[#b5c3d3]"
                />
                {newComment.trim() && (
                  <button
                    onClick={handlePostComment}
                    className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[14px] text-[#428dfe] hover:text-[#2963a3] transition-colors"
                  >
                    Post
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}