var button=document.getElementById('counter');
button.onclick=function()
{
    
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
    if (request.readyState === XMLHttpRequest.DONE)
    {
        if (request.status ===200)
        {
            counter=request.responseText;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
            
        }
    }
    };
    request.open('GET','http://harsh2626.imad.hasura-app.io/counter',true);
    request.send(null);
        };
var nameinput=document.getElementById('name');
var name=nameinput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    var names=["harsha","Musk","whiteshadow"];
    var list='';
    for(i=0;i<names.length;i++)
        {
    list+='<li>'+names[i]+'</li'>;    
    }
    var ul=document.getElementById('names-ul');
    ul.innerHTML=list;
};
}
