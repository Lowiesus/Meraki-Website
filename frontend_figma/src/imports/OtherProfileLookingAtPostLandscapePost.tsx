import svgPaths from "./svg-ztim9dtun9";
import imgProfilePicture from "figma:asset/1c4161bf20bdb41ac0700c17ed74cd91f3a6a17c.png";
import imgBgTexture31 from "figma:asset/0d00f6be6ac86f96b5d39e2e21a7b72f784d6eac.png";
import imgQuestionPengu1 from "figma:asset/2acd6acbfb60ae9385fa0f65ca0d1bcc592fb1fd.png";
import imgAvatarSmall from "figma:asset/ce67d23a925af943f1634792363b9deeb4837a22.png";
import imgImage2 from "figma:asset/43f2f605db1237de841075d44257840170104211.png";
import imgLogoIcon2 from "figma:asset/2b7e679a7a86a6e24f1b9a9001522d9b89b0d82e.png";
import imgLogoAlter2 from "figma:asset/a16b685f7c41d886d366b4fedd8fd5dbf6fed524.png";
import imgFrame from "figma:asset/145e21bda191711904bcb65bf0237d729a262cbd.png";
import imgImage from "figma:asset/c6749f285f9eef7615410c92e8e64bf36d7cd00c.png";
import imgFrame1 from "figma:asset/02dcb37be364369c1425aa22414540a765f104d7.png";
import imgFrame2 from "figma:asset/b470ed918d47c399149d7c8cf4d47567d3ad9d36.png";
import imgFrame3 from "figma:asset/2d3c0fd53b0a6f2f101698ba08add2fa6b92c2a6.png";

function Group() {
  return (
    <div className="absolute inset-[8.33%_13.78%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g id="Group">
          <path d={svgPaths.p331a16b0} fill="var(--fill-0, #5B7083)" id="Vector" />
          <path d={svgPaths.pd7a80} fill="var(--fill-0, #5B7083)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function DarkThemeLocation() {
  return (
    <div className="absolute left-0 overflow-clip size-[19px] top-0" data-name="Dark Theme / Location">
      <Group />
    </div>
  );
}

function Location() {
  return (
    <div className="h-[20px] relative shrink-0 w-[76px]" data-name="Location">
      <DarkThemeLocation />
      <p className="absolute font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] left-[24px] text-[#5b7083] text-[16px] text-nowrap top-px tracking-[-0.32px] whitespace-pre">PH</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p3813f70} fill="var(--fill-0, #5B7083)" id="Vector" />
          <path d={svgPaths.p30ef0600} fill="var(--fill-0, #5B7083)" id="Vector_2" />
          <path d={svgPaths.p26d5c300} fill="var(--fill-0, #5B7083)" id="Vector_3" />
          <path d={svgPaths.p15346680} fill="var(--fill-0, #5B7083)" id="Vector_4" />
          <path d={svgPaths.p6573380} fill="var(--fill-0, #5B7083)" id="Vector_5" />
          <path d={svgPaths.p3ad03500} fill="var(--fill-0, #5B7083)" id="Vector_6" />
          <path d={svgPaths.p6940780} fill="var(--fill-0, #5B7083)" id="Vector_7" />
          <path d={svgPaths.p142ec0} fill="var(--fill-0, #5B7083)" id="Vector_8" />
          <path d={svgPaths.pb11d500} fill="var(--fill-0, #5B7083)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function DarkThemeCalendar() {
  return (
    <div className="absolute left-0 overflow-clip size-[19px] top-0" data-name="Dark Theme / Calendar">
      <Group1 />
    </div>
  );
}

function JoinedDate() {
  return (
    <div className="h-[20px] relative shrink-0 w-[185px]" data-name="Joined Date">
      <DarkThemeCalendar />
      <p className="absolute font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] left-[25px] text-[#5b7083] text-[16px] text-nowrap top-px tracking-[-0.24px] whitespace-pre">{`Joined September 2011 `}</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Location />
      <JoinedDate />
    </div>
  );
}

function Following() {
  return (
    <div className="content-stretch flex gap-[4px] items-start leading-[normal] relative shrink-0 text-[16px] w-[111px]" data-name="Following">
      <p className="font-['Work_Sans:Bold',sans-serif] font-bold h-[18px] relative shrink-0 text-[#0f1419] w-[30px]">569</p>
      <p className="font-['Comfortaa:Medium',sans-serif] font-medium relative shrink-0 text-[#5b7083] text-nowrap tracking-[-0.32px] whitespace-pre">Following</p>
    </div>
  );
}

function Followers() {
  return (
    <div className="content-stretch flex gap-[5px] items-start leading-[normal] relative shrink-0 text-[16px] text-nowrap whitespace-pre" data-name="Followers">
      <p className="font-['Work_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#0f1419]">72</p>
      <p className="font-['Comfortaa:Medium',sans-serif] font-medium relative shrink-0 text-[#5b7083] tracking-[-0.32px]">Followers</p>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Following />
      <Followers />
    </div>
  );
}

function Frame114() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[83px] items-start left-[13.6px] top-[270px] w-[686px]">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#5b7083] text-[16px] tracking-[-0.32px] w-[146px]">
        <p className="leading-[normal]">@etharial</p>
      </div>
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0f1419] text-[16px] tracking-[-0.24px] w-[569px]">artist + web dev !</p>
      <Frame4 />
      <Frame115 />
    </div>
  );
}

