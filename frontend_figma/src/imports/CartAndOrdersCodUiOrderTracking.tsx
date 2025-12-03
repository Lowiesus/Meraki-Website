import svgPaths from "./svg-y8y4nej83b";
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

function Frame1() {
  return (
    <div className="absolute bg-[#f6f7f9] h-[49px] left-[-1px] top-[73px] w-[777px]" data-name="Frame">
      <div className="absolute border-[#a9c6db] border-[0px_0px_1.143px] border-solid h-[49px] left-0 top-0 w-[777px]" data-name="Rectangle" />
      <Frame />
    </div>
  );
}

function Frame45() {
  return (
    <div className="box-border content-stretch flex items-center leading-[normal] px-[10px] py-0 relative shrink-0 text-[#2963a3] w-[494px]">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[12px] w-[77px]">{`USERNAME `}</p>
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[12px] w-[9px]">|</p>
      <p className="font-['Work_Sans:Italic',sans-serif] font-normal italic relative shrink-0 text-[8.5px] w-[398px]">@username</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="h-[22px] relative shrink-0 w-[51px]">
      <div className="absolute bg-[#acefb0] border border-[#95d2ff] border-solid h-[22px] left-[calc(50%-0.5px)] rounded-[4px] top-0 translate-x-[-50%] w-[24px]" />
    </div>
  );
}

function Frame52() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center leading-none pb-[5px] pt-0 px-0 relative shrink-0 text-[12px] text-center">
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[20px] relative shrink-0 text-[#104274] w-[72px]">STATUS:</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal h-[20px] relative shrink-0 text-[#95d2ff] w-[72px]">SHIPPED OUT</p>
    </div>
  );
}

function Frame5() {
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

function Frame41() {
  return (
    <div className="bg-[#428dfe] h-[100px] relative rounded-[15px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[100px] items-center justify-between px-[10px] py-[9px] relative w-full">
          <Frame46 />
          <div className="bg-[red] h-[82.286px] rounded-[8px] shrink-0 w-[80px]" />
          <p className="capitalize font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#104274] text-[15px] text-center w-[202px]">pRODUCT_NAME</p>
          <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#104274] text-[14px] text-center w-[61px]">| 1 |</p>
          <Frame52 />
          <Frame5 />
          <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#104274] text-[14px] text-center w-[107px]">₱150.00</p>
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col h-[65px] items-start leading-[0] relative shrink-0 text-[#2d6eb7] w-full">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold h-[32px] justify-center relative shrink-0 text-[24px] w-full">
        <p className="leading-[30px]">ORDER DETAILS</p>
      </div>
      <div className="flex flex-col font-['Work_Sans:Light',sans-serif] font-light h-[21px] justify-center relative shrink-0 text-[14px] w-[576px]">
        <p className="leading-[24px]">ITEM ID#00000000</p>
      </div>
      <div className="flex flex-col font-['Work_Sans:Light',sans-serif] font-light h-[21px] justify-center relative shrink-0 text-[14px] w-[576px]">
        <p className="leading-[24px]">ORDER# 00000000</p>
      </div>
    </div>
  );
}

function Group() {
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
      <Group />
    </div>
  );
}

function Group1() {
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
      <Group1 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-[589px]">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[21px] justify-center leading-[0] relative shrink-0 text-[#2d6eb7] text-[14px] w-[364px]">
        <p className="leading-[24px]">SELLER: USERNAME | @username</p>
      </div>
      <LightThemeMessagesDefault />
      <LightThemeNotificationsDefault />
    </div>
  );
}

