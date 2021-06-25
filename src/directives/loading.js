import loadingUrl from '@/assets/loading.svg'
import styles from './loading.module.less'

function getLoadingImg(el) {
  return el.querySelector("img[data-role=loading]");
}

function createLoadingImg() {
  const img = document.createElement('img')
  img.dataset.role = 'loading'
  img.src = loadingUrl
  // img.className = styles.loading
  img.style = `
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `
  return img
}

export default function(el, binding) {
  const curImg = getLoadingImg(el)
  if(binding.value) {
    if(!curImg) {
      const img = createLoadingImg()
      el.appendChild(img)
    }
  } else {
    if(curImg) {
      // el.remove(curImg)
      curImg.remove()
    }
  }
}