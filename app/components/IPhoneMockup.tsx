export default function IPhoneMockup() {
  return (
    <div className="relative" style={{ width: '343.509px', height: '708.014px' }}>
      {/* Side buttons */}
      <div className="absolute h-[561.876px] left-[-2.52px] top-[125.14px] w-[348.548px]">
        <div className="absolute flex h-[83.987px] items-center justify-center left-[344.35px] top-[81.47px] w-[4.199px]">
          <div className="flex-none rotate-180">
            <div className="h-[83.987px] overflow-clip relative rounded-bl-[1.68px] rounded-tl-[1.68px] w-[4.199px]">
              <div className="absolute bg-black h-[83.148px] left-0 rounded-bl-[1.68px] rounded-tl-[1.68px] top-[0.84px] w-[4.199px]" />
              <div className="absolute bg-gradient-to-b from-black h-[83.148px] left-0 opacity-76 rounded-bl-[1.68px] rounded-tl-[1.68px] to-[4.545%] to-[rgba(0,0,0,0)] top-[0.84px] w-[4.199px]" />
              <div className="absolute h-[83.148px] left-0 rounded-bl-[1.68px] rounded-tl-[1.68px] top-[0.84px] w-[4.199px]" style={{ backgroundImage: 'linear-gradient(-90deg, rgb(0,0,0) 0%, rgba(174,174,174,0) 70%)' }} />
              <div className="absolute bg-gradient-to-b from-[95.455%] from-[rgba(0,0,0,0)] h-[83.148px] left-0 opacity-48 rounded-bl-[1.68px] rounded-tl-[1.68px] to-black top-[0.84px] w-[4.199px]" />
              <div className="absolute bg-[#61605d] blur-[0.84px] h-[79.788px] left-0 rounded-bl-[0.84px] rounded-br-[0.84px] top-[4.2px] w-[0.84px]" />
            </div>
          </div>
        </div>
        {[
          { top: '0', height: '26.036px' },
          { top: '51.23px', height: '47.033px' },
          { top: '111.7px', height: '47.033px' },
        ].map(({ top, height }, i) => (
          <div key={i} className="absolute left-0 overflow-clip rounded-bl-[1.68px] rounded-tl-[1.68px] w-[4.199px]" style={{ top, height }}>
            <div className="absolute bg-black left-0 top-0 w-[4.199px] rounded-bl-[1.68px] rounded-tl-[1.68px]" style={{ height }} />
            <div className="absolute h-full left-0 top-0 w-[4.199px] rounded-bl-[1.68px] rounded-tl-[1.68px]" style={{ backgroundImage: 'linear-gradient(-90deg, rgb(0,0,0) 0%, rgba(174,174,174,0) 70%)' }} />
          </div>
        ))}
      </div>

      {/* Titanium frame */}
      <div className="absolute h-[708.014px] left-0 overflow-clip rounded-[52.072px] top-0 w-[343.509px]">
        <div className="absolute bg-black h-[708.014px] left-0 rounded-[52.072px] top-0 w-[343.509px]" />
        <div className="absolute blur-[1.68px] border-[#a0a0a0] border-[2.52px] border-solid h-[708.014px] left-0 rounded-[52.072px] top-0 w-[343.509px]" />
        <div className="absolute blur-[0.84px] border-[#181818] border-[0.84px] border-solid h-[708.014px] left-0 rounded-[52.072px] top-0 w-[343.509px]" />
        <div className="absolute blur-[0.84px] border-[0.84px] border-solid border-white h-[698.775px] left-[4.2px] rounded-[52.072px] top-[4.2px] w-[335.11px]" />
        <div className="-translate-y-1/2 absolute border-[0.336px] border-solid border-white h-[697.096px] left-[5.04px] rounded-[52.072px] top-1/2 w-[333.43px]" />
        {/* Signal cutouts */}
        <div className="absolute bg-gradient-to-b from-[#525252] h-[3.359px] left-[267.08px] to-[#666] top-0 w-[5.039px]" />
        <div className="absolute bg-gradient-to-r from-[#525252] h-[5.039px] left-0 to-[#666] top-[634.95px] w-[3.359px]" />
        <div className="absolute bg-gradient-to-t from-[#525252] h-[3.359px] left-[52.91px] to-[#666] top-[704.65px] w-[4.199px]" />
        <div className="absolute bg-gradient-to-l from-[#525252] h-[5.039px] left-[340.15px] to-[#666] top-[634.95px] w-[3.359px]" />
      </div>

      {/* Screen frame */}
      <div className="absolute h-[701.295px] left-[3.36px] overflow-clip rounded-[48.713px] top-[3.36px] w-[336.79px]">
        <div className="absolute bg-[#000100] h-[701.295px] left-0 rounded-[48.713px] top-0 w-[336.79px]" />
        <div className="absolute blur-[2.94px] border-[#879194] border-[3.359px] border-solid h-[701.295px] left-0 rounded-[48.713px] top-0 w-[336.79px]" />
      </div>

      {/* Screen content */}
      <div className="absolute h-[687.857px] left-[10.08px] overflow-clip rounded-[43.673px] top-[10.08px] w-[323.352px]">
        <div className="absolute bg-[#f9f9f9] h-[734.05px] left-[-7.56px] overflow-clip rounded-[37.794px] shadow-[0px_0px_3.359px_0px_rgba(0,0,0,0.25)] top-[-5.04px] w-[337.629px]">
          {/* App logo */}
          <div className="absolute h-[79.875px] left-[116.74px] top-[267.08px] w-[104.984px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/app-icon-screen.svg" />
          </div>
          {/* Text */}
          <p className="-translate-x-1/2 absolute font-semibold left-[168.43px] text-[26.876px] top-[512.32px] whitespace-nowrap text-black">
            Welcome to Mismo
          </p>
          <p className="-translate-x-1/2 absolute font-light left-[168.81px] text-[16.797px] top-[545.08px] w-[290.597px] text-black/60 text-center">
            Every thought, understood.
          </p>
          {/* Get Started button */}
          <div className="absolute bg-black h-[48.713px] left-[26.88px] rounded-[37.794px] top-[594.63px] w-[283.878px] flex items-center justify-center">
            <span className="text-white text-[16.797px]">Get Started</span>
          </div>
        </div>
      </div>

      {/* Dynamic Island */}
      <div className="absolute h-[26.036px] left-[125.14px] top-[20.16px] w-[93.226px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/dynamic-island.svg" />
      </div>

      {/* Status bar */}
      <div className="absolute h-[18.477px] left-[57.11px] top-[24.36px] w-[245.58px]">
        <div className="-translate-x-1/2 absolute h-[10.918px] left-[calc(50%+91.13px)] top-[3.36px] w-[63.328px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/status-bar-icons.svg" />
        </div>
        <p className="-translate-x-1/2 absolute font-semibold leading-[18.477px] left-[14.7px] text-[14.28px] text-black text-center top-0 tracking-[-0.8px] whitespace-nowrap">
          9:41
        </p>
      </div>
    </div>
  )
}
