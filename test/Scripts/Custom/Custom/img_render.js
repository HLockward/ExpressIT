$.fn.imgRender = function (target) {


    $(this).change(function () {
        var allowedFiles = [".png", ".jpg"];
        var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(" + allowedFiles.join('|') + ")$");
        if (!regex.test($(this).val().toLowerCase())) {
            alert("Archivo invalido");
            $(this).val("")
            return false;
        }
        if (this.files && this.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.' + target).attr('src', e.target.result);
            }

            reader.readAsDataURL(this.files[0]);
        }
    });
}
