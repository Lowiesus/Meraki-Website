import svgPaths from "./svg-7zt3xe9gpp";
import imgBgTexture31 from "figma:asset/0d00f6be6ac86f96b5d39e2e21a7b72f784d6eac.png";
import imgMaintenancePengu1 from "figma:asset/cc3b15e57154dad1ec767cbee62cab94501846a1.png";

function Group() {
  return (
    <div className="absolute inset-[8.35%_15.84%_8.27%_17.71%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 167">
        <g id="Group">
          <path d={svgPaths.pe204e00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[300px]">
      <div className="absolute bg-[#fff3c7] border border-[#f7f9fa] border-solid left-0 rounded-[60px] size-[300px] top-0" />
      <div className="absolute left-[50px] overflow-clip size-[200px] top-[50px]" data-name="Dark Theme / Profiles / Selected">
        <Group />
      </div>
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

function UsernameAndIcon() {
  return (
    <div className="bg-[#f6f7f9] relative rounded-[8px] shrink-0 w-full" data-name="Username and icon">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[16px] relative w-full">
          <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2963a3] text-[14px] text-nowrap whitespace-pre">Username</p>
          <IconlyLightProfile />
        </div>
      </div>
    </div>
  );
}

function Username() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[495px]" data-name="Username">
      <UsernameAndIcon />
    </div>
  );
}

function RoleAndIcon() {
  return (
    <div className="bg-[#f6f7f9] relative rounded-[8px] shrink-0 w-full" data-name="Role and icon">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[16px] relative w-full">
          <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2963a3] text-[14px] text-nowrap whitespace-pre">Role</p>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <div className="relative size-[16px]" data-name="Arrow">
                <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
                    <path d={svgPaths.p22a97880} fill="var(--fill-0, #2963A3)" id="Arrow" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Role() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Role">
      <RoleAndIcon />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <Username />
      <Role />
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#f6f7f9] h-[215px] relative rounded-[8px] shrink-0 w-full" data-name="TEXT">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[181px] h-[215px] items-start px-[16px] py-[23px] relative w-full">
          <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2963a3] text-[14px] text-nowrap whitespace-pre">User Bio</p>
        </div>
      </div>
    </div>
  );
}

function UserBio() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="User Bio">
      <Text />
    </div>
  );
}

function Details() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[25px] h-[300px] items-start relative shrink-0 w-[796px]" data-name="Details">
      <Frame />
      <UserBio />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex gap-[50px] items-start justify-center left-[calc(8.33%+23px)] top-[373px]" data-name="Main content">
      <Frame1 />
      <Details />
    </div>
  );
}

function LoginBtn() {
  return (
    <div className="bg-[#428dfe] box-border content-stretch flex gap-[3.473px] h-[19.449px] items-start justify-center px-[3.473px] py-[4.515px] relative rounded-[20.838px] shrink-0 w-[76.752px]" data-name="Login Btn">
      <div className="basis-0 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[8.5px] text-center text-white uppercase">
        <p className="leading-[normal]">ADD TAGS +</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#e5eef6] h-[93px] relative rounded-[5.557px] shrink-0 w-full" data-name="TEXT">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[125.721px] h-[93px] items-start px-[11.113px] py-[15.976px] relative w-full">
          <LoginBtn />
        </div>
      </div>
    </div>
  );
}

function AddTags() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5.557px] items-start left-[calc(33.33%+13px)] rounded-[20.838px] top-[677px] w-[796px]" data-name="Add tags">
      <Text1 />
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
    <div className="absolute bg-[#ffd968] box-border content-stretch flex gap-[21.25px] items-start left-[calc(25%+29px)] p-[17px] rounded-[191.25px] top-[615px]" data-name="Camera">
      <div aria-hidden="true" className="absolute border-[6.375px] border-solid border-white inset-[-3.188px] pointer-events-none rounded-[194.438px]" />
      <IconlyLightCamera />
    </div>
  );
}

