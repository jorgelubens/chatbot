const mascot = document.getElementById('mascot');
    const chatWrap = document.getElementById('chatWrap');
    const closeChat = document.getElementById('closeChat');
    const inputMsg = document.getElementById('inputMsg');
    const sendBtn = document.getElementById('sendBtn');
    const chatBody = document.getElementById('chatBody');
    let chatAberto = false;

    // Alterna exibição do chat
    mascot.addEventListener('click', () => {
      chatAberto = !chatAberto;
      chatWrap.style.display = chatAberto ? 'flex' : 'none';
    });

    // Fecha com o botão X
    closeChat.addEventListener('click', () => {
      chatWrap.style.display = 'none';
      chatAberto = false;
    });

    // Envia mensagem
    sendBtn.addEventListener('click', enviarMsg);
    inputMsg.addEventListener('keydown', e => {
      if (e.key === 'Enter') enviarMsg();
    });

    function enviarMsg() {
      const texto = inputMsg.value.trim();
      if (!texto) return;

      adicionarMsg('user', texto);
      inputMsg.value = '';

      // resposta simples
      setTimeout(() => {
        const resposta = responder(texto);
        adicionarMsg('bot', resposta);
      }, 500);
    }

    function adicionarMsg(tipo, texto) {
      const div = document.createElement('div');
      div.className = 'msg ' + tipo;
      div.textContent = texto;
      chatBody.appendChild(div);
      chatBody.scrollTop = chatBody.scrollHeight;
    }

    function responder(txt) {
      const t = txt.toLowerCase();
      if (t.includes('oi') || t.includes('olá')) return 'Oi! Como posso ajudar? 😊';
      if (t.includes('ajuda')) return 'Posso te mostrar informações do site!';
      if (t.includes("bom dia")) return 'Bom dia!, obrigado pelo comparecimento.     Oque deseja ?'
      return 'Não entendi 😅';

    }