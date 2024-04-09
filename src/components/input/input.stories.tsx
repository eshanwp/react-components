import type { Meta, StoryObj } from '@storybook/react';
import Input from 'components/input/input.tsx';

const meta = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
    name: 'Input',
} satisfies Story;
