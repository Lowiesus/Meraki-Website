import svgPaths from "./svg-af1pa86xsm";
import imgFrame from "figma:asset/43f2f605db1237de841075d44257840170104211.png";
import imgImage from "figma:asset/c6749f285f9eef7615410c92e8e64bf36d7cd00c.png";
import imgBgTexture31 from "figma:asset/0d00f6be6ac86f96b5d39e2e21a7b72f784d6eac.png";
import imgQuestionPengu1 from "figma:asset/2acd6acbfb60ae9385fa0f65ca0d1bcc592fb1fd.png";
import imgAvatarSmall from "figma:asset/ce67d23a925af943f1634792363b9deeb4837a22.png";
import imgLogoIcon2 from "figma:asset/2b7e679a7a86a6e24f1b9a9001522d9b89b0d82e.png";
import imgLogoAlter2 from "figma:asset/a16b685f7c41d886d366b4fedd8fd5dbf6fed524.png";

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
    <div className="bg-[#f6f7f9] box-border content-stretch flex gap-[180px] items-center p-[16px] relative rounded-[8px] shrink-0 w-[631px]" data-name="Search">
      <SearchAndIcon />
    </div>
  );
}

function SearchAndFilter() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[631px]" data-name="Search and filter">
      <Search1 />
      <div className="shrink-0 size-[24px]" data-name="icon-plus" />
    </div>
  );
}

function Frame() {
  return <div className="absolute bg-[#2963a3] inset-0" data-name="Frame" />;
}

function Frame1() {
  return (
    <div className="bg-neutral-50 overflow-clip relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <Frame />
      <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid left-0 rounded-[16px] size-[32px] top-0" data-name="Rectangle" />
    </div>
  );
}

function AutoLayoutHorizontal() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Frame">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame} />
    </div>
  );
}

function AutoLayoutHorizontal1() {
  return (
    <div className="content-stretch flex gap-[4.063px] items-center relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2963a3] text-[14px] text-center text-nowrap">
        <p className="leading-[18px] whitespace-pre">USERNAME</p>
      </div>
      <Frame2 />
    </div>
  );
}

function AutoLayoutHorizontal2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start p-[2px] relative w-full">
          <AutoLayoutHorizontal1 />
        </div>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal3() {
  return (
    <div className="box-border content-stretch flex items-start pl-[4px] pr-[1.172px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#bacbdb] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">• 5h</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal4() {
  return (
    <div className="box-border content-stretch flex items-center pb-0 pt-px px-0 relative shrink-0 w-[137.234px]" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal2 />
      <AutoLayoutHorizontal3 />
    </div>
  );
}

function AutoLayoutHorizontal5() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pb-[10px] pl-0 pr-[242.766px] pt-[7px] relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal4 />
    </div>
  );
}

function AutoLayoutHorizontal6() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal />
      <AutoLayoutHorizontal5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute left-1/2 size-[24px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p11e47970} fill="var(--fill-0, #2963A3)" id="Vector" />
          <path d={svgPaths.p28385680} fill="var(--fill-0, #2963A3)" id="Vector_2" />
          <path d={svgPaths.p25e8ad00} fill="var(--fill-0, #2963A3)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame3 />
    </div>
  );
}

function AutoLayoutHorizontal7() {
  return (
    <div className="box-border content-stretch flex gap-[19px] items-center pl-[5px] pr-0 py-[8px] relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal6 />
      <Frame4 />
    </div>
  );
}

function AutoLayoutHorizontal8() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal7 />
    </div>
  );
}

function Frame5() {
  return <div className="absolute bg-gradient-to-b from-[#aaedff] inset-0 to-[#1e5b94]" data-name="Frame" />;
}

function Frame6() {
  return (
    <div className="h-[585px] overflow-clip relative shrink-0 w-[468px]" data-name="Frame">
      <Frame5 />
    </div>
  );
}

function AutoLayoutHorizontal9() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-start relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame6 />
    </div>
  );
}

function AutoLayoutHorizontal10() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-start left-0 overflow-clip top-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal9 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[585px] relative shrink-0 w-[468px]" data-name="Frame">
      <AutoLayoutHorizontal10 />
      <div className="absolute left-[8px] size-[30px] top-[277.5px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1336.67%] left-[-433.33%] max-w-none top-[-326.67%] w-[1433.33%]" src={imgImage} />
        </div>
      </div>
      <div className="absolute left-[430px] size-[30px] top-[277.5px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1336.67%] left-[-540%] max-w-none top-[-326.67%] w-[1433.33%]" src={imgImage} />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute inset-[564px_6px_15px_6px]" data-name="Frame">
      <div className="absolute bg-white left-[calc(50%-20px)] opacity-40 rounded-[3px] size-[6px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Rectangle" />
      <div className="absolute bg-white left-[calc(50%-10px)] rounded-[3px] size-[6px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Rectangle" />
      <div className="absolute bg-white left-1/2 opacity-40 rounded-[3px] size-[6px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Rectangle" />
      <div className="absolute bg-white left-[calc(50%+10px)] opacity-40 rounded-[3px] size-[6px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Rectangle" />
      <div className="absolute bg-white left-[calc(50%+20px)] opacity-40 rounded-[3px] size-[6px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Rectangle" />
    </div>
  );
}

