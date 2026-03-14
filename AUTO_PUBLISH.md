# Sistema de Auto-Publicação de Artigos

Este documento explica como funciona o sistema de auto-publicação automática de artigos no Spaceflight Tracker.

## Como Funciona

O sistema automatiza completamente o processo de criação de artigos a partir dos RSS feeds:

1. **Busca artigos** - O cron job às 8h da manhã busca artigos de várias fontes (NASA, SpaceflightNow, ESA, Space.com, TechCrunch, etc.)
2. **Salva como rascunhos** - Os artigos são salvos no Supabase com `is_published=false`
3. **Processa artigos** - O cron job às 10h da manhã processa até 8 artigos e:
   - 🤖 **Reescreve description** (resumo) com IA (200-300 caracteres)
   - 🤖 **Reescreve title** (título) com IA (60-100 caracteres)
   - 🤖 **Gera content** (conteúdo completo) com IA (4+ parágrafos)
   - 🎨 **Gera image_url** (imagem de capa) com IA
   - ✅ Publica o artigo automaticamente (`is_published=true`)

## Configuração

### 1. Variáveis de Ambiente

As seguintes variáveis já estão configuradas no `.env.local`:

```env
# Supabase
SUPABASE_URL=https://fjiuvbbzplndtpajcykp.supabase.co
NEXT_PUBLIC_SUPABASE_URL=https://fjiuvbbzplndtpajcykp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_10eCd-VSNGJnb9dqj4Aklw_3oA-DWMu
SUPABASE_SERVICE_ROLE_KEY=eyJ... (sua chave)

# Admin
ADMIN_PASSWORD=admin123
ADMIN_SESSION_SECRET=spaceflight_admin_s3cr3t_2026_xK9mLpQw

# IA - Geração de conteúdo
GROQ_API_KEY=gsk_... (sua chave do Groq)
HF_TOKEN=hf_... (seu token do Hugging Face)

# URL base (local ou produção)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 2. Configuração no Vercel

Quando fizer o deploy no Vercel, configure estas variáveis de ambiente:

1. Acesse o projeto no Vercel Dashboard
2. Vá em **Settings** → **Environment Variables**
3. Adicione as seguintes variáveis:

```
ADMIN_SESSION_SECRET = spaceflight_admin_s3cr3t_2026_xK9mLpQw
NEXT_PUBLIC_BASE_URL = https://spaceflight-tracker.com
GROQ_API_KEY = gsk_... (copie do .env.local)
HF_TOKEN = hf_... (copie do .env.local)
SUPABASE_URL = https://fjiuvbbzplndtpajcykp.supabase.co
NEXT_PUBLIC_SUPABASE_URL = https://fjiuvbbzplndtpajcykp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = sb_publishable_10eCd-VSNGJnb9dqj4Aklw_3oA-DWMu
SUPABASE_SERVICE_ROLE_KEY = eyJ... (copie do .env.local)
```

## Horários dos Cron Jobs

Configurados no `vercel.json`:

- **8h da manhã**: Busca artigos dos RSS feeds (`/api/fetch-articles`)
- **10h da manhã**: Processa artigos e publica (`/api/auto-publish`)

Isso significa que **todo dia às 10h, até 8 artigos novos serão publicados automaticamente** no seu site.

## Testando Localmente

### Antes de testar, certifique-se de:

1. O servidor Next.js está rodando: `npm run dev`
2. As variáveis de ambiente estão configuradas no `.env.local`
3. Existem artigos não publicados no Supabase

### Comando de Teste

```bash
# Instalar dependências (se necessário)
npm install

# Processar até 8 artigos (padrão)
npm run auto-publish

# Processar apenas 2 artigos (para teste)
npm run auto-publish 2

# Processar apenas 1 artigo
npm run auto-publish 1
```

### Exemplo de saída:

```
🚀 Testando auto-publicação de artigos (máximo: 2)
📡 URL: http://localhost:3000/api/auto-publish

⏳ Enviando requisição...

✅ Processamento concluído!

📊 Resumo:
   • Artigos processados: 2
   • Sucessos: 2
   • Falhas: 0

📝 Detalhes dos artigos processados:

✅ Artigo 1: NASA Announces New Mars Mission
   ID: abc123
   Categoria: space
   Passos completados: 5

✅ Artigo 2: SpaceX Launches Starship Test Flight
   ID: def456
   Categoria: space
   Passos completados: 5

🎉 2 artigo(s) publicado(s) com sucesso!

