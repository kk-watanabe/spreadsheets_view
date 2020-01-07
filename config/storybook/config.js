import { configure, addDecorator } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "storybook-addon-vue-info";

import "@/assets/scss/style.scss";

addDecorator(withInfo);
addDecorator(withKnobs);

const req = require.context("../../src/stories/", true, /.stories.ts$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
