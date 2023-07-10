import { useState } from 'react';
import { db } from '../firebase'; // Importe a instância do Firebase já configurada

export const useUpdateDocument = (collection) => {
  const [response, setResponse] = useState({
    loading: false,
    error: null,
    data: null
  });

  const updateDocument = async (documentId, data) => {
    setResponse({ loading: true, error: null, data: null });

    try {
      await db.collection(collection).doc(documentId).update(data);
      setResponse({ loading: false, error: null, data: { success: true } });
    } catch (error) {
      setResponse({ loading: false, error: error.message, data: null });
    }
  };

  return { updateDocument, response };
};
