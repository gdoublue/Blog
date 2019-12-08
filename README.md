# Blog
<form></form> 要有提交按钮 <input style="submit"></input>		
form 里面只有button ，button会升级为submit按钮；
	<button></button>		
label的for 和 input 的 id 是一对；
iframe 的 name 和 a、form 的 target 联合用；

<table>
	<colgroup></colgroup>
	<thead>tr>th*4</thead>
	<tbody></tbody>
	<tfoot></tfoot>
</table>
//tfoot 放在前面，浏览器会自动调整展示顺序；

<!-- 1026 Saturday -->

---



div 高度 由内部文档流元素的高度总和决定；
文档流：文档内元素的流动方向；

<span>不能用宽高限定</span>

如何用css 画三角形？
关键词：css tricks shape
https://css-tricks.com/the-shapes-of-css/

<!-- 1027 -->
transition: box-shadow 0.5s;//过渡

 使用   box-sizing: border-box;
 width: 48% 就包含边框了


 <!-- 1028 -->
 css gradient generator   
 css  渐变 生成器

 下载壁纸：wallhaven.cc
 上传图片 sm.ms
 cursor: pointer; /*光标 点击*/
localStorage.setItem('zzz', JSON.stringify(hash))
已json格式 存储到本地浏览器缓存，下次刷新后用
JSON.parse(localStorage.getItem(name) || 'null'
覆盖初始值；这样就能保存用户的设置了！

previousSibling  //捕获前一个标签

<a name="boolean"></a>
### boolean型
1.变量没有值 -undefined
2.有object，先不想赋值， -null；
有一个非object， 赋值 -undefined
 Boolean()  ！！0 /''  false

 <!-- 10.31 -->
 preventDefault()
 阻止元素发生默认的行为(例如去除a标签的链接功能)

---

```css
background-image: url("./img/loading.png");
background-size: 100% 100%; /**图片大小自适应*/

 /* for Chrome 隐藏滚动条，但可以滚动 */
.inner-container::-webkit-scrollbar {
    display: none;
}
```

meta:vp +[^tab]

git commit --amend  <!--两次commit 注释合并-->

---

### 1129

使用 then ，完成后再执行，不然会出错

- css  background-size：cover;   不拉升适应覆盖

