import svgPaths from "./svg-fmzfixyrgd";
import imgBgTexture31 from "figma:asset/0d00f6be6ac86f96b5d39e2e21a7b72f784d6eac.png";

function Frame() {
  return <div className="bg-[#d1ecff] h-[24px] shrink-0 w-[399px]" data-name="Frame" />;
}

function Search() {
  return (
    <div className="absolute inset-[11.58%_10.24%_8.33%_11.58%]" data-name="Search">
      <div className="absolute inset-[-5.85%_-6%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 15">
          <g id="Search">
            <circle cx="6.74237" cy="6.74237" id="Ellipse_739" r="5.99237" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p9008780} id="Line_181" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightSearch() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Iconly/Light/Search">
      <Search />
    </div>
  );
}

function SearchAndIcon() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Search and icon">
      <IconlyLightSearch />
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#6c757d] text-[12px] text-nowrap whitespace-pre">Search here...</p>
    </div>
  );
}

function Search1() {
  return (
    <div className="bg-[#f6f7f9] box-border content-stretch flex gap-[180px] items-center p-[16px] relative rounded-[65px] shrink-0 w-[378px]" data-name="Search">
      <SearchAndIcon />
    </div>
  );
}

function SearchAndFilter() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-[399px]" data-name="Search and filter">
      <Search1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#d1ecff] h-[6px] relative shrink-0 w-[399px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-[#a9c7db] border-[0px_0px_1.143px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function AutoLayoutHorizontal() {
  return (
    <div className="absolute box-border content-stretch flex items-start left-0 pb-[14.857px] pl-[27.875px] pr-[26.643px] pt-[13.714px] top-0" data-name="Auto Layout Horizontal">
      <div aria-hidden="true" className="absolute border-[#2963a3] border-[0px_0px_1.143px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2963a3] text-[14.857px] text-center text-nowrap uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20.571px] whitespace-pre">GENERAL</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[49.143px] left-0 top-0 w-[239.304px]" data-name="Frame">
      <AutoLayoutHorizontal />
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[180.02px] opacity-30 text-[#2963a3] text-[14.857px] text-center text-nowrap top-[24.21px] translate-x-[-50%] translate-y-[-50%] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20.571px] whitespace-pre">SERVICE</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f6f7f9] h-[49.143px] relative shrink-0 w-[398.857px]" data-name="Frame">
      <div className="absolute border-[#a9c6db] border-[0px_0px_1.143px] border-solid h-[49.143px] left-0 top-0 w-[398.857px]" data-name="Rectangle" />
      <Frame2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[15%_14.96%_14.96%_15%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 860 861">
        <g id="Group 2">
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
    <div className="bg-[rgba(32,141,102,0)] h-[1228px] opacity-50 overflow-clip relative w-[1227px]" data-name="Relative">
      <Group />
    </div>
  );
}

function Frame4() {
  return <div className="absolute bg-[red] inset-0" data-name="Frame" />;
}

function Frame5() {
  return (
    <div className="bg-neutral-50 overflow-clip relative rounded-[32px] shrink-0 size-[50px]" data-name="Frame">
      <Frame4 />
      <div className="absolute border-[1.143px] border-[rgba(0,0,0,0.1)] border-solid left-0 rounded-[32px] size-[64px] top-0" data-name="Rectangle" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[20.571px] overflow-clip relative shrink-0 w-[93.214px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[21.714px] justify-center leading-[0] left-0 text-[14px] text-white top-[9.71px] translate-y-[-50%] w-[93.443px]">
        <p className="leading-[20.571px]">{`USERNAME `}</p>
      </div>
    </div>
  );
}

function DoneAll() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="done_all">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="done_all">
          <circle cx="9" cy="9" fill="var(--fill-0, #94FF7E)" id="Notif" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center overflow-clip relative shrink-0" data-name="Frame">
      <DoneAll />
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[21.714px] justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.75)] w-[93.443px]">
        <p className="leading-[20.571px]">Online</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function AutoLayoutHorizontal2() {
  return (
    <div className="bg-[#428dfe] box-border content-stretch flex gap-[13.714px] h-[75px] items-center pl-[15px] pr-[182.214px] py-0 relative rounded-[20px] shrink-0 w-[353px]" data-name="Auto Layout Horizontal">
      <Frame5 />
      <AutoLayoutHorizontal1 />
    </div>
  );
}

function Frame8() {
  return <div className="absolute bg-[red] inset-0" data-name="Frame" />;
}

