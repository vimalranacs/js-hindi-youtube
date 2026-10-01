let a =300


if(true) {
    let a = 20
    const b =20 
    console.log("Inner",a);

}

//  console.log(a);
// console.log(b);
// console.log(c);

function one(){
    username = "vimal"

    function two(){
        const wesbite = "vimalrana.com"
        console.log(username);
    }
    console.log(website);

    two()
}

one()