function AutoLayoutHorizontal11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function AutoLayoutHorizontal12() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0" data-name="Auto Layout Horizontal">
      <div className="box-border content-stretch flex items-start overflow-clip p-px relative rounded-[inherit]">
        <AutoLayoutHorizontal11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function AutoLayoutHorizontal13() {
  return (
    <div className="absolute box-border content-stretch flex gap-[3.906px] h-[41px] items-start left-[0.5px] pl-0 pr-[80.094px] py-0 top-[5px] w-[470px]" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#2963a3] text-[12px] w-[470px]">
        <p className="leading-[normal]">Proin eu sapien et lacus tristique ultrices euismod quis lorem. Sed euismod id sapien non efficitur. Praesent malesuada justo odio, at porttitor neque lobortis at.</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[71px] left-[0.5px] top-[4px] w-[470px]" data-name="Frame">
      <AutoLayoutHorizontal13 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p2190fe00} fill="var(--fill-0, #2963A3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AutoLayoutHorizontal14() {
  return (
    <div className="box-border content-stretch flex h-[24px] items-center justify-center overflow-clip pb-0 pl-0 pr-[0.703px] pt-px relative shrink-0 w-[60px]" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2963a3] text-[13px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">741,368</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex gap-[5px] items-start overflow-clip px-[4px] py-0 relative shrink-0 w-[100px]" data-name="Frame">
      <Frame10 />
      <AutoLayoutHorizontal14 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p3ad4d700} id="Vector" stroke="var(--stroke-0, #2963A3)" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function AutoLayoutHorizontal15() {
  return (
    <div className="box-border content-stretch flex h-[24px] items-center justify-center overflow-clip pb-0 pl-0 pr-[0.703px] pt-px relative shrink-0 w-[60px]" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#bacbdb] text-[13px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">13,384</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex gap-[5px] items-start overflow-clip px-[4px] py-0 relative shrink-0 w-[100px]" data-name="Frame">
      <Frame12 />
      <AutoLayoutHorizontal15 />
    </div>
  );
}

function Socials() {
  return (
    <div className="absolute content-stretch flex items-center left-[0.5px] top-[95px]" data-name="SOCIALS">
      <Frame11 />
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return <div className="absolute left-[calc(50%+225px)] size-[24px] top-[calc(50%-35.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="Frame" />;
}

function Frame15() {
  return (
    <div className="basis-0 bg-white grow h-[18px] min-h-px min-w-px overflow-clip relative shrink-0" data-name="Frame">
      <div className="absolute flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[#2963a3] text-[14px] top-[9px] translate-y-[-50%] w-[457.2px]">
        <p className="leading-[18px]">Add a comment…</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute left-1/2 size-[13px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Frame">
          <path d={svgPaths.p2186f900} fill="var(--fill-0, #BACBDB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="overflow-clip relative shrink-0 size-[13px]" data-name="Frame">
      <Frame16 />
    </div>
  );
}

function AutoLayoutHorizontal16() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-[147px]" data-name="Auto Layout Horizontal">
      <Frame15 />
      <Frame17 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[165px] relative shrink-0 w-[470px]" data-name="Frame">
      <Frame9 />
      <Socials />
      <Frame14 />
      <AutoLayoutHorizontal16 />
    </div>
  );
}

function AutoLayoutHorizontal17() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Auto Layout Horizontal">
      <Frame18 />
    </div>
  );
}

function AutoLayoutVertical() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Auto Layout Vertical">
      <AutoLayoutHorizontal8 />
      <AutoLayoutHorizontal12 />
      <AutoLayoutHorizontal17 />
    </div>
  );
}

