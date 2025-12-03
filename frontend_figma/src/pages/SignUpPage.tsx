import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import svgPaths from "../imports/svg-kkloopb3io";
import imgBgTexture31 from "figma:asset/0d00f6be6ac86f96b5d39e2e21a7b72f784d6eac.png";
import imgComputerPengu3 from "figma:asset/fb165cea933165a54e978aa9e846aa73c20a3eb9.png";
import imgArtistPengu3 from "figma:asset/46afa3d3491e731d189e6a93e3473503ea5f01c0.png";
import imgLogoAlter2 from "figma:asset/a16b685f7c41d886d366b4fedd8fd5dbf6fed524.png";
import imgLogoIcon2 from "figma:asset/2b7e679a7a86a6e24f1b9a9001522d9b89b0d82e.png";
import imgFacebookLogo20231 from "figma:asset/af6f06778b34a6b7844168f257fff50611bc7dd9.png";

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

function Hide() {
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

function IconlyLightHide() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Iconly/Light/Hide">
      <Hide />
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

export default function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // TODO: Backend integration here
    console.log('Sign up attempt:', formData);
    // Navigate to account setup after successful signup
    navigate('/account-setup');
  };

  const handleSocialSignup = (provider: string) => {
    console.log(`Sign up with ${provider}`);
    // Navigate to account setup for frontend demo
    navigate('/account-setup');
  };

  return (
    <div className="bg-white relative size-full min-h-screen" data-name="SIGN UP">
      <div className="absolute content-stretch flex items-center left-0 lg:left-[-81px] top-0 w-full" data-name="MAIN FRAME">
        {/* Design Section - Hidden on mobile */}
        <div className="h-screen overflow-clip relative shrink-0 w-[720px] hidden lg:block" data-name="DESIGN">
          <div className="absolute bg-gradient-to-b border border-[#f7f9fa] border-solid from-[#bbe2ff] h-full left-0 to-[#95d2ff] top-0 w-full" />
          <div className="absolute h-full left-[-169px] top-0 w-[1444px]" data-name="BG_TEXTURE-3 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBgTexture31} />
          </div>
          <div className="absolute bg-[rgba(32,141,102,0)] h-[1228px] left-[-231px] overflow-clip top-[-22px] w-[1227px]" data-name="Relative">
            <Group2 />
          </div>
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

        {/* Sign Up Details Section */}
        <div className="h-screen overflow-y-auto relative shrink-0 w-full lg:w-[801px]" data-name="SIGN UP DETAILS">
          <div className="absolute bg-white border border-[#f7f9fa] border-solid h-full left-0 top-0 w-full" />

          {/* Sign Up Button */}
          <div className="absolute box-border content-stretch flex flex-col gap-[16px] items-center left-1/2 -translate-x-1/2 lg:left-[98px] lg:translate-x-0 top-[702px]" data-name="Btn and text">
            <button
              onClick={handleSubmit}
              className="bg-[#428dfe] box-border content-stretch flex gap-[10px] h-[56px] items-start justify-center px-[10px] py-[13px] relative rounded-[60px] w-[221px] hover:bg-[#3a7de8] transition-colors shadow-[0px_5px_4px_0px_rgba(10,126,255,0.3)]"
              data-name="Login Btn"
            >
              <div className="basis-0 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white uppercase">
                <p className="leading-[normal]">signup</p>
              </div>
            </button>
          </div>

          {/* Details Form */}
          <form onSubmit={handleSubmit} className="absolute bg-white content-stretch flex flex-col gap-[32px] h-[394px] items-start left-1/2 -translate-x-1/2 lg:left-[98px] lg:translate-x-0 top-[278px] w-[605px] max-w-[90%]" data-name="Details">
            {/* First Name */}
            <div className="content-stretch flex flex-col gap-[8px] items-start w-full" data-name="First Name">
              <div className="bg-[#f6f7f9] relative rounded-[8px] w-full" data-name="Full Name and icon">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex items-center justify-between p-[16px] w-full">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] bg-transparent border-none outline-none flex-1 text-[#2963a3] text-[14px]"
                      required
                    />
                    <IconlyLightProfile />
                  </div>
                </div>
              </div>
            </div>

            {/* Last Name */}
            <div className="content-stretch flex flex-col gap-[8px] items-start w-full" data-name="Last Name">
              <div className="bg-[#f6f7f9] relative rounded-[8px] w-full" data-name="Full Name and icon">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex items-center justify-between p-[16px] w-full">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] bg-transparent border-none outline-none flex-1 text-[#2963a3] text-[14px]"
                      required
                    />
                    <IconlyLightProfile />
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="content-stretch flex flex-col gap-[8px] items-start w-full" data-name="Email">
              <div className="bg-[#f6f7f9] relative rounded-[8px] w-full" data-name="Full Name and icon">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex items-center justify-between p-[16px] w-full">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] bg-transparent border-none outline-none flex-1 text-[#2963a3] text-[14px]"
                      required
                    />
                    <IconlyLightMessage />
                  </div>
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="content-stretch flex flex-col gap-[8px] items-start w-full" data-name="Password">
              <div className="bg-[#f6f7f9] relative rounded-[8px] w-full" data-name="Password and icon">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex items-center justify-between p-[16px] w-full">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                      className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] bg-transparent border-none outline-none flex-1 text-[#2963a3] text-[14px]"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <IconlyLightHide />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="content-stretch flex flex-col gap-[8px] items-start w-full" data-name="Confirm Password">
              <div className="bg-[#f6f7f9] relative rounded-[8px] w-full" data-name="Confirm Password and icon">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex items-center justify-between p-[16px] w-full">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm Password"
                      className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] bg-transparent border-none outline-none flex-1 text-[#2963a3] text-[14px]"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      <IconlyLightHide />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>

          {/* Header Text */}
          <div className="absolute capitalize content-stretch flex flex-col gap-[5px] items-start justify-center left-1/2 -translate-x-1/2 lg:left-[98px] lg:translate-x-0 top-[152px] w-[605px] max-w-[90%]" data-name="Text">
            <p className="font-['Work_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#22242b] text-[42.5px] w-full">welcome to Meraki!</p>
            <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[20px] text-[#6c757d] text-[14px] w-full">Register your account and join the Meraki Community!</p>
          </div>

          {/* Social Accounts */}
          <div className="absolute content-stretch flex gap-[10px] items-start justify-center left-1/2 -translate-x-1/2 lg:left-[98px] lg:translate-x-0 top-[829px]" data-name="Social Accounts">
            <div className="content-stretch flex flex-col gap-[8px] h-[50px] items-start justify-center shrink-0 w-[173px]" data-name="Create an account with">
              <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] text-[#2963a3] text-[14px] text-center text-nowrap whitespace-pre">Create an account with</p>
            </div>
            <div className="content-stretch flex gap-[20px] items-start" data-name="Alternative Logins">
              <button
                type="button"
                onClick={() => handleSocialSignup('google')}
                className="bg-[#f6f7f9] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[15px] relative rounded-[82px] hover:bg-[#e5eef6] transition-colors"
                data-name="google"
              >
                <Group3 />
              </button>
              <button
                type="button"
                onClick={() => handleSocialSignup('facebook')}
                className="bg-[#f6f7f9] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[15px] relative rounded-[82px] hover:bg-[#e5eef6] transition-colors"
                data-name="facebook"
              >
                <div className="h-[20px] relative shrink-0 w-[19px]" data-name="Facebook_Logo_2023 1">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFacebookLogo20231} />
                </div>
              </button>
              <button
                type="button"
                onClick={() => handleSocialSignup('phone')}
                className="bg-[#f6f7f9] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[15px] relative rounded-[162px] hover:bg-[#e5eef6] transition-colors"
                data-name="Phone"
              >
                <IconlyLightCalling />
              </button>
            </div>
          </div>

          {/* Already Have Account */}
          <div className="absolute content-stretch flex gap-[15px] items-center justify-center right-[98px] top-[67px]" data-name="Don't have an account?">
            <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] text-[#2963a3] text-[14px] text-nowrap whitespace-pre">Already have an account?</p>
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="box-border content-stretch flex flex-col gap-[7.5px] h-[27px] items-center justify-center px-[19.5px] py-[4.5px] rounded-[15px] border-[#428dfe] border-[0.75px] border-solid hover:bg-[#428dfe] hover:text-white transition-colors group"
            >
              <p className="font-['Raleway:Regular',sans-serif] font-normal leading-[normal] text-[#428dfe] text-[15px] text-nowrap whitespace-pre group-hover:text-white">LOGIN</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
