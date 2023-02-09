import Vue from 'vue'
import App from './App.vue'
import 'animate.css';
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

Vue.config.productionTip = false


const requireComponent = require.context(
  './components',
  true,
  /.vue$/
);

requireComponent.keys().forEach(fileName=> {
  const ComName =  
    fileName
    .split('/')
    .pop()
    .split('.')
    .shift();
  const comConfig = requireComponent(fileName);
  Vue.component(
    upperFirst(camelCase(ComName)),
    comConfig.default || comConfig
  );
})

new Vue({
  render: h => h(App),
}).$mount('#app')

