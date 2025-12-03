import svgPaths from "./svg-joxnm76qfc";
import imgBgTexture31 from "figma:asset/0d00f6be6ac86f96b5d39e2e21a7b72f784d6eac.png";
import imgQuestionPengu1 from "figma:asset/2acd6acbfb60ae9385fa0f65ca0d1bcc592fb1fd.png";
import imgAvatarSmall from "figma:asset/ce67d23a925af943f1634792363b9deeb4837a22.png";
import imgImage2 from "figma:asset/43f2f605db1237de841075d44257840170104211.png";
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
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#6c757d] text-[12px] text-nowrap whitespace-pre">digital illustration</p>
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Close">
          <g id="Vector"></g>
          <g id="Vector_2"></g>
          <path clipRule="evenodd" d={svgPaths.p369cf080} fill="var(--fill-0, #6C757D)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Search1() {
  return (
    <div className="bg-[#f6f7f9] box-border content-stretch flex gap-[542px] items-center p-[16px] relative rounded-[8px] shrink-0 w-[631px]" data-name="Search">
      <SearchAndIcon />
      <Close />
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

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[10.786px] items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25.887px] not-italic relative shrink-0 text-[#104274] text-[19.415px] text-nowrap tracking-[0.7766px] whitespace-pre">MERAKI MARKETPLACE</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[372.668px] items-end relative shrink-0">
      <Frame64 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[32.359px] items-start relative shrink-0 w-full">
      <Frame65 />
    </div>
  );
}

function FillHeart() {
  return (
    <div className="relative shrink-0 size-[18.337px]" data-name="Fill Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Fill Heart">
          <circle cx="9.16838" cy="9.16838" fill="var(--fill-0, white)" id="Ellipse 12" r="9.16838" />
          <g id="heart small">
            <path d={svgPaths.p1ff11eb0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[20.83%_9.95%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-3.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
          <g id="Group">
            <path d={svgPaths.p276ce500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
            <path d={svgPaths.p36491280} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function QuickView() {
  return (
    <div className="absolute inset-[14.71%] overflow-clip" data-name="Quick View">
      <Group />
    </div>
  );
}

function FillEye() {
  return (
    <div className="relative shrink-0 size-[18.337px]" data-name="Fill Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <circle cx="9.16838" cy="9.16838" fill="var(--fill-0, white)" id="Ellipse 13" r="9.16838" />
      </svg>
      <QuickView />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.315px] items-start right-[6.09px] top-[6.47px]">
      <FillHeart />
      <FillEye />
    </div>
  );
}

function Frame53() {
  return <div className="absolute h-[97.077px] left-[calc(50%+0.19px)] overflow-clip top-[calc(50%-0.41px)] translate-x-[-50%] translate-y-[-50%] w-[102.47px]" />;
}

function Cart() {
  return (
    <div className="bg-[red] h-[134.829px] overflow-clip relative rounded-[7.221px] shrink-0 w-[145.615px]" data-name="Cart">
      <Frame22 />
      <Frame53 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[6.472px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium','Noto_Sans:Medium',sans-serif] leading-[12.944px] relative shrink-0 text-[#428dfe] text-[8.629px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        ₱
      </p>
    </div>
  );
}

function ThreeStar() {
  return (
    <div className="h-[10.786px] relative shrink-0 w-[53.932px]" data-name="Three Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 11">
        <g id="Three Star">
          <path d={svgPaths.pfe3c2b0} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.p11d0c380} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p2b8c8200} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p30528600} fill="var(--fill-0, black)" id="Vector_4" opacity="0.25" />
          <path d={svgPaths.p38bfb700} fill="var(--fill-0, black)" id="Vector_5" opacity="0.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4.315px] items-start relative shrink-0">
      <ThreeStar />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[10.786px] leading-[11.326px] not-italic opacity-50 relative shrink-0 text-[7.55px] text-black w-[17.258px]">(35)</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[4.315px] items-center relative shrink-0">
      <Frame21 />
      <Frame20 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[4.315px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[12.944px] not-italic relative shrink-0 text-[8.629px] text-black text-nowrap whitespace-pre">PRODUCT/SERVICE 1</p>
      <Frame27 />
    </div>
  );
}

function Cart1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8.629px] items-start relative shrink-0" data-name="Cart">
      <Cart />
      <Frame28 />
    </div>
  );
}

