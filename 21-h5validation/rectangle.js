$(function(){
    //get dom elem
    var $width = $('#width'),
        $height = $('#height'),
        // $btn = $('#calculate'),
        $per = $('#per'),
        $form = $('form'),
        $area = $('#area');
    //event
    $form.submit(function(e){
        e.preventDefault();
        //get value
        var w = parseFloat($width.val()),
            h = parseFloat($height.val()); 
        
        //calculate
        var p = 2 * (w + h),
            a = w * h;

        //output
        // Math.round(p * Math.pow(10, 2)) / Math.pow(10, 2)
        $per.val(p);
        $area.val(a);
    });
});