function Cover() {
  return (
    <div className="absolute h-[200px] left-0 top-0 w-[713px]" data-name="Cover">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 713 200">
        <g clipPath="url(#clip0_2012_1555)" id="Cover">
          <rect fill="white" height="200" width="713" />
          <path d="M-1 0H705V200H-1V0Z" fill="var(--fill-0, #5A4277)" id="Placeholder" />
        </g>
        <defs>
          <clipPath id="clip0_2012_1555">
            <rect fill="white" height="200" width="713" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AvatarMedium() {
  return (
    <div className="absolute left-[-2px] overflow-clip rounded-[283671px] size-[139px] top-[-4px]" data-name="Avatar / Medium">
      <div className="absolute bottom-0 left-0 right-[2.04%] top-[2.04%]" data-name="Profile Picture">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgProfilePicture} />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="absolute border-4 border-solid border-white h-[139px] left-[11px] overflow-clip rounded-[99999px] top-[121px] w-[142px]" data-name="Avatar">
      <AvatarMedium />
    </div>
  );
}

function Frame117() {
  return (
    <div className="h-[20px] relative shrink-0 w-[369px]">
      <p className="absolute font-['Work_Sans:Bold',sans-serif] font-bold h-[20px] leading-[normal] left-0 text-[#0f1419] text-[21px] top-0 tracking-[-0.252px] w-[369px]">ETHARIAL</p>
    </div>
  );
}

function LoginBtn() {
  return (
    <div className="bg-[#428dfe] box-border content-stretch flex gap-[10px] h-[29px] items-center justify-center px-[10px] py-[13px] relative rounded-[6.5px] shrink-0 w-[80px]" data-name="Login Btn">
      <div className="basis-0 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[12px] text-center text-white uppercase">
        <p className="leading-[normal]">FOLLOW</p>
      </div>
    </div>
  );
}

function LoginBtn1() {
  return (
    <div className="bg-[#428dfe] box-border content-stretch flex gap-[10px] h-[29px] items-center justify-center px-[10px] py-[13px] relative rounded-[6.5px] shrink-0 w-[80px]" data-name="Login Btn">
      <div className="basis-0 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[12px] text-center text-white uppercase">
        <p className="leading-[normal]">MESSAGE</p>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex gap-[6px] h-[29px] items-center relative shrink-0">
      <LoginBtn />
      <LoginBtn1 />
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Frame117 />
      <Frame116 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="absolute content-stretch flex h-[27px] items-center justify-between left-[157.6px] top-[211px] w-[547px]">
      <Frame113 />
    </div>
  );
}

function Profile() {
  return (
    <div className="h-[399px] relative rounded-[10px] shrink-0 w-full" data-name="Profile">
      <Frame114 />
      <Cover />
      <Avatar />
      <Frame112 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-1/2 size-[8.97px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="Frame">
          <path d={svgPaths.p1c1d8700} id="Vector" stroke="var(--stroke-0, #8E8E8E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.747537" />
          <path d="M3.36957 1.12224V7.85007" id="Line" stroke="var(--stroke-0, #8E8E8E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.747537" />
          <path d="M5.60083 1.12224V7.85007" id="Line_2" stroke="var(--stroke-0, #8E8E8E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.747537" />
          <path d="M7.84907 3.36954H1.12124" id="Line_3" stroke="var(--stroke-0, #8E8E8E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.747537" />
          <path d="M7.84907 5.60235H1.12124" id="Line_4" stroke="var(--stroke-0, #8E8E8E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.747537" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[8.97px] z-[2]" data-name="Frame">
      <Frame />
    </div>
  );
}

function AutoLayoutHorizontal() {
  return (
    <div className="box-border content-stretch flex gap-[4.485px] isolate items-center pl-0 pr-[0.222px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame1 />
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8e8e8e] text-[10px] text-center text-nowrap tracking-[0.7475px] uppercase z-[1]">
        <p className="leading-[13.456px] whitespace-pre">Post</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-1/2 size-[8.97px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="Frame">
          <path d="M0.765767 2.6182H8.20413" id="Line" stroke="var(--stroke-0, #262626)" strokeLinejoin="round" strokeWidth="0.747537" />
          <path d={svgPaths.p3d8f7700} id="Line_2" stroke="var(--stroke-0, #262626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.747537" />
          <path d={svgPaths.pdc99480} id="Line_3" stroke="var(--stroke-0, #262626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.747537" />
          <path d={svgPaths.p6bb3200} id="Vector" stroke="var(--stroke-0, #262626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.747537" />
          <path clipRule="evenodd" d={svgPaths.p15c3bc00} fill="var(--fill-0, #262626)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[8.97px] z-[2]" data-name="Frame">
      <Frame2 />
    </div>
  );
}

function AutoLayoutHorizontal1() {
  return (
    <div className="box-border content-stretch flex gap-[5.233px] isolate items-center pl-0 pr-[0.584px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame3 />
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[10px] text-center text-neutral-800 text-nowrap tracking-[0.7475px] uppercase z-[1]">
        <p className="leading-[13.456px] whitespace-pre">MEDIA</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal2() {
  return (
    <div className="box-border content-stretch flex items-start pb-[12.334px] pt-[13.082px] px-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div aria-hidden="true" className="absolute border-[0.748px_0px_0px] border-neutral-800 border-solid inset-0 pointer-events-none" />
      <AutoLayoutHorizontal1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute left-1/2 size-[8.97px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="Frame">
          <path d={svgPaths.p16f1d300} id="Vector" stroke="var(--stroke-0, #8E8E8E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.747537" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[8.97px] z-[2]" data-name="Frame">
      <Frame5 />
    </div>
  );
}

function AutoLayoutHorizontal3() {
  return (
    <div className="box-border content-stretch flex gap-[3.738px] isolate items-center pl-0 pr-[0.327px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame6 />
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8e8e8e] text-[10px] text-center text-nowrap tracking-[0.7475px] uppercase z-[1]">
        <p className="leading-[13.456px] whitespace-pre">shop</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute left-1/2 size-[8.97px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="Frame">
          <path d={svgPaths.p2a93fc00} id="Vector" stroke="var(--stroke-0, #8E8E8E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.747537" />
          <path d={svgPaths.p2db32a00} id="Vector_2" stroke="var(--stroke-0, #8E8E8E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.747537" />
          <path d={svgPaths.p7238300} id="Vector_3" stroke="var(--stroke-0, #8E8E8E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.747537" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="overflow-clip relative shrink-0 size-[8.97px] z-[2]" data-name="Frame">
      <Frame7 />
    </div>
  );
}

function AutoLayoutHorizontal4() {
  return (
    <div className="box-border content-stretch flex gap-[4.485px] isolate items-center pl-0 pr-[0.164px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame8 />
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8e8e8e] text-[10px] text-center text-nowrap tracking-[0.7475px] uppercase z-[1]">
        <p className="leading-[13.456px] whitespace-pre">Tagged</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex gap-[45px] items-center px-[192px] py-0 relative shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border-[#dbdbdb] border-[0.748px_0px_0px] border-solid inset-0 pointer-events-none" />
      <AutoLayoutHorizontal />
      <AutoLayoutHorizontal2 />
      <AutoLayoutHorizontal3 />
      <AutoLayoutHorizontal4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[13.463px] left-1/2 top-0 translate-x-[-50%] w-[13.446px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p2c911d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-[13.463px] left-[211.4px] overflow-clip top-[5.98px] w-[13.446px]" data-name="Frame">
      <Frame10 />
    </div>
  );
}

function Frame12() {
  return <div className="absolute bg-[#c4c4c4] inset-0" data-name="Frame" />;
}

function Frame13() {
  return (
    <div className="h-[299.178px] overflow-clip relative shrink-0 w-[230.824px]" data-name="Frame">
      <Frame12 />
    </div>
  );
}

function AutoLayoutHorizontal5() {
  return (
    <div className="absolute bg-[#efefef] content-stretch flex items-start left-[-2.5px] right-[-1.93px] top-0" data-name="Auto Layout Horizontal">
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 grow h-[231.115px] min-h-px min-w-px relative shrink-0" data-name="Frame">
      <Frame11 />
      <AutoLayoutHorizontal5 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute h-[13.463px] left-1/2 top-0 translate-x-[-50%] w-[13.446px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p11c20100} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute h-[13.463px] left-[211.4px] overflow-clip top-[5.98px] w-[13.446px]" data-name="Frame">
      <Frame15 />
    </div>
  );
}

function Frame17() {
  return <div className="absolute bg-[#c4c4c4] inset-0" data-name="Frame" />;
}

function Frame18() {
  return (
    <div className="h-[299.178px] overflow-clip relative shrink-0 w-[230.824px]" data-name="Frame">
      <Frame17 />
    </div>
  );
}

function AutoLayoutHorizontal6() {
  return (
    <div className="absolute bg-[#efefef] content-stretch flex items-start left-[-2.5px] right-[-1.93px] top-0" data-name="Auto Layout Horizontal">
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="basis-0 grow h-[231.115px] min-h-px min-w-px relative shrink-0" data-name="Frame">
      <Frame16 />
      <AutoLayoutHorizontal6 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute h-[13.463px] left-1/2 top-0 translate-x-[-50%] w-[13.446px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p3eea99c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute h-[13.463px] left-[211.4px] overflow-clip top-[5.98px] w-[13.446px]" data-name="Frame">
      <Frame20 />
    </div>
  );
}

function Frame22() {
  return <div className="absolute bg-[#c4c4c4] inset-0" data-name="Frame" />;
}

function Frame23() {
  return (
    <div className="h-[299.178px] overflow-clip relative shrink-0 w-[230.824px]" data-name="Frame">
      <Frame22 />
    </div>
  );
}

function AutoLayoutHorizontal7() {
  return (
    <div className="absolute bg-[#efefef] content-stretch flex items-start left-[-2.5px] right-[-1.93px] top-0" data-name="Auto Layout Horizontal">
      <Frame23 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="basis-0 grow h-[231.115px] min-h-px min-w-px relative shrink-0" data-name="Frame">
      <Frame21 />
      <AutoLayoutHorizontal7 />
    </div>
  );
}

function AutoLayoutHorizontal8() {
  return (
    <div className="content-stretch flex gap-[10px] h-[299.178px] items-start relative shrink-0 w-full" data-name="Auto Layout Horizontal">
      <Frame14 />
      <Frame19 />
      <Frame24 />
    </div>
  );
}

function AutoLayoutVertical() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[699.196px]" data-name="Auto Layout Vertical">
      {[...Array(3).keys()].map((_, i) => (
        <AutoLayoutHorizontal8 key={i} />
      ))}
    </div>
  );
}

function Frame25() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[17px] items-start px-[15px] py-0 relative shrink-0" data-name="Frame">
      <Profile />
      <Frame9 />
      <AutoLayoutVertical />
    </div>
  );
}

function AutoLayoutHorizontal9() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[1074.59px] items-center left-[calc(16.67%+54px)] px-[45.882px] py-0 top-[29px] w-[780px]" data-name="Auto Layout Horizontal">
      <Frame25 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[15%_14.96%_14.96%_15%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 860 861">
        <g id="Group 2">
          <path d={svgPaths.p25bcb900} fill="var(--fill-0, #FFF3C7)" id="Vector" />
          <path d={svgPaths.p3c2600} fill="var(--fill-0, #C5E7FF)" id="Vector_2" />
          <path d={svgPaths.p1d88ba00} fill="var(--fill-0, #95D2FF)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Relative() {
  return (
    <div className="absolute bg-[rgba(32,141,102,0)] h-[1228px] left-[-488px] overflow-clip top-[338px] w-[1227px]" data-name="Relative">
      <Group2 />
    </div>
  );
}

function AutoLayoutHorizontal10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[95.5px] items-center pb-0 pl-[23px] pr-[16.922px] pt-px relative w-full">
          <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8e8e8e] text-[14px] text-nowrap">
            <p className="leading-[18px] whitespace-pre">Recommendations for you</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[215px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[19px] justify-center leading-[0] left-0 text-[14px] text-neutral-800 top-[8.5px] translate-y-[-50%] w-[215px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">What’s Trending Today</p>
      </div>
    </div>
  );
}

function AutoLayoutVertical1() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start pl-0 pr-[135.984px] py-0 relative shrink-0 w-[215px]" data-name="Auto Layout Vertical">
      <Frame26 />
    </div>
  );
}

