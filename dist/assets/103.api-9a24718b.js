const t={},n=`<p>接口描述：生成不同尺寸的占位图</p>
<p>请求方式：<code>POST</code></p>
<p>请求示例： <code>http://localhost:8000/api/placeholder/100x100</code></p>
<blockquote>
<p>其他产品如：https://via.placeholder.com/50x50</p>
</blockquote>
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
<td>size</td>
<td>是</td>
<td>string</td>
<td>number</td>
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
<td>返回的文件流</td>
</tr>
</tbody>
</table>
<br/>
<p><strong>返回示例</strong></p>
<pre><code class="language-js">{
  &quot;code&quot;: 400,
  &quot;data&quot;: null,
  &quot;msg&quot;: &quot;验证码位数错误&quot;
}
</code></pre>
`;export{t as attributes,n as html};
