/*
    提示框组件
*/
export default {
  beforeMount(el, binding) {
    const lineNum = (binding && binding.value) || 1
    if (lineNum === 1) {
      el.style.whiteSpace = 'noWrap'
    }
    el.style.overflow = 'hidden'
  },

  updated(el, binding) {
    setTimeout(() => {
      let timerId
      if (!timerId) return
      clearTimeout(timerId)
      // 把内容放进 textSpan
      const textSpan = handleMultipleLine(el)
      // 1、如果 元素的整体宽度（包括溢出的）大于元素的布局宽度
      handleTip(el, binding, textSpan, 123)
      if (textSpan) {
        document.body.removeChild(textSpan)
      }
      window.onresize = () => {
        if (!timerId) return
        clearTimeout(timerId)
        const textSpan = handleMultipleLine(el)
        handleTip(el, binding, textSpan, timerId)
        if (textSpan) {
          document.body.removeChild(textSpan)
        }
      }
    }, 10)
  },

  mounted(el, binding) {
    // 加一个延时效果
    let timerId
    timerId && clearTimeout(timerId)
    // 把内容放进 textSpan
    let textSpan = handleMultipleLine(el)
    // 1、如果 元素的整体宽度（包括溢出的）大于元素的布局宽度
    handleTip(el, binding, textSpan, timerId)
    textSpan && document.body.removeChild(textSpan)
    window.onresize = () => {
      timerId && clearTimeout(timerId)
      let textSpan = handleMultipleLine(el)
      handleTip(el, binding, textSpan, timerId)
      textSpan && document.body.removeChild(textSpan)
    }
  },
  // 指令与元素解绑时,删除追加的dom
  unmounted() {
    const kxmTooltipDom = document.getElementById('kxm-tooltip')
    kxmTooltipDom && document.body.removeChild(kxmTooltipDom)
  }
}

// 多行情况下需要创建一个元素存储内容以获取内容宽度
function handleMultipleLine(el) {
  const curStyle = window.getComputedStyle(el, '')
  const textSpan = document.createElement('span')
  // 设置新容器的字体样式，确保与当前需要隐藏的样式相同
  textSpan.style.fontSize = curStyle.fontSize
  textSpan.style.fontWeight = curStyle.fontWeight
  textSpan.style.fontFamily = curStyle.fontFamily
  // 将容器插入body，如果不插入，offsetWidth为0
  document.body.appendChild(textSpan)
  // 设置新容器的文字
  textSpan.innerHTML = el.innerText
  return textSpan
}

// 处理提示框逻辑
function handleTip(el, binding, textSpan, timerId) {
  const lineNum = (binding && binding.value) || 1
  let actualWidth = ''
  if (lineNum == 1) {
    actualWidth = el.scrollWidth
  } else {
    actualWidth = textSpan.offsetWidth
  }

  if (lineNum == 2) {
    // console.log(actualWidth, el.offsetWidth * parseInt(lineNum), "123====2");
  }
  if (actualWidth > el.offsetWidth * parseInt(lineNum, 10)) {
    // 2、给当前元素设置省略号
    if (lineNum > 1) {
      el.style.whiteSpace = ''
      el.style.display = '-webkit-box'
      el.style['-webkit-box-orient'] = 'vertical'
      el.style['-webkit-line-clamp'] = lineNum
    } else {
      el.style.textOverflow = 'ellipsis'
    }

    // 3、鼠标移入，创建元素，内容为el的内容，追加到body
    el.onmouseenter = (e) => {
      timerId = setTimeout(() => {
        // 3-1创建浮层元素并设置样式
        const kxmTooltipDom = document.createElement('div')
        kxmTooltipDom.style.cssText = `
        display: inline-block;
        max-width: 400px;
        max-height: 400px;
        position: absolute;
        top: ${e.clientY + 5}px;
        left: ${e.clientX}px;
        padding: 10px;
        overflow: auto;
        font-size: 14px;
        line-height:20px;
        color: #fff;
        background: rgba(0, 0 , 0, .6);
        border-radius: 5px;
        z-index: 19999
      `
        // 3-2设置id方便寻找
        kxmTooltipDom.setAttribute('id', 'kxm-tooltip')
        // 3-3将浮层插入到body中
        document.body.appendChild(kxmTooltipDom)
        // 3-4浮层中的文字
        document.getElementById('kxm-tooltip').innerHTML = el.innerText
      }, 500)
    }
    // 4、鼠标移出，删除追加的dom
    el.onmouseleave = () => {
      const kxmTooltipDom = document.getElementById('kxm-tooltip')
      kxmTooltipDom && document.body.removeChild(kxmTooltipDom)
      if (timerId) {
        clearTimeout(timerId)
      }
    }
  }
}
