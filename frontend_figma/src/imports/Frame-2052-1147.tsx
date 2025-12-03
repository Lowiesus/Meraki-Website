import svgPaths from "./svg-1x3f7zt20h";

function Frame9() {
  return (
    <div className="content-stretch flex flex-col h-[65px] items-start leading-[0] relative shrink-0 text-[#2d6eb7] w-full">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold h-[32px] justify-center relative shrink-0 text-[24px] w-full">
        <p className="leading-[30px]">ORDER DETAILS</p>
      </div>
      <div className="flex flex-col font-['Work_Sans:Light',sans-serif] font-light h-[21px] justify-center relative shrink-0 text-[14px] w-[576px]">
        <p className="leading-[24px]">ORDER# 1532425135231</p>
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

function Frame11() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-[589px]">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[21px] justify-center leading-[0] relative shrink-0 text-[#2d6eb7] text-[14px] w-[364px]">
        <p className="leading-[24px]">COMMISSIONER: CLIENT_USERNAME | @username</p>
      </div>
      <LightThemeMessagesDefault />
      <LightThemeNotificationsDefault />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col h-[71px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[32px] justify-center leading-[0] relative shrink-0 text-[#2d6eb7] text-[14px] w-full">
        <p className="leading-[30px]">COMMISSION TYPE: 3D Modeling with Rigging</p>
      </div>
      <Frame11 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#c8d6e6] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        - CLICK TO VIEW PROGRESS HISTORY -
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[15px] items-center px-[24px] py-[5px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return <div className="bg-[#acefb0] rounded-[9999px] shrink-0 size-[20px]" data-name="Frame" />;
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start justify-center leading-[0] relative shrink-0 text-[14px]" data-name="Frame">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#2d6eb7] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Roboto:Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'wdth' 100" }}>
          CLIENT_USERNAME
        </span>
        <span>{` has sent updates on the commission`}</span>
        <span style={{ fontVariationSettings: "'wdth' 100" }}> </span> <span style={{ fontVariationSettings: "'wdth' 100" }}> </span>{" "}
        <span className="font-['Roboto:Light',sans-serif] font-light" style={{ fontVariationSettings: "'wdth' 100" }}>
          - view here -
        </span>
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

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-start left-0 top-[53px] w-[379px]" data-name="Frame">
      <Frame1 />
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[145px] relative rounded-[15px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden="true" className="absolute border-[#95d2ff] border-[3px] border-solid inset-[-1.5px] pointer-events-none rounded-[16.5px]" />
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] left-[24px] text-[#2d6eb7] text-[16px] top-[28.5px] translate-y-[-50%] w-[182px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Commission Progress</p>
      </div>
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[12px] items-start left-[24px] px-0 py-[20px] top-0 w-[673px]" data-name="Frame">
      <Frame9 />
      <Frame10 />
      <Frame6 />
    </div>
  );
}

export default function Frame8() {
  return (
    <div className="bg-[#f6f7f9] border-[#dbdbdb] border-[0px_1px_0px_0px] border-solid overflow-clip relative rounded-[15px] shadow-[4px_0px_24px_0px_rgba(0,0,0,0.15)] size-full" data-name="Frame">
      <Frame7 />
    </div>
  );
}