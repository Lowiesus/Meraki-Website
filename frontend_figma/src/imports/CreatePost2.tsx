import svgPaths from "./svg-e2dgths57v";
import imgFrame from "figma:asset/43f2f605db1237de841075d44257840170104211.png";
import imgImage from "figma:asset/c6749f285f9eef7615410c92e8e64bf36d7cd00c.png";
import imgFrame1 from "figma:asset/4256d83fa3ea07c5bb5a40919e427514ad91d83b.png";
import imgFrame2 from "figma:asset/82bf6f81904c1184bf7226524b14d64dd0d56731.png";
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

function Frame19() {
  return (
    <div className="absolute left-[-5px] size-[42px] top-[-5px]" data-name="Frame">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFrame1} />
      </div>
    </div>
  );
}

function Frame20() {
  return <div className="absolute bg-[#2963a3] inset-0" data-name="Frame" />;
}

function Frame21() {
  return (
    <div className="bg-neutral-50 overflow-clip relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <Frame20 />
      <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid left-0 rounded-[16px] size-[32px] top-0" data-name="Rectangle" />
    </div>
  );
}

function AutoLayoutHorizontal19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame19 />
      <Frame21 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Frame">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[3341.67%] left-[-2033.33%] max-w-none top-[-3075%] w-[3583.33%]" src={imgImage} />
      </div>
    </div>
  );
}

function AutoLayoutHorizontal20() {
  return (
    <div className="content-stretch flex gap-[4.063px] items-center relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2963a3] text-[14px] text-center text-nowrap">
        <p className="leading-[18px] whitespace-pre">USERNAME</p>
      </div>
      <Frame22 />
    </div>
  );
}

function AutoLayoutHorizontal21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start p-[2px] relative w-full">
          <AutoLayoutHorizontal20 />
        </div>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal22() {
  return (
    <div className="box-border content-stretch flex items-start pl-[4px] pr-[1.172px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#bacbdb] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">• 5h</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal23() {
  return (
    <div className="box-border content-stretch flex items-center pb-0 pt-px px-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal21 />
      <AutoLayoutHorizontal22 />
    </div>
  );
}

function AutoLayoutHorizontal24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start pb-[10px] pl-0 pr-[242.766px] pt-[7px] relative w-full">
          <AutoLayoutHorizontal23 />
        </div>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal25() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal19 />
      <AutoLayoutHorizontal24 />
    </div>
  );
}

function Frame23() {
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

function Frame24() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame23 />
    </div>
  );
}

function AutoLayoutHorizontal26() {
  return (
    <div className="box-border content-stretch flex gap-[19px] items-center pl-[5px] pr-0 py-[8px] relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal25 />
      <Frame24 />
    </div>
  );
}

function AutoLayoutHorizontal27() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal26 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="h-[585px] overflow-clip relative shrink-0 w-[468px]" data-name="Frame">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.25%] max-w-none top-0 w-[100.5%]" src={imgFrame2} />
      </div>
    </div>
  );
}

function AutoLayoutHorizontal28() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-start relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame25 />
    </div>
  );
}

function AutoLayoutHorizontal29() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center justify-center left-0 overflow-clip top-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal28 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="h-[585px] relative shrink-0 w-[468px]" data-name="Frame">
      <AutoLayoutHorizontal29 />
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

