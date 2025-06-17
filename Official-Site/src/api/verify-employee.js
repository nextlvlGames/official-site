import admin from 'firebase-admin';

// Initialize Firestore
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: '<your-project-id>',
      clientEmail: '<your-client-email>',
      privateKey: '<your-private-key>',
    }),
  });
}
const db = admin.firestore();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { secretCode } = req.body;

    try {
      const snapshot = await db.collection('employees').where('secretCode', '==', secretCode).get();
      if (!snapshot.empty) {
        return res.status(200).json({ verified: true });
      } else {
        return res.status(200).json({ verified: false });
      }
    } catch (error) {
      console.error('Error verifying employee:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
