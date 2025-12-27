# Sabrina Schreiber Engenharia & Arquitetura - Website

Website profissional minimalista desenvolvido em React + TypeScript + Vite + Tailwind CSS.

## 🚀 Deploy no GitHub Pages (Modo Padrão)

### ⚙️ CONFIGURAÇÃO IMPORTANTE (Faça ANTES do deploy!)

**Abra o arquivo `/vite.config.ts` e ajuste o nome do repositório:**

Localize esta linha:
```typescript
base: '/NOME-DO-SEU-REPOSITORIO/',
```

E substitua `NOME-DO-SEU-REPOSITORIO` pelo nome real do seu repositório GitHub.

**Exemplo:**
- Se o repo é: `https://github.com/joao/ss-engenharia`
- Use: `base: '/ss-engenharia/',`

---

### Passo 1: Instalar dependências
```bash
npm install
```

### Passo 2: Fazer o deploy
```bash
npm run deploy
```

Este comando irá:
- Criar o build otimizado na pasta `dist`
- Publicar automaticamente no branch `gh-pages`

### Passo 3: Configurar GitHub Pages

1. Vá para o repositório no GitHub
2. Clique em **Settings** → **Pages**
3. Em **Source**, selecione:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
4. Clique em **Save**
5. **IMPORTANTE:** Certifique-se de que **Custom domain** está **VAZIO**

### Passo 4: Acessar o site

Seu site estará disponível em:
```
https://seu-usuario.github.io/nome-do-repositorio/
```

⏱ **Aguarde 2-5 minutos** para o GitHub processar o deploy.

---

## 🔍 Solução de Problemas

### Erro 404
Se você ver um erro 404:

1. **Verifique o `vite.config.ts`:**
   - O `base` deve ter o nome correto do repositório
   - Exemplo: `base: '/ss-engenharia/',` (com as barras `/`)

2. **Faça o deploy novamente:**
   ```bash
   npm run deploy
   ```

3. **Verifique a configuração no GitHub:**
   - Settings → Pages → Source deve estar: `gh-pages` / `/ (root)`
   - Custom domain deve estar **VAZIO**

4. **Aguarde alguns minutos:**
   - O GitHub Pages pode levar 2-5 minutos para processar

### CSS não carrega
Se o site abrir mas sem estilos:

1. **Confirme que o `base` no `vite.config.ts` está correto**
2. **Limpe o cache do navegador:**
   - Ctrl + Shift + R (Windows/Linux)
   - Cmd + Shift + R (Mac)
3. **Faça o deploy novamente:**
   ```bash
   npm run deploy
   ```

---

## 🛠 Desenvolvimento Local

### Rodar em modo desenvolvimento:
```bash
npm run dev
```

O site local estará em: `http://localhost:5173`

### Build local:
```bash
npm run build
```

### Preview do build:
```bash
npm run preview
```

---

## 🔄 Atualizações Futuras

Para atualizar o site:

1. Faça as alterações no código
2. Execute: `npm run deploy`
3. Aguarde 2-5 minutos

O site será atualizado automaticamente!

---

## 📝 Diferença: GitHub Pages Padrão vs Domínio Customizado

### GitHub Pages Padrão (configuração atual):
- ✅ URL: `https://usuario.github.io/repositorio/`
- ✅ Sem custo, sem configuração DNS
- ✅ **NÃO precisa** do arquivo `CNAME`
- ✅ `vite.config.ts` com: `base: '/repositorio/',`

### Domínio Customizado (exemplo: sabrinaschreiberengenharia.com.br):
- Precisa criar arquivo `/public/CNAME`
- Precisa configurar DNS no Registro.br
- `vite.config.ts` com: `base: '/',`
- Configurar Custom domain no GitHub

**Configuração atual:** GitHub Pages Padrão ✅

---

## ⚠️ IMPORTANTE: Importações de Imagens

As importações `figma:asset` **só funcionam no Figma Make**, não localmente.

**Se você quiser rodar o projeto localmente**, substitua todas as importações assim:

❌ **ANTES (Figma Make):**
```tsx
import heroBackground from 'figma:asset/16b441f1b85b63255792f1da2a2ff205a79d910c.png';
```

✅ **DEPOIS (Local):**
1. Baixe a imagem do Figma
2. Salve em `/public/images/hero-background.png`
3. Importe assim:
```tsx
const heroBackground = '/images/hero-background.png';
```

---

## 📞 Contato

WhatsApp: https://wa.me/0610433416994
