# Reprograma + Mercado Livre | Projeto Final 
##### Desenvolvimento de API 'Vamos voar em segurança'
###### Esta API tem como finalidade gerar relatório estatístico personalizado de todos os incidentes, incidentes graves e acidentes aéreos que já possuem relatório final oficial realizado pelo CENIPA. O objetivo é proporcionar a conscientização de vários elementos que possam contribuir para um acidente aéreo.

## Tecnologias Utilizadas
### Linguagens
- Javascript<br>
- NodeJS<br>

### Banco de Dados
- MongoDB<br>

### Dependências
- Express<br>
- Nodemon<br>
- Mongoose<br>
- Body-parser<br>
- Fs<br>
- ApiDoc <br>
- Pdfkit <br>

## Endpoints Criados

<table>
<thead>
<th>Verbo</th>
<th>Funcionalidade</th>
<th>Caminho</th>
</thead>
<tbody>

<tr>
<td>GET</td>
<td>Listar todas as ocorrências</td>
<td>'/ocorrencias'
</tr>

<tr>
<td>GET</td>
<td>Gerar PDF</td>
<td>'/ocorrencias/gerar/pdf'
</tr>

<tr>
<td>GET</td>
<td>Listar ocorrencias que tiveram vítimas fatais</td>
<td>'/ocorrencias/vitimasfatais'</td>
</tr>

<tr>
<td>GET</td>
<td>Buscar ocorrência específica por ID</td>
<td>'/ocorrencias/:id'</td>
</tr>

<tr>
<td>GET</td>
<td>Buscar ocorrências por fabricante da aeronave</td>
<td>'/ocorrencias/fabricantes/:fabricante'</td>
</tr>

<tr>
<td>POST</td>
<td>Adicionar ocorrência</td>
<td>'/ocorrencias'</td>
</tr>

<tr>
<td>PUT</td>
<td>Atualizar ocorrência por ID</td>
<td>'/ocorrencias/:id'</td>
</tr>

<tr>
<td>DELETE</td>
<td>Deletar ocorrência por ID</td>
<td>'/ocorrencias/:id'</td>
</tr>
</table>




## Postman

https://www.getpostman.com/collections/3a7d1c80e80e6a40f200

## Heroku

https://reprograma-projeto-final.herokuapp.com/
