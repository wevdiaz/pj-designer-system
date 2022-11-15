import { Meta, StoryObj} from "@storybook/react";
import { SignIn } from "./SignIn";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title : "Pages/Sign in",
  component: SignIn,
  args: {},
  argTypes: {},
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByPlaceholderText("Digite o seu email"), "yokito@bol.com.br");
    userEvent.type(canvas.getByPlaceholderText("******"), "12345678");

    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      return expect(canvas.getByText("Login realizado com sucesso!")).toBeInTheDocument();
    });
  }
};

