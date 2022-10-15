import { Meta, StoryObj} from "@storybook/react";
import { TextInput, TextInputRootProps, TextInputInputProps } from "./TextInput";

export default {
  title : "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: (
      <TextInput.Input placeholder="Digite um texto" />
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {};

