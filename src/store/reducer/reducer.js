var data={
    list:[],
    arrlist:[]
}
function counteRouter(state=data,action){
switch (action.type) {
    case 'SUCC':
        
        return{ ...state,list:action.list}
 
    case 'ADD':
        var newState=JSON.parse(JSON.stringify(state))
         newState.arrlist.find((item)=>{
            return item.id === action.id
        })
        newState.arrlist.push(action.item)
        // if(index!== -1){
        //     newState.list[index].num++
        // }else{
        //    
        // }
       
        return {...newState}
        
    default:
        return state;
}
}
export default counteRouter