import Login from './Login';
import styles from './modules/Login.module.css';
import { useState } from 'react';
import { BsFillLockFill } from 'react-icons/bs';

export default function Register() {

    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    return (
        <>
            <Login />
        </>
    )
}