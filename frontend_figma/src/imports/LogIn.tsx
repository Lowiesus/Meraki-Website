import svgPaths from "./svg-2agq6polwk";
import imgFacebookLogo20231 from "figma:asset/af6f06778b34a6b7844168f257fff50611bc7dd9.png";
import imgLogoIcon2 from "figma:asset/2b7e679a7a86a6e24f1b9a9001522d9b89b0d82e.png";
import imgLogoAlter2 from "figma:asset/a16b685f7c41d886d366b4fedd8fd5dbf6fed524.png";
import imgBgTexture31 from "figma:asset/0d00f6be6ac86f96b5d39e2e21a7b72f784d6eac.png";
import imgCrochetPengu2 from "figma:asset/8f5c96ec1f96d89945319a5449ad21f838ca62ca.png";
import imgMaintenancePengu1 from "figma:asset/cc3b15e57154dad1ec767cbee62cab94501846a1.png";

function Email() {
  return (
    <div className="content-stretch flex flex-col gap-[8.74px] items-start relative shrink-0" data-name="Email">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2963a3] text-[15.295px] text-nowrap whitespace-pre">Email Address</p>
    </div>
  );
}

function Message() {
  return (
    <div className="absolute inset-[12.5%_8.33%]" data-name="Message">
      <div className="absolute inset-[-5.56%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 17">
          <g id="Message">
            <path d={svgPaths.p31a83f80} id="Stroke 1" stroke="var(--stroke-0, #2963A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.63875" />
            <path clipRule="evenodd" d={svgPaths.p2f973471} fillRule="evenodd" id="Stroke 3" stroke="var(--stroke-0, #2963A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.63875" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightMessage() {
  return (
    <div className="relative shrink-0 size-[19.665px]" data-name="Iconly/Light/Message">
      <Message />
    </div>
  );
}

function Email1() {
  return (
    <div className="bg-[#f6f7f9] box-border content-stretch flex items-center justify-between p-[21.85px] relative rounded-[13.11px] shrink-0 w-[365.987px]" data-name="Email">
      <Email />
      <IconlyLightMessage />
    </div>
  );
}

function Password() {
  return (
    <div className="content-stretch flex flex-col gap-[8.74px] items-start relative shrink-0 w-[264.401px]" data-name="Password">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2963a3] text-[15.295px] text-nowrap whitespace-pre">Password</p>
    </div>
  );
}

function Hide() {
  return (
    <div className="absolute inset-[17.71%_11.46%_16.57%_11.46%]" data-name="Hide">
      <div className="absolute inset-[-6.34%_-5.41%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 15">
          <g id="Hide">
            <path d={svgPaths.p8b79a00} id="Stroke 1" stroke="var(--stroke-0, #2963A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.63875" />
            <path d={svgPaths.p35fe5040} id="Stroke 3" stroke="var(--stroke-0, #2963A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.63875" />
            <path d={svgPaths.p2aaa1a50} id="Stroke 5" stroke="var(--stroke-0, #2963A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.63875" />
            <path d={svgPaths.p12d2d900} id="Stroke 7" stroke="var(--stroke-0, #2963A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.63875" />
            <path d={svgPaths.p1c0bc880} id="Stroke 9" stroke="var(--stroke-0, #2963A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.63875" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightHide() {
  return (
    <div className="relative shrink-0 size-[19.665px]" data-name="Iconly/Light/Hide">
      <Hide />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#f6f7f9] box-border content-stretch flex items-center justify-between p-[21.85px] relative rounded-[13.11px] shrink-0 w-[365.987px]">
      <Password />
      <IconlyLightHide />
    </div>
  );
}

function Group4() {
  return (
    <div className="relative shrink-0 size-[16.388px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Group 34821">
          <rect fill="var(--fill-0, #428DFE)" height="16.3875" id="Rectangle 1873" rx="2.185" width="16.3875" />
          <path clipRule="evenodd" d={svgPaths.p19e46500} fill="var(--fill-0, white)" fillRule="evenodd" id="image 19 (Traced)" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8.74px] items-center relative shrink-0">
      <Group4 />
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2963a3] text-[13.11px] text-nowrap whitespace-pre">Remember Me</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[127.823px] items-start relative shrink-0">
      <Frame2 />
      <p className="font-['Work_Sans:SemiBold_Italic',sans-serif] font-semibold italic leading-[normal] relative shrink-0 text-[#428dfe] text-[13.11px] text-center text-nowrap whitespace-pre">Forgot Password ?</p>
    </div>
  );
}

function ForgotPassword() {
  return (
    <div className="content-stretch flex flex-col gap-[10.925px] items-start relative shrink-0" data-name="Forgot Password ?">
      <Frame />
      <Frame4 />
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col gap-[26.22px] items-start relative shrink-0" data-name="Input Field">
      <Email1 />
      <ForgotPassword />
    </div>
  );
}

function LoginBtn() {
  return (
    <div className="bg-[#428dfe] box-border content-stretch flex gap-[10.925px] items-start justify-center px-[10.925px] py-[14.202px] relative rounded-[13.11px] shrink-0 w-[365.987px]" data-name="Login Btn">
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[17.48px] text-nowrap text-white uppercase whitespace-pre">Login</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[17.48px] items-center relative shrink-0">
      <LoginBtn />
    </div>
  );
}

function LoginForm() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[43.7px] items-center left-[217px] top-[465px] w-[365.987px]" data-name="Login form">
      <InputField />
      <Frame3 />
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] h-[20px] ml-0 mt-0 relative w-[19.573px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p325ba9f0} fill="var(--fill-0, #FBBC05)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3aba2680} fill="var(--fill-0, #EB4335)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p39a5dd00} fill="var(--fill-0, #34A853)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1ff94900} fill="var(--fill-0, #4285F4)" fillRule="evenodd" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <Group />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <Group1 />
    </div>
  );
}

