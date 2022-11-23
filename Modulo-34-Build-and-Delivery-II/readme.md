## 📚 Modulo 33 - Build and Delivery II
Conteúdo referente ao curso Desenvolvedor Full-Stack Python da EBAC.

Módulo Build and Delivery II (assuntos abordados):
- **Aula 01:** FTP;
- **Aula 02:** SSH;
- **Aula 03:** Delivery contínuo;

## 📚 Conteúdo

### FTP
- File Transfer Protocol

### SSH
- Protocolo padrão de acesso do linux
- Criptografado por padrão
- Não consome muito recurso
- Envia apenas a saída dos comandos
- Já vem instalado na maioria das distribuições Linux
- Server já vem instalado

### Deploy
*Implementação*
- Infraestrutura
- Domínio
- Entrega

### CI
*Continuous Integration*
- Colaboração
- Code Review / Merge
- Automação (pipelines)

### CD
*Continuous Delivery*
- Ciclos evolutivos
- Tagueamento
- deploy automático

### DEVOPS
### DEV
- Code (GitLab, Git)
- Build (Gradle, Senatype Nexus)
- Test (Azure)
- Release (OpenStack)

### OPS
- Plan (Jenks)
- Monitor (Grafana, Graylog)
- Operate (Kubernetes, Ansible, Chef)
- Deploy (AWS, Docker)


## 📚 Code Together

### Briefing
1. Disponibilizar um projeto no Github Pages

2. Criar um repositório com o nome do seu usuário + o sufixo .github.io

3. Habilitar o Github Pages em seu repositório, ou

4. Instalar em se gh-pages em seu projeto: yarn add -D gh-pages

5. No package.json, configurar homepage igual ao seu Github Pages,
ex.: https://cavalcantemmarcelo.github.io/style-guide/

6. Ainda no package.json, adicionar em scripts: "deploy": "gh-pages -d
build"

### Conteúdo base
1. Code Together: https://github.com/cavalcantemmarcelo/style-guide

2. GitHub Pages: https://pages.github.com/