/** Teoria de _document
 * Esto es el HTML que carga ao cargar la página
 * Este evento ocurre una sola vez al iniciar la aplicación
 * Aqui es donde se ponen las fuentes para que carguen una sola vez al iniciar la app
 * La documentación se encuentra en el siguiente link
 * https://nextjs.org/docs/advanced-features/custom-document
 */
 import Document, { Html, Head, Main, NextScript } from 'next/document'

 export default class MyDocument extends Document {
   render() {
     return (
       <Html>
         <Head>
           <link rel="preconnect" href="https://fonts.gstatic.com" />
           <link
             href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap"
             rel="stylesheet"
           />
           <link rel="shortcut icon" href="/favicon.png" type="image/png" />
         </Head>
         <body>
           <Main />
           <NextScript />
         </body>
       </Html>
     )
   }
 }
