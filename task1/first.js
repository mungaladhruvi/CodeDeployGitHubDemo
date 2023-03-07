 let data=[];
 let record = {'name':''};

    
    function add()
    {
       record['name']=document.getElementById('name').value;
       data.push({...record});
       console.log(data);
       show();
        
    
    }
    

    function show()
    {   let addnew = [];
         const notes = data.map((elem)=>{
          addnew += `${elem.name}`;
          console.log(addnew);
        });
     
        document.getElementById('showdata').innerHTML= addnew;
        document.getElementById('name').value='';
       
    }

    show();
    function edit()
    {
        document.getElementById('btn').innerHTML= "edit";
        a = document.getElementById('showdata').innerText;
        document.getElementById('name').value = a;
       
        // document.getElementById('showdata').innerHTML= a;
        
    }

    function cancle(){
        let a = data.map((elem , index)=>{
               elem.name;
        });
        
        data.splice(a, 1);
        show();
        
    }
    
  
     
