/* Base2Tone Base2Tone-Forest Dark colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm) based on HyperTerm-DuoTone-Dark by Wilson Miner (https://github.com/wilsonminer/hyperterm-duotone-dark)
 */

const backgroundColor = '#2a2d2a';
const foregroundColor = '#a1b5a1';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#a2b34d'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#5c705c', //  red
  '#bfd454', //  green
  '#e5fb79', //  yellow
  '#687d68', //  blue
  '#bfd454', //  magenta
  '#8fae8f', //  cyan
  '#a1b5a1', //  white
  '#535f53', //  lightBlack
  '#cbe25a', //  lightRed
  '#353b35', //  lightGreen
  '#485148', //  lightYellow
  '#5e6e5e', //  lightBlue
  '#c8e4c8', //  lightMagenta
  '#b1c44f', //  lightCyan
  '#f0fff0'  //  lightWhite
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
        background-color: #2a2d2a !important;
        border: none !important;
      }
      .tab_tab {
        color: #5e6e5e !important; 
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #2a2d2a;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #2a2d2a;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #a1b5a1 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #687d68 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #2a2d2a !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #2a2d2a !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

