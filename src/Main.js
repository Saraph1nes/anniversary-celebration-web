import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/EndOfWorld.mp3' // 引入背景音乐文件
import url2 from './audio/EndOfWorld.mp3' // 引入背景音乐文件2
import './Main.css';

class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(2018, 3, 7) // 你们的纪念日
        }, 1000
        )
        var audio = document.getElementById("audio");
        var audio2 = document.getElementById("audio2");
        setTimeout(() => audio.play(), 8500) // 背景音乐在页面加载后，延迟播放的时长，单位：毫秒。
        setTimeout(() => audio2.play(),8500+2*1000*60+50*1000)
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            var div = document.getElementById('autotype');
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // html标签完整输出,如：<p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                    div.scrollTop = div.scrollHeight;
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 200)//打字时间200
            };
            // 延迟1s开始
            setTimeout(timer, 1000);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (<p>我们已经一起走过了: <span className="date-text">{d}</span> 天 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 分 <span className="date-text">{second}</span> 秒 </p>
                )
            }
        }
        return (
            <div className="App animated bounceInLeft">
                <div className="date">{date()}</div>
                <div id="split-bar"></div>
                <div className="main-text test test-5" id="autotype">
                    <h1 className="main-text-title" style={{fontWeight: 800}}>哈喽！陈小猪猪猪猪！</h1>
                    <p>在煽情开始之前，先放首你最爱的歌当背景音乐吧！Music!</p>
                    <p>今天是我们两周年的纪念日，从2018年3月7日到现在，我们一起经历了许许多多的事情，
                        有欢笑也有泪水，也曾因为一些事情大吵一架，但是我们都走过来了。</p>
                    <p>我们最初的相遇，因为一个偶然的机会,我加了你的好友。从那以后我们每天晚上都会一起连麦玩游戏，你说我技术好可以带你上分（不过后来没上去，我太难了），有空的时候我们也聊聊彼此的学校，分享一下自己的快乐和悲伤，就这样一直到了大一寒假。</p>
                    <p>在大年初三那天晚上，我约你去河边放炮，我还记得清清楚楚，你穿着红色的羽绒服，虽然没化妆却依然很好看。你说你喜欢放炮但是有点害怕，所以我握着你的手，带着你一起放完了一支彩竹筒，然后把剩下的烟火当作新年礼物送给了你。
                        站在一起的时候，闻着你头发上的清香，淡淡的，和火药味一起飘过来，我的心砰砰直跳。我想，这就是喜欢吧...
                        后来我们一起喝了奶茶，送你到小区门口的时候我问你还要送吗，你迟疑了一下说你马上就到家了让我也早点回去。(现在想想当时真的是太蠢了吧，直接表白拿下就好了！)</p>
                    <p>就这样寒假过去，一直到3.7号的晚上，你在上马原课，和我像往常一样聊着天。我在进行了很久的思想斗争之后，终于鼓起勇气给你表白了。我告诉你我喜欢你很久了，你说你也是(哈哈哈哈哈哈我其实早就猜到了)。于是我们幸福甜蜜的异地恋正式开始了...</p>
                    <p>还记得清明节的时候，我们第一次见面，像网恋奔现一样，忐忑不安，但是我们很快适应了。像相熟很久的恋人那样，走福道，去三坊七巷吃小吃、看电影...
                        三天很快就过去了，分别的时候你飞快转头跑掉，我知道你哭了，只是不想让我看见。
                        那时候我就下了决心“我夏宇轩，非陈羽竹不娶”。在异地的期间里，我们一起去过很多地方，留下过很多难忘的回忆。
                        有人说：“异地恋其实并不难坚持，因为它真实地考验了两个人的心”。是啊！我们异地经历的那些事，让我们能够看清对方的真心，也让我们的感情更加深厚。</p>
                    <p>我不善于文字表达，写这一个网页和说那么多话也就想表达“我爱你”这简单的三个字而已，说煽情一点就是：“我的心室是单人间，只住得下你一人！”
                        </p>
                    <p>最后祝陈小猪同学两周年纪念日快乐呀！要天天开心！往后的一年很重要，我们一起加油！</p>
                    <div style={{ textAlign: 'right' }}>
                        <p>爱你的♥夏宇轩</p>
                        <p>2020年3月7日</p>
                    </div>
                </div>
                <audio id="audio" src={url}></audio>
                <audio id="audio2" src={url2}></audio>
            </div>
            
        )
    }
}
export default Main