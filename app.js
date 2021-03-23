/*
 *
 * OBJECT LITERALS
 * 
 */

// 3x3


let protagonistData = {
    level: 1,
    exp: 0,
    name: '', 
    equipment: {
        weapon: { name: 'rusty sword', attack: 5, equipable: 'weapon', buff: 'attack', consumable: false },
        attire: { name: 'crimson cloak', hp: 5, equipable: 'attire', buff: 'hp', consumable: false }
    },
    stats: {
        current: {
            hp: 25, 
            mp: 0, 
            attack: 8,
            magic: 1
        }
    },
    dialogue: ['It\'s game over for me!', ''], 
    inventory: [
        { name: 'granite sword', attack: 10, equipable: 'weapon', buff: 'attack', consumable: false }
    ]
}

let levelStats = {
    1: { hp: 20, mp: 0, attack: 3, magic: 1 },
    2: { hp: 25, mp: 5, attack: 4, magic: 2 },
    3: { hp: 30, mp: 6, attack: 5, magic: 3 },
    4: { hp: 35, mp: 7, attack: 6, magic: 4 },
    5: { hp: 40, mp: 8, attack: 7, magic: 5 },
    6: { hp: 45, mp: 9, attack: 8, magic: 6 },
    7: { hp: 50, mp: 10, attack: 9, magic: 7 },
    8: { hp: 55, mp: 11, attack: 10, magic: 8 },
    9: { hp: 60, mp: 12, attack: 11, magic: 9 },
    10: { hp: 65, mp: 13, attack: 12, magic: 10 }
}

protagonistData.stats.base = {
    hp: levelStats[protagonistData.level].hp + protagonistData.equipment.attire.hp,
    attack: levelStats[protagonistData.level].attack + protagonistData.equipment.weapon.attack
}; 

let monsterData; 

let expGauge = {
    1: 1,
    2: 400,
    3: 800,
    4: 1600,
    5: 3200,
    6: 6400,
    7: 12800,
    8: 25600,
    9: 51200,
    10: 102400
}

let page = [
    [
        2476, 2426, 2376, 2326, 2276, 2226, 2176, 2126, 2076, 2026, 1976, 1926, 1876, 1826,
        1800,1801,1802,1803,1804,1805,1806,1807,1808,1816,1817,1818,1819,1820,1821,1822,1823,1824,1825,
        674, 723, 724, 725, 772, 773, 774, 775, 776, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880,
        918, 920, 922, 923, 924, 925, 926, 928, 930,
        968, 970, 972, 973, 974, 975, 976, 978, 980,
        1018,1020,1022,1023,1024,1025,1026,1028,1030,
        1067,1068,1069,1070,1071,1072,1073,1075,1076,1077,1078,1079,1080,1081
    ],
    [
494,  543,  544,  545,  592,  593,  595,  596,  643,  644,
   645,  693,  695,  743,  744,  745,  793,  795,  843,  844,
   845,  893,  895,  943,  944,  945,  993,  995, 1043, 1044,
  1045, 1093, 1095, 1143, 1144, 1145, 1192, 1193, 1195, 1196,
  1242, 1243, 1244, 1245, 1246, 1292, 1294, 1296, 1342, 1343,
  1344, 1345, 1346, 1392, 1394, 1396, 1441, 1442, 1443, 1444,
  1445, 1446, 1447, 1491, 1492, 1494, 1496, 1497, 1541, 1542,
  1543, 1544, 1545, 1546, 1547, 1591, 1593, 1595, 1597, 1640,
  1641, 1642, 1643, 1645, 1646, 1647, 1648, 1690, 1691, 1692,
  1696, 1697, 1698, 1740, 1741, 1742, 1746, 1747, 1748, 1789,
1790, 1791, 1797, 1798, 1799, 1839, 1840, 1841,
  1842, 1843, 1844, 1845, 1846, 1847, 1848, 1849, 1888,
  1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897,
  1898, 1899, 1938, 1939, 1940, 1941, 1947, 1948,
  1949, 1987, 1988, 1989, 1990, 1998, 1999, 2037, 2038, 2039, 2049, 2087, 2088,
  2089, 2099, 2136, 2137, 2138, 2186, 2187, 2188, 2235, 2236,
  2237, 2238, 2284, 2285, 2286,
  2287, 2288
    ],
    [1900, 1950, 2000,2001,2050, 2051, 2100, 2101, 2200, 2201, 2202, 2150, 2151,2152,2250, 2251, 2252, 2253,2300, 2301, 2302, 2303, 2304],
    [
        154, 203, 204, 205, 252, 253, 254, 255, 256, 301, 302, 303, 304, 305, 306, 307, 352, 402, 452, 356, 406, 456, 455, 453,
        612, 661, 662, 663, 710, 711, 712, 713, 714, 759, 760, 761, 762, 763, 764, 765, 810, 811, 812, 813, 860, 910, 911, 814, 864, 863, 862, 861, 914, 913,
        268, 317, 318, 319, 366, 367, 368, 369, 370, 415, 416, 417, 418, 419, 420, 421, 466, 516, 566, 567,  470, 520, 570, 569,
        1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,
        1276,1226,1176,1126,1076,1026,976,926,876,826,776,726,676,626,576,526,476,426,376,326,276,226,176,126,76,26,
        517, 518, 519, 467, 468, 469,
        353, 354, 355, 403, 404, 405
    ],
    [],
    [],
    [],
    [],
    []
];


