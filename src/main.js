import './style.css'

// 学習用: ボタンを押すとカードのクラスを切り替えて挙動を確認する
document.querySelector('#toggle')?.addEventListener('click', () => {
  document.querySelector('#card')?.classList.toggle('rotate-3')
})
