const norm = function (arrow) {
	const returnVal = arrow();
	console.log(returnVal);
}

norm(()=>{
	const a= 1;
	console.log("this is inside callback");
	return a ;
})

