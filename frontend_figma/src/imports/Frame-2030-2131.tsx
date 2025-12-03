import svgPaths from "./svg-3t3fttpxg1";
import imgImage from "figma:asset/01847ee79b7d7ce57bf0f88e1c0b8b0ca1d2a21b.png";
import imgImage1 from "figma:asset/0f9f12bda8e3148d4ddc7ad873daaf33e4715a54.png";

function Frame() {
  return <div className="absolute bg-[red] inset-0" data-name="Frame" />;
}

function Frame1() {
  return (
    <div className="bg-neutral-50 overflow-clip relative rounded-[32px] shrink-0 size-[48px]" data-name="Frame">
      <Frame />
      <div className="absolute border-[1.143px] border-[rgba(0,0,0,0.1)] border-solid left-0 rounded-[32px] size-[48px] top-[-0.21px]" data-name="Rectangle" />
    </div>
  );
}

function AutoLayoutHorizontal() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.161px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18.286px] text-center text-neutral-800 text-nowrap">
        <p className="leading-[27.429px] whitespace-pre">USERNAME</p>
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

function Frame2() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center overflow-clip relative shrink-0" data-name="Frame">
      <DoneAll />
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[21.714px] justify-center leading-[0] relative shrink-0 text-[#8e8e8e] text-[10px] w-[93.443px]">
        <p className="leading-[20.571px]">Online</p>
      </div>
    </div>
  );
}

function AutoLayoutVertical() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[1.714px] pt-0 px-0 relative shrink-0" data-name="Auto Layout Vertical">
      <AutoLayoutHorizontal />
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex gap-[14px] items-center px-[9px] py-0 relative shrink-0 w-[685px]" data-name="Frame">
      <Frame1 />
      <AutoLayoutVertical />
    </div>
  );
}

function AutoLayoutHorizontal1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[685px]" data-name="Auto Layout Horizontal">
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute left-1/2 size-[27.429px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Frame">
          <path d={svgPaths.p1e08b3f0} fill="var(--fill-0, #3971B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[27.429px]" data-name="Frame">
      <Frame4 />
    </div>
  );
}

