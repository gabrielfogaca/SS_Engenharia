# Guia de Customização

Este guia ajudará você a personalizar o website para suas necessidades específicas.

## 📝 Conteúdo

### 1. Informações da Empresa

**Header.tsx** - Logo e navegação
```tsx
// Linha 24: Altere o nome/logo
<button className="...">
  SS <span className="font-light">Engenharia</span>
</button>
```

**About.tsx** - Sobre a empresa
- Linhas 5-8: Valores da empresa
- Linhas 35-41: Título e descrição
- Linhas 43-55: Parágrafos sobre a empresa

**Stats.tsx** - Estatísticas
```tsx
// Linhas 5-20: Atualize os números
const stats = [
  { number: '100+', label: 'Projetos realizados' },
  // ...
];
```

### 2. Serviços

**Services.tsx** - Lista de serviços
```tsx
// Linhas 7-40: Modifique os serviços oferecidos
const services = [
  {
    icon: Building2, // Ícone do lucide-react
    title: 'Nome do Serviço',
    description: 'Descrição detalhada...',
  },
  // ...
];
```

### 3. Projetos

**Projects.tsx** - Portfólio
```tsx
// Linhas 6-31: Adicione seus projetos
const projects = [
  {
    title: 'Nome do Projeto',
    category: 'Categoria',
    image: 'URL_DA_IMAGEM',
    description: 'Descrição...',
  },
  // ...
];
```

### 4. Contato

**Contact.tsx** - Informações de contato
```tsx
// Linhas 32-48: Atualize os dados de contato
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'seu@email.com',
    link: 'mailto:seu@email.com',
  },
  // ...
];
```

**Footer.tsx** - Rodapé
```tsx
// Linha 123: CREA ou registro profissional
<p className="text-gray-400 text-sm">
  CREA-SC 123456
</p>

// Linhas 84-96: Links de redes sociais
<a href="https://instagram.com/seuperfil">
```

## 🎨 Estilo Visual

### Cores

As cores principais estão em `/src/styles/theme.css`. Para um esquema de cores personalizado:

```css
:root {
  --primary: #030213;        /* Cor primária (preto) */
  --secondary: oklch(0.95 0.0058 264.53); /* Cor secundária */
  --accent: #e9ebef;         /* Cor de destaque */
}
```

### Fonte

Para mudar a fonte, edite `/src/styles/fonts.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Sua+Fonte&display=swap');

* {
  font-family: 'Sua Fonte', sans-serif;
}
```

## 🖼️ Imagens

### Substituir Imagens do Unsplash

1. **Hero Section** (`Hero.tsx` - linha 21):
   - Imagem de fundo da seção principal

2. **About Section** (`About.tsx` - linha 19):
   - Imagem representativa da empresa

3. **Projects Section** (`Projects.tsx` - linhas 8-29):
   - Imagens de cada projeto

### Usando Suas Próprias Imagens

Opção 1: Hospede em um serviço de CDN (Cloudinary, ImageKit, etc.)
```tsx
<img src="https://seu-cdn.com/imagem.jpg" alt="Descrição" />
```

Opção 2: Use imagens locais (coloque na pasta `/public`)
```tsx
<img src="/imagens/sua-imagem.jpg" alt="Descrição" />
```

## 🔧 Funcionalidades

### Formulário de Contato

O formulário em `Contact.tsx` atualmente usa um `alert()` mock. Para integrar:

**Opção 1: EmailJS**
```bash
npm install @emailjs/browser
```

**Opção 2: FormSubmit**
```tsx
<form action="https://formsubmit.co/seu@email.com" method="POST">
```

**Opção 3: API própria**
```tsx
const handleSubmit = async (e) => {
  e.preventDefault();
  await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
};
```

### WhatsApp

**CTA.tsx** e **Footer.tsx** - Atualize o número:
```tsx
// De:
window.open('https://wa.me/5547999999999', '_blank')

// Para:
window.open('https://wa.me/55DDDNÚMERO', '_blank')
// Exemplo: https://wa.me/5511987654321
```

## 📱 SEO

### Meta Tags

Adicione em `/index.html`:
```html
<head>
  <title>Sabrina Schreiber Engenharia & Arquitetura</title>
  <meta name="description" content="Projetos de engenharia e arquitetura...">
  <meta property="og:title" content="SS Engenharia">
  <meta property="og:description" content="...">
  <meta property="og:image" content="URL_DA_IMAGEM">
</head>
```

### Favicon

Substitua o favicon em `/public/favicon.ico`

## 🚀 Deploy

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. Conecte seu repositório GitHub
2. Configure: Build command: `npm run build`, Publish directory: `dist`

### GitHub Pages
```bash
npm run build
# Upload da pasta dist/
```

## 📊 Analytics

### Google Analytics

Adicione no `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

Para mais ajuda, consulte a documentação das tecnologias utilizadas:
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Motion](https://motion.dev)
