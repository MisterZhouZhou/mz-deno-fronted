const t={},n=`<p>接口描述：屏幕截图为图片或者pdf</p>
<p>请求方式：<code>GET</code></p>
<p>请求示例：</p>
<pre><code class="language-ts">// 指定地址、设备和类型
http://localhost:8000/api/screenShoot?url=http://www.baidu.com&amp;device=iPhone 6&amp;type=pdf

// 默认为图片， 指定设备和地址
http://localhost:8000/api/screenShoot?url=http://www.baidu.com&amp;device=iPhone 6
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
<td>device</td>
<td>否</td>
<td>string</td>
<td>生成图片/pdf的设备尺寸类型，默认iPhone 6</td>
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
<td>code</td>
<td>string</td>
<td>返回的状态码</td>
</tr>
<tr>
<td>data</td>
<td>object</td>
<td>截屏信息</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>返回的错误信息</td>
</tr>
</tbody>
</table>
<br/>
<p><strong>返回示例</strong></p>
<pre><code class="language-js">{
  &quot;code&quot;: 200,
  &quot;data&quot;: {
    &quot;url&quot;: &quot;uploads/f02c02f4-fcde-459c-b71c-897f22a669fc.png&quot;
  },
  &quot;msg&quot;: &quot;&quot;
}
</code></pre>
`;export{t as attributes,n as html};