function LoginBtn1() {
  return (
    <div className="bg-[#428dfe] box-border content-stretch flex gap-[10px] h-[56px] items-start justify-center px-[10px] py-[13px] relative rounded-[60px] shrink-0 w-[221px]" data-name="Login Btn">
      <div className="basis-0 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white uppercase">
        <p className="leading-[normal]">CANCEL</p>
      </div>
    </div>
  );
}

function BtnAndText() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-center relative shadow-[0px_5px_4px_0px_rgba(10,126,255,0.3)] shrink-0" data-name="Btn and text">
      <LoginBtn1 />
    </div>
  );
}

function LoginBtn2() {
  return (
    <div className="bg-[#428dfe] box-border content-stretch flex gap-[10px] h-[56px] items-start justify-center px-[10px] py-[13px] relative rounded-[60px] shrink-0 w-[221px]" data-name="Login Btn">
      <div className="basis-0 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white uppercase">
        <p className="leading-[normal]">confirm</p>
      </div>
    </div>
  );
}

function BtnAndText1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-center relative shadow-[0px_5px_4px_0px_rgba(10,126,255,0.3)] shrink-0" data-name="Btn and text">
      <LoginBtn2 />
    </div>
  );
}

function ConfirmAndCancel() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[calc(50%+111px)] top-[795px]" data-name="Confirm and Cancel">
      <BtnAndText />
      <BtnAndText1 />
    </div>
  );
}

function Group1() {
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
    <div className="absolute bg-[rgba(32,141,102,0)] h-[1228px] left-[497px] overflow-clip top-[-390px] w-[1227px]" data-name="Relative">
      <Group1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute capitalize content-stretch flex flex-col gap-[8.75px] items-start justify-center left-[79px] top-[93px] w-[1058.75px]" data-name="Text">
      <p className="font-['Work_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#22242b] text-[74.375px] w-[1048.25px]">Account Setup</p>
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[35px] relative shrink-0 text-[#6c757d] text-[24.5px] w-[1048.25px]">{`Personalize your account & we deliver you contents on your preferences!`}</p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute h-[300px] left-[-2px] overflow-clip top-[-3px] w-[1440px]" data-name="HEADER">
      <div className="absolute bg-gradient-to-b border border-[#f7f9fa] border-solid from-[#bbe2ff] h-[300px] left-0 to-[#95d2ff] top-0 w-[1440px]" />
      <div className="absolute h-[1024px] left-[-4px] top-[-212px] w-[1444px]" data-name="BG_TEXTURE-3 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBgTexture31} />
      </div>
      <Relative />
      <div className="absolute flex items-center justify-center left-[763px] size-[814.659px] top-[-191px]" style={{ "--transform-inner-width": "788.859375", "--transform-inner-height": "788.859375" } as React.CSSProperties}>
        <div className="flex-none rotate-[181.906deg] scale-y-[-100%]">
          <div className="relative size-[788.864px]" data-name="MAINTENANCE_PENGU 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMaintenancePengu1} />
          </div>
        </div>
      </div>
      <Text2 />
    </div>
  );
}

function MainFrame() {
  return (
    <div className="absolute contents left-[-2px] top-[-3px]" data-name="MAIN FRAME">
      <MainContent />
      <AddTags />
      <p className="absolute capitalize font-['Work_Sans:Bold',sans-serif] font-bold leading-[normal] left-[calc(8.33%+174.5px)] text-[#22242b] text-[22.5px] text-center top-[692px] translate-x-[-50%] w-[179px]">USERNAME</p>
      <Camera1 />
      <ConfirmAndCancel />
      <Header />
      <p className="absolute font-['Comfortaa:Bold',sans-serif] font-bold h-[15px] leading-[normal] left-[calc(25%+357.5px)] text-[10.71px] text-[rgba(91,112,131,0.5)] text-center top-[921px] translate-x-[-50%] w-[509px]">Terms of Service Privacy Policy Cookie Policy Ads info More © 2021 Innovae, Inc.</p>
    </div>
  );
}

export default function AccountSetup() {
  return (
    <div className="bg-white relative size-full" data-name="ACCOUNT SETUP">
      <MainFrame />
    </div>
  );
}