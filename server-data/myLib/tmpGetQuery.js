let fs= require('fs');
let axios= require('axios');
let md5 = require('md5');

let tmpTime= 60 * 60;

let tmpGetQuery= (nameFile, url, res)=> {
	nameFile= `./tmp/${md5(nameFile)}.json`;
	url= encodeURI(url);
	fs.exists(nameFile, (exists)=>{
		if(exists){
			// Если файл существует - сравнить с текущей датой
			fs.stat(nameFile, (err, stats)=>{
				// Взять из кеша
				if(Date.now() / 1000 < (stats.mtime / 1000 + tmpTime)){

					fs.readFile(nameFile, 'utf8', (err, data) => {
						if (err) throw err;
						res.send(JSON.parse(data));
					});

				} else {
					// Запросить на сервере
					axios.get(url)
					.then((query)=>{
						res.send(query.data);
						fs.writeFile(nameFile, JSON.stringify(query.data), 'utf8', (err)=>{
							if (err) throw err;
						})
					})
					.catch((err)=>{

						fs.readFile(nameFile, 'utf8', (err, data) => {
							if (err) throw err;
							res.send(JSON.parse(data));
						});
						//console.log( err )
					})
				}
			})
		} else {
			// Если не существует создать
			axios.get(url)
			.then((query)=>{
				res.send(query.data);
				fs.writeFile(nameFile, JSON.stringify(query.data), 'utf8', (err)=>{ 
					if (err) throw err;
				})
			})
			.catch((err)=>{
				//console.log( err )
			})
		}
	})
}


module.exports= tmpGetQuery;