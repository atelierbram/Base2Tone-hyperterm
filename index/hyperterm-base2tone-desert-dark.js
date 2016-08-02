/* Base2Tone Base2Tone-Desert Dark colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm) based on HyperTerm-DuoTone-Dark by Wilson Miner (https://github.com/wilsonminer/hyperterm-duotone-dark)
 */

const backgroundColor = '#292824';
const foregroundColor = '#ada794';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#dd7c3c'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#81744b', //  red
  '#ec9255', //  green
  '#ffb380', //  yellow
  '#958550', //  blue
  '#ec9255', //  magenta
  '#ac9753', //  cyan
  '#ada794', //  white
  '#7e7967', //  lightBlack
  '#f29d63', //  lightRed
  '#3d3a34', //  lightGreen
  '#615e51', //  lightYellow
  '#908974', //  lightBlue
  '#ddd0a6', //  lightMagenta
  '#e58748', //  lightCyan
  '#f2ecd9'  //  lightWhite
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
        background-color: #292824 !important;
        border: none !important;
      }
      .tab_tab {
        color: #908974 !important; 
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #292824;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #292824;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #ada794 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #958550 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #292824 !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #292824 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

