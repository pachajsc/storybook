import React, {useState} from "react";
import { InputType } from "../utils";
import { TextField } from '@material-ui/core';
import { Check, Close } from '@material-ui/icons';
export interface InputProps {
  type: InputType;
  label: string;
  placeholder?: string;
  value?: string;
  id?: string;
  variant?:string;
  onChange: (value: string) => void;
}

export const Input: React.FC<InputProps> = (
  props: React.PropsWithChildren<InputProps>
) => {
  const { type, label, placeholder, value, id, variant="outlined" } = props;
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const inputId = id || _.uniqueId("input_");

  const handleChange = (key, value) => {
    setValues({
      ...values,
      [key]: value
    });

    errors.valor = (values.valor.length === 0) ? 'no tiene que estar vacio' : null;
    console.log(values)
  };

  
  

  return (
    <div className="input-base">
      {errors.valor === null && <Check className="validate-icon icon-success" />}
      {errors.valor && <Close className="validate-icon icon-error" />}
      <TextField
        className={errors.valor === null && "success-field"}
        htmlFor={inputId}
        error={errors.valor}
        label={label}
        variant={variant}
        type={type}
        id={inputId}
        value={values.valor}
        placeholder={placeholder}
        onChange={(e) => handleChange('valor', e.target.value)}
      />
    </div>
  );
};
