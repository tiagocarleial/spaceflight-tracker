#!/usr/bin/env node

require('dotenv').config({ path: '.env.local' });

const maxArticles = process.argv[2] || '8';

const url = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/auto-publish`;
const token = process.env.ADMIN_SESSION_SECRET;

if (!token) {
  console.error('❌ ADMIN_SESSION_SECRET não configurado no .env.local');
  process.exit(1);
}

console.log(`🚀 Testando auto-publicação de artigos (máximo: ${maxArticles})`);
console.log(`📡 URL: ${url}`);
console.log('');
console.log('⏳ Enviando requisição...');
console.log('');

fetch(`${url}?token=${token}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ maxArticles: parseInt(maxArticles) }),
})
  .then(async res => {
    const data = await res.json();

    if (!res.ok) {
      console.error('❌ Erro na requisição:', data.error);
      process.exit(1);
    }

    console.log('✅ Processamento concluído!');
    console.log('');
    console.log('📊 Resumo:');
    console.log(`   • Artigos processados: ${data.processed}`);
    console.log(`   • Sucessos: ${data.successful}`);
    console.log(`   • Falhas: ${data.failed}`);
    console.log('');

    if (data.results && data.results.length > 0) {
      console.log('📝 Detalhes dos artigos processados:');
      console.log('');

      data.results.forEach((result, index) => {
        const icon = result.status === 'success' ? '✅' : '❌';
        console.log(`${icon} Artigo ${index + 1}: ${result.title}`);
        console.log(`   ID: ${result.article_id}`);
        console.log(`   Categoria: ${result.category}`);
        console.log(`   Passos completados: ${result.steps.filter(s => s.status === 'completed').length}`);
        if (result.error) {
          console.log(`   Erro: ${result.error}`);
        }
        console.log('');
      });
    }

    if (data.successful > 0) {
      console.log(`🎉 ${data.successful} artigo(s) publicado(s) com sucesso!`);
      console.log('');
      console.log(`🌐 Acesse: ${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/admin/dashboard para ver os artigos`);
    }
  })
  .catch(err => {
    console.error('❌ Erro ao fazer a requisição:', err.message);
    process.exit(1);
  });
