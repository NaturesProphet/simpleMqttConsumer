# Simple MQTT Consumer

Um script simples para consumir as mensagens de um servidor de MQTT

## Testando

1.  Copie o arquivo .env.example com o novo nome ".env" e deixe o na raiz
2.  Edite os valores das variáveis de ambiente lá dentro para ficar compatível com seu cenário de uso.
 > Para testar, logicamente é necessário que tenham mensagens circulando no servidor.
  para isso, há um script que faz isso, para podermos seguir o teste. execute:
  ```bash
  npm run pub
  ```
  > isto irá disparar um fluxo contínuo de 4 mensagens por segundo no servidor para que possamos testar o consumidor.
3.  starte o consumidor e veja a mágica.
   ```bash
   npm start
   ```
