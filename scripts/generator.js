$(function(){
    $("#generate").click(function(e){
        var validated = true;
        var modid = $("#modID").val()+":";
        var unlocalizedName = $("#unlocalizedName");
        var registryName = $("#registryName");
        if(!unlocalizedName.val()){
            unlocalizedName.css("border", "solid 1px Red");
            validated = false;
        }
        if(validated)
        {
            var blockstateObject = new Object();
            blockstateObject.unlocalizedName = modid + unlocalizedName;
            blockstateObject.registryName = modid + registryName;
            $("#blockstate").text(JSON.stringify(blockstateObject));
        }
    });
});

