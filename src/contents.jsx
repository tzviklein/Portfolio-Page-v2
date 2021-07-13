class MainSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            size: window.matchMedia("(min-width: 1100px)").matches ? 'desktop' : 'mobile',
        }
        this.handleResize = this.handleResize.bind(this)
    }

    handleResize() {
        if (window.matchMedia("(min-width: 1100px)").matches && this.state.size === 'mobile') {
            this.setState({
                size: 'desktop'
            });console.log("hi");sideScrollStarter();
        } else if (window.matchMedia("(max-width: 1100px)").matches && this.state.size === 'desktop') {
            this.setState({
                size: 'mobile'
            })
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    
    render() {
        const screenSize = this.state.size;
        return (
            <div>
                {screenSize === 'desktop' ? (
                <div id="rotatedWrapper">
                    <div className="fold foldTop">
                        <div className="foldAlign">
                            <div className="foldContent">
                                <Contents/>
                            </div>
                        </div>
                    </div>
                    <div className="fold foldCenter" id="centerFold">
                        <div className="foldAlign">
                            <div className="foldContent" id="centerContent">
                                <Contents/>
                            </div>
                        </div>
                    </div>
                    <div className="fold foldBottom">
                        <div className="foldAlign">
                            <div className="foldContent">
                                <Contents/>
                            </div>
                        </div>
                    </div>
                </div>) : null}
                {screenSize === 'mobile' ? <Contents /> : null}
            </div>
        )
    }
}

class Contents extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="wrap">
                <div className="counterRotated">
                    <div id="home" className="section">
                        {/* <div className="padding">filter="url(#shadow)"</div> url(#img1)stroke="yellow" strokeWidth="10"stroke="red" stroke-width="5" */}
                        <div id="picBox">
                        <svg viewBox="0 0 800 580">
                            <defs>
                                <pattern id="img1" patternUnits="userSpaceOnUse" width="800" height="580">
                                    <image href="https://github.com/tzviklein/stuff/blob/main/WIN_20200213_16_06_17_Pro.jpg?raw=true" x="0" y="0" width="800" height="580" />
                                </pattern>
                                <filter id="blur">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
                                </filter>
                            </defs>
                            <path id="shadow" d="
                                M 100 290
                                Q 100 50 400 50
                                Q 700 50 700 290
                                Q 700 530 400 530
                                Q 100 530 100 290" fill="blue" filter="url(#blur)" />
                            <path id="topCurve" d="
                                M 180 290
                                Q 180 130 400 130
                                Q 620 130 620 290" fill="transparent" />
                            <path id="myPathImg" d="
                                M 200 290 
                                Q 200 150 400 150 
                                Q 600 150 600 290 
                                Q 600 430 400 430 
                                Q 200 430 200 290" fill="url(#img1)" stroke="red" strokeWidth="1px" />
                            <path id="bottomCurve" d="
                                M 150 290
                                Q 150 480 400 480 
                                Q 650 480 650 290" fill="transparent" /> textLength="200" startOffset="0" lengthAdjust="spacingAndGlyphs"
                            <text >
                                <textPath href="#topCurve" startOffset="100" >TZVI</textPath>
                                <textPath href="#topCurve" textLength="200" startOffset="510" lengthAdjust="spacingAndGlyphs" textAnchor="end">KLEIN</textPath>
                                <textPath href="#bottomCurve" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WEB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DEVELOPER</textPath>
                            </text>
                        </svg>
                        </div>
                        {/* <h1 className="textShadow">TZVI KLEIN</h1>
                        <img id="myImg" src="https://github.com/tzviklein/stuff/blob/main/WIN_20200213_16_06_17_Pro.jpg?raw=true" alt="a very handsome programmer"></img>
                        <h1>WEB DEVELOPER</h1> */}
                    </div>
                </div>
                <hr class="divider"/>
                <div className="counterRotated">
                    <div id="about" className="section">
                    <div className="padding"></div>
                        <div id="circle">
                            <p>Hi! My name is Tzvi Klein.<br />
                            I am a talmudical scholar and a self-taught computer Programmer looking for his first job in web development.<br />
                            My skills include:</p>
                        </div>
                        {/* <hr className="line"/> */}
                        <div id="skillBox">
                            <ul id="skills">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>SASS</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>JQuery</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <hr class="divider"/>
                <div className="counterRotated">
                    <div id="portfolio" className="section">
                    <div className="padding"></div>
                        <p>Here is some projects I have made:</p>
                        <div className="smallPadding"></div>
                        <hr className="line"/>
                        <div id="projects">
                            <div class="projectBorder">
                                <a href="https://codepen.io/tzvi/full/ZdxXYK"><img class="projectThumbnail" src="https://codepen.io/tzvi/pen/ZdxXYK/image/small.png" /></a>
                                <p class="projectDescription">Tetris Game:<br />made with HTML, CSS<br />and javascript.</p>
                            </div>
                            <div class="projectBorder">
                                <a href="https://codepen.io/tzvi/full/YLoNqd"><img class="projectThumbnail" src="https://codepen.io/tzvi/pen/YLoNqd/image/small.png" />
                                </a>
                                <p class="projectDescription">Tribute Page:<br />made with HTML and CSS.</p>
                            </div>
                            <div class="projectBorder">
                                <a href="https://codepen.io/tzvi/full/pKERzj"><img class="projectThumbnail" src="https://codepen.io/tzvi/pen/pKERzj/image/small.png" /></a>
                                <p class="projectDescription">Survey Form:<br />made with HTML and CSS.</p>
                            </div>
                            <div class="projectBorder">
                                <a href="https://codepen.io/tzvi/full/eLYyEz"><img class="projectThumbnail" src="https://codepen.io/tzvi/pen/eLYyEz/image/small.png" /></a>
                                <p class="projectDescription">Landing Page:<br />made with HTML and CSS.</p>
                            </div>
                            <div class="projectBorder">
                                <a href="https://codepen.io/tzvi/full/LJREKK"><img class="projectThumbnail" src="https://codepen.io/tzvi/pen/LJREKK/image/small.png" /></a>
                                <p class="projectDescription">Technical Documentation Page:<br />made with HTML and CSS.</p>
                            </div>
                            <div class="projectBorder">
                                <a href="https://codepen.io/tzvi/full/gOPRPGO"><img class="projectThumbnail" src="https://codepen.io/tzvi/pen/gOPRPGO/image/small.png" /></a>
                                <p class="projectDescription">Random Quote Generator:<br />made with HTML, CSS<br />and javascript.</p>
                            </div>
                            <div class="projectBorder">
                                <a href="https://codepen.io/tzvi/full/rNxpzRe"><img class="projectThumbnail" src="https://codepen.io/tzvi/pen/rNxpzRe/image/small.png" /></a>
                                <p class="projectDescription">Markdown Previewer:<br />made with React.</p>
                            </div>
                            <div class="projectBorder">
                                <a href="https://codepen.io/tzvi/full/dyGqvjQ"><img class="projectThumbnail" src="https://codepen.io/tzvi/pen/dyGqvjQ/image/small.png" /></a>
                                <p class="projectDescription">Drum Machine:<br />made with React.</p>
                            </div>
                            <div class="projectBorder">
                                <a href="https://codepen.io/tzvi/full/LYGoPqy"><img class="projectThumbnail" src="https://codepen.io/tzvi/pen/LYGoPqy/image/small.png" /></a>
                                <p class="projectDescription">Calculator:<br />made with React.</p>
                            </div>
                            <div class="projectBorder">
                                <a href="https://codepen.io/tzvi/full/yLOYoxG"><img class="projectThumbnail" src="https://codepen.io/tzvi/pen/yLOYoxG/image/small.png" /></a>
                                <p class="projectDescription">Pomodoro Clock:<br />made with React.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="divider"/>
                <div className="counterRotated">
                    <div id="contact" className="section">
                        <div className="padding"></div>
                        <p>You can email me at:<br /><br />
                        <a href="mailto:tkof1988@gmail.com?subject=mail%20from%20my%20page" class="myEmail">tkof1988@gmail.com</a><br /><br />
                        <a href="https://github.com/tzviklein"><i class="fa fa-github contactIcons"></i></a><br /><br />
                        <a href="https://codepen.io/tzvi"><i class="fa fa-codepen contactIcons"></i></a><br /><br />
                        <a href="https://www.freecodecamp.org/tzvi"><i class="fa fa-free-code-camp contactIcons"></i></a> </p>
                        <p id="foot">Backgrounds provided by <a href="https://www.vecteezy.com/free-vector/web">Web Vectors by Vecteezy</a></p>
                    </div>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<MainSection />, document.getElementById('mainSection'));

//  document.getElementById("topCurve").setAttribute("d", "M 0 200 L 3000 200") : document.getElementById("topCurve").setAttribute("d", " M 580 400 Q 580 200 880 200 Q 1180 200 1180 400")
                        
// content side scrolling
// let desktopSize = window.matchMedia("(min-width: 1100px)").matches ? true : false;
// let linkCheck = false;
// let centerContent = document.getElementById("centerContent");
// let centerFold = document.getElementById("centerFold");console.log(foldsContent[0])console.log(currentScroll)
let mainSectionWidth = document.getElementById("mainSection").clientWidth * 0.949;
// window.addEventListener('resize', () => {
//     let oldSize = desktopSize;
//     desktopSize = window.matchMedia("(min-width: 1100px)").matches ? true : false;
//     console.log(mainSectionWidth)
//     console.log(desktopSize, oldSize)
// })

function sideScrollStarter() {
    let foldsContent = Array.from(document.getElementsByClassName("foldContent"));
    let targetScroll = -(
    document.documentElement.scrollTop || document.body.scrollTop
    );
    let currentScroll = targetScroll;
    let tick = () => {
        mainSectionWidth = document.getElementById("mainSection").clientWidth * 0.949;
        let overflowHeight = mainSectionWidth * 3//centerContent.clientHeight - centerFold.clientHeight;

        document.body.style.height = overflowHeight + window.innerHeight + "px";
        targetScroll = -(
            document.documentElement.scrollTop || document.body.scrollTop
        )

        currentScroll += (targetScroll - currentScroll) * 0.1;
        foldsContent.forEach(content => {
            content.style.transform = `translateX(${currentScroll}px)`;
        });
        requestAnimationFrame(tick);
    };
    tick();
}
sideScrollStarter();

// navbar link scrolling

function homeLink() {
    
    if (window.matchMedia("(min-width: 1100px)").matches) {
        document.documentElement.scrollTop = 0
    } else {
        document.getElementById("home").scrollIntoView(true)
    }
}

function aboutLink() {
    if (window.matchMedia("(min-width: 1100px)").matches) {
        document.documentElement.scrollTop = mainSectionWidth
    } else {
        document.getElementById("about").scrollIntoView(true)
    }
}

function projectsLink() {
    if (window.matchMedia("(min-width: 1100px)").matches) {
        document.documentElement.scrollTop = mainSectionWidth * 2
    } else {
        document.getElementById("portfolio").scrollIntoView(true)
    }
}

function contactLink() {
    if (window.matchMedia("(min-width: 1100px)").matches) {
        document.documentElement.scrollTop = mainSectionWidth * 3
    } else {
        document.getElementById("contact").scrollIntoView(true)
    }
}
