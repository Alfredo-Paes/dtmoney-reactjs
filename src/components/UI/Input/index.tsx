import { FormEvent, useCallback, useState } from 'react'
import { IInput, IInputProps } from './types';
import { InputStyle } from './style'
import { cep, currencyReal } from './utils/masks';

export function Input ({ typeInput, prefix, ...props }: IInputProps): JSX.Element {
    //const [input, setInput] = useState<IInput>({} as IInput);

    // const handleOnChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    //     setInput({
    //       ...input,
    //       [e.currentTarget.name]: e.currentTarget.value
    //     })
    //   }, [input]);

    const handleKeyUp = useCallback((e: FormEvent<HTMLInputElement>) => {
        if(typeInput === 'cep') cep(e);

        if(typeInput === 'currency') currencyReal(e);

    }, [typeInput]);

    return (
        <>
            <InputStyle 
                {...props} 
                onKeyUp={handleKeyUp}
            /> 
        </>  
    );
};