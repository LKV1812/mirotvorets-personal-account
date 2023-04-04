export const indexTemplate = (content) => `
  <!DOCTYPE html>
  <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no, maximum-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="shortcut icon" sizes="16x16" href="assets/img/favicon/favicon-16x16.ico" type="image/x-icon" />
        <link rel="shortcut icon" sizes="24x24" href="assets/img/favicon/favicon-24x24.ico" type="image/x-icon" />
        <link rel="shortcut icon" sizes="32x32" href="assets/img/favicon/favicon-32x32.ico" type="image/x-icon" />
        <link rel="shortcut icon" sizes="48x48" href="assets/img/favicon/favicon-48x48.ico" type="image/x-icon" />
        <link rel="shortcut icon" sizes="16x16" href="assets/img/favicon/favicon-16x16.png" type="image/png" />
        <link rel="shortcut icon" sizes="24x24" href="assets/img/favicon/favicon-24x24.png" type="image/png" />
        <link rel="shortcut icon" sizes="32x32" href="assets/img/favicon/favicon-32x32.png" type="image/png" />
        <link rel="shortcut icon" sizes="48x48" href="assets/img/favicon/favicon-48x48.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="16x16" href="assets/img/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="24x24" href="assets/img/favicon/favicon-24x24.png" />
        <link rel="apple-touch-icon" sizes="32x32" href="assets/img/favicon/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="48x48" href="assets/img/favicon/favicon-48x48.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="assets/img/favicon/favicon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="assets/img/favicon/favicon-60x60.png" />
        <title>Личный кабинет вход. Личный кабинет регистрация. Прием вторсырья в Тюмени. Миротворец Тюмень. 
        Оставить заявку онлайн.
        </title>
        <meta name="keywords" content="Личный кабинет вход. Личный кабинет регистрация. Миротворец Тюмень. 
        Оставить заявку онлайн. Прием вторсырья, прием макулатуры, сдать макулатуру, сдать картон, прием картона, 
        сдать стекло, прием стекла, оставить заявку онлайн." />
        <meta name="description" content="Личный кабинет вход. Личный кабинет регистрация. Миротворец Тюмень. Оставить заявку онлайн. Прием вторсырья в Тюмени по хорошим ценам. Правила упаковки вторсырья. Компания Миротворец. Покупаем отходы производства и промышленные отходы по высоким ценам. Макулатура, отходы пластмасс, картон, алюминиевые банки, поддоны, стекло, текстиль" />
        <script src="/static/client.js"></script>
    </head>
  <body>
    <div id="react_root">${content}</div>
    <script src="https://api-maps.yandex.ru/2.1/?apikey=4ce07f9d-d0c5-48da-8c8a-f943b956c1c0&amp;lang=ru_RU" 
        type="text/javascript">    
    </script>
    <script src="vendor/libs/jquery/dist/jquery.min.js"></script>
  </body>
</html>
`;
