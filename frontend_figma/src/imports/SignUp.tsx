import svgPaths from "./svg-kkloopb3io";
import imgBgTexture31 from "figma:asset/0d00f6be6ac86f96b5d39e2e21a7b72f784d6eac.png";
import imgComputerPengu3 from "figma:asset/fb165cea933165a54e978aa9e846aa73c20a3eb9.png";
import imgArtistPengu3 from "figma:asset/46afa3d3491e731d189e6a93e3473503ea5f01c0.png";
import imgLogoAlter2 from "figma:asset/a16b685f7c41d886d366b4fedd8fd5dbf6fed524.png";
import imgLogoIcon2 from "figma:asset/2b7e679a7a86a6e24f1b9a9001522d9b89b0d82e.png";
import imgFacebookLogo20231 from "figma:asset/af6f06778b34a6b7844168f257fff50611bc7dd9.png";

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
    <div className="absolute bg-[rgba(32,141,102,0)] h-[1228px] left-[-231px] overflow-clip top-[-22px] w-[1227px]" data-name="Relative">
      <Group2 />
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
      <div className="absolute flex items-center justify-center left-[-253px] size-[1079px] top-[51px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[1079px]" data-name="COMPUTER_PENGU 3">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgComputerPengu3} />
          </div>
        </div>
      </div>
      <div className="absolute left-[43px] size-[1055px] top-[314px]" data-name="ARTIST_PENGU 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgArtistPengu3} />
      </div>
      <div className="absolute h-[52px] left-[188px] top-[30px] w-[172px]" data-name="LOGO_ALTER 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[256.26%] left-0 max-w-none top-[-60.48%] w-full" src={imgLogoAlter2} />
        </div>
      </div>
      <div className="absolute left-[125px] size-[69px] top-[20px]" data-name="LOGO_ICON 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoIcon2} />
      </div>
    </div>
  );
}

function LoginBtn() {
  return (
    <div className="bg-[#428dfe] box-border content-stretch flex gap-[10px] h-[56px] items-start justify-center px-[10px] py-[13px] relative rounded-[60px] shrink-0 w-[221px]" data-name="Login Btn">
      <div className="basis-0 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white uppercase">
        <p className="leading-[normal]">signup</p>
      </div>
    </div>
  );
}

function BtnAndText() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] items-center left-[98px] shadow-[0px_5px_4px_0px_rgba(10,126,255,0.3)] top-[702px]" data-name="Btn and text">
      <LoginBtn />
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute inset-[11.73%_20.19%_11.58%_20.06%]" data-name="Profile">
      <div className="absolute inset-[-5.82%_-7.85%_-6.11%_-7.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
          <g id="Profile">
            <path clipRule="evenodd" d={svgPaths.p19c82c00} fillRule="evenodd" id="Stroke 1" stroke="var(--stroke-0, #2963A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path clipRule="evenodd" d={svgPaths.p27e08700} fillRule="evenodd" id="Stroke 3" stroke="var(--stroke-0, #2963A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42857" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightProfile() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Iconly/Light/Profile">
      <Profile />
    </div>
  );
}

function FullNameAndIcon() {
  return (
    <div className="bg-[#f6f7f9] relative rounded-[8px] shrink-0 w-full" data-name="Full Name and icon">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[16px] relative w-full">
          <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2963a3] text-[14px] text-nowrap whitespace-pre">First Name</p>
          <IconlyLightProfile />
        </div>
      </div>
    </div>
  );
}

function FirstName() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="First Name">
      <FullNameAndIcon />
    </div>
  );
}

function Profile1() {
  return (
    <div className="absolute inset-[11.73%_20.19%_11.58%_20.06%]" data-name="Profile">
      <div className="absolute inset-[-5.82%_-7.85%_-6.11%_-7.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
          <g id="Profile">
            <path clipRule="evenodd" d={svgPaths.p19c82c00} fillRule="evenodd" id="Stroke 1" stroke="var(--stroke-0, #2963A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path clipRule="evenodd" d={svgPaths.p27e08700} fillRule="evenodd" id="Stroke 3" stroke="var(--stroke-0, #2963A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42857" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightProfile1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Iconly/Light/Profile">
      <Profile1 />
    </div>
  );
}

function FullNameAndIcon1() {
  return (
    <div className="bg-[#f6f7f9] relative rounded-[8px] shrink-0 w-full" data-name="Full Name and icon">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[16px] relative w-full">
          <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2963a3] text-[14px] text-nowrap whitespace-pre">Last Name</p>
          <IconlyLightProfile1 />
        </div>
      </div>
    </div>
  );
}

function LastName() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Last Name">
      <FullNameAndIcon1 />
    </div>
  );
}

function Message() {
  return (
    <div className="absolute inset-[12.5%_8.33%]" data-name="Message">
      <div className="absolute inset-[-6.25%_-5.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
          <g id="Message">
            <path d={svgPaths.p1f7b1740} id="Stroke 1" stroke="var(--stroke-0, #2963A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path clipRule="evenodd" d={svgPaths.p7f80a80} fillRule="evenodd" id="Stroke 3" stroke="var(--stroke-0, #2963A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightMessage() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Iconly/Light/Message">
      <Message />
    </div>
  );
}

function FullNameAndIcon2() {
  return (
    <div className="bg-[#f6f7f9] relative rounded-[8px] shrink-0 w-full" data-name="Full Name and icon">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[16px] relative w-full">
          <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2963a3] text-[14px] text-nowrap whitespace-pre">Email Address</p>
          <IconlyLightMessage />
        </div>
      </div>
    </div>
  );
}

function Email() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Email">
      <FullNameAndIcon2 />
    </div>
  );
}

