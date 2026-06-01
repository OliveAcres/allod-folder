// feTurbulence + feDisplacementMap + feSpecularLighting → edge lensing for .glass.
// Displacement kept low so short chrome labels stay crisp (legibility guardrail).
export default function LiquidLensDef(){
  return (
    <svg aria-hidden="true" width="0" height="0" style={{position:'absolute',pointerEvents:'none'}}>
      <defs>
        <filter id="liquid-lens" x="-15%" y="-15%" width="130%" height="130%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.009 0.013" numOctaves="2" seed="7" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="4"
            xChannelSelector="R" yChannelSelector="G" result="disp"/>
          <feSpecularLighting in="noise" surfaceScale="2" specularConstant="0.5"
            specularExponent="20" lightingColor="#ffffff" result="spec">
            <feDistantLight azimuth="235" elevation="55"/>
          </feSpecularLighting>
          <feComposite in="spec" in2="disp" operator="in" result="specClip"/>
          <feComposite in="disp" in2="specClip" operator="arithmetic" k1="0" k2="1" k3="0.3" k4="0"/>
        </filter>
      </defs>
    </svg>
  );
}
