function SideBar() {
  return (
    <div className="h-screen flex flex-col items-center w-[100px] gap-8 py-4">
      <div className="w-[50px] flex items-center justify-center">
        <img className="w-[21.25rem] h-auto" src="i/small.png" alt="logo" />
      </div>
      <div className="flex-1">
        <div className="flex flex-col items-center gap-4">
          <span>
            <svg className="*:stroke-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="#808080" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="#808080" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z" stroke="#808080" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" stroke="#808080" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4595 13.7299C13.0115 13.7299 14.2695 12.4718 14.2695 10.9199C14.2695 9.36794 13.0115 8.10986 11.4595 8.10986C9.90761 8.10986 8.64954 9.36794 8.64954 10.9199C8.64954 12.4718 9.90761 13.7299 11.4595 13.7299Z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.6495 20.1999C16.6495 17.8699 14.3295 15.9698 11.4595 15.9698C8.58953 15.9698 6.26953 17.8599 6.26953 20.1999" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 12.5C21 17.75 16.75 22 11.5 22C6.25 22 2 17.75 2 12.5C2 7.25 6.25 3 11.5 3C12.81 3 14.06 3.25999 15.2 3.73999C15.07 4.13999 15 4.56 15 5C15 5.75 15.21 6.46 15.58 7.06C15.78 7.4 16.04 7.70997 16.34 7.96997C17.04 8.60997 17.97 9 19 9C19.44 9 19.86 8.92998 20.25 8.78998C20.73 9.92998 21 11.19 21 12.5Z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 5C23 5.32 22.96 5.62999 22.88 5.92999C22.79 6.32999 22.63 6.72 22.42 7.06C21.94 7.87 21.17 8.49998 20.25 8.78998C19.86 8.92998 19.44 9 19 9C17.97 9 17.04 8.60997 16.34 7.96997C16.04 7.70997 15.78 7.4 15.58 7.06C15.21 6.46 15 5.75 15 5C15 4.56 15.07 4.13999 15.2 3.73999C15.39 3.15999 15.71 2.64002 16.13 2.21002C16.86 1.46002 17.88 1 19 1C20.18 1 21.25 1.51002 21.97 2.33002C22.61 3.04002 23 3.98 23 5Z" stroke="#808080" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.49 4.97998H17.51" stroke="#808080" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 3.52002V6.51001" stroke="#808080" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.9703 14.4402C18.3403 14.6702 19.8503 14.4302 20.9103 13.7202C22.3203 12.7802 22.3203 11.2402 20.9103 10.3002C19.8403 9.59016 18.3103 9.35016 16.9403 9.59016" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.97047 7.16C6.03047 7.15 6.10047 7.15 6.16047 7.16C7.54047 7.11 8.64047 5.98 8.64047 4.58C8.64047 3.15 7.49047 2 6.06047 2C4.63047 2 3.48047 3.16 3.48047 4.58C3.49047 5.98 4.59047 7.11 5.97047 7.16Z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.00043 14.44C5.63043 14.67 4.12043 14.43 3.06043 13.72C1.65043 12.78 1.65043 11.24 3.06043 10.3C4.13043 9.59001 5.66043 9.35 7.03043 9.59" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.0001 14.6302C11.9401 14.6202 11.8701 14.6202 11.8101 14.6302C10.4301 14.5802 9.33008 13.4502 9.33008 12.0502C9.33008 10.6202 10.4801 9.47021 11.9101 9.47021C13.3401 9.47021 14.4901 10.6302 14.4901 12.0502C14.4801 13.4502 13.3801 14.5902 12.0001 14.6302Z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.08973 17.7802C7.67973 18.7202 7.67973 20.2602 9.08973 21.2002C10.6897 22.2702 13.3097 22.2702 14.9097 21.2002C16.3197 20.2602 16.3197 18.7202 14.9097 17.7802C13.3197 16.7202 10.6897 16.7202 9.08973 17.7802Z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0004 21.41H5.94042C2.47042 21.41 1.02042 18.93 2.70042 15.9L5.82042 10.28L8.76042 5.00003C10.5404 1.79003 13.4604 1.79003 15.2404 5.00003L18.1804 10.29L21.3004 15.91C22.9804 18.94 21.5204 21.42 18.0604 21.42H12.0004V21.41Z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21.4396 19.9999L11.9996 13.3899L2.55957 19.9999" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 3V13.39" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18.75C17.0711 18.75 18.75 17.0711 18.75 15C18.75 12.9289 17.0711 11.25 15 11.25C12.9289 11.25 11.25 12.9289 11.25 15C11.25 17.0711 12.9289 18.75 15 18.75Z" stroke="#808080" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.5 16.1V13.9C2.5 12.6 3.5625 11.525 4.875 11.525C7.1375 11.525 8.0625 9.925 6.925 7.9625C6.275 6.8375 6.6625 5.375 7.8 4.725L9.9625 3.4875C10.95 2.9 12.225 3.25 12.8125 4.2375L12.95 4.475C14.075 6.4375 15.925 6.4375 17.0625 4.475L17.2 4.2375C17.7875 3.25 19.0625 2.9 20.05 3.4875L22.2125 4.725C23.35 5.375 23.7375 6.8375 23.0875 7.9625C21.95 9.925 22.875 11.525 25.1375 11.525C26.4375 11.525 27.5125 12.5875 27.5125 13.9V16.1C27.5125 17.4 26.45 18.475 25.1375 18.475C22.875 18.475 21.95 20.075 23.0875 22.0375C23.7375 23.175 23.35 24.625 22.2125 25.275L20.05 26.5125C19.0625 27.1 17.7875 26.75 17.2 25.7625L17.0625 25.525C15.9375 23.5625 14.0875 23.5625 12.95 25.525L12.8125 25.7625C12.225 26.75 10.95 27.1 9.9625 26.5125L7.8 25.275C6.6625 24.625 6.275 23.1625 6.925 22.0375C8.0625 20.075 7.1375 18.475 4.875 18.475C3.5625 18.475 2.5 17.4 2.5 16.1Z" stroke="#808080" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <span>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.8745 9.44999C18.487 4.94999 16.1745 3.11249 11.112 3.11249H10.9495C5.36201 3.11249 3.12451 5.34999 3.12451 10.9375V19.0875C3.12451 24.675 5.36201 26.9125 10.9495 26.9125H11.112C16.137 26.9125 18.4495 25.1 18.862 20.675" stroke="#443C3C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.25 15H25.475" stroke="#443C3C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.6875 10.8125L26.875 15L22.6875 19.1875" stroke="#443C3C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span>
          <svg width="58" height="36" viewBox="0 0 58 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="56" height="32" rx="16" fill="#C8BCF6"/>
            <g filter="url(#filter0_ddd_104_1429)">
            <rect x="26" y="2" width="28" height="28" rx="14" fill="#09090A"/>
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M45.9562 19.1359C44.4234 18.8673 42.8947 17.7416 41.9736 16.0223C40.8847 13.9896 40.9628 11.7204 42.0142 10.2794C42.122 10.1318 42.24 9.99276 42.368 9.86362C42.6149 9.61455 42.5435 9.14979 42.1963 9.09307C41.9699 9.05608 41.7399 9.02981 41.5067 9.01481C41.354 9.00499 41.2 9 41.0447 9C37.154 9 34 12.134 34 16C34 19.866 37.154 23 41.0447 23C43.2587 23 45.2342 21.9852 46.5256 20.3981C46.6724 20.2178 46.8103 20.0301 46.9387 19.8356C47.1217 19.5585 46.8679 19.2066 46.5345 19.1961C46.3425 19.19 46.1493 19.1697 45.9562 19.1359Z" stroke="#C8BCF6" stroke-width="1.5"/>
            <defs>
            <filter id="filter0_ddd_104_1429" x="22" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_104_1429"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_104_1429" result="effect2_dropShadow_104_1429"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_104_1429" result="effect3_dropShadow_104_1429"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_104_1429" result="shape"/>
            </filter>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default SideBar;