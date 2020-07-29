import * as React from "react";
import { Input } from "../../Input";


export interface LoginProps {
  //callToAction?: string;
  onSubmit: (email: string, password: string) => void;
}

export const Login: React.FC<LoginProps> = (
  props: React.PropsWithChildren<LoginProps>
) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const {  onSubmit } = props;

  return (
    <form onSubmit={() => onSubmit(email, password)}>
      <Input
        type="email"
        label="Correo electrónico"
        value={email}
        onChange={setEmail}
      />
      <Input
        type="password"
        label="Contraseña"
        value={password}
        onChange={setPassword}
      />
     
    </form>
  );
};
