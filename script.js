let filter=document.getElementById("filter");
filter.addEventListener("keyup",function(event){
    let text=event.target.value.toUpperCase();
    let mytable=document.getElementById("table");
    
    let tr=mytable.getElementsByTagName("tr")
    for(let i=1;i<tr.length;i++){
        let td=tr[i].getElementsByTagName('td')[0];
        if(td){
            let txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(text)>-1){
                tr[i].style.display="";
            }else{
                tr[i].style.display="none";
            }
        }
    }
});