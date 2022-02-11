import io from 'socket.io-client';

import React, { useEffect, useMemo, useState } from 'react'
import UserRegisterForm from '../../Components/UserRegisterForm';
import ChatMessageForm from '../../Components/ChatMessageForm';
import Header from '../../Components/Header';

import './style.css';

function Chat() {
    const socket = useMemo(() => io('http://localhost:3000'), [io]);

    const [step, setStep] = useState('REGISTER');
    const [user, setUser] = useState(null);

    const [messages, setMessages] = useState([]);

    const sendMessage = message => {
        socket.emit('message:send', {
            user,
            message
        });
    };

    useEffect(() => {
        socket.on('message:received', newMessage => {
            setMessages(messages => [...messages, newMessage]);
        });
    }, []);

    const handleSubmitForm = user => {
        setUser(user);
        setStep('CHAT');
    };

  return step === 'REGISTER' ? <UserRegisterForm handleSubmitForm={handleSubmitForm} /> : (
      <>
        <div className="d-flex flex-column">
            <Header />

            <div className="d-flex flex-column" style={{ padding: '78px 20px' }}>
                {
                    messages.map((item, index) => {
                        return (
                            <div key={index} style={{ textAlign: item.user.name === user.name ? 'right' : 'left', flexWrap: 'wrap', wordBreak: 'break-word' }}>
                                <h4>{item.user.name}</h4>
                                <p>{item.message}</p>
                            </div>
                        );
                    })
                }
            </div>

            <ChatMessageForm sendMessage={sendMessage} />
        </div>
      </>
  )
}

export default Chat;