function Frame27() {
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

function AutoLayoutHorizontal30() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function AutoLayoutHorizontal31() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0" data-name="Auto Layout Horizontal">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit]">
        <AutoLayoutHorizontal30 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function AutoLayoutHorizontal32() {
  return (
    <div className="absolute box-border content-stretch flex gap-[3.906px] h-[41px] items-start left-[0.5px] pl-0 pr-[80.094px] py-0 top-[5px] w-[470px]" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#2963a3] text-[12px] w-[470px]">
        <p className="leading-[normal]">Proin eu sapien et lacus tristique ultrices euismod quis lorem. Sed euismod id sapien non efficitur. Praesent malesuada justo odio, at porttitor neque lobortis at.</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute h-[71px] left-[0.5px] top-[4px] w-[470px]" data-name="Frame">
      <AutoLayoutHorizontal32 />
    </div>
  );
}

function Frame29() {
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

function AutoLayoutHorizontal33() {
  return (
    <div className="box-border content-stretch flex h-[24px] items-center justify-center overflow-clip pb-0 pl-0 pr-[0.703px] pt-px relative shrink-0 w-[60px]" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2963a3] text-[13px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">741,368</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="box-border content-stretch flex gap-[5px] items-start overflow-clip px-[4px] py-0 relative shrink-0 w-[100px]" data-name="Frame">
      <Frame29 />
      <AutoLayoutHorizontal33 />
    </div>
  );
}

function Frame31() {
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

function AutoLayoutHorizontal34() {
  return (
    <div className="box-border content-stretch flex h-[24px] items-center justify-center overflow-clip pb-0 pl-0 pr-[0.703px] pt-px relative shrink-0 w-[60px]" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#bacbdb] text-[13px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">13,384</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="box-border content-stretch flex gap-[5px] items-start overflow-clip px-[4px] py-0 relative shrink-0 w-[100px]" data-name="Frame">
      <Frame31 />
      <AutoLayoutHorizontal34 />
    </div>
  );
}

function Socials1() {
  return (
    <div className="absolute content-stretch flex items-center left-[0.5px] top-[95px]" data-name="SOCIALS">
      <Frame30 />
      <Frame32 />
    </div>
  );
}

function Frame33() {
  return <div className="absolute left-[calc(50%+225px)] size-[24px] top-[calc(50%-35.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="Frame" />;
}

function Frame34() {
  return (
    <div className="basis-0 bg-white grow h-[18px] min-h-px min-w-px overflow-clip relative shrink-0" data-name="Frame">
      <div className="absolute flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[#2963a3] text-[14px] top-[9px] translate-y-[-50%] w-[457.2px]">
        <p className="leading-[18px]">Add a comment…</p>
      </div>
    </div>
  );
}

function Frame35() {
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

function Frame36() {
  return (
    <div className="overflow-clip relative shrink-0 size-[13px]" data-name="Frame">
      <Frame35 />
    </div>
  );
}

function AutoLayoutHorizontal35() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-[147px]" data-name="Auto Layout Horizontal">
      <Frame34 />
      <Frame36 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="h-[165px] relative shrink-0 w-[470px]" data-name="Frame">
      <Frame28 />
      <Socials1 />
      <Frame33 />
      <AutoLayoutHorizontal35 />
    </div>
  );
}

function AutoLayoutHorizontal36() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Auto Layout Horizontal">
      <Frame37 />
    </div>
  );
}

function AutoLayoutVertical1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Auto Layout Vertical">
      <AutoLayoutHorizontal27 />
      <AutoLayoutHorizontal31 />
      <AutoLayoutHorizontal36 />
    </div>
  );
}

function AutoLayoutHorizontal37() {
  return (
    <div className="box-border content-stretch flex items-center justify-center pb-[21px] pt-0 px-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div aria-hidden="true" className="absolute border-[#dbdbdb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <AutoLayoutVertical1 />
    </div>
  );
}

function AutoLayoutVertical2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[72px] items-center justify-center pb-[12627.2px] pt-0 px-0 relative shrink-0" data-name="Auto Layout Vertical">
      <AutoLayoutHorizontal18 />
      <AutoLayoutHorizontal37 />
    </div>
  );
}

function Frame38() {
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

function Frame39() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Frame">
      <Frame38 />
    </div>
  );
}

function AutoLayoutVertical3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[48px] items-center pb-[8px] pt-0 px-0 relative shrink-0" data-name="Auto Layout Vertical">
      <AutoLayoutVertical2 />
      <Frame39 />
    </div>
  );
}

function AutoLayoutVertical4() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[25px] h-[14578px] items-center left-[calc(50%-161px)] pb-0 pt-[72px] px-0 top-[-30px] translate-x-[-50%] w-[779px]" data-name="Auto Layout Vertical">
      <SearchAndFilter />
      <AutoLayoutVertical3 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="h-[15670.7px] relative shrink-0 w-[1013px]" data-name="Frame">
      <AutoLayoutVertical4 />
    </div>
  );
}

