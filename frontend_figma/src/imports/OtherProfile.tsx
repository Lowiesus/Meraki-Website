import svgPaths from "./svg-g9ohhvct1t";
import imgProfilePicture from "figma:asset/1c4161bf20bdb41ac0700c17ed74cd91f3a6a17c.png";
import imgBgTexture31 from "figma:asset/0d00f6be6ac86f96b5d39e2e21a7b72f784d6eac.png";
import imgQuestionPengu1 from "figma:asset/2acd6acbfb60ae9385fa0f65ca0d1bcc592fb1fd.png";
import imgAvatarSmall from "figma:asset/ce67d23a925af943f1634792363b9deeb4837a22.png";
import imgImage2 from "figma:asset/43f2f605db1237de841075d44257840170104211.png";
import imgLogoIcon2 from "figma:asset/2b7e679a7a86a6e24f1b9a9001522d9b89b0d82e.png";
import imgLogoAlter2 from "figma:asset/a16b685f7c41d886d366b4fedd8fd5dbf6fed524.png";

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

function Frame83() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Following />
      <Followers />
    </div>
  );
}

function Frame82() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[83px] items-start left-[13.6px] top-[270px] w-[686px]">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#5b7083] text-[16px] tracking-[-0.32px] w-[146px]">
        <p className="leading-[normal]">@etharial</p>
      </div>
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0f1419] text-[16px] tracking-[-0.24px] w-[569px]">artist + web dev !</p>
      <Frame4 />
      <Frame83 />
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

