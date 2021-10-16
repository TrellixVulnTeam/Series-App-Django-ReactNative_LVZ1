export default function FindIndex(array, item){
    for(var id in array){
        if(array[id] === item){
            return id;
        }
    }
    return undefined
}