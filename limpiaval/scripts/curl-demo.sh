#!/bin/bash

# Script para probar los endpoints de la API de Limpiaval.
# Asegúrate de que el servidor backend esté corriendo en http://localhost:3000
# Uso: ./scripts/curl-demo.sh

# Colores para la salida
GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo -e "${GREEN}--- Probando GET /api/plans ---${NC}"
curl -s http://localhost:3000/api/plans | jq
echo ""

echo -e "${GREEN}--- Probando GET /api/services ---${NC}"
curl -s http://localhost:3000/api/services | jq
echo ""

echo -e "${GREEN}--- Probando GET /api/gallery ---${NC}"
curl -s http://localhost:3000/api/gallery | jq
echo ""

echo -e "${GREEN}--- Probando GET /api/testimonials ---${NC}"
curl -s http://localhost:3000/api/testimonials | jq
echo ""

echo -e "${GREEN}--- Probando POST /api/contact (válido) ---${NC}"
curl -s -X POST http://localhost:3000/api/contact \
 -H 'Content-Type: application/json' \
 -d '{"name":"Juan Perez","email":"juan.perez@test.com","message":"¡Hola! Me gustaría saber más sobre sus servicios."}' | jq
echo ""

echo -e "${GREEN}--- Probando POST /api/contact (inválido - email) ---${NC}"
curl -s -X POST http://localhost:3000/api/contact \
 -H 'Content-Type: application/json' \
 -d '{"name":"Ana","email":"ana-no-valido","message":"Mensaje de prueba."}' | jq
echo ""

echo -e "${GREEN}--- Probando POST /api/quote ---${NC}"
curl -s -X POST http://localhost:3000/api/quote \
 -H 'Content-Type: application/json' \
 -d '{"name":"Maria Lopez","email":"maria.lopez@test.com","phone":"555-1234", "serviceId": 2}' | jq
echo ""