function AutoLayoutHorizontal38() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-start left-0 px-[46px] py-0 top-0" data-name="Auto Layout Horizontal">
      <Frame40 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute h-[3208px] left-[calc(16.67%+54px)] overflow-clip top-0 w-[783px]" data-name="Frame">
      <AutoLayoutHorizontal38 />
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

function AutoLayoutHorizontal39() {
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

function Frame42() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[215px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[19px] justify-center leading-[0] left-0 text-[14px] text-neutral-800 top-[8.5px] translate-y-[-50%] w-[215px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">What’s Trending Today</p>
      </div>
    </div>
  );
}

function AutoLayoutVertical5() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start pl-0 pr-[135.984px] py-0 relative shrink-0 w-[215px]" data-name="Auto Layout Vertical">
      <Frame42 />
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

function Frame43() {
  return (
    <div className="box-border content-stretch flex gap-[37.5px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <AutoLayoutVertical5 />
      </div>
      <ExploreBtn />
    </div>
  );
}

function Frame44() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[215px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[19px] justify-center leading-[0] left-0 text-[14px] text-neutral-800 top-[8.5px] translate-y-[-50%] w-[215px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">What Happening Recently</p>
      </div>
    </div>
  );
}

function AutoLayoutVertical6() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start pl-0 pr-[135.984px] py-0 relative shrink-0 w-[215px]" data-name="Auto Layout Vertical">
      <Frame44 />
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

function Frame45() {
  return (
    <div className="box-border content-stretch flex gap-[37.5px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <AutoLayoutVertical6 />
      </div>
      <ExploreBtn1 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[215px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[19px] justify-center leading-[0] left-0 text-[14px] text-neutral-800 top-[8.5px] translate-y-[-50%] w-[215px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">Trending Profiles</p>
      </div>
    </div>
  );
}

function AutoLayoutVertical7() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start pl-0 pr-[135.984px] py-0 relative shrink-0 w-[215px]" data-name="Auto Layout Vertical">
      <Frame46 />
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

function Frame47() {
  return (
    <div className="box-border content-stretch flex gap-[37.5px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <AutoLayoutVertical7 />
      </div>
      <ExploreBtn2 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[215px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[19px] justify-center leading-[0] left-0 text-[14px] text-neutral-800 top-[8.5px] translate-y-[-50%] w-[215px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">You might like...</p>
      </div>
    </div>
  );
}

function AutoLayoutVertical8() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start pl-0 pr-[135.984px] py-0 relative shrink-0 w-[215px]" data-name="Auto Layout Vertical">
      <Frame48 />
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

function Frame49() {
  return (
    <div className="box-border content-stretch flex gap-[37.5px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <AutoLayoutVertical8 />
      </div>
      <ExploreBtn3 />
    </div>
  );
}

function AutoLayoutVertical9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[14px] py-[8px] relative shrink-0" data-name="Auto Layout Vertical">
      <Frame43 />
      <Frame45 />
      <Frame47 />
      <Frame49 />
    </div>
  );
}

function AutoLayoutHorizontal40() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[331px]" data-name="Auto Layout Horizontal">
      <AutoLayoutVertical9 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-center left-[-16px] top-[122px] w-[351px]" data-name="Frame">
      <AutoLayoutHorizontal39 />
      <AutoLayoutHorizontal40 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute h-[600px] left-[19px] right-[19px] top-[-3px]" data-name="Frame">
      <Frame50 />
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
      <Frame51 />
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

function Frame64() {
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

function Frame52() {
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

function Frame53() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame52 />
    </div>
  );
}

function AutoLayoutHorizontal41() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[2.359px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#edcb48] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal42() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal41 />
    </div>
  );
}

function AutoLayoutHorizontal43() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[122.641px] py-[12px] relative w-full">
          <Frame53 />
          <AutoLayoutHorizontal42 />
        </div>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal44() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.016px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Cart and Orders</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal45() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal44 />
    </div>
  );
}

