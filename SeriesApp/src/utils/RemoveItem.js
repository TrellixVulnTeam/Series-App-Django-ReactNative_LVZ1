
export default function RemoveItemArray(array, item_id){
    var new_array = [...array];

    for(var id in new_array){
        if(id === item_id){
            new_array.splice(array[item_id], 1);
        }
    }

    console.log(new_array);

    return new_array;
}