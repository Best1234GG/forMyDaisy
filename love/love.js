function clickbutton(){
    var click = document.getElementById('button');
    var text = document.getElementById('text')
    if (click){
        text.style.display = "inline-block";
        click.remove();
    }
}