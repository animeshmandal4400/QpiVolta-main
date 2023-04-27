import { db } from "../firebase";

export const saveLastViewedPages = async ( userId, pages ) => {
    const userRef = db.collection('users').doc(userId);
    await userRef.set({ lastViewedPages: pages }, { merge: true });
};

export const getLastViewedPages = async (userId) => {
    const userRef = db.collection("user").doc(userId)
    const userDoc = userRef.get()
    return userDoc.exists ? userDoc.lastViewedPages : [];
};