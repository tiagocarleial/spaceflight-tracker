# 📘 Guia de Implementação Media.net

## ✅ Passo 1: Cadastro no Media.net

### 1.1 Acesse e Cadastre-se
1. Vá para: https://www.media.net/
2. Clique em **"Sign Up"** ou **"Publisher Sign Up"**
3. Preencha o formulário:

   **Informações do Site:**
   - **Website URL:** `https://spaceflight-tracker.com`
   - **Website Category:** Technology / Science & Technology
   - **Website Description:** "Real-time space launch tracking and rocket information platform"
   - **Monthly Page Views:** Estime baseado no Google Analytics
   - **Primary Traffic Country:** Brasil (ou o principal)

   **Informações Pessoais:**
   - Nome completo
   - Email
   - Telefone
   - Endereço

4. Aceite os termos e envie

### 1.2 Aguarde Aprovação
- **Tempo médio:** 1-3 dias úteis
- Você receberá um email quando for aprovado
- **Dica:** Certifique-se que seu site tem:
  - ✅ Conteúdo original de qualidade
  - ✅ Navegação clara
  - ✅ Política de Privacidade
  - ✅ Sobre/Contato

---

## 🎯 Passo 2: Após Aprovação

### 2.1 Acesse seu Dashboard
1. Faça login em: https://publishers.media.net/
2. Copie seu **Customer ID** (aparece no topo)
   - Exemplo: `8CU12V3W4`

### 2.2 Crie Ad Units
1. No dashboard, vá em **"Ad Units"** → **"Create New"**
2. Crie os seguintes ad units:

   **A) Header Ad (Leaderboard)**
   - Name: "Header Leaderboard"
   - Size: 728x90 ou Responsive
   - Type: Display

   **B) Sidebar Ad**
   - Name: "Sidebar Rectangle"
   - Size: 300x250 ou 300x600
   - Type: Display

   **C) Content Ad**
   - Name: "In-Content Ad"
   - Size: Responsive
   - Type: Display

3. **Copie os Ad Unit IDs** de cada um

---

## 🔧 Passo 3: Configuração no Código

### 3.1 Atualizar Customer ID no Layout

Abra o arquivo: `app/layout.tsx`

Encontre esta seção (linhas ~93-107):

```tsx
{/* Media.net Script - Uncomment and add your Customer ID after approval */}
{/* <script
  type="text/javascript"
  dangerouslySetInnerHTML={{
    __html: `
      window._mNHandle = window._mNHandle || {};
      window._mNHandle.queue = window._mNHandle.queue || [];
      medianet_versionId = "3121199";
    `,
  }}
  suppressHydrationWarning
/>
<script
  src="https://contextual.media.net/dmedianet.js?cid=YOUR_CUSTOMER_ID_HERE"
  async
  suppressHydrationWarning
></script> */}
```

**Descomente** (remova `{/*` e `*/}`) e **substitua `YOUR_CUSTOMER_ID_HERE`** pelo seu Customer ID:

```tsx
{/* Media.net Script */}
<script
  type="text/javascript"
  dangerouslySetInnerHTML={{
    __html: `
      window._mNHandle = window._mNHandle || {};
      window._mNHandle.queue = window._mNHandle.queue || [];
      medianet_versionId = "3121199";
    `,
  }}
  suppressHydrationWarning
/>
<script
  src="https://contextual.media.net/dmedianet.js?cid=8CU12V3W4"
  async
  suppressHydrationWarning
></script>
```

### 3.2 Atualizar Config com Ad Unit IDs

Abra: `config/medianet.config.ts`

Substitua os placeholders pelos seus Ad Unit IDs reais:

```typescript
export const MEDIANET_CONFIG = {
  customerId: '8CU12V3W4', // Seu Customer ID real

  adUnits: {
    header: '123456789',      // ID do Header Ad
    sidebar: '987654321',     // ID do Sidebar Ad
    content: '456789123',     // ID do Content Ad
    footer: '789123456',      // ID do Footer Ad (opcional)
  },

  // ... resto do arquivo
};
```

---

