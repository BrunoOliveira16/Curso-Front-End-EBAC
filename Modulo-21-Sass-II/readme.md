## 📚 Modulo 22 - Sass II
Conteúdo referente ao curso Desenvolvedor Full-Stack Python da EBAC.

Módulo Sass II (assuntos abordados):
- **Aula 01:** Modules;
- **Aula 02:** Mixins;
- **Aula 03:** Extensão e Herança;
- **Aula 04:** Operadores;
- **Aula 05:** BEM CSS;

## 📚 Conteúdo
### Modules
O Sass fornece muitos módulos integrados que contêm funções úteis (e ocasionalmente mixin). Esses módulos podem ser carregados com a @useregra como qualquer folha de estilo definida pelo usuário e suas funções podem ser chamadas como qualquer outro membro do módulo . Todos os URLs de módulos integrados começam com sass:para indicar que fazem parte do próprio Sass.

O Sass fornece os seguintes módulos integrados:
- mathmódulo: fornece funções que operam em números .
- stringmódulo: facilita a combinação, pesquisa ou separação de strings .
- colormódulo: gera novas cores com base nas existentes, facilitando a criação de temas de cores.
- listmódulo: permite acessar e modificar valores em listas .
- mapmódulo: permite consultar o valor associado a uma chave em um mapa e muito mais.
- selectormódulo: fornece acesso ao poderoso mecanismo seletor do Sass.
- metamódulo: expõe os detalhes do funcionamento interno do Sass.

### Mixins
Mixins permitem que você defina estilos que podem ser reutilizados em toda a sua folha de estilo. Eles facilitam evitar o uso de classes não semânticas como .float-left, e distribuir coleções de estilos em bibliotecas.

Mixins são definidos usando a @mixinregra at, que é escrita @mixin <name> { ... }ou @mixin name(<arguments...>) { ... }. O nome de um mixin pode ser qualquer identificador Sass e pode conter qualquer instrução que não seja de nível superior . Eles podem ser usados ​​para encapsular estilos que podem ser descartados em uma única regra de estilo ; eles podem conter regras de estilo próprias que podem ser aninhadas em outras regras ou incluídas no nível superior da folha de estilo; ou podem servir apenas para modificar variáveis.

Os mixins são incluídos no contexto atual usando a @includeregra at, que é escrita @include <name>ou @include <name>(<arguments...>), com o nome do mixin incluído.

### Extensão e Herança
A herança é uma das melhores funcionalidades do Sass. Ela deixa seus estilos muito mais simples de se escrever e deixa a marcação mais limpa também. Ela é feita usando a diretiva @extend:

### Operadores
O Sass oferece suporte a vários recursos úteis operatorspara trabalhar com valores diferentes. Isso inclui os operadores matemáticos padrão como +e *, bem como operadores para vários outros tipos:

- ==e!= são usados ​​para verificar se dois valores são iguais.
- +, -, *, /, e% têm seu significado matemático usual para números, com comportamentos especiais para unidades que correspondem ao uso de unidades em matemática científica.
- <, <=, >, e>= verifique se dois números são maiores ou menores um do outro.
and, or, enot têm o comportamento booleano usual. Sass considera todos os valores “verdadeiros”, exceto para false e null.
- +, -, e/ pode ser usado para concatenar strings.

### BEM CSS
BEM é uma metodologia CSS (ou convenção de nomenclatura) usada no mundo todo. É um acrônimo para Bloco, Elemento e Modificador. Esses são os 3 pilares do padrão BEM, tendo cada um seu significado, sua função e regras próprias de escrita.
Vantagens:
- Código desacoplado;
- Reúso automático de código;
- Menos repetições;
- Rápida identificação de estruturas HTML através do CSS (e vice-versa);
- Independência de classes;
- Seletores menores e mais performáticos;
- CSS mais manutenível.

## 📚 Code Together
### Briefing
1. ter no node instalado

2. instalar o sass (https://sass-lang.com/install):
```
npm install -g sass    
```
3. criar projeto ou clonar o repositório 

4. criar ou alterar arquivo style.scss

5. rodar o comando para processar o css:
```
sass ./scss/style.scss ./css/style.css 
```
6. customizar o projeto 

7. salvar alterações

8. comitar no seu repositório

9. enviar o link do repositório para o portal da EBAC


## 📝 Documentações
- **SASS**
```
https://sass-lang.com/documentation/
```
- **Less**
```
https://lesscss.org/functions/
```

- **Stylus**
```
https://stylus-lang.com/docs/
```