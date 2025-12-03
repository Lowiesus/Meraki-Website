import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  CreditCard,
  MessageSquare,
  Bell,
  PlusSquare,
  ChevronDown,
  ChevronUp,
  Trash2,
} from "lucide-react";
import imgAvatarSmall from "figma:asset/ce67d23a925af943f1634792363b9deeb4837a22.png";
import imgBgTexture31 from "figma:asset/0d00f6be6ac86f96b5d39e2e21a7b72f784d6eac.png";
import imgComputerPengu3 from "figma:asset/fb165cea933165a54e978aa9e846aa73c20a3eb9.png";
import imgRectangle9 from "figma:asset/c3cb5c55448c44afe9329d1c8b9991900d354244.png";
import imgRectangle10 from "figma:asset/7de61cab42ca064544385ad78a91fcb69b618032.png";
import imgRectangle11 from "figma:asset/e9a69168376c70de6e59a34ca84e63220b45eb73.png";
import NotificationPanel from "../components/NotificationPanel";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";
import OrderDetailsExpanded from "../components/OrderDetailsExpanded";
import ProductOrderDetailsExpanded from "../components/ProductOrderDetailsExpanded";
import LeftSidebar from "../components/LeftSidebar";
import OrderSuccessModal from "../components/OrderSuccessModal";

type TabType = "commissions" | "products";
type PaymentMethod = "cod" | "card" | "dragonpay";

interface CartItem {
  id: string;
  type: "commission" | "product";
  username: string;
  handle: string;
  title: string;
  status: string;
  price: number;
  thumbnailColor: string;
  quantity?: number;
  orderNumber?: string;
  progressHistory?: ProgressHistoryItem[];
}

interface ProgressHistoryItem {
  id: string;
  actor: string;
  action: string;
  time: string;
  date: string;
  isLatest?: boolean;
}

const mockCommissions: CartItem[] = [
  {
    id: "comm-1",
    type: "commission",
    username: "ARTIST_NAME",
    handle: "@artistname",
    title: "Digital Portrait",
    status: "AWAITING INITIAL PAYMENT",
    price: 2500,
    thumbnailColor: "#8b5cf6",
    progressHistory: [
      {
        id: "ph-1-1",
        actor: "CUSTOMER_USERNAME",
        action: "has sent a COMMISSION REQUEST",
        time: "10:02 AM",
        date: "Nov 10",
      },
      {
        id: "ph-1-2",
        actor: "CLIENT_USERNAME",
        action:
          "has sent the COMMISSION BREAKDOWN DETAILS - view here -",
        time: "2:02 PM",
        date: "Nov 12",
      },
      {
        id: "ph-1-3",
        actor: "CUSTOMER_USERNAME",
        action: "has approved the COMMISSION DETAILS",
        time: "12:02 PM",
        date: "Nov 15",
        isLatest: true,
      },
    ],
  },
  {
    id: "comm-2",
    type: "commission",
    username: "ILLUSTRATOR",
    handle: "@illustrator",
    title: "Character Sheet",
    status: "AWAITING FINAL PAYMENT",
    price: 5000,
    thumbnailColor: "#ec4899",
    progressHistory: [
      {
        id: "ph-2-1",
        actor: "CUSTOMER_USERNAME",
        action: "has sent a COMMISSION REQUEST",
        time: "9:15 AM",
        date: "Nov 5",
      },
    ],
  },
  {
    id: "comm-3",
    type: "commission",
    username: "DESIGNER_PRO",
    handle: "@designerpro",
    title: "Website Design",
    status: "REQUEST SENT",
    price: 10000,
    thumbnailColor: "#10b981",
    progressHistory: [
      {
        id: "ph-3-1",
        actor: "CUSTOMER_USERNAME",
        action: "has sent a COMMISSION REQUEST",
        time: "3:30 PM",
        date: "Nov 18",
        isLatest: true,
      },
    ],
  },
  {
    id: "comm-4",
    type: "commission",
    username: "3D_ARTIST_PRO",
    handle: "@3dartistpro",
    title: "Full Body Illustration",
    status: "ONGOING",
    price: 180000,
    thumbnailColor: "#60A5FA",
    progressHistory: [
      {
        id: "ph-4-1",
        actor: "CUSTOMER_USERNAME",
        action: "has sent a COMMISSION REQUEST",
        time: "10:02 AM",
        date: "Nov 10",
      },
      {
        id: "ph-4-2",
        actor: "CLIENT_USERNAME",
        action:
          "has sent the COMMISSION BREAKDOWN DETAILS - view here -",
        time: "2:02 PM",
        date: "Nov 12",
      },
      {
        id: "ph-4-3",
        actor: "CUSTOMER_USERNAME",
        action: "has approved the COMMISSION DETAILS",
        time: "12:02 PM",
        date: "Nov 15",
      },
      {
        id: "ph-4-4",
        actor: "[MERAKI SYSTEM]",
        action: "COMMISION AWAITING INITAL PAYMENT",
        time: "12:05 PM",
        date: "Nov 15",
      },
      {
        id: "ph-4-5",
        actor: "[MERAKI SYSTEM]",
        action: "INITAL PAYMENT SUCCESSFULLY PAID",
        time: "12:25 PM",
        date: "Nov 15",
      },
      {
        id: "ph-4-6",
        actor: "CLIENT_USERNAME",
        action: "has started working on the commission",
        time: "12:45 PM",
        date: "Nov 15",
      },
      {
        id: "ph-4-7",
        actor: "CLIENT_USERNAME",
        action:
          "has sent updates on the commission - view here -",
        time: "3:45 AM",
        date: "Nov 18",
        isLatest: true,
      },
    ],
  },
];

