import svgPaths from "./svg-nk4qrssvgg";
import imgSamMoghadamKhamsehKvmdsTrGobmUnsplash1 from "figma:asset/288da330273c46e1c3dc0a8915c4b031d0345347.png";
import img672462Zah9D56260021000000LightTheNorthFaceXGucciCoat1 from "figma:asset/ee9a38001e9f94261b28e16ea21bacb4144473e8.png";
import img5479539C2St87460010820000LightGucciSavoyMediumDuffleBag1 from "figma:asset/4f3ca1d12722dbdf98f25179d3c0b785988c513d.png";
import imgGammaxxL240Argb1500X5001 from "figma:asset/6739d39dc218c97b645d616c8188a4f2e6aaf84b.png";
import imgSamMoghadamKhamsehL7MQsHlAUUnsplash1 from "figma:asset/e86f6e872757d20a14861e2e0ebd4e9889693f59.png";
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
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#6c757d] text-[12px] text-nowrap whitespace-pre">|</p>
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

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[10.786px] items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25.887px] not-italic relative shrink-0 text-[#104274] text-[19.415px] text-nowrap tracking-[0.7766px] whitespace-pre">Browse By Category</p>
    </div>
  );
}

function FillWithLeftArrow() {
  return (
    <div className="relative shrink-0 size-[24.809px]" data-name="Fill With Left Arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Fill With Left Arrow">
          <circle cx="12.4043" cy="12.4043" fill="var(--fill-0, #F5F5F5)" id="Ellipse 15" r="12.4043" />
          <g id="icons:arrow-left">
            <path d={svgPaths.p3d590500} id="Vector" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.07863" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FillWithRightArrow() {
  return (
    <div className="relative shrink-0 size-[24.809px]" data-name="Fill with Right Arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Fill with Right Arrow">
          <circle cx="12.4043" cy="12.4043" fill="var(--fill-0, #F5F5F5)" id="Ellipse 16" r="12.4043" />
          <g id="icons arrow-right">
            <path d={svgPaths.p2f664900} id="Vector" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.808974" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[4.315px] items-start relative shrink-0">
      <FillWithLeftArrow />
      <FillWithRightArrow />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[372.668px] items-end relative shrink-0">
      <Frame69 />
      <Frame64 />
    </div>
  );
}

function CategoryCellPhone() {
  return (
    <div className="relative shrink-0 size-[30.202px]" data-name="Category-CellPhone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
        <g clipPath="url(#clip0_21_4420)" id="Category-CellPhone">
          <g id="Vector"></g>
          <path d={svgPaths.p33a5b980} id="Vector_2" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.07863" />
          <path d="M13.8425 3.77521H16.7918" id="Vector_3" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.61795" />
          <path d="M15.1009 23.7327V23.7464" id="Vector_4" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34829" />
          <line id="Line 8" stroke="var(--stroke-0, #428DFE)" strokeWidth="1.07863" x1="8.17963" x2="22.0221" y1="21.4828" y2="21.4828" />
        </g>
        <defs>
          <clipPath id="clip0_21_4420">
            <rect fill="white" height="30.2017" width="30.2017" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[45px]">
      <CategoryCellPhone />
      <p className="font-['Poppins:Regular',sans-serif] leading-[12.944px] min-w-full not-italic relative shrink-0 text-[#8ebbff] text-[8.629px] w-[min-content]">Illustration</p>
    </div>
  );
}

function CategoryPhone() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[91.68px]" data-name="Category-Phone">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[17px] py-[13px] relative rounded-[inherit] w-[91.68px]">
        <Frame81 />
      </div>
      <div aria-hidden="true" className="absolute border-[#428dfe] border-[0.539px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CategoryCellPhone1() {
  return (
    <div className="relative shrink-0 size-[30.202px]" data-name="Category-CellPhone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
        <g clipPath="url(#clip0_21_4420)" id="Category-CellPhone">
          <g id="Vector"></g>
          <path d={svgPaths.p33a5b980} id="Vector_2" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.07863" />
          <path d="M13.8425 3.77521H16.7918" id="Vector_3" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.61795" />
          <path d="M15.1009 23.7327V23.7464" id="Vector_4" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34829" />
          <line id="Line 8" stroke="var(--stroke-0, #428DFE)" strokeWidth="1.07863" x1="8.17963" x2="22.0221" y1="21.4828" y2="21.4828" />
        </g>
        <defs>
          <clipPath id="clip0_21_4420">
            <rect fill="white" height="30.2017" width="30.2017" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[45px]">
      <CategoryCellPhone1 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[12.944px] not-italic relative shrink-0 text-[#8ebbff] text-[8.629px] text-center w-[91px]">3D Modelling</p>
    </div>
  );
}

function CategoryPhone1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[91.68px]" data-name="Category-Phone">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[17px] py-[13px] relative rounded-[inherit] w-[91.68px]">
        <Frame82 />
      </div>
      <div aria-hidden="true" className="absolute border-[#428dfe] border-[0.539px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CategoryCellPhone2() {
  return (
    <div className="relative shrink-0 size-[30.202px]" data-name="Category-CellPhone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
        <g clipPath="url(#clip0_21_4420)" id="Category-CellPhone">
          <g id="Vector"></g>
          <path d={svgPaths.p33a5b980} id="Vector_2" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.07863" />
          <path d="M13.8425 3.77521H16.7918" id="Vector_3" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.61795" />
          <path d="M15.1009 23.7327V23.7464" id="Vector_4" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34829" />
          <line id="Line 8" stroke="var(--stroke-0, #428DFE)" strokeWidth="1.07863" x1="8.17963" x2="22.0221" y1="21.4828" y2="21.4828" />
        </g>
        <defs>
          <clipPath id="clip0_21_4420">
            <rect fill="white" height="30.2017" width="30.2017" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[45px]">
      <CategoryCellPhone2 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[12.944px] not-italic relative shrink-0 text-[#8ebbff] text-[8.629px] text-center w-[91px]">Web Design</p>
    </div>
  );
}

function CategoryPhone2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[91.68px]" data-name="Category-Phone">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[17px] py-[13px] relative rounded-[inherit] w-[91.68px]">
        <Frame83 />
      </div>
      <div aria-hidden="true" className="absolute border-[#428dfe] border-[0.539px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CategoryCellPhone3() {
  return (
    <div className="relative shrink-0 size-[30.202px]" data-name="Category-CellPhone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
        <g clipPath="url(#clip0_21_4420)" id="Category-CellPhone">
          <g id="Vector"></g>
          <path d={svgPaths.p33a5b980} id="Vector_2" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.07863" />
          <path d="M13.8425 3.77521H16.7918" id="Vector_3" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.61795" />
          <path d="M15.1009 23.7327V23.7464" id="Vector_4" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34829" />
          <line id="Line 8" stroke="var(--stroke-0, #428DFE)" strokeWidth="1.07863" x1="8.17963" x2="22.0221" y1="21.4828" y2="21.4828" />
        </g>
        <defs>
          <clipPath id="clip0_21_4420">
            <rect fill="white" height="30.2017" width="30.2017" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[45px]">
      <CategoryCellPhone3 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[12.944px] not-italic relative shrink-0 text-[#8ebbff] text-[8.629px] text-center w-[91px]">UI and UX</p>
    </div>
  );
}

function CategoryPhone3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[91.68px]" data-name="Category-Phone">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[17px] py-[13px] relative rounded-[inherit] w-[91.68px]">
        <Frame84 />
      </div>
      <div aria-hidden="true" className="absolute border-[#428dfe] border-[0.539px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CategoryCellPhone4() {
  return (
    <div className="relative shrink-0 size-[30.202px]" data-name="Category-CellPhone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
        <g clipPath="url(#clip0_21_4420)" id="Category-CellPhone">
          <g id="Vector"></g>
          <path d={svgPaths.p33a5b980} id="Vector_2" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.07863" />
          <path d="M13.8425 3.77521H16.7918" id="Vector_3" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.61795" />
          <path d="M15.1009 23.7327V23.7464" id="Vector_4" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34829" />
          <line id="Line 8" stroke="var(--stroke-0, #428DFE)" strokeWidth="1.07863" x1="8.17963" x2="22.0221" y1="21.4828" y2="21.4828" />
        </g>
        <defs>
          <clipPath id="clip0_21_4420">
            <rect fill="white" height="30.2017" width="30.2017" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[45px]">
      <CategoryCellPhone4 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[12.944px] not-italic relative shrink-0 text-[#8ebbff] text-[8.629px] text-center w-[91px]">Products</p>
    </div>
  );
}

function CategoryPhone4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[91.68px]" data-name="Category-Phone">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[17px] py-[13px] relative rounded-[inherit] w-[91.68px]">
        <Frame85 />
      </div>
      <div aria-hidden="true" className="absolute border-[#428dfe] border-[0.539px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CategoryCellPhone5() {
  return (
    <div className="relative shrink-0 size-[30.202px]" data-name="Category-CellPhone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
        <g clipPath="url(#clip0_21_4420)" id="Category-CellPhone">
          <g id="Vector"></g>
          <path d={svgPaths.p33a5b980} id="Vector_2" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.07863" />
          <path d="M13.8425 3.77521H16.7918" id="Vector_3" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.61795" />
          <path d="M15.1009 23.7327V23.7464" id="Vector_4" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34829" />
          <line id="Line 8" stroke="var(--stroke-0, #428DFE)" strokeWidth="1.07863" x1="8.17963" x2="22.0221" y1="21.4828" y2="21.4828" />
        </g>
        <defs>
          <clipPath id="clip0_21_4420">
            <rect fill="white" height="30.2017" width="30.2017" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[45px]">
      <CategoryCellPhone5 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[12.944px] not-italic relative shrink-0 text-[#8ebbff] text-[8.629px] text-center w-[91px]">Trading Cards</p>
    </div>
  );
}

function CategoryPhone5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[91.68px]" data-name="Category-Phone">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[17px] py-[13px] relative rounded-[inherit] w-[91.68px]">
        <Frame86 />
      </div>
      <div aria-hidden="true" className="absolute border-[#428dfe] border-[0.539px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[16.179px] items-start relative shrink-0">
      <CategoryPhone />
      <CategoryPhone1 />
      <CategoryPhone2 />
      <CategoryPhone3 />
      <CategoryPhone4 />
      <CategoryPhone5 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[32.359px] items-start relative shrink-0 w-full">
      <Frame75 />
      <Frame46 />
    </div>
  );
}