function FillHeart1() {
  return (
    <div className="relative shrink-0 size-[18.337px]" data-name="Fill Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Fill Heart">
          <circle cx="9.16838" cy="9.16838" fill="var(--fill-0, white)" id="Ellipse 12" r="9.16838" />
          <g id="heart small">
            <path d={svgPaths.p1ff11eb0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[20.83%_9.95%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-3.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
          <g id="Group">
            <path d={svgPaths.p276ce500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
            <path d={svgPaths.p36491280} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function QuickView1() {
  return (
    <div className="absolute inset-[14.71%] overflow-clip" data-name="Quick View">
      <Group1 />
    </div>
  );
}

function FillEye1() {
  return (
    <div className="relative shrink-0 size-[18.337px]" data-name="Fill Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <circle cx="9.16838" cy="9.16838" fill="var(--fill-0, white)" id="Ellipse 13" r="9.16838" />
      </svg>
      <QuickView1 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.315px] items-start right-[6.09px] top-[6.47px]">
      <FillHeart1 />
      <FillEye1 />
    </div>
  );
}

function Frame54() {
  return <div className="absolute h-[97.077px] left-[calc(50%-1.96px)] overflow-clip top-[calc(50%-11.2px)] translate-x-[-50%] translate-y-[-50%] w-[102.47px]" />;
}

function Cart2() {
  return (
    <div className="bg-[red] h-[134.829px] overflow-clip relative rounded-[7.221px] shrink-0 w-[145.615px]" data-name="Cart">
      <div className="absolute bg-black bottom-[-0.17px] h-[22.112px] left-0 right-0 rounded-bl-[2.157px] rounded-br-[2.157px]" />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[12.944px] left-[calc(50%-25.69px)] not-italic text-[8.629px] text-nowrap text-white top-[calc(50%+49.2px)] whitespace-pre">Add To Cart</p>
      <Frame23 />
      <Frame54 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[6.472px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium','Noto_Sans:Medium',sans-serif] leading-[12.944px] relative shrink-0 text-[#428dfe] text-[8.629px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        ₱
      </p>
    </div>
  );
}

function FourStar() {
  return (
    <div className="h-[10.786px] relative shrink-0 w-[53.932px]" data-name="Four Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 11">
        <g id="Four Star">
          <path d={svgPaths.pfe3c2b0} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.p11d0c380} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p2b8c8200} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p30528600} fill="var(--fill-0, #FFAD33)" id="Vector_4" />
          <path d={svgPaths.p38bfb700} fill="var(--fill-0, black)" id="Vector_5" opacity="0.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[4.315px] items-start relative shrink-0">
      <FourStar />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[10.786px] leading-[11.326px] not-italic opacity-50 relative shrink-0 text-[7.55px] text-black w-[17.258px]">(95)</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[4.315px] items-center relative shrink-0">
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[4.315px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[12.944px] not-italic relative shrink-0 text-[8.629px] text-black text-nowrap whitespace-pre">PRODUCT/SERVICE 2</p>
      <Frame29 />
    </div>
  );
}

function Cart3() {
  return (
    <div className="content-stretch flex flex-col gap-[8.629px] items-start relative shrink-0" data-name="Cart">
      <Cart2 />
      <Frame30 />
    </div>
  );
}

function FillHeart2() {
  return (
    <div className="relative shrink-0 size-[18.337px]" data-name="Fill Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Fill Heart">
          <circle cx="9.16838" cy="9.16838" fill="var(--fill-0, white)" id="Ellipse 12" r="9.16838" />
          <g id="heart small">
            <path d={svgPaths.p1ff11eb0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[20.83%_9.95%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-3.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
          <g id="Group">
            <path d={svgPaths.p276ce500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
            <path d={svgPaths.p36491280} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function QuickView2() {
  return (
    <div className="absolute inset-[14.71%] overflow-clip" data-name="Quick View">
      <Group3 />
    </div>
  );
}

function FillEye2() {
  return (
    <div className="relative shrink-0 size-[18.337px]" data-name="Fill Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <circle cx="9.16838" cy="9.16838" fill="var(--fill-0, white)" id="Ellipse 13" r="9.16838" />
      </svg>
      <QuickView2 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.315px] items-start right-[6.09px] top-[6.47px]">
      <FillHeart2 />
      <FillEye2 />
    </div>
  );
}

function Frame55() {
  return <div className="absolute h-[97.077px] left-[calc(50%+0.19px)] overflow-clip top-[calc(50%-0.41px)] translate-x-[-50%] translate-y-[-50%] w-[102.47px]" />;
}

function Cart4() {
  return (
    <div className="bg-[red] h-[134.829px] overflow-clip relative rounded-[7.221px] shrink-0 w-[145.615px]" data-name="Cart">
      <Frame26 />
      <Frame55 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[6.472px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[12.944px] not-italic relative shrink-0 text-[#428dfe] text-[8.629px] text-nowrap whitespace-pre"> </p>
    </div>
  );
}

function FiveStar() {
  return (
    <div className="h-[10.786px] relative shrink-0 w-[53.932px]" data-name="Five star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 11">
        <g id="Five star">
          <path d={svgPaths.pfe3c2b0} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.p11d0c380} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p2b8c8200} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p30528600} fill="var(--fill-0, #FFAD33)" id="Vector_4" />
          <path d={svgPaths.p38bfb700} fill="var(--fill-0, #FFAD33)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[4.315px] items-start relative shrink-0">
      <FiveStar />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[10.786px] leading-[11.326px] not-italic opacity-50 relative shrink-0 text-[7.55px] text-black w-[21.573px]">(325)</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[4.315px] items-center relative shrink-0">
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[4.315px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[12.944px] not-italic relative shrink-0 text-[8.629px] text-black text-nowrap whitespace-pre">PRODUCT/SERVICE 3</p>
      <Frame33 />
    </div>
  );
}

function Cart5() {
  return (
    <div className="content-stretch flex flex-col gap-[8.629px] items-start relative shrink-0" data-name="Cart">
      <Cart4 />
      <Frame34 />
    </div>
  );
}

function FillHeart3() {
  return (
    <div className="relative shrink-0 size-[18.337px]" data-name="Fill Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Fill Heart">
          <circle cx="9.16838" cy="9.16838" fill="var(--fill-0, white)" id="Ellipse 12" r="9.16838" />
          <g id="heart small">
            <path d={svgPaths.p1ff11eb0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
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
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
          <g id="Group">
            <path d={svgPaths.p276ce500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
            <path d={svgPaths.p36491280} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function QuickView3() {
  return (
    <div className="absolute inset-[14.71%] overflow-clip" data-name="Quick View">
      <Group4 />
    </div>
  );
}

function FillEye3() {
  return (
    <div className="relative shrink-0 size-[18.337px]" data-name="Fill Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <circle cx="9.16838" cy="9.16838" fill="var(--fill-0, white)" id="Ellipse 13" r="9.16838" />
      </svg>
      <QuickView3 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.315px] items-start right-[5.79px] top-[6.47px]">
      <FillHeart3 />
      <FillEye3 />
    </div>
  );
}

function Frame56() {
  return <div className="absolute h-[97.077px] left-[calc(50%-0.11px)] top-[calc(50%-0.7px)] translate-x-[-50%] translate-y-[-50%] w-[102.47px]" />;
}

function Cart6() {
  return (
    <div className="bg-[red] h-[134.829px] overflow-clip relative rounded-[7.221px] shrink-0 w-[145.615px]" data-name="Cart">
      <Frame35 />
      <Frame56 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[6.472px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium','Noto_Sans:Medium',sans-serif] leading-[12.944px] relative shrink-0 text-[#428dfe] text-[8.629px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        ₱
      </p>
    </div>
  );
}

function FourStar1() {
  return (
    <div className="h-[10.786px] relative shrink-0 w-[53.932px]" data-name="Four Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 11">
        <g id="Four Star">
          <path d={svgPaths.pfe3c2b0} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.p11d0c380} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p2b8c8200} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p124b2df0} fill="var(--fill-0, #FFAD33)" id="Vector_4" />
          <path d={svgPaths.p38bfb700} fill="var(--fill-0, black)" id="Vector_5" opacity="0.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[4.315px] items-start relative shrink-0">
      <FourStar1 />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[10.786px] leading-[11.326px] not-italic opacity-50 relative shrink-0 text-[7.55px] text-black w-[21.573px]">(145)</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[4.315px] items-center relative shrink-0">
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[4.315px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[12.944px] not-italic relative shrink-0 text-[8.629px] text-black text-nowrap whitespace-pre">PRODUCT/SERVICE 4</p>
      <Frame38 />
    </div>
  );
}

function CartWithFlatDiscountCartWithFlatDiscountCartWithFlatDiscountCartWithFlatDiscountCartProperty() {
  return (
    <div className="content-stretch flex flex-col gap-[8.629px] items-start relative shrink-0" data-name="Cart With Flat Discount /Cart With Flat Discount/Cart With Flat Discount/Cart With Flat Discount/Cart/Property 25">
      <Cart6 />
      <Frame39 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[16.179px] items-start relative shrink-0">
      <Cart1 />
      <Cart3 />
      <Cart5 />
      <CartWithFlatDiscountCartWithFlatDiscountCartWithFlatDiscountCartWithFlatDiscountCartProperty />
    </div>
  );
}

function FillHeart4() {
  return (
    <div className="relative shrink-0 size-[18.337px]" data-name="Fill Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Fill Heart">
          <circle cx="9.16838" cy="9.16838" fill="var(--fill-0, white)" id="Ellipse 12" r="9.16838" />
          <g id="heart small">
            <path d={svgPaths.p1ff11eb0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
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
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
          <g id="Group">
            <path d={svgPaths.p276ce500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
            <path d={svgPaths.p36491280} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function QuickView4() {
  return (
    <div className="absolute inset-[14.71%] overflow-clip" data-name="Quick View">
      <Group5 />
    </div>
  );
}

function FillEye4() {
  return (
    <div className="relative shrink-0 size-[18.337px]" data-name="Fill Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <circle cx="9.16838" cy="9.16838" fill="var(--fill-0, white)" id="Ellipse 13" r="9.16838" />
      </svg>
      <QuickView4 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.315px] items-start right-[6.09px] top-[6.47px]">
      <FillHeart4 />
      <FillEye4 />
    </div>
  );
}

function Frame57() {
  return <div className="absolute h-[97.077px] left-[calc(50%+0.19px)] overflow-clip top-[calc(50%-0.41px)] translate-x-[-50%] translate-y-[-50%] w-[102.47px]" />;
}

function Cart7() {
  return (
    <div className="bg-[red] h-[134.829px] overflow-clip relative rounded-[7.221px] shrink-0 w-[145.615px]" data-name="Cart">
      <Frame40 />
      <Frame57 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[6.472px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium','Noto_Sans:Medium',sans-serif] leading-[12.944px] relative shrink-0 text-[#428dfe] text-[8.629px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        ₱
      </p>
    </div>
  );
}

function ThreeStar1() {
  return (
    <div className="h-[10.786px] relative shrink-0 w-[53.932px]" data-name="Three Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 11">
        <g id="Three Star">
          <path d={svgPaths.pfe3c2b0} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.p11d0c380} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p2b8c8200} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p30528600} fill="var(--fill-0, black)" id="Vector_4" opacity="0.25" />
          <path d={svgPaths.p38bfb700} fill="var(--fill-0, black)" id="Vector_5" opacity="0.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[4.315px] items-start relative shrink-0">
      <ThreeStar1 />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[10.786px] leading-[11.326px] not-italic opacity-50 relative shrink-0 text-[7.55px] text-black w-[17.258px]">(35)</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[4.315px] items-center relative shrink-0">
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[4.315px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[12.944px] not-italic relative shrink-0 text-[8.629px] text-black text-nowrap whitespace-pre">PRODUCT/SERVICE 1</p>
      <Frame43 />
    </div>
  );
}

function Cart8() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8.629px] items-start relative shrink-0" data-name="Cart">
      <Cart7 />
      <Frame44 />
    </div>
  );
}

function FillHeart5() {
  return (
    <div className="relative shrink-0 size-[18.337px]" data-name="Fill Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Fill Heart">
          <circle cx="9.16838" cy="9.16838" fill="var(--fill-0, white)" id="Ellipse 12" r="9.16838" />
          <g id="heart small">
            <path d={svgPaths.p1ff11eb0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
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
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
          <g id="Group">
            <path d={svgPaths.p276ce500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
            <path d={svgPaths.p36491280} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function QuickView5() {
  return (
    <div className="absolute inset-[14.71%] overflow-clip" data-name="Quick View">
      <Group6 />
    </div>
  );
}

function FillEye5() {
  return (
    <div className="relative shrink-0 size-[18.337px]" data-name="Fill Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <circle cx="9.16838" cy="9.16838" fill="var(--fill-0, white)" id="Ellipse 13" r="9.16838" />
      </svg>
      <QuickView5 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.315px] items-start right-[6.09px] top-[6.47px]">
      <FillHeart5 />
      <FillEye5 />
    </div>
  );
}

function Frame58() {
  return <div className="absolute h-[97.077px] left-[calc(50%+0.19px)] overflow-clip top-[calc(50%-0.41px)] translate-x-[-50%] translate-y-[-50%] w-[102.47px]" />;
}

function Cart9() {
  return (
    <div className="bg-[red] h-[134.829px] overflow-clip relative rounded-[7.221px] shrink-0 w-[145.615px]" data-name="Cart">
      <Frame45 />
      <Frame58 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[6.472px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium','Noto_Sans:Medium',sans-serif] leading-[12.944px] relative shrink-0 text-[#428dfe] text-[8.629px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        ₱
      </p>
    </div>
  );
}

function FiveStar1() {
  return (
    <div className="h-[10.786px] relative shrink-0 w-[53.932px]" data-name="Five star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 11">
        <g id="Five star">
          <path d={svgPaths.pfe3c2b0} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.p11d0c380} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p2b8c8200} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p30528600} fill="var(--fill-0, #FFAD33)" id="Vector_4" />
          <path d={svgPaths.p38bfb700} fill="var(--fill-0, #FFAD33)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[4.315px] items-start relative shrink-0">
      <FiveStar1 />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[10.786px] leading-[11.326px] not-italic opacity-50 relative shrink-0 text-[7.55px] text-black w-[21.573px]">(325)</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[4.315px] items-center relative shrink-0">
      <Frame46 />
      <Frame47 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[4.315px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[12.944px] not-italic relative shrink-0 text-[8.629px] text-black text-nowrap whitespace-pre">PRODUCT/SERVICE 3</p>
      <Frame48 />
    </div>
  );
}

function Cart10() {
  return (
    <div className="content-stretch flex flex-col gap-[8.629px] items-start relative shrink-0" data-name="Cart">
      <Cart9 />
      <Frame49 />
    </div>
  );
}

function FillHeart6() {
  return (
    <div className="relative shrink-0 size-[18.337px]" data-name="Fill Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Fill Heart">
          <circle cx="9.16838" cy="9.16838" fill="var(--fill-0, white)" id="Ellipse 12" r="9.16838" />
          <g id="heart small">
            <path d={svgPaths.p1ff11eb0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[20.83%_9.95%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-3.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
          <g id="Group">
            <path d={svgPaths.p276ce500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
            <path d={svgPaths.p36491280} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function QuickView6() {
  return (
    <div className="absolute inset-[14.71%] overflow-clip" data-name="Quick View">
      <Group7 />
    </div>
  );
}

function FillEye6() {
  return (
    <div className="relative shrink-0 size-[18.337px]" data-name="Fill Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <circle cx="9.16838" cy="9.16838" fill="var(--fill-0, white)" id="Ellipse 13" r="9.16838" />
      </svg>
      <QuickView6 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.315px] items-start right-[5.79px] top-[6.47px]">
      <FillHeart6 />
      <FillEye6 />
    </div>
  );
}

function Frame59() {
  return <div className="absolute h-[97.077px] left-[calc(50%-0.11px)] top-[calc(50%-0.7px)] translate-x-[-50%] translate-y-[-50%] w-[102.47px]" />;
}

function Cart11() {
  return (
    <div className="bg-[red] h-[134.829px] overflow-clip relative rounded-[7.221px] shrink-0 w-[145.615px]" data-name="Cart">
      <Frame50 />
      <Frame59 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[6.472px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium','Noto_Sans:Medium',sans-serif] leading-[12.944px] relative shrink-0 text-[#428dfe] text-[8.629px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        ₱
      </p>
    </div>
  );
}

function FourStar2() {
  return (
    <div className="h-[10.786px] relative shrink-0 w-[53.932px]" data-name="Four Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 11">
        <g id="Four Star">
          <path d={svgPaths.pfe3c2b0} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.p11d0c380} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p2b8c8200} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p124b2df0} fill="var(--fill-0, #FFAD33)" id="Vector_4" />
          <path d={svgPaths.p38bfb700} fill="var(--fill-0, black)" id="Vector_5" opacity="0.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[4.315px] items-start relative shrink-0">
      <FourStar2 />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[10.786px] leading-[11.326px] not-italic opacity-50 relative shrink-0 text-[7.55px] text-black w-[21.573px]">(145)</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[4.315px] items-center relative shrink-0">
      <Frame51 />
      <Frame52 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[4.315px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[12.944px] not-italic relative shrink-0 text-[8.629px] text-black text-nowrap whitespace-pre">PRODUCT/SERVICE 4</p>
      <Frame60 />
    </div>
  );
}

function CartWithFlatDiscountCartWithFlatDiscountCartWithFlatDiscountCartWithFlatDiscountCartProperty1() {
  return (
    <div className="content-stretch flex flex-col gap-[8.629px] items-start relative shrink-0" data-name="Cart With Flat Discount /Cart With Flat Discount/Cart With Flat Discount/Cart With Flat Discount/Cart/Property 25">
      <Cart11 />
      <Frame61 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[16.179px] items-start relative shrink-0">
      {[...Array(2).keys()].map((_, i) => (
        <Cart8 key={i} />
      ))}
      <Cart10 />
      <CartWithFlatDiscountCartWithFlatDiscountCartWithFlatDiscountCartWithFlatDiscountCartProperty1 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <Frame62 />
      {[...Array(5).keys()].map((_, i) => (
        <Frame63 key={i} />
      ))}
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-[32.359px] items-center relative shrink-0">
      <Frame67 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[32.359px] items-center relative shrink-0 w-full">
      <Frame68 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[37.752px] items-start relative shrink-0 w-[631px]">
      <Frame66 />
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] w-full">
          <div className="h-0 relative w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.27px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 631 1">
                <line id="Line 7" opacity="0.3" stroke="var(--stroke-0, black)" strokeWidth="0.269658" x2="631" y1="0.134829" y2="0.134829" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame69 />
    </div>
  );
}

function AutoLayoutVertical() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[25px] h-[14578px] items-center left-[calc(50%-161px)] pb-0 pt-[72px] px-0 top-[-30px] translate-x-[-50%] w-[779px]" data-name="Auto Layout Vertical">
      <SearchAndFilter />
      <Frame70 />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[15670.7px] relative shrink-0 w-[1013px]" data-name="Frame">
      <AutoLayoutVertical />
    </div>
  );
}

function AutoLayoutHorizontal() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-start left-0 px-[46px] py-0 top-0" data-name="Auto Layout Horizontal">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[3208px] left-[calc(16.67%+54px)] overflow-clip top-0 w-[783px]" data-name="Frame">
      <AutoLayoutHorizontal />
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

function AutoLayoutHorizontal1() {
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

function Frame2() {
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
      <Frame2 />
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

function Frame3() {
  return (
    <div className="box-border content-stretch flex gap-[37.5px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <AutoLayoutVertical1 />
      </div>
      <ExploreBtn />
    </div>
  );
}

function Frame4() {
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
      <Frame4 />
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

function Frame5() {
  return (
    <div className="box-border content-stretch flex gap-[37.5px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <AutoLayoutVertical2 />
      </div>
      <ExploreBtn1 />
    </div>
  );
}

function Frame6() {
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
      <Frame6 />
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

function Frame7() {
  return (
    <div className="box-border content-stretch flex gap-[37.5px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <AutoLayoutVertical3 />
      </div>
      <ExploreBtn2 />
    </div>
  );
}

function Frame8() {
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
      <Frame8 />
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

function Frame9() {
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
      <Frame3 />
      <Frame5 />
      <Frame7 />
      <Frame9 />
    </div>
  );
}

function AutoLayoutHorizontal2() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[331px]" data-name="Auto Layout Horizontal">
      <AutoLayoutVertical5 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-center left-[-16px] top-[122px] w-[351px]" data-name="Frame">
      <AutoLayoutHorizontal1 />
      <AutoLayoutHorizontal2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-[600px] left-[19px] right-[19px] top-[-3px]" data-name="Frame">
      <Frame10 />
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
      <Frame11 />
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

function Group8() {
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
      <Group8 />
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

function Frame71() {
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

function Frame12() {
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

function Frame13() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame12 />
    </div>
  );
}

function AutoLayoutHorizontal3() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[2.359px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#edcb48] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Home</p>
      </div>
    </div>
  );
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
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[122.641px] py-[12px] relative w-full">
          <Frame13 />
          <AutoLayoutHorizontal4 />
        </div>
      </div>
    </div>
  );
}

function AutoLayoutHorizontal6() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.016px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Cart and Orders</p>
      </div>
    </div>
  );
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
          <div className="relative shrink-0 size-[24px]" data-name="glyph">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="glyph">
                <path clipRule="evenodd" d={svgPaths.p2663bc80} fill="var(--fill-0, #3971B8)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p13425300} fill="var(--fill-0, #3971B8)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p36a0400} fill="var(--fill-0, #3971B8)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
          <AutoLayoutHorizontal7 />
        </div>
      </div>
    </div>
  );
}

function Group9() {
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
      <Group9 />
    </div>
  );
}

function AutoLayoutHorizontal9() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.016px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">My Payments</p>
      </div>
    </div>
  );
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
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[120.984px] py-[12px] relative w-full">
          <LightThemeListsDefault />
          <AutoLayoutHorizontal10 />
        </div>
      </div>
    </div>
  );
}

function Group10() {
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
      <Group10 />
    </div>
  );
}

function AutoLayoutHorizontal12() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.031px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Messages</p>
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
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[98.969px] py-[12px] relative w-full">
          <LightThemeMessagesDefault />
          <AutoLayoutHorizontal13 />
        </div>
      </div>
    </div>
  );
}

function Group11() {
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
      <Group11 />
    </div>
  );
}

function AutoLayoutHorizontal15() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[3.578px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Notifications</p>
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
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[78.422px] py-[12px] relative w-full">
          <LightThemeNotificationsDefault />
          <AutoLayoutHorizontal16 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
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

function Frame15() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame14 />
    </div>
  );
}

function AutoLayoutHorizontal18() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[1.766px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[15px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Create</p>
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
        <div className="box-border content-stretch flex items-start pl-[12px] pr-[122.234px] py-[12px] relative w-full">
          <Frame15 />
          <AutoLayoutHorizontal19 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
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

function Frame17() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Frame16 />
    </div>
  );
}

function AutoLayoutHorizontal21() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[0.672px] py-0 relative shrink-0" data-name="Auto Layout Horizontal">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3971b8] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">More</p>
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
    <div className="box-border content-stretch flex items-start pl-[12px] pr-[130.328px] py-[12px] relative rounded-[24px] shrink-0" data-name="Auto Layout Horizontal">
      <Frame17 />
      <AutoLayoutHorizontal22 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[535px] items-start left-[12px] px-0 py-[4px] right-[12px] top-[100px]" data-name="Frame">
      <AutoLayoutHorizontal5 />
      <AutoLayoutHorizontal8 />
      <AutoLayoutHorizontal11 />
      <AutoLayoutHorizontal14 />
      <AutoLayoutHorizontal17 />
      <AutoLayoutHorizontal20 />
      <AutoLayoutHorizontal23 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-white h-[616px] left-0 top-0 w-[244px]" data-name="Frame">
      <Frame71 />
      <Frame18 />
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
      <Frame19 />
    </div>
  );
}

export default function SearchSearch() {
  return (
    <div className="bg-white relative size-full" data-name="SEARCH_SEARCH">
      <Frame1 />
      <RightPanel />
      <LeftPanel />
    </div>
  );
}