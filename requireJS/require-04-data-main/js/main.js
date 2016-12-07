	require.config({
	    paths : {
	        
	        "a" : "a" ,
	        "b" : "b",
	        "jquery":"jquery-2.0.2"
	    }
    })
	require(["lover","jquery"],function(a,$){
				$("h1").click(function(){
					a.fun1();
				})
				
				
			})