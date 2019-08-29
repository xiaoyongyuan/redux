import {POLICE_SELECT,LIST} from "./type";
export const policeSelect= police=> dispatch=>{
    dispatch({
        type: POLICE_SELECT,
        payload: police
      })
}
export const policelist=()=>dispatch=>{
    fetch("http://www.indo365.cn/infos")
    .then((response)=>{
        return response.json();
    })
    .then((myJson) =>{
        dispatch({
            type: LIST,
            payload: myJson
          })
    });
}