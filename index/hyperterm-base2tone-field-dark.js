/* Base2Tone Base2Tone-Field Dark colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm) based on HyperTerm-DuoTone-Dark by Wilson Miner (https://github.com/wilsonminer/hyperterm-duotone-dark)
 */

const backgroundColor = '#18201e';
const foregroundColor = '#8ea4a0';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#15c15d'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#0fbda0', //  red
  '#3be381', //  green
  '#85ffb8', //  yellow
  '#25d0b4', //  blue
  '#3be381', //  magenta
  '#40ddc3', //  cyan
  '#8ea4a0', //  white
  '#5a6d6a', //  lightBlack
  '#55ec94', //  lightRed
  '#242e2c', //  lightGreen
  '#42524f', //  lightYellow
  '#667a77', //  lightBlue
  '#88f2e0', //  lightMagenta
  '#25d46e', //  lightCyan
  '#a8fff1'  //  lightWhite
]

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    cursorColor: cursorColor,
    borderColor: borderColor,
    colors: colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node[focus="true"] {
         opacity: .33 !important;
       }
    `,
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: #18201e !important;
        border: none !important;
      }
      .tab_tab {
        color: #667a77 !important; 
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #18201e;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #18201e;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #8ea4a0 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #25d0b4 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #18201e !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #18201e !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

