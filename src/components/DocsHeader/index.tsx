import { defineComponent, ref } from 'vue';
import styles from './index.module.less'

export default defineComponent({
  setup(_, { slots }) {
    const showVerticalMenu = ref(false)
    // 点击按钮展开菜单
    const onMenuClick = () => {
      showVerticalMenu.value = !showVerticalMenu.value
    }

    return () => (
      <header class={styles.docsHeader}>
        <nav class={styles.headerNav}>
          <div class={styles.title}>MZ Deno Api</div>
          <div class={styles.menu}>
            {slots.menu?.()}
          </div>
          <button onClick={onMenuClick} class={styles.menuIcon}>
            <span class={styles.iconBar}></span>
            <span class={styles.iconBar}></span>
            <span class={styles.iconBar}></span>
          </button>
        </nav>
        {
          showVerticalMenu.value && <div class={styles.verticalMenu}>
            {slots.menu?.()}
          </div>
        }
        <div class={styles.headerContainer}>
          {slots.default?.()}
        </div>
      </header>
    );
  }
})