## 🎨 Passo 4: Adicionar Anúncios nas Páginas

### Exemplo: Adicionar na Página Principal

Abra: `app/page.tsx`

Importe o componente:

```tsx
import MediaNetAd from '@/components/MediaNetAd';
import { MEDIANET_CONFIG } from '@/config/medianet.config';
```

Adicione o anúncio onde quiser:

```tsx
export default function HomePage() {
  return (
    <div>
      {/* Header Ad */}
      <MediaNetAd
        adUnitId={MEDIANET_CONFIG.adUnits.header}
        width={728}
        height={90}
      />

      {/* Seu conteúdo aqui */}

      {/* Sidebar Ad */}
      <MediaNetAd
        adUnitId={MEDIANET_CONFIG.adUnits.sidebar}
        width={300}
        height={250}
      />
    </div>
  );
}
```

---

## 📍 Locais Recomendados para Anúncios

### Alta Visibilidade:
1. **Header** (após o menu de navegação)
2. **Sidebar** (barra lateral direita)
3. **Entre lançamentos** (na lista de launches)
4. **Footer** (antes do rodapé)

### Posições Específicas:
- **Página de Lançamentos:** Entre cada 3-5 cards de lançamento
- **Página de Rockets:** Sidebar + após descrição
- **Blog Posts:** Após o 2º parágrafo + final do artigo

---

## 🧪 Passo 5: Testar

1. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Acesse: `http://localhost:3000`

3. Verifique se os anúncios aparecem (podem mostrar placeholders inicialmente)

4. Verifique no console do navegador se não há erros

---

## 🚀 Passo 6: Deploy

```bash
git add .
git commit -m "Add Media.net integration"
git push
```

Aguarde 24-48h para os anúncios começarem a aparecer corretamente.

---

## 💡 Dicas para Maximizar Receita

### 1. Posicionamento
- Coloque anúncios onde os olhos naturalmente vão
- Teste diferentes posições (A/B testing)

### 2. Tamanhos que Pagam Mais
- 728x90 (Leaderboard) - Header
- 300x250 (Medium Rectangle) - Sidebar
- 300x600 (Half Page) - Sidebar (quando há espaço)
- Responsive - Mobile

### 3. Não Exagere
- Máximo de 3-4 anúncios por página
- Mantenha o conteúdo como prioridade
- Evite poluição visual

### 4. Otimização
- Use o dashboard do Media.net para ver métricas
- Teste diferentes cores/estilos
- Foque em CTR (Click Through Rate)

---

## 📊 Monitoramento

### Dashboard Media.net
- Acesse: https://publishers.media.net/
- Métricas importantes:
  - **RPM** (Revenue Per Thousand Impressions)
  - **CTR** (Click Through Rate)
  - **Coverage** (% de impressões com anúncios)
  - **Earnings** (Ganhos)

### Metas Realistas
- **Iniciante:** $0.50 - $2 RPM
- **Intermediário:** $2 - $5 RPM
- **Avançado:** $5+ RPM

---

## ⚠️ Problemas Comuns

### Anúncios não aparecem?
1. Verifique se o Customer ID está correto
2. Aguarde 24-48h após implementação
3. Limpe o cache do navegador
4. Verifique erros no console

### Conta suspensa?
- Não clique nos próprios anúncios
- Não incentive cliques
- Não use tráfego fake
- Siga as políticas do Media.net

---

## 📞 Suporte

- **Media.net Help:** https://help.media.net/
- **Email:** publishersupport@media.net
- **Políticas:** https://www.media.net/legal/privacy-policy

---

## ✅ Checklist Final

- [ ] Cadastro feito no Media.net
- [ ] Aprovação recebida
- [ ] Customer ID copiado
- [ ] Ad Units criados
- [ ] Customer ID adicionado no `layout.tsx`
- [ ] Ad Unit IDs configurados em `medianet.config.ts`
- [ ] Componentes MediaNetAd adicionados nas páginas
- [ ] Testado localmente
- [ ] Deploy feito
- [ ] Aguardando primeiros anúncios (24-48h)

---

**Boa sorte com a monetização! 🚀💰**
