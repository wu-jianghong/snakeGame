export default class Score {
    score:number = 0;
    level:number = 1;
    constructor (
        public scoreEle:HTMLElement,
        public levelEle:HTMLElement,
        public maxLevel:number = 10
     ){}

    // 增加分数的方法
    addScore():void {
        this.scoreEle.innerText = <string>(++this.score as unknown)

        if(this.score % 10 === 0) {
            this.upLavel()
        }
    }
    // 提升等级的方法
    upLavel():void {
        if(this.level < this.maxLevel) {
            this.levelEle.innerText = <string>(++this.level as unknown)
        }   
    }
}