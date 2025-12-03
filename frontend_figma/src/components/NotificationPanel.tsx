import { ImageWithFallback } from './figma/ImageWithFallback';
import imgAvatarSmall from "figma:asset/ce67d23a925af943f1634792363b9deeb4837a22.png";
import { MoreHorizontal } from 'lucide-react';

interface NotificationItem {
  id: string;
  type: 'follow' | 'like' | 'comment';
  username: string;
  avatar: string;
  message: string;
  timestamp: string;
  hasAction?: boolean;
  postImage?: string;
}

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  // Mock notification data
  const yesterdayNotifications: NotificationItem[] = [
    {
      id: '1',
      type: 'follow',
      username: 'Username',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
      message: 'started following you.',
      timestamp: '1d',
      hasAction: true
    }
  ];

  const thisWeekNotifications: NotificationItem[] = [
    {
      id: '2',
      type: 'follow',
      username: 'Username',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      message: ', Username and others you know to see their photos and videos.',
      timestamp: '1d',
      hasAction: true
    },
    {
      id: '3',
      type: 'follow',
      username: 'Username',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop',
      message: ' is on Instagram. Username and 1 other follow them.',
      timestamp: '3d',
      hasAction: true
    }
  ];

  const earlierNotifications: NotificationItem[] = Array.from({ length: 10 }, (_, i) => ({
    id: `earlier-${i}`,
    type: 'like',
    username: 'Username',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    message: ', Username and Username  liked your post.',
    timestamp: '7w',
    hasAction: false,
    postImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=100&h=100&fit=crop'
  }));

  return (
    <div
      className={`fixed left-[90px] top-0 h-full w-[379px] bg-white z-30 shadow-2xl transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="h-[100px] px-[24px] border-b border-[#dbdbdb] flex items-center">
        {/* Notifications Title */}
        <h2 className="font-['Roboto:Bold',sans-serif] font-bold text-[24px] text-neutral-800 leading-[30px]">
          Notifications
        </h2>
      </div>

      {/* Scrollable Content */}
      <div
        className="h-[calc(100%-188px)] overflow-y-auto [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Yesterday Section */}
        <div className="pt-[11.5px] pb-[16px]">
          <h3 className="px-[24px] font-['Roboto:Bold',sans-serif] font-bold text-[16px] text-neutral-800 leading-[24px] mb-[12px]">
            Yesterday
          </h3>
          {yesterdayNotifications.map((notif) => (
            <div key={notif.id} className="px-[24px] py-[12px] hover:bg-[#f6f7f9] transition-colors">
              <div className="flex items-center gap-[12px]">
                <div className="size-[44px] rounded-full bg-neutral-100 overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={notif.avatar}
                    alt={notif.username}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-neutral-800 leading-[18px]">
                    <span className="font-['Roboto:SemiBold',sans-serif] font-semibold">
                      {notif.username}
                    </span>{' '}
                    {notif.message}{' '}
                    <span className="text-[#bacbdb]">{notif.timestamp}</span>
                  </p>
                </div>
                {notif.hasAction && (
                  <button className="px-[16px] py-[8px] bg-[#428dfe] hover:bg-[#2963a3] text-white rounded-[8px] font-['Roboto:SemiBold',sans-serif] font-semibold text-[14px] transition-colors flex-shrink-0">
                    Follow
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* This Week Section */}
        <div className="border-t border-[#dbdbdb] pt-[18.5px] pb-[16px]">
          <h3 className="px-[24px] font-['Roboto:Bold',sans-serif] font-bold text-[16px] text-neutral-800 leading-[24px] mb-[12px]">
            This Week
          </h3>
          {thisWeekNotifications.map((notif) => (
            <div key={notif.id} className="px-[24px] py-[12px] hover:bg-[#f6f7f9] transition-colors">
              <div className="flex items-center gap-[12px]">
                <div className="size-[44px] rounded-full bg-neutral-100 overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={notif.avatar}
                    alt={notif.username}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-neutral-800 leading-[18px]">
                    <span className="font-['Roboto:SemiBold',sans-serif] font-semibold">
                      {notif.username}
                    </span>
                    {notif.message}{' '}
                    <span className="text-[#bacbdb]">{notif.timestamp}</span>
                  </p>
                </div>
                {notif.hasAction && (
                  <button className="px-[16px] py-[8px] bg-[#428dfe] hover:bg-[#2963a3] text-white rounded-[8px] font-['Roboto:SemiBold',sans-serif] font-semibold text-[14px] transition-colors flex-shrink-0">
                    Follow
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Earlier Section */}
        <div className="border-t border-[#dbdbdb] pt-[18.5px] pb-[16px]">
          <h3 className="px-[24px] font-['Roboto:Bold',sans-serif] font-bold text-[16px] text-neutral-800 leading-[24px] mb-[12px]">
            Earlier
          </h3>
          {earlierNotifications.map((notif) => (
            <div key={notif.id} className="px-[24px] py-[12px] hover:bg-[#f6f7f9] transition-colors">
              <div className="flex items-center gap-[12px]">
                <div className="size-[44px] rounded-full bg-neutral-100 overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={notif.avatar}
                    alt={notif.username}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-neutral-800 leading-[18px]">
                    <span className="font-['Roboto:SemiBold',sans-serif] font-semibold">
                      {notif.username}
                    </span>
                    {notif.message}{' '}
                    <span className="text-[#bacbdb]">{notif.timestamp}</span>
                  </p>
                </div>
                {notif.postImage && (
                  <div className="size-[44px] rounded-[4px] bg-neutral-100 overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={notif.postImage}
                      alt="Post thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}