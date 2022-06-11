
function reducer(currentValue, action) {

    let copyData = currentValue.slice();
    if (action.type == "add") {
        copyData.push(action.value);
        return copyData;
    }else if(action.type == "edit"){
        let i = action.index;
        copyData[i] = action.value;
        return copyData;
    }else if(action.type == "delete"){
        let i = action.index;
        copyData.splice(i,1);
        return copyData;
    }

}

export default reducer