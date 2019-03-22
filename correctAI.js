fixAI();

function fixAI()
{
    fixTitle();   
    fixBody(document.body.children);
}

function fixTitle()
{
    document.title = document.title.replace("AI", "if statements" );
    document.title = document.title.replace("Ai", "if statements" );
    document.title = document.title.replace("ai", "if statements" );
    document.title = document.title.replace("Artificial Intelligence", "If Statements" );
    document.title = document.title.replace("Artificial intelligence", "If statements" );
    document.title = document.title.replace("artificial intelligence", "if statements" );
}

function fixBody(place)
{
    let c = place;
    let i;
    for (i = 0; i < c.length; i++)
    {        
        c[i].innerHTML = c[i].innerHTML.replace("AI", "if statements" );
        c[i].innerHTML = c[i].innerHTML.replace("Ai", "if statements" );
        c[i].innerHTML = c[i].innerHTML.replace("ai", "if statements" );
        c[i].innerHTML = c[i].innerHTML.replace("Artificial Intelligence", "If Statements" );
        c[i].innerHTML = c[i].innerHTML.replace("Artificial intelligence", "If statements" );
        c[i].innerHTML = c[i].innerHTML.replace("artificial intelligence", "if statements" );
        
        
        if (c[i].children.length > 0)
        {
            fixBody(c[i].children);
        }
    } 
}