function ExploreBtn() {
  return (
    <div className="bg-[#428dfe] box-border content-stretch flex gap-[3.473px] h-[19px] items-start justify-center px-[3.473px] py-[4.515px] relative rounded-[20.838px] shrink-0 w-[60px]" data-name="Explore Btn">
      <div className="basis-0 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[8.5px] text-center text-white uppercase">
        <p className="leading-[normal]">Explore</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="box-border content-stretch flex gap-[37.5px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <AutoLayoutVertical1 />
      </div>
      <ExploreBtn />
    </div>
  );
}

function Frame28() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[215px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[19px] justify-center leading-[0] left-0 text-[14px] text-neutral-800 top-[8.5px] translate-y-[-50%] w-[215px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">What Happening Recently</p>
      </div>
    </div>
  );
}

function AutoLayoutVertical2() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start pl-0 pr-[135.984px] py-0 relative shrink-0 w-[215px]" data-name="Auto Layout Vertical">
      <Frame28 />
    </div>
  );
}

function ExploreBtn1() {
  return (
    <div className="bg-[#428dfe] box-border content-stretch flex gap-[3.473px] h-[19px] items-start justify-center px-[3.473px] py-[4.515px] relative rounded-[20.838px] shrink-0 w-[60px]" data-name="Explore Btn">
      <div className="basis-0 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[8.5px] text-center text-white uppercase">
        <p className="leading-[normal]">Explore</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="box-border content-stretch flex gap-[37.5px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <AutoLayoutVertical2 />
      </div>
      <ExploreBtn1 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[215px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[19px] justify-center leading-[0] left-0 text-[14px] text-neutral-800 top-[8.5px] translate-y-[-50%] w-[215px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">Trending Profiles</p>
      </div>
    </div>
  );
}

function AutoLayoutVertical3() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start pl-0 pr-[135.984px] py-0 relative shrink-0 w-[215px]" data-name="Auto Layout Vertical">
      <Frame30 />
    </div>
  );
}

