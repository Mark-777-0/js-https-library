function EasyHTTP () {
    this.http = new XMLHttpRequest();
}



//Make an HTTP GET request
EasyHTTP.prototype.get = function (url, callback) {

    
    this.http.open('GET',url,true)

    this.http.onload = ()=> {
        //this keyword in different function
        if(this.http.status ===200){
            callback(this.http.responseText)
        }

    } 
    this.http.send()
}

//Make an HTTP POST request
EasyHTTP.prototype.post = function(url,data,callback){

    this.http.open('POST',url,true)
    this.http.setRequestHeader('Content-type','application/json')

    this.http.onload = () => {
        callback(null,self.http.responseText)
    }

    this.send(JSON.stringify(data))
}

//Make an HTTP PUT request
EasyHTTP.prototype.put = function(url,data,callback){

    this.http.open('PUT',url,true)
    this.http.setRequestHeader('Content-type','application/json')

    this.http.onload = () => {
        callback(null,self.http.responseText)
    }

    this.send(JSON.stringify(data))
}
//Make an HTTP GET request
EasyHTTP.prototype.delete = function (url, callback) {

    
    this.http.open('DELETE',url,true)

    this.http.onload = ()=> {
        //this keyword in different function
        if(this.http.status ===200){
            callback(this.http.responseText)
        } else{
            callback('error' + this.http.status)
        }

    } 
    this.http.send()
}
