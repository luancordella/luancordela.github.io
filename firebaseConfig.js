<script>
  // Configuração do Firebase (substitua com suas próprias credenciais)
  const firebaseConfig = {
    apiKey: "SUA-API-KEY",
    authDomain: "SEU-PROJETO.firebaseapp.com",
    projectId: "SEU-PROJETO",
    storageBucket: "SEU-PROJETO.appspot.com",
    messagingSenderId: "SEU-MESSAGING-SENDER-ID",
    appId: "SEU-APP-ID",
  };

  // Inicializa o Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
</script>
