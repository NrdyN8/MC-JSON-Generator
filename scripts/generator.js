$(function(){
    $("#generate").click(function(e){
        var modid = $("#modID").val()+":";
        var registryName = $("#registryName").val();
        var objectType = $('input[name=type]:checked', '#generatorForm').val();

        var itemType = "blocks"
        var itemParent = "block/cube_all"
        var textureType = "all"

        if(objectType == "item"){
            itemType = "items";
            itemParent = "builtin/generated";
        }


        var validate = function(){
            if(objectType != undefined) return true;
            if(registry)

            return false;
        }

        if(validate())
        {
            var blockstateObject = new Object();
            blockstateObject.variants = new Object();
            blockstateObject.variants.normal = new Object();
            blockstateObject.variants.normal.model = modid + registryName;
            // blockstateObject.type = objectType.val();
            $("#blockstate").html("<pre>" + JSON.stringify(blockstateObject, null, 2) + "</pre>");
            var blockmodelObject = new Object();
            blockmodelObject.parent = itemParent;
            blockmodelObject.textures = new Object();
            blockmodelObject.textures[textureType] = modid + itemType + "/" + registryName;
            $("#model").html("<pre>" + JSON.stringify(blockmodelObject, null, 2) + "</pre>");
        }
    });
});