function AutoLayoutHorizontal18() {
  return (
    <div className="box-border content-stretch flex items-center justify-center pb-[21px] pt-0 px-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div aria-hidden="true" className="absolute border-[#dbdbdb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <AutoLayoutVertical />
    </div>
  );
}

function AutoLayoutVertical1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[72px] items-center justify-center pb-[12627.2px] pt-0 px-0 relative shrink-0" data-name="Auto Layout Vertical">
      <AutoLayoutHorizontal18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute left-1/2 size-[32px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path d={svgPaths.pe0e1d80} fill="var(--fill-0, #555555)" id="Vector" opacity="0" />
          <path d={svgPaths.p1a842800} fill="var(--fill-0, #555555)" id="Vector_2" opacity="0.0833333" />
          <path d={svgPaths.p8018800} fill="var(--fill-0, #555555)" id="Vector_3" opacity="0.166667" />
          <path d={svgPaths.p38993800} fill="var(--fill-0, #555555)" id="Vector_4" opacity="0.25" />
          <path d={svgPaths.p41ddf00} fill="var(--fill-0, #555555)" id="Vector_5" opacity="0.333333" />
          <path d={svgPaths.p1671c600} fill="var(--fill-0, #555555)" id="Vector_6" opacity="0.416667" />
          <path d={svgPaths.p15a25680} fill="var(--fill-0, #555555)" id="Vector_7" opacity="0.5" />
          <path d={svgPaths.p1fda99f0} fill="var(--fill-0, #555555)" id="Vector_8" opacity="0.583333" />
          <path d={svgPaths.p136ee9f0} fill="var(--fill-0, #555555)" id="Vector_9" opacity="0.666667" />
          <path d={svgPaths.p13e132f0} fill="var(--fill-0, #555555)" id="Vector_10" opacity="0.75" />
          <path d={svgPaths.p22877d00} fill="var(--fill-0, #555555)" id="Vector_11" opacity="0.833333" />
          <path d={svgPaths.p3da752c0} fill="var(--fill-0, #555555)" id="Vector_12" opacity="0.916667" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Frame">
      <Frame19 />
    </div>
  );
}

function AutoLayoutVertical2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[48px] items-center pb-[8px] pt-0 px-0 relative shrink-0" data-name="Auto Layout Vertical">
      <AutoLayoutVertical1 />
      <Frame20 />
    </div>
  );
}

function AutoLayoutVertical3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[25px] h-[14578px] items-center left-[calc(50%-161px)] pb-0 pt-[72px] px-0 top-[-30px] translate-x-[-50%] w-[779px]" data-name="Auto Layout Vertical">
      <SearchAndFilter />
      <AutoLayoutVertical2 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="h-[15670.7px] relative shrink-0 w-[1013px]" data-name="Frame">
      <AutoLayoutVertical3 />
    </div>
  );
}

function AutoLayoutHorizontal19() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-start left-0 px-[46px] py-0 top-0" data-name="Auto Layout Horizontal">
      <Frame21 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute h-[3208px] left-[calc(16.67%+54px)] overflow-clip top-0 w-[783px]" data-name="Frame">
      <AutoLayoutHorizontal19 />
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

function AutoLayoutHorizontal20() {
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

function Frame23() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[215px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[19px] justify-center leading-[0] left-0 text-[14px] text-neutral-800 top-[8.5px] translate-y-[-50%] w-[215px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">What’s Trending Today</p>
      </div>
    </div>
  );
}

function AutoLayoutVertical4() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start pl-0 pr-[135.984px] py-0 relative shrink-0 w-[215px]" data-name="Auto Layout Vertical">
      <Frame23 />
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

function Frame24() {
  return (
    <div className="box-border content-stretch flex gap-[37.5px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <AutoLayoutVertical4 />
      </div>
      <ExploreBtn />
    </div>
  );
}

function Frame25() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[215px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[19px] justify-center leading-[0] left-0 text-[14px] text-neutral-800 top-[8.5px] translate-y-[-50%] w-[215px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">What Happening Recently</p>
      </div>
    </div>
  );
}

function AutoLayoutVertical5() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start pl-0 pr-[135.984px] py-0 relative shrink-0 w-[215px]" data-name="Auto Layout Vertical">
      <Frame25 />
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

function Frame26() {
  return (
    <div className="box-border content-stretch flex gap-[37.5px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <AutoLayoutVertical5 />
      </div>
      <ExploreBtn1 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[215px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[19px] justify-center leading-[0] left-0 text-[14px] text-neutral-800 top-[8.5px] translate-y-[-50%] w-[215px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">Trending Profiles</p>
      </div>
    </div>
  );
}

function AutoLayoutVertical6() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start pl-0 pr-[135.984px] py-0 relative shrink-0 w-[215px]" data-name="Auto Layout Vertical">
      <Frame27 />
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

function Frame28() {
  return (
    <div className="box-border content-stretch flex gap-[37.5px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <AutoLayoutVertical6 />
      </div>
      <ExploreBtn2 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[215px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[19px] justify-center leading-[0] left-0 text-[14px] text-neutral-800 top-[8.5px] translate-y-[-50%] w-[215px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">You might like...</p>
      </div>
    </div>
  );
}

function AutoLayoutVertical7() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start pl-0 pr-[135.984px] py-0 relative shrink-0 w-[215px]" data-name="Auto Layout Vertical">
      <Frame29 />
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

function Frame30() {
  return (
    <div className="box-border content-stretch flex gap-[37.5px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <AutoLayoutVertical7 />
      </div>
      <ExploreBtn3 />
    </div>
  );
}

function AutoLayoutVertical8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[14px] py-[8px] relative shrink-0" data-name="Auto Layout Vertical">
      <Frame24 />
      <Frame26 />
      <Frame28 />
      <Frame30 />
    </div>
  );
}

function AutoLayoutHorizontal21() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[331px]" data-name="Auto Layout Horizontal">
      <AutoLayoutVertical8 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-center left-[-16px] top-[122px] w-[351px]" data-name="Frame">
      <AutoLayoutHorizontal20 />
      <AutoLayoutHorizontal21 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute h-[600px] left-[19px] right-[19px] top-[-3px]" data-name="Frame">
      <Frame31 />
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
      <Frame32 />
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
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame} />
      </div>
    </div>
  );
}

