/* ============================================================
   LOOPWARE CATALOG — edit THIS file, commit, done.
   One object = one row on the bench ledger.
   · id    : unique slug, no spaces (used by cart & price-check)
   · cat   : 'laptops' | 'tablets' | 'phones' | 'audio'
   · grade : 'A' | 'B' | 'C'      · stock: units left (0 = SOLD)
   · price : this unit's price in QAR
   · was   : new RRP in QAR (drives the "you save" math)
   · co2   : kg CO₂ saved         · badge: optional chip text
   Price-check receipt tabs = ids listed in FEATURED_IDS.
   ============================================================ */
const CATS=['laptops','tablets','phones','audio'];
const CO2_DEFAULT={laptops:210,tablets:90,phones:65,audio:12};

const DEFAULT_PRODUCTS=[
  {id:'x1c',   cat:'laptops',name:'ThinkPad X1 Carbon G9',  tag:'the corporate workhorse, freed.',            specs:'I7-1165G7 · 16GB · 512GB · 2.2K IPS',  grade:'A', stock:3, price:2999, was:5999, co2:240},
  {id:'x1cg8', cat:'laptops',name:'ThinkPad X1 Carbon G8',  tag:'one gen back, half the damage.',             specs:'I7-10510U · 16GB · 256GB · FHD',       grade:'B', stock:2, price:1599, was:4999, co2:220},
  {id:'mba',   cat:'laptops',name:'MacBook Air M1',         tag:'silent, cool, effectively immortal.',        specs:'M1 · 8GB · 256GB · RETINA',            grade:'A', stock:5, price:2099, was:4499, co2:190},
  {id:'mbp14', cat:'laptops',name:'MacBook Pro 14″ M1 Pro', tag:'pro power, half the invoice.',               specs:'M1 PRO · 16GB · 1TB · XDR',            grade:'B', stock:2, price:3899, was:8999, co2:280},
  {id:'t480',  cat:'laptops',name:'ThinkPad T480',          tag:'the last upgradable tank. new cells fitted.',specs:'I5-8250U · 16GB · 256GB · NEW BATT.',  grade:'C', stock:4, price:649,  was:3999, co2:210, badge:'BEST VALUE'},
  {id:'xps',   cat:'laptops',name:'Dell XPS 13 9310',       tag:'bezel-less beauty, honest scratches.',       specs:'I7-1185G7 · 16GB · 512GB · FHD+',      grade:'C', stock:1, price:1549, was:5499, co2:230, badge:'FINAL UNIT'},
  {id:'ipad',  cat:'tablets',name:'iPad Air (4th gen)',     tag:'lectures, sketches, the couch.',             specs:'A14 · 64GB · WI-FI · 10.9″',           grade:'B', stock:6, price:999,  was:2699, co2:90},
  {id:'ip13',  cat:'phones', name:'iPhone 13',              tag:'battery at 91%. everything else, better.',   specs:'A15 · 128GB · MIDNIGHT',               grade:'A', stock:4, price:1499, was:3299, co2:65},
  {id:'xm4',   cat:'audio',  name:'Sony WH-1000XM4',        tag:'noise cancelled, savings loud.',             specs:'ANC · 30H BATTERY · USB-C',            grade:'A', stock:8, price:549,  was:1299, co2:12}
];

const FEATURED_IDS=['x1c','mba','ipad'];
