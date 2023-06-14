const t={},n=`<p>接口描述：根据短链获取长链接接口</p>
<p>请求方式：<code>GET</code></p>
<p>请求示例： <code>http://localhost:8000/api/short/HhCzi1vp</code></p>
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
<td>:url</td>
<td>是</td>
<td>string</td>
<td>短链url</td>
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
<td>长链信息</td>
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
  &quot;data&quot;: &quot;http://www.baidu.com&quot;,
  &quot;msg&quot;: &quot;&quot;
}
</code></pre>
`;export{t as attributes,n as html};
