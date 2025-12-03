import svgPaths from "./svg-a1e1wd8rwx";
import imgProfilePicture from "figma:asset/1c4161bf20bdb41ac0700c17ed74cd91f3a6a17c.png";
import imgCart from "figma:asset/3804975201d933a8a80d186f5faf1c1caca3d0f7.png";
import imgFrame894 from "figma:asset/65caa91ef04d9df4e50181a3f247d5f914fcfbb7.png";
import imgFrame895 from "figma:asset/bd78236bb871aefbe4565e408b43dd5d848dc18c.png";
import imgFrame896 from "figma:asset/c021324965015ae0b323208029acb3d544d615cb.png";
import imgFrame897 from "figma:asset/03ed041a5dfd5d622d5cba0d50e72cc32f8d6ff4.png";
import imgFrame919 from "figma:asset/fc9b8204da0b62fd96729311e9c9b032adcf8e2f.png";
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

function Frame123() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Following />
      <Followers />
    </div>
  );
}

function Frame122() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[83px] items-start left-[13.6px] top-[270px] w-[686px]">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#5b7083] text-[16px] tracking-[-0.32px] w-[146px]">
        <p className="leading-[normal]">@etharial</p>
      </div>
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0f1419] text-[16px] tracking-[-0.24px] w-[569px]">artist + web dev !</p>
      <Frame4 />
      <Frame123 />
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

