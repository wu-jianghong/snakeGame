import Foot from "./Foot";
import Snake from "./Snake";
import ScorePanel from './ScorePanel'

/**
 * GameCtrol 入参定义
 */
type GameCtrolOptions = {
    footEl: HTMLElement;
    snakeEl: HTMLElement;
    scoreEl: HTMLElement;
    levelEl: HTMLElement;
}

export default class GameCtrol {
    foot: Foot;
    snake: Snake;
    scorepanel: ScorePanel;
    /**
     * 行走的方向
     */
    duration: string = ""
    /**
     * 表示蛇是否活着
     */
    isLive:boolean = true
    constructor(options: GameCtrolOptions) {
        this.foot = new Foot(options.footEl)
        this.snake = new Snake(options.snakeEl)
        this.scorepanel = new ScorePanel(options.scoreEl, options.levelEl)

        this.init()
        this.run()
    }
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
    }

    /**
     * ArrowUp
     * ArrowDown
     * ArrowRight
     * ArrowLeft
     */
    keydownHandler(event: KeyboardEvent) {
        this.duration = event.key
    }

    run(): void {
        let x = this.snake.x
        let y = this.snake.y
        switch (this.duration) {
            case "ArrowUp":
                y -= 10
                break
            case "ArrowDown":
                y += 10
                break
            case "ArrowRight":
                x += 10
                break
            case "ArrowLeft":
                x -= 10
                break
        }

        this.snake.x = x
        this.snake.y = y

        this.checkEach()

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorepanel.level - 1) * 30);

    }
    /**
     * 检查是否迟到了食物
     */
    checkEach() {
        if (this.snake.x ===  this.foot.x && this.snake.y === this.foot.y) {
            // 分数增加
            this.scorepanel.addScore()
            // 增长蛇的身体
            this.snake.addBody()

            // 改变食物的位置
            this.foot.change()
        }

    }
}