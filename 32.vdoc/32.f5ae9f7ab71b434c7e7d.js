webpackJsonp([32],{50:function(e,s,t){var o,n;__vdoc_config_=t(86),n=t(122),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options:e.exports).html=n)},86:function(e,s){},122:function(e,s){e.exports='<h2 id=->什么是组件？</h2> <p>组件（Component）是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素，Vue.js 的编译器为它添加特殊功能。在有些情况下，组件也可以是原生 HTML 元素的形式，以 <code>is</code> 特性扩展。</p> <h2 id=->使用组件</h2> <h3 id=->注册</h3> <p>之前说过，我们可以用 <code>Vue.extend()</code> 创建一个组件构造器：</p> <figure class="highlight js"><table><tr><td class=code><pre><div class=line><span class=keyword>var</span> MyComponent = Vue.extend({</div><div class=line>  <span class=comment>// 选项...</span></div><div class=line>})</div></pre></td></tr></table></figure><p>要把这个构造器用作组件，需要用 <code>Vue.component(tag, constructor)</code> <strong>注册</strong> ：</p> <figure class="highlight js"><table><tr><td class=code><pre><div class=line><span class=comment>// 全局注册组件，tag 为 my-component</span></div><div class=line>Vue.component(<span class=string>\'my-component\'</span>, MyComponent)</div></pre></td></tr></table></figure><p class=tip>对于自定义标签名字，Vue.js 不强制要求遵循 <a href=http://www.w3.org/TR/custom-elements/#concepts>W3C 规则</a>（小写，并且包含一个短杠），尽管遵循这个规则比较好。</p> <p>在注册之后，组件便可以用在父实例的模块中，以自定义元素 `<my-component></my-component></p>'}});