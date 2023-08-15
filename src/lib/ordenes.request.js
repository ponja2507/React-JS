import { addDoc, collection } from "firebase/firestore";
import {db} from "./config";

const ordenesRef = collection(db, "ordenes");

export const addOrden = async (orden) => {
    const ordenDoc = await addDoc(ordenesRef, orden);
    return ordenDoc.id;
}