function Frame41() {
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

function Frame33() {
  return (
    <div className="absolute left-1/2 size-[24px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p156b1a70} fill="var(--fill-0, #EDCB48)" id="Vector" />
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

function AutoLayoutHorizontal22() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[2.359px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#edcb48] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal23() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal22 />
    </div>
  );
}

function AutoLayoutHorizontal24() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[122.641px] py-[12px] relative w-full">
          <Frame34 />
          <AutoLayoutHorizontal23 />
        </div>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal25() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.016px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Cart and Orders</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal26() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal25 />
    </div>
  );
}

function AutoLayoutHorizontal27() {
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
          <AutoLayoutHorizontal26 />
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

function AutoLayoutHorizontal28() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.016px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">My Payments</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal29() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal28 />
    </div>
  );
}

function AutoLayoutHorizontal30() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[120.984px] py-[12px] relative w-full">
          <LightThemeListsDefault />
          <AutoLayoutHorizontal29 />
        </div>
      </div>
    </div>
  );
}

function Group3() {
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
      <Group3 />
    </div>
  );
}

function AutoLayoutHorizontal31() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.031px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Messages</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal32() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal31 />
    </div>
  );
}

function AutoLayoutHorizontal33() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[98.969px] py-[12px] relative w-full">
          <LightThemeMessagesDefault />
          <AutoLayoutHorizontal32 />
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

function AutoLayoutHorizontal34() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[3.578px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Notifications</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal35() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal34 />
    </div>
  );
}

function AutoLayoutHorizontal36() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[78.422px] py-[12px] relative w-full">
          <LightThemeNotificationsDefault />
          <AutoLayoutHorizontal35 />
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
          <path d={svgPaths.p201bf680} id="Vector" stroke="var(--stroke-0, #3971B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.545 12.001H17.455" id="Line" stroke="var(--stroke-0, #3971B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12.003 6.545V17.455" id="Line_2" stroke="var(--stroke-0, #3971B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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

function AutoLayoutHorizontal37() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[1.766px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Create</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal38() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal37 />
    </div>
  );
}

function AutoLayoutHorizontal39() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[122.234px] py-[12px] relative w-full">
          <Frame36 />
          <AutoLayoutHorizontal38 />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
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

function Frame38() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame37 />
    </div>
  );
}

function AutoLayoutHorizontal40() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.672px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">More</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal41() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal40 />
    </div>
  );
}

function AutoLayoutHorizontal42() {
  return (
    <div className="box-border content-stretch flex items-start pl-[12px] pr-[130.328px] py-[12px] relative rounded-[24px] shrink-0" data-name="Auto Layout Horizontal">
      <Frame38 />
      <AutoLayoutHorizontal41 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[535px] items-start left-[12px] px-0 py-[4px] right-[12px] top-[100px]" data-name="Frame">
      <AutoLayoutHorizontal24 />
      <AutoLayoutHorizontal27 />
      <AutoLayoutHorizontal30 />
      <AutoLayoutHorizontal33 />
      <AutoLayoutHorizontal36 />
      <AutoLayoutHorizontal39 />
      <AutoLayoutHorizontal42 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute bg-white h-[616px] left-0 top-0 w-[244px]" data-name="Frame">
      <Frame41 />
      <Frame39 />
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
      <Frame40 />
    </div>
  );
}

export default function HomeFeed() {
  return (
    <div className="bg-white relative size-full" data-name="HOME FEED">
      <Frame22 />
      <RightPanel />
      <LeftPanel />
    </div>
  );
}