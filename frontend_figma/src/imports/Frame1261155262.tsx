import svgPaths from "./svg-8kh8gbft1z";
import imgBgTexture31 from "figma:asset/0d00f6be6ac86f96b5d39e2e21a7b72f784d6eac.png";
import imgComputerPengu3 from "figma:asset/fb165cea933165a54e978aa9e846aa73c20a3eb9.png";

function Group() {
  return (
    <div className="absolute inset-[15%_14.96%_14.96%_15%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 860 861">
        <g id="Group 2" opacity="0.5">
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
    <div className="bg-[rgba(32,141,102,0)] h-[1228px] overflow-clip relative w-[1227px]" data-name="Relative">
      <Group />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#d1ecff] h-[1043px] left-0 top-0 w-[578px]" />
      <div className="absolute h-[1024px] left-[-250px] top-0 w-[1444px]" data-name="BG_TEXTURE-3 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBgTexture31} />
      </div>
      <div className="absolute flex h-[1228px] items-center justify-center left-[-368px] top-[359px] w-[1227px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          {[...Array(2).keys()].map((_, i) => (
            <Relative key={i} />
          ))}
        </div>
      </div>
      <div className="absolute flex h-[1228px] items-center justify-center left-0 top-[-839px] w-[1227px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]" />
      </div>
      <div className="absolute flex items-center justify-center left-[-268px] size-[1079px] top-[140px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[1079px]" data-name="COMPUTER_PENGU 3">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-30 pointer-events-none size-full" src={imgComputerPengu3} />
          </div>
        </div>
      </div>
    </div>
  );
}