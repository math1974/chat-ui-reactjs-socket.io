import React, { useState } from 'react'

import { Button, Input } from '@chakra-ui/react';

function UserRegisterForm({ handleSubmitForm }) {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    const submit = () => {
        if (!user.name) {
            alert('Preencha o nome');
            return;
        }

        setLoading(true);

        setTimeout(() => {
            handleSubmitForm(user);

            setLoading(false);
        }, 1000);
    };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', padding: 20, maxWidth: 540, margin: '0 auto' }}>
        <h1>Cadastre-se</h1>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 32 }}>
            <Input height={40} borderRadius={8} paddingLeft={8} placeholder='Digite seu nome' style={{ width: '98%', outline: 'none', border: '1px solid #bbbec1' }} onChange={({ target }) => setUser({ name: target.value })} htmlSize={4} />
            <Button isDisabled={!user || !user.name} height={40} marginTop={8} isLoading={loading} loadingText='Enviando' spinnerPlacement='left' borderRadius='8px' colorScheme='blue' isFullWidth={true} className="button button--primary" onClick={submit}>Enviar</Button>
        </div>
      </div>
  )
}

export default UserRegisterForm