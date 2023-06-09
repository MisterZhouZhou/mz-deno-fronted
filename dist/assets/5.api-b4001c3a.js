const t={},n=`<p>接口描述：文件下载接口</p>
<p>请求方式：<code>GET</code></p>
<p>请求示例： <code>http://localhost:8000/downloads/xx.png</code></p>
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
<td>:file</td>
<td>是</td>
<td>string</td>
<td>下载的文件名称</td>
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
<p><strong>返回示例</strong>
无</p>
`;export{t as attributes,n as html};