function Frame2() {
  return <div className="bg-[#e9ecf2] rounded-[9999px] shrink-0 size-[20px]" data-name="Frame" />;
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start justify-center leading-[0] relative shrink-0 text-[14px]" data-name="Frame">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#2d6eb7] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
          PRODUCTID
        </span>
        <span>{` has been picked up by our `}</span>
        <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
          LOGISTICS PARTNER
        </span>
      </p>
      <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center relative shrink-0 text-[#a9b7d9] w-[395px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">
          <span>{`10:02 AM | `}</span>
          <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
            Nov 10
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[15px] items-center px-[24px] py-[5px] relative w-full">
          <Frame2 />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return <div className="bg-[#e9ecf2] rounded-[9999px] shrink-0 size-[20px]" data-name="Frame" />;
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start justify-center leading-[0] relative shrink-0 text-[14px]" data-name="Frame">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#2d6eb7] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
          PRODUCTID
        </span>
        <span>{` has arrived at the `}</span>
        <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>{`SORTING FACILITY CENTER             `}</span>
      </p>
      <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center relative shrink-0 text-[#a9b7d9] w-[395px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">
          <span>{`2:02 PM | `}</span>
          <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
            Nov 12
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[15px] items-center px-[24px] py-[5px] relative w-full">
          <Frame6 />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return <div className="bg-[#e9ecf2] rounded-[9999px] shrink-0 size-[20px]" data-name="Frame" />;
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start justify-center leading-[0] relative shrink-0 text-[14px]" data-name="Frame">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#2d6eb7] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
          PRODUCTID
        </span>
        <span>{` has departed from `}</span>
        <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
          SORTING FACILITY
        </span>
      </p>
      <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center relative shrink-0 text-[#a9b7d9] w-[395px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">
          <span>{`12:02 PM | `}</span>
          <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
            Nov 15
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[15px] items-center px-[24px] py-[5px] relative w-full">
          <Frame9 />
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return <div className="bg-[#e9ecf2] rounded-[9999px] shrink-0 size-[20px]" data-name="Frame" />;
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start justify-center leading-[0] relative shrink-0 text-[14px]" data-name="Frame">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#2d6eb7] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span>{`PRODUCTID `}</span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>{`has arrived and to be received  by the`}</span>
        <span>{` DELIVERY HUB`}</span>
      </p>
      <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center relative shrink-0 text-[#a9b7d9] w-[395px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">
          <span>{`12:05 PM | `}</span>
          <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
            Nov 15
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[15px] items-center px-[24px] py-[5px] relative w-full">
          <Frame12 />
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return <div className="bg-[#e9ecf2] rounded-[9999px] shrink-0 size-[20px]" data-name="Frame" />;
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start justify-center leading-[0] relative shrink-0 text-[14px]" data-name="Frame">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#2d6eb7] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span>{`PRODUCTID `}</span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>
          has arrived at the
        </span>
        <span>{` DELIVERY HUB`}</span>
      </p>
      <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center relative shrink-0 text-[#a9b7d9] w-[395px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">
          <span>{`12:25 PM | `}</span>
          <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
            Nov 15
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[15px] items-center px-[24px] py-[5px] relative w-full">
          <Frame15 />
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return <div className="bg-[#e9ecf2] rounded-[9999px] shrink-0 size-[20px]" data-name="Frame" />;
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0 text-[14px]" data-name="Frame">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#2d6eb7] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Delivery driver has been assigned
      </p>
      <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#a9b7d9] w-[395px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">
          <span>{`12:45 PM | `}</span>
          <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
            Nov 15
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[15px] items-center px-[24px] py-[5px] relative w-full">
          <Frame18 />
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return <div className="bg-[#acefb0] rounded-[9999px] shrink-0 size-[20px]" data-name="Frame" />;
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start justify-center leading-[0] relative shrink-0 text-[14px]" data-name="Frame">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#2d6eb7] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>{`PRODUCTID `}</span>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>is out for</span>
        <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>{` DELIVERY`}</span>
      </p>
      <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center relative shrink-0 text-[#a9b7d9] w-[395px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">
          <span>{`3:45 AM | `}</span>
          <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
            Nov 18
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[15px] items-center px-[24px] py-[5px] relative w-full">
          <Frame21 />
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-0 top-[53px] w-[379px]" data-name="Frame">
      <Frame4 />
      <Frame8 />
      <Frame11 />
      <Frame14 />
      <Frame17 />
      <Frame20 />
      <Frame23 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="h-[486px] relative rounded-[15px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden="true" className="absolute border-[#95d2ff] border-[3px] border-solid inset-[-1.5px] pointer-events-none rounded-[16.5px]" />
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] left-[24px] text-[#2d6eb7] text-[16px] top-[28.5px] translate-y-[-50%] w-[182px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">ORDER TRACKING</p>
      </div>
      <div className="absolute flex h-[363px] items-center justify-center left-[34px] top-[65px] w-0" style={{ "--transform-inner-width": "363", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[363px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 363 1">
                <line id="Line 32" stroke="var(--stroke-0, #E9ECF2)" x2="363" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame24 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[71px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[32px] justify-center leading-[0] relative shrink-0 text-[#2d6eb7] text-[14px] w-full">
        <p className="leading-[30px]">PRODUCT NAME</p>
      </div>
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[32px] justify-center leading-[0] relative shrink-0 text-[#2d6eb7] text-[14px] w-full">
        <p className="leading-[30px]">ITEM DESCRIPTION</p>
      </div>
      <Frame63 />
      <Frame25 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[12px] items-start left-[24px] px-0 py-[20px] top-0 w-[673px]" data-name="Frame">
      <Frame61 />
      <Frame62 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#f6f7f9] h-[706px] relative rounded-[15px] shrink-0 w-full" data-name="Frame">
      <div className="h-[706px] overflow-clip relative rounded-[inherit] w-full">
        <Frame26 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dbdbdb] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[4px_0px_24px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <Frame45 />
      <Frame41 />
      <Frame27 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="box-border content-stretch flex items-center leading-[normal] px-[10px] py-0 relative shrink-0 text-[#2963a3] w-[494px]">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[12px] w-[77px]">{`USERNAME `}</p>
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[12px] w-[9px]">|</p>
      <p className="font-['Work_Sans:Italic',sans-serif] font-normal italic relative shrink-0 text-[8.5px] w-[398px]">ORDER# 000000000000000</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="h-[22px] relative shrink-0 w-[51px]">
      <div className="absolute bg-white border border-[#95d2ff] border-solid h-[22px] left-[calc(50%-0.5px)] rounded-[4px] top-0 translate-x-[-50%] w-[24px]" />
    </div>
  );
}

function Frame53() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center leading-none pb-[5px] pt-0 px-0 relative shrink-0 text-[12px] text-center">
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[20px] relative shrink-0 text-[#104274] w-[72px]">STATUS:</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal h-[20px] relative shrink-0 text-[#95d2ff] w-[72px]">SHIPPED OUT</p>
    </div>
  );
}

function Frame28() {
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

function Frame42() {
  return (
    <div className="bg-white h-[100px] relative rounded-[15px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[100px] items-center justify-between px-[10px] py-[9px] relative w-full">
          <Frame50 />
          <div className="bg-[red] h-[82.286px] rounded-[8px] shrink-0 w-[80px]" />
          <p className="capitalize font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#104274] text-[15px] text-center w-[202px]">pRODUCT_NAME</p>
          <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#104274] text-[14px] text-center w-[61px]">| 1 |</p>
          <Frame53 />
          <Frame28 />
          <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#104274] text-[14px] text-center w-[107px]">₱150.00</p>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <Frame47 />
      <Frame42 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[1154px] items-start left-[14px] top-[145px] w-[724px]">
      <Frame44 />
      <Frame48 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute border border-[#d0cfcf] border-solid h-[1031px] left-[84px] top-[-2px] w-[778px]">
      <Frame1 />
      <Frame43 />
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

function Frame51() {
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

function Frame58() {
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

function Frame57() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[106.25px]">
      <Frame58 />
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[16.15px] leading-[normal] relative shrink-0 text-[#36963c] text-[10.2px] w-[74.8px]">COD Payment</p>
    </div>
  );
}

function Frame59() {
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

function Frame60() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[140px]">
      <Frame59 />
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal h-[16px] leading-[normal] relative shrink-0 text-[#2963a3] text-[10.2px] w-[109px]">Online Card Payment</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="h-[17px] relative shrink-0 w-[23.8px]">
      <div className="absolute bg-white border-[#e0e0e0] border-[0.85px] border-solid left-[calc(50%-2.13px)] rounded-[3.4px] size-[12.75px] top-[0.13px] translate-x-[-50%]" />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[128.35px]">
      <Frame64 />
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal h-[16.15px] leading-[normal] relative shrink-0 text-[#2963a3] text-[10.2px] w-[104.55px]">Pay Via Dragonpay</p>
    </div>
  );
}

function PaymentChoices() {
  return (
    <div className="box-border content-stretch flex items-start px-0 py-[12.75px] relative shrink-0 w-[369px]" data-name="PAYMENT CHOICES">
      <Frame57 />
      <Frame60 />
      <Frame65 />
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

function Frame55() {
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
      <Frame55 />
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

function Frame56() {
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

function Frame54() {
  return (
    <div className="absolute bg-[rgba(254,255,243,0.5)] h-[679px] left-[10px] rounded-[21.079px] top-[21px] w-[409px]">
      <Frame56 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[768px] left-[calc(58.33%+102px)] overflow-clip rounded-[35px] top-[86px] w-[409px]">
      <Frame54 />
    </div>
  );
}

function Frame29() {
  return <div className="absolute bg-white inset-0" data-name="Frame" />;
}

function Frame30() {
  return (
    <div className="absolute bg-neutral-50 left-[calc(50%+108px)] overflow-clip rounded-[100px] size-[100px] top-[475px]" data-name="Frame">
      <Frame29 />
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

function Frame39() {
  return (
    <div className="absolute content-stretch flex items-center left-[12px] top-[28.63px]">
      <div className="relative shrink-0 size-[51.75px]" data-name="LOGO_ICON 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoIcon2} />
      </div>
    </div>
  );
}

function Frame31() {
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

function Frame32() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame31 />
    </div>
  );
}

function AutoLayoutHorizontal1() {
  return <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[2.359px] py-0 shrink-0" data-name="Auto Layout Horizontal" />;
}

function AutoLayoutHorizontal2() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal1 />
    </div>
  );
}

function AutoLayoutHorizontal3() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[122.641px] py-[12px] relative w-full">
          <Frame32 />
          <AutoLayoutHorizontal2 />
        </div>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal4() {
  return <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.016px] py-0 shrink-0" data-name="Auto Layout Horizontal" />;
}

function AutoLayoutHorizontal5() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal4 />
    </div>
  );
}

function AutoLayoutHorizontal6() {
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
          <AutoLayoutHorizontal5 />
        </div>
      </div>
    </div>
  );
}

function Group3() {
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
      <Group3 />
    </div>
  );
}

function AutoLayoutHorizontal7() {
  return <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.016px] py-0 shrink-0" data-name="Auto Layout Horizontal" />;
}

function AutoLayoutHorizontal8() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal7 />
    </div>
  );
}

function AutoLayoutHorizontal9() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[120.984px] py-[12px] relative w-full">
          <LightThemeListsDefault />
          <AutoLayoutHorizontal8 />
        </div>
      </div>
    </div>
  );
}

function Group4() {
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

function LightThemeMessagesDefault1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Light Theme / Messages / Default">
      <Group4 />
    </div>
  );
}

function AutoLayoutHorizontal10() {
  return <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.031px] py-0 shrink-0" data-name="Auto Layout Horizontal" />;
}

function AutoLayoutHorizontal11() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal10 />
    </div>
  );
}

function AutoLayoutHorizontal12() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[98.969px] py-[12px] relative w-full">
          <LightThemeMessagesDefault1 />
          <AutoLayoutHorizontal11 />
        </div>
      </div>
    </div>
  );
}

function Group5() {
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

function LightThemeNotificationsDefault1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Light Theme / Notifications / Default">
      <Group5 />
    </div>
  );
}

function AutoLayoutHorizontal13() {
  return <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[3.578px] py-0 shrink-0" data-name="Auto Layout Horizontal" />;
}

function AutoLayoutHorizontal14() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal13 />
    </div>
  );
}

function AutoLayoutHorizontal15() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[78.422px] py-[12px] relative w-full">
          <LightThemeNotificationsDefault1 />
          <AutoLayoutHorizontal14 />
        </div>
      </div>
    </div>
  );
}

