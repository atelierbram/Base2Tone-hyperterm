/* Base2Tone Base2Tone-Heath Dark colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm) based on HyperTerm-DuoTone-Dark by Wilson Miner (https://github.com/wilsonminer/hyperterm-duotone-dark)
 */

const backgroundColor = '#222022';
const foregroundColor = '#9e999f';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#b87414'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#8f6c93', //  red
  '#cc8c33', //  green
  '#ffd599', //  yellow
  '#9a819c', //  blue
  '#cc8c33', //  magenta
  '#cb79d2', //  cyan
  '#9e999f', //  white
  '#635f63', //  lightBlack
  '#d9b98c', //  lightRed
  '#2f2d2f', //  lightGreen
  '#575158', //  lightYellow
  '#6f6b70', //  lightBlue
  '#eaa8f0', //  lightMagenta
  '#c38022', //  lightCyan
  '#fdebff'  //  lightWhite
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
        background-color: #222022 !important;
        border: none !important;
      }
      .tab_tab {
        color: #6f6b70 !important; 
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #222022;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #222022;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #9e999f !important;
      }
      .tab_tab.tab_hasActivity {
        color: #9a819c !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #222022 !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #222022 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