🌐 Acesse: http://localhost:3000/admin/dashboard para ver os artigos
```

## Categorias de Artigos

O sistema suporta 3 categorias:

- **space** - Notícias sobre espaço e lançamentos
- **technology** - Tecnologia em geral
- **astronomy** - Astronomia e ciência

Os artigos são classificados automaticamente com base na fonte do RSS feed.

## Ajustando a Quantidade de Artigos

Para alterar quantos artigos são publicados por dia:

1. Edite `vercel.json` e modifique a URL do cron:

```json
{
  "path": "/api/auto-publish?token=$ADMIN_SESSION_SECRET&maxArticles=10",
  "schedule": "0 10 * * *"
}
```

2. Ou edite diretamente o arquivo `/app/api/auto-publish/route.ts` na linha:

```typescript
const maxArticles = body.maxArticles || 8; // Altere 8 para o número desejado
```

## Fontes de RSS Feeds

Configuradas em `lib/rss-feeds.ts`:

**Space/Astronomia:**
- NASA Breaking News
- SpaceflightNow
- ESA Space Science
- Space.com

**Tecnologia:**
- The Verge
- TechCrunch
- Ars Technica

## Monitoramento

### Logs no Vercel

Para verificar se os artigos estão sendo publicados:

1. Acesse o Vercel Dashboard
2. Vá em **Deployments** → seu projeto
3. Clique em **Functions**
4. Procure por `/api/auto-publish`
5. Veja os logs de execução

### Verificar Manualmente

1. Acesse `https://spaceflight-tracker.com/admin/dashboard`
2. Veja os artigos publicados
3. Verifique a lista de artigos

## Desativando a Auto-Publicação

Para pausar temporariamente:

1. Edite `vercel.json`
2. Comente ou remova o cron job do auto-publish:

```json
{
  "crons": [
    {
      "path": "/api/fetch-articles?token=$ADMIN_SESSION_SECRET",
      "schedule": "0 8 * * *"
    }
    // Comentado:
    // {
    //   "path": "/api/auto-publish?token=$ADMIN_SESSION_SECRET",
    //   "schedule": "0 10 * * *"
    // }
  ]
}
```

3. Faça o commit e deploy

## Segurança

- A API `/api/auto-publish` requer um token de segurança (`ADMIN_SESSION_SECRET`)
- Sem o token correto, a requisição é rejeitada com erro 401
- O token é passado via query parameter: `?token=...`
- **NUNCA** compartilhe o valor do `ADMIN_SESSION_SECRET` publicamente

## Troubleshooting

### "No unpublished articles to process"
- Significa que não há artigos pendentes no Supabase
- Execute `/api/fetch-articles` manualmente primeiro
- Ou aguarde o cron das 8h da manhã executar

### "Unauthorized"
- O token `ADMIN_SESSION_SECRET` não está configurado corretamente
- Verifique se a variável está no `.env.local` (local) e no Vercel (produção)

### Artigos não estão sendo gerados
- Verifique os logs do Vercel
- Confirme que as API keys (GROQ_API_KEY, HF_TOKEN) estão configuradas
- Teste localmente com `npm run auto-publish 1` para ver erros detalhados

### Imagens não estão sendo geradas
- Verifique se o `HF_TOKEN` está configurado corretamente
- O modelo FLUX.1-schnell do Hugging Face pode ter limites de rate
- Verifique os logs para ver erros específicos

### "GROQ_API_KEY not configured"
- A chave da API Groq não está configurada
- Adicione no `.env.local` e no Vercel

## Fluxo Completo

```
┌─────────────────────────────────────────┐
│  8h da manhã: Buscar artigos RSS feeds  │
│  /api/fetch-articles                    │
└───────────────┬─────────────────────────┘
                │
                ▼
        ┌───────────────┐
        │  Supabase DB  │
        │  is_published │
        │    = false    │
        └───────┬───────┘
                │
                ▼
┌───────────────────────────────────────────┐
│  10h da manhã: Processar artigos          │
│  /api/auto-publish                        │
│                                           │
│  Para cada artigo:                        │
│  1. Reescrever description (IA)           │
│  2. Reescrever title (IA)                 │
│  3. Gerar content completo (IA)           │
│  4. Gerar imagem (IA)                     │
│  5. Atualizar artigo (is_published=true)  │
└───────────────┬───────────────────────────┘
                │
                ▼
        ┌───────────────┐
        │   Artigos     │
        │  Publicados   │
        │   no site!    │
        └───────────────┘
```

## Estatísticas

Com este sistema:
- ✅ **8 artigos publicados automaticamente por dia**
- ✅ **240 artigos por mês**
- ✅ **~2880 artigos por ano**
- ✅ Conteúdo 100% gerado e otimizado por IA
- ✅ SEO otimizado automaticamente
- ✅ Zero trabalho manual necessário

🎉 **Seu blog de espaço e tecnologia agora é totalmente automatizado!**
