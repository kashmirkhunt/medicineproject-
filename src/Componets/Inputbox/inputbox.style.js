import styled from "styled-components";
import { FormFeedback,Input } from "reactstrap";

 

export const InputBoxStyled=styled(Input)`
border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    padding: 10px !important;`;

export const  FormFeedbackstyled=styled(FormFeedback)`
color:red;

display:${props=>props.error ? 'block':'none'}
`;
