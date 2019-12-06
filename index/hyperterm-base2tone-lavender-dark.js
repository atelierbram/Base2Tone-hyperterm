/* Base2Tone Base2Tone-Lavender Dark colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm) based on HyperTerm-DuoTone-Dark by Wilson Miner (https://github.com/wilsonminer/hyperterm-duotone-dark)
 */

const backgroundColor = '#201d2a';
const foregroundColor = '#9992b0';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#c16bff'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#9375f5', //  red
  '#d294ff', //  green
  '#ecd1ff', //  yellow
  '#a286fd', //  blue
  '#d294ff', //  magenta
  '#b5a0fe', //  cyan
  '#9992b0', //  white
  '#625a7c', //  lightBlack
  '#dba8ff', //  lightRed
  '#2c2839', //  lightGreen
  '#4b455f', //  lightYellow
  '#6e658b', //  lightBlue
  '#dcd2fe', //  lightMagenta
  '#ca80ff', //  lightCyan
  '#efebff'  //  lightWhite
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
        background-color: #201d2a !important;
        border: none !important;
      }
      .tab_tab {
        color: #6e658b !important; 
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #201d2a;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #201d2a;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #9992b0 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #a286fd !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #201d2a !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #201d2a !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