function Frame9() {
  return (
    <div className="bg-neutral-50 overflow-clip relative rounded-[32px] shrink-0 size-[50px]" data-name="Frame">
      <Frame8 />
      <div className="absolute border-[1.143px] border-[rgba(0,0,0,0.1)] border-solid left-0 rounded-[32px] size-[64px] top-0" data-name="Rectangle" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[20.571px] overflow-clip relative shrink-0 w-[93.214px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[21.714px] justify-center leading-[0] left-0 text-[14px] text-neutral-800 top-[9.71px] translate-y-[-50%] w-[93.443px]">
        <p className="leading-[20.571px]">{`USERNAME `}</p>
      </div>
    </div>
  );
}

function DoneAll1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="done_all">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="done_all">
          <circle cx="9" cy="9" fill="var(--fill-0, #94FF7E)" id="Notif" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center overflow-clip relative shrink-0" data-name="Frame">
      <DoneAll1 />
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[21.714px] justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(38,38,38,0.5)] w-[93.443px]">
        <p className="leading-[20.571px]">Online</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal3() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function AutoLayoutHorizontal4() {
  return (
    <div className="bg-[#fefff3] box-border content-stretch flex gap-[13.714px] h-[75px] items-center pl-[15px] pr-[182.214px] py-0 relative rounded-[20px] shrink-0 w-[353px]" data-name="Auto Layout Horizontal">
      <Frame9 />
      <AutoLayoutHorizontal3 />
    </div>
  );
}

function Frame12() {
  return <div className="absolute bg-[red] inset-0" data-name="Frame" />;
}

function Frame13() {
  return (
    <div className="bg-neutral-50 overflow-clip relative rounded-[32px] shrink-0 size-[50px]" data-name="Frame">
      <Frame12 />
      <div className="absolute border-[1.143px] border-[rgba(0,0,0,0.1)] border-solid left-0 rounded-[32px] size-[64px] top-0" data-name="Rectangle" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[20.571px] overflow-clip relative shrink-0 w-[93.214px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[21.714px] justify-center leading-[0] left-0 text-[14px] text-neutral-800 top-[9.71px] translate-y-[-50%] w-[93.443px]">
        <p className="leading-[20.571px]">{`USERNAME `}</p>
      </div>
    </div>
  );
}

function DoneAll2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="done_all">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="done_all">
          <circle cx="9" cy="9" fill="var(--fill-0, #949494)" id="Notif" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center overflow-clip relative shrink-0" data-name="Frame">
      <DoneAll2 />
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[21.714px] justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(38,38,38,0.5)] w-[93.443px]">
        <p className="leading-[20.571px]">Offline</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal5() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function AutoLayoutHorizontal6() {
  return (
    <div className="bg-[#fefff3] box-border content-stretch flex gap-[13.714px] h-[75px] items-center pl-[15px] pr-[182.214px] py-0 relative rounded-[20px] shrink-0 w-[353px]" data-name="Auto Layout Horizontal">
      <Frame13 />
      <AutoLayoutHorizontal5 />
    </div>
  );
}

function AutoLayoutHorizontal7() {
  return (
    <div className="absolute bg-[rgba(239,239,239,0)] box-border content-stretch flex flex-col gap-[15px] h-[895px] items-center left-0 px-[22.857px] py-[9.143px] top-[9.14px]" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal2 />
      <AutoLayoutHorizontal4 />
      {[...Array(9).keys()].map((_, i) => (
        <AutoLayoutHorizontal6 key={i} />
      ))}
    </div>
  );
}

function AutoLayoutHorizontal8() {
  return (
    <div className="absolute bg-[#d1ecff] bottom-[-298px] left-0 overflow-clip top-0 w-[398.714px]" data-name="Auto Layout Horizontal">
      <div className="absolute flex h-[1290.11px] items-center justify-center left-[-248.14px] top-[-99.29px] w-[1618.44px]" style={{ "--transform-inner-width": "1444", "--transform-inner-height": "1024" } as React.CSSProperties}>
        <div className="flex-none rotate-[11.442deg]">
          <div className="h-[1024px] relative w-[1444px]" data-name="BG_TEXTURE-3 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBgTexture31} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[1228px] items-center justify-center left-[-515.14px] top-[80.71px] w-[1227px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Relative />
        </div>
      </div>
      <AutoLayoutHorizontal7 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[904px] overflow-clip relative shrink-0 w-[399px]" data-name="Frame">
      <AutoLayoutHorizontal8 />
    </div>
  );
}

function AutoLayoutHorizontal9() {
  return (
    <div className="bg-[#f7f7fd] box-border content-stretch flex h-[904px] items-start overflow-clip pb-[50.286px] pt-0 px-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame16 />
    </div>
  );
}

export default function Frame17() {
  return (
    <div className="bg-[#d1ecff] relative size-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[10px] items-start relative size-full">
        <Frame />
        <SearchAndFilter />
        <Frame1 />
        <Frame3 />
        <AutoLayoutHorizontal9 />
      </div>
      <div aria-hidden="true" className="absolute border-[#8ebbff] border-[0px_3px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}