function Rectangle() {
  return (
    <div className="h-[40px] relative shrink-0 w-[20px]">
      <div className="absolute bg-[#428dfe] inset-0 rounded-[4px]" />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Rectangle />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#428dfe] text-[16px] text-nowrap whitespace-pre">This Month’s</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[53px] items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] not-italic relative shrink-0 text-[#104274] text-[36px] text-nowrap tracking-[1.44px] whitespace-pre">Top Picks for You</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[87px] items-end relative shrink-0">
      <Frame71 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[470px] items-end relative shrink-0">
      <Frame72 />
    </div>
  );
}

function FillHeart() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Fill Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Fill Heart">
          <circle cx="17" cy="17" fill="var(--fill-0, white)" id="Ellipse 12" r="17" />
          <g id="heart small">
            <path d={svgPaths.p37919a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
    <div className="absolute inset-[14.71%] overflow-clip" data-name="Quick View">
      <Group />
    </div>
  );
}

function FillEye() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Fill Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <circle cx="17" cy="17" fill="var(--fill-0, white)" id="Ellipse 13" r="17" />
      </svg>
      <QuickView />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start right-[12px] top-[12px]">
      <FillHeart />
      <FillEye />
    </div>
  );
}

function Frame60() {
  return <div className="absolute h-[180px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[190px]" />;
}

