import React from 'react';
import { FormFeedbackstyled, InputBoxStyled } from './inputbox.style';

function Inputbox({children,error=false,errorMessage='',...rest}) {
    return (
         <>

         <InputBoxStyled {...rest}>
           {children}
         </InputBoxStyled>
         <FormFeedbackstyled error={error}>
                {errorMessage}
         </FormFeedbackstyled>
         </>
    );
}

export default Inputbox; 