function Google() {
  return (
    <div className="bg-[#f6f7f9] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[15px] relative rounded-[82px] shrink-0" data-name="google">
      <Group3 />
    </div>
  );
}

function Facebook() {
  return (
    <div className="bg-[#f6f7f9] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[15px] relative rounded-[82px] shrink-0" data-name="facebook">
      <div className="h-[20px] relative shrink-0 w-[19px]" data-name="Facebook_Logo_2023 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFacebookLogo20231} />
      </div>
    </div>
  );
}

function Calling() {
  return (
    <div className="absolute inset-[10.42%_10.86%_10.42%_8.33%]" data-name="Calling">
      <div className="absolute inset-[-4.74%_-4.64%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Calling">
            <path d={svgPaths.pe55e880} id="Stroke 1" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p3bb59a80} id="Stroke 3" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path clipRule="evenodd" d={svgPaths.pb543400} fillRule="evenodd" id="Stroke 5" stroke="var(--stroke-0, #428DFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightCalling() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Iconly/Light/Calling">
      <Calling />
    </div>
  );
}

function Phone() {
  return (
    <div className="bg-[#f6f7f9] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[15px] relative rounded-[162px] shrink-0" data-name="Phone">
      <IconlyLightCalling />
    </div>
  );
}

function AlternativeLogins() {
  return (
    <div className="content-stretch flex gap-[35px] items-start relative shrink-0" data-name="Alternative Logins">
      <Google />
      <Facebook />
      <Phone />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-center justify-center left-[151px] top-[225px] w-[499px]" data-name="Header">
      <p className="capitalize font-['Work_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#22242b] text-[42.5px] text-center w-[599px]">Log in Back To meraki</p>
      <AlternativeLogins />
    </div>
  );
}

function ForgetLogIn() {
  return (
    <div className="absolute content-stretch flex gap-[5.463px] items-center justify-center leading-[normal] left-[231.26px] text-[15.295px] text-nowrap top-[780px] whitespace-pre" data-name="Forget Log In">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#2963a3]">Forgot your login details?</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Work_Sans:SemiBold_Italic',sans-serif] font-semibold italic relative shrink-0 text-[#428dfe] underline">Get help logging in</p>
    </div>
  );
}

function OrContinueWithYourAccountDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0" data-name="Or Continue With Your Account Details">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2963a3] text-[14px] text-center text-nowrap whitespace-pre">Or Continue With Your Account Details</p>
    </div>
  );
}