function VuesaxTwotoneElement() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/twotone/element-3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="element-3">
          <path d={svgPaths.p17573e80} id="Vector" stroke="var(--stroke-0, #3971B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p14516540} id="Vector_2" opacity="0.4" stroke="var(--stroke-0, #3971B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p19c6f400} id="Vector_3" opacity="0.4" stroke="var(--stroke-0, #3971B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2cf26380} id="Vector_4" stroke="var(--stroke-0, #3971B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_5" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Element() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="element-3">
      <VuesaxTwotoneElement />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[5.21%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Group">
          <path d={svgPaths.p2c75980} fill="var(--fill-0, #3971B8)" id="Vector" />
          <path d={svgPaths.p1274f0e0} fill="var(--fill-0, #3971B8)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function LightThemeMoreDefault() {
  return (
    <div className="overflow-clip relative shrink-0 size-[30px]" data-name="Light Theme / More / Default">
      <Group />
    </div>
  );
}

function AutoLayoutHorizontal2() {
  return (
    <div className="box-border content-stretch flex gap-[18.286px] items-start p-[9.143px] relative shrink-0" data-name="Auto Layout Horizontal">
      <Frame5 />
      <Element />
      <LightThemeMoreDefault />
    </div>
  );
}

function AutoLayoutHorizontal3() {
  return (
    <div className="box-border content-stretch flex gap-[42.5px] items-start pl-[9.143px] pr-0 py-[10.857px] relative shrink-0" data-name="Auto Layout Horizontal">
      <AutoLayoutHorizontal1 />
      <AutoLayoutHorizontal2 />
    </div>
  );
}

function AutoLayoutHorizontal4() {
  return (
    <div className="absolute bg-white box-border content-stretch flex h-[71px] items-start left-[-0.14px] pb-[1.143px] pt-0 px-[22.857px] right-[-0.14px] top-[26.86px]" data-name="Auto Layout Horizontal">
      <div aria-hidden="true" className="absolute border-[#dbdbdb] border-[0px_0px_1.14px] border-solid inset-0 pointer-events-none" />
      <AutoLayoutHorizontal3 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[13.894px] items-start relative shrink-0">
      <div className="h-[138.938px] relative rounded-[13.894px] shrink-0 w-[129.676px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[13.894px] size-full" src={imgImage} />
      </div>
      <div className="h-[138.938px] relative rounded-[13.894px] shrink-0 w-[129.676px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[13.894px] size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function BubbleChat() {
  return (
    <div className="bg-[#000929] box-border content-stretch flex gap-[13.894px] items-start px-[13.894px] py-[9.263px] relative rounded-bl-[11.578px] rounded-br-[11.578px] rounded-tr-[11.578px] shadow-[0px_1.158px_3.473px_0px_rgba(237,98,20,0.1)] shrink-0 w-[314.926px]" data-name="bubble chat">
      <p className="font-['Comfortaa:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16.209px] text-white tracking-[-0.3242px] w-[287.139px]">can it be something like this? brighter colors pls !! ( •̀ ω •́ )✧</p>
    </div>
  );
}

function BubbleChat1() {
  return (
    <div className="content-stretch flex flex-col gap-[11.578px] items-start relative shrink-0 w-[314.926px]" data-name="bubble chat">
      <BubbleChat />
      <div className="flex flex-col font-['Comfortaa:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[13.894px] tracking-[-0.1389px] w-[314.926px]">
        <p className="leading-[normal]">Today 11:55</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8.105px] items-start left-0 top-0">
      <Frame15 />
      <BubbleChat1 />
    </div>
  );
}

function BubbleChat2() {
  return (
    <div className="bg-[#000929] box-border content-stretch flex gap-[13.894px] items-start px-[13.894px] py-[9.263px] relative rounded-bl-[11.578px] rounded-br-[11.578px] rounded-tr-[11.578px] shadow-[0px_1.158px_3.473px_0px_rgba(237,98,20,0.1)] shrink-0 w-[314.926px]" data-name="bubble chat">
      <p className="font-['Comfortaa:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16.209px] text-white tracking-[-0.3242px] w-[287.139px]">YIPPEEE i can’t wait to see it !!!!!!!!!!!</p>
    </div>
  );
}

function BubbleChat3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.578px] items-start left-0 top-[304.51px] w-[314.926px]" data-name="bubble chat">
      <BubbleChat2 />
      <div className="flex flex-col font-['Comfortaa:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[13.894px] tracking-[-0.1389px] w-[314.926px]">
        <p className="leading-[normal]">Today 11:53</p>
      </div>
    </div>
  );
}

function BubbleChat4() {
  return (
    <div className="bg-[#000929] box-border content-stretch flex gap-[13.894px] items-start px-[13.894px] py-[9.263px] relative rounded-bl-[11.578px] rounded-br-[11.578px] rounded-tr-[11.578px] shadow-[0px_1.158px_3.473px_0px_rgba(237,98,20,0.1)] shrink-0 w-[314.926px]" data-name="bubble chat">
      <p className="font-['Comfortaa:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16.209px] text-white tracking-[-0.3242px] w-[287.139px]">{`ofc ofc take your time <3 i can wait if it takes longer tho dwdw~`}</p>
    </div>
  );
}

function BubbleChat5() {
  return (
    <div className="content-stretch flex flex-col gap-[11.578px] items-start relative shrink-0 w-[314.926px]" data-name="bubble chat">
      <BubbleChat4 />
      <div className="flex flex-col font-['Comfortaa:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[13.894px] tracking-[-0.1389px] w-[314.926px]">
        <p className="leading-[normal]">Today 11:55</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8.105px] items-start left-0 top-[514.07px]">
      <BubbleChat5 />
    </div>
  );
}

function BubbleChat6() {
  return <div className="absolute h-[17.367px] left-0 top-[692.95px] w-[314.926px]" data-name="bubble chat" />;
}

