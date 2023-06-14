const t={},n=`<warning>
  deno deploy上部署无法获取write权限，该接口会报错，建议本地或其他服务器
</warning>
<p>接口描述：文件上传接口</p>
<p>请求方式：<code>POST</code></p>
<p>请求示例：</p>
<pre><code class="language-ts">curl  -X POST \\
  'http://localhost:8000/upload' \\
  --header 'Accept: */*' \\
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \\
  --form 'file=@/Users/zhouwei/Desktop/WorkSpace/Deno/mz-deno-api/deno.json'
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
<td>file</td>
<td>是</td>
<td>file</td>
<td>上传的文件</td>
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
<td>登录信息</td>
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
  &quot;data&quot;: [
    {
      &quot;fileName&quot;: &quot;95f85757-987a-4f34-ab3d-d6adcfc4b62d-index.ts&quot;,
      &quot;name&quot;: &quot;95f85757-987a-4f34-ab3d-d6adcfc4b62d-index&quot;,
      &quot;ext&quot;: &quot;ts&quot;,
      &quot;size&quot;: 0.00049591064453125,
      &quot;url&quot;: &quot;uploads/95f85757-987a-4f34-ab3d-d6adcfc4b62d-index.ts&quot;
    }
  ],
  &quot;msg&quot;: &quot;&quot;
}
</code></pre>
`;export{t as attributes,n as html};
