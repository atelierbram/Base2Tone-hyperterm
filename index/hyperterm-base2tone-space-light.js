/* Base2Tone Base2Tone-Space Light colorscheme adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */

const backgroundColor = '#fbf9f9';
const foregroundColor = '#ec7336';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#cb5c25'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#b25424', //  red
  '#e66e33', //  green
  '#ec7336', //  yellow
  '#5151e6', //  blue
  '#dd672c', //  magenta
  '#8a8aad', //  cyan
  '#b1a9a5', //  white
  '#515167', //  lightBlack
  '#aaaaca', //  lightRed
  '#b8b8c7', //  lightGreen
  '#f37b3f', //  lightYellow
  '#8a8aad', //  lightBlue
  '#c3bbb7', //  lightMagenta
  '#cecee3', //  lightCyan
  '#fbf9f9' //  lightWhite
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
        background-color: #fbf9f9 !important;
        border: none !important;
      }
      .tab_tab {
        color: #b1a9a5 !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: .5px;
        background-color: #fbf9f9;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        display: none;
        border-bottom-color: #fbf9f9;
      }
      .tabs_title, .tab_icon, .tab_tab.tab_active {
        color: #7676f4 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #767693 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.075);
        border-left: 2px solid #fbf9f9;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab.tab_active .tab_text,
      .tab_tab:hover .tab_text {
        background-color: #fbf9f9 !important;
        box-shadow: none;
      }
      `
  })
}