function ExploreBtn2() {
  return (
    <div className="bg-[#428dfe] box-border content-stretch flex gap-[3.473px] h-[19px] items-start justify-center px-[3.473px] py-[4.515px] relative rounded-[20.838px] shrink-0 w-[60px]" data-name="Explore Btn">
      <div className="basis-0 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[8.5px] text-center text-white uppercase">
        <p className="leading-[normal]">Explore</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="box-border content-stretch flex gap-[37.5px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <AutoLayoutVertical3 />
      </div>
      <ExploreBtn2 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[215px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[19px] justify-center leading-[0] left-0 text-[14px] text-neutral-800 top-[8.5px] translate-y-[-50%] w-[215px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">You might like...</p>
      </div>
    </div>
  );
}

function AutoLayoutVertical4() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start pl-0 pr-[135.984px] py-0 relative shrink-0 w-[215px]" data-name="Auto Layout Vertical">
      <Frame32 />
    </div>
  );
}

function ExploreBtn3() {
  return (
    <div className="bg-[#428dfe] box-border content-stretch flex gap-[3.473px] h-[19px] items-start justify-center px-[3.473px] py-[4.515px] relative rounded-[20.838px] shrink-0 w-[60px]" data-name="Explore Btn">
      <div className="basis-0 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[8.5px] text-center text-white uppercase">
        <p className="leading-[normal]">Explore</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="box-border content-stretch flex gap-[37.5px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <AutoLayoutVertical4 />
      </div>
      <ExploreBtn3 />
    </div>
  );
}

function AutoLayoutVertical5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[14px] py-[8px] relative shrink-0" data-name="Auto Layout Vertical">
      <Frame27 />
      <Frame29 />
      <Frame31 />
      <Frame33 />
    </div>
  );
}

function AutoLayoutHorizontal11() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[331px]" data-name="Auto Layout Horizontal">
      <AutoLayoutVertical5 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-center left-[-16px] top-[122px] w-[351px]" data-name="Frame">
      <AutoLayoutHorizontal10 />
      <AutoLayoutHorizontal11 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute h-[600px] left-[19px] right-[19px] top-[-3px]" data-name="Frame">
      <Frame34 />
      <div className="absolute font-['Comfortaa:Bold',sans-serif] font-bold h-[15px] leading-[normal] left-[165.5px] text-[10.71px] text-[rgba(91,112,131,0.5)] text-center top-[391px] translate-x-[-50%] w-[301px]">
        <p className="mb-0">Terms of Service Privacy Policy Cookie Policy</p>
        <p>Ads info More © 2021 Innovae, Inc.</p>
      </div>
    </div>
  );
}

function RightPanel() {
  return (
    <div className="absolute border-[#8ebbff] border-[3px] border-solid h-[1045px] left-[calc(66.67%+114px)] overflow-clip top-[-7px] w-[371px]" data-name="Right_Panel">
      <div className="absolute bg-[#d1ecff] h-[1024px] left-[-1px] top-[4px] w-[374px]" data-name="Bg" />
      <div className="absolute h-[1024px] left-[-91px] top-[-3px] w-[1444px]" data-name="BG_TEXTURE-3 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBgTexture31} />
      </div>
      <Relative />
      <Frame35 />
      <div className="absolute flex items-center justify-center left-[-91px] size-[685.835px] top-[616px]" style={{ "--transform-inner-width": "625", "--transform-inner-height": "625" } as React.CSSProperties}>
        <div className="flex-none rotate-[354.11deg]">
          <div className="relative size-[625px]" data-name="QUESTION_PENGU 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgQuestionPengu1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group3() {
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
      <Group3 />
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

function Profile1() {
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

function Frame111() {
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

function Frame36() {
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

function Frame37() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame36 />
    </div>
  );
}

function AutoLayoutHorizontal12() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[2.359px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal13() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal12 />
    </div>
  );
}

function AutoLayoutHorizontal14() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[122.641px] py-[12px] relative w-full">
          <Frame37 />
          <AutoLayoutHorizontal13 />
        </div>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal15() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.016px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Cart and Orders</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal16() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal15 />
    </div>
  );
}

