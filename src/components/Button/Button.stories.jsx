import * as React from "react";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  description: `A button.`,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    primary: { control: "boolean" },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args}>Click me</Button>;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  backgroundColor: "#A78BFA",
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  color: "#1E40AF",
};

export const OnClick = Template.bind({});
OnClick.args = {
  // eslint-disable-next-line no-alert
  onClick: () => alert("Clicked the button!"),
};
