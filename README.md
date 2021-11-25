<h1 align="center"> 
	 Estudo de caso | Rotinas (Node and Elastic Stak) 🚀 
</h1>

## 💻 Sobre o projeto

### Criação de aplicação em Node que fará rotina básica de CRUD no Elasticsearch
### Subir aplicação em Node com APM Agent para coletar estatísticas da aplicação e enviar para o APM Server
### Configuração APM Server para receber métricas do APM Agent e enviar para o Elasticsearch
### Configuração Elasticsearch para receber os dados do APM e as interações da aplicação Node
### Configuração Kibana para consumir os dados do Elasticsearch com 5 visualizações
### 1 nó de Elasticsearch

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js][nodejs]
- [Elasticsearch][Elasticsearch]
- [Kibana][Kibana]
- [observability - APM][observability - APM]
- [yarn][yarn]
- [Docker][docker]
- [Git](https://git-scm.com)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs], [Docker][docker].
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

## 🚀 Como executar o projeto

```bash
# Clone este repositório
$ git clone https://github.com/weberthmo/node-and-elastic-stack.git
ode-and-elastic-stack

# iniciando backend/containers
$ cd node-and-elastic-stack\elk
$ docker-compose up

# iniciando api
$ cd node-and-elastic-stack\api
$ yarn dev
```

<h4>A api inciará na porta 8000 - acesse http://localhost:8000</h4>
<h4>Elastic na porta:9200 - acesse http://localhost:9200/</h4>
<h4>Kibana na porta:5601 - acesse http://localhost:5601/</h4>
<h4>APM na porta:8200 - acesse http://localhost:8200/</h4>

<h4 align="center"> 
	Estudo de caso | Rotinas (Node) 🚀 
</h4>

Feito por Weberth Moreira de Oliveira 👋🏽 [Entre em contato!](https://api.whatsapp.com/send?phone=5562982083372)

[Nodejs]: https://nodejs.org/
[Elasticsearch]: https://www.elastic.co/pt/elasticsearch/
[Kibana]: https://www.elastic.co/pt/kibana/
[observability - APM]: https://www.elastic.co/pt/apm/
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[docker]: https://docs.docker.com/docker-for-windows/install/