const indoorTemplate = [
    0,   1,   2,   3,   4,   5,   6,   7,   8,   9,  10,  11,  12,  13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  23,  24,  25,  26,  27,  28,  29, 30,  31,  32,  33,  34,  35,  36,  37,  38,  39,  40,  41,  42,  43,  44,  45,  46,  47,  48,  49,
    50,  51,  52,  53,  54,  55,  56,  57,  58,  59,  60,  61,  62,  63,  64,  65,  66,  67,  68,  69,  70,  71,  72,  73,  74,  75,  76,  77,  78,  79, 80,  81,  82,  83,  84,  85,  86,  87,  88,  89,  90,  91,  92,  93,  94,  95,  96,  97,  98,  99,
    100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149,
    150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199,
    200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249,

    2250,2251,2252,2253,2254,2255,2256,2257,2258,2259,2260,2261,2262,2263,2264,2265,2266,2267,2268,2269,2270,2271,2272,2273,2274,2275,2276,2277,2278,2279,2280,2281,2282,2283,2284,2285,2286,2287,2288,2289,2290,2291,2292,2293,2294,2295,2296,2297,2298,2299,
    2300,2301,2302,2303,2304,2305,2306,2307,2308,2309,2310,2311,2312,2313,2314,2315,2316,2317,2318,2319,2320,2321,2322,2323,2324,2325,2326,2327,2328,2329,2330,2331,2332,2333,2334,2335,2336,2337,2338,2339,2340,2341,2342,2343,2344,2345,2346,2347,2348,2349,
    2350,2351,2352,2353,2354,2355,2356,2357,2358,2359,2360,2361,2362,2363,2364,2365,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2384,2385,2386,2387,2388,2389,2390,2391,2392,2393,2394,2395,2396,2397,2398,2399,
    2400,2401,2402,2403,2404,2405,2406,2407,2408,2409,2410,2411,2412,2413,2414,2415,2416,2417,2418,2419,2420,2421,2422,2423,2424,2425,2426,2427,2428,2429,2430,2431,2432,2433,2434,2435,2436,2437,2438,2439,2440,2441,2442,2443,2444,2445,2446,2447,2448,2449,
    2450,2451,2452,2453,2454,2455,2456,2457,2458,2459,2460,2461,2462,2463,2464,2465,2466,2467,2468,2469,2470,2471,2472,2473,2474,2475,2476,2477,2478,2479,2480,2481,2482,2483,2484,2485,2486,2487,2488,2489,2490,2491,2492,2493,2494,2495,2496,2497,2498,2499,
    
    250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1900, 1950, 2000, 2050, 2100, 2150, 2200, 
    251,  301,  351,  401,  451,  501,  551,  601,  651, 701,  751,  801,  851,  901,  951, 1001,  1051, 1101, 1151, 1201, 1251, 1301, 1351, 1401, 1451, 1501, 1551, 1601, 1651, 1701,  1751, 1801, 1851, 1901, 1951, 2001, 2051,  2101, 2151, 2201, 
    252,  302, 352,  402,  452,  502,  552,  602,  652, 702,  752,  802,  852,  902,  952, 1002,1052, 1102, 1152, 1202, 1252, 1302, 1352,1402, 1452, 1502, 1552, 1602, 1652, 1702,1752, 1802, 1852, 1902, 1952, 2002, 2052,2102, 2152, 2202,
    153,  203,  253,  303,353,  403,  453,  503,  553,  603,  653,703,  753,  803,  853,  903,  953, 1003,1053, 1103, 1153, 1203, 1253, 1303, 1353,1403, 1453, 1503, 1553, 1603, 1653, 1703,1753, 1803, 1853, 1903, 1953, 2003, 2053,2103, 2153, 2203, 2253, 2303,
    154,  204,  254,  304,354,  404,  454,  504,  554,  604,  654,704,  754,  804,  854,  904,  954, 1004,1054, 1104, 1154, 1204, 1254, 1304, 1354,1404, 1454, 1504, 1554, 1604, 1654, 1704,1754, 1804, 1854, 1904, 1954, 2004, 2054,2104, 2154, 2204, 2254, 2304,
    
    195,  245,  295,  345,395,  445,  495,  545,  595,  645,  695,745,  795,  845,  895,  945,  995, 1045,1095, 1145, 1195, 1245, 1295, 1345, 1395,1445, 1495, 1545, 1595, 1645, 1695, 1745,1795, 1845, 1895, 1945, 1995, 2045, 2095,2145, 2195, 2245, 2295, 2345,
    196,  246,  296,  346,396,  446,  496,  546,  596,  646,  696,746,  796,  846,  896,  946,  996, 1046,1096, 1146, 1196, 1246, 1296, 1346, 1396,1446, 1496, 1546, 1596, 1646, 1696, 1746,1796, 1846, 1896, 1946, 1996, 2046, 2096,2146, 2196, 2246, 2296, 2346,
    297,  347, 397,  447,  497,  547,  597,  647,  697,   747,  797,  847,  897,  947,  997, 1047,1097, 1147, 1197, 1247, 1297, 1347, 1397,1447, 1497, 1547, 1597, 1647, 1697, 1747,1797, 1847, 1897, 1947, 1997, 2047, 2097,2147, 2197, 2247,
    298,  348,398,  448,  498,  548,  598,  648,  698,748,  798,  848,  898,  948,  998, 1048,1098, 1148, 1198, 1248, 1298, 1348, 1398,1448, 1498, 1548, 1598, 1648, 1698, 1748,1798, 1848, 1898, 1948, 1998, 2048, 2098,2148, 2198, 2248, 
    299,  349, 399,  449,  499,  549,  599,  649,  699, 749,  799,  849,  899,  949,  999, 1049,1099, 1149, 1199, 1249, 1299, 1349, 1399,1449, 1499, 1549, 1599, 1649, 1699, 1749,1799, 1849, 1899, 1949, 1999, 2049, 2099,2149, 2199, 2249, 
    2222, 2226
]

