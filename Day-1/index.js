// Java script day 1
var a = 10;
console.log(a); 
{
    var a = 20;
    {
        console.log(a); // 20
    }
}
{
    let a = 30;
    {
        console.log(a); // 30
    }
    
}
{
    const a = 40;
    {
        console.log(a); // 40
    }
}
{
    {
        console.log(b); // 20
    }
    const b = 20; // Hoisting does not apply to const
    {
        console.log(b); // 20
    }
}
{
    {
        let c = 10;
        console.log(c); // 10
    }
}
{
    {
        const d = 20;
        console.log(d); // 20
    }
}
function UserName () {
    var name = "John";
    console.log(name); 
    {
        var name = "Doe";
        console.log(name); 
    }
    console.log(name); 
}