function Frame24() {
  return (
    <div className="bg-[red] h-[250px] overflow-clip relative rounded-[4px] shrink-0 w-[270px]">
      <Frame29 />
      <Frame60 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium','Noto_Sans:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#428dfe] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        ₱
      </p>
    </div>
  );
}

function FiveStar() {
  return (
    <div className="h-[20px] relative shrink-0 w-[100px]" data-name="Five star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 20">
        <g id="Five star">
          <path d={svgPaths.p2a639d30} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.pbb48200} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p170d0200} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p379b8d00} fill="var(--fill-0, #FFAD33)" id="Vector_4" />
          <path d={svgPaths.p23538a00} fill="var(--fill-0, #FFAD33)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <FiveStar />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[20px] leading-[21px] not-italic opacity-50 relative shrink-0 text-[14px] text-black w-[32px]">(88)</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">PRODUCT/SERVICE</p>
      <Frame21 />
      <Frame20 />
    </div>
  );
}

function CartWithFlatDiscount() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Cart With Flat Discount">
      <Frame24 />
      <Frame23 />
    </div>
  );
}

function FillHeart1() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Fill Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Fill Heart">
          <circle cx="17" cy="17" fill="var(--fill-0, white)" id="Ellipse 12" r="17" />
          <g id="heart small">
            <path d={svgPaths.p37919a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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

function QuickView1() {
  return (
    <div className="absolute inset-[14.71%] overflow-clip" data-name="Quick View">
      <Group1 />
    </div>
  );
}

function FillEye1() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Fill Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <circle cx="17" cy="17" fill="var(--fill-0, white)" id="Ellipse 13" r="17" />
      </svg>
      <QuickView1 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start right-[12px] top-[12px]">
      <FillHeart1 />
      <FillEye1 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[red] h-[250px] overflow-clip relative rounded-[4px] shrink-0 w-[270px]">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[24px] left-[calc(50%-48px)] not-italic text-[16px] text-nowrap text-white top-[calc(50%+92px)] whitespace-pre">&nbsp;</p>
      <Frame30 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium','Noto_Sans:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#428dfe] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        ₱
      </p>
    </div>
  );
}

