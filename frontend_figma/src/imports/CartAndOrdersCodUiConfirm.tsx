import svgPaths from "./svg-ugucciboxb";
import imgBgTexture31 from "figma:asset/0d00f6be6ac86f96b5d39e2e21a7b72f784d6eac.png";
import imgComputerPengu3 from "figma:asset/fb165cea933165a54e978aa9e846aa73c20a3eb9.png";
import imgAvatarSmall from "figma:asset/ce67d23a925af943f1634792363b9deeb4837a22.png";
import imgLogoIcon2 from "figma:asset/2b7e679a7a86a6e24f1b9a9001522d9b89b0d82e.png";

function AutoLayoutHorizontal() {
  return (
    <div className="box-border content-stretch flex items-center justify-center pb-[14.857px] pl-[27.875px] pr-[26.643px] pt-[13.714px] relative shrink-0 w-[139px]" data-name="Auto Layout Horizontal">
      <div aria-hidden="true" className="absolute border-[#2963a3] border-[0px_0px_1.143px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2963a3] text-[14.857px] text-center uppercase w-[110px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20.571px]">PRODUCT</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0 w-[149px]" data-name="Frame">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] opacity-30 relative shrink-0 text-[#2963a3] text-[14.857px] text-center uppercase w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20.571px]">COMMISSION</p>
      </div>
      <AutoLayoutHorizontal />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#f6f7f9] h-[49px] left-[-1px] top-[73px] w-[777px]" data-name="Frame">
      <div className="absolute border-[#a9c6db] border-[0px_0px_1.143px] border-solid h-[49px] left-0 top-0 w-[777px]" data-name="Rectangle" />
      <Frame />
    </div>
  );
}

function Frame22() {
  return (
    <div className="box-border content-stretch flex items-center leading-[normal] px-[10px] py-0 relative shrink-0 text-[#2963a3] w-[494px]">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[12px] w-[77px]">{`USERNAME `}</p>
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[12px] w-[9px]">|</p>
      <p className="font-['Work_Sans:Italic',sans-serif] font-normal italic relative shrink-0 text-[8.5px] w-[398px]">ORDER# 000000000000000</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-[22px] relative shrink-0 w-[51px]">
      <div className="absolute bg-white border border-[#95d2ff] border-solid h-[22px] left-[calc(50%-0.5px)] rounded-[4px] top-0 translate-x-[-50%] w-[24px]" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center leading-none pb-[5px] pt-0 px-0 relative shrink-0 text-[12px] text-center">
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[20px] relative shrink-0 text-[#104274] w-[72px]">STATUS:</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal h-[20px] relative shrink-0 text-[#95d2ff] w-[72px]">SHIPPED OUT</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[22.143px] relative shrink-0 w-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 23">
        <g id="Frame 6">
          <path d={svgPaths.pbbe7000} fill="var(--fill-0, #104274)" id="Rectangle 8" />
          <path d={svgPaths.p28ae6600} fill="var(--fill-0, #104274)" id="Rectangle 7" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white h-[100px] relative rounded-[15px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[100px] items-center justify-between px-[10px] py-[9px] relative w-full">
          <Frame23 />
          <div className="bg-[red] h-[82.286px] rounded-[8px] shrink-0 w-[80px]" />
          <p className="capitalize font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#104274] text-[15px] text-center w-[202px]">pRODUCT_NAME</p>
          <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#104274] text-[14px] text-center w-[61px]">| 1 |</p>
          <Frame26 />
          <Frame6 />
          <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#104274] text-[14px] text-center w-[107px]">₱150.00</p>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <Frame22 />
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[1154px] items-start left-[14px] top-[145px] w-[724px]">
      {[...Array(2).keys()].map((_, i) => (
        <Frame21 key={i} />
      ))}
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute border border-[#d0cfcf] border-solid h-[1031px] left-[84px] top-[-2px] w-[778px]">
      <Frame3 />
      <Frame20 />
      <p className="absolute font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[24px] text-[#2963a3] text-[18px] top-[35px] w-[274px]">| MERAKI SHOPPING CART</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[15%_14.96%_14.96%_15%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 860 861">
        <g id="Group 2" opacity="0.5">
          <path d={svgPaths.p25bcb900} fill="var(--fill-0, #FFF3C7)" id="Vector" />
          <path d={svgPaths.p3c2600} fill="var(--fill-0, #C5E7FF)" id="Vector_2" />
          <path d={svgPaths.p3cd31d00} fill="var(--fill-0, #95D2FF)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Relative() {
  return (
    <div className="bg-[rgba(32,141,102,0)] h-[1228px] overflow-clip relative w-[1227px]" data-name="Relative">
      <Group2 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute h-[1043px] left-[calc(58.33%+22px)] overflow-clip top-0 w-[578px]">
      <div className="absolute bg-[#d1ecff] h-[1043px] left-0 top-0 w-[578px]" />
      <div className="absolute h-[1024px] left-[-250px] top-0 w-[1444px]" data-name="BG_TEXTURE-3 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBgTexture31} />
      </div>
      <div className="absolute flex h-[1228px] items-center justify-center left-[-368px] top-[359px] w-[1227px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          {[...Array(2).keys()].map((_, i) => (
            <Relative key={i} />
          ))}
        </div>
      </div>
      <div className="absolute flex h-[1228px] items-center justify-center left-0 top-[-839px] w-[1227px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]" />
      </div>
      <div className="absolute flex items-center justify-center left-[-268px] size-[1079px] top-[140px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[1079px]" data-name="COMPUTER_PENGU 3">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-30 pointer-events-none size-full" src={imgComputerPengu3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex h-[52.697px] items-center justify-between relative shrink-0 w-[370.542px]" data-name="HEADER">
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2963a3] text-[23.187px] w-[207px]">Payment Details</p>
      <div className="rounded-[8.432px] shrink-0 size-[52.697px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 0, 0) 0%, rgb(255, 0, 0) 100%), linear-gradient(90deg, rgb(217, 217, 217) 0%, rgb(217, 217, 217) 100%)" }} />
    </div>
  );
}

