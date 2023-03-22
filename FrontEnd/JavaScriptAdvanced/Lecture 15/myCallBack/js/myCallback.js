// To get all the files within a specific library
fs.readdir(source, function (err, files) {
    if(err){
        console.log(`error finding files: ${err}`);
        return;
    }
files.forEach(function (fileName,fileIndex){
    console.log(fileName);
    gm(source+fileName).size(function (err, values){
        if (err){
            return;
        }
    }
})}