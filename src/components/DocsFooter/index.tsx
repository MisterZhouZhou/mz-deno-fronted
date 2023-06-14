import styles from './index.module.less'

export default () => {
  return (
    <footer class={styles.footer}>
      <div class={styles.container}>
        <div class={styles.about}> 关于MZ Deno Api </div>
        <div>友情链接</div>
      </div>
      <div class={styles.copyRight}>
        <span>{`MZ Deno Api ${new Date().getFullYear()}© mz`}</span>
      </div>
    </footer>
  )
}