function BubbleChat7() {
  return (
    <div className="bg-[#000929] box-border content-stretch flex gap-[13.894px] items-start px-[13.894px] py-[9.263px] relative rounded-bl-[11.578px] rounded-br-[11.578px] rounded-tr-[11.578px] shadow-[0px_1.158px_3.473px_0px_rgba(237,98,20,0.1)] shrink-0 w-[314.926px]" data-name="bubble chat">
      <p className="font-['Raleway:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16.209px] text-white tracking-[-0.3242px] w-[287.139px]">Yes of course, Are there problems with your job?</p>
    </div>
  );
}

function BubbleChat8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.578px] items-start left-0 top-[923.94px] w-[314.926px]" data-name="bubble chat">
      <BubbleChat7 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[13.894px] tracking-[-0.1389px] w-[314.926px]">
        <p className="leading-[normal]">Today 11:53</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[13.894px] items-start relative shrink-0">
      <div className="h-[138.938px] relative rounded-[13.894px] shrink-0 w-[129.676px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[13.894px] size-full" src={imgImage} />
      </div>
      <div className="h-[138.938px] relative rounded-[13.894px] shrink-0 w-[129.676px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[13.894px] size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function BubbleChat9() {
  return (
    <div className="bg-[#000929] box-border content-stretch flex gap-[13.894px] items-start px-[13.894px] py-[9.263px] relative rounded-bl-[11.578px] rounded-br-[11.578px] rounded-tr-[11.578px] shadow-[0px_1.158px_3.473px_0px_rgba(237,98,20,0.1)] shrink-0 w-[314.926px]" data-name="bubble chat">
      <p className="font-['Raleway:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16.209px] text-white tracking-[-0.3242px] w-[287.139px]">Good question. How about just discussing it?</p>
    </div>
  );
}

function BubbleChat10() {
  return (
    <div className="content-stretch flex flex-col gap-[11.578px] items-start relative shrink-0 w-[314.926px]" data-name="bubble chat">
      <BubbleChat9 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[13.894px] tracking-[-0.1389px] w-[314.926px]">
        <p className="leading-[normal]">Today 11:55</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8.105px] items-start left-0 top-[1154.92px]">
      <Frame20 />
      <BubbleChat10 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute h-[1324.54px] left-[15.05px] top-[67.15px] w-[314.926px]">
      <Frame16 />
      <BubbleChat3 />
      <Frame17 />
      <BubbleChat6 />
      <BubbleChat8 />
      <Frame18 />
    </div>
  );
}

