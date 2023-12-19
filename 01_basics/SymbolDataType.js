//Symbol explanation
//Symbol datatype is used to generate unique values of the types.
let id1=Symbol('Amit');
let id2=Symbol('Amit');
let id3='Amit';
let id4='Amit';
console.log(id3===id4);
console.log(id1==id2);

function countTrue(arr) {
	const map=new Map();
     console.log(map.size);
	for(const i in arr){
		if(map.has(arr[i])){
			map.set(arr[i],map.get(arr[i])+1);
		}else map.set(arr[i],1);
	}
	return map.size >0 ? map.get(true) : 0;
}
const ans=countTrue([true,true]);
console.log(ans);