function AutoLayoutHorizontal46() {
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
          <AutoLayoutHorizontal45 />
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

function AutoLayoutHorizontal47() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.016px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">My Payments</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal48() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal47 />
    </div>
  );
}

function AutoLayoutHorizontal49() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[120.984px] py-[12px] relative w-full">
          <LightThemeListsDefault />
          <AutoLayoutHorizontal48 />
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

function AutoLayoutHorizontal50() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.031px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Messages</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal51() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal50 />
    </div>
  );
}

function AutoLayoutHorizontal52() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[98.969px] py-[12px] relative w-full">
          <LightThemeMessagesDefault />
          <AutoLayoutHorizontal51 />
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

function AutoLayoutHorizontal53() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[3.578px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Notifications</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal54() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal53 />
    </div>
  );
}

function AutoLayoutHorizontal55() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[78.422px] py-[12px] relative w-full">
          <LightThemeNotificationsDefault />
          <AutoLayoutHorizontal54 />
        </div>
      </div>
    </div>
  );
}

function Frame54() {
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

function Frame55() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame54 />
    </div>
  );
}

function AutoLayoutHorizontal56() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[1.766px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Create</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal57() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal56 />
    </div>
  );
}

function AutoLayoutHorizontal58() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[122.234px] py-[12px] relative w-full">
          <Frame55 />
          <AutoLayoutHorizontal57 />
        </div>
      </div>
    </div>
  );
}

function Frame56() {
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

function Frame57() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame56 />
    </div>
  );
}

function AutoLayoutHorizontal59() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.672px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">More</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal60() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal59 />
    </div>
  );
}

function AutoLayoutHorizontal61() {
  return (
    <div className="box-border content-stretch flex items-start pl-[12px] pr-[130.328px] py-[12px] relative rounded-[24px] shrink-0" data-name="Auto Layout Horizontal">
      <Frame57 />
      <AutoLayoutHorizontal60 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[535px] items-start left-[12px] px-0 py-[4px] right-[12px] top-[100px]" data-name="Frame">
      <AutoLayoutHorizontal43 />
      <AutoLayoutHorizontal46 />
      <AutoLayoutHorizontal49 />
      <AutoLayoutHorizontal52 />
      <AutoLayoutHorizontal55 />
      <AutoLayoutHorizontal58 />
      <AutoLayoutHorizontal61 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="absolute bg-white h-[616px] left-0 top-0 w-[244px]" data-name="Frame">
      <Frame64 />
      <Frame58 />
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
      <Frame59 />
    </div>
  );
}

function AutoLayoutHorizontal62() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[162.313px] pr-[162.688px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-neutral-800 w-[329px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Create new post</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal63() {
  return (
    <div className="absolute box-border content-stretch flex items-start left-0 pb-[10px] pt-[9px] px-0 right-0 top-0" data-name="Auto Layout Horizontal">
      <div aria-hidden="true" className="absolute border-[#dbdbdb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <AutoLayoutHorizontal62 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Frame">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame} />
    </div>
  );
}

function AutoLayoutHorizontal64() {
  return (
    <div className="content-stretch flex gap-[4.063px] items-center relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2963a3] text-[14px] text-center text-nowrap">
        <p className="leading-[18px] whitespace-pre">USERNAME</p>
      </div>
      <Frame60 />
    </div>
  );
}

function AutoLayoutHorizontal65() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start p-[2px] relative w-full">
          <AutoLayoutHorizontal64 />
        </div>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal66() {
  return <div className="h-[18px] shrink-0 w-[33.172px]" data-name="Auto Layout Horizontal" />;
}

function AutoLayoutHorizontal67() {
  return (
    <div className="box-border content-stretch flex items-center pb-0 pt-px px-0 relative shrink-0 w-[137.234px]" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal65 />
      <AutoLayoutHorizontal66 />
    </div>
  );
}

function AutoLayoutHorizontal68() {
  return (
    <div className="absolute box-border content-stretch flex items-start left-[133px] overflow-clip pb-[10px] pl-0 pr-[242.766px] pt-[7px] top-[calc(50%-228px)] translate-y-[-50%]" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal67 />
    </div>
  );
}

function Frame61() {
  return <div className="absolute bg-[red] inset-[60px_510px_518px_79px] rounded-[60px]" data-name="Frame" />;
}

function SearchAndIcon1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Search and icon">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#6e7e8c] text-[12px] text-nowrap whitespace-pre">What’s on your mind?</p>
    </div>
  );
}

