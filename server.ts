import { Application } from "https://deno.land/x/oak@v12.5.0/mod.ts"

const port = 9000
const app = new Application()

// 前端页面
app.use(async (ctx) => {
  await ctx.send({
    root: `${Deno.cwd()}/dist`,
    index: 'index.html'
  })
});

console.log(`service run at： http://localhost:${port}`);
await app.listen({ port })