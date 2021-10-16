
export default function RemoveItemArray(array, item_id){
    var new_array = [...array];

    for(var id in new_array){
        if(new_array[id] === new_array[item_id]){
            new_array.splice(array[item_id], 1);
        }
    }

    return new_array;
}