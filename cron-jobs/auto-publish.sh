#!/bin/bash
# Cron job script to auto-publish articles with AI processing
# This script should be called by an external cron service like cron-job.org or Railway cron

SITE_URL="${SITE_URL:-https://spaceflight-production.up.railway.app}"
CRON_SECRET="${CRON_SECRET}"

echo "Auto-publishing articles with AI processing..."

response=$(curl -s -w "\n%{http_code}" -X POST \
  "$SITE_URL/api/auto-publish" \
  -H "Authorization: Bearer $CRON_SECRET" \
  -H "Content-Type: application/json")

http_code=$(echo "$response" | tail -n1)
body=$(echo "$response" | sed '$d')

if [ "$http_code" -eq 200 ]; then
  echo "✅ Success: Articles published successfully"
  echo "$body"
  exit 0
else
  echo "❌ Error: HTTP $http_code"
  echo "$body"
  exit 1
fi