function Frame31() {
  return (
    <div className="h-[17px] relative shrink-0 w-[23.8px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 17">
        <g id="Frame 1261155274">
          <path d={svgPaths.p39e2e200} fill="var(--fill-0, #ACEFB0)" id="Rectangle 7" stroke="var(--stroke-0, #E0E0E0)" strokeWidth="0.85" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[106.25px]">
      <Frame31 />
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[16.15px] leading-[normal] relative shrink-0 text-[#36963c] text-[10.2px] w-[74.8px]">COD Payment</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="h-[17px] relative shrink-0 w-[23.8px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 17">
        <g id="Frame 1261155274">
          <path d={svgPaths.p675a680} fill="var(--fill-0, white)" id="Rectangle 7" stroke="var(--stroke-0, #E0E0E0)" strokeWidth="0.85" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[140px]">
      <Frame32 />
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal h-[16px] leading-[normal] relative shrink-0 text-[#2963a3] text-[10.2px] w-[109px]">Online Card Payment</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="h-[17px] relative shrink-0 w-[23.8px]">
      <div className="absolute bg-white border-[#e0e0e0] border-[0.85px] border-solid left-[calc(50%-2.13px)] rounded-[3.4px] size-[12.75px] top-[0.13px] translate-x-[-50%]" />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[128.35px]">
      <Frame34 />
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal h-[16.15px] leading-[normal] relative shrink-0 text-[#2963a3] text-[10.2px] w-[104.55px]">Pay Via Dragonpay</p>
    </div>
  );
}

function PaymentChoices() {
  return (
    <div className="box-border content-stretch flex items-start px-0 py-[12.75px] relative shrink-0 w-[369px]" data-name="PAYMENT CHOICES">
      <Frame30 />
      <Frame33 />
      <Frame35 />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="NAME">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2963a3] text-[14.755px] w-full">Address</p>
      <div className="bg-[#f6f7f9] h-[42.158px] rounded-[6.324px] shrink-0 w-full" />
      <p className="absolute font-['Work_Sans:Medium',sans-serif] font-medium h-[19px] leading-[normal] left-[18.97px] text-[#bacbdb] text-[12.647px] top-[39px] w-[53.751px]">Name</p>
    </div>
  );
}

function CardNumber() {
  return (
    <div className="h-[67.451px] relative shrink-0 w-full" data-name="CARD NUMBER">
      <p className="absolute font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] left-0 text-[#2963a3] text-[14.755px] top-0 w-[145.444px]">Region</p>
      <div className="absolute bg-[#f6f7f9] h-[42.158px] left-0 rounded-[6.324px] top-[25.29px] w-[368.879px]" />
      <p className="absolute font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] left-[18.97px] text-[#bacbdb] text-[12.647px] top-[36.89px] w-[181.277px]">Region</p>
    </div>
  );
}

function Expiration() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180.224px]" data-name="EXPIRATION">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2963a3] text-[14.755px] w-full">Postal Code</p>
      <div className="bg-[#f6f7f9] h-[42.158px] rounded-[6.324px] shrink-0 w-full" />
      <p className="absolute font-['Work_Sans:Medium',sans-serif] font-medium h-[19px] leading-[normal] left-[18.97px] text-[#bacbdb] text-[12.647px] top-[37.94px] w-[72.722px]">0000</p>
    </div>
  );
}

