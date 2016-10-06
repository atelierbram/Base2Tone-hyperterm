/* Base2Tone Base2Tone-Drawbridge Dark colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm) based on HyperTerm-DuoTone-Dark by Wilson Miner (https://github.com/wilsonminer/hyperterm-duotone-dark)
 */

const backgroundColor = '#1b1f32';
const foregroundColor = '#9094a7';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#4db0cb'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#627af4', //  red
  '#67c9e4', //  green
  '#99e9ff', //  yellow
  '#7289fd', //  blue
  '#67c9e4', //  magenta
  '#8b9efd', //  cyan
  '#9094a7', //  white
  '#51587b', //  lightBlack
  '#75d5f0', //  lightRed
  '#252a41', //  lightGreen
  '#444b6f', //  lightYellow
  '#5e6587', //  lightBlue
  '#c3cdfe', //  lightMagenta
  '#5cbcd6', //  lightCyan
  '#e1e6ff'  //  lightWhite
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
        background-color: #1b1f32 !important;
        border: none !important;
      }
      .tab_tab {
        color: #5e6587 !important; 
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #1b1f32;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #1b1f32;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #9094a7 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #7289fd !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #1b1f32 !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #1b1f32 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

