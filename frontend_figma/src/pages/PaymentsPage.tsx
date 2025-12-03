import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, CreditCard, MessageSquare, Bell, PlusSquare, ChevronDown, ChevronUp } from 'lucide-react';
import imgAvatarSmall from "figma:asset/ce67d23a925af943f1634792363b9deeb4837a22.png";
import imgImage64 from "figma:asset/72e4462f590042cd762853a816e000ce1895aaad.png";
import imgFrame from "figma:asset/43f2f605db1237de841075d44257840170104211.png";
import NotificationPanel from "../components/NotificationPanel";
import LeftSidebar from "../components/LeftSidebar";

type TabType = 'complete' | 'initial' | 'final' | 'products';

interface PaymentRecord {
  id: string;
  type: 'product' | 'commission';
  title: string;
  status: 'COMPLETE' | 'IN PROGRESS' | 'PENDING';
  totalAmount: number;
  thumbnailColor: string;
  thumbnail?: string;
  orderNumber: string;
  receiptId: string;
  
  // Seller information (for all records)
  seller: {
    username: string;
    handle: string;
    profileUrl: string;
  };
  
  // Commission-specific fields
  commissionType?: string;
  commissioner?: {
    username: string;
    handle: string;
  };
  initialPayment?: {
    amount: number;
    method: string;
    date: string;
  };
  finalPayment?: {
    amount: number;
    method: string;
    date: string;
  };
  deliveryMethod?: string;
  
  // Product-specific fields
  productDetails?: string;
}

const mockPaymentData: PaymentRecord[] = [
  // Record A - Product (Simple shop purchase)
  {
    id: 'prod-001',
    type: 'product',
    title: 'Pre-made VTuber Models',
    status: 'COMPLETE',
    totalAmount: 180000,
    thumbnailColor: '#ef4444',
    orderNumber: '1532425135231',
    receiptId: '543564536341',
    productDetails: 'Complete VTuber model package including base design, textures, and basic rigging.',
    seller: {
      username: 'SELLER_USERNAME',
      handle: '@seller',
      profileUrl: 'https://example.com/seller',
    },
  },
  
  // Record B - Commission (In Progress - Only Initial Payment)
  {
    id: 'comm-001',
    type: 'commission',
    title: '2D Character Illustration',
    status: 'IN PROGRESS',
    totalAmount: 50000,
    thumbnailColor: '#8b5cf6',
    orderNumber: '1532425135232',
    receiptId: '543564536342',
    commissionType: '2D Illustration with Background',
    commissioner: {
      username: 'ARTLOVER',
      handle: '@artlover',
    },
    initialPayment: {
      amount: 25000,
      method: 'GCash',
      date: 'December 1, 2025',
    },
    deliveryMethod: 'Digital Download',
    seller: {
      username: 'SELLER_USERNAME',
      handle: '@seller',
      profileUrl: 'https://example.com/seller',
    },
  },
  
  // Record C - Commission (Completed - Both payments)
  {
    id: 'comm-002',
    type: 'commission',
    title: '3D Modeling with Rigging',
    status: 'COMPLETE',
    totalAmount: 250000,
    thumbnailColor: '#10b981',
    orderNumber: '1532425135233',
    receiptId: '543564536343',
    commissionType: '3D Modeling with Rigging',
    commissioner: {
      username: 'CLIENT_USERNAME',
      handle: '@username',
    },
    initialPayment: {
      amount: 125000,
      method: 'PayPal',
      date: 'November 15, 2025',
    },
    finalPayment: {
      amount: 125000,
      method: 'PayPal',
      date: 'November 30, 2025',
    },
    deliveryMethod: 'Cloud Storage Link',
    seller: {
      username: 'SELLER_USERNAME',
      handle: '@seller',
      profileUrl: 'https://example.com/seller',
    },
  },
  
  // Record D - Product (Another shop item)
  {
    id: 'prod-002',
    type: 'product',
    title: 'Custom Emote Pack (12 pcs)',
    status: 'COMPLETE',
    totalAmount: 35000,
    thumbnailColor: '#f59e0b',
    orderNumber: '1532425135234',
    receiptId: '543564536344',
    productDetails: 'Set of 12 custom animated emotes for streaming platforms.',
    seller: {
      username: 'SELLER_USERNAME',
      handle: '@seller',
      profileUrl: 'https://example.com/seller',
    },
  },
  
  // Record E - Commission (In Progress - Only Initial)
  {
    id: 'comm-003',
    type: 'commission',
    title: 'Live2D Character Rig',
    status: 'IN PROGRESS',
    totalAmount: 180000,
    thumbnailColor: '#ec4899',
    orderNumber: '1532425135235',
    receiptId: '543564536345',
    commissionType: 'Live2D Rigging Service',
    commissioner: {
      username: 'VTUBER_FAN',
      handle: '@vtuberfan',
    },
    initialPayment: {
      amount: 90000,
      method: 'Bank Transfer',
      date: 'November 28, 2025',
    },
    deliveryMethod: 'Email Delivery',
    seller: {
      username: 'SELLER_USERNAME',
      handle: '@seller',
      profileUrl: 'https://example.com/seller',
    },
  },
];

