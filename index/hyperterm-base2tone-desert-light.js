/* Base2Tone Base2Tone-Desert Light colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */

const backgroundColor = '#fbfaf9';
const foregroundColor = '#ec9255';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#d37231'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#bc672f', //  red
  '#e58748', //  green
  '#ec9255', //  yellow
  '#5c553d', //  blue
  '#dd7c3c', //  magenta
  '#ac9753', //  cyan
  '#b9b1ac', //  white
  '#615e51', //  lightBlack
  '#c6b57b', //  lightRed
  '#bbb6a5', //  lightGreen
  '#f29d63', //  lightYellow
  '#ac9753', //  lightBlue
  '#cac3be', //  lightMagenta
  '#ddd0a6', //  lightCyan
  '#fbfaf9' //  lightWhite
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
        background-color: #fbfaf9 !important;
        border: none !important;
      }
      .tab_tab {
        color: #b9b1ac !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: .5px;
        background-color: #fbfaf9;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        display: none;
        border-bottom-color: #fbfaf9;
      }
      .tabs_title, .tab_icon, .tab_tab.tab_active {
        color: #81744b !important;
      }
      .tab_tab.tab_hasActivity {
        color: #958550 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.075);
        border-left: 2px solid #fbfaf9;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab.tab_active .tab_text,
      .tab_tab:hover .tab_text {
        background-color: #fbfaf9 !important;
        box-shadow: none;
      }
      `
  })
}

