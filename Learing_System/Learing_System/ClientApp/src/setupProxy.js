// //const { createProxyMiddleware } = require("http-proxy-middleware");

// //const { env } = require('process');

// //const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
// //    env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:20346';

// //const context = [
// //    "/",
// //    "/about"
// //];

// //module.exports = function (app) {
// //    const appProxy = createProxyMiddleware(context, {
// //        target: target,
// //        secure: false,
// //        headers: {
// //            Connection: 'Keep-Alive'
// //        }
// //    });

// //    app.use(appProxy);
// //};


// const { createProxyMiddleware } = require("http-proxy-middleware");

// const { env } = require('process');

// const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
//     env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:20346';

// module.exports = function (app) {
//     app.use(
//         createProxyMiddleware("/api", {
//             target: target,
//             changeOrigin: true,
//         })
//     );
// };
