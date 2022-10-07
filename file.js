var arr=new Array(rows);
var rows=3;
var column=3;
for(var i=0;i<rows;i++)
{
    arr[i]=new Array(column);
}

//Input the array
for(var i=0;i<rows;i++)
    {
        for(var j=0;j<column;j++)
        {
            arr[i][j]=prompt();
        }
}


//Displaying the array
for(var i=0;i<rows;i++)
{
    for(var j=0;j<column;j++)
    {
        document.write(arr[i][j]+" ");
        
    }
    document.write("<br>");
}