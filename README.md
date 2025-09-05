
# ECOMY Academy — Web (Next.js)

## Requisiti
- Node.js 18+
- pnpm (consigliato) o npm/yarn

## Avvio
```bash
pnpm install
pnpm dev
```
Apri http://localhost:3000

## Build & Deploy su Vercel
1. Crea un repo GitHub e push del codice
2. Vai su Vercel → New Project → importa il repo
3. Imposta Framework: Next.js, imposta `Build Command` e `Output Directory` predefiniti
4. Connetti un dominio (es. academy.ecomy.com)

## Contenuti
- Modifica i corsi in `data/courses.json`
- Pagine: `app/*` (App Router)

## Stile
- TailwindCSS con palette ECOMY (blu/verde)
