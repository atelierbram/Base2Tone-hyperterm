/* Base2Tone Base2Tone-Morning Dark colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm) based on HyperTerm-DuoTone-Dark by Wilson Miner (https://github.com/wilsonminer/hyperterm-duotone-dark)
 */

const backgroundColor = '#232834';
const foregroundColor = '#8d95a5';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#896724'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#1659df', //  red
  '#b29762', //  green
  '#e5ddcd', //  yellow
  '#3d75e6', //  blue
  '#b29762', //  magenta
  '#728fcb', //  cyan
  '#8d95a5', //  white
  '#656e81', //  lightBlack
  '#c6b28b', //  lightRed
  '#31363f', //  lightGreen
  '#4f5664', //  lightYellow
  '#707a8f', //  lightBlue
  '#b7c9eb', //  lightMagenta
  '#9a7c42', //  lightCyan
  '#dee6f7'  //  lightWhite
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
        background-color: #232834 !important;
        border: none !important;
      }
      .tab_tab {
        color: #707a8f !important; 
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #232834;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #232834;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #8d95a5 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #3d75e6 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #232834 !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #232834 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

