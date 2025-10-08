import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database"; // <-- importe do Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyBe40ZgzJSRWnsr9rSesl5Xt-rclTARmhk",
  authDomain: "app-pacientes-eb8b6.firebaseapp.com",
  projectId: "app-pacientes-eb8b6",
  storageBucket: "app-pacientes-eb8b6.firebasestorage.app",
  messagingSenderId: "662647929253",
  appId: "1:662647929253:web:9cc9b6a1722d310370504c"
};

// Inicializa o app e o banco
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db; // agora você exporta o db direto
