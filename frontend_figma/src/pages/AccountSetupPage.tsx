import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import svgPaths from "../imports/svg-h772wgtwv6";
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

export default function AccountSetupPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    username: '',
    role: '',
    bio: '',
    tags: ''
  });
  const [tagsList, setTagsList] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  const [showTagDropdown, setShowTagDropdown] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const roleSelectRef = useRef<HTMLSelectElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddTag = () => {
    if (currentTag.trim() && !tagsList.includes(currentTag.trim())) {
      setTagsList([...tagsList, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const toggleTagDropdown = () => {
    setShowTagDropdown(!showTagDropdown);
  };

  const toggleRoleDropdown = () => {
    setRoleDropdownOpen(!roleDropdownOpen);
  };

  const handleRoleSelect = (role: string) => {
    setFormData(prev => ({
      ...prev,
      role: role
    }));
    setRoleDropdownOpen(false);
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTagsList(tagsList.filter(tag => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Backend integration here
    console.log('Account setup data:', { ...formData, tags: tagsList });
    // For now, just show alert
    alert('Account setup completed! (Backend integration pending)');
  };

  const handleCancel = () => {
    navigate('/login');
  };

  return (
    <div className="bg-white relative size-full min-h-screen" data-name="ACCOUNT SETUP">
      <div className="absolute contents left-0 top-0 w-full" data-name="MAIN FRAME">
        {/* Header */}
        <div className="absolute h-[300px] left-0 lg:left-[-2px] overflow-clip top-0 lg:top-[-3px] w-full lg:w-[1440px]" data-name="HEADER">
          <div className="absolute bg-gradient-to-b border border-[#f7f9fa] border-solid from-[#bbe2ff] h-[300px] left-0 to-[#95d2ff] top-0 w-full lg:w-[1440px]" />
          <div className="absolute h-[1024px] left-[-4px] top-[-212px] w-full lg:w-[1444px]" data-name="BG_TEXTURE-3 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBgTexture31} />
          </div>
          
          {/* Relative Circle Background */}
          <div className="absolute bg-[rgba(32,141,102,0)] h-[1228px] left-[497px] overflow-clip top-[-390px] w-[1227px] hidden lg:block" data-name="Relative">
            <div className="absolute inset-[15%_14.96%_14.96%_15%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 860 861">
                <g id="Group 2">
                  <path d={svgPaths.p25bcb900} fill="var(--fill-0, #FFF3C7)" id="Vector" />
                  <path d={svgPaths.p3c2600} fill="var(--fill-0, #C5E7FF)" id="Vector_2" />
                  <path d={svgPaths.p1d88ba00} fill="var(--fill-0, #95D2FF)" id="Vector_3" />
                </g>
              </svg>
            </div>
          </div>

          {/* Penguin Image */}
          <div className="absolute flex items-center justify-center left-[763px] size-[814.659px] top-[-191px] hidden lg:flex" style={{ "--transform-inner-width": "788.859375", "--transform-inner-height": "788.859375" } as React.CSSProperties}>
            <div className="flex-none rotate-[181.906deg] scale-y-[-100%]">
              <div className="relative size-[788.864px]" data-name="MAINTENANCE_PENGU 1">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMaintenancePengu1} />
              </div>
            </div>
          </div>

          {/* Header Text */}
          <div className="absolute capitalize content-stretch flex flex-col gap-[8.75px] items-start justify-center left-1/2 -translate-x-1/2 lg:left-[79px] lg:translate-x-0 top-[93px] w-[1058.75px] max-w-[90%]" data-name="Text">
            <p className="font-['Work_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#22242b] text-[74.375px] w-full">Account Setup</p>
            <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[35px] text-[#6c757d] text-[24.5px] w-full">{`Personalize your account & we deliver you contents on your preferences!`}</p>
          </div>
        </div>

        {/* Main Content */}
        <form onSubmit={handleConfirm} className="absolute content-stretch flex gap-[50px] items-start justify-center left-1/2 -translate-x-1/2 lg:left-[calc(8.33%+23px)] lg:translate-x-0 top-[373px] flex-col lg:flex-row" data-name="Main content">
          {/* Profile Picture */}
          <div className="relative mx-auto lg:mx-0">
            <div className="overflow-clip relative shrink-0 size-[300px]">
              <div className="absolute bg-[#fff3c7] border border-[#f7f9fa] border-solid left-0 rounded-[60px] size-[300px] top-0" />
              <div className="absolute left-[50px] overflow-clip size-[200px] top-[50px]" data-name="Dark Theme / Profiles / Selected">
                {profilePreview ? (
                  <img src={profilePreview} alt="Profile" className="w-full h-full object-cover rounded-full" />
                ) : (
                  <Group />
                )}
              </div>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute bg-[#ffd968] box-border content-stretch flex gap-[21.25px] items-start right-[-20px] p-[17px] rounded-[191.25px] bottom-[-15px] hover:bg-[#ffc850] transition-colors shadow-[0px_5px_4px_0px_rgba(10,126,255,0.3)]"
              data-name="Camera"
            >
              <div aria-hidden="true" className="absolute border-[6.375px] border-solid border-white inset-[-3.188px] pointer-events-none rounded-[194.438px]" />
              <IconlyLightCamera />
            </button>
            <p className="absolute capitalize font-['Work_Sans:Bold',sans-serif] font-bold leading-[normal] left-1/2 text-[#22242b] text-[22.5px] text-center top-[319px] -translate-x-1/2 w-[179px]">
              {formData.username || 'USERNAME'}
            </p>
          </div>

          {/* Details */}
          <div className="bg-white content-stretch flex flex-col gap-[25px] h-auto lg:h-[300px] items-start w-[796px] max-w-[90%]" data-name="Details">
            {/* Username and Role */}
            <div className="content-stretch flex gap-[32px] items-start w-full flex-col lg:flex-row">
              {/* Username */}
              <div className="content-stretch flex flex-col gap-[8px] items-start w-full lg:w-[495px]" data-name="Username">
                <div className="bg-[#f6f7f9] relative rounded-[8px] w-full" data-name="Username and icon">
                  <div className="flex flex-row items-center size-full">
                    <div className="box-border content-stretch flex items-center justify-between p-[16px] w-full">
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="Username"
                        className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] bg-transparent border-none outline-none flex-1 text-[#2963a3] text-[14px]"
                        required
                      />
                      <IconlyLightProfile />
                    </div>
                  </div>
                </div>
              </div>

              {/* Role */}
              <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px w-full relative" data-name="Role">
                <div className="bg-[#f6f7f9] relative rounded-[8px] w-full cursor-pointer" data-name="Role and icon" onClick={toggleRoleDropdown}>
                  <div className="flex flex-row items-center size-full">
                    <div className="box-border content-stretch flex items-center justify-between p-[16px] w-full">
                      <span className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] text-[#2963a3] text-[14px]">
                        {formData.role ? (formData.role === 'customer' ? 'Customer' : 'Seller') : 'Role'}
                      </span>
                      <div className="flex items-center justify-center shrink-0">
                        <div className={`flex-none transition-transform duration-300 ease-in-out ${roleDropdownOpen ? 'rotate-[0deg]' : 'rotate-[180deg]'}`}>
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
                {/* Custom Dropdown */}
                {roleDropdownOpen && (
                  <div className="absolute top-[calc(100%+4px)] left-0 w-full bg-white border border-[#428dfe] rounded-[8px] shadow-lg z-10 overflow-hidden">
                    <div
                      className="px-[16px] py-[12px] hover:bg-[#e5eef6] cursor-pointer transition-colors font-['Work_Sans:Medium',sans-serif] font-medium text-[#2963a3] text-[14px]"
                      onClick={() => handleRoleSelect('customer')}
                    >
                      Customer
                    </div>
                    <div
                      className="px-[16px] py-[12px] hover:bg-[#e5eef6] cursor-pointer transition-colors font-['Work_Sans:Medium',sans-serif] font-medium text-[#2963a3] text-[14px]"
                      onClick={() => handleRoleSelect('seller')}
                    >
                      Seller
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* User Bio */}
            <div className="content-stretch flex flex-col gap-[8px] items-start w-full" data-name="User Bio">
              <div className="bg-[#f6f7f9] h-[215px] relative rounded-[8px] w-full" data-name="TEXT">
                <div className="size-full">
                  <div className="box-border content-stretch flex flex-col gap-[181px] h-[215px] items-start px-[16px] py-[23px] w-full">
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      placeholder="User Bio"
                      className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] bg-transparent border-none outline-none w-full h-full resize-none text-[#2963a3] text-[14px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Add Tags */}
        <div className="absolute content-stretch flex flex-col gap-[5.557px] items-start left-1/2 -translate-x-1/2 lg:left-[calc(8.33%+373px)] lg:translate-x-0 rounded-[20.838px] top-[677px] w-[796px] max-w-[90%]" data-name="Add tags">
          <div className="bg-[#e5eef6] min-h-[93px] relative rounded-[5.557px] w-full" data-name="TEXT">
            <div className="size-full">
              <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[11.113px] py-[15.976px] w-full">
                <div className="flex items-center gap-[10px] w-full">
                  <button
                    type="button"
                    onClick={toggleTagDropdown}
                    className="bg-[#428dfe] box-border content-stretch flex gap-[3.473px] h-[19.449px] items-start justify-center px-[3.473px] py-[4.515px] rounded-[20.838px] shrink-0 w-[76.752px] hover:bg-[#3a7de8] transition-colors cursor-pointer"
                    data-name="Login Btn"
                  >
                    <div className="basis-0 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[8.5px] text-center text-white uppercase">
                      <p className="leading-[normal]">ADD TAGS +</p>
                    </div>
                  </button>
                  <div className="flex-1 flex flex-wrap gap-[6px] items-center">
                    {tagsList.length > 0 ? (
                      tagsList.map((tag, index) => (
                        <div
                          key={index}
                          className="bg-[#428dfe] box-border content-stretch flex gap-[6px] items-center px-[8px] py-[4px] rounded-[15px] text-white"
                        >
                          <span className="font-['Work_Sans:Medium',sans-serif] font-medium text-[10px]">{tag}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none p-0"
                          >
                            <span className="text-white text-[14px] leading-none">×</span>
                          </button>
                        </div>
                      ))
                    ) : (
                      <span className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] text-[#2963a3] text-[12px]">
                        Click "ADD TAGS +" to add tags
                      </span>
                    )}
                  </div>
                </div>
                {/* Tag Input Dropdown */}
                {showTagDropdown && (
                  <div className="absolute left-[11.113px] top-[50px] bg-white border border-[#428dfe] rounded-[8px] shadow-lg p-[12px] w-[calc(100%-22px)] z-10">
                    <div className="flex gap-[8px] items-center">
                      <input
                        type="text"
                        value={currentTag}
                        onChange={(e) => setCurrentTag(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type tag and press Enter"
                        className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[normal] bg-[#f6f7f9] border-none outline-none flex-1 text-[#2963a3] text-[12px] px-[12px] py-[8px] rounded-[5px]"
                        autoFocus
                      />
                      <button
                        type="button"
                        onClick={handleAddTag}
                        className="bg-[#428dfe] hover:bg-[#3a7de8] transition-colors cursor-pointer border-none rounded-[5px] px-[12px] py-[8px] font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[10px] text-white uppercase"
                      >
                        Add
                      </button>
                      <button
                        type="button"
                        onClick={toggleTagDropdown}
                        className="bg-[#6c757d] hover:bg-[#5a6268] transition-colors cursor-pointer border-none rounded-[5px] px-[12px] py-[8px] font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[10px] text-white uppercase"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Confirm and Cancel Buttons */}
        <div className="absolute content-stretch flex gap-[16px] items-center left-1/2 -translate-x-1/2 lg:left-[calc(8.33%+373px+796px-458px)] lg:translate-x-0 top-[795px]" data-name="Confirm and Cancel">
          <div className="box-border content-stretch flex flex-col gap-[16px] items-center" data-name="Btn and text">
            <button
              type="button"
              onClick={handleCancel}
              className="bg-[#428dfe] box-border content-stretch flex gap-[10px] h-[56px] items-start justify-center px-[10px] py-[13px] rounded-[60px] w-[221px] hover:bg-[#3a7de8] transition-colors shadow-[0px_5px_4px_0px_rgba(10,126,255,0.3)]"
              data-name="Login Btn"
            >
              <div className="basis-0 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold grow h-full justify-center leading-[0] min-h-px min-w-px text-[16px] text-center text-white uppercase">
                <p className="leading-[normal]">CANCEL</p>
              </div>
            </button>
          </div>
          <div className="box-border content-stretch flex flex-col gap-[16px] items-center" data-name="Btn and text">
            <button
              type="submit"
              className="bg-[#428dfe] box-border content-stretch flex gap-[10px] h-[56px] items-start justify-center px-[10px] py-[13px] rounded-[60px] w-[221px] hover:bg-[#3a7de8] transition-colors shadow-[0px_5px_4px_0px_rgba(10,126,255,0.3)]"
              data-name="Login Btn"
            >
              <div className="basis-0 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold grow h-full justify-center leading-[0] min-h-px min-w-px text-[16px] text-center text-white uppercase">
                <p className="leading-[normal]">confirm</p>
              </div>
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="absolute font-['Comfortaa:Bold',sans-serif] font-bold h-[15px] leading-[normal] left-1/2 -translate-x-1/2 lg:left-[calc(25%+357.5px)] lg:translate-x-0 text-[10.71px] text-[rgba(91,112,131,0.5)] text-center top-[921px] w-[509px] max-w-[90%]">
          Terms of Service Privacy Policy Cookie Policy Ads info More © 2021 Innovae, Inc.
        </p>
      </div>
    </div>
  );
}