const mockProducts: CartItem[] = [
  {
    id: "prod-1",
    type: "product",
    username: "SHOP_OWNER",
    handle: "@shopowner",
    orderNumber: "1234567890123456",
    title: "Art Print Pack",
    status: "IN CART",
    price: 350,
    quantity: 2,
    thumbnailColor: "#f59e0b",
    progressHistory: [
      {
        id: "prod-ph-1-1",
        actor: "CUSTOMER_USERNAME",
        action: "has added item to cart",
        time: "2:30 PM",
        date: "Nov 20",
        isLatest: true,
      },
    ],
  },
  {
    id: "prod-2",
    type: "product",
    username: "MERCH_STORE",
    handle: "@merchstore",
    orderNumber: "9876543210987654",
    title: "Sticker Set (12pcs)",
    status: "PROCESSING",
    price: 180,
    quantity: 3,
    thumbnailColor: "#ef4444",
    progressHistory: [
      {
        id: "prod-ph-2-1",
        actor: "[MERAKI SYSTEM]",
        action: "ORDER PLACED",
        time: "10:02 AM",
        date: "Nov 10",
      },
      {
        id: "prod-ph-2-2",
        actor: "[MERAKI SYSTEM]",
        action: "PAYMENT CONFIRMED",
        time: "10:15 AM",
        date: "Nov 10",
      },
      {
        id: "prod-ph-2-3",
        actor: "PRODUCTID",
        action: "has been picked up by our LOGISTICS PARTNER",
        time: "2:02 PM",
        date: "Nov 10",
      },
      {
        id: "prod-ph-2-4",
        actor: "PRODUCTID",
        action: "has arrived at the SORTING FACILITY CENTER",
        time: "5:02 PM",
        date: "Nov 12",
      },
      {
        id: "prod-ph-2-5",
        actor: "PRODUCTID",
        action: "has departed from SORTING FACILITY",
        time: "8:02 PM",
        date: "Nov 15",
        isLatest: true,
      },
    ],
  },
  {
    id: "prod-3",
    type: "product",
    username: "ART_SUPPLIES",
    handle: "@artsupplies",
    orderNumber: "5555666677778888",
    title: "Canvas Bundle (5pcs)",
    status: "SHIPPED",
    price: 1200,
    quantity: 1,
    thumbnailColor: "#8b5cf6",
    progressHistory: [
      {
        id: "prod-ph-3-1",
        actor: "[MERAKI SYSTEM]",
        action: "ORDER PLACED",
        time: "9:15 AM",
        date: "Nov 5",
      },
      {
        id: "prod-ph-3-2",
        actor: "[MERAKI SYSTEM]",
        action: "PAYMENT CONFIRMED",
        time: "9:20 AM",
        date: "Nov 5",
      },
      {
        id: "prod-ph-3-3",
        actor: "PRODUCTID",
        action: "has been picked up by our LOGISTICS PARTNER",
        time: "2:00 PM",
        date: "Nov 5",
      },
      {
        id: "prod-ph-3-4",
        actor: "PRODUCTID",
        action: "has arrived at the SORTING FACILITY CENTER",
        time: "5:00 PM",
        date: "Nov 6",
      },
      {
        id: "prod-ph-3-5",
        actor: "PRODUCTID",
        action: "has departed from SORTING FACILITY",
        time: "8:00 PM",
        date: "Nov 7",
      },
      {
        id: "prod-ph-3-6",
        actor: "PRODUCTID",
        action:
          "has arrived and to be received by the DELIVERY HUB",
        time: "11:45 PM",
        date: "Nov 15",
      },
      {
        id: "prod-ph-3-7",
        actor: "PRODUCTID",
        action: "has arrived at the DELIVERY HUB",
        time: "12:45 PM",
        date: "Nov 15",
      },
      {
        id: "prod-ph-3-8",
        actor: "[MERAKI SYSTEM]",
        action: "Delivery driver has been assigned",
        time: "12:45 PM",
        date: "Nov 15",
      },
      {
        id: "prod-ph-3-9",
        actor: "PRODUCTID",
        action: "is out for DELIVERY",
        time: "3:45 AM",
        date: "Nov 18",
        isLatest: true,
      },
    ],
  },
];

