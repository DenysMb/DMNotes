import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../firebase";

export const fetcher = async (
  collectionName: string,
  key: string,
  setter: (arg0: any) => void
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
    console.error(err);
    setter([]);
  }
};