export default function PaymentsPage() {
  const navigate = useNavigate();
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('complete');
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);

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

  const toggleRow = (id: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  const getFilteredData = (): PaymentRecord[] => {
    switch (activeTab) {
      case 'complete':
        // Show all completed transactions (products + completed commissions)
        return mockPaymentData.filter(record => record.status === 'COMPLETE');
      
      case 'initial':
        // Show only commissions with initial payments
        return mockPaymentData.filter(record => 
          record.type === 'commission' && record.initialPayment
        );
      
      case 'final':
        // Show only commissions with final payments
        return mockPaymentData.filter(record => 
          record.type === 'commission' && record.finalPayment
        );
      
      case 'products':
        // Show only products
        return mockPaymentData.filter(record => record.type === 'product');
      
      default:
        return mockPaymentData;
    }
  };

  const filteredData = getFilteredData();

  return (
    <div className="relative w-full min-h-screen bg-white flex">
      <LeftSidebar
        activeMode={isNotificationPanelOpen ? 'notifications' : 'payments'}
        isSidebarHovered={isSidebarHovered}
        setIsSidebarHovered={setIsSidebarHovered}
        onNotificationsClick={handleNotificationsClick}
        onHomeClick={() => navigate('/home')}
        sidebarItems={sidebarItems}
      />

      {/* Main Content */}
      <div 
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isSidebarHovered && !isNotificationPanelOpen ? 'ml-[250px]' : 'ml-[90px]'
        } min-h-screen`}
      >
        <div className="border border-[#d0cfcf] min-h-screen">
          {/* Header */}
          <div className="px-6 py-[22px]">
            <h1 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[18px] text-[#2963a3]">
              MY PAYMENTS
            </h1>
          </div>

          {/* Tab Navigation */}
          <div className="bg-[#f6f7f9] h-[49px] border-b border-[#a9c6db]">
            <div className="flex items-center h-full">
              <button
                onClick={() => setActiveTab('complete')}
                className={`relative px-[28px] py-[14px] transition-colors ${
                  activeTab === 'complete'
                    ? 'text-[#2963a3] opacity-100'
                    : 'text-[#2963a3] opacity-30'
                }`}
              >
                <span className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[14.857px] uppercase leading-[20.571px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  COMPLETE
                </span>
                {activeTab === 'complete' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[1.143px] bg-[#2963a3]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('initial')}
                className={`relative px-[28px] py-[14px] transition-colors ${
                  activeTab === 'initial'
                    ? 'text-[#2963a3] opacity-100'
                    : 'text-[#2963a3] opacity-30'
                }`}
              >
                <span className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[14.857px] uppercase leading-[20.571px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  INITIAL PAYMENTS
                </span>
                {activeTab === 'initial' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[1.143px] bg-[#2963a3]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('final')}
                className={`relative px-[28px] py-[14px] transition-colors ${
                  activeTab === 'final'
                    ? 'text-[#2963a3] opacity-100'
                    : 'text-[#2963a3] opacity-30'
                }`}
              >
                <span className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[14.857px] uppercase leading-[20.571px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  FINAL PAYMENTS
                </span>
                {activeTab === 'final' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[1.143px] bg-[#2963a3]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`relative px-[28px] py-[14px] transition-colors ${
                  activeTab === 'products'
                    ? 'text-[#2963a3] opacity-100'
                    : 'text-[#2963a3] opacity-30'
                }`}
              >
                <span className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[14.857px] uppercase leading-[20.571px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  PRODUCTS
                </span>
                {activeTab === 'products' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[1.143px] bg-[#2963a3]" />
                )}
              </button>
            </div>
          </div>

          {/* Payment Records List */}
          <div className="px-[14px] py-6 space-y-[10px]">
            {filteredData.length === 0 ? (
              <div className="text-center py-12">
                <p className="font-['Work_Sans:Regular',sans-serif] text-[14px] text-[#94a3b8]">
                  No records found for this filter.
                </p>
              </div>
            ) : (
              filteredData.map((record) => {
                const isExpanded = expandedRows.has(record.id);
                
                return (
                  <div key={record.id} className="w-full">
                    {/* Seller Info - Shows for all records */}
                    <div 
                      className="flex items-center justify-start px-[10px] py-0 mb-[5px] cursor-pointer hover:opacity-70 transition-opacity"
                      onClick={() => navigate(`/profile/${record.seller.profileUrl.split('/').pop()}`)}
                    >
                      <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[12px] text-[#2963a3]">
                        {record.seller.username}
                      </p>
                      <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[12px] text-[#2963a3] mx-2">
                        |
                      </p>
                      <p className="font-['Work_Sans:Italic',sans-serif] font-normal italic text-[8.5px] text-[#2963a3]">
                        {record.seller.handle}
                      </p>
                    </div>

                    {/* Collapsed Row */}
                    <div className="bg-white rounded-[15px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)]">
                      <div className="flex items-center justify-between px-[35px] py-[9px] h-[100px]">
                        {/* Thumbnail */}
                        <div 
                          className="h-[82.286px] w-[80px] rounded-[8px] shrink-0"
                          style={{ backgroundColor: record.thumbnailColor }}
                        />

                        {/* Title */}
                        <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[15px] text-[#104274] text-center w-[202px] capitalize">
                          {record.title}
                        </p>

                        {/* Status */}
                        <div className="flex flex-col items-center justify-center pb-[5px] pt-0 text-[12px] text-center">
                          <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#104274] h-[20px]">
                            STATUS:
                          </p>
                          <p className={`font-['Work_Sans:Regular',sans-serif] font-normal h-[20px] ${
                            record.status === 'COMPLETE' ? 'text-[#95d2ff]' : 'text-[#FBB040]'
                          }`}>
                            {record.status}
                          </p>
                        </div>

                        {/* Expand/Collapse Button */}
                        <button
                          onClick={() => toggleRow(record.id)}
                          className="flex items-center justify-center transition-transform duration-300"
                        >
                          <ChevronDown 
                            className={`w-[20px] h-[20px] text-[#104274] transition-transform duration-300 ${
                              isExpanded ? 'rotate-180' : 'rotate-0'
                            }`}
                          />
                        </button>

                        {/* Price */}
                        <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#104274] text-center w-[107px]">
                          ₱{record.totalAmount.toLocaleString()}.00
                        </p>
                      </div>

                      {/* Expanded Details */}
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="bg-[#f6f7f9] rounded-[15px] border border-[#dbdbdb] shadow-[4px_0px_24px_0px_rgba(0,0,0,0.15)] mx-4 mb-4 px-6 py-5 relative">
                          {/* QR Code / Receipt ID */}
                          <div className="absolute right-[20px] top-[4px] flex items-center gap-[8px]">
                            <p className="font-['Work_Sans:Light',sans-serif] font-light text-[14px] text-black text-right">
                              RECEIPT ID#{record.receiptId}
                            </p>
                            <div className="w-[129px] h-[129px]">
                              <img src={imgImage64} alt="QR Code" className="w-full h-full object-cover" />
                            </div>
                          </div>

                          {/* Order Details */}
                          <div className="space-y-2">
                            <div>
                              <p className="font-['Work_Sans:Bold',sans-serif] font-bold text-[24px] text-[#2d6eb7] leading-[30px]">
                                ORDER DETAILS
                              </p>
                              <p className="font-['Work_Sans:Light',sans-serif] font-light text-[14px] text-[#2d6eb7] leading-[24px]">
                                ORDER# {record.orderNumber}
                              </p>
                            </div>

                            {/* Commission Details */}
                            {record.type === 'commission' && (
                              <div className="space-y-2 mt-4">
                                <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d6eb7] leading-[30px]">
                                  COMMISSION TYPE: {record.commissionType}
                                </p>
                                
                                {record.commissioner && (
                                  <div className="flex items-center gap-[10px]">
                                    <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[14px] text-[#2d6eb7] leading-[24px]">
                                      COMMISSIONER: {record.commissioner.username} | {record.commissioner.handle}
                                    </p>
                                  </div>
                                )}

                                {record.initialPayment && (
                                  <>
                                    <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d6eb7] leading-[30px]">
                                      INITIAL AMOUNT PAID: ₱{record.initialPayment.amount.toLocaleString()}.00
                                    </p>
                                    <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d6eb7] leading-[30px]">
                                      MODE OF PAYMENT: {record.initialPayment.method}
                                    </p>
                                  </>
                                )}

                                {record.finalPayment && (
                                  <>
                                    <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d6eb7] leading-[30px]">
                                      FINAL AMOUNT PAID: ₱{record.finalPayment.amount.toLocaleString()}.00
                                    </p>
                                    <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d6eb7] leading-[30px]">
                                      MODE OF PAYMENT: {record.finalPayment.method}
                                    </p>
                                  </>
                                )}

                                {record.deliveryMethod && (
                                  <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d6eb7] leading-[30px]">
                                    DELIVERY METHOD: {record.deliveryMethod}
                                  </p>
                                )}
                              </div>
                            )}

                            {/* Product Details */}
                            {record.type === 'product' && (
                              <div className="space-y-2 mt-4">
                                <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d6eb7] leading-[30px]">
                                  PRODUCT DETAILS:
                                </p>
                                <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[14px] text-[#2d6eb7] leading-[24px]">
                                  {record.productDetails}
                                </p>
                                <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d6eb7] leading-[30px]">
                                  TOTAL PAID: ₱{record.totalAmount.toLocaleString()}.00
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
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