import { useEffect, useRef, useState } from 'react'
import { evento } from '../dados/evento.js'
import Rabisco from './Rabisco.jsx'

// O rolo de massa desce em zigue-zague conforme a página rola:
// primeira passada da esquerda pra direita revela o nome,
// segunda passada da direita pra esquerda revela a data e o local.
export default function Topo() {
  const palco = useRef(null)
  const [p, setP] = useState(0)

  useEffect(() => {
    const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduz) { setP(1); return }
    let raf = 0
    const medir = () => {
      raf = 0
      const el = palco.current
      if (!el) return
      const total = el.offsetHeight - window.innerHeight
      const andou = -el.getBoundingClientRect().top
      setP(Math.min(1, Math.max(0, total > 0 ? andou / total : 1)))
    }
    const pedir = () => { if (!raf) raf = requestAnimationFrame(medir) }
    medir()
    window.addEventListener('scroll', pedir, { passive: true })
    window.addEventListener('resize', pedir)
    return () => { window.removeEventListener('scroll', pedir); window.removeEventListener('resize', pedir); cancelAnimationFrame(raf) }
  }, [])

  // 0 a 0,5: linha 1 (esq → dir). 0,5 a 1: linha 2 (dir → esq).
  const l1 = Math.min(1, p / 0.5)
  const l2 = Math.min(1, Math.max(0, (p - 0.5) / 0.5))
  const naLinha2 = p > 0.5
  const x = naLinha2 ? 1 - l2 : l1
  // o rolo fica em pé (perpendicular ao caminho) e balança de leve enquanto rola
  const giro = 45 + Math.sin(p * Math.PI * 10) * 6

  const rolo = (
    <img
      className="topo__rolo"
      src="./rabiscos/rolo-de-massa-vermelho.svg"
      alt=""
      aria-hidden="true"
      style={{ left: `${x * 100}%`, transform: `translate(-50%, -50%) rotate(${giro}deg)`, opacity: p >= 1 ? 0 : 1 }}
    />
  )

  return (
    <header className="topo" ref={palco}>
      <div className="topo__palco">
        <Rabisco nome="estrela-rabiscada" cor="vermelho" tamanho={78} giro={-12} className="topo__enfeite topo__enfeite--1" />
        <Rabisco nome="ramo-pinheiro" cor="verde" tamanho={84} giro={8} className="topo__enfeite topo__enfeite--2" />
        <Rabisco nome="tacas-brinde" cor="verde" tamanho={84} giro={-6} className="topo__enfeite topo__enfeite--3" />
        <Rabisco nome="pizza-inteira" cor="vermelho" tamanho={124} giro={14} className="topo__enfeite topo__enfeite--4" />
        <Rabisco nome="estrela-rabiscada" cor="vermelho" tamanho={56} giro={18} className="topo__enfeite topo__enfeite--5" />
        <Rabisco nome="bola-floco" cor="vermelho" tamanho={70} giro={8} className="topo__enfeite topo__enfeite--6" />
        <Rabisco nome="meia-doces" cor="vermelho" tamanho={66} giro={-8} className="topo__enfeite topo__enfeite--7" />
        <Rabisco nome="arvore-pinheiro" cor="verde" tamanho={72} giro={6} className="topo__enfeite topo__enfeite--8" />

        <div className="topo__texto">
          <p className="topo__sobre">Vem aí, em novembro de 2026...</p>
          <div className="topo__linha topo__linha--1">
            <h1 className="topo__nome" style={{ clipPath: `inset(-30% ${(1 - l1) * 112 - 12}% -30% -12%)` }}>
              {evento.nome}
            </h1>
            {!naLinha2 && rolo}
          </div>
          <div className="topo__linha topo__linha--2">
            <p className="topo__data" style={{ clipPath: `inset(-30% -12% -30% ${(1 - l2) * 112 - 12}%)` }}>
              Edição especial de noite da pizza!
            </p>
            {naLinha2 && rolo}
          </div>
        </div>

        <p className={`topo__dica ${p > 0.05 ? 'some' : ''}`}>role pra abrir a massa</p>
      </div>
    </header>
  )
}
