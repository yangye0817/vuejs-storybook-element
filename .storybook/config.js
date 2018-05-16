// config.js
import { configure, addDecorator } from '@storybook/vue';
// addons
import { withKnobs } from '@storybook/addon-knobs/vue';
import { setConsoleOptions } from '@storybook/addon-console'

/**
 * import plugins
 */
import '../src/plugins'
import '../src/i18n'

// for redirect console log
const panelExclude = setConsoleOptions({}).panelExclude;
setConsoleOptions({
  panelExclude: [...panelExclude],
});

// add decorator
addDecorator(withKnobs)

function loadStories() {
  const req = require.context('../src/components/', true, /\.stories\.js$/)
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
