import svgPaths from "./svg-xvk03yxws1";
import imgAvatarSmall from "figma:asset/ce67d23a925af943f1634792363b9deeb4837a22.png";
import imgLogoIcon2 from "figma:asset/2b7e679a7a86a6e24f1b9a9001522d9b89b0d82e.png";

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

function Frame10() {
  return (
    <div className="absolute content-stretch flex items-center left-[12px] top-[28.63px]">
      <div className="relative shrink-0 size-[51.75px]" data-name="LOGO_ICON 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoIcon2} />
      </div>
    </div>
  );
}

function Frame() {
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

function Frame3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame />
    </div>
  );
}

function AutoLayoutHorizontal() {
  return <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[2.359px] py-0 shrink-0" data-name="Auto Layout Horizontal" />;
}

function AutoLayoutHorizontal1() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal />
    </div>
  );
}

function AutoLayoutHorizontal2() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[122.641px] py-[12px] relative w-full">
          <Frame3 />
          <AutoLayoutHorizontal1 />
        </div>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal3() {
  return <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.016px] py-0 shrink-0" data-name="Auto Layout Horizontal" />;
}

function AutoLayoutHorizontal4() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal3 />
    </div>
  );
}

function AutoLayoutHorizontal5() {
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
          <AutoLayoutHorizontal4 />
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

function AutoLayoutHorizontal6() {
  return <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.016px] py-0 shrink-0" data-name="Auto Layout Horizontal" />;
}

function AutoLayoutHorizontal7() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal6 />
    </div>
  );
}

function AutoLayoutHorizontal8() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[120.984px] py-[12px] relative w-full">
          <LightThemeListsDefault />
          <AutoLayoutHorizontal7 />
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
          <path d={svgPaths.p348ac880} fill="var(--fill-0, #5182C1)" id="Vector" />
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

function AutoLayoutHorizontal9() {
  return <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.031px] py-0 shrink-0" data-name="Auto Layout Horizontal" />;
}

function AutoLayoutHorizontal10() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[16px] pr-0 py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal9 />
    </div>
  );
}

function AutoLayoutHorizontal11() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Auto Layout Horizontal">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[98.969px] py-[12px] relative w-full">
          <LightThemeMessagesDefault />
          <AutoLayoutHorizontal10 />
        </div>
      </div>
    </div>
  );
}

function Group2() {
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
      <Group2 />
    </div>
  );
}

function AutoLayoutHorizontal12() {
  return <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[3.578px] py-0 shrink-0" data-name="Auto Layout Horizontal" />;
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
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[78.422px] py-[12px] relative w-full">
          <LightThemeNotificationsDefault />
          <AutoLayoutHorizontal13 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
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

function Frame5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame4 />
    </div>
  );
}

function AutoLayoutHorizontal15() {
  return <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[1.766px] py-0 shrink-0" data-name="Auto Layout Horizontal" />;
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
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[122.234px] py-[12px] relative w-full">
          <Frame5 />
          <AutoLayoutHorizontal16 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
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

function Frame7() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame6 />
    </div>
  );
}

function AutoLayoutHorizontal18() {
  return <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.672px] py-0 shrink-0" data-name="Auto Layout Horizontal" />;
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
    <div className="box-border content-stretch flex items-start pl-[12px] pr-[130.328px] py-[12px] relative rounded-[24px] shrink-0" data-name="Auto Layout Horizontal">
      <Frame7 />
      <AutoLayoutHorizontal19 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[535px] items-start left-[12px] px-0 py-[4px] right-[12px] top-[100px]" data-name="Frame">
      <AutoLayoutHorizontal2 />
      <AutoLayoutHorizontal5 />
      <AutoLayoutHorizontal8 />
      <AutoLayoutHorizontal11 />
      <AutoLayoutHorizontal14 />
      <AutoLayoutHorizontal17 />
      <AutoLayoutHorizontal20 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[616px] left-0 top-0 w-[244px]" data-name="Frame">
      <Frame10 />
      <Frame8 />
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
      <Frame9 />
    </div>
  );
}

