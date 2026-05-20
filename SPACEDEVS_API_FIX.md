# The Space Devs API - Troubleshooting Guide

## Problema

A página `/launches` está mostrando a mensagem: "Using mock data. Real data from The Space Devs API could not be loaded."

## Diagnóstico

A API The Space Devs está **funcionando corretamente** (testado localmente). O problema ocorre apenas no ambiente de produção do Vercel.

## Possíveis Causas

### 1. **Timeout Durante Build no Vercel**
O Vercel tem limites de tempo para builds. Se a API demorar muito para responder durante o build, o fetch falha.

**Solução implementada:**
- Adicionado timeout de 10 segundos nas requisições
- Melhorado error handling com logs detalhados

### 2. **Rate Limiting da API**
The Space Devs API pode ter rate limits que afetam múltiplos requests durante o build.

**Soluções possíveis:**
- Aumentar o `revalidate` time para diminuir chamadas à API
- Usar ISR (Incremental Static Regeneration) em vez de SSR
- Considerar fazer cache dos dados

### 3. **Vercel Function Timeout**
Vercel Serverless Functions têm timeout padrão de 10 segundos no plano gratuito.

## Soluções Aplicadas

### 1. Timeout e Error Handling Melhorado ✅
- Adicionado `AbortController` com timeout de 10 segundos
- Logs detalhados para debug
- Mensagens de erro mais informativas

### 2. Headers de Request ✅
- Adicionado header `Accept: application/json`
- Isso ajuda a garantir resposta correta da API

### 3. Mensagem de Erro Melhorada ✅
- Interface mais clara para o usuário quando mock data é usado
- Explica possíveis causas do problema

## Próximos Passos (Se o Problema Persistir)

### Opção 1: Usar API Route no Next.js
Em vez de fazer fetch direto da página, criar uma API route:

```typescript
// app/api/launches/route.ts
export async function GET() {
  // Fetch from The Space Devs API aqui
  // Isso roda no servidor e não tem problemas de CORS ou timeout
}
```

### Opção 2: Aumentar o Cache Time
Editar `lib/api.ts`:
```typescript
next: { revalidate: 300 }, // 5 minutos em vez de 60 segundos
```

### Opção 3: Usar Static Generation com Fallback
Editar `app/launches/page.tsx`:
```typescript
export const revalidate = 300; // ISR - revalidate a cada 5 minutos
```

### Opção 4: Migrar para Client-Side Fetching
Se nada funcionar, fazer o fetch no lado do cliente:
- Criar um componente cliente que faz fetch após o carregamento da página
- Isso evita problemas durante o build do Vercel

## Verificar Logs no Vercel

1. Acesse o Vercel Dashboard
2. Vá em **Deployments** → clique no último deployment
3. Vá em **Functions** → veja os logs
4. Procure por erros relacionados a "The Space Devs API"

Os logs vão mostrar qual exatamente é o problema (timeout, erro 429, etc.)

## API The Space Devs - Informações

- **Endpoint**: `https://ll.thespacedevs.com/2.3.0`
- **Documentação**: https://thespacedevs.com/llapi
- **Rate Limits**: Geralmente generosos, mas podem variar
- **Status da API**: https://status.thespacedevs.com/

## Teste Local

Para testar localmente:

```bash
# Teste direto da API
curl "https://ll.thespacedevs.com/2.3.0/launches/upcoming/?limit=5"

# Deve retornar dados JSON válidos
```

Se funcionar localmente mas não no Vercel, o problema é definitivamente do ambiente de produção.
