import type { OptionType } from '#/types/navbar.types.ts/OptionType';

const Option = ({name, content}: OptionType) => {
    return(
        <option className='option' value={name}>{content}</option> 
    )
}
export default Option;