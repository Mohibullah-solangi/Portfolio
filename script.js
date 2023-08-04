const sidenav =()=>{

    console.log("clicked")
    let nav = document.getElementById('mobile_list');
    
    if(nav.style.right == "46px"){
        nav.style.right = "-240px";
    }
    else{
        nav.style.right = "46px"
    }
    
}