// 454, 912,
let indoorSpace = [
    {
        1074: [
            ... indoorTemplate
        ]
    },
    {},
    {},
    {
        454: [
            154, 203, 204, 205, 252, 253, 255, 256, 301, 302, 306, 307, 352, 402, 452, 356, 406, 456, 455, 453,
            612, 661, 662, 663, 710, 711, 712, 713, 714, 759, 760, 761, 762, 763, 764, 765, 810, 811, 812, 813, 860, 910, 911, 814, 864, 863, 862, 861, 914, 913,
            268, 317, 318, 319, 366, 367, 368, 369, 370, 415, 416, 417, 418, 419, 420, 421, 466, 516, 566, 567,  470, 520, 570, 569,
            1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,
            1276,1226,1176,1126,1076,1026,976,926,876,826,776,726,676,626,576,526,476,426,376,326,276,226,176,126,76,26,
            517, 518, 519, 467, 468, 469
        ],
        912: [
            ... indoorTemplate
        ],
        568: [
            154, 203, 204, 205, 252, 253, 254, 255, 256, 301, 302, 303, 304, 305, 306, 307, 352, 402, 452, 356, 406, 456, 455, 453,
            612, 661, 662, 663, 710, 711, 712, 713, 714, 759, 760, 761, 762, 763, 764, 765, 810, 811, 812, 813, 860, 910, 911, 814, 864, 863, 862, 861, 914, 913,
            268, 317, 318, 319, 366, 367, 369, 370, 415, 416, 420, 421, 466, 516, 566, 567,  470, 520, 570, 569,
            1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,
            1276,1226,1176,1126,1076,1026,976,926,876,826,776,726,676,626,576,526,476,426,376,326,276,226,176,126,76,26,
            353, 354, 355, 403, 404, 405
        ]
    },
    {},
    {},
    {},
    {},
    {}
];

let entrance = [
    [
        1074
    ],
    [],
    [],
    [
        454, 568, 912
    ],
    [],
    [],
    [],
    [],
    []
]

let entry = [
    {
        1074: [ 2224 ]
    },
    {},
    {},
    {
        454: [
            404
        ],
        568: [
            518
        ],
        912: [
            2224
        ]
    },
    {},
    {},
    {},
    {},
    {}
]

let exit = [
    {
        1074: [
            2223, 2224, 2225
        ]
    },
    {},
    {},
    {
        454: [
            404
        ],
        568: [
            518
        ],
        912: [
            2223, 2224, 2225
        ]
        
    },
    {},
    {},
    {},
    {},
    {}
]

let items = {
    'health potion': { name: 'health potion', hp: 15, equipable: false, consumable: 'hp' },
    'magicka potion': { name: 'magicka potion', mp: 15, equipable: false, consumable: 'hp' },
    'rock': { name: 'rock', mp: 15, equipable: false, consumable: false },
    'granite sword': { name: 'granite sword', attack: 10, equipable: 'weapon', buff: 'attack', consumable: false }
}

let baseLvl = {
    1: { level: 1, hp: 6, mp: 5, attack: 1, magic: 1, exp: 1},
    2: { level: 2, hp: 12, mp: 10, attack: 2, magic: 2, exp: 2},
    3: { level: 3, hp: 20, mp: 15, attack: 3, magic: 3, exp: 3}
}

let beastiary = {
    goblin: {
        hp: 1, mp: 2, attack: 2, magic: 2, exp: 1
    },
    minotaur: {
        hp: 3, mp: 0, attack: 1, magic: 0, exp: 2
    }
}

const rmObjRef = (object) => JSON.parse(JSON.stringify(object));

