/* Base2Tone Base2Tone-Porch Dark colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm) based on HyperTerm-DuoTone-Dark by Wilson Miner (https://github.com/wilsonminer/hyperterm-duotone-dark)
 */

const backgroundColor = '#221e24';
const foregroundColor = '#9f95a3';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#e17f47'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#9466a3', //  red
  '#f39b68', //  green
  '#ffc29e', //  yellow
  '#a77cb6', //  blue
  '#f39b68', //  magenta
  '#ba95c6', //  cyan
  '#9f95a3', //  white
  '#645a68', //  lightBlack
  '#f8aa7c', //  lightRed
  '#302a32', //  lightGreen
  '#574e5a', //  lightYellow
  '#716774', //  lightBlue
  '#dfcbe6', //  lightMagenta
  '#ec8d55', //  lightCyan
  '#f2e3f7'  //  lightWhite
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
        background-color: #221e24 !important;
        border: none !important;
      }
      .tab_tab {
        color: #716774 !important; 
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #221e24;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #221e24;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #9f95a3 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #a77cb6 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #221e24 !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #221e24 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