function Cvv() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180.224px]" data-name="CVV">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2963a3] text-[14.755px] w-full">City</p>
      <div className="bg-[#f6f7f9] h-[42.158px] rounded-[6.324px] shrink-0 w-full" />
      <p className="absolute font-['Work_Sans:Medium',sans-serif] font-medium h-[19px] leading-[normal] left-[18.97px] text-[#bacbdb] text-[12.647px] top-[37.94px] w-[72.722px]">City Name</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Expiration />
      <Cvv />
    </div>
  );
}

function CardNumber1() {
  return (
    <div className="h-[67.451px] relative shrink-0 w-full" data-name="CARD NUMBER">
      <p className="absolute font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] left-0 text-[#2963a3] text-[14.755px] top-0 w-[145.444px]">Phone Contact</p>
      <div className="absolute bg-[#f6f7f9] h-[42.158px] left-0 rounded-[6.324px] top-[25.29px] w-[368.879px]" />
      <p className="absolute font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] left-[18.97px] text-[#bacbdb] text-[12.647px] top-[36.89px] w-[181.277px]">(+63)</p>
    </div>
  );
}

function Details() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[316px] items-start px-0 py-[15px] relative shrink-0 w-[371px]" data-name="DETAILS">
      <Name />
      <CardNumber />
      <Frame28 />
      <CardNumber1 />
    </div>
  );
}

function Subtotal() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[normal] relative shrink-0 text-[#2963a3] w-full" data-name="SUBTOTAL">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[14.755px] w-[145.444px]">Subtotal</p>
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px] text-right w-[145.444px]">₱</p>
    </div>
  );
}

function Shipping() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[normal] relative shrink-0 text-[#2963a3] w-full" data-name="SHIPPING">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[14.755px] w-[145.444px]">Shipping</p>
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px] text-right w-[145.444px]">₱</p>
    </div>
  );
}

function Total() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[normal] relative shrink-0 text-[#2963a3] w-full" data-name="TOTAL">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[14.755px] w-[145.444px]">Total (Tax incl.)</p>
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px] text-right w-[145.444px]">₱</p>
    </div>
  );
}

function Computation() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[96px] items-start relative shrink-0 w-[371px]" data-name="COMPUTATION">
      <div className="h-0 relative shrink-0 w-[368.88px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1.05px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 369 2">
            <line id="Line 1" stroke="var(--stroke-0, #5180AE)" strokeWidth="1.05394" x2="368.88" y1="0.526969" y2="0.526969" />
          </svg>
        </div>
      </div>
      <Subtotal />
      <Shipping />
      <Total />
    </div>
  );
}

