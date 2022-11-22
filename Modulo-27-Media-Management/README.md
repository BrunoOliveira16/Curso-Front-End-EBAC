## 📚 Modulo 27 - Media Management with CSS
Conteúdo referente ao curso Desenvolvedor Full-Stack Python da EBAC.

Módulo Media Management with CSS (assuntos abordados):
- **Aula 01:** Imagens;
- **Aula 02:** SVG;
- **Aula 03:** Videos;

## 📚 Conteúdo
### Framework Simulator
Estrutura básica de projetos front-end para estudos de HTML, JS, CSS / SASS. 

- Flexível para você adaptar para projetos e estudos.
- Extensível, você consegue instalar novas bibliotecas e adaptar para outras linguagens.  

### Stack inicial
- Babel
- CSS
- HTML
- JavaScript
- Node / NPM
- Sass
- Webpack

### Instalação
- Requer o node.js instalado
- Baixar ou clonar este repositório
- Acessar com o terminal a pasta do projeto, baixado e **executar o comando**:
```
npm install 
```
### Execução
- Na raiz do projeto, executar o comando:
```
npm run dev
```

## 📚 CodeTogether

### Briefing
1. Criar página / site one page com galeria de images, vídeo player e
animação com SVG, de acordo com o conteúdo das aulas
2. Analisar o código disponibilizado e testar melhorias
3. Aplicar alterações e melhorias de interface


## Update
- Atualizada as dependecias no package.json na data 22.11.2022
- Comandos utilizados para a tarefa:

Este comando verifica as ultimas atualizações dos pacotes no package.json:
```
npm outdated
```

Foi instalado o pacote npm-check-update globalmente através do comando abaixo, para instalar versões major que não permitem mudanças através do comando básico npm update:
```
npm install -g npm-check-updates
```

Foi efetuado o comando abaixo para atualizar as versões no package.json, tanto dependencies quanto devDependencies, assim o npm poderá instalar as versões major.
```
ncu -u
```

Durante a execução do comando acima, o windows impediu a execução do comando por conta de privilégios para executar scripts, devido politica de segurança, foi necessário no próprio power shell executar o comando abaixo.
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

após a execução do comando, foi efetuado novamente o comando ncu -u e após efetuado o comando npm install.