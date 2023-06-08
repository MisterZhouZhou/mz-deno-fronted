<template>
  <el-container>
    <el-container>
      <el-aside class="chat-aside" width="260px">
        <div class="chat-title">当前聊天室人数{{ group.users.length }}</div>
        <div class="aside-line"></div>
        <div class="chat-user" v-for="(user, index) in group.users" :key="index">{{ user.userName }}</div>
      </el-aside>
      <el-main class="chat-main">
        <div class="chat-main-title">{{ group.groupName }}(当前用户: {{ group.currentUserName }})</div>
        <div class="chat-wrap">
          <div class="chat-list">
            <div v-for="(message, index) in group.messages" :key="index">
              <div v-if="!message.isMe" class="user-other">
                <img class="user-avatar" src="https://via.placeholder.com/48x48" />
                <div class="user-content">
                  <div class="user-name">{{ message.userName }}</div>
                  <div class="user-message">{{ message.message }}</div>
                </div>
              </div>
              <div v-if="message.isMe" class="user-me">
                <div class="user-content">
                  <div class="user-name">{{ message.userName }}</div>
                  <div class="user-message">{{ message.message }}</div>
                </div>
                <img class="user-avatar" src="https://via.placeholder.com/48x48" />
              </div>
            </div>
          </div>
          <div class="chat-input">
            <el-input v-model="group.input" maxlength="30" placeholder="请输入消息" show-word-limit type="textarea" />
            <el-button type="primary" class="chat-send" @click="send">发送消息</el-button>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
  <el-dialog v-model="showDialog" title="选择聊天分组">
    <el-radio-group v-model="radioObj.selected" :style="{ display: 'grid' }" @change="radioChange">
      <el-radio v-for="(title, index) in radioObj.arr" :key="index" :label="index">{{ title }}</el-radio>
    </el-radio-group>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router'

// socket
let socket: WebSocket;
const router = useRouter()
const route = useRoute()

interface IUser {
  userId: string // id
  userName: string // 姓名
}

interface IMessage {
  userId: string // userId
  userName: string // 姓名
  message: string // 消息内容
  isMe?: boolean // 是否为当前用户
}

// 弹窗
const showDialog = ref(false)
const radioObj = reactive({
  selected: -1,
  arr: ['JavaScript', 'TypeScript', 'NodeJS', 'Deno']
})

const group = reactive({
  groupName: '',
  currentUserName: route.query.name || 'mz',
  users: Array<IUser>(),
  messages: Array<IMessage>(),
  input: ''
})

// 路由重定向
if (!route.query.name) {
  router.replace('/chat?name=mz')
}

function initSocket() {
  socket = new WebSocket(
    `${import.meta.env.VITE_APP_WEBSOCKET}/ws`,
  );
  socket.onopen = onConnectionOpen
  socket.onmessage = onMessageReceived
}

const onConnectionOpen = () => {
  // 展示群里分组
  showDialog.value = true
}

const onMessageReceived = (msg: MessageEvent) => {
  const data = typeof msg.data === 'string' ? JSON.parse(msg.data) : msg.data;
  switch (data.event) {
    case 'users':
      group.users = data.data;
      break;
    case 'messages':
      group.messages.push(data.data);
      break;
    default:
      break;
  }
}

//  radio
function radioChange(val: number) {
  radioObj.selected = val
  showDialog.value = false

  const groupName = radioObj.arr[val]
  group.groupName = groupName
  const event = {
    event: 'join',
    groupName: radioObj.arr[val],
    userName: group.currentUserName
  }
  socket.send(JSON.stringify(event))
}

// send msg
function send() {
  const event = {
    event: 'message',
    data: group.input
  }
  socket.send(JSON.stringify(event))
  // 清除输入框内容
  group.input = ''
}

// 初始化socket
initSocket()

</script>

<style lang="less">
@bg-color: rgba(0,0,0,0.7);
.chat-header {
  background-color: @bg-color;
}

.chat-aside {
  height: 100vh;
  background-color: @bg-color;
  box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.44);
  .chat-title {
    color: #fff;
    padding: 10px 0;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }
  .aside-line {
    height: 1px;
    background-color:  rgba(0, 0, 0, 0.25);
  }
  .chat-user {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    text-align: center;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.chat-main {
  padding: 0;
  position: relative;
  height: 100vh;
  .chat-main-title {
    height: 34px;
    color: #fff;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: 500;
    background-color: @bg-color;
  }
  .chat-wrap {
    background-color: #DFD7D7;
    height: calc(100vh - 54px);
  }
  .chat-list {
    padding: 30px 20px;
    background-color: #DFD7D7;
    height: calc(100vh - 54px - 150px);
    overflow: auto;
    .user-avatar {
      border-radius: 50%;
      width: 48px;
      height: 48px;
    }
    .user-content {
      display: flex;
      flex-direction: column;
      .user-name {
        font-size: 16px;
        font-weight: 500;
      }
      .user-message {
        padding: 15px;
        border-radius: 6px;
        font-size: 14px;
        max-width: 600px;
        margin-top: 8px;
      }
    }
    .user-other {
      display: flex;
      margin-bottom: 10px;
      .user-content {
        margin-left: 18px;
        .user-message {
          background-color: #fff;
          color: rgba(0,0,0,0.6);
        }
      }
    }
    .user-me {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 10px;
      .user-content {
        margin-right: 18px;
        .user-name {
          text-align: right;
        }
        .user-message {
          background-color: #008000;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  .chat-input {
    position: absolute;
    bottom: 20px;
    right: 20px;
    left: 20px;
    display: flex;
    align-items: center;
    .chat-send {
      height: 52px;
      margin-left: 20px;
    }
  }
}
</style>