let interactibleObjects = [
    {   
        monsters: {
            99: { id: 99, name: '', level: baseLvl[1].level, exp: baseLvl[1].exp, hp: 1, mp: 1, attack: 1, magic: 1, dialogue: ['menacing monster ahead', ''], inventory: [] }
        }, 
        npc: {
            100: { id: 100, name: '', level: baseLvl[1].level, exp: baseLvl[1].exp, hp: 1, mp: 1, attack: 1, magic: 1, dialogue: ['npc says hi', ''], inventory: [] }
        }
    },
    {monsters: {}, npc: {}},
    {monsters: {}, npc: {}},
    {
        monsters: {
            997: { id: 997, name: '', level: baseLvl[1].level, exp: baseLvl[1].exp * beastiary.goblin.exp, hp: baseLvl[1].hp * beastiary.goblin.hp, mp: baseLvl[1].mp * beastiary.goblin.mp, attack: baseLvl[1].attack * beastiary.goblin.attack, magic: baseLvl[1].magic * beastiary.goblin.magic, dialogue: ['menacing monster ahead', ''], inventory: [rmObjRef(items['health potion']), rmObjRef(items['health potion'])] }
        }, 
        npc: {
            519: { id: 519, name: 'Dovahkiin', level: baseLvl[1].level, exp: baseLvl[1].exp, hp: 1, mp: 1, attack: 1, magic: 1, dialogue: ['Why are you in my house? Get out!', ''], inventory: [] },
            752: { id: 752, name: 'Link', level: baseLvl[1].level, exp: baseLvl[1].exp, hp: 1, mp: 1, attack: 1, magic: 1, dialogue: ['Don\'t mind me standing around here doing nothing!', ''], inventory: [] }
        }
    },
    {
        monsters: {
            198: { id: 198, name: '', level: baseLvl[1].level, exp: baseLvl[1].exp, hp: 1, mp: 1, attack: 1, magic: 1, dialogue: ['menacing monster ahead', ''], inventory: [] }
        }, 
        npc: {
            207: { id: 207, name: '', level: baseLvl[1].level, exp: baseLvl[1].exp, hp: 1, mp: 1, attack: 1, magic: 1, dialogue: ['npc says hi', ''], inventory: [] }
        }
    },
    {monsters: [], npc: []},
    {
        monsters: {
            201: { id: 201, name: '', level: baseLvl[1].level, exp: baseLvl[1].exp, hp: 1, mp: 1, attack: 1, magic: 1, dialogue: ['menacing monster ahead', ''], inventory: [] }
        }, 
        npc: {
            207: { id: 207, name: '', level: baseLvl[1].level, exp: baseLvl[1].exp, hp: 1, mp: 1, attack: 1, magic: 1, dialogue: ['npc says hi', ''], inventory: [] },
            215: { id: 215, name: '', level: baseLvl[1].level, exp: baseLvl[1].exp, hp: 1, mp: 1, attack: 1, magic: 1, dialogue: ['npc says hi', ''], inventory: [] }
        }
    },
    {monsters: [], npc: []},
    {monsters: [], npc: []}
];


/*
 *
 * INITIAL STATE
 * 
 */


// wrapper for app 
const app = document.querySelector('.app');
app.classList.add('wrapper');

const col1 = document.createElement("div");
col1.classList.add('column-1');
const col2 = document.createElement("div");
col2.classList.add('column-2');

app.appendChild(col1)
app.appendChild(col2)

const textScreen = document.createElement("div");
textScreen.classList.add('text-screen');
col2.appendChild(textScreen)

const inputField = document.createElement("input");
inputField.classList.add('input-field');
col2.appendChild(inputField)

let subtitle = document.createElement("div")
subtitle.className = 'subtitle';
subtitle.innerHTML = `
    <div class="text-item">
        <p>Welcome to Browser land, where you\'ll find yourself manipulating the DOM by traversing one end of the viewport to another.</p>
        <br>
        <table style="width: 50%;">
            <tr style="text-align: left;">
                <th>Label</th>
                <th>Symbol</th> 
            </tr>
            <tr>
                <td>
                    You
                </td>
                <td>
                    <div class="red square"></div> 
                </td>
            </tr>
            <tr>
                <td>
                    NPC
                </td>
                <td>
                    <div class="blue square"></div> 
                </td>
            </tr>
            <tr>
                <td>
                    Enemy
                </td>
                <td>
                    <div class="green square"></div> 
                </td>
            </tr>
            <tr>
                <td>
                    Environmental Block
                </td>
                <td>
                    <div class="grey square"></div> 
                </td>
            </tr>
        </table>
        <br>
        <p>Press 'M' to see where you are on the map.</p>
    <div>
`;
textScreen.appendChild(subtitle);

const grid = document.createElement("div");
grid.classList.add('grid');
col1.appendChild(grid)

const map = document.createElement("div");
map.classList.add('map');
map.classList.add('displayMap');
col1.appendChild(map)

let width = 50;
let height = 50;
let totalSquareFootage = width * height;

let pageIndex = (dir = '') => {
    let num = 0;
    switch(dir) {
      case 'UP':
        num = -3; break;
      case 'DOWN':
        num = 3; break;
      case 'LEFT':
        num = -1; break;
      case 'RIGHT':
        num = 1; break;
    }
    return num;
}

function cachePageIndex(pageIndex){
    let index = 3
    return function (n) {
        if (typeof n == "undefined") index;
        // console.log(n)
        index = index + pageIndex(n)
        return index  
    }
}

pageIndex = cachePageIndex(pageIndex);

for (let i = 0; i < totalSquareFootage; i++) {
  const square = document.createElement('div');
  grid.appendChild(square);
}

const squares = Array.from(document.querySelectorAll('.grid div'));

let setEntrance = 454;

// Appear at house: 354
// Appear next to monster for testing: 996 
let protagonist = 354; 

let cachedProtagonist = 0;
let isBattle = false;
squares[protagonist].classList.add('character');

page.forEach((value, index) => {
  const square = document.createElement('div');
  square.classList = `mapRegion`;
  map.appendChild(square);
})

const mapRegions = Array.from(document.querySelectorAll('.map div'));
mapRegions[3].classList.add('mapRegionCurrentLocation');

