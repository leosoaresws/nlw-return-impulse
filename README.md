<h1 align="center">
FeedGet App
</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033">

 <img src="https://img.shields.io/static/v1?label=NLW&message=Return&color=E51C44&labelColor=0A1033" alt="NLW Return" />
</p>


![cover](.github/cover.png?style=flat)


## 💻 Projeto
Uma feature para ajudar os usuários a enviar feedbacks para os donos do site/app sobre algum problema ou sugestão de melhoria desenvolvido durante a NLW Return - Impulse realizada pela <a src="">Rocketseat</a> 🚀. O projeto pode evoluir e até se torna quem sabe uma lib/componente, visto que é um recurso muito usual.

## ✨ Tecnologias

-   [ ] React
-   [ ] React Native
-   [ ] Typescript
-   [ ] Node JS
-   [ ] Vite
-   [ ] Expo
-   [ ] Tailwind
-   [ ] Phosphor Icons
-   [ ] Reanimated
-   [ ] Prisma
-   [ ] Axios
-   [ ] Bottom Sheet
-   [ ] Gesture Handler
-   [ ] Express
-   [ ] Node Mailer
-   [ ] Jest
-   [ ] HtmlToCanvas


## :hammer_and_wrench: Features 

-   [ ] Tirar um Screenshot da pagina.
-   [ ] Gravar o feedback e a imagem em Base64.
-   [ ] Enviar por e-mail o Feedback formatado em Html.


## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/eX2mj5xjG87axdDAkSRgq1/Feedback-Widget-Community). É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.


## Executando o projeto

Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.
Em seguida, inicie o projeto.

<b>Mobile:</b>
```cl
expo start
```
<b>Back-End e Front-End:</b>
```cl
npm run dev
```

No back-end é necessário criar um arquivo para suas variáveis de ambiente. Por exemplo:
```cl
DATABASE_URL="file:{path do back de dados sqlite}"

# [SMTP Configs]
SMTP_HOST="{host do servidor de e-mail}"
SMTP_PORT={porta do servidor de e-mail}
SMTP_USER="{usuário do servidor de e-mail}"
SMTP_PASS="{password do servidor de e-mail}"
```
Para testar em desenvolvimento recomendo usar como servidor de smtp server o <a src="https://mailtrap.io/">Mailtrap</a>.

No front-end é necessário configurar o arquivo .evn.local para com o link da api do back-end. Por exemplo:
```cl
VITE_AP_URL={host da api back-end}
````

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

<br />
