export default class Foot {
    constructor(public element:HTMLElement) {
    }

    // 获取获取坐标的方法
    get x ():number {
       return this.element.offsetLeft
    }
    get y ():number {
        return this.element.offsetTop
     }

    // 切换位置
    change():void {
        const top = Math.round(Math.random() * 29) * 10
        const left = Math.round(Math.random() * 29) * 10

        this.element.style.top = top + 'px'
        this.element.style.left = left + 'px'
    }
}