function Frame125() {
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

function Frame124() {
  return (
    <div className="content-stretch flex gap-[6px] h-[29px] items-center relative shrink-0">
      <LoginBtn />
      <LoginBtn1 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Frame125 />
      <Frame124 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="absolute content-stretch flex h-[27px] items-center justify-between left-[157.6px] top-[211px] w-[547px]">
      <Frame121 />
    </div>
  );
}

function Profile() {
  return (
    <div className="h-[399px] relative rounded-[10px] shrink-0 w-[718.119px]" data-name="Profile">
      <Frame122 />
      <Cover />
      <Avatar />
      <Frame120 />
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
    <div className="box-border content-stretch flex gap-[3.738px] isolate items-center pl-0 pr-[0.327px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame1 />
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8e8e8e] text-[10px] text-center text-nowrap tracking-[0.7475px] uppercase z-[1]">
        <p className="leading-[13.456px] whitespace-pre">posts</p>
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
          <path d={svgPaths.p16f1d300} id="Vector" stroke="var(--stroke-0, #262626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.747537" />
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
    <div className="box-border content-stretch flex gap-[5.233px] isolate items-center pl-0 pr-[0.584px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame6 />
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[10px] text-center text-neutral-800 text-nowrap tracking-[0.7475px] uppercase z-[1]">
        <p className="leading-[13.456px] whitespace-pre">shop</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal3() {
  return (
    <div className="box-border content-stretch flex items-start pb-[12.334px] pt-[13.082px] px-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div aria-hidden="true" className="absolute border-[0.748px_0px_0px] border-neutral-800 border-solid inset-0 pointer-events-none" />
      <AutoLayoutHorizontal2 />
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
      <AutoLayoutHorizontal1 />
      <AutoLayoutHorizontal3 />
      <AutoLayoutHorizontal4 />
    </div>
  );
}

function FillHeart() {
  return (
    <div className="relative shrink-0 size-[20.315px]" data-name="Fill Heart">
      <div className="absolute bottom-[-67.36%] left-0 right-[-67.36%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
          <g id="Fill Heart">
            <circle cx="17" cy="17" fill="var(--fill-0, white)" id="Ellipse 12" r="17" />
            <g id="heart small">
              <path d={svgPaths.p37919a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[20.83%_9.95%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-3.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
          <g id="Group">
            <path d={svgPaths.p26f6b400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p55999c0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function QuickView() {
  return (
    <div className="absolute inset-[24.61%_-42.75%_-42.75%_24.61%] overflow-clip" data-name="Quick View">
      <Group3 />
    </div>
  );
}

function FillEye() {
  return (
    <div className="relative shrink-0 size-[20.315px]" data-name="Fill Eye">
      <div className="absolute bottom-[-67.36%] left-0 right-[-67.36%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
          <circle cx="17" cy="17" fill="var(--fill-0, white)" id="Ellipse 13" r="17" />
        </svg>
      </div>
      <QuickView />
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.78px] items-start right-[7.5px] top-[7.17px]">
      <FillHeart />
      <FillEye />
    </div>
  );
}

function Frame62() {
  return <div className="absolute h-[107.55px] left-[calc(50%+0.34px)] overflow-clip top-[calc(50%+0.31px)] translate-x-[-50%] translate-y-[-50%] w-[113.525px]" />;
}

function Cart() {
  return (
    <div className="bg-[red] h-[149.375px] overflow-clip relative rounded-[8px] shrink-0 w-[161.325px]" data-name="Cart">
      <Frame31 />
      <Frame62 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[7.17px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium','Noto_Sans:Medium',sans-serif] leading-[14.34px] relative shrink-0 text-[#428dfe] text-[9.56px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        ₱
      </p>
    </div>
  );
}

function ThreeStar() {
  return (
    <div className="h-[20px] relative shrink-0 w-[100px]" data-name="Three Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 20">
        <g id="Three Star">
          <path d={svgPaths.p2a639d30} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.pbb48200} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p170d0200} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p379b8d00} fill="var(--fill-0, black)" id="Vector_4" opacity="0.25" />
          <path d={svgPaths.p23538a00} fill="var(--fill-0, black)" id="Vector_5" opacity="0.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[4.78px] items-start relative shrink-0">
      <ThreeStar />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[11.95px] leading-[12.548px] not-italic opacity-50 relative shrink-0 text-[8.365px] text-black w-[19.12px]">(35)</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[4.78px] items-center relative shrink-0">
      <Frame30 />
      <Frame29 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[4.78px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[14.34px] not-italic relative shrink-0 text-[9.56px] text-black text-nowrap whitespace-pre">PRODUCT/SERVICE 1</p>
      <Frame36 />
    </div>
  );
}

function Cart1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[9.56px] items-start relative shrink-0" data-name="Cart">
      <Cart />
      <Frame37 />
    </div>
  );
}

function FillHeart1() {
  return (
    <div className="relative shrink-0 size-[20.315px]" data-name="Fill Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="Fill Heart">
          <circle cx="10.1575" cy="10.1575" fill="var(--fill-0, white)" id="Ellipse 12" r="10.1575" />
          <g id="heart small">
            <path d={svgPaths.p25478d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.896252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[20.83%_9.95%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-3.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10">
          <g id="Group">
            <path d={svgPaths.p35708b00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.896252" />
            <path d={svgPaths.p38e7dd80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.896252" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function QuickView1() {
  return (
    <div className="absolute inset-[14.71%] overflow-clip" data-name="Quick View">
      <Group4 />
    </div>
  );
}

function FillEye1() {
  return (
    <div className="relative shrink-0 size-[20.315px]" data-name="Fill Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <circle cx="10.1575" cy="10.1575" fill="var(--fill-0, white)" id="Ellipse 13" r="10.1575" />
      </svg>
      <QuickView1 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.78px] items-start right-[7.5px] top-[7.17px]">
      <FillHeart1 />
      <FillEye1 />
    </div>
  );
}

function Frame63() {
  return <div className="absolute h-[107.55px] left-[calc(50%-2.05px)] overflow-clip top-[calc(50%-11.64px)] translate-x-[-50%] translate-y-[-50%] w-[113.525px]" />;
}

function Cart2() {
  return (
    <div className="bg-[red] h-[149.375px] overflow-clip relative rounded-[8px] shrink-0 w-[161.325px]" data-name="Cart">
      <div className="absolute bg-black bottom-[0.38px] h-[24.498px] left-0 right-0 rounded-bl-[2.39px] rounded-br-[2.39px]" />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[14.34px] left-[calc(50%-28.34px)] not-italic text-[9.56px] text-nowrap text-white top-[calc(50%+55.28px)] whitespace-pre">Add To Cart</p>
      <Frame34 />
      <Frame63 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[7.17px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium','Noto_Sans:Medium',sans-serif] leading-[14.34px] relative shrink-0 text-[#428dfe] text-[9.56px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        ₱
      </p>
    </div>
  );
}

function FourStar() {
  return (
    <div className="h-[11.95px] relative shrink-0 w-[59.75px]" data-name="Four Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 12">
        <g id="Four Star">
          <path d={svgPaths.p3659b780} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.p37c65380} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p32fbf80} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p1f6fd780} fill="var(--fill-0, #FFAD33)" id="Vector_4" />
          <path d={svgPaths.p159bd300} fill="var(--fill-0, black)" id="Vector_5" opacity="0.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[4.78px] items-start relative shrink-0">
      <FourStar />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[11.95px] leading-[12.548px] not-italic opacity-50 relative shrink-0 text-[8.365px] text-black w-[19.12px]">(95)</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[4.78px] items-center relative shrink-0">
      <Frame35 />
      <Frame39 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[4.78px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[14.34px] not-italic relative shrink-0 text-[9.56px] text-black text-nowrap whitespace-pre">PRODUCT/SERVICE 2</p>
      <Frame40 />
    </div>
  );
}

function Cart3() {
  return (
    <div className="content-stretch flex flex-col gap-[9.56px] items-start relative shrink-0" data-name="Cart">
      <Cart2 />
      <Frame41 />
    </div>
  );
}

function FillHeart2() {
  return (
    <div className="relative shrink-0 size-[20.315px]" data-name="Fill Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="Fill Heart">
          <circle cx="10.1575" cy="10.1575" fill="var(--fill-0, white)" id="Ellipse 12" r="10.1575" />
          <g id="heart small">
            <path d={svgPaths.p25478d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.896252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[20.83%_9.95%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-3.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10">
          <g id="Group">
            <path d={svgPaths.p35708b00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.896252" />
            <path d={svgPaths.p38e7dd80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.896252" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function QuickView2() {
  return (
    <div className="absolute inset-[14.71%] overflow-clip" data-name="Quick View">
      <Group5 />
    </div>
  );
}

function FillEye2() {
  return (
    <div className="relative shrink-0 size-[20.315px]" data-name="Fill Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <circle cx="10.1575" cy="10.1575" fill="var(--fill-0, white)" id="Ellipse 13" r="10.1575" />
      </svg>
      <QuickView2 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.78px] items-start right-[7.5px] top-[7.17px]">
      <FillHeart2 />
      <FillEye2 />
    </div>
  );
}

function Frame64() {
  return <div className="absolute h-[107.55px] left-[calc(50%+0.34px)] overflow-clip top-[calc(50%+0.31px)] translate-x-[-50%] translate-y-[-50%] w-[113.525px]" />;
}

function Cart4() {
  return (
    <div className="bg-[red] h-[149.375px] overflow-clip relative rounded-[8px] shrink-0 w-[161.325px]" data-name="Cart">
      <Frame42 />
      <Frame64 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[7.17px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium','Noto_Sans:Medium',sans-serif] leading-[14.34px] relative shrink-0 text-[#428dfe] text-[9.56px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        ₱
      </p>
    </div>
  );
}

function FiveStar() {
  return (
    <div className="h-[11.95px] relative shrink-0 w-[59.75px]" data-name="Five star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 12">
        <g id="Five star">
          <path d={svgPaths.p3659b780} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.p37c65380} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p32fbf80} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p1f6fd780} fill="var(--fill-0, #FFAD33)" id="Vector_4" />
          <path d={svgPaths.p159bd300} fill="var(--fill-0, #FFAD33)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[4.78px] items-start relative shrink-0">
      <FiveStar />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[11.95px] leading-[12.548px] not-italic opacity-50 relative shrink-0 text-[8.365px] text-black w-[23.9px]">(325)</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[4.78px] items-center relative shrink-0">
      <Frame43 />
      <Frame44 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[4.78px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[14.34px] not-italic relative shrink-0 text-[9.56px] text-black text-nowrap whitespace-pre">PRODUCT/SERVICE 3</p>
      <Frame45 />
    </div>
  );
}

function Cart5() {
  return (
    <div className="content-stretch flex flex-col gap-[9.56px] items-start relative shrink-0" data-name="Cart">
      <Cart4 />
      <Frame46 />
    </div>
  );
}

function FillHeart3() {
  return (
    <div className="relative shrink-0 size-[20.315px]" data-name="Fill Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="Fill Heart">
          <circle cx="10.1575" cy="10.1575" fill="var(--fill-0, white)" id="Ellipse 12" r="10.1575" />
          <g id="heart small">
            <path d={svgPaths.p25478d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.896252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[20.83%_9.95%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-3.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10">
          <g id="Group">
            <path d={svgPaths.p35708b00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.896252" />
            <path d={svgPaths.p38e7dd80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.896252" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function QuickView3() {
  return (
    <div className="absolute inset-[14.71%] overflow-clip" data-name="Quick View">
      <Group6 />
    </div>
  );
}

function FillEye3() {
  return (
    <div className="relative shrink-0 size-[20.315px]" data-name="Fill Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <circle cx="10.1575" cy="10.1575" fill="var(--fill-0, white)" id="Ellipse 13" r="10.1575" />
      </svg>
      <QuickView3 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.78px] items-start right-[7.17px] top-[7.17px]">
      <FillHeart3 />
      <FillEye3 />
    </div>
  );
}

function Frame65() {
  return <div className="absolute h-[107.55px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[113.525px]" />;
}

function Cart6() {
  return (
    <div className="h-[149.375px] overflow-clip relative rounded-[8px] shrink-0 w-[161.325px]" data-name="Cart">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgCart} />
      <Frame47 />
      <Frame65 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[7.17px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium','Noto_Sans:Medium',sans-serif] leading-[14.34px] relative shrink-0 text-[#428dfe] text-[9.56px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        ₱
      </p>
    </div>
  );
}

function FourStar1() {
  return (
    <div className="h-[11.95px] relative shrink-0 w-[59.75px]" data-name="Four Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 12">
        <g id="Four Star">
          <path d={svgPaths.p3659b780} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.p37c65380} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p32fbf80} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p1f6fd780} fill="var(--fill-0, #FFAD33)" id="Vector_4" />
          <path d={svgPaths.p159bd300} fill="var(--fill-0, black)" id="Vector_5" opacity="0.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[4.78px] items-start relative shrink-0">
      <FourStar1 />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[11.95px] leading-[12.548px] not-italic opacity-50 relative shrink-0 text-[8.365px] text-black w-[23.9px]">(145)</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[4.78px] items-center relative shrink-0">
      <Frame48 />
      <Frame49 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[4.78px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[14.34px] not-italic relative shrink-0 text-[9.56px] text-black text-nowrap whitespace-pre">PRODUCT/SERVICE 4</p>
      <Frame50 />
    </div>
  );
}

function CartWithFlatDiscountCartWithFlatDiscountCartWithFlatDiscountCartWithFlatDiscountCartProperty() {
  return (
    <div className="content-stretch flex flex-col gap-[9.56px] items-start relative shrink-0" data-name="Cart With Flat Discount /Cart With Flat Discount/Cart With Flat Discount/Cart With Flat Discount/Cart/Property 25">
      <Cart6 />
      <Frame51 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[17.925px] items-start relative shrink-0">
      <Cart1 />
      <Cart3 />
      <Cart5 />
      <CartWithFlatDiscountCartWithFlatDiscountCartWithFlatDiscountCartWithFlatDiscountCartProperty />
    </div>
  );
}

function FillHeart4() {
  return (
    <div className="relative shrink-0 size-[20.315px]" data-name="Fill Heart">
      <div className="absolute bottom-[-67.36%] left-0 right-[-67.36%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
          <g id="Fill Heart">
            <circle cx="17" cy="17" fill="var(--fill-0, white)" id="Ellipse 12" r="17" />
            <g id="heart small">
              <path d={svgPaths.p37919a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[20.83%_9.95%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-3.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
          <g id="Group">
            <path d={svgPaths.p26f6b400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p55999c0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function QuickView4() {
  return (
    <div className="absolute inset-[24.61%_-42.75%_-42.75%_24.61%] overflow-clip" data-name="Quick View">
      <Group7 />
    </div>
  );
}

function FillEye4() {
  return (
    <div className="relative shrink-0 size-[20.315px]" data-name="Fill Eye">
      <div className="absolute bottom-[-67.36%] left-0 right-[-67.36%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
          <circle cx="17" cy="17" fill="var(--fill-0, white)" id="Ellipse 13" r="17" />
        </svg>
      </div>
      <QuickView4 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.78px] items-start right-[7.5px] top-[7.17px]">
      <FillHeart4 />
      <FillEye4 />
    </div>
  );
}

function Frame66() {
  return <div className="absolute h-[107.55px] left-[calc(50%+0.34px)] overflow-clip top-[calc(50%+0.31px)] translate-x-[-50%] translate-y-[-50%] w-[113.525px]" />;
}

function Cart7() {
  return (
    <div className="bg-[red] h-[149.375px] overflow-clip relative rounded-[8px] shrink-0 w-[161.325px]" data-name="Cart">
      <Frame52 />
      <Frame66 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[7.17px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium','Noto_Sans:Medium',sans-serif] leading-[14.34px] relative shrink-0 text-[#428dfe] text-[9.56px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        ₱
      </p>
    </div>
  );
}

function ThreeStar1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[100px]" data-name="Three Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 20">
        <g id="Three Star">
          <path d={svgPaths.p2a639d30} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.pbb48200} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p170d0200} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p379b8d00} fill="var(--fill-0, black)" id="Vector_4" opacity="0.25" />
          <path d={svgPaths.p23538a00} fill="var(--fill-0, black)" id="Vector_5" opacity="0.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[4.78px] items-start relative shrink-0">
      <ThreeStar1 />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[11.95px] leading-[12.548px] not-italic opacity-50 relative shrink-0 text-[8.365px] text-black w-[19.12px]">(35)</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[4.78px] items-center relative shrink-0">
      <Frame53 />
      <Frame54 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[4.78px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[14.34px] not-italic relative shrink-0 text-[9.56px] text-black text-nowrap whitespace-pre">PRODUCT/SERVICE 1</p>
      <Frame55 />
    </div>
  );
}

function Cart8() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[9.56px] items-start relative shrink-0" data-name="Cart">
      <Cart7 />
      <Frame56 />
    </div>
  );
}

function FillHeart5() {
  return (
    <div className="relative shrink-0 size-[20.315px]" data-name="Fill Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="Fill Heart">
          <circle cx="10.1575" cy="10.1575" fill="var(--fill-0, white)" id="Ellipse 12" r="10.1575" />
          <g id="heart small">
            <path d={svgPaths.p25478d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.896252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[20.83%_9.95%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-3.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10">
          <g id="Group">
            <path d={svgPaths.p35708b00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.896252" />
            <path d={svgPaths.p38e7dd80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.896252" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function QuickView5() {
  return (
    <div className="absolute inset-[14.71%] overflow-clip" data-name="Quick View">
      <Group8 />
    </div>
  );
}

function FillEye5() {
  return (
    <div className="relative shrink-0 size-[20.315px]" data-name="Fill Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <circle cx="10.1575" cy="10.1575" fill="var(--fill-0, white)" id="Ellipse 13" r="10.1575" />
      </svg>
      <QuickView5 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.78px] items-start right-[7.5px] top-[7.17px]">
      <FillHeart5 />
      <FillEye5 />
    </div>
  );
}

function Frame67() {
  return <div className="absolute h-[107.55px] left-[calc(50%+0.34px)] overflow-clip top-[calc(50%+0.31px)] translate-x-[-50%] translate-y-[-50%] w-[113.525px]" />;
}

function Cart9() {
  return (
    <div className="bg-[red] h-[149.375px] overflow-clip relative rounded-[8px] shrink-0 w-[161.325px]" data-name="Cart">
      <Frame57 />
      <Frame67 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[7.17px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium','Noto_Sans:Medium',sans-serif] leading-[14.34px] relative shrink-0 text-[#428dfe] text-[9.56px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        ₱
      </p>
    </div>
  );
}

function FiveStar1() {
  return (
    <div className="h-[11.95px] relative shrink-0 w-[59.75px]" data-name="Five star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 12">
        <g id="Five star">
          <path d={svgPaths.p3659b780} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.p37c65380} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p32fbf80} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p1f6fd780} fill="var(--fill-0, #FFAD33)" id="Vector_4" />
          <path d={svgPaths.p159bd300} fill="var(--fill-0, #FFAD33)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[4.78px] items-start relative shrink-0">
      <FiveStar1 />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[11.95px] leading-[12.548px] not-italic opacity-50 relative shrink-0 text-[8.365px] text-black w-[23.9px]">(325)</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[4.78px] items-center relative shrink-0">
      <Frame58 />
      <Frame59 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[4.78px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[14.34px] not-italic relative shrink-0 text-[9.56px] text-black text-nowrap whitespace-pre">PRODUCT/SERVICE 3</p>
      <Frame60 />
    </div>
  );
}

function Cart10() {
  return (
    <div className="content-stretch flex flex-col gap-[9.56px] items-start relative shrink-0" data-name="Cart">
      <Cart9 />
      <Frame61 />
    </div>
  );
}

function FillHeart6() {
  return (
    <div className="relative shrink-0 size-[20.315px]" data-name="Fill Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="Fill Heart">
          <circle cx="10.1575" cy="10.1575" fill="var(--fill-0, white)" id="Ellipse 12" r="10.1575" />
          <g id="heart small">
            <path d={svgPaths.p25478d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.896252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[20.83%_9.95%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-3.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10">
          <g id="Group">
            <path d={svgPaths.p35708b00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.896252" />
            <path d={svgPaths.p38e7dd80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.896252" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function QuickView6() {
  return (
    <div className="absolute inset-[14.71%] overflow-clip" data-name="Quick View">
      <Group9 />
    </div>
  );
}

function FillEye6() {
  return (
    <div className="relative shrink-0 size-[20.315px]" data-name="Fill Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <circle cx="10.1575" cy="10.1575" fill="var(--fill-0, white)" id="Ellipse 13" r="10.1575" />
      </svg>
      <QuickView6 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.78px] items-start right-[7.17px] top-[7.17px]">
      <FillHeart6 />
      <FillEye6 />
    </div>
  );
}

function Frame71() {
  return <div className="absolute h-[107.55px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[113.525px]" />;
}

function Cart11() {
  return (
    <div className="h-[149.375px] overflow-clip relative rounded-[8px] shrink-0 w-[161.325px]" data-name="Cart">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgCart} />
      <Frame70 />
      <Frame71 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[7.17px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium','Noto_Sans:Medium',sans-serif] leading-[14.34px] relative shrink-0 text-[#428dfe] text-[9.56px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        ₱
      </p>
    </div>
  );
}

function FourStar2() {
  return (
    <div className="h-[11.95px] relative shrink-0 w-[59.75px]" data-name="Four Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 12">
        <g id="Four Star">
          <path d={svgPaths.p3659b780} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.p37c65380} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p32fbf80} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p1f6fd780} fill="var(--fill-0, #FFAD33)" id="Vector_4" />
          <path d={svgPaths.p159bd300} fill="var(--fill-0, black)" id="Vector_5" opacity="0.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[4.78px] items-start relative shrink-0">
      <FourStar2 />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[11.95px] leading-[12.548px] not-italic opacity-50 relative shrink-0 text-[8.365px] text-black w-[23.9px]">(145)</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[4.78px] items-center relative shrink-0">
      <Frame72 />
      <Frame73 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[4.78px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[14.34px] not-italic relative shrink-0 text-[9.56px] text-black text-nowrap whitespace-pre">PRODUCT/SERVICE 4</p>
      <Frame75 />
    </div>
  );
}

function CartWithFlatDiscountCartWithFlatDiscountCartWithFlatDiscountCartWithFlatDiscountCartProperty1() {
  return (
    <div className="content-stretch flex flex-col gap-[9.56px] items-start relative shrink-0" data-name="Cart With Flat Discount /Cart With Flat Discount/Cart With Flat Discount/Cart With Flat Discount/Cart/Property 25">
      <Cart11 />
      <Frame77 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[17.925px] items-start relative shrink-0">
      {[...Array(2).keys()].map((_, i) => (
        <Cart8 key={i} />
      ))}
      <Cart10 />
      <CartWithFlatDiscountCartWithFlatDiscountCartWithFlatDiscountCartWithFlatDiscountCartProperty1 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-col gap-[35.85px] items-start relative shrink-0">
      <Frame74 />
      <Frame76 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col gap-[35.85px] items-center relative shrink-0">
      <Frame92 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-[#104274] box-border content-stretch flex gap-[5.975px] items-center justify-center px-[28.68px] py-[9.56px] relative rounded-[8px] shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[14.34px] not-italic relative shrink-0 text-[9.56px] text-neutral-50 text-nowrap whitespace-pre">VIEW ALL ITEMS</p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[35.85px] items-center relative shrink-0">
      <Frame93 />
      <Frame84 />
    </div>
  );
}

function AutoLayoutVertical() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-center relative shrink-0 w-[699.196px]" data-name="Auto Layout Vertical">
      <Frame94 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[17px] items-start px-[15px] py-0 relative shrink-0" data-name="Frame">
      <Profile />
      <Frame9 />
      <AutoLayoutVertical />
    </div>
  );
}

function AutoLayoutHorizontal5() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[1074.59px] items-center left-[calc(16.67%+54px)] px-[45.882px] py-0 top-[29px] w-[780px]" data-name="Auto Layout Horizontal">
      <Frame10 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="absolute h-[358.462px] left-[119.49px] overflow-clip rounded-[8px] top-0 w-[298.718px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame894} />
      <div className="absolute h-[188.192px] left-[16.13px] top-[92.01px] w-[266.456px]" data-name="image 63" />
    </div>
  );
}

function Frame96() {
  return (
    <div className="h-[82.446px] relative rounded-[8px] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame895} />
    </div>
  );
}

function Frame97() {
  return (
    <div className="h-[82.446px] relative rounded-[8px] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame896} />
    </div>
  );
}

function Frame98() {
  return (
    <div className="h-[82.446px] relative rounded-[8px] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame897} />
    </div>
  );
}

function Frame110() {
  return (
    <div className="h-[82.446px] relative rounded-[8px] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame919} />
    </div>
  );
}

function Frame129() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 top-0 w-[101.564px]">
      <Frame96 />
      <Frame97 />
      <Frame98 />
      <Frame110 />
    </div>
  );
}

function FourStar3() {
  return (
    <div className="h-[11.274px] relative shrink-0 w-[56.368px]" data-name="Four Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 12">
        <g id="Four Star">
          <path d={svgPaths.p1bfb7a10} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.p26a1ed80} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p65d3cc0} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p145c9100} fill="var(--fill-0, #565E66)" id="Vector_4" />
          <path d={svgPaths.p13104cf0} fill="var(--fill-0, white)" id="Vector_5" opacity="0.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex gap-[4.509px] items-start relative shrink-0">
      <FourStar3 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[11.837px] not-italic opacity-50 relative shrink-0 text-[7.892px] text-nowrap text-white whitespace-pre">(35 Reviews)</p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex gap-[9.019px] items-center relative shrink-0">
      <div className="flex h-[9.019px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "9.015625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[9.019px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.56px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 1">
                <line id="Line 17" opacity="0.5" stroke="var(--stroke-0, #FADCDC)" strokeWidth="0.563684" x2="9.01894" y1="0.281842" y2="0.281842" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[11.837px] not-italic opacity-60 relative shrink-0 text-[#00ff66] text-[7.892px] text-nowrap whitespace-pre">AVAILABLE</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex gap-[9.019px] items-start relative shrink-0">
      <Frame111 />
      <Frame112 />
    </div>
  );
}

function UnderLine() {
  return (
    <div className="absolute h-0 left-0 top-[49.04px] w-[225.474px]" data-name="UnderLine">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.56px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 1">
          <g id="UnderLine" opacity="0.5">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeWidth="0.563684" x2="225.474" y1="0.281842" y2="0.281842" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame126() {
  return (
    <div className="h-[49.041px] relative shrink-0 w-full">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[11.837px] left-0 not-italic text-[7.892px] text-white top-0 w-[210.254px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dapibus neque at rutrum. Suspendisse finibus varius leo et lacinia. Donec a magna at metus suscipit tempus vel et orci.</p>
      <UnderLine />
    </div>
  );
}

function IconMinus() {
  return (
    <div className="absolute left-[4.51px] size-[13.528px] top-[5.64px]" data-name="icon-minus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon-minus">
          <path d="M11.2737 6.76421H2.25474" id="Vector" stroke="var(--stroke-0, #FADCDC)" strokeLinecap="round" strokeWidth="0.845526" />
        </g>
      </svg>
    </div>
  );
}

function Frame100() {
  return (
    <div className="h-[24.802px] mr-[-0.564px] relative rounded-bl-[2.255px] rounded-tl-[2.255px] shrink-0 w-[22.547px]">
      <div className="h-[24.802px] overflow-clip relative rounded-[inherit] w-[22.547px]">
        <IconMinus />
      </div>
      <div aria-hidden="true" className="absolute border-[0.564px] border-[rgba(0,0,0,0.5)] border-solid inset-0 pointer-events-none rounded-bl-[2.255px] rounded-tl-[2.255px]" />
    </div>
  );
}

function Frame102() {
  return (
    <div className="h-[24.802px] mr-[-0.564px] relative shrink-0 w-[45.095px]">
      <div className="h-[24.802px] overflow-clip relative rounded-[inherit] w-[45.095px]">
        <p className="absolute font-['Poppins:Medium',sans-serif] leading-[15.783px] left-[19.17px] not-italic text-[11.274px] text-nowrap text-white top-[4.51px] whitespace-pre">2</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.564px_0px] border-[rgba(0,0,0,0.5)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IconPlus() {
  return (
    <div className="absolute left-[5.07px] size-[13.528px] top-[5.64px]" data-name="icon-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon-plus">
          <path d={svgPaths.ped5e780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="0.845526" />
        </g>
      </svg>
    </div>
  );
}

function Frame101() {
  return (
    <div className="bg-[#428dfe] h-[24.802px] mr-[-0.564px] overflow-clip relative rounded-br-[2.255px] rounded-tr-[2.255px] shrink-0 w-[23.111px]">
      <IconPlus />
    </div>
  );
}

function Frame117() {
  return (
    <div className="box-border content-stretch flex h-[24.802px] items-start pl-0 pr-[0.564px] py-0 relative shrink-0 w-[89.626px]">
      <Frame100 />
      <Frame102 />
      <Frame101 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#104274] box-border content-stretch flex gap-[5.637px] items-center justify-center px-[27.057px] py-[5.637px] relative rounded-[2.255px] shrink-0" data-name="Button">
      <p className="font-['Poppins:Medium',sans-serif] leading-[13.528px] not-italic relative shrink-0 text-[9.019px] text-neutral-50 text-nowrap whitespace-pre">Add to Cart</p>
    </div>
  );
}

function Wishlist() {
  return (
    <div className="absolute left-[2.26px] size-[18.038px] top-[2.25px]" data-name="Wishlist">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Wishlist">
          <path d={svgPaths.p2c223800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.845526" />
        </g>
      </svg>
    </div>
  );
}

function Frame99() {
  return (
    <div className="relative rounded-[2.255px] shrink-0 size-[22.547px]">
      <div className="overflow-clip relative rounded-[inherit] size-[22.547px]">
        <Wishlist />
      </div>
      <div aria-hidden="true" className="absolute border-[0.564px] border-[rgba(0,0,0,0.5)] border-solid inset-[-0.564px] pointer-events-none rounded-[2.819px]" />
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex gap-[9.435px] items-center relative shrink-0 w-full">
      <Frame117 />
      <Button />
      <Frame99 />
    </div>
  );
}

function IconDelivery() {
  return (
    <div className="relative shrink-0 size-[22.547px]" data-name="icon-delivery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g clipPath="url(#clip0_2013_5155)" id="icon-delivery">
          <g id="Vector"></g>
          <path d={svgPaths.p2178ff80} id="Vector_2" stroke="var(--stroke-0, #FADCDC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
          <path d={svgPaths.p226f1f80} id="Vector_3" stroke="var(--stroke-0, #FADCDC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
          <path d={svgPaths.p8010100} id="Vector_4" stroke="var(--stroke-0, #FADCDC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
          <path d={svgPaths.p16471970} id="Vector_5" stroke="var(--stroke-0, #FADCDC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
          <path d="M2.81842 6.66172H6.57631" id="Vector_6" stroke="var(--stroke-0, #FADCDC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
          <path d="M1.02488 8.71148H4.78277" id="Vector_7" stroke="var(--stroke-0, #FADCDC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
          <path d="M2.81842 10.7612H6.57631" id="Vector_8" stroke="var(--stroke-0, #FADCDC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
        </g>
        <defs>
          <clipPath id="clip0_2013_5155">
            <rect fill="white" height="22.5474" width="22.5474" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Medium',sans-serif] gap-[4.509px] items-start not-italic relative shrink-0 text-nowrap text-white whitespace-pre">
      <p className="leading-[13.528px] relative shrink-0 text-[9.019px]">Digital Delivery</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[10.146px] relative shrink-0 text-[6.764px] underline">This product is delivered online through soft copy.</p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex gap-[9.019px] items-center relative shrink-0">
      <IconDelivery />
      <Frame105 />
    </div>
  );
}

function UnderLine1() {
  return (
    <div className="h-0 relative shrink-0 w-[225.474px]" data-name="UnderLine">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.56px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 1">
          <g id="UnderLine" opacity="0.5">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeWidth="0.563684" x2="225.474" y1="0.281842" y2="0.281842" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconDelivery1() {
  return (
    <div className="relative shrink-0 size-[22.547px]" data-name="icon-delivery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g clipPath="url(#clip0_2013_5268)" id="icon-delivery">
          <g id="Vector"></g>
          <path d={svgPaths.p2178ff80} id="Vector_2" stroke="var(--stroke-0, #DCEFFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
          <path d={svgPaths.p226f1f80} id="Vector_3" stroke="var(--stroke-0, #DCEFFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
          <path d={svgPaths.p8010100} id="Vector_4" stroke="var(--stroke-0, #DCEFFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
          <path d={svgPaths.p16471970} id="Vector_5" stroke="var(--stroke-0, #DCEFFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
          <path d="M2.81842 6.66172H6.57631" id="Vector_6" stroke="var(--stroke-0, #DCEFFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
          <path d="M1.02488 8.71148H4.78277" id="Vector_7" stroke="var(--stroke-0, #DCEFFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
          <path d="M2.81842 10.7612H6.57631" id="Vector_8" stroke="var(--stroke-0, #DCEFFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
        </g>
        <defs>
          <clipPath id="clip0_2013_5268">
            <rect fill="white" height="22.5474" width="22.5474" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Medium',sans-serif] gap-[4.509px] items-start not-italic relative shrink-0 text-[#797979] text-nowrap whitespace-pre">
      <p className="leading-[13.528px] relative shrink-0 text-[9.019px]">Free Delivery [UNAVAILABLE]</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[10.146px] relative shrink-0 text-[6.764px] underline">Enter your postal code for Delivery Availability</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex gap-[9.019px] items-center relative shrink-0">
      <IconDelivery1 />
      <Frame109 />
    </div>
  );
}

function IconReturn() {
  return (
    <div className="relative shrink-0 size-[22.547px]" data-name="Icon-return">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g clipPath="url(#clip0_2013_5243)" id="Icon-return">
          <g id="Vector"></g>
          <path d={svgPaths.p706e600} id="Vector_2" stroke="var(--stroke-0, #FADCDC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
          <path d={svgPaths.p3969ec00} id="Vector_3" stroke="var(--stroke-0, #FADCDC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12737" />
        </g>
        <defs>
          <clipPath id="clip0_2013_5243">
            <rect fill="white" height="22.5474" width="22.5474" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Medium',sans-serif] gap-[4.509px] items-start not-italic relative shrink-0 text-nowrap text-white whitespace-pre">
      <p className="leading-[13.528px] relative shrink-0 text-[9.019px]">Return Delivery</p>
      <p className="leading-[10.146px] relative shrink-0 text-[0px] text-[6.764px]">
        <span>{`Free 30 Days Delivery Returns. `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Poppins:Medium',sans-serif] not-italic underline">Details</span>
      </p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex gap-[9.019px] items-center relative shrink-0">
      <IconReturn />
      <Frame104 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="relative rounded-[2.255px] shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-[8.492px] items-start overflow-clip px-0 py-[12.266px] relative rounded-[inherit] w-full">
        <Frame107 />
        <UnderLine1 />
        <Frame108 />
        <UnderLine1 />
        <Frame106 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.564px] border-[rgba(0,0,0,0.5)] border-solid inset-0 pointer-events-none rounded-[2.255px]" />
    </div>
  );
}

function Frame127() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[13.209px] items-start left-[466.78px] top-[16px] w-[225.474px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[13.528px] min-w-full not-italic relative shrink-0 text-[13.528px] text-white tracking-[0.4059px] w-[min-content]">{`PRODUCT/SERVICE 1 `}</p>
      <Frame113 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[13.528px] min-w-full not-italic relative shrink-0 text-[13.528px] text-white tracking-[0.4059px] w-[min-content]">{`₱ `}</p>
      <Frame126 />
      <Frame128 />
      <Frame103 />
    </div>
  );
}

function CategoryRectangle() {
  return (
    <div className="h-[23.897px] relative shrink-0 w-[11.949px]" data-name="Category Rectangle">
      <div className="absolute bg-[#428dfe] inset-0 rounded-[2.39px]" />
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex gap-[9.559px] items-center relative shrink-0">
      <CategoryRectangle />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[11.949px] not-italic relative shrink-0 text-[#428dfe] text-[9.559px] text-nowrap whitespace-pre">RELATED ITEMS TO PRODUCT/SERVICE 1 FROM USERNAME</p>
    </div>
  );
}

function Frame38() {
  return <div className="absolute content-stretch flex flex-col gap-[4.779px] items-start right-[7.48px] top-[7.17px]" />;
}

function Frame68() {
  return <div className="absolute h-[107.538px] left-[calc(50%+0.35px)] overflow-clip top-[calc(50%+0.32px)] translate-x-[-50%] translate-y-[-50%] w-[113.513px]" />;
}

function Frame33() {
  return (
    <div className="bg-[red] h-[149.359px] overflow-clip relative rounded-[8px] shrink-0 w-[161.308px]">
      <Frame38 />
      <Frame68 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex font-['Poppins:Medium',sans-serif] gap-[7.169px] items-start leading-[14.338px] not-italic relative shrink-0 text-[9.559px] text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[#428dfe]">$120</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid opacity-50 relative shrink-0 text-[#fadcdc]">&nbsp;</p>
    </div>
  );
}

function FiveStar2() {
  return (
    <div className="h-[11.949px] relative shrink-0 w-[59.744px]" data-name="Five star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 12">
        <g id="Five star">
          <path d={svgPaths.p52e2d00} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.pee073d0} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p2379e300} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p1aaf0c00} fill="var(--fill-0, #FFAD33)" id="Vector_4" />
          <path d={svgPaths.p2a2e0580} fill="var(--fill-0, #FFAD33)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[4.779px] items-start relative shrink-0">
      <FiveStar2 />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[11.949px] leading-[12.546px] not-italic opacity-50 relative shrink-0 text-[8.364px] text-white w-[19.118px]">(88)</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[4.779px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[14.338px] not-italic relative shrink-0 text-[9.559px] text-nowrap text-white whitespace-pre">HAVIT HV-G92 Gamepad</p>
      <Frame78 />
      <Frame79 />
    </div>
  );
}

function CartWithFlatDiscount() {
  return (
    <div className="content-stretch flex flex-col gap-[9.559px] items-start relative shrink-0" data-name="Cart With Flat Discount">
      <Frame33 />
      <Frame32 />
    </div>
  );
}

function Frame69() {
  return <div className="absolute h-[107.538px] left-[calc(50%+0.35px)] overflow-clip top-[calc(50%-11.63px)] translate-x-[-50%] translate-y-[-50%] w-[113.513px]" />;
}

function Frame80() {
  return (
    <div className="bg-[red] h-[149.359px] overflow-clip relative rounded-[8px] shrink-0 w-[161.308px]">
      <Frame69 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[7.169px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[14.338px] not-italic relative shrink-0 text-[#428dfe] text-[9.559px] text-nowrap whitespace-pre">$960</p>
    </div>
  );
}

function FourStar4() {
  return (
    <div className="h-[11.949px] relative shrink-0 w-[59.744px]" data-name="Four Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 12">
        <g id="Four Star">
          <path d={svgPaths.p52e2d00} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.pee073d0} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p2379e300} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p1aaf0c00} fill="var(--fill-0, #FFAD33)" id="Vector_4" />
          <path d={svgPaths.p2a2e0580} fill="var(--fill-0, white)" id="Vector_5" opacity="0.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[4.779px] items-start relative shrink-0">
      <FourStar4 />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[11.949px] leading-[12.546px] not-italic opacity-50 relative shrink-0 text-[8.364px] text-white w-[19.118px]">(75)</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[4.779px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[14.338px] not-italic relative shrink-0 text-[9.559px] text-nowrap text-white whitespace-pre">AK-900 Wired Keyboard</p>
      <Frame81 />
      <Frame82 />
    </div>
  );
}

function CartWithFlatDiscount1() {
  return (
    <div className="content-stretch flex flex-col gap-[9.559px] items-start relative shrink-0" data-name="Cart With Flat Discount">
      <Frame80 />
      <Frame83 />
    </div>
  );
}

function Frame85() {
  return <div className="bg-[#ff0101] h-[149.359px] overflow-clip rounded-[8px] shrink-0 w-[161.308px]" />;
}

function Frame86() {
  return (
    <div className="content-stretch flex font-['Poppins:Medium',sans-serif] gap-[7.169px] items-start leading-[14.338px] not-italic relative shrink-0 text-[9.559px] text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[#428dfe]">$370</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid opacity-50 relative shrink-0 text-[#fadcdc]">&nbsp;</p>
    </div>
  );
}

function FiveStar3() {
  return (
    <div className="h-[11.949px] relative shrink-0 w-[59.744px]" data-name="Five star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 12">
        <g id="Five star">
          <path d={svgPaths.p52e2d00} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.pee073d0} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p2379e300} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p1aaf0c00} fill="var(--fill-0, #FFAD33)" id="Vector_4" />
          <path d={svgPaths.p2a2e0580} fill="var(--fill-0, #FFAD33)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[4.779px] items-start relative shrink-0">
      <FiveStar3 />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[11.949px] leading-[12.546px] not-italic opacity-50 relative shrink-0 text-[8.364px] text-white w-[19.118px]">(99)</p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[4.779px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[14.338px] not-italic relative shrink-0 text-[9.559px] text-nowrap text-white whitespace-pre">IPS LCD Gaming Monitor</p>
      <Frame86 />
      <Frame87 />
    </div>
  );
}

function CartWithFlatDiscount2() {
  return (
    <div className="content-stretch flex flex-col gap-[9.559px] items-start relative shrink-0" data-name="Cart With Flat Discount">
      <Frame85 />
      <Frame88 />
    </div>
  );
}

function Cart12() {
  return <div className="bg-[#ff0101] h-[149.359px] overflow-clip rounded-[8px] shrink-0 w-[161.308px]" data-name="Cart" />;
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[7.169px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[14.338px] not-italic relative shrink-0 text-[#428dfe] text-[9.559px] text-nowrap whitespace-pre">$160</p>
    </div>
  );
}

function FourHalfStar() {
  return (
    <div className="h-[11.949px] relative shrink-0 w-[59.744px]" data-name="Four Half Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 12">
        <g id="Four Half Star">
          <path d={svgPaths.p52e2d00} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.pee073d0} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p2379e300} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p1aaf0c00} fill="var(--fill-0, #FFAD33)" id="Vector_4" />
          <g id="star-half-filled">
            <path d={svgPaths.p37bb9b00} fill="var(--fill-0, #FFAD33)" id="Vector_5" />
            <path d={svgPaths.p2e520280} fill="var(--fill-0, white)" id="Vector_6" opacity="0.25" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex gap-[4.779px] items-start relative shrink-0">
      <FourHalfStar />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[11.949px] leading-[12.546px] not-italic opacity-50 relative shrink-0 text-[8.364px] text-white w-[19.118px]">(65)</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[4.779px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[14.338px] not-italic relative shrink-0 text-[9.559px] text-nowrap text-white whitespace-pre">RGB liquid CPU Cooler</p>
      <Frame89 />
      <Frame90 />
    </div>
  );
}

function Cart13() {
  return (
    <div className="content-stretch flex flex-col gap-[9.559px] items-start relative shrink-0" data-name="Cart">
      <Cart12 />
      <Frame91 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex gap-[17.923px] items-start relative shrink-0">
      <CartWithFlatDiscount />
      <CartWithFlatDiscount1 />
      <CartWithFlatDiscount2 />
      <Cart13 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35.846px] items-start left-0 top-[442.1px]">
      <Frame114 />
      <Frame115 />
    </div>
  );
}

function Roadmap() {
  return (
    <div className="absolute content-stretch flex gap-[16.389px] items-center left-0 top-[-68.7px]" data-name="Roadmap">
      <p className="font-['Poppins:Regular',sans-serif] leading-[28.681px] not-italic opacity-50 relative shrink-0 text-[19.121px] text-nowrap text-white whitespace-pre">USERNAME</p>
      <div className="flex h-[16.048px] items-center justify-center relative shrink-0 w-[8.195px]" style={{ "--transform-inner-width": "18.015625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[117.051deg]">
          <div className="h-0 relative w-[18.019px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1.37px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 2">
                <line id="Line 13" opacity="0.5" stroke="var(--stroke-0, white)" strokeWidth="1.36578" x2="18.0192" y1="0.682892" y2="0.682892" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[28.681px] not-italic opacity-50 relative shrink-0 text-[19.121px] text-nowrap text-white whitespace-pre">SHOP</p>
      <div className="flex h-[16.048px] items-center justify-center relative shrink-0 w-[8.195px]" style={{ "--transform-inner-width": "18.015625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[117.051deg]">
          <div className="h-0 relative w-[18.019px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1.37px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 2">
                <line id="Line 13" opacity="0.5" stroke="var(--stroke-0, white)" strokeWidth="1.36578" x2="18.0192" y1="0.682892" y2="0.682892" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[28.681px] not-italic relative shrink-0 text-[19.121px] text-nowrap text-white whitespace-pre">PRODUCT/SERVICE 1</p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="absolute h-[710.949px] left-[calc(16.67%+84px)] top-[231px] w-[699px]">
      <Frame95 />
      <Frame129 />
      <div className="absolute bg-[rgba(8,35,66,0.65)] h-[358px] left-[436px] rounded-[15px] top-0 w-[284px]" />
      <Frame127 />
      <Frame116 />
      <Roadmap />
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

function AutoLayoutHorizontal6() {
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

function Frame11() {
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
      <Frame11 />
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

function Frame12() {
  return (
    <div className="box-border content-stretch flex gap-[37.5px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <AutoLayoutVertical1 />
      </div>
      <ExploreBtn />
    </div>
  );
}

function Frame13() {
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
      <Frame13 />
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

function Frame14() {
  return (
    <div className="box-border content-stretch flex gap-[37.5px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <AutoLayoutVertical2 />
      </div>
      <ExploreBtn1 />
    </div>
  );
}

function Frame15() {
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
      <Frame15 />
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

function Frame16() {
  return (
    <div className="box-border content-stretch flex gap-[37.5px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <AutoLayoutVertical3 />
      </div>
      <ExploreBtn2 />
    </div>
  );
}

function Frame17() {
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
      <Frame17 />
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

function Frame18() {
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
      <Frame12 />
      <Frame14 />
      <Frame16 />
      <Frame18 />
    </div>
  );
}

function AutoLayoutHorizontal7() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[331px]" data-name="Auto Layout Horizontal">
      <AutoLayoutVertical5 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-center left-[-16px] top-[122px] w-[351px]" data-name="Frame">
      <AutoLayoutHorizontal6 />
      <AutoLayoutHorizontal7 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute h-[600px] left-[19px] right-[19px] top-[-3px]" data-name="Frame">
      <Frame19 />
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
      <Frame20 />
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

function Group10() {
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
      <Group10 />
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

function Frame119() {
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

function Frame21() {
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

function Frame22() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame21 />
    </div>
  );
}

function AutoLayoutHorizontal8() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[2.359px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Home</p>
      </div>
    </div>
  );
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
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[122.641px] py-[12px] relative w-full">
          <Frame22 />
          <AutoLayoutHorizontal9 />
        </div>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal11() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.016px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Cart and Orders</p>
      </div>
    </div>
  );
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
          <div className="relative shrink-0 size-[24px]" data-name="glyph">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="glyph">
                <path clipRule="evenodd" d={svgPaths.p2663bc80} fill="var(--fill-0, #3971B8)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p13425300} fill="var(--fill-0, #3971B8)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p36a0400} fill="var(--fill-0, #3971B8)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
          <AutoLayoutHorizontal12 />
        </div>
      </div>
    </div>
  );
}

function Group11() {
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
      <Group11 />
    </div>
  );
}

function AutoLayoutHorizontal14() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.016px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">My Payments</p>
      </div>
    </div>
  );
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
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[120.984px] py-[12px] relative w-full">
          <LightThemeListsDefault />
          <AutoLayoutHorizontal15 />
        </div>
      </div>
    </div>
  );
}

function Group12() {
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
      <Group12 />
    </div>
  );
}

function AutoLayoutHorizontal17() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.031px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Messages</p>
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
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[98.969px] py-[12px] relative w-full">
          <LightThemeMessagesDefault />
          <AutoLayoutHorizontal18 />
        </div>
      </div>
    </div>
  );
}

function Group13() {
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
      <Group13 />
    </div>
  );
}

function AutoLayoutHorizontal20() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[3.578px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Notifications</p>
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
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[78.422px] py-[12px] relative w-full">
          <LightThemeNotificationsDefault />
          <AutoLayoutHorizontal21 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
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

function Frame24() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame23 />
    </div>
  );
}

function AutoLayoutHorizontal23() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[1.766px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Create</p>
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
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[122.234px] py-[12px] relative w-full">
          <Frame24 />
          <AutoLayoutHorizontal24 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
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

function Frame26() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame25 />
    </div>
  );
}

function AutoLayoutHorizontal26() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.672px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">More</p>
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
    <div className="box-border content-stretch flex items-start pl-[12px] pr-[130.328px] py-[12px] relative rounded-[24px] shrink-0" data-name="Auto Layout Horizontal">
      <Frame26 />
      <AutoLayoutHorizontal27 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[535px] items-start left-[12px] px-0 py-[4px] right-[12px] top-[100px]" data-name="Frame">
      <AutoLayoutHorizontal10 />
      <AutoLayoutHorizontal13 />
      <AutoLayoutHorizontal16 />
      <AutoLayoutHorizontal19 />
      <AutoLayoutHorizontal22 />
      <AutoLayoutHorizontal25 />
      <AutoLayoutHorizontal28 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute bg-white h-[616px] left-0 top-0 w-[244px]" data-name="Frame">
      <Frame119 />
      <Frame27 />
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
      <Frame28 />
    </div>
  );
}

export default function OtherProfileItemDescriptionOverlay() {
  return (
    <div className="bg-white relative size-full" data-name="OTHER PROFILE_ITEM-DESCRIPTION-OVERLAY">
      <AutoLayoutHorizontal5 />
      <div className="absolute bg-[rgba(5,16,28,0.9)] h-[1024px] left-[calc(16.67%+54px)] top-0 w-[1146px]" />
      <Frame118 />
      <RightPanel />
      <LeftPanel />
    </div>
  );
}