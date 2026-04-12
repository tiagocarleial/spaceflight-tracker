# 🚂 Deploy no Railway - $5 GRÁTIS TODO MÊS!

Este guia te ajuda a fazer deploy do seu projeto no **Railway**, que oferece **$5 de crédito gratuito TODO MÊS** (renova automaticamente).

---

## 💰 Por que Railway?

| Recurso | Vercel/Netlify | Railway |
|---------|----------------|---------|
| Créditos mensais | 300 (não renova) | **$5 (RENOVA TODO MÊS)** ✅ |
| Next.js 16 | ❌ Problemas | ✅ Suporte nativo |
| Cron Jobs | Pago após limite | ✅ Possível via serviço externo |
| Configuração | Complexa | ✅ Super simples |
| PostgreSQL | Pago | ✅ Grátis nos $5 |

**Com $5/mês, você consegue rodar:**
- Next.js app com tráfego moderado
- Cron jobs diários
- Banco de dados PostgreSQL (se precisar)
- E ainda sobra crédito!

---

## 📋 Passo 1: Criar Conta no Railway

1. Acesse: https://railway.app/
2. Clique em **"Start a New Project"**
3. Faça login com GitHub
4. ✅ Você ganha **$5 de crédito grátis** automaticamente!

---

## 🚀 Passo 2: Fazer Deploy do Site

### 2.1. Fazer Commit do Código

```bash
git add .
git commit -m "Configure Railway deployment"
git push
```

### 2.2. Criar Projeto no Railway

1. No Railway Dashboard, clique em **"New Project"**
2. Selecione **"Deploy from GitHub repo"**
3. Autorize o Railway a acessar seus repositórios
4. Selecione o repositório **`spaceflight`**
5. Clique em **"Deploy Now"**

### 2.3. Configurar Variáveis de Ambiente

1. No projeto Railway, clique em **"Variables"**
2. Clique em **"Raw Editor"**
3. **⚠️ IMPORTANTE:** Copie TODAS as variáveis do seu arquivo `.env.local`

**Para copiar as variáveis:**
```bash
cat .env.local
```

Copie TODO o conteúdo (exceto linhas com `#`) e cole no Railway Raw Editor.

**Variáveis necessárias:**
- `SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET`
- `CRON_SECRET`
- `GROQ_API_KEY` (obrigatório para IA)
- `GOOGLE_AI_API_KEY` (ou `REPLICATE_API_TOKEN` ou `HF_TOKEN` para imagens)
- `NEXT_PUBLIC_NASA_API_KEY`
- `NODE_VERSION=20` (adicionar manualmente)

4. Clique em **"Save Variables"**

### 2.4. Aguardar Deploy

- O Railway vai detectar que é Next.js automaticamente
- Build leva ~3-5 minutos
- Quando terminar, você verá a URL do site (ex: `spaceflight-production.up.railway.app`)

### 2.5. Configurar Domínio Público

1. No projeto, clique em **"Settings"**
2. Em **"Domains"**, clique em **"Generate Domain"**
3. **⚠️ Copie e SALVE a URL gerada** - você vai precisar para os cron jobs!

---

## ⏰ Passo 3: Configurar Cron Jobs (Postagem Automática)

Railway não tem cron jobs nativos, mas podemos usar o **cron-job.org** (100% gratuito).

### 3.1. Criar Conta no Cron-Job.org

1. Acesse: https://cron-job.org/en/
2. Clique em **"Sign up for free"**
3. Crie sua conta (grátis, sem cartão de crédito)

### 3.2. Criar Primeiro Cron Job - Fetch Articles

1. Após login, clique em **"Create cronjob"**

2. Configure:
   - **Title:** `Spaceflight - Fetch Articles`
   - **URL:** `https://SEU-SITE.up.railway.app/api/fetch-articles`
     - ⚠️ **SUBSTITUA** `SEU-SITE` pela URL que você copiou do Railway!

3. **Schedule:**
   - **Hour:** `8` (8:00 AM)
   - **Minute:** `0`
   - **Every:** `day`
   - **Timezone:** `UTC`

4. **Advanced:**
   - **Request method:** `POST`
   - **Custom headers:** Clique em "Add header"
     - **Header name:** `Authorization`
     - **Header value:** `Bearer ` seguido do valor de `CRON_SECRET` do seu `.env.local`
       - Exemplo: `Bearer cron_spaceflight_s3cr3t_2026_vK7nMqZx`

5. Clique em **"Create cronjob"**

### 3.3. Criar Segundo Cron Job - Auto Publish

1. Clique em **"Create cronjob"** novamente

2. Configure:
   - **Title:** `Spaceflight - Auto Publish`
   - **URL:** `https://SEU-SITE.up.railway.app/api/auto-publish`
     - ⚠️ **SUBSTITUA** `SEU-SITE` pela URL do Railway!

3. **Schedule:**
   - **Hour:** `11` (11:00 AM)
   - **Minute:** `0`
   - **Every:** `day`
   - **Timezone:** `UTC`

