import svgPaths from "./svg-49wrmekmrs";
import imgLogoAlter2 from "figma:asset/a16b685f7c41d886d366b4fedd8fd5dbf6fed524.png";
import imgAvatarSmall from "figma:asset/ce67d23a925af943f1634792363b9deeb4837a22.png";
import imgImage2 from "figma:asset/43f2f605db1237de841075d44257840170104211.png";
import imgLogoIcon2 from "figma:asset/2b7e679a7a86a6e24f1b9a9001522d9b89b0d82e.png";

function Frame() {
  return <div className="absolute bg-[#dbdbdb] h-px left-0 right-[-37px] top-[217px]" data-name="Frame" />;
}

function Frame1() {
  return <div className="absolute h-[12px] left-1/2 top-0 translate-x-[-50%] w-[60px]" data-name="Frame" />;
}

function Frame2() {
  return (
    <div className="absolute h-[12px] left-0 overflow-clip top-0 w-[60px]" data-name="Frame">
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[173px] left-[32px] top-[28px] w-[188px]" data-name="Frame">
      <Frame2 />
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-0 text-[16px] text-neutral-800 top-[46px] translate-y-[-50%] w-[164.356px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">{` ACCOUNT SETTINGS`}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[13px] text-neutral-800 top-[113px] translate-y-[-50%] w-[183.731px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget dui luctus, dignissim est quis, posuere ex.</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#0095f6] text-[15px] text-nowrap top-[167px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre">Learn more</p>
      </div>
      <div className="absolute h-[39px] left-[-9px] top-[-20px] w-[129px]" data-name="LOGO_ALTER 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[256.26%] left-0 max-w-none top-[-60.48%] w-full" src={imgLogoAlter2} />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-white h-[218px] left-0 top-0 w-[240px]" data-name="Frame">
      <Frame />
      <Frame3 />
    </div>
  );
}

function AutoLayoutHorizontal() {
  return (
    <div className="absolute box-border content-stretch flex items-start left-0 pb-[12px] pl-[32px] pr-[140px] pt-[13px] right-[19px] top-[218px]" data-name="Auto Layout Horizontal">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_2px] border-neutral-800 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-neutral-800 text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Edit profile</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal1() {
  return <div className="absolute bg-white h-[44px] left-0 top-[777px] w-[240px]" data-name="Auto Layout Horizontal" />;
}

function Frame5() {
  return <div className="absolute bg-[#dbdbdb] h-px left-0 right-[-41px] top-0" data-name="Frame" />;
}

function Frame6() {
  return <div className="absolute h-[12px] left-1/2 top-0 translate-x-[-50%] w-[60px]" data-name="Frame" />;
}

function Frame7() {
  return (
    <div className="absolute h-[12px] left-0 overflow-clip top-0 w-[60px]" data-name="Frame">
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[131px] left-[32px] top-[29px] w-[184px]" data-name="Frame">
      <Frame7 />
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-0 text-[#0095f6] text-[15px] text-nowrap top-[48px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre">Accounts Center</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#8e8e8e] text-[12px] top-[108px] translate-y-[-50%] w-[177.934px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget dui luctus, dignissim est quis, posuere ex.</p>
      </div>
      <div className="absolute h-[39px] left-[-11px] top-[-11px] w-[129px]" data-name="LOGO_ALTER 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[256.26%] left-0 max-w-none top-[-60.48%] w-full" src={imgLogoAlter2} />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-white h-[188px] left-0 top-[710px] w-[236px]" data-name="Frame">
      <Frame5 />
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[1009px] relative shrink-0 w-[278px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-[#dbdbdb] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame4 />
      <AutoLayoutHorizontal />
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[32px] text-[13px] text-neutral-800 text-nowrap top-[286px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Change password</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[32px] text-[13px] text-neutral-800 text-nowrap top-[329px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Apps and websites</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[32px] text-[13px] text-neutral-800 text-nowrap top-[372px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Email notifications</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[32px] text-[13px] text-neutral-800 text-nowrap top-[415px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Push notifications</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[32px] text-[13px] text-neutral-800 text-nowrap top-[458px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Manage contacts</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[32px] text-[13px] text-neutral-800 text-nowrap top-[501px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Privacy and security</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[32px] text-[13px] text-neutral-800 text-nowrap top-[544px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Ads</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[32px] text-[13px] text-neutral-800 text-nowrap top-[587px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Supervision</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[32px] text-[13px] text-neutral-800 text-nowrap top-[630px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Login activity</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[32px] text-[14px] text-neutral-800 text-nowrap top-[673px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Help</p>
      </div>
      <AutoLayoutHorizontal1 />
      <Frame9 />
    </div>
  );
}

function AutoLayoutHorizontal2() {
  return (
    <div className="h-[32px] relative rounded-[3px] shrink-0 w-[355px]" data-name="Auto Layout Horizontal">
      <div aria-hidden="true" className="absolute border border-[#dbdbdb] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function AutoLayoutVertical() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[11px] isolate items-start leading-[0] pl-0 pr-[30.019px] py-0 relative shrink-0 text-[#8e8e8e] text-[11px]" data-name="Auto Layout Vertical">
      <div className="flex flex-col justify-center relative shrink-0 w-[324.981px] z-[2]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">{`Help people discover your account by using the name you're known by: either your full name, nickname, or business name.`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-nowrap z-[1]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">You can only change your name twice within 14 days.</p>
      </div>
    </div>
  );
}

function AutoLayoutVertical1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[14px] items-start pb-[5px] pt-0 px-0 relative shrink-0" data-name="Auto Layout Vertical">
      <AutoLayoutHorizontal2 />
      <AutoLayoutVertical />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-start left-[118.7px] top-0">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-neutral-800 text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Name</p>
      </div>
      <AutoLayoutVertical1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[110px] relative shrink-0 w-[692px]" data-name="Frame">
      <Frame41 />
    </div>
  );
}

function AutoLayoutHorizontal3() {
  return (
    <div className="h-[32px] relative rounded-[3px] shrink-0 w-[355px]" data-name="Auto Layout Horizontal">
      <div aria-hidden="true" className="absolute border border-[#dbdbdb] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="font-['Roboto:Regular',sans-serif] font-normal h-[32px] leading-[0] relative shrink-0 w-[355px]" data-name="Frame">
      <div className="absolute flex flex-col justify-center left-0 text-[#8e8e8e] text-[12px] top-[16px] translate-y-[-50%] w-[328.528px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">{`In most cases, you'll be able to change your username back to upvox_ for another 14 days.`}</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[164px] text-[#0095f6] text-[11px] text-nowrap top-[24px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Learn more</p>
      </div>
    </div>
  );
}

function AutoLayoutVertical2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[14px] items-start pb-[16px] pt-0 px-0 relative shrink-0 w-[355px]" data-name="Auto Layout Vertical">
      <AutoLayoutHorizontal3 />
      <Frame12 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-start left-[93.06px] top-0">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-neutral-800 text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Username</p>
      </div>
      <AutoLayoutVertical2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[94px] relative shrink-0 w-[692px]" data-name="Frame">
      <Frame40 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[60px] relative rounded-[3px] shrink-0 w-[355px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#dbdbdb] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function AutoLayoutVertical3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[194px] right-[143px] top-0" data-name="Auto Layout Vertical">
      <Frame14 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8e8e8e] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">0 / 150</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[161.59px] text-[16px] text-neutral-800 text-nowrap text-right top-[15px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Bio</p>
      </div>
      <AutoLayoutVertical3 />
    </div>
  );
}

function AutoLayoutVertical4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] isolate items-start leading-[0] left-[-142.96px] right-[143px] text-[#8e8e8e] top-[-21px]" data-name="Auto Layout Vertical">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] text-nowrap z-[2]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Personal information</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12px] w-[355.044px] z-[1]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">{`Provide your personal information, even if the account is used for a business, a pet or something else. This won't be a part of your public profile.`}</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="h-[68px] relative shrink-0 w-[355.044px]">
      <AutoLayoutVertical4 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-end relative shrink-0 w-[692px]">
      <Frame15 />
      <Frame38 />
    </div>
  );
}

function AutoLayoutHorizontal4() {
  return (
    <div className="box-border content-stretch flex items-start pb-[6.5px] pl-[11px] pr-[304px] pt-[7.5px] relative rounded-[3px] shrink-0 w-[355px]" data-name="Auto Layout Horizontal">
      <div aria-hidden="true" className="absolute border border-[#dbdbdb] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-neutral-800 text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Email</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="box-border content-stretch flex gap-[32px] items-center px-[124px] py-0 relative shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-neutral-800 text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Email</p>
      </div>
      <AutoLayoutHorizontal4 />
    </div>
  );
}

function AutoLayoutHorizontal5() {
  return (
    <div className="box-border content-stretch flex items-start pb-[6.5px] pl-[11px] pr-[285px] pt-[7.5px] relative rounded-[3px] shrink-0 w-[355px]" data-name="Auto Layout Horizontal">
      <div aria-hidden="true" className="absolute border border-[#dbdbdb] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-neutral-800 text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">+91 971</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="box-border content-stretch flex gap-[32px] items-center px-[57px] py-0 relative shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-neutral-800 text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Phone number</p>
      </div>
      <AutoLayoutHorizontal5 />
    </div>
  );
}

function AutoLayoutHorizontal6() {
  return (
    <div className="box-border content-stretch flex items-start pb-[6.5px] pl-[11px] pr-[227px] pt-[7.5px] relative rounded-[3px] shrink-0" data-name="Auto Layout Horizontal">
      <div aria-hidden="true" className="absolute border border-[#dbdbdb] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-neutral-800 text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Prefer not to say</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="box-border content-stretch flex gap-[32px] items-center px-[110px] py-0 relative shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-neutral-800 text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Gender</p>
      </div>
      <AutoLayoutHorizontal6 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="border-[0px_0px_2px_2px] border-neutral-800 border-solid h-[5px] relative w-[10px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[3px] justify-center leading-[0] left-0 text-[14px] text-neutral-800 top-[1.5px] translate-y-[-50%] w-[8.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative rounded-[3px] shrink-0 size-[16px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#dbdbdb] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="absolute flex items-center justify-center left-[2.7px] size-[10.607px] top-[1.2px]" style={{ "--transform-inner-width": "10", "--transform-inner-height": "5" } as React.CSSProperties}>
        <div className="flex-none rotate-[315deg]">
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="font-['Roboto:SemiBold',sans-serif] font-semibold h-[42px] leading-[0] relative shrink-0 text-[14px] w-[371.438px]" data-name="Frame">
      <div className="absolute flex flex-col justify-center left-0 text-neutral-800 top-[21px] translate-y-[-50%] w-[347.684px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Choose whether people can see similar account suggestions on your profile, and whether your account can be suggested on other profiles.</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[229.91px] text-[#0095f6] text-nowrap top-[35px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px] whitespace-pre">[?]</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal7() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center pl-[3px] pr-[530.156px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function AutoLayoutHorizontal8() {
  return (
    <div className="box-border content-stretch flex gap-[31.8px] items-start pb-0 pl-[52.047px] pr-0 pt-[6px] relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-neutral-800 text-right w-[110.153px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[text-indent:8.46875px] leading-[18px]">Show account suggestions on profiles</p>
      </div>
      <AutoLayoutHorizontal7 />
    </div>
  );
}

function Frame42() {
  return <div className="h-[32px] shrink-0 w-[407.813px]" />;
}

function AutoLayoutHorizontal9() {
  return (
    <div className="bg-[#0095f6] box-border content-stretch flex items-start pl-[16px] pr-[16.344px] py-[7px] relative rounded-[8px] shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Submit</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal10() {
  return (
    <div className="box-border content-stretch flex gap-[54px] items-center justify-center pl-[88px] pr-[64px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal9 />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0095f6] text-[14px] w-[410px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">Temporarily deactivate my account</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[22px] items-start left-0 top-[88px]" data-name="Frame">
      <Frame11 />
      <Frame13 />
      <Frame39 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <AutoLayoutHorizontal8 />
      <Frame42 />
      <AutoLayoutHorizontal10 />
    </div>
  );
}

function AutoLayoutVertical5() {
  return (
    <div className="h-[923px] relative shrink-0 w-[676px]" data-name="Auto Layout Vertical">
      <Frame22 />
    </div>
  );
}

function AutoLayoutHorizontal11() {
  return (
    <div className="bg-white h-[916px] relative rounded-[3px] shrink-0 w-[955px]" data-name="Auto Layout Horizontal">
      <div className="box-border content-stretch flex h-[916px] items-start overflow-clip p-px relative rounded-[inherit] w-[955px]">
        <Frame10 />
        <AutoLayoutVertical5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dbdbdb] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function AutoLayoutHorizontal12() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-start left-[85px] pl-0 pr-[83px] py-0 top-0 w-[935px]" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal11 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="font-['Roboto:Regular',sans-serif] font-normal h-[23px] leading-[0] relative shrink-0 text-[#8e8e8e] text-nowrap w-[1073px]" data-name="Frame">
      <div className="absolute flex flex-col justify-center left-[112.06px] text-[12px] top-[6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">Meta</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[155.3px] text-[12px] top-[6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">About</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[203.98px] text-[12px] top-[6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">Blog</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[243.88px] text-[10px] top-[6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">Jobs</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[283.34px] text-[12px] top-[6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">Help</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[324.11px] text-[11px] top-[6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">API</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[357.77px] text-[11px] top-[6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">Privacy</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[410.78px] text-[11px] top-[6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">Terms</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[457.78px] text-[11px] top-[6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">Top Accounts</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[544.88px] text-[11px] top-[6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">Locations</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[611.09px] text-[11px] top-[6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">Instagram Lite</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[702.22px] text-[12px] top-[6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">{`Contact Uploading & Non-Users`}</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[890.38px] text-[11px] top-[6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">Meta Verified</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute left-1/2 size-[12px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d={svgPaths.pf72e400} fill="var(--fill-0, #8E8E8E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="overflow-clip relative size-[12px]" data-name="Frame">
      <Frame24 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="h-[16px] relative shrink-0 w-[53.625px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#8e8e8e] text-[11px] text-nowrap top-[8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">English</p>
      </div>
      <div className="absolute flex items-center justify-center left-[41.63px] size-[12px] top-[2px]">
        <div className="flex-none rotate-[180deg]">
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute bg-white inset-0 opacity-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#ccd0d5] border-solid inset-0 pointer-events-none" />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[7px] not-italic text-[#1c1e21] text-[8px] top-[11px] translate-y-[-50%] w-[25.825px]">
        <p className="leading-[normal]">English</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function AutoLayoutHorizontal14() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start pl-[424.109px] pr-[423.266px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal13 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8e8e8e] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">© 2023 Instagram from Meta</p>
      </div>
    </div>
  );
}

function AutoLayoutVertical6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[9px] pt-[24px] px-0 relative shrink-0" data-name="Auto Layout Vertical">
      <Frame23 />
      <AutoLayoutHorizontal14 />
    </div>
  );
}

function AutoLayoutHorizontal15() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-start left-0 pb-[52px] pt-0 px-[16px] top-[1041px]" data-name="Auto Layout Horizontal">
      <AutoLayoutVertical6 />
    </div>
  );
}

function AutoLayoutVertical7() {
  return <div className="absolute h-[82px] left-[24px] top-[893px] w-[1073px]" data-name="Auto Layout Vertical" />;
}

function Frame28() {
  return (
    <div className="h-[1175px] overflow-clip relative shrink-0 w-[1167px]" data-name="Frame">
      <AutoLayoutHorizontal12 />
      <AutoLayoutHorizontal15 />
      <AutoLayoutVertical7 />
    </div>
  );
}

function AutoLayoutHorizontal16() {
  return (
    <div className="absolute bg-neutral-50 bottom-[-151px] box-border content-stretch flex items-start left-[54px] pl-[244px] pr-0 py-0 top-[29px]" data-name="Auto Layout Horizontal">
      <Frame28 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[42.71%_23.96%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 5">
        <g id="Group">
          <path d={svgPaths.p5aa0900} fill="var(--fill-0, #2B5A96)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DarkThemeEllipsesDefault() {
  return (
    <div className="absolute overflow-clip right-[18px] size-[33px] top-[13px]" data-name="Dark Theme / Ellipses / Default">
      <Group />
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
      <p className="absolute font-['Work_Sans:Bold',sans-serif] font-bold leading-[normal] left-[49px] text-[#2b5a96] text-[16px] text-nowrap top-[11px] whitespace-pre">Pengu</p>
      <p className="absolute font-['Comfortaa:Regular',sans-serif] font-normal leading-[normal] left-[49px] text-[#5b7083] text-[12px] text-nowrap top-[35px] tracking-[-0.204px] whitespace-pre">@penguu</p>
      <DarkThemeEllipsesDefault />
      <AvatarSmall />
      <div className="absolute left-[121px] size-[20px] top-[13px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute content-stretch flex items-center left-[12px] top-[28.63px]">
      <div className="relative shrink-0 size-[51.75px]" data-name="LOGO_ICON 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoIcon2} />
      </div>
      <div className="h-[39px] relative shrink-0 w-[129px]" data-name="LOGO_ALTER 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[256.26%] left-0 max-w-none top-[-60.48%] w-full" src={imgLogoAlter2} />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
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

function Frame30() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame29 />
    </div>
  );
}

function AutoLayoutHorizontal17() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[2.359px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Home</p>
      </div>
    </div>
  );
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
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[122.641px] py-[12px] relative w-full">
          <Frame30 />
          <AutoLayoutHorizontal18 />
        </div>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal20() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.016px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Cart and Orders</p>
      </div>
    </div>
  );
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
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[120.984px] py-[12px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="glyph">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="glyph">
                <path clipRule="evenodd" d={svgPaths.p2663bc80} fill="var(--fill-0, #3971B8)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p13425300} fill="var(--fill-0, #3971B8)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p36a0400} fill="var(--fill-0, #3971B8)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
          <AutoLayoutHorizontal21 />
        </div>
      </div>
    </div>
  );
}

function Group1() {
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
      <Group1 />
    </div>
  );
}

function AutoLayoutHorizontal23() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.016px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">My Payments</p>
      </div>
    </div>
  );
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
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[120.984px] py-[12px] relative w-full">
          <LightThemeListsDefault />
          <AutoLayoutHorizontal24 />
        </div>
      </div>
    </div>
  );
}

function Group2() {
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
      <Group2 />
    </div>
  );
}

function AutoLayoutHorizontal26() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.031px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Messages</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal27() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal26 />
    </div>
  );
}

function AutoLayoutHorizontal28() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[98.969px] py-[12px] relative w-full">
          <LightThemeMessagesDefault />
          <AutoLayoutHorizontal27 />
        </div>
      </div>
    </div>
  );
}

function Group3() {
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
      <Group3 />
    </div>
  );
}

function AutoLayoutHorizontal29() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[3.578px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Notifications</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal30() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal29 />
    </div>
  );
}

function AutoLayoutHorizontal31() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[78.422px] py-[12px] relative w-full">
          <LightThemeNotificationsDefault />
          <AutoLayoutHorizontal30 />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
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

function Frame32() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame31 />
    </div>
  );
}

function AutoLayoutHorizontal32() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[1.766px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Create</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal33() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal32 />
    </div>
  );
}

function AutoLayoutHorizontal34() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[122.234px] py-[12px] relative w-full">
          <Frame32 />
          <AutoLayoutHorizontal33 />
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
          <path d="M3 4H21" id="Line" stroke="var(--stroke-0, #3971B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 12H21" id="Line_2" stroke="var(--stroke-0, #3971B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 20H21" id="Line_3" stroke="var(--stroke-0, #3971B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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

function AutoLayoutHorizontal35() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.672px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">More</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal36() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal35 />
    </div>
  );
}

function AutoLayoutHorizontal37() {
  return (
    <div className="box-border content-stretch flex items-start pl-[12px] pr-[130.328px] py-[12px] relative rounded-[24px] shrink-0" data-name="Auto Layout Horizontal">
      <Frame34 />
      <AutoLayoutHorizontal36 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[535px] items-start left-[12px] px-0 py-[4px] right-[12px] top-[100px]" data-name="Frame">
      <AutoLayoutHorizontal19 />
      <AutoLayoutHorizontal22 />
      <AutoLayoutHorizontal25 />
      <AutoLayoutHorizontal28 />
      <AutoLayoutHorizontal31 />
      <AutoLayoutHorizontal34 />
      <AutoLayoutHorizontal37 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute bg-white h-[616px] left-0 top-0 w-[244px]" data-name="Frame">
      <Frame37 />
      <Frame35 />
    </div>
  );
}

function LeftPanel() {
  return (
    <div className="absolute h-[1024px] left-0 top-0 w-[294px]" data-name="Left_Panel">
      <div className="absolute bg-white h-[1024px] left-0 top-0 w-[294px]" data-name="Bg">
        <div aria-hidden="true" className="absolute border-[#dbdbdb] border-[0px_1.5px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-[-1.5px] top-0" />
      </div>
      <Profile />
      <Frame36 />
    </div>
  );
}

export default function PersonalProfileSettings() {
  return (
    <div className="bg-white relative size-full" data-name="PERSONAL PROFILE_SETTINGS">
      <AutoLayoutHorizontal16 />
      <LeftPanel />
    </div>
  );
}