function CheckoutBtn() {
  return (
    <div className="bg-[#fbce7a] box-border content-stretch flex font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[63.236px] items-center justify-between leading-[normal] px-[25px] py-[19px] relative rounded-[25px] shrink-0 text-[#2963a3] w-[370.542px]" data-name="CHECKOUT BTN">
      <p className="relative shrink-0 text-[14px] w-[145.444px]">₱</p>
      <p className="relative shrink-0 text-[15px] w-[89.585px]">CHECKOUT</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-px items-center justify-center left-[19.23px] top-[52px]">
      <Header />
      <PaymentChoices />
      <div className="h-0 relative shrink-0 w-[368.88px]">
        <div className="absolute bottom-[-0.53px] left-0 right-0 top-[-0.53px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 369 2">
            <path d="M0 0.526969H368.88" id="Line 1" stroke="var(--stroke-0, #5180AE)" strokeWidth="1.05394" />
          </svg>
        </div>
      </div>
      <Details />
      <Computation />
      <CheckoutBtn />
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute bg-[rgba(254,255,243,0.5)] h-[679px] left-[10px] rounded-[21.079px] top-[21px] w-[409px]">
      <Frame29 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[768px] left-[calc(58.33%+102px)] overflow-clip rounded-[35px] top-[86px] w-[409px]">
      <Frame27 />
    </div>
  );
}

function Frame4() {
  return <div className="absolute bg-white inset-0" data-name="Frame" />;
}

function Frame5() {
  return (
    <div className="absolute bg-neutral-50 left-[calc(50%+108px)] overflow-clip rounded-[100px] size-[100px] top-[475px]" data-name="Frame">
      <Frame4 />
    </div>
  );
}

function AutoLayoutHorizontal1() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[187.905px] pr-[188.339px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#104274] text-[18.523px] text-center text-nowrap">
        <p className="leading-[27.784px] whitespace-pre">ORDER CHECKOUT</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal2() {
  return (
    <div className="absolute box-border content-stretch flex items-start left-1/2 pb-[11.577px] pt-[10.419px] px-0 top-0 translate-x-[-50%]" data-name="Auto Layout Horizontal">
      <div aria-hidden="true" className="absolute border-[#bec3cd] border-[0px_0px_1.158px] border-solid inset-0 pointer-events-none" />
      <AutoLayoutHorizontal1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] ml-[calc(50%-53px)] mt-0 relative size-[106px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 106">
        <g id="Group 2">
          <g id="Ellipse 1">
            <circle cx="53" cy="53" fill="var(--fill-0, #95D2FF)" r="51.5" />
            <circle cx="53" cy="53" r="51.5" stroke="var(--stroke-0, #95D2FF)" strokeWidth="3" />
            <circle cx="53" cy="53" r="51.5" stroke="var(--stroke-1, #95D2FF)" strokeWidth="3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[-0.28px] top-[-4.63px]">
      <div className="absolute flex items-center justify-center left-[7.46px] size-[26.044px] top-[-3.63px]" style={{ "--transform-inner-width": "31.765625", "--transform-inner-height": "5.046875" } as React.CSSProperties}>
        <div className="flex-none rotate-[315deg]">
          <div className="h-[5.056px] rounded-[2.528px] w-[31.777px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(217, 217, 217) 0%, rgb(217, 217, 217) 100%)" }} />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[0.72px] size-[13.579px] top-[8.72px]" style={{ "--transform-inner-width": "14.390625", "--transform-inner-height": "4.796875" } as React.CSSProperties}>
        <div className="flex-none rotate-[45deg]">
          <div className="h-[4.806px] rounded-[3px] w-[14.397px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(217, 217, 217) 0%, rgb(217, 217, 217) 100%)" }} />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[grid-area:1_/_1] bg-[#95d2ff] border border-[#95d2ff] border-solid h-[22px] ml-[36px] mt-[44px] relative w-[34px]">
      <Group5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group3 />
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[#104274] text-[22px] text-center w-[min-content]">Checkout Success!</p>
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#bec3cd] text-[15px] text-center w-[300px]">Checkout successful — your transaction has been processed and confirmed.</p>
      <Group6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#428dfe] box-border content-stretch flex flex-col gap-[10px] h-[72px] items-center justify-center px-[39px] py-[22px] relative rounded-[50px] shadow-[0px_9px_14px_0px_rgba(255,141,77,0.2)] shrink-0 w-[367px]">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-white w-[254px]">CONFIRM CHECKOUT</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-center left-[48.85px] top-[99.85px] w-[414px]">
      <Frame2 />
      <Frame7 />
      <div className="font-['Comfortaa:Bold',sans-serif] font-bold h-[15px] leading-[normal] relative shrink-0 text-[10.71px] text-[rgba(91,112,131,0.5)] text-center w-full">
        <p className="mb-0">Terms of Service Privacy Policy Cookie Policy</p>
        <p>Ads info More © 2021 Innovae, Inc.</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[509.378px] overflow-clip relative shrink-0 w-[511.693px]" data-name="Frame">
      <AutoLayoutHorizontal2 />
      <Frame36 />
    </div>
  );
}

