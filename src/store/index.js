
import { observable }from 'mobx';

var appState = observable({
    time: 0,
    change_time:function(){
        appState.time++
     }
});

export default appState;