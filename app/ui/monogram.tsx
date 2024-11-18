export default function Monogram() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1050" class="monogram">
  <defs>
    <style>
      .cls-1 {
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 5px;
      }
    </style>
  </defs>
  <g id="MJ">
    <path id="J" class="cls-1" d="M1098.5,101.52v711c0,131-71,194-204.49,256.07,1.49-190.07.24-792.54,0-820.4L835.5,265.44V242.69Z"/>
    <g id="M">
      <polygon class="cls-1" points="366.5 791.52 366.5 813.9 102 955.88 102 359.17 42 376.88 42 354.5 306.5 212.52 306.5 810.13 366.5 791.52"/>
      <polygon class="cls-1" points="895.5 862.52 895.5 884.9 631 1026.88 631 284.27 571.33 301.88 571.33 279.5 835.5 137.52 835.5 880.23 895.5 862.52"/>
      <polygon class="cls-1" points="630.5 828.52 630.5 850.9 366 992.88 366 906.57 366.67 906.37 366.67 322.17 306.67 339.88 306.67 317.5 571.17 175.52 571.17 846.03 630.5 828.52"/>
    </g>
  </g>
</svg>
      `,
      }}
    />
  );
}