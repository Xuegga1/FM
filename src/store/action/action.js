import axios from 'axios'
function succ(list) {
    return {
        type: 'SUCC',
        list: list
    }
}
function add(item){
  return{
    type:'ADD',
    item:item,
 
  }
}
function detalist(){
    return (dispatch,getState)=>{
        axios.get('/list').then(res=>{
            dispatch(succ(res.data.list))
        })
    }
}
export {
    succ,detalist,add
}
