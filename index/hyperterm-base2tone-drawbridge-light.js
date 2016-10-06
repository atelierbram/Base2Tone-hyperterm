/* Base2Tone Base2Tone-Drawbridge Light colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */

const backgroundColor = '#f9fbfb';
const foregroundColor = '#67c9e4';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#33abcc'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#289dbd', //  red
  '#5cbcd6', //  green
  '#67c9e4', //  yellow
  '#4961da', //  blue
  '#4db0cb', //  magenta
  '#8b9efd', //  cyan
  '#a6aeb0', //  white
  '#444b6f', //  lightBlack
  '#a5b3fe', //  lightRed
  '#a6aab9', //  lightGreen
  '#75d5f0', //  lightYellow
  '#8b9efd', //  lightBlue
  '#b7c0c2', //  lightMagenta
  '#c3cdfe', //  lightCyan
  '#f9fbfb' //  lightWhite
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
        background-color: #f9fbfb !important;
        border: none !important;
      }
      .tab_tab {
        color: #a6aeb0 !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: .5px;
        background-color: #f9fbfb;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        display: none;
        border-bottom-color: #f9fbfb;
      }
      .tabs_title, .tab_icon, .tab_tab.tab_active {
        color: #627af4 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #7289fd !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.075);
        border-left: 2px solid #f9fbfb;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab.tab_active .tab_text,
      .tab_tab:hover .tab_text {
        background-color: #f9fbfb !important;
        box-shadow: none;
      }
      `
  })
}