function Frame85() {
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

function Frame84() {
  return (
    <div className="content-stretch flex gap-[6px] h-[29px] items-center relative shrink-0">
      <LoginBtn />
      <LoginBtn1 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Frame85 />
      <Frame84 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="absolute content-stretch flex h-[27px] items-center justify-between left-[157.6px] top-[211px] w-[547px]">
      <Frame81 />
    </div>
  );
}

function Profile() {
  return (
    <div className="h-[399px] relative rounded-[10px] shrink-0 w-full" data-name="Profile">
      <Frame82 />
      <Cover />
      <Avatar />
      <Frame80 />
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
    <div className="box-border content-stretch flex gap-[4.485px] isolate items-center pl-0 pr-[0.164px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame1 />
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8e8e8e] text-[10px] text-center text-nowrap tracking-[0.7475px] uppercase z-[1]">
        <p className="leading-[13.456px] whitespace-pre">POSTS</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-1/2 size-[8.97px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="Frame">
          <path d="M0.765767 2.6182H8.20413" id="Line" stroke="var(--stroke-0, #8E8E8E)" strokeLinejoin="round" strokeWidth="0.747537" />
          <path d={svgPaths.p3d8f7700} id="Line_2" stroke="var(--stroke-0, #8E8E8E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.747537" />
          <path d={svgPaths.pdc99480} id="Line_3" stroke="var(--stroke-0, #8E8E8E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.747537" />
          <path d={svgPaths.p6bb3200} id="Vector" stroke="var(--stroke-0, #8E8E8E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.747537" />
          <path clipRule="evenodd" d={svgPaths.p15c3bc00} fill="var(--fill-0, #8E8E8E)" fillRule="evenodd" id="Vector_2" />
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
    <div className="box-border content-stretch flex gap-[4.485px] isolate items-center pl-0 pr-[0.222px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame3 />
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8e8e8e] text-[10px] text-center text-nowrap tracking-[0.7475px] uppercase z-[1]">
        <p className="leading-[13.456px] whitespace-pre">media</p>
      </div>
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

function AutoLayoutHorizontal2() {
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
          <path d={svgPaths.p2a93fc00} id="Vector" stroke="var(--stroke-0, #262626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.747537" />
          <path d={svgPaths.p2db32a00} id="Vector_2" stroke="var(--stroke-0, #262626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.747537" />
          <path d={svgPaths.p7238300} id="Vector_3" stroke="var(--stroke-0, #262626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.747537" />
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

function AutoLayoutHorizontal3() {
  return (
    <div className="box-border content-stretch flex gap-[5.233px] isolate items-center pl-0 pr-[0.584px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame8 />
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[10px] text-center text-neutral-800 text-nowrap tracking-[0.7475px] uppercase z-[1]">
        <p className="leading-[13.456px] whitespace-pre">{`Status `}</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal4() {
  return (
    <div className="box-border content-stretch flex items-start pb-[12.334px] pt-[13.082px] px-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div aria-hidden="true" className="absolute border-[0.748px_0px_0px] border-neutral-800 border-solid inset-0 pointer-events-none" />
      <AutoLayoutHorizontal3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex gap-[45px] items-center px-[192px] py-0 relative shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border-[#dbdbdb] border-[0.748px_0px_0px] border-solid inset-0 pointer-events-none" />
      <AutoLayoutHorizontal />
      <AutoLayoutHorizontal1 />
      <AutoLayoutHorizontal2 />
      <AutoLayoutHorizontal4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute left-1/2 size-[13.456px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p3239c500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute left-[211.55px] overflow-clip size-[13.456px] top-[5.98px]" data-name="Frame">
      <Frame10 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[11.4px] top-[302.1px]">
      <div className="absolute bg-[#d9d9d9] h-[15.514px] left-[11.4px] rounded-[10px] top-[302.1px] w-[59.798px]" />
      <p className="absolute font-['Comfortaa:Medium',sans-serif] font-medium h-[7.757px] leading-[normal] left-[16.32px] text-[#5b7083] text-[10px] top-[305.55px] w-[87.649px]">On Hold</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[11.4px] top-[227.98px]">
      <div className="absolute bg-[#d9d9d9] h-[15.514px] left-[11.4px] rounded-[10px] top-[227.98px] w-[59.798px]" />
      <p className="absolute font-['Comfortaa:Medium',sans-serif] font-medium h-[7.757px] leading-[normal] left-[16.32px] text-[#5b7083] text-[10px] top-[231.43px] w-[87.649px]">On Hold</p>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[11.4px] top-[377.09px]">
      <div className="absolute bg-[#d9d9d9] h-[15.514px] left-[11.4px] rounded-[10px] top-[377.09px] w-[59.798px]" />
      <p className="absolute font-['Comfortaa:Medium',sans-serif] font-medium h-[7.757px] leading-[normal] left-[16.32px] text-[#5b7083] text-[10px] top-[380.53px] w-[87.649px]">On Hold</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[11.4px] top-[154.72px]">
      <div className="absolute bg-[#d9d9d9] h-[15.514px] left-[11.4px] rounded-[10px] top-[154.72px] w-[59.798px]" />
      <p className="absolute font-['Comfortaa:Medium',sans-serif] font-medium h-[7.757px] leading-[normal] left-[16.32px] text-[#5b7083] text-[10px] top-[158.17px] w-[87.649px]">On Hold</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[-0.07px] top-[-0.42px]">
      <div className="absolute bg-[#f7f9fa] h-[468px] left-[-0.07px] rounded-[13px] shadow-[0px_0px_1px_2px_rgba(0,0,0,0.25)] top-[-0.42px] w-[231px]" />
      <div className="absolute bg-white border-[0.2px] border-[rgba(0,0,0,0.7)] border-solid h-[68.088px] left-[4.03px] rounded-[10px] top-[296.93px] w-[222.809px]" />
      <Group16 />
      <div className="absolute bg-[#f6e6a5] h-[37.061px] left-[-0.07px] rounded-tl-[13px] rounded-tr-[13px] top-[-0.42px] w-[231px]" />
      <div className="absolute inset-[3.33%_5.65%_95.6%_86.13%]" data-name="glyph">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 5">
          <g id="glyph">
            <path d={svgPaths.p2988c800} fill="var(--fill-0, #0E1011)" />
            <path d={svgPaths.p3dfe1b00} fill="var(--fill-0, #0E1011)" />
            <path d={svgPaths.p15b224e0} fill="var(--fill-0, #0E1011)" />
          </g>
        </svg>
      </div>
      <p className="absolute font-['Poppins:Bold',sans-serif] h-[19px] leading-[normal] left-[19.93px] not-italic text-[#0f1419] text-[14px] top-[8.58px] w-[167px]">Waiting</p>
      <div className="absolute bg-white border-[0.2px] border-[rgba(0,0,0,0.7)] border-solid h-[103.425px] left-[4.03px] rounded-[10px] top-[39.23px] w-[222.809px]" />
      <div className="absolute bg-white border-[0.2px] border-[rgba(0,0,0,0.7)] border-solid h-[68.088px] left-[4.03px] rounded-[10px] top-[148.69px] w-[222.809px]" />
      <div className="absolute bg-white border-[0.2px] border-[rgba(0,0,0,0.7)] border-solid h-[68.088px] left-[4.03px] rounded-[10px] top-[222.81px] w-[222.809px]" />
      <Group14 />
      <div className="absolute bg-white border-[0.2px] border-[rgba(0,0,0,0.7)] border-solid h-[68.088px] left-[4.03px] rounded-[10px] top-[371.92px] w-[222.809px]" />
      <Group18 />
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[49.127px] justify-center leading-[0] left-[115.43px] not-italic text-[33px] text-black text-center top-[91.37px] translate-x-[-50%] translate-y-[-50%] w-[222.809px]">
        <p className="leading-[28px]">
          <span>{`Waiting list `}</span>
          <span className="font-['Comfortaa:Medium',sans-serif] font-medium tracking-[3.2px]">Queue</span>
        </p>
      </div>
      <Group10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-white bottom-[0.01px] left-0 overflow-clip right-[0.01px] top-0" data-name="Frame">
      <Group7 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[468px] overflow-clip relative shrink-0 w-[231px]" data-name="Frame">
      <Frame12 />
    </div>
  );
}

function AutoLayoutHorizontal5() {
  return (
    <div className="absolute bg-[#efefef] content-stretch flex items-start left-[-0.01px] right-[-0.01px] top-0" data-name="Auto Layout Horizontal">
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 grow h-[516px] min-h-px min-w-px relative shrink-0" data-name="Frame">
      <Frame11 />
      <AutoLayoutHorizontal5 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute left-1/2 size-[13.456px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p11397500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute left-[211.55px] overflow-clip size-[13.456px] top-[5.98px]" data-name="Frame">
      <Frame15 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[11.46px] top-[302.52px]">
      <div className="absolute bg-[#d9d9d9] h-[15.514px] left-[11.46px] rounded-[10px] top-[302.52px] w-[59.798px]" />
      <p className="absolute font-['Comfortaa:Medium',sans-serif] font-medium h-[7.757px] leading-[normal] left-[16.38px] text-[#5b7083] text-[10px] top-[305.97px] w-[87.649px]">Sketching</p>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[76.17px] top-[302.52px]">
      <div className="absolute bg-[#d9d9d9] h-[15.514px] left-[76.18px] rounded-[10px] top-[302.52px] w-[59.798px]" />
      <p className="absolute font-['Comfortaa:Medium',sans-serif] font-medium h-[7.757px] leading-[normal] left-[81.09px] text-[#5b7083] text-[10px] top-[305.97px] w-[87.649px]">Paid</p>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents left-[11.46px] top-[228.4px]">
      <div className="absolute bg-[#d9d9d9] h-[15.514px] left-[11.46px] rounded-[10px] top-[228.4px] w-[59.798px]" />
      <p className="absolute font-['Comfortaa:Medium',sans-serif] font-medium h-[7.757px] leading-[normal] left-[16.38px] text-[#5b7083] text-[10px] top-[231.85px] w-[87.649px]">Revising</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[76.17px] top-[228.4px]">
      <div className="absolute bg-[#d9d9d9] h-[15.514px] left-[76.18px] rounded-[10px] top-[228.4px] w-[59.798px]" />
      <p className="absolute font-['Comfortaa:Medium',sans-serif] font-medium h-[7.757px] leading-[normal] left-[81.09px] text-[#5b7083] text-[10px] top-[231.85px] w-[87.649px]">Paid</p>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents left-[11.46px] top-[377.5px]">
      <div className="absolute bg-[#d9d9d9] h-[15.514px] left-[11.46px] rounded-[10px] top-[377.5px] w-[59.798px]" />
      <p className="absolute font-['Comfortaa:Medium',sans-serif] font-medium h-[7.757px] leading-[normal] left-[16.38px] text-[#5b7083] text-[10px] top-[380.95px] w-[87.649px]">On Hold</p>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents left-[76.17px] top-[377.5px]">
      <div className="absolute bg-[#d9d9d9] h-[15.514px] left-[76.18px] rounded-[10px] top-[377.5px] w-[59.798px]" />
      <p className="absolute font-['Comfortaa:Medium',sans-serif] font-medium h-[7.757px] leading-[normal] left-[81.09px] text-[#5b7083] text-[10px] top-[380.95px] w-[87.649px]">Paid</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[11.46px] top-[155.14px]">
      <div className="absolute bg-[#d9d9d9] h-[15.514px] left-[11.46px] rounded-[10px] top-[155.14px] w-[59.798px]" />
      <p className="absolute font-['Comfortaa:Medium',sans-serif] font-medium h-[7.757px] leading-[normal] left-[16.38px] text-[#5b7083] text-[10px] top-[158.59px] w-[87.649px]">Finalizing</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[76.17px] top-[155.14px]">
      <div className="absolute bg-[#d9d9d9] h-[15.514px] left-[76.18px] rounded-[10px] top-[155.14px] w-[59.798px]" />
      <p className="absolute font-['Comfortaa:Medium',sans-serif] font-medium h-[7.757px] leading-[normal] left-[81.09px] text-[#5b7083] text-[10px] top-[158.59px] w-[87.649px]">Paid</p>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-[142px] top-[155px]">
      <div className="absolute bg-[#d9d9d9] h-[16px] left-[142px] rounded-[10px] top-[155px] w-[70px]" />
      <p className="absolute font-['Comfortaa:Medium',sans-serif] font-medium h-[7.757px] leading-[normal] left-[146.92px] text-[#5b7083] text-[10px] top-[158.45px] w-[87.649px]">Rush / Prio</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[-0.01px] top-0">
      <div className="absolute bg-[#f7f9fa] h-[468px] left-[-0.01px] rounded-[13px] shadow-[0px_0px_1px_2px_rgba(0,0,0,0.25)] top-0 w-[231px]" />
      <div className="absolute bg-white border-[0.2px] border-[rgba(0,0,0,0.7)] border-solid h-[68.088px] left-[4.09px] rounded-[10px] top-[297.35px] w-[222.809px]" />
      <Group21 />
      <Group17 />
      <div className="absolute bg-[#a5d2f6] h-[37.061px] left-[-0.01px] rounded-tl-[13px] rounded-tr-[13px] top-0 w-[231px]" />
      <div className="absolute inset-[3.45%_5.63%_95.47%_86.15%]" data-name="glyph">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 8">
          <g id="glyph">
            <path d={svgPaths.p359abd00} fill="var(--fill-0, #0E1011)" />
            <path d={svgPaths.p2c71aa80} fill="var(--fill-0, #0E1011)" />
            <path d={svgPaths.p1a6b9280} fill="var(--fill-0, #0E1011)" />
          </g>
        </svg>
      </div>
      <p className="absolute font-['Poppins:Bold',sans-serif] h-[19px] leading-[normal] left-[19.99px] not-italic text-[#0f1419] text-[14px] top-[9px] w-[167px]">In Progress</p>
      <div className="absolute bg-white border-[0.2px] border-[rgba(0,0,0,0.7)] border-solid h-[103.425px] left-[4.09px] rounded-[10px] top-[39.65px] w-[222.809px]" />
      <div className="absolute bg-white border-[0.2px] border-[rgba(0,0,0,0.7)] border-solid h-[68.088px] left-[4.09px] rounded-[10px] top-[149.1px] w-[222.809px]" />
      <div className="absolute bg-white border-[0.2px] border-[rgba(0,0,0,0.7)] border-solid h-[68.088px] left-[4.09px] rounded-[10px] top-[223.23px] w-[222.809px]" />
      <Group22 />
      <Group15 />
      <div className="absolute bg-white border-[0.2px] border-[rgba(0,0,0,0.7)] border-solid h-[68.088px] left-[4.09px] rounded-[10px] top-[372.33px] w-[222.809px]" />
      <Group23 />
      <Group19 />
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[49.127px] justify-center leading-[28px] left-[115.49px] not-italic text-[33px] text-black text-center top-[91.79px] translate-x-[-50%] translate-y-[-50%] w-[222.809px]">
        <p className="mb-0">In</p>
        <p className="font-['Comfortaa:Medium',sans-serif] font-medium tracking-[3.2px]">Progress</p>
      </div>
      <Group11 />
      <Group13 />
      <Group20 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute bg-white inset-[-0.42px_0.04px_-232.58px_-0.04px] overflow-clip" data-name="Frame">
      <Group8 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[468px] overflow-clip relative shrink-0 w-[231px]" data-name="Frame">
      <Frame17 />
    </div>
  );
}

function AutoLayoutHorizontal6() {
  return (
    <div className="absolute bg-[#efefef] content-stretch flex items-start left-0 right-0 top-0" data-name="Auto Layout Horizontal">
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="basis-0 grow h-[468px] min-h-px min-w-px relative shrink-0" data-name="Frame">
      <Frame16 />
      <AutoLayoutHorizontal6 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute left-1/2 size-[13.456px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p2a990780} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute left-[211.55px] overflow-clip size-[13.456px] top-[5.98px]" data-name="Frame">
      <Frame20 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents left-[11.01px] top-[303px]">
      <div className="absolute bg-[#d9d9d9] h-[15px] left-[11.01px] rounded-[10px] top-[303px] w-[69px]" />
      <p className="absolute font-['Comfortaa:Medium',sans-serif] font-medium h-[7.757px] leading-[normal] left-[16.38px] text-[#5b7083] text-[10px] top-[305.97px] w-[87.649px]">Completed</p>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents left-[11.01px] top-[228px]">
      <div className="absolute bg-[#d9d9d9] h-[16px] left-[11.01px] rounded-[10px] top-[228px] w-[69px]" />
      <p className="absolute font-['Comfortaa:Medium',sans-serif] font-medium h-[7.757px] leading-[normal] left-[16.38px] text-[#5b7083] text-[10px] top-[231.85px] w-[87.649px]">Completed</p>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents left-[11.01px] top-[378px]">
      <div className="absolute bg-[#d9d9d9] h-[15px] left-[11.01px] rounded-[10px] top-[378px] w-[69px]" />
      <p className="absolute font-['Comfortaa:Medium',sans-serif] font-medium h-[7.757px] leading-[normal] left-[16.38px] text-[#5b7083] text-[10px] top-[380.95px] w-[87.649px]">{`Completed `}</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[11.01px] top-[155px]">
      <div className="absolute bg-[#d9d9d9] h-[16px] left-[11.01px] rounded-[10px] top-[155px] w-[69px]" />
      <p className="absolute font-['Comfortaa:Medium',sans-serif] font-medium h-[7.757px] leading-[normal] left-[16.38px] text-[#5b7083] text-[10px] top-[158.59px] w-[87.649px]">Completed</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#f7f9fa] h-[468px] left-0 rounded-[13px] shadow-[0px_0px_1px_2px_rgba(0,0,0,0.25)] top-0 w-[231px]" />
      <div className="absolute bg-white border-[0.2px] border-[rgba(0,0,0,0.7)] border-solid h-[68.088px] left-[4.1px] rounded-[10px] top-[297.35px] w-[222.809px]" />
      <Group24 />
      <div className="absolute bg-[#b3f6a5] h-[37.061px] left-0 rounded-tl-[13px] rounded-tr-[13px] top-0 w-[231px]" />
      <div className="absolute inset-[2.28%_5.63%_97.01%_86.15%]" data-name="glyph">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 5">
          <g id="glyph">
            <path d={svgPaths.p2988c800} fill="var(--fill-0, #0E1011)" />
            <path d={svgPaths.p3dfe1b00} fill="var(--fill-0, #0E1011)" />
            <path d={svgPaths.p15b224e0} fill="var(--fill-0, #0E1011)" />
          </g>
        </svg>
      </div>
      <p className="absolute font-['Poppins:Bold',sans-serif] h-[19px] leading-[normal] left-[20px] not-italic text-[#0f1419] text-[14px] top-[9px] w-[167px]">Completed</p>
      <div className="absolute bg-white border-[0.2px] border-[rgba(0,0,0,0.7)] border-solid h-[103.425px] left-[4.1px] rounded-[10px] top-[39.65px] w-[222.809px]" />
      <div className="absolute bg-white border-[0.2px] border-[rgba(0,0,0,0.7)] border-solid h-[68.088px] left-[4.1px] rounded-[10px] top-[149.1px] w-[222.809px]" />
      <div className="absolute bg-white border-[0.2px] border-[rgba(0,0,0,0.7)] border-solid h-[68.088px] left-[4.1px] rounded-[10px] top-[223.23px] w-[222.809px]" />
      <Group25 />
      <div className="absolute bg-white border-[0.2px] border-[rgba(0,0,0,0.7)] border-solid h-[68.088px] left-[4.1px] rounded-[10px] top-[372.33px] w-[222.809px]" />
      <Group26 />
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[49.127px] justify-center leading-[0] left-[115.5px] not-italic text-[33px] text-black text-center top-[91.79px] translate-x-[-50%] translate-y-[-50%] w-[222.809px]">
        <p className="leading-[28px]">Completed</p>
      </div>
      <Group12 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute bg-white bottom-[-234px] left-[-0.01px] overflow-clip right-[0.01px] top-0" data-name="Frame">
      <Group9 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-[468px] overflow-clip relative shrink-0 w-[231px]" data-name="Frame">
      <Frame22 />
    </div>
  );
}

function AutoLayoutHorizontal7() {
  return (
    <div className="absolute bg-[#efefef] content-stretch flex h-[468px] items-start left-[-0.02px] right-[0.01px] top-[-0.42px]" data-name="Auto Layout Horizontal">
      <Frame23 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="basis-0 grow h-[468px] min-h-px min-w-px relative shrink-0" data-name="Frame">
      <Frame21 />
      <AutoLayoutHorizontal7 />
    </div>
  );
}

function AutoLayoutHorizontal8() {
  return (
    <div className="content-stretch flex gap-[2.99px] items-start relative shrink-0 w-[698.947px]" data-name="Auto Layout Horizontal">
      <Frame14 />
      <Frame19 />
      <Frame24 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute left-1/2 size-[13.456px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p3239c500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute left-[211.55px] overflow-clip size-[13.456px] top-[5.98px]" data-name="Frame">
      <Frame25 />
    </div>
  );
}

function Frame27() {
  return <div className="absolute bg-[#c4c4c4] inset-0" data-name="Frame" />;
}

function Frame28() {
  return (
    <div className="overflow-clip relative shrink-0 size-[230.989px]" data-name="Frame">
      <Frame27 />
    </div>
  );
}

function AutoLayoutHorizontal9() {
  return (
    <div className="absolute bg-[#efefef] content-stretch flex items-start left-0 right-0 top-0" data-name="Auto Layout Horizontal">
      <Frame28 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="basis-0 grow h-[230.989px] min-h-px min-w-px relative shrink-0" data-name="Frame">
      <Frame26 />
      <AutoLayoutHorizontal9 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute left-1/2 size-[13.456px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p11397500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute left-[211.55px] overflow-clip size-[13.456px] top-[5.98px]" data-name="Frame">
      <Frame30 />
    </div>
  );
}

function Frame32() {
  return <div className="absolute bg-[#c4c4c4] inset-0" data-name="Frame" />;
}

function Frame33() {
  return (
    <div className="overflow-clip relative shrink-0 size-[230.989px]" data-name="Frame">
      <Frame32 />
    </div>
  );
}

function AutoLayoutHorizontal10() {
  return (
    <div className="absolute bg-[#efefef] content-stretch flex items-start left-0 right-0 top-0" data-name="Auto Layout Horizontal">
      <Frame33 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="basis-0 grow h-[230.989px] min-h-px min-w-px relative shrink-0" data-name="Frame">
      <Frame31 />
      <AutoLayoutHorizontal10 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute left-1/2 size-[13.456px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p2a990780} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute left-[211.55px] overflow-clip size-[13.456px] top-[5.98px]" data-name="Frame">
      <Frame35 />
    </div>
  );
}

function Frame37() {
  return <div className="absolute bg-[#c4c4c4] inset-0" data-name="Frame" />;
}

function Frame38() {
  return (
    <div className="overflow-clip relative shrink-0 size-[230.989px]" data-name="Frame">
      <Frame37 />
    </div>
  );
}

function AutoLayoutHorizontal11() {
  return (
    <div className="absolute bg-[#efefef] content-stretch flex items-start left-0 right-0 top-0" data-name="Auto Layout Horizontal">
      <Frame38 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="basis-0 grow h-[230.989px] min-h-px min-w-px relative shrink-0" data-name="Frame">
      <Frame36 />
      <AutoLayoutHorizontal11 />
    </div>
  );
}

function AutoLayoutHorizontal12() {
  return (
    <div className="content-stretch flex gap-[2.99px] items-start relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame29 />
      <Frame34 />
      <Frame39 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute left-1/2 size-[13.456px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p3d1a7000} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute left-[211.55px] overflow-clip size-[13.456px] top-[5.98px]" data-name="Frame">
      <Frame40 />
    </div>
  );
}

function Frame42() {
  return <div className="absolute bg-[#c4c4c4] inset-0" data-name="Frame" />;
}

function Frame43() {
  return (
    <div className="overflow-clip relative shrink-0 size-[230.989px]" data-name="Frame">
      <Frame42 />
    </div>
  );
}

function AutoLayoutHorizontal13() {
  return (
    <div className="absolute bg-[#efefef] content-stretch flex items-start left-0 right-0 top-0" data-name="Auto Layout Horizontal">
      <Frame43 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="basis-0 grow h-[230.989px] min-h-px min-w-px relative shrink-0" data-name="Frame">
      <Frame41 />
      <AutoLayoutHorizontal13 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute left-1/2 size-[13.456px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p2c67c200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute left-[211.55px] overflow-clip size-[13.456px] top-[5.98px]" data-name="Frame">
      <Frame45 />
    </div>
  );
}

function Frame47() {
  return <div className="absolute bg-[#c4c4c4] inset-0" data-name="Frame" />;
}

function Frame48() {
  return (
    <div className="overflow-clip relative shrink-0 size-[230.989px]" data-name="Frame">
      <Frame47 />
    </div>
  );
}

function AutoLayoutHorizontal14() {
  return (
    <div className="absolute bg-[#efefef] content-stretch flex items-start left-0 right-0 top-0" data-name="Auto Layout Horizontal">
      <Frame48 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="basis-0 grow h-[230.989px] min-h-px min-w-px relative shrink-0" data-name="Frame">
      <Frame46 />
      <AutoLayoutHorizontal14 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute left-1/2 size-[13.456px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p1a8d1900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute left-[211.55px] overflow-clip size-[13.456px] top-[5.98px]" data-name="Frame">
      <Frame50 />
    </div>
  );
}

function Frame52() {
  return <div className="absolute bg-[#c4c4c4] inset-0" data-name="Frame" />;
}

function Frame53() {
  return (
    <div className="overflow-clip relative shrink-0 size-[230.989px]" data-name="Frame">
      <Frame52 />
    </div>
  );
}

function AutoLayoutHorizontal15() {
  return (
    <div className="absolute bg-[#efefef] content-stretch flex items-start left-0 right-0 top-0" data-name="Auto Layout Horizontal">
      <Frame53 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="basis-0 grow h-[230.989px] min-h-px min-w-px relative shrink-0" data-name="Frame">
      <Frame51 />
      <AutoLayoutHorizontal15 />
    </div>
  );
}

function AutoLayoutHorizontal16() {
  return (
    <div className="content-stretch flex gap-[2.99px] items-start relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame44 />
      <Frame49 />
      <Frame54 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="absolute left-1/2 size-[13.456px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p2269ea00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute left-[211.55px] overflow-clip size-[13.456px] top-[5.98px]" data-name="Frame">
      <Frame55 />
    </div>
  );
}

function Frame57() {
  return <div className="absolute bg-[#c4c4c4] inset-0" data-name="Frame" />;
}

function Frame58() {
  return (
    <div className="overflow-clip relative shrink-0 size-[230.989px]" data-name="Frame">
      <Frame57 />
    </div>
  );
}

function AutoLayoutHorizontal17() {
  return (
    <div className="absolute bg-[#efefef] content-stretch flex items-start left-0 right-0 top-0" data-name="Auto Layout Horizontal">
      <Frame58 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="h-[460.948px] relative shrink-0 w-[230.989px]" data-name="Frame">
      <Frame56 />
      <AutoLayoutHorizontal17 />
    </div>
  );
}

function AutoLayoutVertical() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[699.196px]" data-name="Auto Layout Vertical">
      <AutoLayoutHorizontal8 />
      <AutoLayoutHorizontal12 />
      <AutoLayoutHorizontal16 />
      <Frame59 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[17px] items-start px-[15px] py-0 relative shrink-0" data-name="Frame">
      <Profile />
      <Frame9 />
      <AutoLayoutVertical />
    </div>
  );
}

function AutoLayoutHorizontal18() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[1074.59px] items-center left-[calc(16.67%+54px)] px-[45.882px] py-0 top-[29px] w-[780px]" data-name="Auto Layout Horizontal">
      <Frame60 />
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

function AutoLayoutHorizontal19() {
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

function Frame61() {
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
      <Frame61 />
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

function Frame62() {
  return (
    <div className="box-border content-stretch flex gap-[37.5px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <AutoLayoutVertical1 />
      </div>
      <ExploreBtn />
    </div>
  );
}

function Frame63() {
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
      <Frame63 />
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

function Frame64() {
  return (
    <div className="box-border content-stretch flex gap-[37.5px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <AutoLayoutVertical2 />
      </div>
      <ExploreBtn1 />
    </div>
  );
}

function Frame65() {
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
      <Frame65 />
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

function Frame66() {
  return (
    <div className="box-border content-stretch flex gap-[37.5px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <AutoLayoutVertical3 />
      </div>
      <ExploreBtn2 />
    </div>
  );
}

function Frame67() {
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
      <Frame67 />
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

function Frame68() {
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
      <Frame62 />
      <Frame64 />
      <Frame66 />
      <Frame68 />
    </div>
  );
}

function AutoLayoutHorizontal20() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[331px]" data-name="Auto Layout Horizontal">
      <AutoLayoutVertical5 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-center left-[-16px] top-[122px] w-[351px]" data-name="Frame">
      <AutoLayoutHorizontal19 />
      <AutoLayoutHorizontal20 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="absolute h-[600px] left-[19px] right-[19px] top-[-3px]" data-name="Frame">
      <Frame69 />
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
      <Frame70 />
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

function Frame79() {
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

function Frame71() {
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

function Frame72() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame71 />
    </div>
  );
}

function AutoLayoutHorizontal21() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[2.359px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Home</p>
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
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[122.641px] py-[12px] relative w-full">
          <Frame72 />
          <AutoLayoutHorizontal22 />
        </div>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal24() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.016px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Cart and Orders</p>
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
          <AutoLayoutHorizontal25 />
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

function AutoLayoutHorizontal27() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.016px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">My Payments</p>
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
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[120.984px] py-[12px] relative w-full">
          <LightThemeListsDefault />
          <AutoLayoutHorizontal28 />
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

function AutoLayoutHorizontal30() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.031px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Messages</p>
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
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[98.969px] py-[12px] relative w-full">
          <LightThemeMessagesDefault />
          <AutoLayoutHorizontal31 />
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

function AutoLayoutHorizontal33() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[3.578px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Notifications</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal34() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal33 />
    </div>
  );
}

function AutoLayoutHorizontal35() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[78.422px] py-[12px] relative w-full">
          <LightThemeNotificationsDefault />
          <AutoLayoutHorizontal34 />
        </div>
      </div>
    </div>
  );
}

function Frame73() {
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

function Frame74() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame73 />
    </div>
  );
}

function AutoLayoutHorizontal36() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[1.766px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Create</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal37() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal36 />
    </div>
  );
}

function AutoLayoutHorizontal38() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[122.234px] py-[12px] relative w-full">
          <Frame74 />
          <AutoLayoutHorizontal37 />
        </div>
      </div>
    </div>
  );
}

function Frame75() {
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

function Frame76() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame75 />
    </div>
  );
}

function AutoLayoutHorizontal39() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.672px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">More</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal40() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal39 />
    </div>
  );
}

function AutoLayoutHorizontal41() {
  return (
    <div className="box-border content-stretch flex items-start pl-[12px] pr-[130.328px] py-[12px] relative rounded-[24px] shrink-0" data-name="Auto Layout Horizontal">
      <Frame76 />
      <AutoLayoutHorizontal40 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[535px] items-start left-[12px] px-0 py-[4px] right-[12px] top-[100px]" data-name="Frame">
      <AutoLayoutHorizontal23 />
      <AutoLayoutHorizontal26 />
      <AutoLayoutHorizontal29 />
      <AutoLayoutHorizontal32 />
      <AutoLayoutHorizontal35 />
      <AutoLayoutHorizontal38 />
      <AutoLayoutHorizontal41 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="absolute bg-white h-[616px] left-0 top-0 w-[244px]" data-name="Frame">
      <Frame79 />
      <Frame77 />
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
      <Frame78 />
    </div>
  );
}

export default function OtherProfile() {
  return (
    <div className="bg-white relative size-full" data-name="OTHER PROFILE">
      <AutoLayoutHorizontal18 />
      <RightPanel />
      <LeftPanel />
    </div>
  );
}