function FourStar() {
  return (
    <div className="h-[20px] relative shrink-0 w-[100px]" data-name="Four Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 20">
        <g id="Four Star">
          <path d={svgPaths.p2a639d30} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.pbb48200} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p170d0200} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p379b8d00} fill="var(--fill-0, #FFAD33)" id="Vector_4" />
          <path d={svgPaths.p23538a00} fill="var(--fill-0, black)" id="Vector_5" opacity="0.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <FourStar />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[20px] leading-[21px] not-italic opacity-50 relative shrink-0 text-[14px] text-black w-[32px]">(75)</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">PRODUCT/SERVICE</p>
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function CartWithFlatDiscount1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Cart With Flat Discount">
      <Frame25 />
      <Frame28 />
    </div>
  );
}

function FillHeart2() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Fill Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Fill Heart">
          <circle cx="17" cy="17" fill="var(--fill-0, white)" id="Ellipse 12" r="17" />
          <g id="heart small">
            <path d={svgPaths.p37919a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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

function QuickView2() {
  return (
    <div className="absolute inset-[14.71%] overflow-clip" data-name="Quick View">
      <Group3 />
    </div>
  );
}

function FillEye2() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Fill Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <circle cx="17" cy="17" fill="var(--fill-0, white)" id="Ellipse 13" r="17" />
      </svg>
      <QuickView2 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start right-[12px] top-[12px]">
      <FillHeart2 />
      <FillEye2 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[red] h-[250px] overflow-clip relative rounded-[4px] shrink-0 w-[270px]">
      <Frame32 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium','Noto_Sans:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#428dfe] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        ₱
      </p>
    </div>
  );
}

