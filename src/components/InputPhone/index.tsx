import * as _ from "lodash";
import * as React from "react"; import { InputType } from "../utils";
import { TextField } from '@material-ui/core';
export interface InputPhoneProps {
  type: InputType;
  label: string;
  placeholder?: string;
  value?: string;
  id?: string;
  onChange: (value: string) => void;
}

export const InputPhone: React.FC<InputPhoneProps> = (
  props: React.PropsWithChildren<InputPhoneProps>
) => {
 const { type, label, placeholder, value, id, onChange } = props;

  
 const inputId = id || _.uniqueId("input_");

  return (
     
    <>
    <TextField  
     // htmlFor={inputId}
      label={label} 
      variant="outlined" 
      className="form-control"
      type={type}
      id={inputId}
      value={value}
      placeholder={placeholder}
      onChange={event => onChange(event.target.value)} 
      />
      </>
  );
};
