Este projeto é uma aplicação de gerenciamento de tarefas utilizando **React Native**, **Expo** e **AsyncStorage** para salvar as tarefas localmente. Ele também faz uma chamada à API pública JSONPlaceholder para buscar as tarefas quando o armazenamento local está vazio.

**Pré-requisitos**´\*\*
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

Node.js (recomenda-se a versão LTS)
Yarn ou npm (gerenciadores de pacotes)
React Native CLI (para executar o aplicativo em um dispositivo ou emulador)
Android Studio (para rodar no Android)

**Instalação**

Clone o repositório:

No terminal, digite o comando:

git clone https://github.com/danielMonteiro84/taskflow

Instale as dependências:

Navegue até a pasta do projeto e instale as dependências com npm ou yarn;

Após a instalação das dependências inicie o app digitando o comando

npx expo start --tunnel
´o comando abrirá um qrCode no terminal´

Execução no Android
Abra o Android Studio e inicie um emulador Android, ou baixe o aplicativo "expo go" da playstore;
Abra o aplicativo no seu dispositivo móvel e utilize o qrCode que apareceu no terminal para inicializar a aplicação.

**!! ATENÇÃO !!**

- A Tela de login inicial não tem validação, basta digitar qualquer coisa nos campos login e senha que o aplicativo passará para a próxima tela.
- Quando a lista de tarefas estiver vazia a aplicação fará a requisição para a API e exibira a lista inicial de tarefas
- Para excluir a tarefa deslize o campo da tarefa para o lado esquerdo
- Deslizando o campo da tarefa para o lado direito você pode editar a tarefa e alterar o estado entre 'pendente' e 'concluído'
- O campo "search" não tem a funcionalidade implementada, ele é somente ilustrativo.
- A tela de usuário não tem funcionalidades implementadas, ela é apenas ilustrativa.
