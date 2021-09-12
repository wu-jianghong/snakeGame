export default class Snake {
    /**
     * 蛇的身体
     */
    bodies: HTMLCollection

    /**
     * 蛇的头
     */
    head: HTMLElement

    constructor(
        /**
         * 蛇的容器
         */
        public reference: HTMLElement
    ) {
        this.bodies = this.reference.getElementsByTagName('div')
        this.head = this.bodies[0] as HTMLElement
    }


    /**
     * 头部的left数值
     */
    get x() {
        return this.head.offsetLeft
    }

    get y() {
        return this.head.offsetTop
    }


    /**
     * 设置头部的x坐标
     */
    set x(value) {
        this.head.style.left = value + 'px'
    }
    /**
     * 设置头部的y坐标
     */
    set y(value) {
        this.head.style.top = value + 'px'
        this.moveBody()
    }

    /**
     * 添加身体
     */
    addBody(): void {
       this.reference.insertAdjacentHTML('beforeend', '<div></div>')
    }


    moveBody() {
        for(let i = this.bodies.length - 1; i > 0; i--) {
            (this.bodies[i] as HTMLElement).style.top = (this.bodies[i - 1] as HTMLElement).offsetTop + 'px';
            (this.bodies[i] as HTMLElement).style.left = (this.bodies[i - 1] as HTMLElement).offsetLeft + 'px'
        }
    }
}