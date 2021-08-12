var guess=Math.floor(Math.random()*100)+1
function cal()
{
    if(document.getElementById('in').value == '')
    {
        document.getElementById('out').innerHTML= '<h2>Kindly enter a number</h2'
        return
    }
    var n=parseInt(document.getElementById('in').value)
    if(n === guess)
        document.getElementById('out').innerHTML='<h2>Bingo!! You got it correctly</h2>'
    else if(n>guess)
        document.getElementById('out').innerHTML='<h2>Guess a smaller number</h2>'
    else
        document.getElementById('out').innerHTML='<h2>Guess a greater number</h2>'
}