# Chapaternização 2026

Site da confra da chapa: pizza, amigo secreto e um tiquinho de Natal.

## Rodar no seu computador

Precisa do Node.js 20 ou mais novo.

```
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

## Onde editar

- `src/dados/evento.js`: data, local, horários, valores da contribuição e os links dos botões "Confirmar presença" e "Mandar inspiração" (deixe vazio para esconder o botão).
- `src/dados/presentes.js`: as listas de presente. Cada pessoa vira uma aba; cada item vira uma figurinha.
- `public/figurinhas/`: fotos dos itens, sem fundo (PNG ou WebP transparente, uns 800px no lado maior). Se a foto ainda não tem a borda branca, não precisa: o site desenha. Se já tem, marque `pronta: true` no item.
- `public/rabiscos/`: os desenhos em vermelho e verde.
- `src/estilos.css`: cores, fontes e estilos (os tokens do design system estão no topo).

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie esta pasta (a branch precisa se chamar `main`).
2. No repositório, vá em Settings > Pages e, em "Source", escolha **GitHub Actions**.
3. Pronto: a cada push na `main`, o workflow em `.github/workflows/deploy.yml` gera o site e publica. O endereço aparece na aba Actions e em Settings > Pages.