function Hide() {
  return (
    <div className="absolute inset-[17.71%_11.46%_16.57%_11.46%]" data-name="Hide">
      <div className="absolute inset-[-7.13%_-6.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13">
          <g id="Hide">
            <path d={svgPaths.p3336f00} id="Stroke 1" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1d4e1370} id="Stroke 3" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1c39a580} id="Stroke 5" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1915be52} id="Stroke 7" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M12.1749 0.75L1.65893 11.266" id="Stroke 9" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightHide() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Iconly/Light/Hide">
      <Hide />
    </div>
  );
}

function PasswordAndIcon() {
  return (
    <div className="bg-[#f6f7f9] relative rounded-[8px] shrink-0 w-full" data-name="Password and icon">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[16px] relative w-full">
          <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2963a3] text-[14px] text-nowrap whitespace-pre">Password</p>
          <IconlyLightHide />
        </div>
      </div>
    </div>
  );
}

function Password() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Password">
      <PasswordAndIcon />
    </div>
  );
}

function Hide1() {
  return (
    <div className="absolute inset-[17.71%_11.46%_16.57%_11.46%]" data-name="Hide">
      <div className="absolute inset-[-7.13%_-6.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13">
          <g id="Hide">
            <path d={svgPaths.p3336f00} id="Stroke 1" stroke="var(--stroke-0, #2963A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1d4e1370} id="Stroke 3" stroke="var(--stroke-0, #2963A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1c39a580} id="Stroke 5" stroke="var(--stroke-0, #2963A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1915be52} id="Stroke 7" stroke="var(--stroke-0, #2963A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M12.1749 0.75L1.65893 11.266" id="Stroke 9" stroke="var(--stroke-0, #2963A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightHide1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Iconly/Light/Hide">
      <Hide1 />
    </div>
  );
}

function ConfirmPasswordAndIcon() {
  return (
    <div className="bg-[#f6f7f9] relative rounded-[8px] shrink-0 w-full" data-name="Confirm Password and icon">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[16px] relative w-full">
          <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2963a3] text-[14px] text-nowrap whitespace-pre">Confirm Password</p>
          <IconlyLightHide1 />
        </div>
      </div>
    </div>
  );
}

function ConfirmPassword() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Confirm Password">
      <ConfirmPasswordAndIcon />
    </div>
  );
}

function Details() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[32px] h-[394px] items-start left-[98px] top-[278px] w-[605px]" data-name="Details">
      <FirstName />
      <LastName />
      <Email />
      <Password />
      <ConfirmPassword />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute capitalize content-stretch flex flex-col gap-[5px] items-start justify-center left-[98px] top-[152px] w-[605px]" data-name="Text">
      <p className="font-['Work_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#22242b] text-[42.5px] w-[599px]">welcome to Meraki!</p>
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#6c757d] text-[14px] w-[599px]">Register your account and join the Meraki Community!</p>
    </div>
  );
}

function CreateAnAccountWith() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[50px] items-start justify-center relative shrink-0 w-[173px]" data-name="Create an account with">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2963a3] text-[14px] text-center text-nowrap whitespace-pre">Create an account with</p>
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] h-[20px] ml-0 mt-0 relative w-[19.573px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p11708100} fill="var(--fill-0, #FBBC05)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p27179b80} fill="var(--fill-0, #EB4335)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p19b16c80} fill="var(--fill-0, #34A853)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p103fcf80} fill="var(--fill-0, #4285F4)" fillRule="evenodd" id="Vector_4" />
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
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Alternative Logins">
      <Google />
      <Facebook />
      <Phone />
    </div>
  );
}

function SocialAccounts() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start justify-center left-[98px] top-[829px]" data-name="Social Accounts">
      <CreateAnAccountWith />
      <AlternativeLogins />
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7.5px] h-[27px] items-center justify-center px-[19.5px] py-[4.5px] relative rounded-[15px] shrink-0 w-[92.25px]">
      <div aria-hidden="true" className="absolute border-[#428dfe] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <p className="font-['Raleway:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#428dfe] text-[15px] text-nowrap whitespace-pre">LOGIN</p>
    </div>
  );
}

function DontHaveAnAccount() {
  return (
    <div className="absolute content-stretch flex gap-[15px] items-center justify-center left-[459px] top-[67px]" data-name="Don’t have an account?">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2963a3] text-[14px] text-nowrap whitespace-pre">Already have an account?</p>
      <Frame />
    </div>
  );
}

function SignUpDetails() {
  return (
    <div className="h-[1024px] overflow-clip relative shrink-0 w-[801px]" data-name="SIGN UP DETAILS">
      <div className="absolute bg-white border border-[#f7f9fa] border-solid h-[1024px] left-0 top-0 w-[801px]" />
      <p className="absolute font-['Comfortaa:Bold',sans-serif] font-bold h-[15px] leading-[normal] left-[420.5px] text-[10.71px] text-[rgba(91,112,131,0.5)] text-center top-[928px] translate-x-[-50%] w-[509px]">Terms of Service Privacy Policy Cookie Policy Ads info More © 2021 Innovae, Inc.</p>
      <BtnAndText />
      <Details />
      <Text />
      <SocialAccounts />
      <DontHaveAnAccount />
    </div>
  );
}

function MainFrame() {
  return (
    <div className="absolute content-stretch flex items-center left-[-81px] top-0" data-name="MAIN FRAME">
      <Design />
      <SignUpDetails />
    </div>
  );
}

export default function SignUp() {
  return (
    <div className="bg-white relative size-full" data-name="SIGN UP">
      <MainFrame />
    </div>
  );
}