let pageSetUp = (prev, index) => {

    if (prev === index) prev = -1;

    // Update Environment Interactible Objects

    if (prev !== -1) {
        if (interactibleObjects[prev].monsters) {
            for (const monsterIndex in interactibleObjects[prev].monsters) {
                squares[monsterIndex].classList.remove('monster');
                //   console.log(`${property}: ${object[property]}`);
            }
        }

        if (interactibleObjects[prev].npc) {
            for (const npcIndex in interactibleObjects[prev].npc) {
                squares[npcIndex].classList.remove('npc');
            }
        }
    }

    if (interactibleObjects[index].monsters) {
        for (const monsterIndex in interactibleObjects[index].monsters) {
            squares[monsterIndex].classList.add('monster');
        }
    }
    if (interactibleObjects[index].npc) {
        for (const npcIndex in interactibleObjects[index].npc) {
            squares[npcIndex].classList.add('npc');
        }
    }

    // Update Map
    if (prev !== -1) mapRegions[prev].classList.remove('mapRegionCurrentLocation');
    mapRegions[index].classList.add('mapRegionCurrentLocation');

}


let enterBattle = () => {

    cachedProtagonist = protagonist;
    protagonist = 557;
    let index = pageIndex()
    isBattle = true;

    if (interactibleObjects[index].monsters) {
        for (const monsterIndex in interactibleObjects[index].monsters) {
            squares[monsterIndex].classList.remove('monster');
            //   console.log(`${property}: ${object[property]}`);
        }
    }

    if (interactibleObjects[index].npc) {
        for (const npcIndex in interactibleObjects[index].npc) {
            squares[npcIndex].classList.remove('npc');
        }
    }

    for (const point of [557, 558, 559, 606, 607, 608, 609, 610, 656, 657, 658, 659, 660, 706, 707, 708, 709, 710, 757, 758, 759, 856, 857, 905, 906, 907, 908, 954, 955, 956, 957, 958, 959, 1003,1004,1005,1006,1007,1008,1009,1010,1012,1013,
                            1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,
                            1103,1104,1105,1106,1107,1108,1109,
                            1153,1154,1155,1156,1157,1158,
                            1203,1204,1205,1206,1207,
                            1253,1254,1255,1256,1257,
                            1303,1304,1305,1306,1307,1308,
                            1353,1354,1355,1357,1358,1359,
                            1404,1405,1408,1409,1410,
                            1453,1454,1459,1460,
                            1502,1503, 1509,1510,
                            1552,1553,1554, 1559,1560,1561,
                            1113,1163, 963, 911, 912, 913, 914, 915,
                            862, 863, 864, 812, 813, 814, 762, 763, 764, 712, 713, 714, 662, 663, 664, 612, 613, 614, 562, 563, 564, 512, 513, 514, 463
                        ]) {
        squares[point].classList.add('character');
    }

    for (const point of [785, 789,
                            835, 836, 837, 838, 839,
                            884, 885, 886, 887, 888, 889, 890,
                            933, 934, 935, 936, 937, 938, 939, 940, 941,
                            983, 984, 985, 989, 990, 991,
                            1033,1034, 1037, 1040,1041,
                            1083,1084,1085,1089,1090,1091,
                            1133,1134,1135,1136,1137,1138,1139,1140,1141,
                            1184,1185,1186,1187,1188,1189,1190,
                            1235,1236,1237,1238,1239
                        ]) {
        squares[point].classList.add('monster');
    }
}

let exitBattle = () => {
    protagonist = cachedProtagonist;
    let index = pageIndex()
    isBattle = false;

    if (interactibleObjects[index].monsters) {
        for (const monsterIndex in interactibleObjects[index].monsters) {
            squares[monsterIndex].classList.add('monster');
        }
    }

    if (interactibleObjects[index].npc) {
        for (const npcIndex in interactibleObjects[index].npc) {
            squares[npcIndex].classList.add('npc');
        }
    }

    for (const point of [557, 558, 559, 606, 607, 608, 609, 610, 656, 657, 658, 659, 660, 706, 707, 708, 709, 710, 757, 758, 759, 856, 857, 905, 906, 907, 908, 954, 955, 956, 957, 958, 959, 1003,1004,1005,1006,1007,1008,1009,1010,1012,1013,
                            1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,
                            1103,1104,1105,1106,1107,1108,1109,
                            1153,1154,1155,1156,1157,1158,
                            1203,1204,1205,1206,1207,
                            1253,1254,1255,1256,1257,
                            1303,1304,1305,1306,1307,1308,
                            1353,1354,1355,1357,1358,1359,
                            1404,1405,1408,1409,1410,
                            1453,1454,1459,1460,
                            1502,1503, 1509,1510,
                            1552,1553,1554, 1559,1560,1561,
                            1113,1163, 963, 911, 912, 913, 914, 915,
                            862, 863, 864, 812, 813, 814, 762, 763, 764, 712, 713, 714, 662, 663, 664, 612, 613, 614, 562, 563, 564, 512, 513, 514, 463
                        ]) {
        squares[point].classList.remove('character');
    }

    for (const point of [785, 789,
                            835, 836, 837, 838, 839,
                            884, 885, 886, 887, 888, 889, 890,
                            933, 934, 935, 936, 937, 938, 939, 940, 941,
                            983, 984, 985, 989, 990, 991,
                            1033,1034, 1037, 1040,1041,
                            1083,1084,1085,1089,1090,1091,
                            1133,1134,1135,1136,1137,1138,1139,1140,1141,
                            1184,1185,1186,1187,1188,1189,1190,
                            1235,1236,1237,1238,1239
                        ]) {
        squares[point].classList.remove('monster');
    }
}

