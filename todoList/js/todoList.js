{  load()
    function postaction() {
        let todoList = getData()
        let newToDo= $('#title').val()
        console.log(todoList)
        todoList.push({title:newToDo,done:false})
        setData(todoList)
        $('#title').val('')
        load()
    }


    function load() {
        let data =getData();
        $('ol,ul').empty()
       let todoCount=0
        let doneCount=0
        $.each(data,(i,n)=>{
            if(n.done){
                doneCount++
                $('#donelist').prepend("<li><input type='checkbox' checked='checked'><p>"+n.title+"</p><a href='javascript:;' id="+i+"></a> </li>")
            }else{
                $('#todolist').prepend("<li><input type='checkbox'><p>"+n.title+"</p><a href='javascript:;' id="+i+"></a> </li>")
                todoCount++
            }
        })
        $('#todocount').text(todoCount)
        $('#donecount').text(doneCount)
    }
    function getData() {
        let data = localStorage.getItem('todolists')
        if(data !==null){
            return JSON.parse(data)
        }else{
            return [ ];
        }
    }
    function setData(data) {
        localStorage.setItem("todolists",JSON.stringify(data))
    }
    //删除项目
    $('ol,ul').on('click','a',function () {
        let data=getData()
        let index=$(this).attr('id')
        data.splice(index,1)
        setData(data)
        load()

    })
    $('ol,ul').on('click','input',function () {
        let data = getData()
        let index=$(this).siblings('a').attr('id')
        data[index].done=$(this).prop('checked')
        setData(data)
        load()
    })
    function clear() {
        localStorage.clear('todolists')
        load()
    }
}