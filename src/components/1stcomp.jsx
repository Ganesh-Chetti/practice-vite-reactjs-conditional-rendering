import Com2 from "./2ndcomp";
import Com3 from "./3rdcomp";

var category="women clothing"
var res

// if(category=="men clothing"){
//     res=<Com2/>
// }else if(category=="women clothing" ){
//     res=<Com3/>
// }else{
//     res="No details"
// }

switch (category) {
    case "men clothing":
        rea=<Com2/>
        break;
    case "women clothing":
        res=<Com3/>
        break;
    default:
        res="No details"
        break;
}
function Com1(){

    return(
        <>
        {/* {category=="men clothing"?<Com2/>:<Com3/>} */}
        {/* {category=="men clothing" && <Com2/>}
        {category=="women clothing" && <Com3/>} */}
        {res}
        </>
    )
}

export default Com1;