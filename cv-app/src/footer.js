import image from './GitHub-Mark-Light-32px.png'

function LowerThird() { 

    return (
        <div className="lowerThirdFoorter">
            <div className="nameField">Made by Luke Jennings 2022 </div>
            <a href='https://github.com/LukeJennings1'>
            <img src = {image} className="githubLogo"></img>
            </a>
        </div>
    )
}

export default LowerThird;