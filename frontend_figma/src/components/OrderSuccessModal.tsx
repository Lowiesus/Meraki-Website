import { Check } from 'lucide-react';

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  description?: string;
  buttonText?: string;
  transactionId?: string;
}

export default function OrderSuccessModal({
  isOpen,
  onClose,
  title = "ORDER CHECKOUT",
  message = "Checkout Success!",
  description = "Checkout successful — your transaction has been processed and confirmed.",
  buttonText = "CONFIRM CHECKOUT",
  transactionId
}: OrderSuccessModalProps) {
  if (!isOpen) return null;

  const displayDescription = transactionId 
    ? `Your transaction ID is #${transactionId}. You can track your order in the Payments page.`
    : description;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-[13.892px] overflow-hidden shadow-xl w-[511.693px] max-w-[95vw]">
        {/* Header */}
        <div className="border-b border-[#bec3cd] py-[10.419px] px-0">
          <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[18.523px] text-[#104274] text-center">
            {title}
          </p>
        </div>

        {/* Content */}
        <div className="px-[48.85px] py-[99.85px] flex flex-col items-center gap-[35px]">
          {/* Message Section */}
          <div className="flex flex-col items-center gap-[20px] w-full">
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[22px] text-[#104274] text-center">
              {message}
            </h2>
            <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[15px] text-[#bec3cd] text-center w-[300px]">
              {displayDescription}
            </p>

            {/* Checkmark Icon */}
            <div className="relative w-[106px] h-[106px]">
              <div className="absolute inset-0 rounded-full border-[3px] border-[#95D2FF] bg-[#95D2FF]" />
              <div className="absolute top-[44px] left-[36px] w-[34px] h-[22px] bg-[#95D2FF] border border-[#95D2FF] flex items-center justify-center">
                <Check className="w-6 h-6 text-white stroke-[4px]" />
              </div>
            </div>
          </div>

          {/* Confirm Button */}
          <button
            onClick={onClose}
            className="bg-[#428dfe] hover:bg-[#3b7fe0] transition-colors rounded-[50px] shadow-[0px_9px_14px_0px_rgba(66,141,254,0.2)] w-[367px] h-[72px] flex items-center justify-center"
          >
            <p className="font-['Poppins:Bold',sans-serif] text-[18px] text-white">
              {buttonText}
            </p>
          </button>

          {/* Footer */}
          <div className="font-['Comfortaa:Bold',sans-serif] font-bold text-[10.71px] text-[rgba(91,112,131,0.5)] text-center">
            <p className="mb-0">Terms of Service Privacy Policy Cookie Policy</p>
            <p>Ads info More © 2021 Innovae, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
