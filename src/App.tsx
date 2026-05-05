import './App.css'

export default function App() {
  const currentYear = new Date().getFullYear()

  return (
    <main className="panel" aria-label="Links oficiais da PKTips">
      <section className="brand">
        <div className="avatar" aria-hidden="true">PK</div>
        <h1>PKTips</h1>
        <p className="subtitle">Seus melhores links em um só lugar.</p>
      </section>

      <section className="links" aria-label="Links principais">
        <a className="btn" href="#" target="_blank" rel="noopener noreferrer">
          <span>Canal VIP</span>
          <small>Acessar</small>
        </a>
        <a className="btn" href="#" target="_blank" rel="noopener noreferrer">
          <span>Entrar no Telegram</span>
          <small>Comunidade</small>
        </a>
        <a className="btn" href="#" target="_blank" rel="noopener noreferrer">
          <span>Instagram Oficial</span>
          <small>@pktips</small>
        </a>
        <a className="btn" href="#" target="_blank" rel="noopener noreferrer">
          <span>Falar no WhatsApp</span>
          <small>Suporte</small>
        </a>
      </section>

      <nav className="social" aria-label="Redes sociais">
        <a className="chip" href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a className="chip" href="#" target="_blank" rel="noopener noreferrer">X / Twitter</a>
        <a className="chip" href="#" target="_blank" rel="noopener noreferrer">TikTok</a>
      </nav>

      <footer>© {currentYear} PKTips. Todos os direitos reservados.</footer>
    </main>
  )
}