function Frame33() {
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

function Frame34() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame33 />
    </div>
  );
}

function AutoLayoutHorizontal16() {
  return <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[1.766px] py-0 shrink-0" data-name="Auto Layout Horizontal" />;
}

function AutoLayoutHorizontal17() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal16 />
    </div>
  );
}

function AutoLayoutHorizontal18() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[122.234px] py-[12px] relative w-full">
          <Frame34 />
          <AutoLayoutHorizontal17 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
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

function Frame36() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame35 />
    </div>
  );
}

function AutoLayoutHorizontal19() {
  return <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.672px] py-0 shrink-0" data-name="Auto Layout Horizontal" />;
}

function AutoLayoutHorizontal20() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal19 />
    </div>
  );
}

function AutoLayoutHorizontal21() {
  return (
    <div className="box-border content-stretch flex items-start pl-[12px] pr-[130.328px] py-[12px] relative rounded-[24px] shrink-0" data-name="Auto Layout Horizontal">
      <Frame36 />
      <AutoLayoutHorizontal20 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[535px] items-start left-[12px] px-0 py-[4px] right-[12px] top-[100px]" data-name="Frame">
      <AutoLayoutHorizontal3 />
      <AutoLayoutHorizontal6 />
      <AutoLayoutHorizontal9 />
      <AutoLayoutHorizontal12 />
      <AutoLayoutHorizontal15 />
      <AutoLayoutHorizontal18 />
      <AutoLayoutHorizontal21 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[616px] left-0 top-0 w-[244px]" data-name="Frame">
      <Frame39 />
      <Frame37 />
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
      <Frame38 />
    </div>
  );
}

export default function CartAndOrdersCodUiOrderTracking() {
  return (
    <div className="bg-white relative size-full" data-name="CART AND ORDERS_COD-UI_ORDER-TRACKING">
      <Frame40 />
      <Frame51 />
      <Frame49 />
      <Frame30 />
      <LeftPanel />
    </div>
  );
}