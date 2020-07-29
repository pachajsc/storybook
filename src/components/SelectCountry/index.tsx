import React, {useState} from "react";
//import { InputType } from "../utils";
import { default as SelectNumber } from 'react-select';
import {phoneItems} from "./countries"


const formatOptionLabel = (props) => (
  <>
    <div style={{ display: "flex" }} >
      <div><span className={`flag-icon flag-icon-${props.iso3166_a2}`}></span> {props.label}</div>
    </div>
  </>
);

export interface SelectCountryProps {countryValue?: string; onChangeSelect?: string;}

export const SelectCountry: React.FC<SelectCountryProps> = (
  props: React.PropsWithChildren<SelectCountryProps>
) => {
  const {} = props;
  const [values, setValues] = useState({});

  //const inputId = id || _.uniqueId("input_");

  const handleChange = (key, value) => {
    setValues({
      ...values,
      [key]: value
    });
  };

  return (

    <>
      <SelectNumber
      formatOptionLabel={formatOptionLabel}
        onChange={(value) => {handleChange('idItem',optionObj.value);}}
        className={"react-select-country"}
        options={phoneItems}
        placeholder="Seleccione un pais"
      />
    </>
  );
};