function Or() {
  return (
    <div className="absolute content-stretch flex gap-[15px] items-center left-[160px] top-[407px]" data-name="Or">
      <div className="bg-[#ebebeb] h-[1.5px] shrink-0 w-[93px]" data-name="Line" />
      <OrContinueWithYourAccountDetails />
      <div className="bg-[#ebebeb] h-[1.5px] shrink-0 w-[93px]" data-name="Line" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7.5px] h-[27px] items-center justify-center px-[19.5px] py-[4.5px] relative rounded-[15px] shrink-0 w-[92.25px]">
      <div aria-hidden="true" className="absolute border-[#428dfe] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <p className="font-['Raleway:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#428dfe] text-[15px] text-nowrap whitespace-pre">SIGN UP</p>
    </div>
  );
}

function DontHaveAnAccount() {
  return (
    <div className="absolute content-stretch flex gap-[15px] items-center justify-center left-[58px] top-[67px] w-[297px]" data-name="Don’t have an account?">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2963a3] text-[14px] text-nowrap whitespace-pre">Don’t Have An Account?</p>
      <Frame1 />
    </div>
  );
}

function SignUpDetails() {
  return (
    <div className="h-[1024px] overflow-clip relative shrink-0 w-[801px]" data-name="SIGN UP DETAILS">
      <div className="absolute bg-white border border-[#f7f9fa] border-solid h-[1024px] left-0 top-0 w-[801px]" />
      <p className="absolute font-['Comfortaa:Bold',sans-serif] font-bold h-[15px] leading-[normal] left-[400.5px] text-[10.71px] text-[rgba(91,112,131,0.5)] text-center top-[928px] translate-x-[-50%] w-[509px]">Terms of Service Privacy Policy Cookie Policy Ads info More © 2021 Innovae, Inc.</p>
      <LoginForm />
      <Header />
      <ForgetLogIn />
      <Or />
      <DontHaveAnAccount />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[15%_14.96%_14.96%_15%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 860 861">
        <g id="Group 2">
          <path d={svgPaths.p25bcb900} fill="var(--fill-0, #FFF3C7)" id="Vector" />
          <path d={svgPaths.p1bea4900} fill="var(--fill-0, #C5E7FF)" id="Vector_2" />
          <path d={svgPaths.p1d88ba00} fill="var(--fill-0, #95D2FF)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Relative() {
  return (
    <div className="absolute bg-[rgba(32,141,102,0)] h-[1228px] left-[-231px] overflow-clip top-[-22px] w-[1227px]" data-name="Relative">
      <Group2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex items-center left-[360px] top-[20px]">
      <div className="relative shrink-0 size-[69px]" data-name="LOGO_ICON 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoIcon2} />
      </div>
      <div className="h-[52px] relative shrink-0 w-[172px]" data-name="LOGO_ALTER 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[256.26%] left-0 max-w-none top-[-60.48%] w-full" src={imgLogoAlter2} />
        </div>
      </div>
    </div>
  );
}

function Design() {
  return (
    <div className="h-[1024px] overflow-clip relative shrink-0 w-[720px]" data-name="DESIGN">
      <div className="absolute bg-gradient-to-b border border-[#f7f9fa] border-solid from-[#bbe2ff] h-[1024px] left-0 to-[#95d2ff] top-0 w-[720px]" />
      <div className="absolute h-[1024px] left-[-169px] top-0 w-[1444px]" data-name="BG_TEXTURE-3 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBgTexture31} />
      </div>
      <Relative />
      <Frame5 />
      <div className="absolute left-[-268px] size-[992px] top-[129px]" data-name="CROCHET_PENGU 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCrochetPengu2} />
      </div>
      <div className="absolute flex items-center justify-center left-[-82px] size-[1100.86px] top-[253px]" style={{ "--transform-inner-width": "1066", "--transform-inner-height": "1066" } as React.CSSProperties}>
        <div className="flex-none rotate-[181.906deg] scale-y-[-100%]">
          <div className="relative size-[1066px]" data-name="MAINTENANCE_PENGU 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMaintenancePengu1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MainFrame() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0" data-name="MAIN FRAME">
      <SignUpDetails />
      <Design />
    </div>
  );
}

export default function LogIn() {
  return (
    <div className="bg-white relative size-full" data-name="LOG IN">
      <MainFrame />
    </div>
  );
}