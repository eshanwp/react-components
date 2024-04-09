import type { Meta, StoryObj } from '@storybook/react';
import RcInput from 'components/input/rc-input.tsx';

const meta = {
    title: 'Components/RcInput',
    component: RcInput,
    tags: ['autodocs'],
} satisfies Meta<typeof RcInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
    name: 'Input',
} satisfies Story;
