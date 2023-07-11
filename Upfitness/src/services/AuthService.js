import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase'; // Caminho para o arquivo Firebase.js

const firebaseAuth = getAuth(auth);

export async function login(email, senha) {
  try {
    const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, senha);
    return userCredential.user.uid;
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      throw new Error('Senha inválida');
    } else if (error.code === 'auth/user-not-found') {
      throw new Error('Usuário não encontrado');
    } else {
      throw error;
    }
  }
}

export async function logout() {
  await signOut(firebaseAuth);
}
