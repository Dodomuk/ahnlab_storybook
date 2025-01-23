import type { Meta, StoryObj } from "@storybook/react";

import { Sampleview } from "./Sampleview";

const meta = {
  title: "Example/Sampleview",
  component: Sampleview,
  parameters: {},
  tags: [],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Sampleview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
