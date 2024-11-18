import { within, userEvent } from "@storybook/testing-library";
import { CustomButton } from "../components/CustomButton";

export default {
  title: "Test/CustomButton",
  component: CustomButton,
  args: {
    label: "Button",
  },
};

export const Solid = {
  args: {
    variant: "solid",
  },
  parameters: {
    backgrounds: {
      values: [
        {
          name: "blue",
          value: "blue",
        },
        {
          name: "red",
          value: "red",
        },
      ],
    },
  },
};

export const Outline = {
  args: {
    variant: "outline",
  },
};

export const Small = {
  args: {
    size: "sm",
    label: "나만의 버튼 만들기",
    backgroundColor: "#ebb6e2",
  },
};

export const Medium = {
  args: {
    size: "md",
  },
};

export const Large = {
  args: {
    size: "lg",
  },
};

export const ClickTestButton = {
  args: {
    variant: "outline",
    label: "Click!",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const primaryButton = await canvas.getByRole("button", {
      name: /Click/i,
    });
    await userEvent.click(primaryButton);
  },
};
