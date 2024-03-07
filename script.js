function init (){
    let jinjaButton = document.getElementById("jinjaWikiButton");
    
    let coolVidButton = document.getElementById("coolVideoButton");

    let raftAfricaNavButton = document.getElementById("raftAfricaButton")

    let links = document.getElementsByTagName("a");

    jinjaButton.addEventListener("mouseover", event=>{
        event.target.style.color = "rgb(229 229 229)";
        event.target.style.textShadow = "4px 4px 4px #000000";
        
    })
    jinjaButton.addEventListener("mouseout", event => {
        event.target.style.color = "";
    })

    coolVidButton.addEventListener("mouseover", event=>{
        event.target.style.color = "rgb(229 229 229)";
        event.target.style.textShadow = "4px 4px 4px #000000";
        
    })
    coolVidButton.addEventListener("mouseout", event => {
        event.target.style.color = "";
    })

    raftAfricaNavButton.addEventListener("mouseover", event=>{
        event.target.style.color = "rgb(229 229 229)";
        event.target.style.textShadow = "4px 4px 4px #000000";
        
    })
    raftAfricaNavButton.addEventListener("mouseout", event => {
        event.target.style.color = "";
    })

    for (let i = 0; i < links.length; i++){
        links[i].addEventListener("mouseover", event => {
            event.target.style.textDecoration = "underline";
        });
        links[i].addEventListener("mouseout", event=>{
            event.target.style.textDecoration = "none";
        })
    }
}