function AutoLayoutHorizontal3() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative rounded-[13.892px] shrink-0" data-name="Auto Layout Horizontal">
      <Frame8 />
    </div>
  );
}

function AutoLayoutHorizontal4() {
  return (
    <div className="absolute box-border content-stretch flex items-start left-[calc(54.17%-18px)] overflow-clip p-[23.154px] top-[193px] translate-x-[-50%]" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal3 />
    </div>
  );
}

function AvatarSmall() {
  return (
    <div className="absolute left-0 overflow-clip rounded-[99999px] size-[39px] top-[10px]" data-name="Avatar / Small">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAvatarSmall} />
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute bottom-[39px] h-[69px] left-[25px] w-[255px]" data-name="Profile">
      <AvatarSmall />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex items-center left-[12px] top-[28.63px]">
      <div className="relative shrink-0 size-[51.75px]" data-name="LOGO_ICON 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoIcon2} />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute left-1/2 size-[24px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p156b1a70} fill="var(--fill-0, #3971B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame9 />
    </div>
  );
}

function AutoLayoutHorizontal5() {
  return <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[2.359px] py-0 shrink-0" data-name="Auto Layout Horizontal" />;
}

function AutoLayoutHorizontal6() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal5 />
    </div>
  );
}

function AutoLayoutHorizontal7() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[122.641px] py-[12px] relative w-full">
          <Frame10 />
          <AutoLayoutHorizontal6 />
        </div>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal8() {
  return <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.016px] py-0 shrink-0" data-name="Auto Layout Horizontal" />;
}

function AutoLayoutHorizontal9() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal8 />
    </div>
  );
}

function AutoLayoutHorizontal10() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[120.984px] py-[12px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="glyph">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="glyph">
                <path clipRule="evenodd" d={svgPaths.p2663bc80} fill="var(--fill-0, #EDCB48)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p13425300} fill="var(--fill-0, #EDCB48)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p36a0400} fill="var(--fill-0, #EDCB48)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
          <AutoLayoutHorizontal9 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <path d={svgPaths.p1921bd80} fill="var(--fill-0, #3971B8)" id="Vector" />
          <path d={svgPaths.p258d67f0} fill="var(--fill-0, #3971B8)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function LightThemeListsDefault() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Light Theme / Lists / Default">
      <Group />
    </div>
  );
}

function AutoLayoutHorizontal11() {
  return <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.016px] py-0 shrink-0" data-name="Auto Layout Horizontal" />;
}

function AutoLayoutHorizontal12() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal11 />
    </div>
  );
}

function AutoLayoutHorizontal13() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[120.984px] py-[12px] relative w-full">
          <LightThemeListsDefault />
          <AutoLayoutHorizontal12 />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.57%_8.33%_12.43%_8.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
        <g id="Group">
          <path d={svgPaths.p348ac880} fill="var(--fill-0, #3971B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LightThemeMessagesDefault() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Light Theme / Messages / Default">
      <Group1 />
    </div>
  );
}

function AutoLayoutHorizontal14() {
  return <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.031px] py-0 shrink-0" data-name="Auto Layout Horizontal" />;
}

