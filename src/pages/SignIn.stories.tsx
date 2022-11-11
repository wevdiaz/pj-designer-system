import { Meta, StoryObj} from "@storybook/react";
import { SignIn } from "./SignIn";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title : "Pages/Sign in",
  component: SignIn,
  args: {},
  argTypes: {},
} as Meta

export const Default: StoryObj = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByPlaceholderText("Digite o seu email"), "yokito@bol.com.br");
    userEvent.type(canvas.getByPlaceholderText("******"), "12345678");

    userEvent.click(canvas.getByRole("button"));
  }
};

