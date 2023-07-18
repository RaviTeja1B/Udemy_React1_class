
/*
//This is one of the format of the calling the props.
function ProfileCard(props){
    return( 
    <div>
        <div>
            Title is {props.title}
        </div>
        <div>
            Handle is {props.handle}
        </div>
    </div>
    )
}
export default ProfileCard
*/

/*
//Thsi is the Second model to call the props;


function ProfileCard(props){
    const title=props.title;
    const handle=props.handle;
return(
    <div>
        <div>
          Title is {title} 
        </div>
        <div>
            handle is {handle}
        </div>

    </div>
)
}
export default ProfileCard;


*/


/*
//This is the third modal of the Props 
function ProfileCard(props){
    const{title, handle}=props
    return(
        <div>
             <div>
          Title is {title} 
        </div>
        <div>
            handle is {handle}
        </div>
        </div>
    )
    }
    export default ProfileCard;

    */


    //This is the fourth method to call the props
    function ProfileCard({title,handle,image}){
       // console.log(title,handle)
        return(
         <div>
            
            <img src={image}/>
            
             <div>
              Title is {title} 
            </div>
            <div>
                handle is {handle}
            </div>
        </div>
        )
        }
        export default ProfileCard;