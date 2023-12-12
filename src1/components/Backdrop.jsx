function Backdrop(props){
    //get a function to cancel the backdrop
    return <div className='backdrop' onClick={props.onClick}/>
}
export default Backdrop;