pageSetUp(pageIndex(), pageIndex())


for (let i = 0; i < indoorSpace[3][454].length; i++) {
  squares[indoorSpace[3][454][i]].classList.add('wall');
}

function moveProtagonist(e) {
    squares[protagonist].classList.remove('character')

    console.log(protagonist)

    switch(e.key) {
        case 'ArrowLeft':
            if (isBattle) { cannotMoveInBattle(); break; }

            if (isBoundaryL() && isNextPageL()) {
                changePageL();
                break;
            }

            if (!isBoundaryL()) {
                if (isObjectL()) {
                    interaction(protagonist-1);
                } else {
                    moveR();
                }
                break;
            }

            break;

        case 'ArrowRight':
            if (isBattle) { cannotMoveInBattle(); break; }

            if (isBoundaryR() && isNextPageR()) {
                changePageR();
                break;
            }

            if (!isBoundaryR()) {
                if (isObjectR()) {
                    interaction(protagonist+1);
                } else {
                    moveL();
                }
                break;
            }

            break;

        case 'ArrowUp':
            if (isBattle) { cannotMoveInBattle(); break; }
            
            if (isBoundaryT() && isNextPageT()) {
                changePageT();
                break;
            }
            
            if (!isBoundaryT()) {
                if (isObjectT()) {
                    
                    if (isEntrance()) {
                        changeToEntrance();
                        break;
                    } 

                    interaction(protagonist-height);
                } else {
                    moveT();
                }
                break;
            }

            break;

        case 'ArrowDown':
            if (isBattle) { cannotMoveInBattle(); break; }
            
            if (isBoundaryB() && isNextPageB()) {
                changePageB()
                break;
            }

            if (!isBoundaryB() && !isExit()) {
                if (isObjectB()) {
                    interaction(protagonist+height);
                } else {
                    moveB();
                }
                break;
            }

            if (isExit()) {
                paintWalls.leave();
                protagonist = setEntrance;
                paintWalls.add();
                setEntrance = 0;
                break;
            }
            
            break;
        
        case 'm':
            if (map.classList.contains('displayMap')) {
                subtitle.innerHTML += '<hr class="custom-hr"><div class="text-item"><p>You pulled out your map see what quandrant of the world you\'re in.</p></div>';
                map.classList.remove('displayMap');
                grid.classList.add('displayGrid');
                
            } else {
                subtitle.innerHTML += '<hr class="custom-hr"><div class="text-item"><p>You stashed your map back into your pocket.</p></div>';
                map.classList.add('displayMap');
                grid.classList.remove('displayGrid');
            }
            break;

        case 'r':
            if (isBattle) {
                subtitle.innerHTML += '<hr class="custom-hr"><div class="text-item"><p>You\'ve successfully ran away from the monster.</p></div>';
                exitBattle();
                paintWalls.add();
            } else {
                subtitle.innerHTML += '<hr class="custom-hr"><div class="text-item"><p>You\'re currently not in battle to retreat.</p></div>';
            }
            break;

        case 'a':
            if (isBattle) {
                monsterData.hp = monsterData.hp - protagonistData.stats.current.attack;
                protagonistData.stats.current.hp = protagonistData.stats.current.hp - monsterData.attack;
                subtitle.innerHTML += `<hr class="custom-hr"><div class="text-item"><p>protagonist did ${protagonistData.stats.current.attack} damage, monster now has ${monsterData.hp} health points.</p></div>`;
                subtitle.innerHTML += `<hr class="custom-hr"><div class="text-item"><p>Monster did ${monsterData.attack} damage, protagonist now has ${protagonistData.stats.current.hp} health points.</p></div>`;

                if (monsterData.hp < 1) {
                    console.log('<hr class="custom-hr"><div class="text-item"><p>You have defeated the monster.</p></div>')
                    protagonistData.inventory.push(...monsterData.inventory);
                    protagonistData.exp += monsterData.exp;

                    if (protagonistData.exp >= expGauge[protagonistData.level]) {
                        protagonistData.level++;

                        protagonistData.stats.current.attack = levelStats[protagonistData.level].attack + protagonistData.equipment.weapon.attack;
                        protagonistData.stats.current.hp = levelStats[protagonistData.level].hp + protagonistData.equipment.attire.hp;


                        protagonistData.stats.base = {
                            hp: levelStats[protagonistData.level].hp + protagonistData.equipment.attire.hp,
                            attack: levelStats[protagonistData.level].attack + protagonistData.equipment.weapon.attack,
                        }; 


                        subtitle.innerHTML += '<hr class="custom-hr"><div class="text-item"><p>You have leveled up!</p></div>';
                    }

                    let lootMonsterMessage = '<hr class="custom-hr"><div class="text-item"><p>Protagonist looted the monster: </p><ul>';

                    monsterData.inventory.forEach((item) => {
                        lootMonsterMessage += `<li>${item.name}</li>`;
                    })
                    lootMonsterMessage += '</ul><p>(press \'I\' to check your inventory)</p></div>'

                    subtitle.innerHTML += lootMonsterMessage;

                    delete interactibleObjects[pageIndex()].monsters[monsterData.id];
                    exitBattle();
                    paintWalls.add();
                }
            } else {
                subtitle.innerHTML += '<hr class="custom-hr"><div class="text-item"><p>You swiped your mace into the breeze.</p></div>';
            }
            break;
        case 'i':
            if (!protagonistData.inventory.length) {
                subtitle.innerHTML += '<hr class="custom-hr"><div class="text-item"><p>Your inventory is empty.</p></div>';
                break;               
            }

            let inventoryItemsString = '';
            inventoryItemsString += `<hr class="custom-hr"><div class="text-item"><p>Your inventory includes:</p><ul>`;
            let i = 0;
            protagonistData.inventory.forEach((item) => {
                inventoryItemsString += `<li>[${i}]: ${item.name}</li>`; i++;
            })

            inventoryItemsString += `</ul><br><p>type in the input below the [number] of the item you want to equip/consume:</p></div>`;
            subtitle.innerHTML += inventoryItemsString;
            textScreen.style.height = '95vh';
            inputField.style.display = 'block';

            break;
        case 's':
            console.log('About you:')
            console.log(protagonistData);

            subtitle.innerHTML += `
                <hr class="custom-hr">
                <div class="text-item">
                    <p><b><u>Character:</u></b></p>
                    <table style="width: 25em;">
                        <tr>
                            <td>
                                <p><b>Level:</b></p>
                            </td>
                            <td>
                                <p>${protagonistData.level}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><b>Experience:</b></p>
                            </td>
                            <td>
                                <p>${protagonistData.exp}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><b>Equipment:</b></p>
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Weapon: ${protagonistData.equipment.weapon.name}</p>
                            </td>
                            <td>
                                <p>+${protagonistData.equipment.weapon[protagonistData.equipment.weapon.buff]} ${protagonistData.equipment.weapon.buff}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Attire: ${protagonistData.equipment.attire.name}</p>
                            </td>
                            <td>
                                <p>+${protagonistData.equipment.attire[protagonistData.equipment.attire.buff]} ${protagonistData.equipment.attire.buff}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><b>Stats:</b></p>
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>HP:</p>
                            </td>
                            <td>
                                <p>${protagonistData.stats.current.hp} / ${protagonistData.stats.base.hp}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>MP:</p>
                            </td>
                            <td>
                                <p>${protagonistData.stats.current.mp}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Attack:</p>
                            </td>
                            <td>
                                <p>${protagonistData.stats.current.attack}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Magic:</p>
                            </td>
                            <td>
                                <p>${protagonistData.stats.current.magic}</p>
                            </td>
                        </tr>
                    </table>
                </div>
                `;

            break;
        case 'Enter':
            if(!isNumber(inputField.value)) {
                subtitle.innerHTML += `<hr class="custom-hr"><div class="text-item"><p>'${inputField.value}' is not a valid selection.</p></div>`;
                break;
            }

            textScreen.style.height = '100vh';
            inputField.style.display = 'none';

            if (isBattle) {
                protagonistData.stats.current.hp = protagonistData.stats.current.hp - monsterData.attack;
                subtitle.innerHTML += `<hr class="custom-hr"><div class="text-item"><p>Monster did ${monsterData.attack} damage, protagonist now has ${protagonistData.stats.current.hp} health points.</p></div>`;
            }

            // equipable
            if (protagonistData.inventory[inputField.value].equipable) {

                subtitle.innerHTML += `<hr class="custom-hr"><div class="text-item">You equipped a ${protagonistData.inventory[inputField.value].name}.<p></p></div>`;

                // Example Objects:
                // equipment: {equipable: 'weapon', buff: 'attack'}
                // equipment: {equipable: 'attire', buff: 'hp'}
                const equipment = protagonistData.inventory[inputField.value]; 

                // subtrack wep attack
                protagonistData.stats.current[equipment.buff] -=  protagonistData.equipment[equipment.equipable][equipment.buff];
                protagonistData.stats.base[equipment.buff] -=  protagonistData.equipment[equipment.equipable][equipment.buff];

                // place current wep in inventory
                protagonistData.inventory.push(protagonistData.equipment[equipment.equipable]);

                // equip new wep
                protagonistData.equipment[equipment.equipable] = equipment;

                // rem wep from inventory
                protagonistData.inventory.splice(inputField.value, 1);

                // add wep buff
                protagonistData.stats.current[equipment.buff] +=  protagonistData.equipment[equipment.equipable][equipment.buff];
                protagonistData.stats.base[equipment.buff] +=  protagonistData.equipment[equipment.equipable][equipment.buff];
                inputField.value = ''; break;
            }

            // consumable
            if (protagonistData.inventory[inputField.value].consumable) {

                subtitle.innerHTML += `<hr class="custom-hr"><div class="text-item">You used consumable ${protagonistData.inventory[inputField.value].name}.<p></p></div>`;

                const consumable = protagonistData.inventory[inputField.value].consumable;

                // add consumable buff
                protagonistData.stats.current[consumable] += protagonistData.inventory[inputField.value][[consumable]];

                // check current buff is great than base stats
                if (protagonistData.stats.current[consumable] > protagonistData.stats.base[consumable]) {
                    protagonistData.stats.current[consumable] = protagonistData.stats.base[consumable]
                }

                // rem consumable from inventory
                protagonistData.inventory.splice(inputField.value, 1);
                inputField.value = ''; break;

            }

    }

    textScreen.scrollTop = textScreen.scrollHeight;
    squares[protagonist].classList.add('character')
}

