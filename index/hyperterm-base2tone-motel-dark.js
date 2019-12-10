/* Base2Tone Base2Tone-Motel Dark colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm) based on HyperTerm-DuoTone-Dark by Wilson Miner (https://github.com/wilsonminer/hyperterm-duotone-dark)
 */

const backgroundColor = '#242323';
const foregroundColor = '#a5979a';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#f6684c'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#956f76', //  red
  '#f8917c', //  green
  '#ffc8bd', //  yellow
  '#a7868b', //  blue
  '#f8917c', //  magenta
  '#b89da2', //  cyan
  '#a5979a', //  white
  '#766b6c', //  lightBlack
  '#ffa28f', //  lightRed
  '#373434', //  lightGreen
  '#5a5354', //  lightYellow
  '#86797b', //  lightBlue
  '#dec9cc', //  lightMagenta
  '#f77c64', //  lightCyan
  '#f0dbdf'  //  lightWhite
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
        background-color: #242323 !important;
        border: none !important;
      }
      .tab_tab {
        color: #86797b !important; 
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #242323;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #242323;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #a5979a !important;
      }
      .tab_tab.tab_hasActivity {
        color: #a7868b !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #242323 !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #242323 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

