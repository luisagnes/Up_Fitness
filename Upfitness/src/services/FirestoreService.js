import { getFirestore, addDoc, getDocs, deleteDoc, updateDoc, doc, collection } from 'firebase/firestore';
import { db } from './firebase'; // Caminho para o arquivo Firebase.js

const firestore = getFirestore(db);

export async function getHistorico() {
  const historico = [];
  const snapshot = await getDocs(collection(firestore, 'historico'));
  snapshot.forEach((doc) => {
    historico.push({ id: doc.id, ...doc.data() });
  });
  return historico;
}

export async function addHistorico(treinoRealizado) {
  await addDoc(collection(firestore, 'historico'), treinoRealizado);
}

export async function deleteHistorico(id) {
  await deleteDoc(doc(firestore, 'historico', id));
}

export async function updateHistorico(id, treinoRealizado) {
  const historicoRef = doc(firestore, 'historico', id);
  await updateDoc(historicoRef, treinoRealizado);
}
