import React, { useState } from 'react'

import { Button, Input } from '@chakra-ui/react';

function ChatMessageForm({ sendMessage }) {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const submit = () => {
        if (!message) {
            alert('Digite uma mensagem a ser enviada');
            return;
        }

        setLoading(true);

        setTimeout(() => {
            sendMessage(message);

            setMessage('');

            document.getElementById('message-text').value = '';

            setLoading(false);
        }, 100);
    };

  return (
    <div style={{ position: 'fixed', bottom: 0, backgroundColor: '#fff', width: '100%' }}>
        <div style={{ display: 'flex', padding: '16px', position: 'relative' }}>
            <Input id="message-text" placeholder='Digite uma mensagem' onChange={({ target }) => setMessage(target.value)} htmlSize={4} style={{ width: '100%', height: '44px', padding: '0 78px 0 13px', borderRadius: '13px', border: '1px solid rgb(240, 240, 240)', outline: 0 }} />
            <Button style={{ position: 'absolute', top: '15px', right: '27px' }} marginTop={8} isLoading={loading} loadingText='Enviando' spinnerPlacement='left' borderRadius='8px' colorScheme='blue' className="button button--primary" onClick={submit}>Enviar</Button>
        </div>
      </div>
  )
}

export default ChatMessageForm