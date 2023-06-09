const t={},n=`<p>接口描述：根据内容生成二维码接口，返回html</p>
<p>请求方式：<code>GET</code></p>
<p>请求示例： <code>http://localhost:8000/api/qrcode/show?data=nihao&amp;size=300</code></p>
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
<td>data</td>
<td>是</td>
<td>string</td>
<td>url或者文本</td>
</tr>
<tr>
<td>size</td>
<td>否</td>
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
<td>返回的html</td>
</tr>
</tbody>
</table>
<br/>
<p><strong>返回示例</strong>
无</p>
`;export{t as attributes,n as html};
