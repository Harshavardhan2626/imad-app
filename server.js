var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles={
'article-one':{
    title:"Article one|Harsha",
    heading:"Article one",
    date:"2nd september 2017",
    content:" Chaos is a Ladder.So better climb it or bear the burden of supporting it!"
    
},
'article-two':{
    title:"Article Two|Harsha",
    heading:"Article two",
    date:"2nd september 2017",
    content:" This is the content for artocle 2!"
    
},
'article-three':{
title:"Article one|Harsha",
heading:"Article one",
date:"2nd september 2017",
content:" This is the content forr article three"

}
};

function createTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var date=data.date;

var template=`<html>
    <head>
        <title>${title} </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
            
            
        </div>
        <hr/>
        <h3>${heading}</h3>
        <div>${date}</div>
        <div>
            <p>
                ${content}
            </p>
        </div>
        </div>
    </body>
            
</html>
`;
return template;
}
    
    
app.get('/:articleName', function (req, res)
{
   var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
}
);






app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
