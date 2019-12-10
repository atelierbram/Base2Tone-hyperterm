/* Base2Tone Base2Tone-Porch Light colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */

const backgroundColor = '#fcf9f8';
const foregroundColor = '#f39b68';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#d97136'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#c46731', //  red
  '#ec8d55', //  green
  '#f39b68', //  yellow
  '#674573', //  blue
  '#e17f47', //  magenta
  '#ba95c6', //  cyan
  '#b3a9a2', //  white
  '#574e5a', //  lightBlack
  '#cdacd7', //  lightRed
  '#b3aab5', //  lightGreen
  '#f8aa7c', //  lightYellow
  '#ba95c6', //  lightBlue
  '#c4bbb5', //  lightMagenta
  '#dfcbe6', //  lightCyan
  '#fcf9f8' //  lightWhite
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
        background-color: #fcf9f8 !important;
        border: none !important;
      }
      .tab_tab {
        color: #b3a9a2 !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: .5px;
        background-color: #fcf9f8;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        display: none;
        border-bottom-color: #fcf9f8;
      }
      .tabs_title, .tab_icon, .tab_tab.tab_active {
        color: #9466a3 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #a77cb6 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.075);
        border-left: 2px solid #fcf9f8;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab.tab_active .tab_text,
      .tab_tab:hover .tab_text {
        background-color: #fcf9f8 !important;
        box-shadow: none;
      }
      `
  })
}

