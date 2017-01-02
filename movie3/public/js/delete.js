/**
 * Created by admin on 2016/5/26.
 */
$(function(){
    $("button[data-id]").click(function(){
        var btn=$(this);
        var id=$(this).attr("data-id");
        $.ajax({
            url:"/admin/delete?id="+id,
           type:"delete",
                success:function(data){
               btn.parent().parent().remove();

        }

        })
    })
})
