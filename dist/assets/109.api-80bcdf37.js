const t={},n=`<p>接口描述：调整图片大小，返回image/png</p>
<p>请求方式：<code>GET</code></p>
<p>请求示例：</p>
<pre><code class="language-ts">// 默认根据100*100的尺寸并按自动比例调整
http://localhost:8000/api/image/resize?url=https://images.pexels.com/photos/17172210/pexels-photo-17172210.jpeg

// 按自定义大小生成图片
http://localhost:8000/api/image/resize?url=https://images.pexels.com/photos/17172210/pexels-photo-17172210.jpeg&amp;size=200x300&amp;auto=false
</code></pre>
<br/>
<p><strong>请求参数说明</strong>：</p>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>是否必填</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>url</td>
<td>是</td>
<td>string</td>
<td>页面地址</td>
</tr>
<tr>
<td>size</td>
<td>false</td>
<td>string</td>
<td>图片的尺寸, 默认100x100</td>
</tr>
<tr>
<td>auto</td>
<td>否</td>
<td>string</td>
<td>boolean</td>
</tr>
</tbody>
</table>
<br/>
<p><strong>返回参数说明</strong>：</p>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>_</td>
<td>_</td>
<td>返回的image/png</td>
</tr>
</tbody>
</table>
<br/>
<p><strong>返回示例</strong>
无</p>
`;export{t as attributes,n as html};
