import { Meta, StoryObj} from "@storybook/react";
import { TextInput, TextInputRootProps, TextInputInputProps } from "./TextInput";
import { Envelope } from "phosphor-react";

export default {
  title : "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [      
        <TextInput.icon>
          <Envelope />          
        </TextInput.icon>,
        <TextInput.Input placeholder="Digite um texto" />      
    ]
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


export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <TextInput.Input placeholder="Digite um texto" /> 
    )
  }
};

