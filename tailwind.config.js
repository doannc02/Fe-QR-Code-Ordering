/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  darkMode: 'class',
  theme: {
    animation: {
      shake: 'shake 0.35s ease-in-out infinite',
    },
    keyframes: {
      shake: {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '25%': {
          transform: 'rotate(10deg)',
        },
        '50%': {
          transform: 'rotate(0deg)',
        },
        '75%': {
          transform: 'rotate(-10deg)',
        },
        '100%': {
          transform: 'rotate(0deg)',
        },
      },
    },
    extend: {},
    screens: {
      '2xsm': '375px',
      xsm: '425px',
      '3xl': '2000px',
      ...defaultTheme.screens,
    },
    spacing: {
      xs: '32rem',
      sm: '48rem',
      md: '64rem',
      lg: '80rem',
      xl: '96rem',
      '2xl': '112rem',
      '3xl': '128rem',
      '4xl': '144rem',
      '5xl': '160rem',
      px: '1px',
      0: '0',
      0.5: '0.0625rem',
      1: '0.125rem',
      2: '0.25rem',
      3: '0.375rem',
      4: '0.5rem',
      5: '0.625rem',
      6: '0.75rem',
      7: '0.875rem',
      8: '1rem',
      9: '1.125rem',
      10: '1.25rem',
      11: '1.375rem',
      12: '1.5rem',
      13: '1.625rem',
      14: '1.75rem',
      15: '1.875rem',
      16: '2rem',
      17: '2.125rem',
      18: '2.25rem',
      19: '2.375rem',
      20: '2.5rem',
      21: '2.625rem',
      22: '2.75rem',
      23: '2.875rem',
      24: '3rem',
      25: '3.125rem',
      26: '3.25rem',
      27: '3.375rem',
      28: '3.5rem',
      29: '3.625rem',
      30: '3.75rem',
      31: '3.875rem',
      32: '4rem',
      33: '4.125rem',
      34: '4.25rem',
      35: '4.375rem',
      36: '4.5rem',
      37: '4.625rem',
      38: '4.75rem',
      39: '4.875rem',
      40: '5rem',
      41: '5.125rem',
      42: '5.25rem',
      43: '5.375rem',
      44: '5.5rem',
      45: '5.625rem',
      46: '5.75rem',
      47: '5.875rem',
      48: '6rem',
      49: '6.125rem',
      50: '6.25rem',
      51: '6.375rem',
      52: '6.5rem',
      53: '6.625rem',
      54: '6.75rem',
      55: '6.875rem',
      56: '7rem',
      57: '7.125rem',
      58: '7.25rem',
      59: '7.375rem',
      60: '7.5rem',
      61: '7.625rem',
      62: '7.75rem',
      63: '7.875rem',
      64: '8rem',
      65: '8.125rem',
      66: '8.25rem',
      67: '8.375rem',
      68: '8.5rem',
      69: '8.625rem',
      70: '8.75rem',
      71: '8.875rem',
      72: '9rem',
      73: '9.125rem',
      74: '9.25rem',
      75: '9.375rem',
      76: '9.5rem',
      77: '9.625rem',
      78: '9.75rem',
      79: '9.875rem',
      80: '10rem',
      81: '10.125rem',
      82: '10.25rem',
      83: '10.375rem',
      84: '10.5rem',
      85: '10.625rem',
      86: '10.75rem',
      87: '10.875rem',
      88: '11rem',
      89: '11.125rem',
      90: '11.25rem',
      91: '11.375rem',
      92: '11.5rem',
      93: '11.625rem',
      94: '11.75rem',
      95: '11.875rem',
      96: '12rem',
      97: '12.125rem',
      98: '12.25rem',
      99: '12.375rem',
      100: '12.5rem',
      101: '12.625rem',
      102: '12.75rem',
      103: '12.875rem',
      104: '13rem',
      105: '13.125rem',
      106: '13.25rem',
      107: '13.375rem',
      108: '13.5rem',
      109: '13.625rem',
      110: '13.75rem',
      111: '13.875rem',
      112: '14rem',
      113: '14.125rem',
      114: '14.25rem',
      115: '14.375rem',
      116: '14.5rem',
      117: '14.625rem',
      118: '14.75rem',
      119: '14.875rem',
      120: '15rem',
      121: '15.125rem',
      122: '15.25rem',
      123: '15.375rem',
      124: '15.5rem',
      125: '15.625rem',
      126: '15.75rem',
      127: '15.875rem',
      128: '16rem',
      129: '16.125rem',
      130: '16.25rem',
      131: '16.375rem',
      132: '16.5rem',
      133: '16.625rem',
      134: '16.75rem',
      135: '16.875rem',
      136: '17rem',
      137: '17.125rem',
      138: '17.25rem',
      139: '17.375rem',
      140: '17.5rem',
      141: '17.625rem',
      142: '17.75rem',
      143: '17.875rem',
      144: '18rem',
      145: '18.125rem',
      146: '18.25rem',
      147: '18.375rem',
      148: '18.5rem',
      149: '18.625rem',
      150: '18.75rem',
      151: '18.875rem',
      152: '19rem',
      153: '19.125rem',
      154: '19.25rem',
      155: '19.375rem',
      156: '19.5rem',
      157: '19.625rem',
      158: '19.75rem',
      159: '19.875rem',
      160: '20rem',
      161: '20.125rem',
      162: '20.25rem',
      163: '20.375rem',
      164: '20.5rem',
      165: '20.625rem',
      166: '20.75rem',
      167: '20.875rem',
      168: '21rem',
      169: '21.125rem',
      170: '21.25rem',
      171: '21.375rem',
      172: '21.5rem',
      173: '21.625rem',
      174: '21.75rem',
      175: '21.875rem',
      176: '22rem',
      177: '22.125rem',
      178: '22.25rem',
      179: '22.375rem',
      180: '22.5rem',
      181: '22.625rem',
      182: '22.75rem',
      183: '22.875rem',
      184: '23rem',
      185: '23.125rem',
      186: '23.25rem',
      187: '23.375rem',
      188: '23.5rem',
      189: '23.625rem',
      190: '23.75rem',
      191: '23.875rem',
      192: '24rem',
      193: '24.125rem',
      194: '24.25rem',
      195: '24.375rem',
      196: '24.5rem',
      197: '24.625rem',
      198: '24.75rem',
      199: '24.875rem',
      200: '25rem',
      201: '25.125rem',
      202: '25.25rem',
      203: '25.375rem',
      204: '25.5rem',
      205: '25.625rem',
      206: '25.75rem',
      207: '25.875rem',
      208: '26rem',
      209: '26.125rem',
      210: '26.25rem',
      211: '26.375rem',
      212: '26.5rem',
      213: '26.625rem',
      214: '26.75rem',
      215: '26.875rem',
      216: '27rem',
      217: '27.125rem',
      218: '27.25rem',
      219: '27.375rem',
      220: '27.5rem',
      221: '27.625rem',
      222: '27.75rem',
      223: '27.875rem',
      224: '28rem',
      225: '28.125rem',
      226: '28.25rem',
      227: '28.375rem',
      228: '28.5rem',
      229: '28.625rem',
      230: '28.75rem',
      231: '28.875rem',
      232: '29rem',
      233: '29.125rem',
      234: '29.25rem',
      235: '29.375rem',
      236: '29.5rem',
      237: '29.625rem',
      238: '29.75rem',
      239: '29.875rem',
      240: '30rem',
      241: '30.125rem',
      242: '30.25rem',
      243: '30.375rem',
      244: '30.5rem',
      245: '30.625rem',
      246: '30.75rem',
      247: '30.875rem',
      248: '31rem',
      249: '31.125rem',
      250: '31.25rem',
      251: '31.375rem',
      252: '31.5rem',
      253: '31.625rem',
      254: '31.75rem',
      255: '31.875rem',
      256: '32rem',
      257: '32.125rem',
      258: '32.25rem',
      259: '32.375rem',
      260: '32.5rem',
      261: '32.625rem',
      262: '32.75rem',
      263: '32.875rem',
      264: '33rem',
      265: '33.125rem',
      266: '33.25rem',
      267: '33.375rem',
      268: '33.5rem',
      269: '33.625rem',
      270: '33.75rem',
      271: '33.875rem',
      272: '34rem',
      273: '34.125rem',
      274: '34.25rem',
      275: '34.375rem',
      276: '34.5rem',
      277: '34.625rem',
      278: '34.75rem',
      279: '34.875rem',
      280: '35rem',
      281: '35.125rem',
      282: '35.25rem',
      283: '35.375rem',
      284: '35.5rem',
      285: '35.625rem',
      286: '35.75rem',
      287: '35.875rem',
      288: '36rem',
      289: '36.125rem',
      290: '36.25rem',
      291: '36.375rem',
      292: '36.5rem',
      293: '36.625rem',
      294: '36.75rem',
      295: '36.875rem',
      296: '37rem',
      297: '37.125rem',
      298: '37.25rem',
      299: '37.375rem',
      300: '37.5rem',
      301: '37.625rem',
      302: '37.75rem',
      303: '37.875rem',
      304: '38rem',
      305: '38.125rem',
      306: '38.25rem',
      307: '38.375rem',
      308: '38.5rem',
      309: '38.625rem',
      310: '38.75rem',
      311: '38.875rem',
      312: '39rem',
      313: '39.125rem',
      314: '39.25rem',
      315: '39.375rem',
      316: '39.5rem',
      317: '39.625rem',
      318: '39.75rem',
      319: '39.875rem',
      320: '40rem',
      321: '40.125rem',
      322: '40.25rem',
      323: '40.375rem',
      324: '40.5rem',
      325: '40.625rem',
      326: '40.75rem',
      327: '40.875rem',
      328: '41rem',
      329: '41.125rem',
      330: '41.25rem',
      331: '41.375rem',
      332: '41.5rem',
      333: '41.625rem',
      334: '41.75rem',
      335: '41.875rem',
      336: '42rem',
      337: '42.125rem',
      338: '42.25rem',
      339: '42.375rem',
      340: '42.5rem',
      341: '42.625rem',
      342: '42.75rem',
      343: '42.875rem',
      344: '43rem',
      345: '43.125rem',
      346: '43.25rem',
      347: '43.375rem',
      348: '43.5rem',
      349: '43.625rem',
      350: '43.75rem',
      351: '43.875rem',
      352: '44rem',
      353: '44.125rem',
      354: '44.25rem',
      355: '44.375rem',
      356: '44.5rem',
      357: '44.625rem',
      358: '44.75rem',
      359: '44.875rem',
      360: '45rem',
      361: '45.125rem',
      362: '45.25rem',
      363: '45.375rem',
      364: '45.5rem',
      365: '45.625rem',
      366: '45.75rem',
      367: '45.875rem',
      368: '46rem',
      369: '46.125rem',
      370: '46.25rem',
      371: '46.375rem',
      372: '46.5rem',
      373: '46.625rem',
      374: '46.75rem',
      375: '46.875rem',
      376: '47rem',
      377: '47.125rem',
      378: '47.25rem',
      379: '47.375rem',
      380: '47.5rem',
      381: '47.625rem',
      382: '47.75rem',
      383: '47.875rem',
      384: '48rem',
      385: '48.125rem',
      386: '48.25rem',
      387: '48.375rem',
      388: '48.5rem',
      389: '48.625rem',
      390: '48.75rem',
      391: '48.875rem',
      392: '49rem',
      393: '49.125rem',
      394: '49.25rem',
      395: '49.375rem',
      396: '49.5rem',
      397: '49.625rem',
      398: '49.75rem',
      399: '49.875rem',
      400: '50rem',
    },
  },
  plugins: [],
}
