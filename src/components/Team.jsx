import team from "../assets/team.png"

const Team = () => {
    return (
        <div>
            <img src={team} alt={"team"} style = {{position:'absolute' , top: 25, left: 100 , width: "100px" ,height:"40px"}}/>
        </div>
             
    )
}

export default Team;