import { useNavigate } from 'react-router-dom';

interface ProductOrderDetailsExpandedProps {
  item: {
    id: string;
    type: 'commission' | 'product';
    username: string;
    handle: string;
    title: string;
    status: string;
    price: number;
    quantity?: number;
    orderNumber?: string;
    progressHistory?: Array<{
      id: string;
      actor: string;
      action: string;
      time: string;
      date: string;
      isLatest?: boolean;
    }>;
  };
  isProgressExpanded?: boolean;
  onToggleProgress?: () => void;
}

export default function ProductOrderDetailsExpanded({ item, isProgressExpanded = false, onToggleProgress }: ProductOrderDetailsExpandedProps) {
  const navigate = useNavigate();
  
  const handleMessageClick = () => {
    // Navigate to messages page with Service tab and specific order info
    navigate(`/messages?tab=service&orderId=${item.id}&orderType=${item.type}&username=${item.username}`);
  };

  const history = item.progressHistory || [];
  const hasLongHistory = history.length > 2;
  const latestUpdate = history.find(h => h.isLatest) || history[history.length - 1];

  return (
    <div className="bg-[#f6f7f9] border-[#dbdbdb] border-[0px_1px_0px_0px] border-solid rounded-[15px] shadow-[4px_0px_24px_0px_rgba(0,0,0,0.15)] mt-4 mx-[10px] mb-[10px] overflow-clip">
      <div className="px-[24px] py-[20px] space-y-[12px]">
        {/* Header */}
        <div className="space-y-0">
          <h3 className="font-['Work_Sans:Bold',sans-serif] font-bold text-[24px] text-[#2d6eb7] leading-[30px]">
            ORDER DETAILS
          </h3>
          <p className="font-['Work_Sans:Light',sans-serif] font-light text-[14px] text-[#2d6eb7] leading-[24px]">
            ITEM ID#{item.orderNumber}
          </p>
          <p className="font-['Work_Sans:Light',sans-serif] font-light text-[14px] text-[#2d6eb7] leading-[24px]">
            ORDER# {item.orderNumber}
          </p>
        </div>

        {/* Product Name */}
        <div className="space-y-0">
          <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d6eb7] leading-[30px]">
            PRODUCT NAME
          </p>
        </div>

        {/* Item Description */}
        <div className="space-y-0">
          <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d6eb7] leading-[30px]">
            ITEM DESCRIPTION
          </p>
        </div>

        {/* Seller Info */}
        <div className="space-y-0">
          <div className="flex items-end gap-[10px]">
            <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[14px] text-[#2d6eb7] leading-[24px]">
              SELLER: {item.username} | {item.handle}
            </p>
            {/* Message Icon */}
            <button 
              onClick={handleMessageClick}
              className="size-[24px] flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
              title="Message about this product"
            >
              <svg className="size-full" fill="none" viewBox="0 0 20 18">
                <path d="M17.25 0H2.75C1.233 0 0 1.234 0 2.752V15.247C0 16.765 1.233 18 2.75 18H17.25C18.767 18 20 16.765 20 15.247V2.752C20 1.234 18.767 0 17.25 0ZM2.75 1.5H17.25C17.94 1.5 18.5 2.06 18.5 2.75V3.464L10.45 8.831C10.177 9.011 9.824 9.013 9.55 8.829L1.5 3.464V2.75C1.5 2.06 2.06 1.5 2.75 1.5V1.5ZM17.25 16.498H2.75C2.06 16.498 1.5 15.938 1.5 15.248V5.222L8.74 10.052C9.123 10.308 9.562 10.436 10 10.436C10.44 10.436 10.877 10.308 11.26 10.053L18.5 5.223V15.245C18.5 15.935 17.94 16.495 17.25 16.495V16.498Z" fill="#3971B8"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Order Tracking Box */}
        <div className="border-[3px] border-[#95d2ff] border-solid rounded-[15px] relative">
          {/* Title */}
          <div className="absolute left-[24px] top-0 -translate-y-1/2 bg-[#f6f7f9] px-2">
            <p className="font-['Roboto:Bold',sans-serif] font-bold text-[16px] text-[#2d6eb7] leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Order Tracking
            </p>
          </div>

          {/* Timeline Content */}
          <div className="pt-[33px] pb-[20px] px-[24px]">
            {hasLongHistory ? (
              /* Long History - Show with collapsible toggle */
              <div>
                {!isProgressExpanded ? (
                  /* Collapsed View - Show latest update only */
                  <div className="space-y-[15px]">
                    {/* Click to expand button - Only shown if history > 2 */}
                    <button 
                      onClick={onToggleProgress}
                      className="flex items-center px-0 py-[5px] hover:opacity-70 transition-opacity cursor-pointer"
                    >
                      <p className="font-['Roboto:Medium',sans-serif] font-medium text-[14px] text-[#c8d6e6] leading-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        - CLICK TO VIEW PROGRESS HISTORY -
                      </p>
                    </button>

                    {/* Latest update */}
                    {latestUpdate && (
                      <div className="flex items-start gap-[15px]">
                        <div className="size-[20px] rounded-full bg-[#acefb0] shrink-0" />
                        <div className="flex-1 -mt-[2px]">
                          <p className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#2d6eb7] leading-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {latestUpdate.actor.startsWith('[') ? (
                              <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
                                {latestUpdate.action}
                              </span>
                            ) : (
                              <>
                                <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {latestUpdate.actor}
                                </span>
                                {` ${latestUpdate.action}`}
                              </>
                            )}
                          </p>
                          <p className="font-['Roboto:Light',sans-serif] font-light text-[14px] text-[#a9b7d9] leading-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {`${latestUpdate.time} | `}
                            <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {latestUpdate.date}
                            </span>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Expanded View - Show full timeline with scroll */
                  <div>
                    {/* Click to collapse button */}
                    <button 
                      onClick={onToggleProgress}
                      className="flex items-center px-0 py-[5px] mb-[15px] hover:opacity-70 transition-opacity cursor-pointer"
                    >
                      <p className="font-['Roboto:Medium',sans-serif] font-medium text-[14px] text-[#c8d6e6] leading-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        - CLICK TO COLLAPSE PROGRESS HISTORY -
                      </p>
                    </button>
                    
                    <div className="max-h-[200px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-[#E9ECF2] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#95d2ff] [&::-webkit-scrollbar-thumb]:rounded-full [scrollbar-width:thin] [scrollbar-color:#95d2ff_#E9ECF2]">
                      <div className="relative pr-2">
                        {/* Vertical Line */}
                        <div className="absolute left-[10px] top-[10px] bottom-[10px] w-[1px] bg-[#E9ECF2]" />
                        
                        <div className="space-y-[30px]">
                          {history.map((entry, index) => (
                            <div key={entry.id} className="flex items-start gap-[15px] relative">
                              <div className={`size-[20px] rounded-full shrink-0 z-10 ${entry.isLatest ? 'bg-[#acefb0]' : 'bg-[#e9ecf2]'}`} />
                              <div className="flex-1 -mt-[2px]">
                                <p className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#2d6eb7] leading-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {entry.actor.startsWith('[') ? (
                                    <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      {entry.action}
                                    </span>
                                  ) : (
                                    <>
                                      <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        {entry.actor}
                                      </span>
                                      {` ${entry.action}`}
                                    </>
                                  )}
                                </p>
                                <p className="font-['Roboto:Light',sans-serif] font-light text-[14px] text-[#a9b7d9] leading-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {`${entry.time} | `}
                                  <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    {entry.date}
                                  </span>
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Short History (2 or fewer items) - Display directly without toggle */
              <div className="space-y-[30px]">
                {history.length > 0 ? (
                  history.map((entry) => (
                    <div key={entry.id} className="flex items-start gap-[15px]">
                      <div className={`size-[20px] rounded-full shrink-0 ${entry.isLatest ? 'bg-[#acefb0]' : 'bg-[#e9ecf2]'}`} />
                      <div className="flex-1 -mt-[2px]">
                        <p className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#2d6eb7] leading-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {entry.actor.startsWith('[') ? (
                            <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {entry.action}
                            </span>
                          ) : (
                            <>
                              <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
                                {entry.actor}
                              </span>
                              {` ${entry.action}`}
                            </>
                          )}
                        </p>
                        <p className="font-['Roboto:Light',sans-serif] font-light text-[14px] text-[#a9b7d9] leading-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {`${entry.time} | `}
                          <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {entry.date}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex items-start gap-[15px]">
                    <div className="size-[20px] rounded-full bg-[#e9ecf2] shrink-0" />
                    <div className="flex-1 -mt-[2px]">
                      <p className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] text-[#2d6eb7] leading-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
                          No tracking history available
                        </span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}