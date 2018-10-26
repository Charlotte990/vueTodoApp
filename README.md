# vue-todo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```


You will see the todo app, designed to work with local and state management via Vuex package:

https://vuex.vuejs.org/

I have commented out where I had intended to use Axios, but ran into CORS issues that I could not resolve when running this Vue App alongside the ExpressJS server.
Axios would have made the calls to the endpoints to the backend server to update the data. For now I have commented that out and it just runs locally on its own node server, storing data in a Vuex store.

https://github.com/axios/axios