function AutoLayoutHorizontal17() {
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
          <AutoLayoutHorizontal16 />
        </div>
      </div>
    </div>
  );
}

function Group4() {
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
      <Group4 />
    </div>
  );
}

function AutoLayoutHorizontal18() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.016px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">My Payments</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal19() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal18 />
    </div>
  );
}

function AutoLayoutHorizontal20() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[120.984px] py-[12px] relative w-full">
          <LightThemeListsDefault />
          <AutoLayoutHorizontal19 />
        </div>
      </div>
    </div>
  );
}

function Group5() {
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
      <Group5 />
    </div>
  );
}

function AutoLayoutHorizontal21() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.031px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Messages</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal22() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal21 />
    </div>
  );
}

function AutoLayoutHorizontal23() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[98.969px] py-[12px] relative w-full">
          <LightThemeMessagesDefault />
          <AutoLayoutHorizontal22 />
        </div>
      </div>
    </div>
  );
}

function Group6() {
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
      <Group6 />
    </div>
  );
}

function AutoLayoutHorizontal24() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[3.578px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Notifications</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal25() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal24 />
    </div>
  );
}

function AutoLayoutHorizontal26() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[78.422px] py-[12px] relative w-full">
          <LightThemeNotificationsDefault />
          <AutoLayoutHorizontal25 />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
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

function Frame39() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame38 />
    </div>
  );
}

function AutoLayoutHorizontal27() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[1.766px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Create</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal28() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal27 />
    </div>
  );
}

function AutoLayoutHorizontal29() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[122.234px] py-[12px] relative w-full">
          <Frame39 />
          <AutoLayoutHorizontal28 />
        </div>
      </div>
    </div>
  );
}

function Frame40() {
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

function Frame41() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame40 />
    </div>
  );
}

function AutoLayoutHorizontal30() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.672px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">More</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal31() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal30 />
    </div>
  );
}

function AutoLayoutHorizontal32() {
  return (
    <div className="box-border content-stretch flex items-start pl-[12px] pr-[130.328px] py-[12px] relative rounded-[24px] shrink-0" data-name="Auto Layout Horizontal">
      <Frame41 />
      <AutoLayoutHorizontal31 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[535px] items-start left-[12px] px-0 py-[4px] right-[12px] top-[100px]" data-name="Frame">
      <AutoLayoutHorizontal14 />
      <AutoLayoutHorizontal17 />
      <AutoLayoutHorizontal20 />
      <AutoLayoutHorizontal23 />
      <AutoLayoutHorizontal26 />
      <AutoLayoutHorizontal29 />
      <AutoLayoutHorizontal32 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute bg-white h-[616px] left-0 top-0 w-[244px]" data-name="Frame">
      <Frame111 />
      <Frame42 />
    </div>
  );
}

function LeftPanel() {
  return (
    <div className="absolute h-[1024px] left-0 top-0 w-[294px]" data-name="Left_Panel">
      <div className="absolute bg-white h-[1024px] left-0 top-0 w-[294px]" data-name="Bg">
        <div aria-hidden="true" className="absolute border-[#dbdbdb] border-[0px_1.5px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-[-1.5px] top-0" />
      </div>
      <Profile1 />
      <Frame43 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute left-1/2 size-[16px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p3ed758c0} fill="var(--fill-0, #0A1015)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="overflow-clip relative size-[16px]" data-name="Frame">
      <Frame44 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute bg-white inset-[253.98px_1295px_262px_2px] overflow-clip rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)]" data-name="Frame">
      <div className="absolute flex items-center justify-center left-[8px] size-[16px] top-[8px]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Frame45 />
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="absolute left-1/2 size-[16px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p3ed758c0} fill="var(--fill-0, #0A1015)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame48() {
  return (
    <div className="overflow-clip relative size-[16px]" data-name="Frame">
      <Frame47 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute bg-white inset-[253.98px_2px_262px_1295px] overflow-clip rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)]" data-name="Frame">
      <div className="absolute flex items-center justify-center left-[8px] size-[16px] top-[8px]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Frame48 />
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute inset-[10px]" data-name="Frame">
      <Frame46 />
      <Frame49 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute bottom-[-40px] left-[-14px] right-[-14px] top-0" data-name="Frame">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame} />
    </div>
  );
}

function Frame52() {
  return (
    <div className="h-[591px] overflow-clip relative shrink-0 w-[673px]" data-name="Frame">
      <Frame51 />
    </div>
  );
}

function AutoLayoutHorizontal33() {
  return (
    <div className="bg-[#efefef] content-stretch flex h-[591px] items-start relative shrink-0 w-[673px]" data-name="Auto Layout Horizontal">
      <Frame52 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="absolute left-1/2 size-[12px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d={svgPaths.p241b0470} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame54() {
  return (
    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Frame">
      <Frame53 />
    </div>
  );
}

function AutoLayoutHorizontal34() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] box-border content-stretch flex inset-[555px_635px_8px_10px] items-start p-[8px] rounded-[20px]" data-name="Auto Layout Horizontal">
      <Frame54 />
    </div>
  );
}

function AutoLayoutHorizontal35() {
  return (
    <div className="content-stretch flex h-[591px] items-start relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal33 />
      <AutoLayoutHorizontal34 />
    </div>
  );
}

