/* Base2Tone Base2Tone-Garden Light colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */

const backgroundColor = '#fbfaf8';
const foregroundColor = '#db9257';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#c96a1d'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#bd5d0f', //  red
  '#dd843c', //  green
  '#db9257', //  yellow
  '#1c8217', //  blue
  '#d97726', //  magenta
  '#6bcc66', //  cyan
  '#b7aa9f', //  white
  '#505350', //  lightBlack
  '#90d98c', //  lightRed
  '#aab1aa', //  lightGreen
  '#dba070', //  lightYellow
  '#6bcc66', //  lightBlue
  '#c7bcb2', //  lightMagenta
  '#b7e3b5', //  lightCyan
  '#fbfaf8' //  lightWhite
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
        background-color: #fbfaf8 !important;
        border: none !important;
      }
      .tab_tab {
        color: #b7aa9f !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: .5px;
        background-color: #fbfaf8;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        display: none;
        border-bottom-color: #fbfaf8;
      }
      .tabs_title, .tab_icon, .tab_tab.tab_active {
        color: #3fac39 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #4cb946 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.075);
        border-left: 2px solid #fbfaf8;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab.tab_active .tab_text,
      .tab_tab:hover .tab_text {
        background-color: #fbfaf8 !important;
        box-shadow: none;
      }
      `
  })
}

