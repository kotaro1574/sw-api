import proxy from 'http-proxy-middleware';
 
module.exports = function(app) {
    const headers  = {
        "Content-Type": "application/json",
    }
    app.use(proxy("/api/people/", { target: "https://swapi.dev/",changeOrigin: true,secure: false,headers: headers}));  
};
