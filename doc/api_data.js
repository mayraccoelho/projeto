define({ "api": [
  {
    "type": "get",
    "url": "/ocorrencias",
    "title": "Lista todas as ocorrencias",
    "name": "getOcorrencias",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n \"_id\": \"5deaccd1a091532838646085\",\n {\n  \"especificacaoTecnica\": {\n      \"fabricante\": \"Boeing\",\n      \"modelo\": \"707\",\n      \"prefixo\": \"PP-VJB\"\n  },\n  \"ramo\": \"Aviação Comercial\",\n  \"informacoesVoo\": {\n      \"companhiaAerea\": \"Varig\",\n      \"voo\": \"810\",\n      \"origem\": \"SBGL\",\n      \"destino\": \"KLAX\"\n  },\n  \"informacoesOcorrencia\": {\n      \"classificacao\": \"Acidente\",\n      \"data\": \"27/11/1962\",\n      \"tipo\": \"CFIT - Colisão em Voo Controlado com o Terreno\",\n      \"cidade\": \"Lima\",\n      \"estado\": \"EX\",\n      \"pais\": \"Peru\",\n      \"vitimas\": 97,\n      \"vitimasFatais\": 97\n  },\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/ocorrenciasRoute.js",
    "group": "C__Users_reprograma_Desktop_MCoelho_reprograma_projeto_final_src_routes_ocorrenciasRoute_js",
    "groupTitle": "C__Users_reprograma_Desktop_MCoelho_reprograma_projeto_final_src_routes_ocorrenciasRoute_js"
  }
] });