function FiveStar1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[100px]" data-name="Five star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 20">
        <g id="Five star">
          <path d={svgPaths.p2a639d30} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.pbb48200} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p170d0200} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p379b8d00} fill="var(--fill-0, #FFAD33)" id="Vector_4" />
          <path d={svgPaths.p23538a00} fill="var(--fill-0, #FFAD33)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <FiveStar1 />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[20px] leading-[21px] not-italic opacity-50 relative shrink-0 text-[14px] text-black w-[32px]">(99)</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">PRODUCT/SERVICE</p>
      <Frame34 />
      <Frame35 />
    </div>
  );
}

function CartWithFlatDiscount2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Cart With Flat Discount">
      <Frame33 />
      <Frame36 />
    </div>
  );
}

function DiscountPercent() {
  return (
    <div className="absolute bg-[#428dfe] box-border content-stretch flex gap-[10px] items-center justify-center left-[12px] px-[12px] py-[4px] rounded-[4px] top-[12px]" data-name="Discount percent">
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-neutral-50 text-nowrap whitespace-pre">-25%</p>
    </div>
  );
}

function FillHeart3() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Fill Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Fill Heart">
          <circle cx="17" cy="17" fill="var(--fill-0, white)" id="Ellipse 12" r="17" />
          <g id="heart small">
            <path d={svgPaths.p37919a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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

function QuickView3() {
  return (
    <div className="absolute inset-[14.71%] overflow-clip" data-name="Quick View">
      <Group4 />
    </div>
  );
}

function FillEye3() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Fill Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <circle cx="17" cy="17" fill="var(--fill-0, white)" id="Ellipse 13" r="17" />
      </svg>
      <QuickView3 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start right-[12px] top-[12px]">
      <FillHeart3 />
      <FillEye3 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="absolute h-[180px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[190px]">
      <div className="absolute h-[180px] left-[41px] top-0 w-[107px]" data-name="sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[119.67%] left-[-30.95%] max-w-none top-[-11.28%] w-[160.55%]" src={imgSamMoghadamKhamsehKvmdsTrGobmUnsplash1} />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-neutral-100 h-[250px] overflow-clip relative rounded-[4px] shrink-0 w-[270px]">
      <DiscountPercent />
      <Frame37 />
      <Frame63 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex font-['Poppins:Medium',sans-serif] gap-[12px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[#428dfe]">$375</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid line-through opacity-50 relative shrink-0 text-black">$400</p>
    </div>
  );
}

function FourHalfStar() {
  return (
    <div className="h-[20px] relative shrink-0 w-[100px]" data-name="Four Half Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 20">
        <g id="Four Half Star">
          <path d={svgPaths.p2a639d30} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.pbb48200} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p170d0200} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p379b8d00} fill="var(--fill-0, #FFAD33)" id="Vector_4" />
          <g id="star-half-filled">
            <path d={svgPaths.p23200b00} fill="var(--fill-0, #FFAD33)" id="Vector_5" />
            <path d={svgPaths.p3b02de00} fill="var(--fill-0, black)" id="Vector_6" opacity="0.25" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <FourHalfStar />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[20px] leading-[21px] not-italic opacity-50 relative shrink-0 text-[14px] text-black w-[32px]">(99)</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">{`S-Series Comfort Chair `}</p>
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function CartWithFlatDiscount3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Cart With Flat Discount">
      <Frame38 />
      <Frame41 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0">
      <CartWithFlatDiscount />
      <CartWithFlatDiscount1 />
      <CartWithFlatDiscount2 />
      {[...Array(2).keys()].map((_, i) => (
        <CartWithFlatDiscount3 key={i} />
      ))}
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[519px] items-start relative shrink-0">
      <Frame68 />
      <Frame73 />
      <Frame31 />
    </div>
  );
}

function Rectangle1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[20px]">
      <div className="absolute bg-[#428dfe] inset-0 rounded-[4px]" />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Rectangle1 />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#428dfe] text-[16px] text-nowrap whitespace-pre">This Month</p>
    </div>
  );
}