function AutoLayoutHorizontal15() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal14 />
    </div>
  );
}

function AutoLayoutHorizontal16() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[98.969px] py-[12px] relative w-full">
          <LightThemeMessagesDefault />
          <AutoLayoutHorizontal15 />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[8.04%_8.35%_8.41%_8.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
        <g id="Group">
          <path d={svgPaths.p2d1e50f0} fill="var(--fill-0, #3971B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LightThemeNotificationsDefault() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Light Theme / Notifications / Default">
      <Group4 />
    </div>
  );
}

function AutoLayoutHorizontal17() {
  return <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[3.578px] py-0 shrink-0" data-name="Auto Layout Horizontal" />;
}

function AutoLayoutHorizontal18() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal17 />
    </div>
  );
}

function AutoLayoutHorizontal19() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[78.422px] py-[12px] relative w-full">
          <LightThemeNotificationsDefault />
          <AutoLayoutHorizontal18 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute left-1/2 size-[24px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p201bf680} id="Vector" stroke="var(--stroke-0, #3971B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.545 12.001H17.455" id="Line" stroke="var(--stroke-0, #3971B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12.003 6.545V17.455" id="Line_2" stroke="var(--stroke-0, #3971B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame11 />
    </div>
  );
}

function AutoLayoutHorizontal20() {
  return <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[1.766px] py-0 shrink-0" data-name="Auto Layout Horizontal" />;
}

function AutoLayoutHorizontal21() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal20 />
    </div>
  );
}

function AutoLayoutHorizontal22() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[122.234px] py-[12px] relative w-full">
          <Frame12 />
          <AutoLayoutHorizontal21 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute left-1/2 size-[24px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M3 4H21" id="Line" stroke="var(--stroke-0, #3971B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 12H21" id="Line_2" stroke="var(--stroke-0, #3971B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 20H21" id="Line_3" stroke="var(--stroke-0, #3971B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame13 />
    </div>
  );
}

function AutoLayoutHorizontal23() {
  return <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.672px] py-0 shrink-0" data-name="Auto Layout Horizontal" />;
}

function AutoLayoutHorizontal24() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal23 />
    </div>
  );
}

function AutoLayoutHorizontal25() {
  return (
    <div className="box-border content-stretch flex items-start pl-[12px] pr-[130.328px] py-[12px] relative rounded-[24px] shrink-0" data-name="Auto Layout Horizontal">
      <Frame14 />
      <AutoLayoutHorizontal24 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[535px] items-start left-[12px] px-0 py-[4px] right-[12px] top-[100px]" data-name="Frame">
      <AutoLayoutHorizontal7 />
      <AutoLayoutHorizontal10 />
      <AutoLayoutHorizontal13 />
      <AutoLayoutHorizontal16 />
      <AutoLayoutHorizontal19 />
      <AutoLayoutHorizontal22 />
      <AutoLayoutHorizontal25 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[616px] left-0 top-0 w-[244px]" data-name="Frame">
      <Frame17 />
      <Frame15 />
    </div>
  );
}

function LeftPanel() {
  return (
    <div className="absolute h-[1024px] left-0 top-0 w-[84px]" data-name="Left_Panel">
      <div className="absolute bg-white h-[1024px] left-0 top-0 w-[84px]" data-name="Bg">
        <div aria-hidden="true" className="absolute border-[#dbdbdb] border-[0px_1.5px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-[-1.5px] top-0" />
      </div>
      <Profile />
      <Frame16 />
    </div>
  );
}

export default function CartAndOrdersCodUiConfirm() {
  return (
    <div className="bg-white relative size-full" data-name="CART AND ORDERS_COD-UI_CONFIRM">
      <Frame18 />
      <Frame25 />
      <Frame24 />
      <Frame5 />
      <div className="absolute bg-[rgba(5,16,28,0.65)] h-[1024px] left-[84px] top-0 w-[1356px]" />
      <AutoLayoutHorizontal4 />
      <LeftPanel />
    </div>
  );
}