const isNumber = (inputValue) => {
    return inputField.value && /^\d+$/.test(inputValue);
}

const isEntrance = () => {
    const notEmpty = entrance[pageIndex()].filter(place => place === protagonist)
    return notEmpty.length > 0;
}

const isExit = () => {
    if (setEntrance == 0) {
        return 0;
    }
    const notEmpty = exit[pageIndex()][setEntrance].filter(place => place === protagonist)
    return notEmpty.length > 0;
}

const changeToEntrance = () => {
    setEntrance = entrance[pageIndex()].filter(place => place === protagonist)[0];
    protagonist = entry[pageIndex()][setEntrance][0];
    
    paintWalls.remove();
    paintWalls.entrance()
}


const isBoundaryR = () => protagonist % width > width - 2; 
const isBoundaryL = () => protagonist % width === 0; 
const isBoundaryT = () => protagonist < height; 
const isBoundaryB = () => protagonist + height > totalSquareFootage; 

const isNextPageR = () => pageIndex() + 1 <= 8 && (pageIndex()+1)%3 !== 0; 
const isNextPageL = () => pageIndex() - 1 >= 0 && (pageIndex())%3; 
const isNextPageT = () => pageIndex() - 3 >= 0; 
const isNextPageB = () => pageIndex() + 3 <= 8; 