function Frame66() {
  return <div className="h-[11px] shrink-0 w-[48px]" />;
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[10.786px] items-start relative shrink-0">
      <Frame70 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25.887px] not-italic relative shrink-0 text-[#104274] text-[19.415px] text-nowrap tracking-[0.7766px] whitespace-pre">Best Selling Products</p>
      <Frame66 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#428dfe] box-border content-stretch flex gap-[5.393px] items-center justify-center px-[25.887px] py-[8.629px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="font-['Poppins:Medium',sans-serif] leading-[12.944px] not-italic relative shrink-0 text-[8.629px] text-neutral-50 text-nowrap whitespace-pre">View All</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[329.522px] items-end relative shrink-0">
      <Frame67 />
      <Button />
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

function Frame22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.315px] items-start right-[6.09px] top-[6.47px]">
      <FillHeart4 />
      <FillEye4 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute h-[97.077px] left-[calc(50%+0.19px)] overflow-clip top-[calc(50%-0.41px)] translate-x-[-50%] translate-y-[-50%] w-[102.47px]">
      <div className="absolute h-[78.74px] left-[calc(50%-0.24px)] top-[calc(50%+0.46px)] translate-x-[-50%] translate-y-[-50%] w-[75.504px]" data-name="672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[116.23%] left-[-10.69%] max-w-none top-[-5.19%] w-[121.64%]" src={img672462Zah9D56260021000000LightTheNorthFaceXGucciCoat1} />
        </div>
      </div>
    </div>
  );
}

