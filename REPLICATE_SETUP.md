# Configuração do Replicate (API Gratuita de Geração de Imagens)

## Por que Replicate?

- ✅ **$5 em créditos gratuitos** (≈900 imagens)
- ✅ **Sem cartão de crédito** para começar
- ✅ **Modelos de alta qualidade** (FLUX, Stable Diffusion)
- ✅ **Muito fácil de configurar**

## Passo a Passo

### 1. Criar conta no Replicate

Acesse: https://replicate.com/signin

### 2. Obter API Token

1. Após login, vá em: https://replicate.com/account/api-tokens
2. Clique em "Create token"
3. Copie o token gerado (começa com `r8_...`)

### 3. Adicionar ao `.env.local`

Abra o arquivo `.env.local` e adicione:

```env
REPLICATE_API_TOKEN=r8_seu_token_aqui
```

### 4. Testar a configuração

Execute:

```bash
node test-replicate.js
```

Se tudo funcionar, você verá "✓ SUCCESS!" e uma imagem será salva.

## Uso

Com o token configurado:

1. **Auto-publish**: As imagens serão geradas automaticamente
2. **Admin**: Você pode gerar imagens manualmente no painel admin
3. **Custo**: $0.0055 por imagem (com $5 grátis = ~900 imagens)

## Monitoramento de Créditos

Verifique seus créditos em: https://replicate.com/account/billing

Quando os créditos acabarem, o sistema:
- Tentará usar HuggingFace (se configurado)
- Ou publicará sem imagem (não bloqueia publicação)
