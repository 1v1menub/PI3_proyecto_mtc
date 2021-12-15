import * as React from 'react';
import Svg, {
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  Path,
  G,
  Circle,
  LinearGradientProps,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function CustomLinearGradient(props: LinearGradientProps) {
  return (
    <LinearGradient
      id="prefix__linear-gradient"
      x1={521.87}
      y1={929.89}
      x2={521.87}
      y2={70.42}
      gradientTransform="rotate(40 679.744 572.335)"
      gradientUnits="userSpaceOnUse"
      {...props}>
      <Stop offset={0} stopColor="#fff" />
      <Stop offset={0.35} stopColor="#fefefe" />
      <Stop offset={1} stopColor="#dddddc" />
    </LinearGradient>
  );
}

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      id="prefix__Layer_1"
      data-name="Layer 1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1445.8 2146.93"
      {...props}>
      <Defs>
        <CustomLinearGradient />
        <CustomLinearGradient
          id="prefix__linear-gradient-2"
          x1={1004.94}
          y1={554.37}
          x2={1004.94}
          y2={270.89}
        />
        <CustomLinearGradient
          id="prefix__linear-gradient-3"
          x1={1287.85}
          y1={1418.32}
          x2={1287.85}
          y2={420.18}
        />
        <CustomLinearGradient
          id="prefix__linear-gradient-4"
          x1={923.19}
          y1={872.6}
          x2={923.19}
          y2={448.13}
        />
        <CustomLinearGradient
          id="prefix__linear-gradient-5"
          x1={1131.39}
          y1={1999.59}
          x2={1131.39}
          y2={1438.22}
        />
      </Defs>
      <Path
        d="M435 832.31l443.13-528.09a32 32 0 00-49-41.14 19.5 19.5 0 01-29.9-25.08l.24-.28 43.71-52.09a32 32 0 10-49-41.14l.17-.2a19.5 19.5 0 01-29.88-25.07l.24-.28 43.71-52.09a32 32 0 10-49-41.14l-535.71 630.6c-.32.38 211.29 176 211.29 176z"
        transform="translate(197.56 -14.29)"
        fill="url(#prefix__linear-gradient)"
      />
      <Path
        d="M975.38 796.48l146.15-174.18a10.55 10.55 0 10-16.17-13.57 6.43 6.43 0 11-9.85-8.26l.07-.1 14.42-17.18a10.55 10.55 0 10-16.17-13.57l.06-.06a6.43 6.43 0 01-9.86-8.27l.08-.1 14.42-17.19a10.55 10.55 0 10-16.17-13.57l-176.68 208c-.11.13 69.7 58.05 69.7 58.05z"
        transform="translate(197.56 -14.29)"
        fill="url(#prefix__linear-gradient-2)"
      />
      <Path
        d="M724.94 1712.94l514.6-613.29a37.16 37.16 0 00-56.93-47.77 22.65 22.65 0 01-34.7-29.11l.28-.33 50.76-60.5a37.16 37.16 0 00-56.95-47.77l.2-.24a22.65 22.65 0 11-34.7-29.11l.28-.33 50.77-60.49a37.17 37.17 0 00-56.94-47.78l-622.07 732.33c-.37.45 245.4 204.39 245.4 204.39z"
        transform="translate(197.56 -14.29)"
        fill="url(#prefix__linear-gradient-3)"
      />
      <Path
        d="M725.6 1002.07l218.84-260.81a15.8 15.8 0 00-24.21-20.32 9.63 9.63 0 11-14.75-12.38l.11-.14 21.59-25.72A15.8 15.8 0 10903 662.38l.08-.1a9.63 9.63 0 01-14.76-12.38l.12-.14L910 624a15.8 15.8 0 10-24.21-20.31L621.24 915.15c-.16.19 104.36 86.92 104.36 86.92z"
        transform="translate(197.56 -14.29)"
        fill="url(#prefix__linear-gradient-4)"
      />
      <Path
        d="M177.56 2013.16L467 1668.24a20.9 20.9 0 10-32-26.87 12.74 12.74 0 01-19.55-16.37l.16-.19 28.55-34a20.9 20.9 0 10-32-26.87l.11-.13a12.74 12.74 0 11-19.52-16.38l.16-.18 28.55-34a20.9 20.9 0 00-32-26.87L39.55 1898.21c-.21.25 138.01 114.95 138.01 114.95z"
        transform="translate(197.56 -14.29)"
        fill="url(#prefix__linear-gradient-5)"
      />
      <G id="prefix__Layer_3" data-name="Layer 3">
        <Path
          fill="#f4f4f4"
          d="M579.9 1984.8L816 1703.48a5.71 5.71 0 10-8.75-7.34L571.6 1977.81zM604.92 2005.7L841 1724.38a5.71 5.71 0 10-8.75-7.34l-235.63 281.67zM629.9 2026.66L866 1745.33a5.71 5.71 0 00-8.75-7.34L621.6 2019.67zM654.87 2047.62l236.06-281.33a5.71 5.71 0 00-8.75-7.34l-235.61 281.68zM679.85 2068.57l236.06-281.32a5.71 5.71 0 10-8.75-7.34l-235.61 281.67zM-156 1589.21l236-281.33a5.71 5.71 0 10-8.75-7.34s-236.35 282.55-235.61 281.68zM-131 1610.11l236.06-281.33a5.71 5.71 0 10-8.75-7.34l-235.61 281.68zM-106 1631.06l236-281.32a5.71 5.71 0 00-8.75-7.35l-235.61 281.68zM-81 1652l236-281.31a5.71 5.71 0 00-8.75-7.34L-89.35 1645zM-56.07 1673L180 1391.65a5.71 5.71 0 10-8.75-7.34S-65.11 1666.86-64.37 1666z"
          transform="translate(197.56 -14.29)"
        />
      </G>
      <G id="prefix__Layer_4" data-name="Layer 4">
        <Circle fill="#f4f4f4" cx={258.1} cy={1559.52} r={13.5} />
        <Circle fill="#f4f4f4" cx={306.18} cy={1599.86} r={13.5} />
        <Circle fill="#f4f4f4" cx={354.26} cy={1640.21} r={13.5} />
        <Circle fill="#f4f4f4" cx={402.34} cy={1680.55} r={13.5} />
        <Circle fill="#f4f4f4" cx={450.42} cy={1720.9} r={13.5} />
        <Circle fill="#f4f4f4" cx={498.5} cy={1761.24} r={13.5} />
        <Circle fill="#f4f4f4" cx={546.58} cy={1801.58} r={13.5} />
        <Circle fill="#f4f4f4" cx={594.66} cy={1841.93} r={13.5} />
        <Circle fill="#f4f4f4" cx={223.15} cy={1601.16} r={13.5} />
        <Circle fill="#f4f4f4" cx={271.23} cy={1641.51} r={13.5} />
        <Circle fill="#f4f4f4" cx={319.32} cy={1681.85} r={13.5} />
        <Circle fill="#f4f4f4" cx={367.4} cy={1722.19} r={13.5} />
        <Circle fill="#f4f4f4" cx={415.48} cy={1762.54} r={13.5} />
        <Circle fill="#f4f4f4" cx={463.56} cy={1802.88} r={13.5} />
        <Circle fill="#f4f4f4" cx={511.64} cy={1843.23} r={13.5} />
        <Circle fill="#f4f4f4" cx={559.72} cy={1883.57} r={13.5} />
        <Circle fill="#f4f4f4" cx={188.21} cy={1642.81} r={13.5} />
        <Circle fill="#f4f4f4" cx={236.29} cy={1683.15} r={13.5} />
        <Circle fill="#f4f4f4" cx={284.37} cy={1723.49} r={13.5} />
        <Circle fill="#f4f4f4" cx={332.45} cy={1763.84} r={13.5} />
        <Circle fill="#f4f4f4" cx={380.53} cy={1804.18} r={13.5} />
        <Circle fill="#f4f4f4" cx={428.61} cy={1844.53} r={13.5} />
        <Circle fill="#f4f4f4" cx={476.69} cy={1884.87} r={13.5} />
        <Circle fill="#f4f4f4" cx={524.77} cy={1925.21} r={13.5} />
        <Circle fill="#f4f4f4" cx={153.27} cy={1684.45} r={13.5} />
        <Circle fill="#f4f4f4" cx={201.35} cy={1724.79} r={13.5} />
        <Circle fill="#f4f4f4" cx={249.43} cy={1765.14} r={13.5} />
        <Circle fill="#f4f4f4" cx={297.51} cy={1805.48} r={13.5} />
        <Circle fill="#f4f4f4" cx={345.59} cy={1845.83} r={13.5} />
        <Circle fill="#f4f4f4" cx={393.67} cy={1886.17} r={13.5} />
        <Circle fill="#f4f4f4" cx={441.75} cy={1926.51} r={13.5} />
        <Circle fill="#f4f4f4" cx={489.83} cy={1966.86} r={13.5} />
        <Circle fill="#f4f4f4" cx={118.33} cy={1726.09} r={13.5} />
        <Circle fill="#f4f4f4" cx={166.41} cy={1766.44} r={13.5} />
        <Circle fill="#f4f4f4" cx={214.49} cy={1806.78} r={13.5} />
        <Circle fill="#f4f4f4" cx={262.57} cy={1847.13} r={13.5} />
        <Circle fill="#f4f4f4" cx={310.65} cy={1887.47} r={13.5} />
        <Circle fill="#f4f4f4" cx={358.73} cy={1927.81} r={13.5} />
        <Circle fill="#f4f4f4" cx={406.81} cy={1968.16} r={13.5} />
        <Circle fill="#f4f4f4" cx={454.89} cy={2008.5} r={13.5} />
        <Circle fill="#f4f4f4" cx={83.38} cy={1767.74} r={13.5} />
        <Circle fill="#f4f4f4" cx={131.46} cy={1808.08} r={13.5} />
        <Circle fill="#f4f4f4" cx={179.54} cy={1848.43} r={13.5} />
        <Circle fill="#f4f4f4" cx={227.62} cy={1888.77} r={13.5} />
        <Circle fill="#f4f4f4" cx={275.7} cy={1929.11} r={13.5} />
        <Circle fill="#f4f4f4" cx={323.78} cy={1969.46} r={13.5} />
        <Circle fill="#f4f4f4" cx={371.86} cy={2009.8} r={13.5} />
        <Circle fill="#f4f4f4" cx={419.94} cy={2050.15} r={13.5} />
        <Circle fill="#f4f4f4" cx={48.44} cy={1809.38} r={13.5} />
        <Circle fill="#f4f4f4" cx={96.52} cy={1849.72} r={13.5} />
        <Circle fill="#f4f4f4" cx={144.6} cy={1890.07} r={13.5} />
        <Circle fill="#f4f4f4" cx={192.68} cy={1930.41} r={13.5} />
        <Circle fill="#f4f4f4" cx={240.76} cy={1970.76} r={13.5} />
        <Circle fill="#f4f4f4" cx={288.84} cy={2011.1} r={13.5} />
        <Circle fill="#f4f4f4" cx={336.92} cy={2051.45} r={13.5} />
        <Circle fill="#f4f4f4" cx={385} cy={2091.79} r={13.5} />
        <Circle fill="#f4f4f4" cx={13.5} cy={1851.02} r={13.5} />
        <Circle fill="#f4f4f4" cx={61.58} cy={1891.37} r={13.5} />
        <Circle fill="#f4f4f4" cx={109.66} cy={1931.71} r={13.5} />
        <Circle fill="#f4f4f4" cx={157.74} cy={1972.06} r={13.5} />
        <Circle fill="#f4f4f4" cx={205.82} cy={2012.4} r={13.5} />
        <Circle fill="#f4f4f4" cx={253.9} cy={2052.74} r={13.5} />
        <Circle fill="#f4f4f4" cx={301.98} cy={2093.09} r={13.5} />
        <Circle fill="#f4f4f4" cx={350.06} cy={2133.43} r={13.5} />
      </G>
    </Svg>
  );
}

export default SvgComponent;
