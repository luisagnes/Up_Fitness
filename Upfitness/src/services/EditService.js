import { updateDoc, doc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase'; // Caminho para o arquivo Firebase.js

const firestore = getFirestore(db);

export async function saveUserProfile(uid, perfilInfo) {
  try {
    const perfilRef = doc(firestore, 'perfil', uid);
    await updateDoc(perfilRef, perfilInfo);
  } catch (error) {
    console.error('Erro ao salvar as edições do perfil:', error);
    throw new Error('Não foi possível salvar as edições do perfil.');
  }
}
