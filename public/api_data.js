define({ "api": [
  {
    "type": "get",
    "url": "/:id",
    "title": "Deleta uma ocorrencia por ID",
    "name": "delete",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n\"mensagem\": \"Ocorrencia removida com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/ocorrenciasRoute.js",
    "group": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js",
    "groupTitle": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js"
  },
  {
    "type": "get",
    "url": "ocorrencias/fabricantes/:fabricante",
    "title": "Lista todas as ocorrencias por fabricante",
    "name": "getFabricante",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n   \"_id\": \"5deaccd1a091532838646085\",\n{\n    \"especificacaoTecnica\": {\n        \"fabricante\": \"Boeing\",\n        \"modelo\": \"707\",\n        \"prefixo\": \"PP-VJB\"\n    },\n    \"ramo\": \"Aviação Comercial\",\n    \"informacoesVoo\": {\n        \"companhiaAerea\": \"Varig\",\n        \"voo\": \"810\",\n        \"origem\": \"SBGL\",\n        \"destino\": \"KLAX\"\n    },\n    \"informacoesOcorrencia\": {\n        \"classificacao\": \"Acidente\",\n        \"data\": \"27/11/1962\",\n        \"tipo\": \"CFIT - Colisão em Voo Controlado com o Terreno\",\n        \"cidade\": \"Lima\",\n        \"estado\": \"EX\",\n        \"pais\": \"Peru\",\n        \"vitimas\": 97,\n        \"vitimasFatais\": 97\n    },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/ocorrenciasRoute.js",
    "group": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js",
    "groupTitle": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js"
  },
  {
    "type": "get",
    "url": "ocorrencias/:id",
    "title": "Lista unica ocorrencia por ID",
    "name": "getOcorrencia",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n   \"_id\": \"5deaccd1a091532838646085\",\n{\n    \"especificacaoTecnica\": {\n        \"fabricante\": \"Boeing\",\n        \"modelo\": \"707\",\n        \"prefixo\": \"PP-VJB\"\n    },\n    \"ramo\": \"Aviação Comercial\",\n    \"informacoesVoo\": {\n        \"companhiaAerea\": \"Varig\",\n        \"voo\": \"810\",\n        \"origem\": \"SBGL\",\n        \"destino\": \"KLAX\"\n    },\n    \"informacoesOcorrencia\": {\n        \"classificacao\": \"Acidente\",\n        \"data\": \"27/11/1962\",\n        \"tipo\": \"CFIT - Colisão em Voo Controlado com o Terreno\",\n        \"cidade\": \"Lima\",\n        \"estado\": \"EX\",\n        \"pais\": \"Peru\",\n        \"vitimas\": 97,\n        \"vitimasFatais\": 97\n    },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/ocorrenciasRoute.js",
    "group": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js",
    "groupTitle": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js"
  },
  {
    "type": "get",
    "url": "/ocorrencias",
    "title": "Lista todas as ocorrencias gerando arquivo PDF",
    "name": "getOcorrencias",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n   \"_id\": \"5deaccd1a091532838646085\",\n{\n    \"especificacaoTecnica\": {\n        \"fabricante\": \"Boeing\",\n        \"modelo\": \"707\",\n        \"prefixo\": \"PP-VJB\"\n    },\n    \"ramo\": \"Aviação Comercial\",\n    \"informacoesVoo\": {\n        \"companhiaAerea\": \"Varig\",\n        \"voo\": \"810\",\n        \"origem\": \"SBGL\",\n        \"destino\": \"KLAX\"\n    },\n    \"informacoesOcorrencia\": {\n        \"classificacao\": \"Acidente\",\n        \"data\": \"27/11/1962\",\n        \"tipo\": \"CFIT - Colisão em Voo Controlado com o Terreno\",\n        \"cidade\": \"Lima\",\n        \"estado\": \"EX\",\n        \"pais\": \"Peru\",\n        \"vitimas\": 97,\n        \"vitimasFatais\": 97\n    },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/ocorrenciasRoute.js",
    "group": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js",
    "groupTitle": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js"
  },
  {
    "type": "get",
    "url": "ocorrencias/vitimasfatais",
    "title": "Lista todas as ocorrencias que tiveram vitimas fatais",
    "name": "getVitimas",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n   \"_id\": \"5deaccd1a091532838646085\",\n{\n    \"especificacaoTecnica\": {\n        \"fabricante\": \"Boeing\",\n        \"modelo\": \"707\",\n        \"prefixo\": \"PP-VJB\"\n    },\n    \"ramo\": \"Aviação Comercial\",\n    \"informacoesVoo\": {\n        \"companhiaAerea\": \"Varig\",\n        \"voo\": \"810\",\n        \"origem\": \"SBGL\",\n        \"destino\": \"KLAX\"\n    },\n    \"informacoesOcorrencia\": {\n        \"classificacao\": \"Acidente\",\n        \"data\": \"27/11/1962\",\n        \"tipo\": \"CFIT - Colisão em Voo Controlado com o Terreno\",\n        \"cidade\": \"Lima\",\n        \"estado\": \"EX\",\n        \"pais\": \"Peru\",\n        \"vitimas\": 97,\n        \"vitimasFatais\": 97\n    },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/ocorrenciasRoute.js",
    "group": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js",
    "groupTitle": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js"
  },
  {
    "type": "post",
    "url": "/ocorrencias",
    "title": "",
    "name": "ocorrencias",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "fabricante",
            "optional": false,
            "field": "cpf",
            "description": "<p>CPF do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "modelo",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "prefixo",
            "optional": false,
            "field": "email",
            "description": "<p>Email do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "ramo",
            "optional": false,
            "field": "dataNascimento",
            "description": "<p>Data de Nascimento do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "companhiaAerea",
            "optional": false,
            "field": "estadoCivil",
            "description": "<p>Estado Civil do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "voo",
            "optional": false,
            "field": "telefone",
            "description": "<p>Telefone do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "origem",
            "optional": false,
            "field": "comprou",
            "description": "<p>Status do cliente.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "clientes",
            "description": "<p>Mensgem de sucesso ao incluir uma ocorrencia</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 201 Created\n{\n    status: true,\n    mensagem: \"Cliente incluído com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/ocorrenciasRoute.js",
    "group": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js",
    "groupTitle": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js"
  },
  {
    "type": "get",
    "url": "/:id",
    "title": "Altera uma ocorrencia por ID",
    "name": "put",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"mensagem\": \"Atualizado com sucesso\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/ocorrenciasRoute.js",
    "group": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js",
    "groupTitle": "C__Users_SempreIT_Documents_Programa__o_reprograma_projetoFinalReprograma_reprograma_projeto_final_src_routes_ocorrenciasRoute_js"
  }
] });