const isObjectL = () => squares[protagonist-1].classList.length > 0;
const isObjectR = () => squares[protagonist+1].classList.length > 0;
const isObjectT = () => squares[protagonist-height].classList.length > 0;
const isObjectB = () => squares[protagonist+height].classList.length > 0;

const moveR = () => protagonist -=1;
const moveL = () => protagonist +=1;
const moveT = () => protagonist -=height;
const moveB = () => protagonist +=height;


const changePageL = () => {
    protagonist = protagonist + (width - 1);
    paintWalls.remove();
    pageSetUp(pageIndex(), pageIndex('LEFT'))
    paintWalls.add();
}

const changePageR = () => {
    protagonist = protagonist - (width - 1);
    paintWalls.remove();
    pageSetUp(pageIndex(), pageIndex('RIGHT'))
    paintWalls.add();
}

const changePageT = () => {
    protagonist = totalSquareFootage + (moveT());
    paintWalls.remove();
    pageSetUp(pageIndex(), pageIndex('UP'))
    paintWalls.add();
}

const changePageB = () => {
    protagonist = (moveB()) - totalSquareFootage;
    paintWalls.remove();
    pageSetUp(pageIndex(), pageIndex('DOWN'))
    paintWalls.add();
}


const paintWalls = {
    add: () => {
        for (let i = 0; i < page[(pageIndex())].length; i++) {
            squares[page[(pageIndex())][i]].classList.add('wall');
        }
    },
    remove: () => {
        for (let i = 0; i < page[(pageIndex())].length; i++) {
            squares[page[(pageIndex())][i]].classList.remove('wall');
        }
    },
    entrance: () => {
        for (let i = 0; i < indoorSpace[pageIndex()][setEntrance].length; i++) {
            squares[indoorSpace[pageIndex()][setEntrance][i]].classList.add('wall');
        }
    },
    leave: () => {
        for (let i = 0; i < indoorSpace[pageIndex()][setEntrance].length; i++) {
            squares[indoorSpace[pageIndex()][setEntrance][i]].classList.remove('wall');
        }
    }
}

const cannotMoveInBattle = () => {
    console.log('You\'re in battle! Press \'R\' to retreat.')
}

const interaction = (index)=> {
    switch(squares[index].classList[0]) {
        case 'npc':
            const npcContent = interactibleObjects[pageIndex()].npc[index];
            subtitle.innerHTML += `<hr class="custom-hr"><div class="text-item">
                <p>(NPC)<b>${npcContent.name}</b>: ${npcContent.dialogue[0]}</p>
                <p>HP: ${npcContent.hp} MP: ${npcContent.mp}</p>
                </div>
            `; break;
        case 'monster':
            monsterData = interactibleObjects[pageIndex()].monsters[index];
            paintWalls.remove();
            enterBattle();

            let battleEngageString = `<hr class="custom-hr"><div class="text-item">
                <p>(Monster)<b><b>${monsterData.name}:</b></b> ${monsterData.dialogue[0]}</p>
                <p><b>HP:</b> ${monsterData.hp} <b>MP:</b> ${monsterData.mp}</p>
                <p>Press: </p>
                <ul>`;
                battleEngageString += '<li>\'A\' to attack</li><li>\'R\' to retreat</li><li>\'I\' to use your inventory</li></ul></div>';
            
            subtitle.innerHTML += battleEngageString;
            break;
            
        case 'wall':
            subtitle.innerHTML += '<hr class="custom-hr"><div class="text-item"><p>You\'ve hit a wall</p></div>'; break;
        default:
            subtitle.innerHTML += '<hr class="custom-hr"><div class="text-item"><p>There\'s an object in front of you</p></div>'; break;
        }
        textScreen.appendChild(subtitle);
}

document.addEventListener('keydown', moveProtagonist)