function Search2() {
  return (
    <div className="absolute bg-[#d4d9e4] box-border content-stretch flex gap-[180px] items-center left-[79px] p-[16px] rounded-[8px] top-[494px] w-[482px]" data-name="Search">
      <SearchAndIcon1 />
    </div>
  );
}

function AutoLayoutHorizontal69() {
  return (
    <div className="absolute bg-[#0095f6] box-border content-stretch flex items-start left-[550px] pl-[16px] pr-[16.688px] py-[7px] rounded-[8px] top-[569px]" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Post</p>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal70() {
  return (
    <div className="absolute bg-[#b7dbfa] box-border content-stretch flex items-start left-[460px] pl-[16px] pr-[16.688px] py-[7px] rounded-[8px] top-[569px]" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Cancel</p>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="h-[626px] overflow-clip relative shrink-0 w-[637px]" data-name="Frame">
      <AutoLayoutHorizontal63 />
      <AutoLayoutHorizontal68 />
      <Frame61 />
      <Search2 />
      <AutoLayoutHorizontal69 />
      <AutoLayoutHorizontal70 />
    </div>
  );
}

function AutoLayoutHorizontal71() {
  return (
    <div className="bg-white content-stretch flex h-[626px] items-start overflow-clip relative rounded-[12px] shrink-0 w-[637px]" data-name="Auto Layout Horizontal">
      <Frame62 />
    </div>
  );
}

function AutoLayoutHorizontal72() {
  return (
    <div className="absolute box-border content-stretch flex h-[666px] items-start left-[calc(62.5%-42px)] overflow-clip p-[20px] top-[142px] translate-x-[-50%] w-[672px]" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal71 />
    </div>
  );
}

function Camera() {
  return (
    <div className="absolute inset-[15.62%_11.46%_16.39%_11.46%]" data-name="Camera">
      <div className="absolute inset-[-6.89%_-6.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 27">
          <g id="Camera">
            <path clipRule="evenodd" d={svgPaths.p3f8f9b80} fillRule="evenodd" id="Stroke 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.1875" />
            <path d="M22.4829 9.73987H22.4957" id="Stroke 13" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.25" />
            <path clipRule="evenodd" d={svgPaths.p18e5900} fillRule="evenodd" id="Stroke 5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.1875" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightCamera() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Iconly/Light/Camera">
      <Camera />
    </div>
  );
}

function Camera1() {
  return (
    <div className="absolute bg-[#ffd968] box-border content-stretch flex gap-[21.25px] items-start left-[403px] p-[17px] rounded-[191.25px] size-[65px] top-[280px]" data-name="Camera">
      <div aria-hidden="true" className="absolute border-[6.375px] border-solid border-white inset-[-3.188px] pointer-events-none rounded-[194.438px]" />
      <IconlyLightCamera />
    </div>
  );
}

function Frame63() {
  return (
    <div className="absolute bg-[red] h-[360px] left-[calc(41.67%+21px)] overflow-clip rounded-[8px] top-[279px] w-[482px]">
      <div className="absolute h-[188.192px] left-[16.13px] top-[92.01px] w-[266.456px]" data-name="image 63" />
      <Camera1 />
    </div>
  );
}

export default function CreatePost() {
  return (
    <div className="bg-white relative size-full" data-name="CREATE POST_2">
      <Frame41 />
      <RightPanel />
      <div className="absolute bg-[rgba(5,16,28,0.65)] h-[1024px] left-[calc(16.67%+54px)] top-0 w-[1146px]" />
      <LeftPanel />
      <AutoLayoutHorizontal72 />
      <Frame63 />
    </div>
  );
}