export default function CartAndOrdersPage() {
  const navigate = useNavigate();
  const [isSidebarHovered, setIsSidebarHovered] =
    useState(false);
  const [activeTab, setActiveTab] =
    useState<TabType>("commissions");
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("card");
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] =
    useState(false);
  const [showSavedCards, setShowSavedCards] = useState(false);

  // Cart interaction states
  const [expandedRows, setExpandedRows] = useState<Set<string>>(
    new Set(),
  );
  const [selectedItems, setSelectedItems] = useState<
    Set<string>
  >(new Set());
  const [isDeleteModalOpen, setIsDeleteModalOpen] =
    useState(false);
  const [itemToDelete, setItemToDelete] = useState<
    string | null
  >(null);
  const [commissionItems, setCommissionItems] =
    useState<CartItem[]>(mockCommissions);
  const [productItems, setProductItems] =
    useState<CartItem[]>(mockProducts);
  const [expandedProgressHistory, setExpandedProgressHistory] =
    useState<Set<string>>(new Set());

  // Payment form states
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [selectedCardType, setSelectedCardType] = useState("");
  const [showCardTypeDropdown, setShowCardTypeDropdown] =
    useState(false);

  // COD form states - Pre-filled with mock data
  const [address, setAddress] = useState(
    "123 Main Street, Barangay Sample",
  );
  const [region, setRegion] = useState("Metro Manila");
  const [postalCode, setPostalCode] = useState("1234");
  const [city, setCity] = useState("Quezon City");
  const [phoneContact, setPhoneContact] = useState(
    "+63 912 345 6789",
  );

  // Success modal state
  const [isSuccessModalOpen, setIsSuccessModalOpen] =
    useState(false);
  const [successModalConfig, setSuccessModalConfig] = useState({
    title: "ORDER CHECKOUT",
    message: "Checkout Success!",
    description: "",
    buttonText: "CONFIRM CHECKOUT",
    transactionId: "",
  });

  const handleNotificationsClick = () => {
    setIsNotificationPanelOpen(!isNotificationPanelOpen);
  };

  const toggleExpanded = (itemId: string) => {
    setExpandedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const toggleSelected = (itemId: string) => {
    setSelectedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const toggleProductSelected = (itemId: string) => {
    // For products: checkbox controls both selection AND expansion
    const willBeSelected = !selectedItems.has(itemId);

    setSelectedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });

    setExpandedRows((prev) => {
      const newSet = new Set(prev);
      if (willBeSelected) {
        newSet.add(itemId);
      } else {
        newSet.delete(itemId);
      }
      return newSet;
    });
  };

  const toggleProgressHistory = (itemId: string) => {
    setExpandedProgressHistory((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const updateProductQuantity = (
    itemId: string,
    delta: number,
  ) => {
    setProductItems((prev) =>
      prev.map((item) => {
        if (item.id === itemId && item.quantity) {
          const newQuantity = Math.max(
            1,
            item.quantity + delta,
          );
          return { ...item, quantity: newQuantity };
        }
        return item;
      }),
    );
  };

  const handleDeleteClick = (itemId: string) => {
    setItemToDelete(itemId);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (itemToDelete) {
      if (activeTab === "commissions") {
        setCommissionItems((prev) =>
          prev.filter((item) => item.id !== itemToDelete),
        );
      } else {
        setProductItems((prev) =>
          prev.filter((item) => item.id !== itemToDelete),
        );
      }
      setSelectedItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(itemToDelete);
        return newSet;
      });
      setExpandedRows((prev) => {
        const newSet = new Set(prev);
        newSet.delete(itemToDelete);
        return newSet;
      });
    }
    setIsDeleteModalOpen(false);
    setItemToDelete(null);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    setItemToDelete(null);
  };

  const handleCheckout = () => {
    // Generate random transaction ID
    const transactionId = Math.floor(
      100000000000 + Math.random() * 900000000000,
    ).toString();

    if (paymentMethod === "cod") {
      // Validate COD form fields
      if (
        !address.trim() ||
        !region.trim() ||
        !postalCode.trim() ||
        !city.trim() ||
        phoneContact.trim().length <= 3
      ) {
        alert("Please fill in all shipping details.");
        return;
      }

      // Show success modal for COD
      setSuccessModalConfig({
        title: "ORDER CHECKOUT",
        message: "Checkout Success!",
        description: "",
        buttonText: "CONFIRM CHECKOUT",
        transactionId: transactionId,
      });
      setIsSuccessModalOpen(true);
    } else if (paymentMethod === "dragonpay") {
      // Show success modal for DragonPay (simulating return from payment gateway)
      setSuccessModalConfig({
        title: "ORDER CHECKOUT",
        message: "Payment Success!",
        description: "",
        buttonText: "CONFIRM PAYMENT",
        transactionId: transactionId,
      });
      setIsSuccessModalOpen(true);
    } else if (paymentMethod === "card") {
      // Show success modal for Card payment
      setSuccessModalConfig({
        title: "ORDER CHECKOUT",
        message: "Payment Success!",
        description: "",
        buttonText: "CONFIRM PAYMENT",
        transactionId: transactionId,
      });
      setIsSuccessModalOpen(true);
    }
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false);
    // Clear selected items after successful checkout
    setSelectedItems(new Set());
  };

  const sidebarItems = [
    { icon: "home", label: "Home" },
    { icon: ShoppingCart, label: "Cart and Orders" },
    { icon: CreditCard, label: "My Payments" },
    { icon: MessageSquare, label: "Messages" },
    { icon: Bell, label: "Notifications" },
    { icon: PlusSquare, label: "Create" },
  ];

  const currentItems =
    activeTab === "commissions"
      ? commissionItems
      : productItems;

  const calculateSubtotal = () => {
    return currentItems
      .filter((item) => selectedItems.has(item.id))
      .reduce((sum, item) => {
        const itemTotal = item.quantity
          ? item.price * item.quantity
          : item.price;
        return sum + itemTotal;
      }, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = paymentMethod === "cod" ? 50 : 0;
  const total = subtotal + shipping;

  return (
    <div className="relative w-full h-screen bg-white flex overflow-hidden">
      <LeftSidebar
        activeMode={
          isNotificationPanelOpen ? "notifications" : "cart"
        }
        isSidebarHovered={isSidebarHovered}
        setIsSidebarHovered={setIsSidebarHovered}
        onNotificationsClick={handleNotificationsClick}
        onHomeClick={() => navigate("/home")}
        sidebarItems={sidebarItems}
      />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isSidebarHovered && !isNotificationPanelOpen
            ? "ml-[250px]"
            : "ml-[90px]"
        } min-h-screen flex`}
      >
        {/* Left Content - Cart Items */}
        <div className="flex-1 border-r border-[#d0cfcf] flex flex-col h-screen">
          {/* Header */}
          <div className="px-6 py-[22px] border-b border-[#d0cfcf] flex-shrink-0">
            <h1 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[18px] text-[#2963a3]">
              | MERAKI SHOPPING CART
            </h1>
          </div>

          {/* Tab Navigation */}
          <div className="bg-[#f6f7f9] h-[49px] border-b border-[#a9c6db] flex-shrink-0">
            <div className="flex items-center h-full">
              <button
                onClick={() => setActiveTab("commissions")}
                className={`relative px-[28px] py-[14px] transition-colors ${
                  activeTab === "commissions"
                    ? "text-[#2963a3] opacity-100"
                    : "text-[#2963a3] opacity-30"
                }`}
              >
                <span
                  className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[14.857px] uppercase leading-[20.571px]"
                  style={{
                    fontVariationSettings: "'wdth' 100",
                  }}
                >
                  COMMISSIONS
                </span>
                {activeTab === "commissions" && (
                  <div className="absolute bottom-0 left-0 right-0 h-[1.143px] bg-[#2963a3]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("products")}
                className={`relative px-[28px] py-[14px] transition-colors ${
                  activeTab === "products"
                    ? "text-[#2963a3] opacity-100"
                    : "text-[#2963a3] opacity-30"
                }`}
              >
                <span
                  className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[14.857px] uppercase leading-[20.571px]"
                  style={{
                    fontVariationSettings: "'wdth' 100",
                  }}
                >
                  PRODUCTS
                </span>
                {activeTab === "products" && (
                  <div className="absolute bottom-0 left-0 right-0 h-[1.143px] bg-[#2963a3]" />
                )}
              </button>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="px-[14px] py-6 pb-[100px] space-y-[10px] overflow-y-auto flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {currentItems.map((item) => {
              const isExpanded = expandedRows.has(item.id);
              const isSelected = selectedItems.has(item.id);

              return (
                <div key={item.id} className="w-full">
                  {/* User Info */}
                  <div className="flex items-center justify-start px-[10px] py-0 mb-[5px]">
                    <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[12px] text-[#2963a3]">
                      {item.username}
                    </p>
                    <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[12px] text-[#2963a3] mx-2">
                      |
                    </p>
                    <p className="font-['Work_Sans:Italic',sans-serif] font-normal italic text-[8.5px] text-[#2963a3]">
                      {item.orderNumber
                        ? `ORDER# ${item.orderNumber}`
                        : item.handle}
                    </p>
                  </div>

                  {/* Item Card */}
                  <div
                    className={`bg-white rounded-[15px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] transition-all duration-300 ${
                      isSelected
                        ? "ring-2 ring-[#60A5FA] bg-[#f0f9ff]"
                        : ""
                    }`}
                  >
                    <div
                      className="grid items-center px-[10px] py-[9px] h-[100px] gap-x-[20px]"
                      style={{
                        gridTemplateColumns: isSelected
                          ? "51px 80px 1fr 80px 140px 40px 20px 120px"
                          : "51px 80px 1fr 80px 180px 20px 120px",
                      }}
                    >
                      {/* Checkbox */}
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() =>
                            item.type === "product"
                              ? toggleProductSelected(item.id)
                              : toggleSelected(item.id)
                          }
                          className={`size-[24px] rounded-[4px] border flex items-center justify-center transition-all ${
                            isSelected
                              ? "bg-[#60A5FA] border-[#60A5FA]"
                              : "bg-white border-[#95d2ff] hover:border-[#60A5FA]"
                          }`}
                        >
                          {isSelected && (
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </button>
                      </div>

                      {/* Thumbnail */}
                      <div
                        className="h-[82.286px] w-[80px] rounded-[8px]"
                        style={{
                          backgroundColor: item.thumbnailColor,
                        }}
                      />

                      {/* Title */}
                      <div className="flex items-center justify-center px-4">
                        <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[15px] text-[#104274] text-center capitalize">
                          {item.title}
                        </p>
                      </div>

                      {/* Quantity (for products) */}
                      <div className="flex items-center justify-center">
                        {item.type === "product" &&
                        item.quantity ? (
                          <div className="flex items-center gap-[8px]">
                            <button
                              onClick={() =>
                                updateProductQuantity(
                                  item.id,
                                  1,
                                )
                              }
                              disabled={
                                item.status !== "IN CART"
                              }
                              className={`w-[20px] h-[20px] flex items-center justify-center transition-all ${
                                item.status === "IN CART"
                                  ? "text-[#60A5FA] hover:bg-[#f0f9ff] cursor-pointer"
                                  : "text-[#95d2ff] opacity-50 cursor-not-allowed"
                              }`}
                              title={
                                item.status === "IN CART"
                                  ? "Increase quantity"
                                  : "Quantity locked"
                              }
                            >
                              <svg
                                className="w-full h-full"
                                fill="none"
                                viewBox="0 0 20 9"
                              >
                                <path
                                  d="M20 9L10 0.42857L0 9H20Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                            <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#104274] text-center min-w-[30px]">
                              | {item.quantity} |
                            </p>
                            <button
                              onClick={() =>
                                updateProductQuantity(
                                  item.id,
                                  -1,
                                )
                              }
                              disabled={
                                item.status !== "IN CART"
                              }
                              className={`w-[20px] h-[20px] flex items-center justify-center transition-all ${
                                item.status === "IN CART"
                                  ? "text-[#60A5FA] hover:bg-[#f0f9ff] cursor-pointer"
                                  : "text-[#95d2ff] opacity-50 cursor-not-allowed"
                              }`}
                              title={
                                item.status === "IN CART"
                                  ? "Decrease quantity"
                                  : "Quantity locked"
                              }
                            >
                              <svg
                                className="w-full h-full"
                                fill="none"
                                viewBox="0 0 20 9"
                              >
                                <path
                                  d="M20 0L10 8.57143L0 0H20Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                        ) : item.quantity ? (
                          <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#104274] text-center">
                            | {item.quantity} |
                          </p>
                        ) : null}
                      </div>

                      {/* Status */}
                      <div className="flex flex-col items-center justify-center text-[12px] text-center">
                        <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[#104274] mb-[2px]">
                          STATUS:
                        </p>
                        <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[#95d2ff] leading-tight">
                          {item.status}
                        </p>
                      </div>

                      {/* Delete Icon (Only when selected) */}
                      {isSelected && (
                        <div className="flex items-center justify-center">
                          <button
                            onClick={() =>
                              handleDeleteClick(item.id)
                            }
                            className="text-[#ef4444] hover:text-[#dc2626] transition-colors p-2 hover:bg-[#fee2e2] rounded-lg"
                            title="Delete item"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      )}

                      {/* Dropdown Arrow (Commissions only) */}
                      {item.type === "commission" && (
                        <div className="flex items-center justify-center">
                          <button
                            onClick={() =>
                              toggleExpanded(item.id)
                            }
                            className={`h-[8.571px] w-[20px] transition-transform duration-300 ${
                              isExpanded ? "" : "rotate-180"
                            }`}
                          >
                            <svg
                              className="block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 20 9"
                            >
                              <path
                                d="M20 0L10 8.57143L0 0H20Z"
                                fill="#104274"
                              />
                            </svg>
                          </button>
                        </div>
                      )}
                      {item.type === "product" && (
                        <div className="flex items-center justify-center w-[20px]">
                          {/* Empty space for alignment */}
                        </div>
                      )}

                      {/* Price */}
                      <div className="flex items-center justify-center">
                        <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#104274] text-center">
                          ₱
                          {(item.quantity
                            ? item.price * item.quantity
                            : item.price
                          ).toLocaleString()}
                          .00
                        </p>
                      </div>
                    </div>

                    {/* Expanded Content (Accordion) */}
                    <div
                      className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                      style={{
                        maxHeight: isExpanded ? "800px" : "0",
                        opacity: isExpanded ? 1 : 0,
                        transform: isExpanded
                          ? "translateY(0)"
                          : "translateY(-10px)",
                        transitionProperty:
                          "max-height, opacity, transform",
                      }}
                    >
                      {isExpanded &&
                        (item.type === "commission" ? (
                          <OrderDetailsExpanded
                            item={item}
                            isProgressExpanded={expandedProgressHistory.has(
                              item.id,
                            )}
                            onToggleProgress={() =>
                              toggleProgressHistory(item.id)
                            }
                          />
                        ) : (
                          <ProductOrderDetailsExpanded
                            item={item}
                            isProgressExpanded={expandedProgressHistory.has(
                              item.id,
                            )}
                            onToggleProgress={() =>
                              toggleProgressHistory(item.id)
                            }
                          />
                        ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Sidebar - Payment Details */}
        <div className="w-[578px] relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-[#d1ecff]" />
          <div className="absolute inset-0 opacity-50">
            <img
              src={imgBgTexture31}
              alt=""
              className="w-full h-full object-cover"
              style={{ objectPosition: "50% 50%" }}
            />
          </div>
          <div className="absolute left-[-268px] top-[140px] w-[1079px] h-[1079px] flex items-center justify-center">
            <div className="rotate-180 scale-y-[-100%]">
              <img
                src={imgComputerPengu3}
                alt=""
                className="w-[1079px] h-[1079px] object-cover opacity-30"
              />
            </div>
          </div>

          {/* Payment Content Container */}
          <div className="relative z-10 h-full flex items-start justify-center pt-[40px] px-[40px]">
            <div className="backdrop-blur-sm rounded-[18px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)] p-[36px] w-full max-w-[432px] mt-[70px]">
              {/* Header */}
              <div className="flex items-center justify-between mb-[27px]">
                <h2 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[20.868px] text-[#2963a3]">
                  Payment Details
                </h2>
              </div>

              {/* Payment Method Selector */}
              <div className="mb-[18px]">
                <div className="flex items-center gap-0 mb-[14px]">
                  {/* COD */}
                  <button
                    onClick={() => setPaymentMethod("cod")}
                    className="flex items-center gap-[5px]"
                  >
                    <div
                      className={`size-[11.475px] rounded-[3.06px] border-[0.85px] border-[#e0e0e0] ${
                        paymentMethod === "cod"
                          ? "bg-[#acefb0]"
                          : "bg-white"
                      }`}
                    />
                    <p
                      className={`font-['Work_Sans:${paymentMethod === "cod" ? "SemiBold" : "Regular"}',sans-serif] text-[9.18px] ${
                        paymentMethod === "cod"
                          ? "text-[#36963c] font-semibold"
                          : "text-[#2963a3] font-normal"
                      }`}
                    >
                      COD Payment
                    </p>
                  </button>

                  {/* Card */}
                  <button
                    onClick={() => setPaymentMethod("card")}
                    className="flex items-center gap-[5px] ml-[13px]"
                  >
                    <div
                      className={`size-[11.475px] rounded-[3.06px] border-[0.85px] border-[#e0e0e0] ${
                        paymentMethod === "card"
                          ? "bg-[#acefb0]"
                          : "bg-white"
                      }`}
                    />
                    <p
                      className={`font-['Work_Sans:${paymentMethod === "card" ? "SemiBold" : "Regular"}',sans-serif] text-[9.18px] ${
                        paymentMethod === "card"
                          ? "text-[#36963c] font-semibold"
                          : "text-[#2963a3] font-normal"
                      }`}
                    >
                      Online Card Payment
                    </p>
                  </button>

                  {/* DragonPay */}
                  <button
                    onClick={() =>
                      setPaymentMethod("dragonpay")
                    }
                    className="flex items-center gap-[5px] ml-[13px]"
                  >
                    <div
                      className={`size-[11.475px] rounded-[3.06px] border-[0.85px] border-[#e0e0e0] ${
                        paymentMethod === "dragonpay"
                          ? "bg-[#acefb0]"
                          : "bg-white"
                      }`}
                    />
                    <p
                      className={`font-['Work_Sans:${paymentMethod === "dragonpay" ? "SemiBold" : "Regular"}',sans-serif] text-[9.18px] ${
                        paymentMethod === "dragonpay"
                          ? "text-[#36963c] font-semibold"
                          : "text-[#2963a3] font-normal"
                      }`}
                    >
                      Pay Via Dragonpay
                    </p>
                  </button>
                </div>
              </div>

              {/* Payment Forms with Fade Transition */}
              <div className="relative">
                {/* Card Payment Form */}
                {paymentMethod === "card" && (
                  <div className="animate-fadeIn">
                    {/* Card Type */}
                    <div className="mb-[18px]">
                      <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[15.177px] text-[#2963a3] mb-[11px]">
                        Card type
                      </p>
                      <div className="flex items-center gap-[16px]">
                        <button
                          onClick={() =>
                            setSelectedCardType("mastercard")
                          }
                          className={`h-[52.17px] w-[71.14px] rounded-[4.743px] bg-[rgba(217,217,217,0.2)] overflow-hidden transition-all ${
                            selectedCardType === "mastercard"
                              ? "ring-[3px] ring-[#FBB040]"
                              : ""
                          }`}
                        >
                          <img
                            src={imgRectangle9}
                            alt="Mastercard"
                            className="w-full h-full object-cover"
                          />
                        </button>
                        <button
                          onClick={() =>
                            setSelectedCardType("visa")
                          }
                          className={`h-[52.17px] w-[71.14px] rounded-[4.743px] bg-[rgba(217,217,217,0.2)] overflow-hidden transition-all ${
                            selectedCardType === "visa"
                              ? "ring-[3px] ring-[#FBB040]"
                              : ""
                          }`}
                        >
                          <img
                            src={imgRectangle10}
                            alt="Visa"
                            className="w-full h-full object-cover"
                          />
                        </button>
                        <button
                          onClick={() =>
                            setSelectedCardType("rupay")
                          }
                          className={`h-[52.17px] w-[71.14px] rounded-[4.743px] bg-[rgba(217,217,217,0.2)] overflow-hidden transition-all ${
                            selectedCardType === "rupay"
                              ? "ring-[3px] ring-[#FBB040]"
                              : ""
                          }`}
                        >
                          <img
                            src={imgRectangle11}
                            alt="RuPay"
                            className="w-full h-full object-cover"
                          />
                        </button>
                        <div className="relative">
                          <button
                            onClick={() =>
                              setShowCardTypeDropdown(
                                !showCardTypeDropdown,
                              )
                            }
                            className="h-[52.17px] w-[71.14px] rounded-[4.743px] bg-[rgba(217,217,217,0.2)] flex items-center justify-center hover:bg-[rgba(217,217,217,0.35)] transition-colors"
                          >
                            <p
                              className="font-['Open_Sans:Bold',sans-serif] font-bold text-[13.28px] text-[#2963a3] text-center"
                              style={{
                                fontVariationSettings:
                                  "'wdth' 100",
                              }}
                            >
                              See all
                            </p>
                          </button>

                          {/* Dropdown */}
                          {showCardTypeDropdown && (
                            <div className="absolute top-full mt-2 right-0 bg-white rounded-[8px] shadow-[0px_4px_16px_rgba(0,0,0,0.15)] p-[8px] min-w-[180px] z-20 animate-fadeIn">
                              <button
                                onClick={() => {
                                  setSelectedCardType("amex");
                                  setShowCardTypeDropdown(
                                    false,
                                  );
                                }}
                                className={`w-full text-left px-[12px] py-[8px] rounded-[4px] font-['Work_Sans:Medium',sans-serif] font-medium text-[12px] text-[#2963a3] hover:bg-[#f6f7f9] transition-colors ${
                                  selectedCardType === "amex"
                                    ? "bg-[#FBB040] bg-opacity-20"
                                    : ""
                                }`}
                              >
                                American Express
                              </button>
                              <button
                                onClick={() => {
                                  setSelectedCardType(
                                    "discover",
                                  );
                                  setShowCardTypeDropdown(
                                    false,
                                  );
                                }}
                                className={`w-full text-left px-[12px] py-[8px] rounded-[4px] font-['Work_Sans:Medium',sans-serif] font-medium text-[12px] text-[#2963a3] hover:bg-[#f6f7f9] transition-colors ${
                                  selectedCardType ===
                                  "discover"
                                    ? "bg-[#FBB040] bg-opacity-20"
                                    : ""
                                }`}
                              >
                                Discover
                              </button>
                              <button
                                onClick={() => {
                                  setSelectedCardType("jcb");
                                  setShowCardTypeDropdown(
                                    false,
                                  );
                                }}
                                className={`w-full text-left px-[12px] py-[8px] rounded-[4px] font-['Work_Sans:Medium',sans-serif] font-medium text-[12px] text-[#2963a3] hover:bg-[#f6f7f9] transition-colors ${
                                  selectedCardType === "jcb"
                                    ? "bg-[#FBB040] bg-opacity-20"
                                    : ""
                                }`}
                              >
                                JCB
                              </button>
                              <button
                                onClick={() => {
                                  setSelectedCardType("diners");
                                  setShowCardTypeDropdown(
                                    false,
                                  );
                                }}
                                className={`w-full text-left px-[12px] py-[8px] rounded-[4px] font-['Work_Sans:Medium',sans-serif] font-medium text-[12px] text-[#2963a3] hover:bg-[#f6f7f9] transition-colors ${
                                  selectedCardType === "diners"
                                    ? "bg-[#FBB040] bg-opacity-20"
                                    : ""
                                }`}
                              >
                                Diners Club
                              </button>
                              <button
                                onClick={() => {
                                  setSelectedCardType(
                                    "unionpay",
                                  );
                                  setShowCardTypeDropdown(
                                    false,
                                  );
                                }}
                                className={`w-full text-left px-[12px] py-[8px] rounded-[4px] font-['Work_Sans:Medium',sans-serif] font-medium text-[12px] text-[#2963a3] hover:bg-[#f6f7f9] transition-colors ${
                                  selectedCardType ===
                                  "unionpay"
                                    ? "bg-[#FBB040] bg-opacity-20"
                                    : ""
                                }`}
                              >
                                UnionPay
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="space-y-[14px]">
                      <div>
                        <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[13.28px] text-[#2963a3] mb-[5px]">
                          Name on card
                        </p>
                        <input
                          type="text"
                          value={cardName}
                          onChange={(e) =>
                            setCardName(e.target.value)
                          }
                          placeholder="Name"
                          className="bg-[#f6f7f9] h-[37.942px] rounded-[5.692px] w-full px-[17.073px] font-['Work_Sans:Medium',sans-serif] font-medium text-[11.382px] text-[#2963a3] placeholder:text-[#bacbdb] border-none outline-none focus:ring-1 focus:ring-[#60A5FA]"
                        />
                      </div>

                      <div>
                        <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[13.28px] text-[#2963a3] mb-[5px]">
                          Card Number
                        </p>
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(e) => {
                            const value =
                              e.target.value.replace(/\s/g, "");
                            if (
                              value.length <= 16 &&
                              /^\d*$/.test(value)
                            ) {
                              const formatted =
                                value
                                  .match(/.{1,4}/g)
                                  ?.join(" ") || value;
                              setCardNumber(formatted);
                            }
                          }}
                          placeholder="1111 2222 3333 4444"
                          maxLength={19}
                          className="bg-[#f6f7f9] h-[37.942px] rounded-[5.692px] w-full px-[17.073px] font-['Work_Sans:Medium',sans-serif] font-medium text-[11.382px] text-[#2963a3] placeholder:text-[#bacbdb] border-none outline-none focus:ring-1 focus:ring-[#60A5FA]"
                        />
                      </div>

                      <div className="flex gap-[7px]">
                        <div className="flex-1">
                          <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[13.28px] text-[#2963a3] mb-[4px]">
                            Expiration date
                          </p>
                          <input
                            type="month"
                            value={cardExpiry}
                            onChange={(e) =>
                              setCardExpiry(e.target.value)
                            }
                            min={new Date()
                              .toISOString()
                              .slice(0, 7)}
                            className="bg-[#f6f7f9] h-[37.942px] rounded-[5.692px] w-full px-[17.073px] font-['Work_Sans:Medium',sans-serif] font-medium text-[11.382px] text-[#2963a3] placeholder:text-[#bacbdb] border-none outline-none focus:ring-1 focus:ring-[#60A5FA] cursor-pointer"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[13.28px] text-[#2963a3] mb-[4px]">
                            CVV
                          </p>
                          <input
                            type="text"
                            value={cardCVV}
                            onChange={(e) => {
                              const value = e.target.value;
                              if (
                                value.length <= 4 &&
                                /^\d*$/.test(value)
                              ) {
                                setCardCVV(value);
                              }
                            }}
                            placeholder="123"
                            maxLength={4}
                            className="bg-[#f6f7f9] h-[37.942px] rounded-[5.692px] w-full px-[17.073px] font-['Work_Sans:Medium',sans-serif] font-medium text-[11.382px] text-[#2963a3] placeholder:text-[#bacbdb] border-none outline-none focus:ring-1 focus:ring-[#60A5FA]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* COD Form */}
                {paymentMethod === "cod" && (
                  <div className="animate-fadeIn">
                    <div className="space-y-[14px]">
                      <div>
                        <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[13.28px] text-[#2963a3] mb-[5px]">
                          Address
                        </p>
                        <input
                          type="text"
                          value={address}
                          onChange={(e) =>
                            setAddress(e.target.value)
                          }
                          placeholder="Street Address"
                          className="bg-[#f6f7f9] h-[37.942px] rounded-[5.692px] w-full px-[17.073px] font-['Work_Sans:Medium',sans-serif] font-medium text-[11.382px] text-[#2963a3] placeholder:text-[#bacbdb] border-none outline-none focus:ring-1 focus:ring-[#60A5FA]"
                        />
                      </div>

                      <div>
                        <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[13.28px] text-[#2963a3] mb-[5px]">
                          Region
                        </p>
                        <input
                          type="text"
                          value={region}
                          onChange={(e) =>
                            setRegion(e.target.value)
                          }
                          placeholder="Region"
                          className="bg-[#f6f7f9] h-[37.942px] rounded-[5.692px] w-full px-[17.073px] font-['Work_Sans:Medium',sans-serif] font-medium text-[11.382px] text-[#2963a3] placeholder:text-[#bacbdb] border-none outline-none focus:ring-1 focus:ring-[#60A5FA]"
                        />
                      </div>

                      <div className="flex gap-[7px]">
                        <div className="flex-1">
                          <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[13.28px] text-[#2963a3] mb-[4px]">
                            Postal Code
                          </p>
                          <input
                            type="text"
                            value={postalCode}
                            onChange={(e) => {
                              const value = e.target.value;
                              if (/^\d*$/.test(value)) {
                                setPostalCode(value);
                              }
                            }}
                            placeholder="0000"
                            maxLength={4}
                            className="bg-[#f6f7f9] h-[37.942px] rounded-[5.692px] w-full px-[17.073px] font-['Work_Sans:Medium',sans-serif] font-medium text-[11.382px] text-[#2963a3] placeholder:text-[#bacbdb] border-none outline-none focus:ring-1 focus:ring-[#60A5FA]"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[13.28px] text-[#2963a3] mb-[4px]">
                            City
                          </p>
                          <input
                            type="text"
                            value={city}
                            onChange={(e) =>
                              setCity(e.target.value)
                            }
                            placeholder="City Name"
                            className="bg-[#f6f7f9] h-[37.942px] rounded-[5.692px] w-full px-[17.073px] font-['Work_Sans:Medium',sans-serif] font-medium text-[11.382px] text-[#2963a3] placeholder:text-[#bacbdb] border-none outline-none focus:ring-1 focus:ring-[#60A5FA]"
                          />
                        </div>
                      </div>

                      <div>
                        <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[13.28px] text-[#2963a3] mb-[5px]">
                          Phone Contact
                        </p>
                        <input
                          type="tel"
                          value={phoneContact}
                          onChange={(e) => {
                            const value = e.target.value;
                            if (value.startsWith("+63")) {
                              setPhoneContact(value);
                            }
                          }}
                          placeholder="(+63)"
                          className="bg-[#f6f7f9] h-[37.942px] rounded-[5.692px] w-full px-[17.073px] font-['Work_Sans:Medium',sans-serif] font-medium text-[11.382px] text-[#2963a3] placeholder:text-[#bacbdb] border-none outline-none focus:ring-1 focus:ring-[#60A5FA]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* DragonPay Form */}
                {paymentMethod === "dragonpay" && (
                  <div className="animate-fadeIn">
                    <div className="bg-[#f6f7f9] rounded-[9px] p-[27px] text-center">
                      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[16.2px] text-[#2963a3] mb-[14px]">
                        DragonPay Payment Gateway
                      </p>
                      <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[12.6px] text-[#2963a3] mb-[18px]">
                        You will be redirected to DragonPay to
                        complete your payment securely.
                      </p>
                      <div className="bg-white rounded-[7.2px] p-[14px] mb-[14px]">
                        <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[10.8px] text-[#94a3b8]">
                          Supported payment methods: Bank
                          Transfer, OTC, E-Wallet
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <div className="mt-[27px] space-y-[11px]">
                <div className="flex items-center justify-between">
                  <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[13.28px] text-[#2963a3]">
                    Subtotal
                  </p>
                  <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[13.28px] text-[#2963a3]">
                    ₱ {subtotal.toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[13.28px] text-[#2963a3]">
                    Shipping
                  </p>
                  <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[13.28px] text-[#2963a3]">
                    ₱ {shipping.toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-[11px] border-t border-[#bacbdb]">
                  <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[15.177px] text-[#2963a3]">
                    Total (Tax incl.)
                  </p>
                  <p className="font-['Work_Sans:Bold',sans-serif] font-bold text-[15.177px] text-[#2963a3]">
                    ₱ {total.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full mt-[23px] bg-[#FBB040] hover:bg-[#ffa726] transition-colors rounded-[9.486px] h-[47.427px] flex items-center justify-center shadow-[0px_4px_12px_rgba(251,176,64,0.3)]"
              >
                <p className="font-['Work_Sans:Bold',sans-serif] font-bold text-[16.2px] text-[#2963a3] uppercase">
                  CHECKOUT
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Panel */}
      <NotificationPanel
        isOpen={isNotificationPanelOpen}
        onClose={() => setIsNotificationPanelOpen(false)}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onCancel={handleDeleteCancel}
        onDelete={handleDeleteConfirm}
        itemTitle={
          itemToDelete
            ? currentItems.find(
                (item) => item.id === itemToDelete,
              )?.title
            : undefined
        }
      />

      {/* Order Success Modal */}
      <OrderSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessModalClose}
        title={successModalConfig.title}
        message={successModalConfig.message}
        description={successModalConfig.description}
        buttonText={successModalConfig.buttonText}
        transactionId={successModalConfig.transactionId}
      />
    </div>
  );
}