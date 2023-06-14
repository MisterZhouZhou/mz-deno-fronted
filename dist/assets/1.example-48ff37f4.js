const n={},e=`<p>请求示例：</p>
<pre><code>socket = new WebSocket(
  \`ws://localhost:8000/ws\`,
);
// 加入群组
const event = {
  event: 'join',
  groupName: radioObj.arr[val],
  userName: group.currentUserName
}
socket.send(JSON.stringify(event))
// 发送消息
const event = {
  event: 'message',
  data: group.input
}
socket.send(JSON.stringify(event))
// 接收消息
const onMessageReceived = (msg: MessageEvent) =&gt; {
  const data = typeof msg.data === 'string' ? JSON.parse(msg.data) : msg.data;
  switch (data.event) {
    case 'users':
      // TODO
      break;
    case 'messages':
      // TODO
      break;
    default:
      break;
  }
}
</code></pre>
`;export{n as attributes,e as html};