function Profit() {
  return (
    <div className="absolute inset-[64.2%_1.67%_4.79%_72.11%]" data-name="Profit">
      <div className="absolute inset-[-0.62%_-0.23%_-0.22%_-0.23%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 282">
          <g id="Profit">
            <path d={svgPaths.p12d70100} id="Shape" stroke="var(--stroke-0, #00B69B)" strokeLinecap="round" strokeWidth="3.44912" />
            <path clipRule="evenodd" d={svgPaths.p3017d0f0} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point" stroke="var(--stroke-0, #F6F7F9)" strokeWidth="1.20719" />
            <path clipRule="evenodd" d={svgPaths.p1e6f300} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point_2" stroke="var(--stroke-0, #F6F7F9)" strokeWidth="1.20719" />
            <path clipRule="evenodd" d={svgPaths.p36ae4900} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point_3" stroke="var(--stroke-0, #F6F7F9)" strokeWidth="1.20719" />
            <path clipRule="evenodd" d={svgPaths.p330cb2c0} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point_4" stroke="var(--stroke-0, #F6F7F9)" strokeWidth="1.20719" />
            <path clipRule="evenodd" d={svgPaths.p4d85980} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point_5" stroke="var(--stroke-0, #F6F7F9)" strokeWidth="1.20719" />
            <path clipRule="evenodd" d={svgPaths.p4857880} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point_6" stroke="var(--stroke-0, #F6F7F9)" strokeWidth="1.20719" />
            <path clipRule="evenodd" d={svgPaths.p2913b600} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point_7" stroke="var(--stroke-0, #F6F7F9)" strokeWidth="1.20719" />
            <path clipRule="evenodd" d={svgPaths.p3c9e4a00} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point_8" stroke="var(--stroke-0, #F6F7F9)" strokeWidth="1.20719" />
            <path clipRule="evenodd" d={svgPaths.p19ac6900} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point_9" stroke="var(--stroke-0, #F6F7F9)" strokeWidth="1.20719" />
            <path clipRule="evenodd" d={svgPaths.p308965b0} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point_10" stroke="var(--stroke-0, #F6F7F9)" strokeWidth="1.20719" />
            <path clipRule="evenodd" d={svgPaths.p288cfd80} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point_11" stroke="var(--stroke-0, #F6F7F9)" strokeWidth="1.20719" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Sales() {
  return (
    <div className="absolute inset-[63.33%_3.42%_10.59%_72.11%]" data-name="Sales">
      <div className="absolute inset-[-0.73%_-0.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 242 239">
          <g id="Sales">
            <path d={svgPaths.p1cd03d00} id="Shape" stroke="var(--stroke-0, #4880FF)" strokeLinecap="round" strokeWidth="3.44912" />
            <path clipRule="evenodd" d={svgPaths.p35964900} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point" stroke="var(--stroke-0, #4880FF)" strokeWidth="1.20719" />
            <path clipRule="evenodd" d={svgPaths.p1d190800} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point_2" stroke="var(--stroke-0, #4880FF)" strokeWidth="1.20719" />
            <path clipRule="evenodd" d={svgPaths.p36801600} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point_3" stroke="var(--stroke-0, #4880FF)" strokeWidth="1.20719" />
            <path clipRule="evenodd" d={svgPaths.p3f54f500} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point_4" stroke="var(--stroke-0, #4880FF)" strokeWidth="1.20719" />
            <path clipRule="evenodd" d={svgPaths.p2819a80} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point_5" stroke="var(--stroke-0, #4880FF)" strokeWidth="1.20719" />
            <path clipRule="evenodd" d={svgPaths.p7928980} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point_6" stroke="var(--stroke-0, #4880FF)" strokeWidth="1.20719" />
            <path clipRule="evenodd" d={svgPaths.p31fc5200} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point_7" stroke="var(--stroke-0, #4880FF)" strokeWidth="1.20719" />
            <path clipRule="evenodd" d={svgPaths.p10276980} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point_8" stroke="var(--stroke-0, #4880FF)" strokeWidth="1.20719" />
            <path clipRule="evenodd" d={svgPaths.p21d6a900} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point_9" stroke="var(--stroke-0, #4880FF)" strokeWidth="1.20719" />
            <path clipRule="evenodd" d={svgPaths.pc0de180} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point_10" stroke="var(--stroke-0, #4880FF)" strokeWidth="1.20719" />
            <path clipRule="evenodd" d={svgPaths.p22cc9200} fill="var(--fill-0, #00B69B)" fillRule="evenodd" id="Point_11" stroke="var(--stroke-0, #4880FF)" strokeWidth="1.20719" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function FeaturedProduct() {
  return (
    <div className="absolute bottom-0 contents left-[68.42%] right-0 top-[61.17%]" data-name="Featured Product">
      <div className="absolute bg-[#f6f7f9] bottom-0 left-[68.42%] right-0 rounded-[12.072px] shadow-[5.174px_5.174px_46.563px_0px_rgba(0,0,0,0.05)] top-[61.17%]" data-name="Bg" />
      <Profit />
      <Sales />
      <div className="absolute inset-[94.68%_1.4%_5.21%_72.46%]">
        <div className="absolute inset-[36.49%_-0.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 258 1">
            <path d="M0.129342 0.129342H257.089" id="Line 2" opacity="0.2" stroke="var(--stroke-0, #979797)" strokeLinecap="square" strokeWidth="0.258684" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[88.4%_1.4%_11.49%_72.46%]">
        <div className="absolute inset-[36.49%_-0.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 258 1">
            <path d="M0.129342 0.129342H257.089" id="Line 2" opacity="0.2" stroke="var(--stroke-0, #979797)" strokeLinecap="square" strokeWidth="0.258684" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[82.13%_1.4%_17.77%_72.46%]">
        <div className="absolute inset-[36.49%_-0.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 258 1">
            <path d="M0.129342 0.129342H257.089" id="Line 2" opacity="0.2" stroke="var(--stroke-0, #979797)" strokeLinecap="square" strokeWidth="0.258684" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[75.85%_1.4%_24.04%_72.46%]">
        <div className="absolute inset-[36.49%_-0.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 258 1">
            <path d="M0.129342 0.129342H257.089" id="Line 2" opacity="0.2" stroke="var(--stroke-0, #979797)" strokeLinecap="square" strokeWidth="0.258684" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[69.57%_1.4%_30.32%_72.46%]">
        <div className="absolute inset-[36.49%_-0.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 258 1">
            <path d="M0.129342 0.129342H257.089" id="Line 2" opacity="0.2" stroke="var(--stroke-0, #979797)" strokeLinecap="square" strokeWidth="0.258684" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[96.05%] right-[1.4%] text-[10.347px] text-[rgba(41,44,47,0.4)] text-nowrap top-[calc(50%+380.54px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2019
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[90%] right-[7.46%] text-[10.347px] text-[rgba(41,44,47,0.4)] text-nowrap top-[calc(50%+380.54px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2018
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[83.95%] right-[13.51%] text-[10.347px] text-[rgba(41,44,47,0.4)] text-nowrap top-[calc(50%+380.54px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2017
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[77.89%] right-[19.56%] text-[10.347px] text-[rgba(41,44,47,0.4)] text-nowrap top-[calc(50%+380.54px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2016
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[71.84%] right-[25.61%] text-[10.347px] text-[rgba(41,44,47,0.4)] text-nowrap top-[calc(50%+380.54px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2015
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[71.05%] right-[28.24%] text-[10.347px] text-[rgba(41,44,47,0.4)] text-nowrap text-right top-[calc(50%+358.98px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        0
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[70.44%] right-[28.24%] text-[10.347px] text-[rgba(41,44,47,0.4)] text-nowrap text-right top-[calc(50%+308.11px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        25
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[70.44%] right-[28.24%] text-[10.347px] text-[rgba(41,44,47,0.4)] text-nowrap text-right top-[calc(50%+257.23px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        50
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[70.44%] right-[28.24%] text-[10.347px] text-[rgba(41,44,47,0.4)] text-nowrap text-right top-[calc(50%+206.36px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        75
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[69.82%] right-[28.24%] text-[10.347px] text-[rgba(41,44,47,0.4)] text-nowrap text-right top-[calc(50%+155.48px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        100
      </p>
      <div className="absolute font-['Work_Sans:Bold',sans-serif] font-bold leading-[17.246px] left-[70.53%] right-[14.93%] text-[#104274] text-[18.97px] text-nowrap top-[calc(50%+111.51px)] whitespace-pre">
        <p className="mb-0">Sales Analytics</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function RightArrow() {
  return (
    <div className="absolute inset-[78.4%_35.61%_17.23%_60.79%]" data-name="Right arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 40">
        <g id="Right arrow">
          <path clipRule="evenodd" d={svgPaths.p178f5f00} fill="var(--fill-0, #E2EAF8)" fillRule="evenodd" id="Oval" opacity="0.4" />
          <g id="ic-keyboard-arrow-down-24px">
            <path d={svgPaths.p4df0080} fill="var(--fill-0, #626262)" id="Path" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Left() {
  return (
    <div className="relative size-full" data-name="Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 40">
        <g id="Left">
          <path clipRule="evenodd" d={svgPaths.p178f5f00} fill="var(--fill-0, #E2EAF8)" fillRule="evenodd" id="Oval" opacity="0.4" />
          <g id="ic-keyboard-arrow-down-24px">
            <path d={svgPaths.p4df0080} fill="var(--fill-0, #626262)" id="Path" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FeaturedProduct1() {
  return (
    <div className="absolute bottom-0 contents left-[34.21%] right-[34.21%] top-[61.17%]" data-name="Featured Product">
      <div className="absolute bg-[#f6f7f9] bottom-0 left-[34.21%] right-[34.21%] rounded-[12.072px] shadow-[5.174px_5.174px_46.563px_0px_rgba(0,0,0,0.05)] top-[61.17%]" data-name="Bg" />
      <RightArrow />
      <div className="absolute flex inset-[78.4%_60.79%_17.23%_35.61%] items-center justify-center">
        <div className="flex-none h-[39.255px] rotate-[180deg] scale-y-[-100%] w-[35.354px]">
          <Left />
        </div>
      </div>
      <div className="absolute inset-[68.3%_43.51%_11.93%_43.6%]" data-name="Bitmap" />
      <p className="absolute font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[17.246px] left-[41.4%] right-[41.3%] text-[#282d32] text-[15.521px] text-nowrap top-[calc(50%+342.6px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Beats Headphone 2019
      </p>
      <p className="absolute font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[17.246px] left-[47.72%] opacity-70 right-[47.7%] text-[#4880ff] text-[13.796px] text-nowrap top-[calc(50%+366.74px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        $89.00
      </p>
      <p className="absolute font-['Work_Sans:Bold',sans-serif] font-bold leading-[17.246px] left-[36.32%] right-[47%] text-[#104274] text-[18.97px] text-nowrap top-[calc(50%+111.51px)] whitespace-pre">Featured Product</p>
    </div>
  );
}

function BgColor() {
  return (
    <div className="absolute inset-[69.84%_77.76%_14.63%_9.43%]" data-name="BG Color">
      <div className="absolute inset-[-4.63%_-5.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139 153">
          <g id="BG Color">
            <path clipRule="evenodd" d={svgPaths.p6655800} fillRule="evenodd" id="Gradient Base" opacity="0.463123" stroke="var(--stroke-0, #C0D2F0)" strokeWidth="12.9342" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MainColor() {
  return (
    <div className="absolute inset-[69.84%_77.76%_14.63%_9.43%]" data-name="Main Color">
      <div className="absolute inset-[-4.63%_-5.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139 153">
          <g id="Main Color">
            <path clipRule="evenodd" d={svgPaths.p362578c0} fillRule="evenodd" id="Color Base" stroke="var(--stroke-0, #4880FF)" strokeDasharray="301.8 8622.81" strokeLinecap="round" strokeWidth="12.9342" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute contents inset-[69.84%_77.76%_14.63%_9.43%]" data-name="body">
      <BgColor />
      <MainColor />
    </div>
  );
}

function NewCustomers() {
  return (
    <div className="absolute contents inset-[85.67%_84.37%_3.83%_3.6%]" data-name="New Customers">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.246px] left-[5.35%] opacity-80 right-[84.37%] text-[#282d32] text-[13.796px] text-nowrap top-[calc(50%+360.7px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        New Customers
      </p>
      <div className="absolute inset-[94.89%_95.35%_3.83%_3.6%]" data-name="Oval">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 12">
          <path clipRule="evenodd" d={svgPaths.p3ba99d00} fill="var(--fill-0, #4880FF)" fillRule="evenodd" id="Oval" />
        </svg>
      </div>
      <p className="absolute font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] left-[5.35%] right-[86.21%] text-[#104274] text-[24.144px] text-nowrap top-[calc(50%+321.04px)] tracking-[0.8623px] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        34,249
      </p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[90.08%_72.13%_3.83%_19.91%]" data-name="Group">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.246px] left-[21.67%] opacity-80 right-[72.13%] text-[#282d32] text-[13.796px] text-nowrap top-[calc(50%+360.71px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Repeated
      </p>
      <div className="absolute inset-[94.89%_79.04%_3.83%_19.91%]" data-name="Oval">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 12">
          <path clipRule="evenodd" d={svgPaths.p3ba99d00} fill="var(--fill-0, #C0D2F0)" fillRule="evenodd" id="Oval" />
        </svg>
      </div>
    </div>
  );
}

function Repeated() {
  return (
    <div className="absolute contents inset-[85.67%_72.13%_3.83%_19.91%]" data-name="Repeated">
      <Group3 />
      <p className="absolute font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] left-[20.79%] right-[73.01%] text-[#104274] text-[24.144px] text-center text-nowrap top-[calc(50%+321.04px)] tracking-[0.8623px] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        1420
      </p>
    </div>
  );
}

function Customers() {
  return (
    <div className="absolute bottom-0 contents left-0 right-[68.42%] top-[61.17%]" data-name="Customers">
      <div className="absolute bg-[#f6f7f9] bottom-0 left-0 right-[68.42%] rounded-[12.072px] shadow-[5.174px_5.174px_46.563px_0px_rgba(0,0,0,0.05)] top-[61.17%]" data-name="Bg" />
      <Body />
      <NewCustomers />
      <Repeated />
      <p className="absolute font-['Work_Sans:Bold',sans-serif] font-bold leading-[17.246px] left-[2.11%] right-[87.52%] text-[#104274] text-[18.97px] text-nowrap top-[calc(50%+111.51px)] whitespace-pre">Customers</p>
    </div>
  );
}

function Profit1() {
  return (
    <div className="absolute contents inset-[52.33%_41.43%_45.67%_52.46%]" data-name="Profit">
      <p className="absolute font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[17.246px] left-[54.91%] right-[41.43%] text-[#282d32] text-[13.796px] text-nowrap top-[calc(50%+20.97px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Profit
      </p>
      <div className="absolute inset-[52.87%_46.49%_45.85%_52.46%]" data-name="Oval">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 12">
          <path clipRule="evenodd" d={svgPaths.p3ba99d00} fill="var(--fill-0, #85C4C7)" fillRule="evenodd" id="Oval" />
        </svg>
      </div>
    </div>
  );
}

function Sales1() {
  return (
    <div className="absolute contents inset-[52.33%_52.67%_45.67%_41.32%]" data-name="Sales">
      <p className="absolute font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[17.246px] left-[43.77%] right-[52.67%] text-[#282d32] text-[13.796px] text-nowrap top-[calc(50%+20.97px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Sales
      </p>
      <div className="absolute inset-[52.87%_57.63%_45.85%_41.32%]" data-name="Oval">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 12">
          <path clipRule="evenodd" d={svgPaths.p3ba99d00} fill="var(--fill-0, #6DBDFF)" fillRule="evenodd" id="Oval" />
        </svg>
      </div>
    </div>
  );
}

function Line() {
  return (
    <div className="absolute inset-[19.04%_2.98%_55.74%_9.47%]" data-name="Line">
      <div className="absolute bottom-0 left-[-0.05%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 861 227">
          <g id="Line" opacity="0.951521">
            <g id="Line_2">
              <path clipRule="evenodd" d="M0.43114 226.436H860.262Z" fill="var(--fill-0, #F6F7F9)" fillRule="evenodd" />
              <path d="M0.43114 226.436H860.262" stroke="var(--stroke-0, #EAEAEA)" strokeLinecap="square" strokeWidth="0.862281" />
            </g>
            <g id="Line_3">
              <path clipRule="evenodd" d="M0.43114 169.947H860.262Z" fill="var(--fill-0, #F6F7F9)" fillRule="evenodd" />
              <path d="M0.43114 169.947H860.262" stroke="var(--stroke-0, #EAEAEA)" strokeLinecap="square" strokeWidth="0.862281" />
            </g>
            <g id="Line_4">
              <path clipRule="evenodd" d="M0.43114 113.457H860.262Z" fill="var(--fill-0, #F6F7F9)" fillRule="evenodd" />
              <path d="M0.43114 113.457H860.262" stroke="var(--stroke-0, #EAEAEA)" strokeLinecap="square" strokeWidth="0.862281" />
            </g>
            <g id="Line_5">
              <path clipRule="evenodd" d="M0.43114 56.9677H860.262Z" fill="var(--fill-0, #F6F7F9)" fillRule="evenodd" />
              <path d="M0.43114 56.9677H860.262" stroke="var(--stroke-0, #EAEAEA)" strokeLinecap="square" strokeWidth="0.862281" />
            </g>
            <g id="Line_6">
              <path clipRule="evenodd" d="M0.431163 0.478655H860.262Z" fill="var(--fill-0, #F6F7F9)" fillRule="evenodd" />
              <path d="M0.431163 0.478655H860.262" stroke="var(--stroke-0, #EAEAEA)" strokeLinecap="square" strokeWidth="0.862281" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Units() {
  return (
    <div className="absolute contents inset-[19.04%_2.98%_51.57%_2.81%]" data-name="units">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[61.75%] right-[36.41%] text-[10.347px] text-[rgba(43,48,52,0.4)] text-center text-nowrap top-[calc(50%-22.15px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        40k
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[69.3%] right-[28.87%] text-[10.347px] text-[rgba(43,48,52,0.4)] text-center text-nowrap top-[calc(50%-22.15px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        45k
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[76.84%] right-[21.33%] text-[10.347px] text-[rgba(43,48,52,0.4)] text-center text-nowrap top-[calc(50%-22.15px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        50k
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[84.39%] right-[13.78%] text-[10.347px] text-[rgba(43,48,52,0.4)] text-center text-nowrap top-[calc(50%-22.15px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        55k
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[91.93%] right-[6.24%] text-[10.347px] text-[rgba(43,48,52,0.4)] text-center text-nowrap top-[calc(50%-22.15px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        60k
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[9.47%] right-[89.31%] text-[10.347px] text-[rgba(43,48,52,0.4)] text-center text-nowrap top-[calc(50%-22.15px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        5k
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[16.45%] right-[81.72%] text-[10.347px] text-[rgba(43,48,52,0.4)] text-center text-nowrap top-[calc(50%-22.15px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        10k
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[23.99%] right-[74.18%] text-[10.347px] text-[rgba(43,48,52,0.4)] text-center text-nowrap top-[calc(50%-22.15px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        15k
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[31.54%] right-[66.63%] text-[10.347px] text-[rgba(43,48,52,0.4)] text-center text-nowrap top-[calc(50%-22.15px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        20k
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[39.08%] right-[59.09%] text-[10.347px] text-[rgba(43,48,52,0.4)] text-center text-nowrap top-[calc(50%-22.15px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        25k
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[54.21%] right-[43.96%] text-[10.347px] text-[rgba(43,48,52,0.4)] text-center text-nowrap top-[calc(50%-22.15px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        35k
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[46.62%] right-[51.55%] text-[10.347px] text-[rgba(43,48,52,0.4)] text-center text-nowrap top-[calc(50%-22.15px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        30k
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[2.81%] right-[95.87%] text-[10.347px] text-[rgba(43,48,52,0.4)] text-nowrap top-[calc(50%-50.6px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        20
      </p>
      <Line />
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[2.81%] right-[95.87%] text-[10.347px] text-[rgba(43,48,52,0.4)] text-nowrap top-[calc(50%-101.48px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        40
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[2.81%] right-[95.87%] text-[10.347px] text-[rgba(43,48,52,0.4)] text-nowrap top-[calc(50%-152.35px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        60
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[2.81%] right-[95.87%] text-[10.347px] text-[rgba(43,48,52,0.4)] text-nowrap top-[calc(50%-203.23px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        80
      </p>
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[7.761px] left-[2.81%] right-[95.26%] text-[10.347px] text-[rgba(43,48,52,0.4)] text-nowrap top-[calc(50%-254.1px)] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        100
      </p>
    </div>
  );
}

function Graph() {
  return (
    <div className="absolute inset-[21.9%_2.63%_55.85%_9.82%]" data-name="Graph">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 861 201">
        <g id="Graph">
          <path clipRule="evenodd" d={svgPaths.p1edc3cf0} fill="var(--fill-0, #66B8BA)" fillRule="evenodd" id="1" opacity="0.78" />
          <path clipRule="evenodd" d={svgPaths.p184e4840} fill="var(--fill-0, #6DBDFF)" fillOpacity="0.8" fillRule="evenodd" id="2" />
        </g>
      </svg>
    </div>
  );
}

function IconChevronDown() {
  return (
    <div className="absolute inset-[11.49%_4.39%_87.45%_94.74%]" data-name="icon_chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
        <g id="icon_chevron-down">
          <g id="frame"></g>
          <path d={svgPaths.p7a92600} fill="var(--fill-0, #2B3034)" fillOpacity="0.4" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Month() {
  return (
    <div className="absolute contents inset-[11.49%_4.39%_83.69%_89.39%]" data-name="Month">
      <IconChevronDown />
      <p className="absolute font-['Circular_Std:Medium',sans-serif] leading-[8.623px] left-[89.39%] not-italic right-[6.58%] text-[10.347px] text-[rgba(43,48,52,0.4)] text-nowrap text-right top-[calc(50%-311.87px)] whitespace-pre">October</p>
    </div>
  );
}

function MonthSelector() {
  return (
    <div className="absolute contents inset-[10.53%_2.98%_83.69%_87.89%]" data-name="Month selector">
      <div className="absolute bg-[#fcfdfd] border-[#d5d5d5] border-[0.517px] border-solid inset-[10.53%_2.98%_86.49%_87.89%] rounded-[3.449px]" data-name="Rectangle" />
      <Month />
    </div>
  );
}

function Revenue() {
  return (
    <div className="absolute bottom-[42.02%] contents left-0 right-[0.18%] top-[7.13%]" data-name="Revenue">
      <div className="absolute bottom-[42.02%] left-0 right-[0.18%] top-[7.13%]" data-name="card">
        <div className="absolute inset-[-9.04%_-5.27%_-11.3%_-4.22%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1075 551">
            <g filter="url(#filter0_d_2026_8700)" id="card">
              <path clipRule="evenodd" d={svgPaths.p14492a00} fill="var(--fill-0, #F6F7F9)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="550.786" id="filter0_d_2026_8700" width="1074.4" x="9.53674e-07" y="9.53674e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="5.17368" dy="5.17368" />
                <feGaussianBlur stdDeviation="23.2816" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2026_8700" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_2026_8700" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Profit1 />
      <Sales1 />
      <Units />
      <Graph />
      <MonthSelector />
      <p className="absolute font-['Work_Sans:Bold',sans-serif] font-bold leading-[17.246px] left-[2.81%] right-[88.34%] text-[#104274] text-[20.695px] text-nowrap top-[calc(50%-315.32px)] whitespace-pre">Revenue</p>
    </div>
  );
}

function ArrowTop() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Arrow Top">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow Top">
          <path clipRule="evenodd" d={svgPaths.p3cbed00} fill="var(--fill-0, #3971B8)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p19996c00} fill="var(--fill-0, #A1CEFF)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <ArrowTop />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[38px] relative shrink-0 w-[398px]">
      <p className="absolute font-['Work_Sans:Bold',sans-serif] font-bold leading-[normal] left-0 right-0 text-[#104274] text-[27.593px] text-nowrap top-[calc(50%-19px)] tracking-[-0.0985px] whitespace-pre">USERNAME SHOP ANALYTICS</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-0">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[900px] left-0 top-0 w-[983px]">
      <FeaturedProduct />
      <FeaturedProduct1 />
      <Customers />
      <Revenue />
      <Frame13 />
    </div>
  );
}

function IcTrendingUp24Px() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[24px]" data-name="ic-trending-up-24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic-trending-up-24px">
          <g id="Path"></g>
          <path d={svgPaths.p8cd0a80} fill="var(--fill-0, #00B69B)" id="Path_2" />
        </g>
      </svg>
    </div>
  );
}

function Component85UpFromYesterday() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[6.11%] mt-[121px] place-items-start relative" data-name="8.5% Up from yesterday">
      <IcTrendingUp24Px />
      <p className="[grid-area:1_/_1] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[normal] ml-[32px] mt-px relative text-[#00b69b] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        8.5%<span className="text-[#12163c]"> </span>
        <span className="text-[#606060]">Up from yesterday</span>
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="[grid-area:1_/_1] ml-[70.99%] mt-[9.94%] relative size-[60px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Icon">
          <path d={svgPaths.p3095c00} fill="var(--fill-0, #8280FF)" id="Circle 2" opacity="0.21" />
          <g id="Group">
            <path d={svgPaths.pac84000} fill="var(--fill-0, #8280FF)" id="Combined Shape" opacity="0.587821" />
            <path d={svgPaths.p19b9e500} fill="var(--fill-0, #8280FF)" id="Combined Shape_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TotalUsers() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Total Users">
      <div className="[grid-area:1_/_1] bg-[#f6f7f9] h-[161px] ml-0 mt-0 rounded-[14px] shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] w-[262px]" data-name="Bg" />
      <Component85UpFromYesterday />
      <Icon />
      <p className="[grid-area:1_/_1] font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] ml-[16px] mt-[16px] opacity-70 relative text-[#104274] text-[16px] text-nowrap whitespace-pre">Total User</p>
      <p className="[grid-area:1_/_1] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] ml-[16px] mt-[54px] relative text-[#104274] text-[28px] text-nowrap tracking-[1px] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        40,689
      </p>
    </div>
  );
}

function IcTrendingUp24Px1() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[24px]" data-name="ic-trending-up-24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic-trending-up-24px">
          <g id="Path"></g>
          <path d={svgPaths.p8cd0a80} fill="var(--fill-0, #00B69B)" id="Path_2" />
        </g>
      </svg>
    </div>
  );
}

function Component85UpFromYesterday1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[6.11%] mt-[121px] place-items-start relative" data-name="8.5% Up from yesterday">
      <IcTrendingUp24Px1 />
      <p className="[grid-area:1_/_1] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[normal] ml-[32px] mt-px relative text-[#00b69b] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        1.3%<span className="text-[#12163c]"> </span>
        <span className="text-[#606060]">Up from past week</span>
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="[grid-area:1_/_1] ml-[70.99%] mt-[9.94%] relative size-[60px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Icon">
          <path d={svgPaths.p3095c00} fill="var(--fill-0, #FEC53D)" id="Circle 2" opacity="0.21" />
          <g id="icon">
            <path clipRule="evenodd" d={svgPaths.p30549d80} fill="var(--fill-0, #FEC53D)" fillRule="evenodd" id="Combined Shape" />
            <path clipRule="evenodd" d={svgPaths.pb436a00} fill="var(--fill-0, #FEC53D)" fillRule="evenodd" id="Path" opacity="0.499209" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TotalOrder() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Total Order">
      <div className="[grid-area:1_/_1] bg-[#f6f7f9] h-[161px] ml-0 mt-0 rounded-[14px] shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] w-[262px]" data-name="Bg" />
      <Component85UpFromYesterday1 />
      <Icon1 />
      <p className="[grid-area:1_/_1] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[normal] ml-[16px] mt-[16px] opacity-70 relative text-[#104274] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Total Order
      </p>
      <p className="[grid-area:1_/_1] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] ml-[16px] mt-[54px] relative text-[#104274] text-[28px] text-nowrap tracking-[1px] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        10293
      </p>
    </div>
  );
}

function IcTrendingDown24Px() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[24px]" data-name="ic-trending-down-24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic-trending-down-24px">
          <g id="Path"></g>
          <path d={svgPaths.p13cb6880} fill="var(--fill-0, #F93C65)" id="Path_2" />
        </g>
      </svg>
    </div>
  );
}

function Component85UpFromYesterday2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[6.11%] mt-[121px] place-items-start relative" data-name="8.5% Up from yesterday">
      <IcTrendingDown24Px />
      <p className="[grid-area:1_/_1] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[normal] ml-[32px] mt-px relative text-[#f93c65] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        4.3%<span className="text-[#12163c]"> </span>
        <span className="text-[#606060]">Down from yesterday</span>
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="[grid-area:1_/_1] ml-[70.99%] mt-[9.94%] relative size-[60px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Icon">
          <path d={svgPaths.p3095c00} fill="var(--fill-0, #4AD991)" id="Circle 2" opacity="0.21" />
          <g id="icon">
            <path d={svgPaths.p257dc680} fill="var(--fill-0, #4AD991)" id="Path 95" />
            <path d={svgPaths.p1041400} fill="var(--fill-0, #4AD991)" id="Path 97" opacity="0.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TotalSales() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Total Sales">
      <div className="[grid-area:1_/_1] bg-[#f6f7f9] h-[161px] ml-0 mt-0 rounded-[14px] shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] w-[262px]" data-name="Bg" />
      <Component85UpFromYesterday2 />
      <Icon2 />
      <p className="[grid-area:1_/_1] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[normal] ml-[16px] mt-[16px] opacity-70 relative text-[#104274] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Total Sales
      </p>
      <p className="[grid-area:1_/_1] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] ml-[16px] mt-[54px] relative text-[#104274] text-[28px] text-nowrap tracking-[1px] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        $89,000
      </p>
    </div>
  );
}

function IcTrendingUp24Px2() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[24px]" data-name="ic-trending-up-24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic-trending-up-24px">
          <g id="Path"></g>
          <path d={svgPaths.p8cd0a80} fill="var(--fill-0, #00B69B)" id="Path_2" />
        </g>
      </svg>
    </div>
  );
}

function Component85UpFromYesterday3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[6.11%] mt-[121px] place-items-start relative" data-name="8.5% Up from yesterday">
      <IcTrendingUp24Px2 />
      <p className="[grid-area:1_/_1] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[normal] ml-[32px] mt-px relative text-[#00b69b] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        1.8%<span className="text-[#12163c]"> </span>
        <span className="text-[#606060]">Up from yesterday</span>
      </p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="[grid-area:1_/_1] ml-[70.99%] mt-[9.94%] relative size-[60px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Icon">
          <path d={svgPaths.p3095c00} fill="var(--fill-0, #FF9066)" id="Circle 2" opacity="0.3" />
          <g id="icon">
            <path clipRule="evenodd" d={svgPaths.p232ccc80} fill="var(--fill-0, #FF9066)" fillRule="evenodd" id="Path 107" opacity="0.78" />
            <path d={svgPaths.p1e0f9b00} fill="var(--fill-0, #FF9066)" id="Combined Shape" opacity="0.901274" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function OrderPending() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Order Pending">
      <div className="[grid-area:1_/_1] bg-[#f6f7f9] h-[161px] ml-0 mt-0 rounded-[14px] shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] w-[262px]" data-name="Bg" />
      <Component85UpFromYesterday3 />
      <Icon3 />
      <p className="[grid-area:1_/_1] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[normal] ml-[16px] mt-[16px] opacity-70 relative text-[#104274] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Total Pending
      </p>
      <p className="[grid-area:1_/_1] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] ml-[16px] mt-[54px] relative text-[#104274] text-[28px] text-nowrap tracking-[1px] whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2040
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[63px] h-[836px] items-start justify-center leading-[0] left-[1020px] top-[64px] w-[272px]">
      <TotalUsers />
      <TotalOrder />
      <TotalSales />
      <OrderPending />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute h-[900px] left-[calc(8.33%+3px)] top-[46px] w-[1292px]">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

export default function PersonalProfileAnalytics() {
  return (
    <div className="bg-white relative size-full" data-name="PERSONAL PROFILE_ANALYTICS">
      <LeftPanel />
      <Frame14 />
    </div>
  );
}