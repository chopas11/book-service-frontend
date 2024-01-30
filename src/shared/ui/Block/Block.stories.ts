import type { Meta, StoryObj } from '@storybook/react';

import Block from './Block';

const meta = {
    title: 'Story-Sphere/UI/Block',
    component: Block,
    parameters: {
        // layout: 'centered',
    },
    // tags: ['autodocs'],
    argTypes: {
        bgColor: { control: 'color' },
        color: { control: 'color' },
        // padding: { control: 'color' },
    },
} satisfies Meta<typeof Block>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Lil: Story = {
    args: {
        bgColor: "#9f9ff1",
        color: "#1a1a19",
        padding: "12px",
        bdRadius: "24px",
        children: "Текст"
    },
};

export const Green: Story = {
    args: {
        bgColor: "#36ce7d",
        color: "#1a1a19",
        padding: "12px",
        bdRadius: "24px",
        children: "Текст"
    },
};

export const Blue: Story = {
    args: {
        bgColor: "#555cf0",
        color: "#1a1a19",
        padding: "12px",
        bdRadius: "24px",
        children: "Текст"
    },
};