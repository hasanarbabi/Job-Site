
// job list
$.ajax({
    type: "GET",
    url: "https://api.jsonbin.io/b/608d7d2692cb9267d0c8fc72",
    success: function (res) {
        $(".cd").html(res["candidates"]);
        $(".jp").html(res["jobs-posted"]);
        $(".jf").html(res["jobs-filled"]);
        $(".cm").html(res["companies"]);
        $('.log').children('img').attr('src', res.jobs[0].img);
        $(".comp").html(res.jobs[0].company);
        $(".tit").html(res.jobs[0].title);
        $(".tm").html(res.jobs[0].posted);

        // $('.ax').children('img').attr('src', res.jobs[0].img);
        // $(".tp").html(res.jobs[0].type);
        // $(".loc").html(res.jobs[0].loc);
        // $(".sal").html(res.jobs[0].salary);

        for (i = 0; i < res.jobs.length; i++) {
            $(".tb").append('<tr><th class="col py-5 px-0"><a href="../pages/job details.html"><img src="' + res.jobs[i].img + '" alt=""></a></th><td class="col py-5 px-0"><span class="badge bg-secondary">' + res.jobs[i].type + '</span><h5 class="pt-3">' + res.jobs[i].title + '</h5><span class="text-muted">پست شده: </span><span>' + res.jobs[i].posted + '</span></td><td class="col-md-3 py-5 px-0"><h5>ایران</h5><span class="text-muted">' + res.jobs[i].loc + '</span></td><td class="col-md-3 py-5 px-0"><h5>' + res.jobs[i].company + '</h5><span>' + res.jobs[i].salary + '</span></td></tr>')
        };

        // pagination
        $(document).ready(function () {
            $('#data').after('<nav><ul class="pagination" id="nav"></ul></nav>');
            var rowsShown = 12;
            var rowsTotal = $('#data tbody tr').length;
            var numPages = rowsTotal / rowsShown;
            for (i = 0; i < numPages; i++) {
                var pageNum = i + 1;
                $('#nav').append('<li class="page-item"><a class="page-link" href="#" rel="' + i + '">' + pageNum + '</a></li>');
            }
            $('#data tbody tr').hide();
            $('#data tbody tr').slice(0, rowsShown).show();
            $('#nav li:first').addClass('active');
            $('#nav a').bind('click', function () {
                $('#nav li').removeClass('active');
                $(this).parent().addClass('active');
                var currPage = $(this).attr('rel');
                var startItem = currPage * rowsShown;
                var endItem = startItem + rowsShown;
                $('#data tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                    css('display', 'table-row').animate({ opacity: 1 }, 300);
            });
        });
    }
});

// about our team
$.ajax({
    type: "GET",
    url: "https://api.jsonbin.io/b/608d7c00d64cd16802a642af",
    success: function (res) {
        $('.ax1').children('img').attr('src', res[0].img);
        $('.ax2').children('img').attr('src', res[1].img);
        $(".n1").html(res[0].name);
        $(".n2").html(res[1].name);
        $(".po1").html(res[0].position);
        $(".po2").html(res[1].position);
        $(".de1").html(res[0].desc);
        $(".de2").html(res[1].desc);
    }
});

// blog
$.ajax({
    type: "GET",
    url: "https://api.jsonbin.io/b/608d7c7192cb9267d0c8fbe0",
    success: function (res) {
        for (i = 0; i < res.length; i++) {
            $(".blg").append('<div class="col-md-4 p-3"><img src="' + res[i].img + '" alt="" class="w-100 py-3 h-75"><h5 class="py-2 col-md-10">' + res[i].title + '</h5><span class="text-muted">' + res[i].posted + '</span><span class="text-muted px-2"> | </span><span class="text-primary">' + res[i].comments + '</span></div>')
        }

        // pagination
        $(document).ready(function () {
            $('.blg').after('<nav><ul class="pagination" id="nav"></ul></nav>');
            var rowsShown = 6;
            var rowsTotal = res.length;
            var numPages = rowsTotal / rowsShown;
            for (i = 0; i < numPages; i++) {
                var pageNum = i + 1;
                $('#nav').append('<li class="page-item"><a class="page-link" href="#" rel="' + i + '">' + pageNum + '</a></li>');
            }
            $('.blg div').hide();
            $('.blg div').slice(0, rowsShown).show();
            $('#nav li:first').addClass('active');
            $('#nav a').bind('click', function () {
                $('#nav li').removeClass('active');
                $(this).parent().addClass('active');
                var currPage = $(this).attr('rel');
                var startItem = currPage * rowsShown;
                var endItem = startItem + rowsShown;
                $('.blg div').css('opacity', '0.0').hide().slice(startItem, endItem).
                    css('display', 'table-row').animate({ opacity: 1 }, 300);
            });
        });
    }
});

// job details
$.ajax({
    type: "GET",
    url: "https://api.jsonbin.io/b/608d7cd88a409667ca02569c",
    success: function (res) {
        $(".cat").html(res.category);
        $(".gen").html(res.gender);
        $(".sal").html(res.salary);
        $(".loc").html(res.loc);
        $(".tp").html(res.type);
        $(".ex").html(res.experience);
        $(".sk").html('<span>' + res.skills[0] + ', </span>' + '<span>' + res.skills[1] + ', </span>' + '<span>' + res.skills[2] + ', </span>' + '<span>' + res.skills[3] + ', </span>' + '<span>' + res.skills[4] + '</span>');

        for (i = 0; i < res.similar.length; i++) {
            $(".tbs").append('<tr><th class="col py-5"><a href="../pages/job details.html"><img src="' + res.similar[i].img + '" alt=""></a></th><td class="col py-5"><span class="badge bg-secondary">' + res.similar[i].type + '</span><h5 class="pt-3">' + res.similar[i].title + '</h5><span class="text-muted">پست شده: </span><span>' + res.similar[i].posted + '</span></td><td class="col-md-3 py-5"><h5>ایران</h5><span class="text-muted">' + res.similar[i].loc + '</span></td><td class="col-md-3 py-5"><h5>' + res.similar[i].company + '</h5><span>' + res.similar[i].salary + '</span></td></tr>')
        };
    }
});