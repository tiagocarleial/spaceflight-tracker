# Amazon Affiliate Banner - Guia de Uso

## ✅ O que foi criado

Um banner de afiliado da Amazon com 4 categorias de produtos relacionados ao espaço:

1. **Space Books & Guides** 📚
2. **Telescopes & Binoculars** 🔭
3. **Space Models & Toys** 🚀
4. **Astronomy Tools** 🧭

---

## 📍 Localização

O banner está posicionado na **homepage** após a seção "What We Track".

**Por quê nesta posição?**
- ✅ Visível sem ser intrusivo
- ✅ Após conteúdo informativo (usuários já engajados)
- ✅ Antes de conteúdo educacional
- ✅ Bom para desktop e mobile

---

## 🔗 Como Funciona

### Seu Affiliate Tag
```
tiagoolivei07-20
```

### Links Gerados
Cada card gera automaticamente um link de busca na Amazon:

```
https://www.amazon.com/s?k={termo-de-busca}&tag=tiagoolivei07-20
```

**Exemplo:**
- **Space Books** → `https://www.amazon.com/s?k=space+exploration+books&tag=tiagoolivei07-20`
- **Telescopes** → `https://www.amazon.com/s?k=telescope+astronomy&tag=tiagoolivei07-20`

Quando alguém clica e compra algo na Amazon, você recebe comissão! 💰

---

## 🎨 Design Features

- ✅ **Responsive**: Funciona perfeitamente em mobile e desktop
- ✅ **Hover Effects**: Cards fazem zoom quando passa o mouse
- ✅ **Color Coded**: Cada categoria tem sua cor única
- ✅ **Amazon Branding**: Logo da Amazon em cada card
- ✅ **Disclaimer**: Texto de disclosure conforme exigido pela Amazon

---

## 🛠️ Personalizar Produtos

Para mudar os produtos, edite `/components/AmazonAffiliateBanner.tsx`:

```tsx
const products: AmazonProduct[] = [
  {
    title: 'Seu Produto',           // Título do card
    description: 'Descrição aqui',  // Subtítulo
    searchTerm: 'termo+de+busca',   // O que buscar na Amazon
    icon: 'fa-icon-name',           // Ícone Font Awesome
    color: 'blue',                   // Cor: blue, purple, orange, green
  },
  // ... adicione mais produtos
];
```

### Exemplos de Termos de Busca:

**Categoria Space/Astronomy:**
- `telescope+astronomy`
- `space+exploration+books`
- `astronomy+binoculars`
- `star+chart+poster`
- `NASA+merchandise`
- `space+documentary+DVD`
- `astrophotography+camera`
- `celestron+telescope`

**Categoria Science:**
- `science+experiment+kit`
- `physics+books`
- `microscope+kids`

---

## 📊 Outras Posições Possíveis

Se quiser mover ou adicionar em outras páginas:

### Homepage (current)
```tsx
// Em app/page.tsx após "What We Track"
<AmazonAffiliateBanner />
```

### Página de Launches
```tsx
// Em app/launches/page.tsx após a lista de lançamentos
<AmazonAffiliateBanner />
```

### Página de Rockets
```tsx
// Em app/rockets/page.tsx
<AmazonAffiliateBanner />
```

### Sidebar (se tiver)
Crie uma versão vertical com 1 coluna:
```tsx
<div className="grid grid-cols-1 gap-4">
  {/* Modificar o grid para 1 coluna */}
</div>
```

---

## 📱 Layouts do Banner

### Desktop (>1024px)
```
┌─────────┬─────────┬─────────┬─────────┐
│ Books   │Telescope│ Models  │  Tools  │
└─────────┴─────────┴─────────┴─────────┘
```

### Tablet (768px - 1024px)
```
┌─────────┬─────────┐
│ Books   │Telescope│
├─────────┼─────────┤
│ Models  │  Tools  │
└─────────┴─────────┘
```

### Mobile (<768px)
```
┌─────────┐
│ Books   │
├─────────┤
│Telescope│
├─────────┤
│ Models  │
├─────────┤
│  Tools  │
└─────────┘
```

---

## 🎯 Melhores Práticas

### DO:
- ✅ Mantenha produtos relevantes ao tema do site (espaço/astronomia)
- ✅ Use termos de busca específicos
- ✅ Teste os links antes de publicar
- ✅ Monitore o desempenho no Amazon Associates Dashboard
- ✅ Mantenha o disclaimer visível

### DON'T:
- ❌ Não remova o disclaimer (exigido pela Amazon)
- ❌ Não use mais de 1-2 banners por página
- ❌ Não coloque produtos não relacionados ao conteúdo
- ❌ Não modifique o affiliate tag manualmente nos links

---

## 🔧 Variações do Banner

### Banner Compacto (2 produtos)
```tsx
const products: AmazonProduct[] = [
  // Apenas 2 produtos
];
```

### Banner com Link Direto (produto específico)
Para linkar um produto específico em vez de busca:

```tsx
const createAmazonLink = (asin: string) => {
  return `https://www.amazon.com/dp/${asin}?tag=${affiliateTag}`;
};
```

Exemplo: `https://www.amazon.com/dp/B08RTRCRPS?tag=tiagoolivei07-20`

---

## 📈 Monitoramento

Acesse seu dashboard da Amazon Associates:
- https://affiliate-program.amazon.com/

**Métricas para acompanhar:**
- Clicks
- Conversion Rate
- Items Ordered
- Earnings

---

## 🚀 Próximos Passos

1. **Deploy para produção** - O banner aparecerá automaticamente
2. **Teste todos os links** - Clique em cada card para verificar
3. **Monitore performance** - Verifique o dashboard da Amazon
4. **Ajuste produtos** - Baseado no que converte melhor
5. **A/B Testing** - Teste diferentes categorias de produtos

---

## ⚠️ Compliance

✅ **Disclosure incluído**: "As an Amazon Associate, we earn from qualifying purchases."
✅ **Links com rel="sponsored"**: Seguindo boas práticas SEO
✅ **Tag correta aplicada**: tiagoolivei07-20

---

## 🎨 Cores Disponíveis

```tsx
'blue'    // Azul (Books)
'purple'  // Roxo (Telescopes)
'orange'  // Laranja (Models)
'green'   // Verde (Tools)
```

Para adicionar mais cores, edite os `colorClasses` e `iconColorClasses` no componente.

---

Bom trabalho com seu programa de afiliados! 🎉