4. **Advanced:**
   - **Request method:** `POST`
   - **Custom headers:**
     - **Header name:** `Authorization`
     - **Header value:** `Bearer ` seguido do valor de `CRON_SECRET`

5. Clique em **"Create cronjob"**

### 3.4. Testar os Cron Jobs

Para testar imediatamente:

1. No cron-job.org, ao lado de cada job, clique em **"▶️ Run"**
2. Aguarde alguns segundos
3. Clique em **"History"** para ver o resultado
4. Deve retornar **Status 200** e mostrar o resultado JSON

---

## ✅ Passo 4: Verificar Funcionamento

### 4.1. Testar Manualmente

Você pode testar as APIs direto no terminal (substitua os valores):

**Fetch Articles:**
```bash
curl -X POST https://SEU-SITE.up.railway.app/api/fetch-articles \
  -H "Authorization: Bearer SEU_CRON_SECRET"
```

**Auto Publish:**
```bash
curl -X POST https://SEU-SITE.up.railway.app/api/auto-publish \
  -H "Authorization: Bearer SEU_CRON_SECRET"
```

### 4.2. Acessar o Blog

Acesse seu site: `https://SEU-SITE.up.railway.app/blog`

Você deve ver os artigos publicados!

### 4.3. Ver Logs

No Railway Dashboard:
1. Clique no seu projeto
2. Vá na aba **"Deployments"**
3. Clique no deployment atual
4. Clique em **"View Logs"**

Aqui você vê em tempo real o que está acontecendo!

---

## 📊 Monitorar Uso e Créditos

### Ver Créditos Restantes

1. No Railway Dashboard, clique no seu avatar (canto superior direito)
2. Clique em **"Account Settings"**
3. Vá em **"Usage"**
4. Você verá:
   - ✅ Créditos usados no mês
   - ✅ Créditos restantes
   - ✅ Data de renovação (todo mês!)

### Dicas para Economizar Créditos

1. **Reduzir recursos:** Se o uso estiver alto:
   - Railway → Settings → Resources
   - Ajustar CPU/RAM se necessário

2. **Otimizar cron jobs:**
   - Se processar 8 artigos/dia está usando muito crédito
   - Reduza para 4-5 artigos editando `maxArticles` em `app/api/auto-publish/route.ts`

3. **Desativar temporariamente:**
   - Se não usar por alguns dias, pause no cron-job.org
   - Reative quando precisar

---

## 🎯 Horários dos Cron Jobs

Os cron jobs executarão automaticamente:

- **8:00 AM UTC (5:00 AM Brasília):** Busca artigos de RSS feeds
- **11:00 AM UTC (8:00 AM Brasília):** Processa e publica artigos com IA

---

## 🔧 Atualizações Futuras

Para atualizar o site:

```bash
# Faça suas alterações no código
git add .
git commit -m "Suas mudanças"
git push
```

O Railway detecta o push e faz deploy automaticamente! 🚀

---

## 🐛 Troubleshooting

### Build falhou?

1. Verifique os logs no Railway
2. Certifique-se de que todas as variáveis de ambiente estão configuradas
3. Tente fazer rebuild: Railway → Deployments → "..." → Restart

### Cron jobs não estão funcionando?

1. Teste manualmente com `curl` (veja seção 4.1)
2. Verifique se a URL está correta no cron-job.org
3. Verifique se o header `Authorization` está correto (com `Bearer ` na frente)
4. Veja o histórico no cron-job.org para mensagens de erro

### Site está lento ou offline?

1. Verifique se você ainda tem créditos: Railway → Account Settings → Usage
2. Se acabaram os créditos:
   - Aguarde até o próximo ciclo (renova automaticamente)
   - Ou faça upgrade para plano pago

### API retorna 401 Unauthorized?

Verifique se:
- `CRON_SECRET` está configurado corretamente no Railway
- Header do cron-job.org tem o formato: `Bearer seu_cron_secret_aqui`
- Os valores são EXATAMENTE iguais (sem espaços extras)

---

## 💡 Alternativa: Railway Cron (Beta)

Railway está testando cron jobs nativos (ainda em beta). Se disponível na sua conta:

1. No Railway, vá em **"Settings"** → **"Cron Jobs"**
2. Adicione os schedules:
   - `0 8 * * *` → Script para chamar `POST /api/fetch-articles`
   - `0 11 * * *` → Script para chamar `POST /api/auto-publish`

---

## 🎉 Pronto!

Seu site está 100% funcional no Railway com:
- ✅ Site Next.js 16 rodando
- ✅ Cron jobs automáticos configurados
- ✅ $5 de crédito grátis TODO MÊS
- ✅ Deploy automático via Git

**URLs importantes:**
- Site: Sua URL do Railway
- Railway Dashboard: https://railway.app/dashboard
- Cron Jobs: https://cron-job.org/en/members/jobs/

Para atualizar, apenas faça `git push` - o Railway cuida do resto! 🚀