function AutoLayoutHorizontal36() {
  return (
    <div className="absolute content-stretch flex h-[591px] items-start left-[0.51px] overflow-clip top-[calc(50%-0.49px)] translate-y-[-50%] w-[673px]" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal35 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="h-[591px] relative shrink-0 w-[674px]" data-name="Frame">
      <AutoLayoutHorizontal36 />
      <div className="absolute left-[634.51px] size-[30px] top-[241.48px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1336.67%] left-[-540%] max-w-none top-[-326.67%] w-[1433.33%]" src={imgImage} />
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute inset-[562.51px_5.99px_0.49px_6.01px]" data-name="Frame">
      <div className="absolute bg-white left-[calc(50%-10.39px)] rounded-[3px] size-[6px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Rectangle" />
      <div className="absolute bg-white left-[calc(50%-0.39px)] opacity-40 rounded-[3px] size-[6px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Rectangle" />
      <div className="absolute bg-white left-[calc(50%+9.61px)] opacity-40 rounded-[3px] size-[6px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Rectangle" />
    </div>
  );
}

function AutoLayoutHorizontal37() {
  return (
    <div className="content-stretch flex h-[591px] items-start relative shrink-0 w-[674px]" data-name="Auto Layout Horizontal">
      <Frame55 />
      <Frame56 />
    </div>
  );
}

function AutoLayoutHorizontal38() {
  return (
    <div className="bg-[#0a1015] box-border content-stretch flex h-[672px] items-start overflow-clip px-0 py-[27.5px] relative shrink-0 w-[674px]" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal37 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="absolute bg-neutral-100 left-0 overflow-clip rounded-[12px] size-[24px] top-0" data-name="Frame">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFrame1} />
      </div>
      <div className="absolute bg-[#f00000] border border-[rgba(244,20,20,0)] border-solid left-0 rounded-[12px] size-[24px] top-0" data-name="Rectangle" />
    </div>
  );
}

function Frame58() {
  return <div className="absolute bg-[red] inset-0" data-name="Frame" />;
}

function Frame59() {
  return (
    <div className="bg-neutral-100 overflow-clip relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <Frame58 />
      <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid left-0 rounded-[12px] size-[24px] top-0" data-name="Rectangle" />
    </div>
  );
}

function AutoLayoutHorizontal39() {
  return (
    <div className="absolute bg-white box-border content-stretch flex inset-[8px_-2px_-2px_8px] items-start p-px rounded-[13px]" data-name="Auto Layout Horizontal">
      <Frame59 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <Frame57 />
      <AutoLayoutHorizontal39 />
    </div>
  );
}

function AutoLayoutHorizontal40() {
  return (
    <div className="absolute box-border content-stretch flex items-start left-[68.13px] pb-0 pt-px px-0 top-[-1px]" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#104274] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">{` and `}</p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="h-[18px] relative shrink-0 w-[172.984px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[34.5px] text-[#104274] text-[14px] text-center text-nowrap top-[9px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Username</p>
      </div>
      <AutoLayoutHorizontal40 />
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[136.61px] text-[#104274] text-[14px] text-center text-nowrap top-[9px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Username</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal41() {
  return (
    <div className="absolute box-border content-stretch flex items-start left-0 overflow-clip p-[2px] top-px" data-name="Auto Layout Horizontal">
      <Frame61 />
    </div>
  );
}

function AutoLayoutHorizontal42() {
  return (
    <div className="absolute box-border content-stretch flex items-start left-[2px] overflow-clip pl-0 pr-[0.875px] py-0 top-[23px]" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#104274] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">2073</p>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="basis-0 grow h-[42px] min-h-px min-w-px overflow-clip relative shrink-0" data-name="Frame">
      <AutoLayoutHorizontal41 />
      <AutoLayoutHorizontal42 />
    </div>
  );
}

function AutoLayoutHorizontal43() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[14px] items-center pl-[16px] pr-[4px] py-[14px] relative w-full">
          <Frame60 />
          <Frame62 />
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="absolute left-1/2 size-[24px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p11e47970} fill="var(--fill-0, #104274)" id="Vector" />
          <path d={svgPaths.p28385680} fill="var(--fill-0, #104274)" id="Vector_2" />
          <path d={svgPaths.p25e8ad00} fill="var(--fill-0, #104274)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame64() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame63 />
    </div>
  );
}

function AutoLayoutHorizontal44() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[16px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal43 />
      <Frame64 />
    </div>
  );
}

function AutoLayoutHorizontal45() {
  return (
    <div className="bg-white box-border content-stretch flex items-start pb-px pl-px pr-0 pt-0 relative rounded-[4px] shrink-0" data-name="Auto Layout Horizontal">
      <div aria-hidden="true" className="absolute border-[#efefef] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <AutoLayoutHorizontal44 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="absolute left-[-5px] size-[42px] top-[-5px]" data-name="Frame">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFrame2} />
      </div>
    </div>
  );
}

function Frame66() {
  return <div className="absolute bg-[red] inset-0" data-name="Frame" />;
}

function Frame67() {
  return (
    <div className="bg-neutral-100 overflow-clip relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <Frame66 />
      <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid left-0 rounded-[16px] size-[32px] top-0" data-name="Rectangle" />
    </div>
  );
}

function AutoLayoutHorizontal46() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame65 />
      <Frame67 />
    </div>
  );
}

