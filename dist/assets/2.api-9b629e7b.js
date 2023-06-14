const t={},n=`<!-- <warning>
  111
</warning> -->
<p>接口描述：登录授权接口</p>
<p>请求方式：<code>POST</code></p>
<p>请求示例： <code>http://localhost:8000/login</code></p>
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
<td>name</td>
<td>是</td>
<td>string</td>
<td>用户姓名</td>
</tr>
<tr>
<td>password</td>
<td>是</td>
<td>string</td>
<td>用户密码</td>
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
  &quot;data&quot;: {
    &quot;name&quot;: &quot;zw&quot;,
    &quot;token&quot;: &quot;eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoienciLCJwYXNzd29yZCI6IiQyYSQxMCQ4eEc5L3Y1TGtRNXdjdUZ2bjRuMWwuN0o2WUVBRWN2dVl1SXdldi9kR3lVVEdmUHVzNkVTSyIsImV4cCI6MTY4Njc1NjYzOH0.mz8-GzZq1C5sOHaCcUbY5UOKMab3EQRdU4Hl6cARVG1ZPMYgwhcDf3t7Wo1krJAhBlDtOoi6dic03NpxeJu0fQ&quot;
  },
  &quot;msg&quot;: &quot;&quot;
}
</code></pre>
`;export{t as attributes,n as html};
