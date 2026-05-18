# Vercel Environment Variables Setup

O Tiangong tracker precisa da chave da API N2YO configurada no Vercel para funcionar em produção.

## Passos para Configurar

1. **Acesse o Vercel Dashboard**
   - Vá para https://vercel.com/dashboard
   - Selecione seu projeto `spaceflight-tracker`

2. **Navegue até Settings → Environment Variables**
   - No menu lateral, clique em "Settings"
   - Depois clique em "Environment Variables"

3. **Adicione a Variável de Ambiente**
   - Clique em "Add New"
   - **Name**: `NEXT_PUBLIC_N2YO_API_KEY`
   - **Value**: `JX5729-GTHZXN-RC954P-5QT2`
   - **Environments**: Selecione **Production**, **Preview**, e **Development**
   - Clique em "Save"

4. **Redeploye o Projeto**
   - Após adicionar a variável, você precisa fazer um novo deploy
   - Vá para a aba "Deployments"
   - Clique nos três pontos do último deployment
   - Selecione "Redeploy"
   - Ou simplesmente faça um novo commit e push, que irá triggerar um novo deploy automaticamente

## Verificação

Após o redeploy, acesse https://www.spaceflight-tracker.com/tiangong e verifique se o mapa está carregando corretamente sem erros.

## Problemas Conhecidos

Se ainda houver erros:
1. Verifique nos logs do Vercel (aba "Deployments" → clique no deployment → "View Function Logs")
2. Confirme que a variável está visível em todas as environments (Production, Preview, Development)
3. Verifique se a API key N2YO ainda é válida em https://www.n2yo.com/

## Outros Erros Corrigidos

- ✅ Mixed Content: Mudado de `http://` para `https://` na API de astronautas
- ✅ Melhorado error handling nas rotas API com logs detalhados
