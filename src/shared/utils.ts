import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../firebase";

export const fetcher = async (
  collectionName: string,
  key: string,
  setter: (arg0: any) => void,
  loading: (arg0: boolean) => void
) => {
  const user = auth.currentUser;

  try {
    const q = query(
      collection(db, collectionName),
      where(key, "==", user?.uid)
    );
    const doc = await getDocs(q);
    const data = doc.docs.map((d) => d.data());

    setter(data);
  } catch (err) {
    console.error("FETCHER ERROR", err);
    setter([]);
  } finally {
    loading(false);
  }
};

export const fetchNote = async (
  id: number,
  setter: (arg0: any) => void,
  loading: (arg0: boolean) => void
) => {
  const user = auth.currentUser;

  try {
    const q = query(
      collection(db, "notes"),
      where("user", "==", user?.uid),
      where("id", "==", id)
    );
    const doc = await getDocs(q);
    const data = doc.docs[0].data();

    setter(data);
  } catch (err) {
    console.error("FETCH NOTE ERROR", err);
    setter(undefined);
  } finally {
    loading(false);
  }
};

export const save = async (collectionName: string, data: any) => {
  addDoc(collection(db, collectionName), data);
};
