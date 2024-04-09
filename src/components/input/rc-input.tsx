import { FC } from 'react';
import Input from 'rc-input';

interface InputProps {}

const RcInput: FC<InputProps> = () => {
    return <Input placeholder="input" allowClear className="rc-input" />;
};

export default RcInput;