function BubbleChat11() {
  return (
    <div className="bg-[#3971b8] relative rounded-bl-[11.578px] rounded-br-[11.578px] rounded-tl-[11.578px] shadow-[0px_1.158px_3.473px_0px_rgba(115,20,237,0.1)] shrink-0 w-full" data-name="bubble chat">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[13.894px] items-start px-[13.894px] py-[9.263px] relative w-full">
          <div className="basis-0 flex flex-col font-['Comfortaa:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16.209px] text-white tracking-[-0.3242px]">
            <p className="leading-[1.5]">yes of course! would you like the design to be more modern?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BubbleChat12() {
  return (
    <div className="content-stretch flex flex-col gap-[11.578px] items-end relative shrink-0 w-[350.819px]" data-name="bubble chat">
      <BubbleChat11 />
      <div className="flex flex-col font-['Comfortaa:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[13.894px] text-right tracking-[-0.1389px] w-full">
        <p className="leading-[normal]">Today 11:56</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[11.578px] items-end relative shrink-0">
      <BubbleChat12 />
    </div>
  );
}

function BubbleChat13() {
  return (
    <div className="bg-[#3971b8] relative rounded-bl-[11.578px] rounded-br-[11.578px] rounded-tl-[11.578px] shadow-[0px_1.158px_3.473px_0px_rgba(115,20,237,0.1)] shrink-0 w-full" data-name="bubble chat">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[13.894px] items-start px-[13.894px] py-[9.263px] relative w-full">
          <div className="basis-0 flex flex-col font-['Raleway:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16.209px] text-white tracking-[-0.3242px]">
            <p className="leading-[1.5]">oki oki will do! i’ll send more sketches once it’s done</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BubbleChat14() {
  return (
    <div className="content-stretch flex flex-col gap-[11.578px] items-end relative shrink-0 w-[350.819px]" data-name="bubble chat">
      <BubbleChat13 />
      <div className="flex flex-col font-['Comfortaa:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[13.894px] text-right tracking-[-0.1389px] w-full">
        <p className="leading-[normal]">Today 11:52</p>
      </div>
    </div>
  );
}

function BubbleChat15() {
  return (
    <div className="bg-[#3971b8] relative rounded-bl-[11.578px] rounded-br-[11.578px] rounded-tl-[11.578px] shadow-[0px_1.158px_3.473px_0px_rgba(115,20,237,0.1)] shrink-0 w-full" data-name="bubble chat">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[13.894px] items-start px-[13.894px] py-[9.263px] relative w-full">
          <div className="basis-0 flex flex-col font-['Raleway:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16.209px] text-white tracking-[-0.3242px]">
            <p className="leading-[1.5]">i’ll try my best to send them by the end of the day, would that be all right?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BubbleChat16() {
  return (
    <div className="content-stretch flex flex-col gap-[11.578px] items-end relative shrink-0 w-[350.819px]" data-name="bubble chat">
      <BubbleChat15 />
      <div className="flex flex-col font-['Comfortaa:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[13.894px] text-right tracking-[-0.1389px] w-full">
        <p className="leading-[normal]">Today 11:54</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[96.099px] items-start relative shrink-0">
      <BubbleChat14 />
      <BubbleChat16 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[24.373px] left-[41.97px] top-[18.52px] w-[65.618px]">
      <div className="absolute bottom-0 left-0 right-[-2.06%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 25">
          <g id="Group 1000002501">
            <line id="Line 12" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="0.676279" x2="0.676279" y1="8.77409" y2="15.5984" />
            <line id="Line 13" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="5.05107" x2="5.05107" y1="5.84846" y2="17.5473" />
            <line id="Line 15" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="13.799" x2="13.799" y1="5.84846" y2="17.5473" />
            <line id="Line 16" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="18.1747" x2="18.1747" y1="9.04012e-06" y2="24.3726" />
            <line id="Line 17" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="22.5491" x2="22.5491" y1="7.79888" y2="16.573" />
            <line id="Line 18" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="26.9228" x2="26.9228" y1="2.9247" y2="21.4479" />
            <line id="Line 19" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="31.2985" x2="31.2985" y1="0.974279" y2="22.4222" />
            <line id="Line 20" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="35.6734" x2="35.6734" y1="3.89992" y2="19.4984" />
            <line id="Line 21" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="40.0466" x2="40.0466" y1="6.82367" y2="17.5476" />
            <line id="Line 22" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="44.4223" x2="44.4223" y1="0.974279" y2="22.4222" />
            <line id="Line 23" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="48.7969" x2="48.7969" y1="5.84846" y2="17.5473" />
            <line id="Line 24" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="53.1714" x2="53.1714" y1="6.82367" y2="15.5978" />
            <line id="Line 25" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="57.545" x2="57.545" y1="8.77409" y2="15.5984" />
            <line id="Line 26" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="61.9197" x2="61.9197" y1="3.89992" y2="20.4733" />
            <line id="Line 27" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="66.2942" x2="66.2942" y1="7.79888" y2="16.573" />
            <line id="Line 14" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="9.42433" x2="9.42433" y1="4.87419" y2="18.5228" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[24.373px] left-[111.34px] top-[18.52px] w-[65.618px]">
      <div className="absolute bottom-0 left-0 right-[-2.06%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 25">
          <g id="Group 1000002502">
            <line id="Line 12" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="0.676279" x2="0.676279" y1="8.77409" y2="15.5984" />
            <line id="Line 13" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="5.05107" x2="5.05107" y1="5.84846" y2="17.5473" />
            <line id="Line 15" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="13.7991" x2="13.7991" y1="5.84846" y2="17.5473" />
            <line id="Line 16" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="18.1737" x2="18.1737" y1="9.04012e-06" y2="24.3726" />
            <line id="Line 17" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="22.5494" x2="22.5494" y1="7.79888" y2="16.573" />
            <line id="Line 18" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="26.9228" x2="26.9228" y1="2.92376" y2="21.4469" />
            <line id="Line 19" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="31.2976" x2="31.2976" y1="0.974279" y2="22.4222" />
            <line id="Line 20" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="35.6733" x2="35.6733" y1="3.89992" y2="19.4984" />
            <line id="Line 21" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="40.0467" x2="40.0467" y1="6.82367" y2="17.5476" />
            <line id="Line 22" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="44.4214" x2="44.4214" y1="0.974279" y2="22.4222" />
            <line id="Line 23" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="48.7971" x2="48.7971" y1="5.84846" y2="17.5473" />
            <line id="Line 24" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="53.1717" x2="53.1717" y1="6.82367" y2="15.5978" />
            <line id="Line 25" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="57.545" x2="57.545" y1="8.77409" y2="15.5984" />
            <line id="Line 26" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="61.9197" x2="61.9197" y1="3.89992" y2="20.4733" />
            <line id="Line 27" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="66.2945" x2="66.2945" y1="7.79888" y2="16.573" />
            <line id="Line 14" stroke="var(--stroke-0, white)" strokeWidth="1.35256" x1="9.4248" x2="9.4248" y1="4.87419" y2="18.5228" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute h-[24.373px] left-[180.71px] top-[18.52px] w-[65.618px]">
      <div className="absolute bottom-0 left-0 right-[-2.06%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 25">
          <g id="Group 1000002503">
            <line id="Line 12" stroke="var(--stroke-0, #C9B3F6)" strokeWidth="1.35256" x1="0.676279" x2="0.676279" y1="8.77409" y2="15.5984" />
            <line id="Line 13" stroke="var(--stroke-0, #C9B3F6)" strokeWidth="1.35256" x1="5.05095" x2="5.05095" y1="5.84846" y2="17.5473" />
            <line id="Line 15" stroke="var(--stroke-0, #C9B3F6)" strokeWidth="1.35256" x1="13.7989" x2="13.7989" y1="5.84846" y2="17.5473" />
            <line id="Line 16" stroke="var(--stroke-0, #C9B3F6)" strokeWidth="1.35256" x1="18.1746" x2="18.1746" y1="9.04012e-06" y2="24.3726" />
            <line id="Line 17" stroke="var(--stroke-0, #C9B3F6)" strokeWidth="1.35256" x1="22.5489" x2="22.5489" y1="7.79888" y2="16.573" />
            <line id="Line 18" stroke="var(--stroke-0, #C9B3F6)" strokeWidth="1.35256" x1="26.9227" x2="26.9227" y1="2.9247" y2="21.4479" />
            <line id="Line 19" stroke="var(--stroke-0, #C9B3F6)" strokeWidth="1.35256" x1="31.2975" x2="31.2975" y1="0.974279" y2="22.4222" />
            <line id="Line 20" stroke="var(--stroke-0, #C9B3F6)" strokeWidth="1.35256" x1="35.6719" x2="35.6719" y1="3.89992" y2="19.4984" />
            <line id="Line 21" stroke="var(--stroke-0, #C9B3F6)" strokeWidth="1.35256" x1="40.0466" x2="40.0466" y1="6.82461" y2="17.5485" />
            <line id="Line 22" stroke="var(--stroke-0, #C9B3F6)" strokeWidth="1.35256" x1="44.4223" x2="44.4223" y1="0.974279" y2="22.4222" />
            <line id="Line 23" stroke="var(--stroke-0, #C9B3F6)" strokeWidth="1.35256" x1="48.7969" x2="48.7969" y1="5.84846" y2="17.5473" />
            <line id="Line 24" stroke="var(--stroke-0, #C9B3F6)" strokeWidth="1.35256" x1="53.1713" x2="53.1713" y1="6.82367" y2="15.5978" />
            <line id="Line 25" stroke="var(--stroke-0, #C9B3F6)" strokeWidth="1.35256" x1="57.5449" x2="57.5449" y1="8.77409" y2="15.5984" />
            <line id="Line 26" stroke="var(--stroke-0, #C9B3F6)" strokeWidth="1.35256" x1="61.9197" x2="61.9197" y1="3.89992" y2="20.4733" />
            <line id="Line 27" stroke="var(--stroke-0, #C9B3F6)" strokeWidth="1.35256" x1="66.2942" x2="66.2942" y1="7.79888" y2="16.573" />
            <line id="Line 14" stroke="var(--stroke-0, #C9B3F6)" strokeWidth="1.35256" x1="9.42433" x2="9.42433" y1="4.87419" y2="18.5228" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[41.97px] top-[18.52px]">
      <Group1 />
      <Group2 />
      <Group3 />
    </div>
  );
}

function Chat() {
  return (
    <div className="bg-[#2e3b5b] h-[61.423px] relative rounded-bl-[11.578px] rounded-br-[4.631px] rounded-tl-[11.578px] rounded-tr-[11.578px] shrink-0 w-[305.664px]" data-name="chat">
      <Group4 />
      <div className="absolute flex items-center justify-center left-[16.21px] size-[17.367px] top-[22px]" style={{ "--transform-inner-width": "17.359375", "--transform-inner-height": "17.359375" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="relative size-[17.367px]">
            <div className="absolute bottom-1/4 left-[16.44%] right-[16.44%] top-[13.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11">
                <path d={svgPaths.p356efb80} fill="var(--fill-0, white)" id="Polygon 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[291.19px] text-[13.894px] text-nowrap text-right text-white top-[31px] tracking-[-0.1389px] translate-x-[-100%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">10:12</p>
      </div>
    </div>
  );
}

function BubbleChat17() {
  return (
    <div className="bg-[#2e3b5b] relative rounded-bl-[11.578px] rounded-br-[11.578px] rounded-tl-[11.578px] shadow-[0px_1.158px_3.473px_0px_rgba(115,20,237,0.1)] shrink-0 w-full" data-name="bubble chat">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[13.894px] items-start px-[13.894px] py-[9.263px] relative w-full">
          <div className="basis-0 flex flex-col font-['Raleway:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16.209px] text-white tracking-[-0.3242px]">
            <p className="leading-[1.5]">Of course. Thank you so much for taking your time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BubbleChat18() {
  return (
    <div className="content-stretch flex flex-col gap-[11.578px] items-end relative shrink-0 w-[350.819px]" data-name="bubble chat">
      <BubbleChat17 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[13.894px] text-right tracking-[-0.1389px] w-full">
        <p className="leading-[normal]">Today 11:56</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[11.578px] items-end relative shrink-0">
      <Chat />
      <BubbleChat18 />
    </div>
  );
}

function BubbleChat19() {
  return (
    <div className="bg-[#2e3b5b] relative rounded-bl-[11.578px] rounded-br-[11.578px] rounded-tl-[11.578px] shadow-[0px_1.158px_3.473px_0px_rgba(115,20,237,0.1)] shrink-0 w-full" data-name="bubble chat">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[13.894px] items-start px-[13.894px] py-[9.263px] relative w-full">
          <div className="basis-0 flex flex-col font-['Raleway:Medium',sans-serif] font-medium grow justify-center leading-[1.5] min-h-px min-w-px relative shrink-0 text-[16.209px] text-white tracking-[-0.3242px]">
            <p className="mb-0">{`Morning Eten Hunt, I have a question about `}</p>
            <p>my job!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BubbleChat20() {
  return (
    <div className="content-stretch flex flex-col gap-[11.578px] items-end relative shrink-0 w-[350.819px]" data-name="bubble chat">
      <BubbleChat19 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[13.894px] text-right tracking-[-0.1389px] w-full">
        <p className="leading-[normal]">Today 11:52</p>
      </div>
    </div>
  );
}

function BubbleChat21() {
  return (
    <div className="bg-[#2e3b5b] relative rounded-bl-[11.578px] rounded-br-[11.578px] rounded-tl-[11.578px] shadow-[0px_1.158px_3.473px_0px_rgba(115,20,237,0.1)] shrink-0 w-full" data-name="bubble chat">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[13.894px] items-start px-[13.894px] py-[9.263px] relative w-full">
          <div className="basis-0 flex flex-col font-['Raleway:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16.209px] text-white tracking-[-0.3242px]">
            <p className="leading-[1.5]">What are the points that are important to get the perfect result of my assignment?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BubbleChat22() {
  return (
    <div className="content-stretch flex flex-col gap-[11.578px] items-end relative shrink-0 w-[350.819px]" data-name="bubble chat">
      <BubbleChat21 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[13.894px] text-right tracking-[-0.1389px] w-full">
        <p className="leading-[normal]">Today 11:54</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[96.099px] items-start relative shrink-0">
      <BubbleChat20 />
      <BubbleChat22 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[196.829px] items-start left-[434.18px] top-0">
      <Frame22 />
      <Frame13 />
      <Frame14 />
      <Frame23 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="h-[731.74px] overflow-x-clip overflow-y-auto relative shrink-0 w-[785px]">
      <Frame21 />
      <Frame24 />
    </div>
  );
}

function Frame6() {
  return <div className="h-[510px] shrink-0 w-full" data-name="Frame" />;
}

function Frame7() {
  return (
    <div className="absolute left-1/2 size-[27.429px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Frame">
          <path d={svgPaths.ped1f600} fill="var(--fill-0, #3971B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="overflow-clip relative shrink-0 size-[27.429px]" data-name="Frame">
      <Frame7 />
    </div>
  );
}

function AutoLayoutHorizontal5() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-[10.286px] pr-[365.714px] py-[9.143px] relative shrink-0 w-[607px]" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20.571px] whitespace-pre">Message...</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute left-1/2 size-[27.429px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p2e894100} fill="var(--fill-0, #3971B8)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p23992c80} id="Vector_2" stroke="var(--stroke-0, #3971B8)" strokeLinejoin="round" strokeWidth="2.28571" />
          <path d={svgPaths.p10193600} id="Vector_3" stroke="var(--stroke-0, #3971B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.28571" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="overflow-clip relative shrink-0 size-[27.429px]" data-name="Frame">
      <Frame9 />
    </div>
  );
}

function VuesaxBoldSend() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/send-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="send-2">
          <path d={svgPaths.p1d349760} fill="var(--fill-0, white)" id="Vector" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Send() {
  return (
    <div className="relative size-[22px]" data-name="send-2">
      <VuesaxBoldSend />
    </div>
  );
}

function Sen() {
  return (
    <div className="bg-[#3971b8] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative rounded-[10px] shrink-0 size-[30px]" data-name="Sen">
      <div className="flex items-center justify-center relative shrink-0 size-[26.569px]" style={{ "--transform-inner-width": "22", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-[13.644deg]">
          <Send />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#f6f7f9] box-border content-stretch flex gap-[14px] items-center px-[25px] py-[5px] relative rounded-[25.143px] shrink-0 w-[790px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-[#dbdbdb] border-[1.143px] border-solid inset-0 pointer-events-none rounded-[25.143px]" />
      <Frame8 />
      <AutoLayoutHorizontal5 />
      <Frame10 />
      <Sen />
    </div>
  );
}

function AutoLayoutVertical1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[903px] items-center justify-between left-[-0.14px] pb-[22.857px] pt-[50.286px] px-0 right-[-0.14px] top-[118.86px]" data-name="Auto Layout Vertical">
      <Frame19 />
      <Frame6 />
      <Frame11 />
    </div>
  );
}

export default function Frame12() {
  return (
    <div className="bg-white relative size-full" data-name="Frame">
      <AutoLayoutHorizontal4 />
      <AutoLayoutVertical1 />
    </div>
  );
}