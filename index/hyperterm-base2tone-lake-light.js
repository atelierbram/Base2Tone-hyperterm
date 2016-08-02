/* Base2Tone Base2Tone-Lake Light colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */

const backgroundColor = '#fafaf9';
const foregroundColor = '#cbbb4d';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#978611'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#84740b', //  red
  '#c4b031', //  green
  '#cbbb4d', //  yellow
  '#2f7289', //  blue
  '#b7a21a', //  magenta
  '#62b1cb', //  cyan
  '#b1afa5', //  white
  '#44646f', //  lightBlack
  '#7dc2d9', //  lightRed
  '#a6b5b9', //  lightGreen
  '#d8c964', //  lightYellow
  '#62b1cb', //  lightBlue
  '#c2c1b7', //  lightMagenta
  '#a5d8e9', //  lightCyan
  '#fafaf9' //  lightWhite
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
        background-color: #fafaf9 !important;
        border: none !important;
      }
      .tab_tab {
        color: #b1afa5 !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: .5px;
        background-color: #fafaf9;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        display: none;
        border-bottom-color: #fafaf9;
      }
      .tabs_title, .tab_icon, .tab_tab.tab_active {
        color: #3e91ac !important;
      }
      .tab_tab.tab_hasActivity {
        color: #499fbc !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.075);
        border-left: 2px solid #fafaf9;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab.tab_active .tab_text,
      .tab_tab:hover .tab_text {
        background-color: #fafaf9 !important;
        box-shadow: none;
      }
      `
  })
}

