import { HTMLAttributes } from 'react'

export function WaveSvg(props: HTMLAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      className="h-full w-full xl:h-80 xl:w-full"
      viewBox="0 0 320 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M968.072 184.999H-486.928C-566.064 159.377 -671.959 74.471 -551.793 51.8231C-401.585 23.5133 -312.872 64.7238 -81.5115 80.133C149.849 95.5421 77.7692 55.9442 320.219 0.578754C514.178 -43.7136 826.937 -44.5803 968.072 -31.5004V184.999Z"
        fill="url(#paint0_linear_1_3779)"
      />
      <path
        d="M962 178.502L-483 178.502C-551.777 149.426 -655.382 52.9261 -527.836 36.2262C-368.404 15.3513 -295.992 60.2898 -72.5795 86.4752C150.833 112.661 94.294 70.1037 355.264 26.8497C564.04 -7.75346 827.095 53.3899 962 73.0014L962 178.502Z"
        fill="url(#paint1_linear_1_3779)"
      />
      <path
        d="M1083.17 180.001L-497 180.001C-565.777 150.926 -528.382 19.9253 -400.836 3.22542C-241.404 -17.6494 -168.992 27.289 54.4206 53.4745C277.833 79.6599 221.294 37.103 482.264 -6.15101C691.04 -40.7542 1013.04 -10.182 1147.95 9.42948L1083.17 180.001Z"
        fill="url(#paint2_linear_1_3779)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_3779"
          x1="192.572"
          y1="-29.0004"
          x2="192.572"
          y2="157"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FBAB34" stop-opacity="0.2" />
          <stop offset="1" stop-color="#FBAB34" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_3779"
          x1="239.916"
          y1="-8.434"
          x2="230.991"
          y2="178.347"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FBAB34" stop-opacity="0.2" />
          <stop offset="1" stop-color="#FBAB34" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1_3779"
          x1="366.914"
          y1="-41.4346"
          x2="357.989"
          y2="145.347"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FBAB34" stop-opacity="0.2" />
          <stop offset="1" stop-color="#FBAB34" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
