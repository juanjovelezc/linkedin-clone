import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.PhotoURL,

            }))
        })
        .catch((error) => alert(error))
    }
    const register = () => {
        if(!name){
            return alert("Por favor ingresa tu nombre completo")
        }

        auth.createUserWithEmailAndPassword(email, password).
        then((userAuth)=> {
            userAuth.user
            .updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic
                }))
            })
        }).catch(error => alert(error))
    }
    return (
        <div className='login'>
            <img 
             src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png'
            alt=''
            />

            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Nombre completo (Necesario para registrarse)"type='text'/>

                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Imagen de perfil (Opcional)' type='tex' />

                <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type='email'/>

                <input value={password}  onChange={e => setPassword(e.target.value)} placeholder='Contraseña' type='password'/>

                <button type='submit' onClick={loginToApp}>Iniciar sesión</button>

            </form>
            <p>¿No estás registrado? {" "}
            <span className='login__register' onClick={register}>¡Registrate ahora!</span>
            </p>
        </div>
    )
}

export default Login
