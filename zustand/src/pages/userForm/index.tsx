import React from "react";
import { useUserStore } from "../../stores/user";

const UserForm = () => {
  const addUsers = useUserStore((state) => state.actions.addUser);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = (e.target as any).name.value;
    const email = (e.target as any).email.value;
    const adress = (e.target as any).adress.value;

    addUsers({ name, email, adress });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="name" placeholder="digite seu nome" />
        <input name="email" type="email" placeholder="digite seu email" />
        <input name="adress" placeholder="digite seu endereço" />
        <button type="submit">Criar Usuario</button>
      </form>
    </div>
  );
};

export default UserForm;
