/* Base2Tone Base2Tone-Earth Light colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */

const backgroundColor = '#f2efe8';
const foregroundColor = '#d9b154';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#b3944d'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#9c8349', //  red
  '#cda956', //  green
  '#d9b154', //  yellow
  '#6f5849', //  blue
  '#bfa05a', //  magenta
  '#967e6e', //  cyan
  '#aaa392', //  white
  '#5b534d', //  lightBlack
  '#a48774', //  lightRed
  '#c7beb8', //  lightGreen
  '#e6b84d', //  lightYellow
  '#967e6e', //  lightBlue
  '#bbb4a5', //  lightMagenta
  '#dfb99f', //  lightCyan
  '#f2efe8' //  lightWhite
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
        background-color: #f2efe8 !important;
        border: none !important;
      }
      .tab_tab {
        color: #aaa392 !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: .5px;
        background-color: #f2efe8;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        display: none;
        border-bottom-color: #f2efe8;
      }
      .tabs_title, .tab_icon, .tab_tab.tab_active {
        color: #816d5f !important;
      }
      .tab_tab.tab_hasActivity {
        color: #88786d !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.075);
        border-left: 2px solid #f2efe8;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab.tab_active .tab_text,
      .tab_tab:hover .tab_text {
        background-color: #f2efe8 !important;
        box-shadow: none;
      }
      `
  })
}