function AutoLayoutHorizontal47() {
  return (
    <div className="absolute box-border content-stretch flex items-start left-0 pb-0 pt-px px-0 top-[-1px]" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[18px] relative shrink-0 text-[#104274] text-[14px] w-[395.044px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[text-indent:72.125px] mb-0">O ano é 2073. Tatuadores e tatuados mudam a cor e aumentam o brilho de suas tatuagens através de dispositivos futuristas.</p>
        <p className="[text-indent:72.125px] mb-0">&nbsp;</p>
        <p className="[text-indent:72.125px]">&nbsp;</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal48() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.547px] items-start leading-[0] left-0 pl-0 pr-[296.453px] py-0 text-[#b5c3d3] text-[12px] text-nowrap top-[96px]" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">3d</p>
      </div>
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">See translation</p>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="h-[113px] relative shrink-0 w-[403px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[34.5px] text-[#104274] text-[14px] text-center text-nowrap top-[9px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Username</p>
      </div>
      <AutoLayoutHorizontal47 />
      <AutoLayoutHorizontal48 />
    </div>
  );
}

function AutoLayoutHorizontal49() {
  return (
    <div className="content-stretch flex gap-[18px] items-start relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal46 />
      <Frame68 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="absolute left-[-5px] size-[42px] top-[-5px]" data-name="Frame">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFrame2} />
      </div>
    </div>
  );
}

function Frame70() {
  return <div className="absolute bg-[red] inset-0" data-name="Frame" />;
}

function Frame71() {
  return (
    <div className="bg-neutral-100 overflow-clip relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <Frame70 />
      <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid left-0 rounded-[16px] size-[32px] top-0" data-name="Rectangle" />
    </div>
  );
}

function AutoLayoutHorizontal50() {
  return (
    <div className="absolute content-stretch flex items-start left-0 top-0" data-name="Auto Layout Horizontal">
      <Frame69 />
      <Frame71 />
    </div>
  );
}

function AutoLayoutHorizontal51() {
  return (
    <div className="absolute box-border content-stretch flex gap-[11.547px] items-start leading-[0] left-0 pl-0 pr-[89.938px] py-px text-[#b5c3d3] text-nowrap top-[24px]" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">1d</p>
      </div>
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[11px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">1 like</p>
      </div>
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">Reply</p>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="absolute h-[43px] left-[50px] top-0 w-[184.344px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[29px] text-[#104274] text-[13px] text-center text-nowrap top-[9px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Username</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[63.22px] text-[#104274] text-[14px] text-nowrap top-[9px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">lorem ipsum</p>
      </div>
      <AutoLayoutHorizontal51 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="h-[43px] relative shrink-0 w-[441px]" data-name="Frame">
      <AutoLayoutHorizontal50 />
      <Frame72 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="absolute left-1/2 size-[12px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d={svgPaths.p3fcfa980} fill="var(--fill-0, #104274)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame75() {
  return (
    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Frame">
      <Frame74 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[0.12px] top-0 w-[469px]">
      <Frame73 />
      <Frame75 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="h-[43px] relative shrink-0 w-[469px]" data-name="Frame">
      <Frame119 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="absolute left-[-5px] size-[42px] top-[-5px]" data-name="Frame">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFrame2} />
      </div>
    </div>
  );
}

function Frame78() {
  return <div className="absolute bg-[red] inset-0" data-name="Frame" />;
}

function Frame79() {
  return (
    <div className="bg-neutral-100 overflow-clip relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <Frame78 />
      <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid left-0 rounded-[16px] size-[32px] top-0" data-name="Rectangle" />
    </div>
  );
}

function AutoLayoutHorizontal52() {
  return (
    <div className="absolute content-stretch flex items-start left-0 top-0" data-name="Auto Layout Horizontal">
      <Frame77 />
      <Frame79 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="absolute h-[18px] leading-[0] left-0 text-[#b5c3d3] text-nowrap top-[42px] w-[391px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center left-0 text-[12px] top-[9px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">1d</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center left-[39.05px] text-[11px] text-center top-[9px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">1 like</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center left-[79.41px] text-[12px] text-center top-[9px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">Reply</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center left-[106.41px] text-[12px] top-[9px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">See translation</p>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="absolute h-[61px] left-[50px] top-0 w-[391px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[30px] text-[#104274] text-[13px] text-center text-nowrap top-[9.33px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Username</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#104274] text-[14px] top-[18px] translate-y-[-50%] w-[387.294px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[text-indent:87.2969px] leading-[18px]">Ainda bem que não é 2077, ou essas tattoos iam ficar todas bugadas.</p>
      </div>
      <Frame80 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="h-[61px] relative shrink-0 w-[441px]" data-name="Frame">
      <AutoLayoutHorizontal52 />
      <Frame81 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="absolute left-1/2 size-[12px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d={svgPaths.p3fcfa980} fill="var(--fill-0, #104274)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame84() {
  return (
    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Frame">
      <Frame83 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[0.12px] top-0 w-[469px]">
      <Frame82 />
      <Frame84 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="h-[61px] relative shrink-0 w-[469px]" data-name="Frame">
      <Frame120 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="absolute left-[-5px] size-[42px] top-[-5px]" data-name="Frame">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFrame2} />
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="bg-neutral-100 overflow-clip relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFrame3} />
      </div>
      <div className="absolute bg-[#ff0202] border border-[rgba(0,0,0,0.1)] border-solid left-0 rounded-[16px] size-[32px] top-0" data-name="Rectangle" />
    </div>
  );
}

function AutoLayoutHorizontal53() {
  return (
    <div className="absolute content-stretch flex items-start left-0 top-0" data-name="Auto Layout Horizontal">
      <Frame86 />
      <Frame87 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="absolute h-[61px] leading-[0] left-[50px] top-0 w-[391px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center left-[31.5px] text-[#104274] text-[14px] text-center text-nowrap top-[17px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Username</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center left-[-65px] text-[#104274] text-[14px] top-[17px] translate-y-[-50%] w-[423px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[text-indent:135.812px] leading-[18px]">None of my prompts look a thing like this</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center left-0 text-[#b5c3d3] text-[12px] text-nowrap top-[39px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">1d</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center left-[39.05px] text-[#b5c3d3] text-[11px] text-center text-nowrap top-[39px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">1 like</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center left-[79.41px] text-[#b5c3d3] text-[12px] text-center text-nowrap top-[39px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Reply</p>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="h-[61px] relative shrink-0 w-[441px]" data-name="Frame">
      <AutoLayoutHorizontal53 />
      <Frame88 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="absolute left-1/2 size-[12px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d={svgPaths.p3fcfa980} fill="var(--fill-0, #104274)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame91() {
  return (
    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Frame">
      <Frame90 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[0.12px] top-0 w-[469px]">
      <Frame89 />
      <Frame91 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="h-[61px] relative shrink-0 w-[469px]" data-name="Frame">
      <Frame121 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[449px] items-start justify-between left-0 overflow-clip px-[14px] py-[16px] top-0 w-[499px]" data-name="Frame">
      <AutoLayoutHorizontal49 />
      <Frame76 />
      <Frame85 />
      <Frame92 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="absolute h-[449px] left-[0.89px] overflow-clip top-[0.01px] w-[499px]" data-name="Frame">
      <Frame93 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="absolute left-1/2 size-[24px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p2190fe00} fill="var(--fill-0, #104274)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame96() {
  return (
    <div className="absolute left-[16px] overflow-clip size-[24px] top-[14px]" data-name="Frame">
      <Frame95 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="absolute left-1/2 size-[24px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p3ad4d700} id="Vector" stroke="var(--stroke-0, #104274)" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame98() {
  return (
    <div className="absolute left-[calc(50%-181.5px)] overflow-clip size-[24px] top-[calc(50%-1px)] translate-x-[-50%] translate-y-[-50%]" data-name="Frame">
      <Frame97 />
    </div>
  );
}

function Frame99() {
  return <div className="absolute left-[calc(50%-141.5px)] size-[24px] top-[calc(50%-1px)] translate-x-[-50%] translate-y-[-50%]" data-name="Frame" />;
}

function Frame100() {
  return (
    <div className="absolute border-[#efefef] border-[1px_0px_0px] border-solid h-[55px] left-0 top-0 w-[499px]" data-name="Frame">
      <Frame96 />
      <Frame98 />
      <Frame99 />
    </div>
  );
}

function Frame101() {
  return <div className="absolute bg-[red] inset-0" data-name="Frame" />;
}

function Frame102() {
  return (
    <div className="absolute bg-neutral-100 left-[2px] overflow-clip rounded-[10px] size-[20px] top-[2px]" data-name="Frame">
      <Frame101 />
      <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid left-0 rounded-[10px] size-[20px] top-0" data-name="Rectangle" />
    </div>
  );
}

function Frame103() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <Frame102 />
    </div>
  );
}

function AutoLayoutHorizontal54() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame103 />
    </div>
  );
}

function AutoLayoutHorizontal55() {
  return (
    <div className="absolute box-border content-stretch flex items-start left-[160.03px] overflow-clip pb-0 pl-0 pr-[2.5px] pt-px top-[-1px]" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#104274] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">1,000 others</p>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="h-[18px] relative shrink-0 w-[439px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#104274] text-[14px] text-nowrap top-[9px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Liked by</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[55.19px] text-[#104274] text-[14px] text-nowrap top-[9px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Username</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[128.01px] text-[#104274] text-[14px] text-nowrap top-[9px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">and</p>
      </div>
      <AutoLayoutHorizontal55 />
    </div>
  );
}

function AutoLayoutHorizontal56() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[16px] top-[55px]" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal54 />
      <Frame104 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="absolute h-[99px] left-px top-[449.01px] w-[499px]">
      <Frame100 />
      <AutoLayoutHorizontal56 />
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[16px] text-[#b5c3d3] text-[10px] text-nowrap top-[93px] tracking-[0.2px] translate-y-[-50%] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12px] whitespace-pre">3 days ago</p>
      </div>
    </div>
  );
}

function Frame105() {
  return (
    <div className="absolute left-1/2 size-[24px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p2a254100} fill="var(--fill-0, #104274)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame106() {
  return (
    <div className="absolute left-[calc(50%-213.5px)] overflow-clip size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Frame">
      <Frame105 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="absolute bg-white h-[18px] left-[56px] overflow-clip top-1/2 translate-y-[-50%] w-[399.828px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[#104274] text-[14px] top-[9px] translate-y-[-50%] w-[400.028px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">Add a comment…</p>
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Frame">
      <Frame106 />
      <Frame107 />
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[469.33px] text-[#b3dbff] text-[13px] text-center text-nowrap top-[20px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Post</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal57() {
  return (
    <div className="absolute box-border content-stretch flex items-start left-px pb-[6px] pl-0 pr-[16px] pt-[7px] top-[548.01px]" data-name="Auto Layout Horizontal">
      <div aria-hidden="true" className="absolute border-[#efefef] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame108 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="h-[601px] relative shrink-0 w-[500px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-[#efefef] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame94 />
      <Frame118 />
      <AutoLayoutHorizontal57 />
    </div>
  );
}

function AutoLayoutVertical6() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[672px] items-start relative rounded-br-[4px] rounded-tr-[4px] shrink-0" data-name="Auto Layout Vertical">
      <AutoLayoutHorizontal45 />
      <Frame109 />
    </div>
  );
}

function AutoLayoutHorizontal58() {
  return (
    <div className="box-border content-stretch flex h-[672px] items-start pl-[154.875px] pr-[154.891px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal38 />
      <AutoLayoutVertical6 />
    </div>
  );
}

function AutoLayoutHorizontal59() {
  return (
    <div className="absolute content-stretch flex items-start left-1/2 overflow-clip rounded-[4px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal58 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="absolute bg-[rgba(16,66,116,0)] h-[567.984px] left-[calc(50%-0.5px)] top-[calc(50%-20.01px)] translate-x-[-50%] translate-y-[-50%] w-[1349px]" data-name="Frame">
      <Frame50 />
      <AutoLayoutHorizontal59 />
    </div>
  );
}

export default function OtherProfileLookingAtPostLandscapePost() {
  return (
    <div className="bg-white relative size-full" data-name="OTHER PROFILE_LOOKING-AT-POST_LANDSCAPE-POST">
      <AutoLayoutHorizontal9 />
      <RightPanel />
      <LeftPanel />
      <div className="absolute bg-[rgba(5,16,28,0.65)] h-[1286.7px] left-0 top-[-131.35px] w-[1440px]" />
      <Frame110 />
    </div>
  );
}