function Cart() {
  return (
    <div className="bg-neutral-100 h-[134.829px] overflow-clip relative rounded-[2.157px] shrink-0 w-[145.615px]" data-name="Cart">
      <Frame22 />
      <Frame54 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex font-['Poppins:Medium',sans-serif] gap-[6.472px] items-start leading-[12.944px] not-italic relative shrink-0 text-[8.629px] text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[#428dfe]">$260</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid line-through opacity-50 relative shrink-0 text-black">$360</p>
    </div>
  );
}

function FiveStar2() {
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

function Frame43() {
  return (
    <div className="content-stretch flex gap-[4.315px] items-start relative shrink-0">
      <FiveStar2 />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[10.786px] leading-[11.326px] not-italic opacity-50 relative shrink-0 text-[7.55px] text-black w-[17.258px]">(65)</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[4.315px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[12.944px] not-italic relative shrink-0 text-[8.629px] text-black text-nowrap whitespace-pre">The north coat</p>
      <Frame42 />
      <Frame43 />
    </div>
  );
}

function Cart1() {
  return (
    <div className="content-stretch flex flex-col gap-[8.629px] items-start relative shrink-0" data-name="Cart">
      <Cart />
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

function Frame55() {
  return (
    <div className="absolute h-[97.077px] left-[calc(50%+0.19px)] overflow-clip top-[calc(50%-0.41px)] translate-x-[-50%] translate-y-[-50%] w-[102.47px]">
      <div className="absolute h-[69.572px] left-[calc(50%-0.24px)] top-[calc(50%+0.73px)] translate-x-[-50%] translate-y-[-50%] w-[95.998px]" data-name="547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[146.38%] left-[-3.5%] max-w-none top-[-23.51%] w-[106.9%]" src={img5479539C2St87460010820000LightGucciSavoyMediumDuffleBag1} />
        </div>
      </div>
    </div>
  );
}

function Cart2() {
  return (
    <div className="bg-neutral-100 h-[134.829px] overflow-clip relative rounded-[2.157px] shrink-0 w-[145.615px]" data-name="Cart">
      <Frame45 />
      <Frame55 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex font-['Poppins:Medium',sans-serif] gap-[6.472px] items-start leading-[12.944px] not-italic relative shrink-0 text-[8.629px] text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[#428dfe]">$960</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid line-through opacity-50 relative shrink-0 text-black">$1160</p>
    </div>
  );
}

function FourHalfStar1() {
  return (
    <div className="h-[10.786px] relative shrink-0 w-[53.932px]" data-name="Four Half Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 11">
        <g id="Four Half Star">
          <path d={svgPaths.pfe3c2b0} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.p11d0c380} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p2b8c8200} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p30528600} fill="var(--fill-0, #FFAD33)" id="Vector_4" />
          <g clipPath="url(#clip0_21_4411)" id="star-half-filled">
            <path d={svgPaths.p30a13400} fill="var(--fill-0, #FFAD33)" id="Vector_5" />
            <path d={svgPaths.p33405b00} fill="var(--fill-0, black)" id="Vector_6" opacity="0.25" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_21_4411">
            <rect fill="white" height="10.7863" transform="translate(43.1453)" width="10.7863" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[4.315px] items-start relative shrink-0">
      <FourHalfStar1 />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[10.786px] leading-[11.326px] not-italic opacity-50 relative shrink-0 text-[7.55px] text-black w-[17.258px]">(65)</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[4.315px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[12.944px] not-italic relative shrink-0 text-[8.629px] text-black text-nowrap whitespace-pre">Gucci duffle bag</p>
      <Frame47 />
      <Frame48 />
    </div>
  );
}

function Cart3() {
  return (
    <div className="content-stretch flex flex-col gap-[8.629px] items-start relative shrink-0" data-name="Cart">
      <Cart2 />
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
    <div className="absolute content-stretch flex flex-col gap-[4.315px] items-start right-[6.09px] top-[6.47px]">
      <FillHeart6 />
      <FillEye6 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="absolute h-[97.077px] left-[21.57px] overflow-clip top-[18.88px] w-[102.47px]">
      <div className="absolute h-[51.235px] left-[calc(50%+0.03px)] top-[calc(50%+2.89px)] translate-x-[-50%] translate-y-[-50%] w-[103.009px]" data-name="gammaxx-l240-argb-1-500x500 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[232.56%] left-[-6.67%] max-w-none top-[-71.63%] w-[114.94%]" src={imgGammaxxL240Argb1500X5001} />
        </div>
      </div>
    </div>
  );
}

function Cart4() {
  return (
    <div className="bg-neutral-100 h-[134.829px] overflow-clip relative rounded-[2.157px] shrink-0 w-[145.615px]" data-name="Cart">
      <Frame50 />
      <Frame59 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex font-['Poppins:Medium',sans-serif] gap-[6.472px] items-start leading-[12.944px] not-italic relative shrink-0 text-[8.629px] text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[#428dfe]">$160</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid line-through opacity-50 relative shrink-0 text-black">$170</p>
    </div>
  );
}

function FourHalfStar2() {
  return (
    <div className="h-[10.786px] relative shrink-0 w-[53.932px]" data-name="Four Half Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 11">
        <g id="Four Half Star">
          <path d={svgPaths.pfe3c2b0} fill="var(--fill-0, #FFAD33)" id="Vector" />
          <path d={svgPaths.p11d0c380} fill="var(--fill-0, #FFAD33)" id="Vector_2" />
          <path d={svgPaths.p2b8c8200} fill="var(--fill-0, #FFAD33)" id="Vector_3" />
          <path d={svgPaths.p30528600} fill="var(--fill-0, #FFAD33)" id="Vector_4" />
          <g clipPath="url(#clip0_21_4411)" id="star-half-filled">
            <path d={svgPaths.p30a13400} fill="var(--fill-0, #FFAD33)" id="Vector_5" />
            <path d={svgPaths.p33405b00} fill="var(--fill-0, black)" id="Vector_6" opacity="0.25" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_21_4411">
            <rect fill="white" height="10.7863" transform="translate(43.1453)" width="10.7863" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[4.315px] items-start relative shrink-0">
      <FourHalfStar2 />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[10.786px] leading-[11.326px] not-italic opacity-50 relative shrink-0 text-[7.55px] text-black w-[17.258px]">(65)</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[4.315px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[12.944px] not-italic relative shrink-0 text-[8.629px] text-black text-nowrap whitespace-pre">RGB liquid CPU Cooler</p>
      <Frame51 />
      <Frame53 />
    </div>
  );
}

function Cart5() {
  return (
    <div className="content-stretch flex flex-col gap-[8.629px] items-start relative shrink-0" data-name="Cart">
      <Cart4 />
      <Frame56 />
    </div>
  );
}

function FillHeart7() {
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

function Group8() {
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

function QuickView7() {
  return (
    <div className="absolute inset-[14.71%] overflow-clip" data-name="Quick View">
      <Group8 />
    </div>
  );
}

function FillEye7() {
  return (
    <div className="relative shrink-0 size-[18.337px]" data-name="Fill Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <circle cx="9.16838" cy="9.16838" fill="var(--fill-0, white)" id="Ellipse 13" r="9.16838" />
      </svg>
      <QuickView7 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.315px] items-start right-[6.09px] top-[6.47px]">
      <FillHeart7 />
      <FillEye7 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="absolute h-[97.077px] left-[21.57px] overflow-clip top-[18.88px] w-[102.47px]">
      <div className="absolute h-[94.92px] left-[calc(50%-0.24px)] top-[calc(50%+1px)] translate-x-[-50%] translate-y-[-50%] w-[75.504px]" data-name="sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[117.65%] left-[-59.03%] max-w-none top-[-9.93%] w-[222.92%]" src={imgSamMoghadamKhamsehL7MQsHlAUUnsplash1} />
        </div>
      </div>
    </div>
  );
}

function Cart6() {
  return (
    <div className="bg-neutral-100 h-[134.829px] overflow-clip relative rounded-[2.157px] shrink-0 w-[145.615px]" data-name="Cart">
      <Frame57 />
      <Frame61 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[6.472px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[12.944px] not-italic relative shrink-0 text-[#428dfe] text-[8.629px] text-nowrap whitespace-pre">$360</p>
    </div>
  );
}

function FiveStar3() {
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

function Frame62() {
  return (
    <div className="content-stretch flex gap-[4.315px] items-start relative shrink-0">
      <FiveStar3 />
      <p className="font-['Poppins:SemiBold',sans-serif] h-[10.786px] leading-[11.326px] not-italic opacity-50 relative shrink-0 text-[7.55px] text-black w-[17.258px]">(65)</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[4.315px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[12.944px] not-italic relative shrink-0 text-[8.629px] text-black text-nowrap whitespace-pre">Small BookSelf</p>
      <Frame58 />
      <Frame62 />
    </div>
  );
}

function Cart7() {
  return (
    <div className="content-stretch flex flex-col gap-[8.629px] items-start relative shrink-0" data-name="Cart">
      <Cart6 />
      <Frame65 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[16.179px] items-start relative shrink-0">
      <Cart1 />
      <Cart3 />
      <Cart5 />
      <Cart7 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame77 />
      <Frame52 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[37.752px] items-start relative shrink-0 w-[631px]">
      <Frame76 />
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
      <Frame74 />
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
      <Frame78 />
    </div>
  );
}

function AutoLayoutVertical() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[25px] h-[14578px] items-center left-[calc(50%-161px)] pb-0 pt-[72px] px-0 top-[-30px] translate-x-[-50%] w-[779px]" data-name="Auto Layout Vertical">
      <SearchAndFilter />
      <Frame79 />
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

function Group9() {
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
      <Group9 />
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

function Frame80() {
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

function Group10() {
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
      <Group10 />
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

function Group11() {
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
      <Group11 />
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

function Group12() {
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
      <Group12 />
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
      <Frame80 />
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

export default function SearchInitial() {
  return (
    <div className="bg-white relative size-full" data-name="SEARCH_INITIAL">
      <Frame1 />
      <RightPanel />
      <LeftPanel />
    </div>
  );
}